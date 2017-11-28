/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"sweetalert.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Card1',
                            symbolName: 'Card_1',
                            type: 'rect',
                            rect: ['5px', '7px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card11',
                            symbolName: 'Card_11',
                            display: 'none',
                            type: 'rect',
                            rect: ['-12px', '202px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card2',
                            symbolName: 'Card_2',
                            display: 'none',
                            type: 'rect',
                            rect: ['464px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card12',
                            symbolName: 'Card_12',
                            display: 'none',
                            type: 'rect',
                            rect: ['464px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card3',
                            symbolName: 'Card_3',
                            display: 'none',
                            type: 'rect',
                            rect: ['-12px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card13',
                            symbolName: 'Card_13',
                            display: 'none',
                            type: 'rect',
                            rect: ['107px', '202px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card4',
                            symbolName: 'Card_4',
                            display: 'none',
                            type: 'rect',
                            rect: ['107px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card14',
                            symbolName: 'Card_14',
                            display: 'none',
                            type: 'rect',
                            rect: ['226px', '303px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card5',
                            symbolName: 'Card_5',
                            display: 'none',
                            type: 'rect',
                            rect: ['464px', '303px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card15',
                            symbolName: 'Card_15',
                            display: 'none',
                            type: 'rect',
                            rect: ['226px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card6',
                            symbolName: 'Card_6',
                            display: 'none',
                            type: 'rect',
                            rect: ['345px', '202px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card16',
                            symbolName: 'Card_16',
                            display: 'none',
                            type: 'rect',
                            rect: ['107px', '303px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card7',
                            symbolName: 'Card_7',
                            display: 'none',
                            type: 'rect',
                            rect: ['345px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card17',
                            symbolName: 'Card_17',
                            display: 'none',
                            type: 'rect',
                            rect: ['107px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card8',
                            symbolName: 'Card_8',
                            display: 'none',
                            type: 'rect',
                            rect: ['464px', '202px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card18',
                            symbolName: 'Card_18',
                            display: 'none',
                            type: 'rect',
                            rect: ['226px', '202px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card9',
                            symbolName: 'Card_9',
                            display: 'none',
                            type: 'rect',
                            rect: ['345px', '0px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card19',
                            symbolName: 'Card_19',
                            display: 'none',
                            type: 'rect',
                            rect: ['226px', '101px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card10',
                            symbolName: 'Card_10',
                            display: 'none',
                            type: 'rect',
                            rect: ['-12px', '303px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Card20',
                            symbolName: 'Card_20',
                            display: 'none',
                            type: 'rect',
                            rect: ['345px', '303px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '400px', 'auto', 'auto'],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "inicio": 250
                    },
                    data: [
                        [
                            "eid521",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${Card7}",
                            '0',
                            '1'
                        ],
                        [
                            "eid124",
                            "top",
                            0,
                            18,
                            "linear",
                            "${Card1}",
                            '7px',
                            '0px'
                        ],
                        [
                            "eid163",
                            "top",
                            18,
                            33,
                            "linear",
                            "${Card1}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid505",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Card19}",
                            '0',
                            '1'
                        ],
                        [
                            "eid532",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Card14}",
                            'none',
                            'block'
                        ],
                        [
                            "eid527",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Card6}",
                            '0',
                            '1'
                        ],
                        [
                            "eid517",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${Card2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid519",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${Card18}",
                            '0',
                            '1'
                        ],
                        [
                            "eid523",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Card18}",
                            'none',
                            'block'
                        ],
                        [
                            "eid512",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Card19}",
                            'none',
                            'block'
                        ],
                        [
                            "eid507",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Card10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid536",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${Card20}",
                            '0',
                            '1'
                        ],
                        [
                            "eid538",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${Card8}",
                            '0',
                            '1'
                        ],
                        [
                            "eid531",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Card12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid524",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Card7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid496",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Card4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid543",
                            "display",
                            2000,
                            0,
                            "linear",
                            "${Card5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid509",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Card9}",
                            '0',
                            '1'
                        ],
                        [
                            "eid513",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Card9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid491",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Card3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid501",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Card15}",
                            'none',
                            'block'
                        ],
                        [
                            "eid486",
                            "opacity",
                            250,
                            500,
                            "linear",
                            "${Card1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid494",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Card11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid522",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Card16}",
                            'none',
                            'block'
                        ],
                        [
                            "eid515",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${Card16}",
                            '0',
                            '1'
                        ],
                        [
                            "eid540",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Card8}",
                            'none',
                            'block'
                        ],
                        [
                            "eid534",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Card12}",
                            'none',
                            'block'
                        ],
                        [
                            "eid529",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${Card14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid533",
                            "display",
                            1500,
                            0,
                            "linear",
                            "${Card6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid490",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Card17}",
                            '0',
                            '1'
                        ],
                        [
                            "eid500",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Card4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid499",
                            "display",
                            750,
                            0,
                            "linear",
                            "${Card11}",
                            'none',
                            'block'
                        ],
                        [
                            "eid498",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${Card15}",
                            '0',
                            '1'
                        ],
                        [
                            "eid492",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Card17}",
                            'none',
                            'block'
                        ],
                        [
                            "eid511",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Card13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid542",
                            "opacity",
                            2000,
                            500,
                            "linear",
                            "${Card5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid539",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Card20}",
                            'none',
                            'block'
                        ],
                        [
                            "eid510",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Card10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid488",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${Card3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid123",
                            "left",
                            0,
                            18,
                            "linear",
                            "${Card1}",
                            '5px',
                            '-19px'
                        ],
                        [
                            "eid131",
                            "left",
                            18,
                            33,
                            "linear",
                            "${Card1}",
                            '-19px',
                            '-12px'
                        ],
                        [
                            "eid503",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Card13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid525",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Card2}",
                            'none',
                            'block'
                        ],
                            [ "eid544", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card1}', [0] ] ],
                            [ "eid557", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card11}', [0] ] ],
                            [ "eid556", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card2}', [0] ] ],
                            [ "eid559", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card12}', [0] ] ],
                            [ "eid562", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card4}', [0] ] ],
                            [ "eid561", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card3}', [0] ] ],
                            [ "eid558", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card5}', [0] ] ],
                            [ "eid555", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card14}', [0] ] ],
                            [ "eid554", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card15}', [0] ] ],
                            [ "eid560", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card13}', [0] ] ],
                            [ "eid550", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card9}', [0] ] ],
                            [ "eid547", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card16}', [0] ] ],
                            [ "eid546", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card7}', [0] ] ],
                            [ "eid545", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card17}', [0] ] ],
                            [ "eid548", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card6}', [0] ] ],
                            [ "eid551", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card18}', [0] ] ],
                            [ "eid552", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card19}', [0] ] ],
                            [ "eid553", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card10}', [0] ] ],
                            [ "eid549", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card8}', [0] ] ],
                            [ "eid563", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${Card20}', [0] ] ]
                    ]
                }
            },
            "Card_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card3.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card4.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card6.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card7.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card8.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card9.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card10.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card11.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card12.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_13": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card13.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_14": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card14.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_15": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card15.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_16": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card16.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_17": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card17.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_18": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card18.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_19": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card19.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            },
            "Card_20": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: 'CardVirado',
                            opacity: '1',
                            rect: ['0px', '0px', '148px', '95px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/CardVirado.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0']],
                            rect: ['19px', '0px', '109px', '95px', 'auto', 'auto'],
                            display: 'none',
                            id: 'CardVazio',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Card20.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '148px', '95px']
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid233",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${CardVazio}",
                            '0',
                            '1'
                        ],
                        [
                            "eid234",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${CardVazio}",
                            '1',
                            '0'
                        ],
                        [
                            "eid228",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${CardVirado}",
                            '1',
                            '0'
                        ],
                        [
                            "eid236",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${CardVirado}",
                            '0',
                            '1'
                        ],
                        [
                            "eid231",
                            "display",
                            500,
                            0,
                            "linear",
                            "${CardVazio}",
                            'none',
                            'block'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("jogo_memoria_edgeActions.js");
})("EDGE-9095674");
