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
                            id: 'Botao',
                            symbolName: 'Botao',
                            type: 'rect',
                            rect: ['86px', '64px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Dialogo',
                            symbolName: 'Dialogo',
                            type: 'rect',
                            rect: ['10px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '256px', '164px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Dialogo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '236', '144', 'auto', 'auto'],
                            id: 'Grupo',
                            opacity: '1',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '236px', '144px', 'auto', 'auto'],
                                borderRadius: ['2px', '2px', '2px', '2px 2px'],
                                boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.65098)'],
                                id: 'Fundo',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['16px', '16px', '204px', '60px', 'auto', 'auto'],
                                id: 'Texto',
                                text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor.</p>',
                                font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                                type: 'text'
                            },
                            {
                                id: 'Botao',
                                symbolName: 'BotaoOK',
                                rect: ['86px', '92px', null, null, 'auto', 'auto'],
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '236px', '144px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 2500,
                    autoPlay: true,
                    labels: {
                        "Inicio": 1000,
                        "Final": 2000
                    },
                    data: [
                        [
                            "eid22",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${Grupo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            1000,
                            500,
                            "easeOutQuad",
                            "${Grupo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid31",
                            "scaleX",
                            2000,
                            500,
                            "easeOutQuad",
                            "${Grupo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid21",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Grupo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid24",
                            "opacity",
                            1000,
                            500,
                            "easeOutQuad",
                            "${Grupo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid30",
                            "opacity",
                            2000,
                            500,
                            "easeOutQuad",
                            "${Grupo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid23",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${Grupo}",
                            '1',
                            '0'
                        ],
                        [
                            "eid26",
                            "scaleY",
                            1000,
                            500,
                            "easeOutQuad",
                            "${Grupo}",
                            '0',
                            '1'
                        ],
                        [
                            "eid32",
                            "scaleY",
                            2000,
                            500,
                            "easeOutQuad",
                            "${Grupo}",
                            '1',
                            '0'
                        ]
                    ]
                }
            },
            "BotaoOK": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '64px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            fill: ['rgba(29,113,184,1.00)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)']
                        },
                        {
                            rect: ['0px', '0px', '64px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            opacity: '0',
                            id: 'Cor_acoes',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            font: ['Verdana, Geneva, sans-serif', [21, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">​OK</p>',
                            type: 'text',
                            rect: ['16px', '5px', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['0px', '0px', '64px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            opacity: '0',
                            id: 'Cor_desativado',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['0px', '0px', '64px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            id: 'Acao_mouse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '64px', '36px']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
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
                            "eid16",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            '64px',
                            '64px'
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
                            "eid15",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            '64px',
                            '64px'
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
                            "eid12",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${Cor_desativado}",
                            '0.000000',
                            '0.5'
                        ]
                    ]
                }
            },
            "Botao": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '83px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,113,184,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '83px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_acoes',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['16px', '5px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">​Abrir</p>',
                            font: ['Verdana, Geneva, sans-serif', [21, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '83px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_desativado',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '83px', '36px', 'auto', 'auto'],
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
                            rect: [undefined, undefined, '83px', '36px'],
                            overflow: 'visible'
                        }
                    }
                },
                timeline: {
                    duration: 1500,
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
                            "eid40",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${Cor_desativado}",
                            '83px',
                            '83px'
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
                            "eid39",
                            "width",
                            0,
                            0,
                            "easeOutQuad",
                            "${Cor_acoes}",
                            '83px',
                            '83px'
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
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("dialogo_edgeActions.js");
})("EDGE-10093115");
