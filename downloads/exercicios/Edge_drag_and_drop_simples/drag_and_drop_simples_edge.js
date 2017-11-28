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
            js+"jquery-ui.min.js",
            js+"sweetalert.min.js"
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
                            id: 'Base',
                            type: 'image',
                            rect: ['0px', '0px', '600px', '206px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Base.png",'0px','0px']
                        },
                        {
                            id: 'Drop1',
                            type: 'rect',
                            rect: ['7px', '16px', '107px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop2',
                            type: 'rect',
                            rect: ['126px', '16px', '107px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(185,130,23,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop3',
                            type: 'rect',
                            rect: ['246px', '16px', '107px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop4',
                            type: 'rect',
                            rect: ['366px', '16px', '107px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop5',
                            type: 'rect',
                            rect: ['486px', '16px', '107px', '62px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drag3',
                            type: 'image',
                            rect: ['241px', '117px', '119px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Drag3.png",'0px','0px'],
                            userClass: "d3"
                        },
                        {
                            id: 'Drag5',
                            type: 'image',
                            rect: ['360px', '117px', '119px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Drag5.png",'0px','0px'],
                            userClass: "d5"
                        },
                        {
                            id: 'Drag4',
                            type: 'image',
                            rect: ['3px', '117px', '119px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Drag4.png",'0px','0px'],
                            userClass: "d4"
                        },
                        {
                            id: 'Drag2',
                            type: 'image',
                            rect: ['122px', '117px', '119px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Drag2.png",'0px','0px'],
                            userClass: "d2"
                        },
                        {
                            id: 'Drag1',
                            type: 'image',
                            rect: ['481px', '117px', '119px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Drag1.png",'0px','0px'],
                            userClass: "d1"
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '206px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
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

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("drag_and_drop_simples_edgeActions.js");
})("EDGE-22918710");
