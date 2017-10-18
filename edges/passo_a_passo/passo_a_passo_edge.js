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
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Passo_a_passo',
                            symbolName: 'Passo_a_passo',
                            type: 'rect',
                            rect: ['0', '92', '600', '300', 'auto', 'auto']
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
                    duration: 4000,
                    autoPlay: true,
                    data: [

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
                            rect: ['0px', '0px', '580px', '380px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            boxShadow: ['', 0, 1, 2, 0, 'rgba(0,0,0,0.65098)'],
                            id: 'Fundo',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        },
                        {
                            rect: ['0px', '0px', '580px', '90px', 'auto', 'auto'],
                            borderRadius: ['2px', '2px', '0px 0px', '0px 0px'],
                            id: 'Cor_do_curso',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(29,113,184,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '580px', '380px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Conteudo": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto1',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto2',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto3',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto4',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto5',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto6',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto7',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto8',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['575px', '0px', '550px', '63px', 'auto', 'auto'],
                            id: 'Texto9',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 21px;\">Título do card</span></p><p style=\"margin: 0px;\">​<span style=\"font-size: 13px;\">Lorem ipsum dolor sit amet, consectur adipiscing elit</span>lor ipsum dolor sit amet adipiscing elit&nbsp;<span style=\"font-family: Verdana, Geneva, sans-serif; font-weight: 400; font-style: normal; text-decoration: none; font-size: 13px; background-color: rgba(0, 0, 0, 0); letter-spacing: 0px; text-transform: none; word-spacing: 0px;\">elitlor ipsum dolor sit amet consectur.</span></p>',
                            font: ['Verdana, Geneva, sans-serif', [13, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'normal'],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem1',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem6',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            rect: ['575px', '90px', '550px', '260px', 'auto', 'auto'],
                            id: 'Imagem9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,119,255,1)']
                        },
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['232px', '336px', '89', '10', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['-3px', '0px', '91px', '10px', 'auto', 'auto'],
                                filter: [0, 0, 1, 1, 0, 0, 0, 8, 'rgba(0,0,0,0)', 0, 0, 0],
                                id: 'Rectangle',
                                stroke: [0, 'rgba(0,0,0,1)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['78px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                id: 'Ellipse',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['68px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy7',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['58px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy8',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['48px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy9',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['38px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy10',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['28px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy11',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['18px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy12',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['8px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy13',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            },
                            {
                                rect: ['-3px', '0px', '10px', '10px', 'auto', 'auto'],
                                borderRadius: ['50%', '50%', '50%', '50%'],
                                transform: [[], [], [], ['0.5', '0.5']],
                                id: 'EllipseCopy14',
                                stroke: [1, 'rgba(0,0,0,1)', 'none'],
                                type: 'ellipse',
                                fill: ['rgba(255,255,255,1.00)']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '550px', '350px'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid26",
                            "left",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${Texto8}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid27",
                            "left",
                            3500,
                            500,
                            "easeInOutQuad",
                            "${Texto8}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${EllipseCopy11}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid94",
                            "scaleY",
                            1500,
                            500,
                            "linear",
                            "${EllipseCopy11}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid79",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${EllipseCopy8}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid80",
                            "scaleX",
                            3000,
                            500,
                            "linear",
                            "${EllipseCopy8}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid22",
                            "left",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${Texto6}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid23",
                            "left",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${Texto6}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid20",
                            "left",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${Texto5}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid21",
                            "left",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${Texto5}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid28",
                            "left",
                            3500,
                            500,
                            "easeInOutQuad",
                            "${Texto9}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid110",
                            "left",
                            0,
                            0,
                            "linear",
                            "${EllipseCopy13}",
                            '8px',
                            '8px'
                        ],
                        [
                            "eid44",
                            "left",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${Imagem6}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "left",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${Imagem6}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${Imagem5}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid43",
                            "left",
                            2000,
                            500,
                            "easeInOutQuad",
                            "${Imagem5}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid112",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${EllipseCopy11}",
                            '28px',
                            '28px'
                        ],
                        [
                            "eid81",
                            "scaleY",
                            2500,
                            500,
                            "linear",
                            "${EllipseCopy8}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid82",
                            "scaleY",
                            3000,
                            500,
                            "linear",
                            "${EllipseCopy8}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            3000,
                            500,
                            "linear",
                            "${EllipseCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid76",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${EllipseCopy7}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid117",
                            "left",
                            3500,
                            0,
                            "linear",
                            "${Ellipse}",
                            '78px',
                            '78px'
                        ],
                        [
                            "eid85",
                            "scaleY",
                            2000,
                            500,
                            "linear",
                            "${EllipseCopy9}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid86",
                            "scaleY",
                            2500,
                            500,
                            "linear",
                            "${EllipseCopy9}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid48",
                            "left",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${Imagem8}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid49",
                            "left",
                            3500,
                            500,
                            "easeInOutQuad",
                            "${Imagem8}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid37",
                            "left",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Imagem2}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid36",
                            "left",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Imagem2}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid50",
                            "left",
                            3500,
                            500,
                            "easeInOutQuad",
                            "${Imagem9}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid72",
                            "scaleY",
                            3500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid40",
                            "left",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${Imagem4}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "left",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${Imagem4}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid24",
                            "left",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${Texto7}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid25",
                            "left",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${Texto7}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid91",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${EllipseCopy11}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid92",
                            "scaleX",
                            1500,
                            500,
                            "linear",
                            "${EllipseCopy11}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid38",
                            "left",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Imagem3}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid39",
                            "left",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${Imagem3}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid71",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${Ellipse}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid106",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${EllipseCopy14}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid77",
                            "scaleX",
                            3000,
                            500,
                            "linear",
                            "${EllipseCopy7}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "scaleX",
                            3500,
                            500,
                            "linear",
                            "${EllipseCopy7}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid111",
                            "left",
                            500,
                            0,
                            "linear",
                            "${EllipseCopy12}",
                            '18px',
                            '18px'
                        ],
                        [
                            "eid9",
                            "left",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Texto1}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid11",
                            "left",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Texto2}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid13",
                            "left",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Texto2}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid101",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${EllipseCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid102",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${EllipseCopy13}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid99",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${EllipseCopy13}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid100",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${EllipseCopy13}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid97",
                            "scaleX",
                            500,
                            500,
                            "linear",
                            "${EllipseCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid98",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${EllipseCopy12}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid46",
                            "left",
                            2500,
                            500,
                            "easeInOutQuad",
                            "${Imagem7}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid47",
                            "left",
                            3000,
                            500,
                            "easeInOutQuad",
                            "${Imagem7}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid95",
                            "scaleY",
                            500,
                            500,
                            "linear",
                            "${EllipseCopy12}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid96",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${EllipseCopy12}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid115",
                            "left",
                            2500,
                            0,
                            "linear",
                            "${EllipseCopy8}",
                            '58px',
                            '58px'
                        ],
                        [
                            "eid113",
                            "left",
                            1500,
                            0,
                            "linear",
                            "${EllipseCopy10}",
                            '38px',
                            '38px'
                        ],
                        [
                            "eid83",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${EllipseCopy9}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid84",
                            "scaleX",
                            2500,
                            500,
                            "linear",
                            "${EllipseCopy9}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid116",
                            "left",
                            3000,
                            0,
                            "linear",
                            "${EllipseCopy7}",
                            '68px',
                            '68px'
                        ],
                        [
                            "eid87",
                            "scaleY",
                            1500,
                            500,
                            "linear",
                            "${EllipseCopy10}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid88",
                            "scaleY",
                            2000,
                            500,
                            "linear",
                            "${EllipseCopy10}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid18",
                            "left",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${Texto4}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid19",
                            "left",
                            1500,
                            500,
                            "easeInOutQuad",
                            "${Texto4}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid89",
                            "scaleX",
                            1500,
                            500,
                            "linear",
                            "${EllipseCopy10}",
                            '0.5',
                            '1'
                        ],
                        [
                            "eid90",
                            "scaleX",
                            2000,
                            500,
                            "linear",
                            "${EllipseCopy10}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid104",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${EllipseCopy14}",
                            '1',
                            '0.5'
                        ],
                        [
                            "eid114",
                            "left",
                            2000,
                            0,
                            "linear",
                            "${EllipseCopy9}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid35",
                            "left",
                            0,
                            500,
                            "easeInOutQuad",
                            "${Imagem1}",
                            '0px',
                            '-575px'
                        ],
                        [
                            "eid14",
                            "left",
                            500,
                            500,
                            "easeInOutQuad",
                            "${Texto3}",
                            '575px',
                            '0px'
                        ],
                        [
                            "eid15",
                            "left",
                            1000,
                            500,
                            "easeInOutQuad",
                            "${Texto3}",
                            '0px',
                            '-575px'
                        ]
                    ]
                }
            },
            "BigButton": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['48px', '65px', '52px', '170px', 'auto', 'auto'],
                            id: 'ic_navigate_next_black_18px',
                            opacity: '0.15',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/ic_navigate_next_black_18px.png', '0px', '0px']
                        },
                        {
                            rect: ['0px', '0px', '100px', '300px', 'auto', 'auto'],
                            type: 'rect',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'actions',
                            opacity: '0',
                            cursor: 'pointer',
                            fill: ['rgba(0,119,255,1)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '100px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    labels: {
                        "Out": 0,
                        "Hover": 1000
                    },
                    data: [
                        [
                            "eid65",
                            "top",
                            1000,
                            0,
                            "easeInOutQuad",
                            "${ic_navigate_next_black_18px}",
                            '65px',
                            '65px'
                        ],
                        [
                            "eid63",
                            "height",
                            1000,
                            0,
                            "easeInOutQuad",
                            "${ic_navigate_next_black_18px}",
                            '170px',
                            '170px'
                        ],
                        [
                            "eid58",
                            "left",
                            0,
                            0,
                            "easeInOutQuad",
                            "${ic_navigate_next_black_18px}",
                            '48px',
                            '48px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            0,
                            1000,
                            "easeInOutQuad",
                            "${ic_navigate_next_black_18px}",
                            '0.15',
                            '0.75'
                        ]
                    ]
                }
            },
            "Passo_a_passo": {
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
                            rect: ['10px', '-80px', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            id: 'Conteudo',
                            symbolName: 'Conteudo',
                            rect: ['25px', '-65px', undefined, undefined, 'auto', 'auto'],
                            type: 'rect'
                        },
                        {
                            type: 'rect',
                            display: 'block',
                            symbolName: 'BigButton',
                            rect: ['500px', '0px', undefined, undefined, 'auto', 'auto'],
                            id: 'BigButton3'
                        },
                        {
                            type: 'rect',
                            transform: [[], ['180']],
                            display: 'none',
                            symbolName: 'BigButton',
                            rect: ['0px', '0px', undefined, undefined, 'auto', 'auto'],
                            id: 'BigButton3Copy'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '600px', '300px']
                        }
                    }
                },
                timeline: {
                    duration: 4000,
                    autoPlay: true,
                    data: [
                        [
                            "eid123",
                            "top",
                            905,
                            0,
                            "linear",
                            "${Conteudo}",
                            '-65px',
                            '-65px'
                        ],
                        [
                            "eid118",
                            "display",
                            50,
                            0,
                            "linear",
                            "${BigButton3Copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid119",
                            "display",
                            3940,
                            0,
                            "linear",
                            "${BigButton3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid124",
                            "top",
                            905,
                            0,
                            "linear",
                            "${Card_titulo}",
                            '-80px',
                            '-80px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("passo_a_passo_edgeActions.js");
})("EDGE-6087977");
