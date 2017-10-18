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
                            rect: ['10px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '113px', '56px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [
                        [
                            "eid38",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Botao}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Botao}",
                            '10px',
                            '10px'
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
                            rect: ['0px', '0px', '93px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,113,184,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '93px', '36px', 'auto', 'auto'],
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
                            text: '<p style=\"margin: 0px;\">​Botão</p>',
                            font: ['Verdana, Geneva, sans-serif', [21, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '0px', '93px', '36px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_desativado',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '93px', '36px', 'auto', 'auto'],
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
                            rect: [undefined, undefined, '93px', '36px'],
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
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao_edgeActions.js");
})("EDGE-2384955");
