document.addEventListener('DOMContentLoaded', () => {
    // === Elements ===
    const menuScreen = document.getElementById('menu-screen');
    const gameScreen = document.getElementById('game-screen');

    // Inputs & Menu
    const inputsArea = document.getElementById('inputs-area');
    const modeRadios = document.querySelectorAll('input[name="mode"]');
    const goBtn = document.getElementById('go-btn');

    // Game & Roulette
    const lampContainer = document.getElementById('lamp-container');
    const outerRing = document.querySelector('.outer-ring'); // 背景変更用
    const startBtn = document.getElementById('start-btn');
    const backBtn = document.getElementById('back-btn');
    const resultText = document.getElementById('result-text');

    // === State ===
    let currentMode = 2;
    let isSpinning = false;

    // 設定
    const MAPPINGS = {
        2: ['A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B', 'A', 'B'],
        3: ['A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C', 'A', 'B', 'C'],
        4: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D'],
        6: ['A', 'B', 'C', 'D', 'E', 'F', 'A', 'B', 'C', 'D', 'E', 'F']
    };

    // 背景用の少し暗い色 (RGBA 0.3程度)
    const DARK_COLORS = {
        A: 'rgba(255, 77, 77, 0.3)',
        B: 'rgba(0, 229, 255, 0.3)',
        C: 'rgba(255, 234, 0, 0.3)',
        D: 'rgba(0, 255, 102, 0.3)',
        E: 'rgba(255, 158, 64, 0.3)',
        F: 'rgba(213, 0, 249, 0.3)'
    };

    // ★追加: 凡例用の色定義 (CSS変数名)
    const COLOR_VARS = [
        'var(--color-A)',
        'var(--color-B)',
        'var(--color-C)',
        'var(--color-D)',
        'var(--color-E)',
        'var(--color-F)'
    ];

    // 演出パターン: patterns.js から読み込んだ Global変数 PATTERNS を使用


    // === 初期化 ===
    updateInputs(); // 初回の入力欄生成

    // === イベントリスナー: 画面遷移 ===

    // GOボタン: メニュー -> ゲーム
    goBtn.addEventListener('click', () => {
        // 画面切り替え
        menuScreen.classList.add('hidden');
        gameScreen.classList.remove('hidden');

        // === リセット処理 ===

        // 1. ランプを再生成して初期化
        initLamps();

        // 2. 前回の当たりハイライト（扇形）を消す
        const highlight = document.getElementById('winner-highlight');
        if (highlight) {
            highlight.classList.remove('active');
            highlight.style.transform = 'rotate(0deg)'; // 回転角度もリセット
        }

        // 3. テキストを空にする ("READY" は削除)
        resultText.innerText = "";

        // 4. 凡例 (Legend) の生成
        const legendArea = document.getElementById('legend-area');
        legendArea.innerHTML = ''; // クリア

        const count = parseInt(currentMode);
        const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

        for (let i = 0; i < count; i++) {
            // 入力値を取得
            const labelChar = labels[i];
            const inputEl = document.querySelector(`input[data-label="${labelChar}"]`);
            const text = inputEl ? (inputEl.value || `項目 ${labelChar}`) : `項目 ${labelChar}`;

            // 色を取得
            const colorVar = COLOR_VARS[i];

            // HTML要素作成
            const itemDiv = document.createElement('div');
            itemDiv.className = 'legend-item';

            // 色ドット
            const dot = document.createElement('div');
            dot.className = 'legend-dot'; // CSSクラス名 (.legend-dot) に合わせる
            dot.style.backgroundColor = colorVar;
            dot.style.color = colorVar; // box-shadow用

            // テキスト
            const span = document.createElement('span');
            span.innerText = text;

            itemDiv.appendChild(dot);
            itemDiv.appendChild(span);
            legendArea.appendChild(itemDiv);
        }
    });

    // BACKボタン: ゲーム -> メニュー
    backBtn.addEventListener('click', () => {
        if (isSpinning) return; // 回転中は戻れない
        gameScreen.classList.add('hidden');
        menuScreen.classList.remove('hidden');
    });

    // モード変更
    modeRadios.forEach(r => {
        r.addEventListener('change', (e) => {
            currentMode = e.target.value;
            updateInputs();
        });
    });

    // STARTボタン
    startBtn.addEventListener('click', () => {
        if (isSpinning) return;
        runRoulette();
    });


    // === ロジック関数 ===

    // 1. 入力欄生成
    function updateInputs() {
        inputsArea.innerHTML = '';
        const count = parseInt(currentMode);
        const labels = ['A', 'B', 'C', 'D', 'E', 'F'];

        for (let i = 0; i < count; i++) {
            const div = document.createElement('div');
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = `項目 ${labels[i]}`;
            input.dataset.label = labels[i];


            div.appendChild(input);
            inputsArea.appendChild(div);
        }
    }

    // 2. ランプ生成 (巨大化対応: %配置)
    function initLamps() {
        lampContainer.innerHTML = '';
        const radius = 48; // 親要素に対する%

        for (let i = 0; i < 12; i++) {
            const lamp = document.createElement('div');
            lamp.className = 'lamp-dot';
            lamp.id = `lamp-${i + 1}`;

            // 角度計算
            const angle = (i * 30) * (Math.PI / 180);
            const x = 50 + radius * Math.sin(angle);
            const y = 50 - radius * Math.cos(angle);

            lamp.style.left = `${x}%`;
            lamp.style.top = `${y}%`;

            // 色情報などを埋め込んでおく
            const label = MAPPINGS[currentMode][i];
            lamp.dataset.label = label;

            lampContainer.appendChild(lamp);
        }

        // 背景色(円グラフ)の更新
        updateBoardBackground();
    }

    // 背景更新用の関数
    function updateBoardBackground() {
        if (!outerRing) return;
        const map = MAPPINGS[currentMode];

        let segments = [];
        for (let i = 0; i < 12; i++) {
            const label = map[i];
            const color = DARK_COLORS[label] || 'rgba(50,50,50,0.5)';
            const startAngle = i * 30;
            const endAngle = (i + 1) * 30;
            segments.push(`${color} ${startAngle}deg ${endAngle}deg`);
        }

        const gradient = `conic-gradient(from -15deg, ${segments.join(', ')})`;
        outerRing.style.background = gradient;
    }

    async function runRoulette() {
        isSpinning = true;
        startBtn.disabled = true;
        backBtn.disabled = true;
        resultText.innerText = "CHANCE...";
        resultText.style.color = "#fff";

        // 前回のハイライトを消す
        const highlight = document.getElementById('winner-highlight');
        highlight.classList.remove('active');

        // 1. 当たりを決める
        const winnerId = Math.floor(Math.random() * 12) + 1;
        const winnerLamp = document.getElementById(`lamp-${winnerId}`);
        const winnerLabel = winnerLamp.dataset.label;
        const winnerIndex = winnerId - 1; // 0-11

        // 2. パターン取得 (重み付き抽選)
        let selectedPattern = PATTERNS[0];
        if (typeof PATTERNS !== 'undefined' && PATTERNS.length > 0) {
            const totalWeight = PATTERNS.reduce((sum, p) => sum + (p.weight || 1), 0);
            let r = Math.random() * totalWeight;
            for (const p of PATTERNS) {
                r -= (p.weight || 1);
                if (r < 0) {
                    selectedPattern = p;
                    break;
                }
            }
        }

        console.log("Selected Pattern:", selectedPattern.name);

        let commands = [];
        let totalSteps = 0;

        // 新しいAction構造 (move/wait) をパース
        if (selectedPattern.actions) {
            selectedPattern.actions.forEach(action => {
                if (action.type === 'move') {
                    for (let i = 0; i < action.count; i++) {
                        commands.push({ type: 'move', speed: action.interval });
                    }
                    totalSteps += action.count;
                } else if (action.type === 'wait') {
                    commands.push({ type: 'wait', duration: action.duration });
                }
            });
        } else if (selectedPattern.steps) {
            // 旧仕様フォールバック
            selectedPattern.steps.forEach(step => {
                if (step.type === 'loop' || step.type === 'step') {
                    totalSteps += step.count;
                    for (let i = 0; i < step.count; i++) commands.push({ type: 'move', speed: step.speed });
                } else if (step.type === 'wait') {
                    commands.push({ type: 'wait', duration: step.duration });
                }
            });
        }

        // 3. 補正計算
        const currentPos = 0;
        const targetPos = winnerIndex;
        const endPos = (currentPos + totalSteps) % 12;
        let diff = targetPos - endPos;
        if (diff < 0) diff += 12;
        for (let k = 0; k < diff; k++) commands.unshift({ type: 'move', speed: 40 });

        // 4. アニメーション実行
        let activeIndex = 0;
        const lamps = document.querySelectorAll('.lamp-dot');
        lamps.forEach(l => l.classList.remove('active'));

        for (const cmd of commands) {
            if (cmd.type === 'move') {
                lamps[activeIndex].classList.remove('active');
                activeIndex = (activeIndex + 1) % 12;
                lamps[activeIndex].classList.add('active');
                await new Promise(r => setTimeout(r, cmd.speed));
            } else {
                await new Promise(r => setTimeout(r, cmd.duration));
            }
        }

        // 5. 結果演出

        // エリアハイライトを表示
        const rotateDeg = winnerIndex * 30;
        highlight.style.transform = `rotate(${rotateDeg}deg)`;
        highlight.classList.add('active');

        // ランプの点滅
        const wLamp = lamps[activeIndex];
        for (let i = 0; i < 4; i++) {
            wLamp.classList.remove('active');
            await new Promise(r => setTimeout(r, 80));
            wLamp.classList.add('active');
            await new Promise(r => setTimeout(r, 80));
        }

        // 結果テキスト表示
        const inputEl = document.querySelector(`input[data-label="${winnerLabel}"]`);
        const resultString = inputEl ? (inputEl.value || winnerLabel) : winnerLabel;

        // テキスト色定義
        const textColors = { A: '#FF4D4D', B: '#00E5FF', C: '#FFEA00', D: '#00FF66', E: '#FF9E40', F: '#D500F9' };

        resultText.innerText = resultString;
        resultText.style.color = textColors[winnerLabel];

        isSpinning = false;
        startBtn.disabled = false;
        backBtn.disabled = false;
    }
});