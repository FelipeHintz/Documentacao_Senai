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
                            id: 'move_1',
                            symbolName: 'move_1',
                            type: 'rect',
                            rect: ['19px', '33px', '25', '25', 'auto', 'auto']
                        },
                        {
                            id: 'move_2',
                            symbolName: 'move_2',
                            type: 'rect',
                            rect: ['93px', '33px', 'undefined', 'undefined', 'auto', 'auto']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['14px', '9px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Linear</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(0,0,0,1)", "normal", "none", "", "break-word", "nowrap"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['75px', '9px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​EaseInOut</p>",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '150px', '170px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid12",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${move_1}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid13",
                            "top",
                            0,
                            0,
                            "easeInOutQuad",
                            "${move_2}",
                            '33px',
                            '33px'
                        ],
                        [
                            "eid22",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${move_2}",
                            '93px',
                            '93px'
                        ],
                        [
                            "eid14",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${move_1}",
                            '19px',
                            '19px'
                        ]
                    ]
                }
            },
            "move_1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '100px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(255,0,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0px',
                            '100px'
                        ],
                        [
                            "eid3",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${Ellipse}",
                            '100px',
                            '0px'
                        ]
                    ]
                }
            },
            "move_2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '100px', '25px', '25px', 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            id: 'Ellipse',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'ellipse',
                            fill: ['rgba(0,255,0,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '25px', '25px']
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: true,
                    data: [
                        [
                            "eid2",
                            "top",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '0px',
                            '100px'
                        ],
                        [
                            "eid3",
                            "top",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${Ellipse}",
                            '100px',
                            '0px'
                        ],
                        [
                            "eid4",
                            "background-color",
                            0,
                            0,
                            "linear",
                            "${Ellipse}",
                            'rgba(0,255,0,1.00)',
                            'rgba(0,255,0,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("linear_easeInOut_edgeActions.js");
})("EDGE-25896740");
