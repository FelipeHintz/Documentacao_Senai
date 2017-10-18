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
                            id: 'Text',
                            type: 'text',
                            rect: ['16px', '18px', '225px', '283px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0);\">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. </span><span style=\"color: rgb(0, 0, 255); text-decoration: underline;\">Clique aqui.</span></p>",
                            align: "left",
                            font: ['Verdana, Geneva, sans-serif', [21, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Card_volta2',
                            symbolName: 'Card_volta',
                            display: 'none',
                            type: 'rect',
                            rect: ['11px', '10px', 'undefined', 'undefined', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'Rectangle5',
                            display: 'block',
                            type: 'rect',
                            rect: ['70px', '240px', '140px', '33px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Rectangle7',
                            display: 'none',
                            type: 'rect',
                            rect: ['19px', '22px', '32px', '32px', 'auto', 'auto'],
                            cursor: 'pointer',
                            opacity: '0',
                            fill: ["rgba(0,0,0,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
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
                    duration: 1750,
                    autoPlay: true,
                    labels: {
                        "abre_card1": 1000,
                        "fecha_card1": 1500
                    },
                    data: [
                        [
                            "eid14",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Card_volta2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1500,
                            0,
                            "linear",
                            "${Card_volta2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid15",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${Card_volta2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid12",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Card_volta2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            1250,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            1750,
                            0,
                            "linear",
                            "${Rectangle7}",
                            'block',
                            'none'
                        ],
                        [
                            "eid20",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "Card_volta": {
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
                            rect: ['0px', '0px', '236px', '57px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '0px 0px', '0px 0px'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,113,184,1.00)']
                        },
                        {
                            rect: ['48px', '16px', '172px', '25px', 'auto', 'auto'],
                            id: 'Texto',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            id: 'ic_chevron_left_white_24dp_1x2',
                            type: 'image',
                            rect: ['12px', '17px', '24px', '24px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/ic_chevron_left_white_24dp_1x.png', '0px', '0px']
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("card_volta_edgeActions.js");
})("EDGE-6087977");
