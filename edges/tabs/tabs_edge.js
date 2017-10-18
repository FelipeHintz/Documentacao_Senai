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
                            id: 'Tabs',
                            symbolName: 'Tabs',
                            type: 'rect',
                            rect: ['10px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '256px', '320px', 'auto', 'auto'],
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
                            "eid30",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Tabs}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid29",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Tabs}",
                            '10px',
                            '10px'
                        ]
                    ]
                }
            },
            "Tabs": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '236px', '300px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'Fundo',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '236px', '86px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '0px 0px', '0px 0px'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,113,184,1.00)']
                        },
                        {
                            rect: ['16px', '16px', '204px', '25px', 'auto', 'auto'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['16px', '51px', '204px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Tab1',
                            text: '<p style=\"margin: 0px;\">​Tab1</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['16px', '51px', '204px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Tab2',
                            text: '<p style=\"margin: 0px;\">​Tab2</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: ['16px', '51px', '204px', '25px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Tab3',
                            text: '<p style=\"margin: 0px;\">​Tab3</p>',
                            align: 'right',
                            type: 'text'
                        },
                        {
                            rect: ['16px', '83px', '34px', '3px', 'auto', 'auto'],
                            id: 'Tabs',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '51px', '76px', '36px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'tab1',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['80px', '51px', '76px', '36px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'tab2',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['160px', '51px', '76px', '36px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            id: 'tab3',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['16', '186', '204', '16', 'auto', 'auto'],
                            id: 'conteudo_tab1',
                            display: 'block',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '204px', '16px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                id: 'Text3',
                                text: '<p style=\"margin: 0px;\">​Conteúdo 1</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['16', '186', '204', '16', 'auto', 'auto'],
                            id: 'conteudo_tab2',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '204px', '16px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                id: 'Text3Copy4',
                                text: '<p style=\"margin: 0px;\">​Conteúdo 2</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        },
                        {
                            rect: ['16', '186', '204', '16', 'auto', 'auto'],
                            id: 'conteudo_tab3',
                            display: 'none',
                            type: 'group',
                            c: [
                            {
                                rect: ['0px', '0px', '204px', '16px', 'auto', 'auto'],
                                textStyle: ['', '', '', '', 'none'],
                                font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', ''],
                                id: 'Text3Copy5',
                                text: '<p style=\"margin: 0px;\">​Conteúdo 3</p>',
                                align: 'center',
                                type: 'text'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '236px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    labels: {
                        "tab1": 0,
                        "tab2": 500,
                        "tab3": 1000
                    },
                    data: [
                        [
                            "eid25",
                            "display",
                            500,
                            0,
                            "linear",
                            "${conteudo_tab2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid26",
                            "display",
                            750,
                            0,
                            "linear",
                            "${conteudo_tab2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid23",
                            "display",
                            0,
                            0,
                            "linear",
                            "${conteudo_tab1}",
                            'block',
                            'block'
                        ],
                        [
                            "eid24",
                            "display",
                            250,
                            0,
                            "linear",
                            "${conteudo_tab1}",
                            'block',
                            'none'
                        ],
                        [
                            "eid27",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${conteudo_tab3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid28",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${conteudo_tab3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "linear",
                            "${Tabs}",
                            '16px',
                            '101px'
                        ],
                        [
                            "eid10",
                            "left",
                            500,
                            500,
                            "linear",
                            "${Tabs}",
                            '101px',
                            '186px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("tabs_edgeActions.js");
})("EDGE-6087977");
