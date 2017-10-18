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
                            id: 'Card2',
                            symbolName: 'Card',
                            type: 'rect',
                            rect: ['10px', '10px', 'undefined', 'undefined', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '256px', '158px', 'auto', 'auto'],
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
                            "eid3",
                            "left",
                            0,
                            0,
                            "linear",
                            "${Card2}",
                            '10px',
                            '10px'
                        ],
                        [
                            "eid4",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Card2}",
                            '10px',
                            '10px'
                        ]
                    ]
                }
            },
            "Card": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '236px', '138px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'Fundo',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['16px', '16px', '204px', '106px', 'auto', 'auto'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet <span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">ipsum dolor sit amet </span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">dolor&nbsp;</span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">sit </span><span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; color: rgb(0, 0, 0); background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '236px', '138px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("card_edgeActions.js");
})("EDGE-6087977");
