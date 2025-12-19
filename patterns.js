const PATTERNS = [
    {
        "id": 1,
        "name": "パターン1",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 1, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 2,
        "name": "パターン2",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 2, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 3,
        "name": "パターン3",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 3, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 4,
        "name": "パターン4",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 4, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 5,
        "name": "パターン5",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 5, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 6,
        "name": "パターン6",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 6, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 7,
        "name": "パターン7",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 7, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 8,
        "name": "パターン8",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 8, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 9,
        "name": "パターン9",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 9, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 10,
        "name": "パターン10",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 10, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 11,
        "name": "パターン11",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 11, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 12,
        "name": "パターン12",
        "weight": 14,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 12, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 13,
        "name": "パターン13",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 1, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 14,
        "name": "パターン14",
        "weight": 4,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 2, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 15,
        "name": "パターン15",
        "weight": 4,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 3, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 16,
        "name": "パターン16",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 4, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 17,
        "name": "パターン17",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 5, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 18,
        "name": "パターン18",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 6, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 19,
        "name": "パターン19",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 7, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 20,
        "name": "パターン20",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 8, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 21,
        "name": "パターン21",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 9, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 22,
        "name": "パターン22",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 10, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 23,
        "name": "パターン23",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 11, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 24,
        "name": "パターン24",
        "weight": 5,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 12, "interval": 780 },
            { "type": "wait", "duration": 1000 }
        ]
    },
    {
        "id": 25,
        "name": "パターン25",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 1, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 26,
        "name": "パターン26",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 2, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 27,
        "name": "パターン27",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 3, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 28,
        "name": "パターン28",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 4, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 29,
        "name": "パターン29",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 5, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 30,
        "name": "パターン30",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 6, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 31,
        "name": "パターン31",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 7, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 32,
        "name": "パターン32",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 8, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 33,
        "name": "パターン33",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 9, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 34,
        "name": "パターン34",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 10, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 35,
        "name": "パターン35",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 11, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 36,
        "name": "パターン36",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 300 },
            { "type": "move", "count": 12, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 37,
        "name": "パターン37",
        "weight": 2,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 1, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 38,
        "name": "パターン38",
        "weight": 2,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 2, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 39,
        "name": "パターン39",
        "weight": 2,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 3, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 40,
        "name": "パターン40",
        "weight": 2,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 4, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 41,
        "name": "パターン41",
        "weight": 2,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 5, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 42,
        "name": "パターン42",
        "weight": 2,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 6, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 43,
        "name": "パターン43",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 7, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 44,
        "name": "パターン44",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 8, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 45,
        "name": "パターン45",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 9, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 46,
        "name": "パターン46",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 10, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 47,
        "name": "パターン47",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 11, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    },
    {
        "id": 48,
        "name": "パターン48",
        "weight": 1,
        "actions": [
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 50 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 12, "interval": 120 },
            { "type": "move", "count": 11, "interval": 300 },
            { "type": "move", "count": 12, "interval": 780 },
            { "type": "wait", "duration": 1200 },
            { "type": "move", "count": 24, "interval": 30 },
            { "type": "move", "count": 1, "interval": 600 }
        ]
    }
];