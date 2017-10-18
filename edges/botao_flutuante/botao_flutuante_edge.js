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
                            id: 'Botao_flutuante',
                            symbolName: 'Botao_flutuante',
                            type: 'rect',
                            rect: ['10px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Botao_flutuante_branco',
                            symbolName: 'Botao_flutuante_branco',
                            type: 'rect',
                            rect: ['56px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Botao_flutuante_preto',
                            symbolName: 'Botao_flutuante_preto',
                            type: 'rect',
                            rect: ['102px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '148px', '56px', 'auto', 'auto'],
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
                            "eid61",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Botao_flutuante_preto}",
                            '102px',
                            '102px'
                        ],
                        [
                            "eid56",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Botao_flutuante}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid60",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Botao_flutuante_preto}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid58",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Botao_flutuante_branco}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid55",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Botao_flutuante}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid57",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Botao_flutuante_branco}",
                            '56px',
                            '56px'
                        ]
                    ]
                }
            },
            "Botao_flutuante": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            fill: ['rgba(29,113,184,1.00)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)']
                        },
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            opacity: '0',
                            id: 'Cor_acoes',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            rect: ['5px', '6px', '25px', '24px', 'auto', 'auto'],
                            id: 'ic_check_24px-02',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ic_check_24px-02.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            opacity: '0',
                            id: 'Cor_desativado',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            id: 'Acao_mouse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'visible',
                            rect: [null, null, '36px', '36px']
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
                            "eid49",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid45",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
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
                            "eid47",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid48",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
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
                            "eid52",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid50",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid44",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
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
                            "eid51",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            '36px',
                            '36px'
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
                            "eid46",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Botao_flutuante_branco": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_acoes',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'ic_check_24px-01',
                            type: 'image',
                            rect: ['6px', '6px', '24px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ic_check_24px-01.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_desativado',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
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
                            rect: [undefined, undefined, '36px', '36px'],
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
                            "eid49",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid50",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid51",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid47",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid48",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
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
                            "eid52",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid45",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid44",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
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
                            "eid46",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Botao_flutuante_preto": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.75)'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_acoes',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(255,255,255,1)']
                        },
                        {
                            id: 'ic_check_24px-02',
                            type: 'image',
                            rect: ['5px', '6px', '25px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ic_check_24px-02.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            id: 'Cor_desativado',
                            opacity: '0',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['0px', '0px', '36px', '36px', 'auto', 'auto'],
                            borderRadius: ['500px', '500px', '500px', '500px 500px'],
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
                            rect: [undefined, undefined, '36px', '36px'],
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
                            "eid49",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid45",
                            "border-top-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
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
                            "eid47",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid43",
                            "border-bottom-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid48",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
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
                            "eid52",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            '36px',
                            '36px'
                        ],
                        [
                            "eid50",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_desativado}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid44",
                            "border-top-left-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
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
                            "eid51",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            '36px',
                            '36px'
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
                            "eid46",
                            "border-bottom-right-radius",
                            0,
                            0,
                            "linear",
                            "${Cor_acoes}",
                            [500,500],
                            [500,500],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("botao_flutuante_edgeActions.js");
})("EDGE-2384955");
