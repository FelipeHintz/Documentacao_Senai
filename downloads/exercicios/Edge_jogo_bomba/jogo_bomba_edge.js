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
            js+"jquery-1.12.1.min.js",
            js+"jquery-ui.min.js"
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'sfgaerg-012',
                            type: 'image',
                            rect: ['75px', '11px', '450px', '213px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"sfgaerg-01.png",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['249px', '120px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​01:00</p>",
                            font: ['Arial, Helvetica, sans-serif', [30, "px"], "rgba(255,255,255,1.00)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'fpreto',
                            symbolName: 'fpreto',
                            type: 'rect',
                            rect: ['315px', '20px', '16', '69', 'auto', 'auto']
                        },
                        {
                            id: 'tPreto',
                            type: 'image',
                            rect: ['0px', '218px', '602px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tPreto.png",'0px','0px']
                        },
                        {
                            id: 'fvermelho',
                            symbolName: 'fvermelho',
                            type: 'rect',
                            rect: ['290px', '20px', '16', '69', 'auto', 'auto']
                        },
                        {
                            id: 'tVermelho',
                            type: 'image',
                            rect: ['0px', '218px', '602px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tVermelho.png",'0px','0px']
                        },
                        {
                            id: 'fverde',
                            symbolName: 'fverde',
                            type: 'rect',
                            rect: ['243px', '20px', '16', '69', 'auto', 'auto']
                        },
                        {
                            id: 'tVerde',
                            type: 'image',
                            rect: ['0px', '218px', '602px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tVerde.png",'0px','0px']
                        },
                        {
                            id: 'famarelo',
                            symbolName: 'famarelo',
                            type: 'rect',
                            rect: ['265px', '20px', '16', '69', 'auto', 'auto']
                        },
                        {
                            id: 'tAmarelo',
                            type: 'image',
                            rect: ['0px', '218px', '602px', '82px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"tAmarelo.png",'0px','0px']
                        },
                        {
                            id: 'btnVerifica',
                            symbolName: 'btnVerifica',
                            type: 'rect',
                            rect: ['277', '159', '23', '21', 'auto', 'auto']
                        },
                        {
                            id: 'Exploso_com_Som_-_Efeito_especial_para_filmes',
                            display: 'none',
                            type: 'video',
                            tag: 'video',
                            rect: ['-28px', '-72px', '674px', '379px', 'auto', 'auto'],
                            source: [vid+"Explos%C3%A3o%20com%20Som%20-%20Efeito%20especial%20para%20filmes.mp4"],
                            preload: 'auto'
                        },
                        {
                            id: 'Text2',
                            display: 'none',
                            type: 'text',
                            rect: ['59px', '85px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​A bomba explodiu!</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [54, "px"], "rgba(255,0,0,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
                        },
                        {
                            id: 'btnReinicia',
                            symbolName: 'btnReinicia',
                            display: 'none',
                            type: 'rect',
                            rect: ['238px', '180px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Rectangle',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '600px', '236px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.25)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Text2Copy',
                            display: 'none',
                            type: 'text',
                            rect: ['170px', '30px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Parabéns!</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [54, "px"], "rgba(255,214,103,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"],
                            textShadow: ["rgba(0,0,0,0.65098)", 3, 3, 3]
                        },
                        {
                            id: 'Text3',
                            display: 'none',
                            type: 'text',
                            rect: ['62px', '213px', 'auto', 'auto', 'auto', 'auto'],
                            opacity: '0',
                            text: "<p style=\"margin: 0px;\">​Você cortou o fio que corresponde aos cinco</p><p style=\"margin: 0px;\">elementos essenciais para a efetivação</p><p style=\"margin: 0px;\">do comprometimento.</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [21, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Rectangle3',
                            display: 'none',
                            type: 'rect',
                            rect: ['0px', '0px', '600px', '300px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,255,255,0.2471)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '300px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1.00)"]
                        }
                    }
                },
                timeline: {
                    duration: 5250,
                    autoPlay: true,
                    labels: {
                        "explode": 500,
                        "ganhou": 4750
                    },
                    data: [
                        [
                            "eid31",
                            "opacity",
                            3000,
                            500,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid44",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            4169,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid89",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid64",
                            "opacity",
                            4169,
                            331,
                            "linear",
                            "${btnReinicia}",
                            '0',
                            '1'
                        ],
                        [
                            "eid63",
                            "display",
                            4169,
                            0,
                            "linear",
                            "${btnReinicia}",
                            'none',
                            'block'
                        ],
                        [
                            "eid65",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${btnReinicia}",
                            'block',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            3000,
                            0,
                            "linear",
                            "${Text2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid46",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Text2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid21",
                            "display",
                            500,
                            0,
                            "linear",
                            "${Exploso_com_Som_-_Efeito_especial_para_filmes}",
                            'none',
                            'block'
                        ],
                        [
                            "eid43",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Exploso_com_Som_-_Efeito_especial_para_filmes}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Rectangle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid90",
                            "color",
                            5250,
                            0,
                            "linear",
                            "${Text3}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid83",
                            "color",
                            5250,
                            0,
                            "linear",
                            "${Text2Copy}",
                            'rgba(255,214,103,1.00)',
                            'rgba(255,214,103,1.00)'
                        ],
                        [
                            "eid80",
                            "left",
                            4500,
                            0,
                            "linear",
                            "${Text2}",
                            '59px',
                            '59px'
                        ],
                        [
                            "eid45",
                            "opacity",
                            4750,
                            500,
                            "linear",
                            "${Text2Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "display",
                            4750,
                            0,
                            "linear",
                            "${Text3}",
                            'none',
                            'block'
                        ],
                            [ "eid22", "trigger", 500, function executeMediaFunction(e, data) { this._executeMediaAction(e, data); }, ['play', '${Exploso_com_Som_-_Efeito_especial_para_filmes}', [0] ] ]
                    ]
                }
            },
            "fverde": {
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
                            display: 'none',
                            rect: ['-1px', '0', '18px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-113',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-11.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '16px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-062',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-06.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "clicando": 500
                    },
                    data: [
                        [
                            "eid1",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-113}",
                            'none',
                            'none'
                        ],
                        [
                            "eid2",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-113}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-062}",
                            'block',
                            'block'
                        ],
                        [
                            "eid3",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-062}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "famarelo": {
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
                            display: 'none',
                            rect: ['-1px', '0px', '19px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-103',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-10.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '16px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-052',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-05.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "clicando": 500
                    },
                    data: [
                        [
                            "eid5",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-103}",
                            'none',
                            'none'
                        ],
                        [
                            "eid6",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-103}",
                            'none',
                            'block'
                        ],
                        [
                            "eid7",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-052}",
                            'block',
                            'block'
                        ],
                        [
                            "eid8",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-052}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "fvermelho": {
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
                            display: 'none',
                            rect: ['-2px', '0px', '19px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-093',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-09.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '16px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-042',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-04.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "clicando": 500
                    },
                    data: [
                        [
                            "eid9",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-093}",
                            'none',
                            'none'
                        ],
                        [
                            "eid10",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-093}",
                            'none',
                            'block'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-042}",
                            'block',
                            'block'
                        ],
                        [
                            "eid11",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-042}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "fpreto": {
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
                            display: 'none',
                            rect: ['-1px', '0', '19px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-083',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-08.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '16px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-032',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-03.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "clicando": 500
                    },
                    data: [
                        [
                            "eid13",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-083}",
                            'none',
                            'none'
                        ],
                        [
                            "eid14",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-083}",
                            'none',
                            'block'
                        ],
                        [
                            "eid16",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-032}",
                            'block',
                            'block'
                        ],
                        [
                            "eid15",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-032}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "fazul": {
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
                            display: 'none',
                            rect: ['-2px', '0px', '19px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-073',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-07.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            display: 'block',
                            rect: ['0px', '0px', '16px', '69px', 'auto', 'auto'],
                            id: 'sfgaerg-022',
                            fill: ['rgba(0,0,0,0)', 'images/sfgaerg-02.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '16px', '69px']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    labels: {
                        "clicando": 500
                    },
                    data: [
                        [
                            "eid17",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-073}",
                            'none',
                            'none'
                        ],
                        [
                            "eid18",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-073}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            0,
                            0,
                            "linear",
                            "${sfgaerg-022}",
                            'block',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            500,
                            0,
                            "linear",
                            "${sfgaerg-022}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "btnVerifica": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '23px', '21px', 'auto', 'auto'],
                            fill: ['rgba(212,11,11,1)'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.65098)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '23px', '21px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "Normal": 0,
                        "Mouse": 500,
                        "Pressionado": 1000
                    },
                    data: [
                        [
                            "eid40",
                            "width",
                            500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '23px',
                            '21px'
                        ],
                        [
                            "eid33",
                            "background-color",
                            0,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(212,11,11,1)',
                            'rgba(219,82,82,1.00)'
                        ],
                        [
                            "eid42",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Rectangle}",
                            'rgba(219,82,82,1)',
                            'rgba(162,11,11,1.00)'
                        ],
                        [
                            "eid39",
                            "left",
                            500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1px'
                        ],
                        [
                            "eid41",
                            "height",
                            500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '21px',
                            '19px'
                        ],
                        [
                            "eid38",
                            "top",
                            500,
                            500,
                            "linear",
                            "${Rectangle}",
                            '0px',
                            '1px'
                        ]
                    ]
                }
            },
            "btnReinicia": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            transform: [[], [], [], ['1.704']],
                            rect: ['0px', '0px', '125px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(65,106,168,1.00)']
                        },
                        {
                            transform: [[], [], [], ['1.704']],
                            rect: ['0px', '0px', '125px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_acoes',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['-34px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Verdana, Geneva, sans-serif', [21, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">Tentar novamente</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            transform: [[], [], [], ['1.704']],
                            rect: ['0px', '0px', '125px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_desativado',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            transform: [[], [], [], ['1.704']],
                            rect: ['0px', '0px', '125px', '36px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'Acao_mouse',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '125px', '36px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 4500,
                    autoPlay: false,
                    labels: {
                        "Normal": 0,
                        "Focado": 500,
                        "Pressionado": 1000,
                        "Desativado": 1500
                    },
                    data: [
                        [
                            "eid13",
                            "background-color",
                            1500,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            'rgba(0,0,0,1.00)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid60",
                            "width",
                            4169,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            '125px',
                            '125px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${Cor_acoes}",
                            '0.000000',
                            '0.25'
                        ],
                        [
                            "eid6",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Cor_acoes}",
                            '0.250000',
                            '0'
                        ],
                        [
                            "eid81",
                            "scaleX",
                            4500,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            '1.704',
                            '1.704'
                        ],
                        [
                            "eid82",
                            "scaleX",
                            4500,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            '1.704',
                            '1.704'
                        ],
                        [
                            "eid12",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Cor_desativado}",
                            '0.000000',
                            '0.5'
                        ],
                        [
                            "eid4",
                            "background-color",
                            500,
                            500,
                            "linear",
                            "${Cor_acoes}",
                            'rgba(255,255,255,1)',
                            'rgba(0,0,0,1.00)'
                        ],
                        [
                            "eid61",
                            "width",
                            4169,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            '125px',
                            '125px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("jogo_bomba_edgeActions.js");
})("EDGE-14771589");
