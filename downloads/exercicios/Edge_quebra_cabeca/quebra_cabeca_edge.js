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
                            rect: ['160px', '9px', '279px', '214px', 'auto', 'auto'],
                            opacity: '0.79674796941804',
                            fill: ["rgba(0,0,0,0)",im+"Base.png",'0px','0px']
                        },
                        {
                            id: 'Limite',
                            type: 'rect',
                            rect: ['0px', '0px', '600px', '400px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(255,25,25,1.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: "Limite"
                        },
                        {
                            id: 'Drop11',
                            type: 'rect',
                            rect: ['160px', '9px', '56px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop12',
                            type: 'rect',
                            rect: ['215px', '9px', '56px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop13',
                            type: 'rect',
                            rect: ['271px', '9px', '55px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop14',
                            type: 'rect',
                            rect: ['326px', '9px', '56px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop15',
                            type: 'rect',
                            rect: ['382px', '9px', '56px', '54px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop21',
                            type: 'rect',
                            rect: ['160px', '63px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop22',
                            type: 'rect',
                            rect: ['215px', '63px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop23',
                            type: 'rect',
                            rect: ['271px', '63px', '55px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop24',
                            type: 'rect',
                            rect: ['326px', '63px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop25',
                            type: 'rect',
                            rect: ['382px', '63px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop31',
                            type: 'rect',
                            rect: ['160px', '116px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop32',
                            type: 'rect',
                            rect: ['215px', '116px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop33',
                            type: 'rect',
                            rect: ['271px', '116px', '55px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop34',
                            type: 'rect',
                            rect: ['326px', '116px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop35',
                            type: 'rect',
                            rect: ['382px', '116px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop41',
                            type: 'rect',
                            rect: ['160px', '169px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop42',
                            type: 'rect',
                            rect: ['215px', '169px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop43',
                            type: 'rect',
                            rect: ['271px', '169px', '55px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop44',
                            type: 'rect',
                            rect: ['326px', '169px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drop45',
                            type: 'rect',
                            rect: ['382px', '169px', '56px', '53px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(192,192,192,1)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'Drag1',
                            type: 'image',
                            rect: ['17px', '289px', '77px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D11.png",'0px','0px'],
                            userClass: "d11"
                        },
                        {
                            id: 'Drag2',
                            type: 'image',
                            rect: ['397px', '236px', '56px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D12.png",'0px','0px'],
                            userClass: "d12"
                        },
                        {
                            id: 'Drag3',
                            type: 'image',
                            rect: ['198px', '326px', '98px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D13.png",'0px','0px'],
                            userClass: "d13"
                        },
                        {
                            id: 'Drag4',
                            type: 'image',
                            rect: ['90px', '126px', '56px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D14.png",'0px','0px'],
                            userClass: "d14"
                        },
                        {
                            id: 'Drag5',
                            type: 'image',
                            rect: ['298px', '239px', '77px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D15.png",'0px','0px'],
                            userClass: "d15"
                        },
                        {
                            id: 'Drag6',
                            type: 'image',
                            rect: ['458px', '9px', '56px', '94px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D21.png",'0px','0px'],
                            userClass: "d21"
                        },
                        {
                            id: 'Drag7',
                            type: 'image',
                            rect: ['514px', '79px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D22.png",'0px','0px'],
                            userClass: "d22"
                        },
                        {
                            id: 'Drag8',
                            type: 'image',
                            rect: ['93px', '316px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D23.png",'0px','0px'],
                            userClass: "d23"
                        },
                        {
                            id: 'Drag9',
                            type: 'image',
                            rect: ['198px', '232px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D24.png",'0px','0px'],
                            userClass: "d24",
                            boxShadow: ["", 0, 0, 0, 0, "rgba(0,0,0,0)"]
                        },
                        {
                            id: 'Drag10',
                            type: 'image',
                            rect: ['514px', '167px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D25.png",'0px','0px'],
                            userClass: "d25"
                        },
                        {
                            id: 'Drag11',
                            type: 'image',
                            rect: ['453px', '136px', '77px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D31.png",'0px','0px'],
                            userClass: "d31"
                        },
                        {
                            id: 'Drag12',
                            type: 'image',
                            rect: ['412px', '316px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D32.png",'0px','0px'],
                            userClass: "d32"
                        },
                        {
                            id: 'Drag13',
                            type: 'image',
                            rect: ['481px', '242px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D33.png",'0px','0px'],
                            userClass: "d33"
                        },
                        {
                            id: 'Drag14',
                            type: 'image',
                            rect: ['104px', '232px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D34.png",'0px','0px'],
                            userClass: "d34"
                        },
                        {
                            id: 'Drag15',
                            type: 'image',
                            rect: ['93px', '5px', '56px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D35.png",'0px','0px'],
                            userClass: "d35"
                        },
                        {
                            id: 'Drag16',
                            type: 'image',
                            rect: ['17px', '93px', '56px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D41.png",'0px','0px'],
                            userClass: "d41"
                        },
                        {
                            id: 'Drag17',
                            type: 'image',
                            rect: ['499px', '336px', '77px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D42.png",'0px','0px'],
                            userClass: "d42"
                        },
                        {
                            id: 'Drag18',
                            type: 'image',
                            rect: ['312px', '306px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D43.png",'0px','0px'],
                            userClass: "d43"
                        },
                        {
                            id: 'Drag19',
                            type: 'image',
                            rect: ['0px', '205px', '77px', '54px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D44.png",'0px','0px'],
                            userClass: "d44"
                        },
                        {
                            id: 'Drag20',
                            type: 'image',
                            rect: ['3px', '5px', '77px', '74px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"D45.png",'0px','0px'],
                            userClass: "d45"
                        },
                        {
                            id: 'final',
                            display: 'none',
                            type: 'image',
                            rect: ['-15px', '0px', '630px', '434px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Ativo%201peca.png",'0px','0px','100%','100%', 'no-repeat']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '600px', '400px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    labels: {
                        "finalizado": 1000
                    },
                    data: [
                        [
                            "eid14",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${final}",
                            'block',
                            'block'
                        ],
                        [
                            "eid37",
                            "top",
                            1000,
                            1000,
                            "linear",
                            "${final}",
                            '0px',
                            '-17px'
                        ],
                        [
                            "eid36",
                            "width",
                            1000,
                            1000,
                            "linear",
                            "${final}",
                            '337px',
                            '630px'
                        ],
                        [
                            "eid35",
                            "left",
                            1000,
                            1000,
                            "linear",
                            "${final}",
                            '131px',
                            '-15px'
                        ],
                        [
                            "eid16",
                            "opacity",
                            1000,
                            1000,
                            "linear",
                            "${final}",
                            '0',
                            '1'
                        ],
                        [
                            "eid34",
                            "height",
                            1000,
                            1000,
                            "linear",
                            "${final}",
                            '232px',
                            '434px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("quebra_cabeca_edgeActions.js");
})("EDGE-5491406");
