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
                            id: 'Card_titulo',
                            symbolName: 'Card_titulo',
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
                            "eid7",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Card_titulo}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid5",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Card_titulo}",
                            '10px',
                            '10px'
                        ]
                    ]
                }
            },
            "Card_titulo": {
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
                            rect: ['0px', '0px', '236px', '138px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '0px 0px', '0px 0px'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,113,184,1.00)']
                        },
                        {
                            rect: ['16px', '16px', '204px', '106px', 'auto', 'auto'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
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
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("card_titulo_edgeActions.js");
})("EDGE-6087977");
