window.addEventListener('load', function() {

    let isSpinning = true;

    let illo = new Zdog.Illustration({
        element: '.zdog-canvas',
        zoom: 4,
        dragRotate: true,
        translate: { y: 25 },
        // stop spinning when drag starts
        onDragStart: function() {
            isSpinning = false;
        },
    });


    let bigBenHat = new Zdog.Cone({
        addTo: illo,
        diameter: 40,
        length: 60,
        stroke: false,
        color: '#636',
        backface: '#C25',
        translate: { y: -50, z: 0 },
        rotate: { x: -300 },
    });

    //big ben body
    let bigBenHatFrame = new Zdog.Box({
        addTo: illo,
        width: 50,
        height: 10,
        depth: 50,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
        translate: { y: -55, z: 0 },
    });

    let bigBenBaseFrame = new Zdog.Box({
        addTo: illo,
        width: 60,
        height: 10,
        depth: 60,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',
        translate: { y: 55, z: 0 },
    });

    //big ben body
    let bigBenBody = new Zdog.Box({
        addTo: illo,
        width: 40,
        height: 100,
        depth: 40,
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',

    });
    let bigBenClockContainer_1 = new Zdog.Box({
        addTo: illo,
        width: 40,
        height: 40,
        depth: 40,
        translate: { x: 10, y: -35 },
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',

    });
    let bigBenClockContainer_2 = new Zdog.Box({
        addTo: illo,
        width: 40,
        height: 40,
        depth: 40,
        translate: { x: -10, y: -35 },
        stroke: false,
        color: '#C25', // default face color
        leftFace: '#EA0',
        rightFace: '#E62',
        topFace: '#ED0',
        bottomFace: '#636',

    });

    let clockFace = new Zdog.Ellipse({
        addTo: illo,
        translate: { y: -35, z: 30 },
        width: 30,
        height: 30,
        color: '#ffffff', // default face color
        backface: true,
        fill: true,
    });

    let clockCenterPoint = new Zdog.Ellipse({
        addTo: illo,
        translate: { y: -35, z: 35 },
        width: 1,
        height: 1,
        color: '#000000', // default face color
        backface: true,
        fill: true,
    });

    // all the hour indicator markers.

    // let twelveOClock = new Zdog.Cylinder({
    //     addTo: illo,
    //     diameter: 1,
    //     length: 3,
    //     stroke: false,
    //     color: '#000',
    //     backface: '#000',
    //     translate: { y: -32, z: 30, x: 0 },
    //     rotate: { x: 80 }
    // });
    // let oneOClock = new Zdog.Cylinder({
    //     addTo: illo,
    //     diameter: 1,
    //     length: 3,
    //     stroke: false,
    //     color: '#000',
    //     backface: '#000',
    //     translate: { y: -31, z: 32, x: 5 },
    //     rotate: { x: 80, y: 10 }
    // });
    // let threeOClock = new Zdog.Cylinder({
    //     addTo: illo,
    //     diameter: 1,
    //     length: 4,
    //     stroke: false,
    //     color: '#000',
    //     backface: '#000',
    //     translate: { y: -20, z: 32, x: 10 },
    //     rotate: { x: 0, y: 200 }
    // });
    // let nineOClock = new Zdog.Cylinder({
    //     addTo: illo,
    //     diameter: 1,
    //     length: 4,
    //     stroke: false,
    //     color: '#000',
    //     backface: '#000',
    //     translate: { y: -20, z: 32, x: -10 },
    //     rotate: { x: 0, y: 200 }
    // });
    // let sixOClock = new Zdog.Cylinder({
    //     addTo: illo,
    //     diameter: 1,
    //     length: 3,
    //     stroke: false,
    //     color: '#000',
    //     backface: '#000',
    //     translate: { y: -8, z: 30, x: 0 },
    //     rotate: { x: 80 }
    // });

    function animate() {
        //illo.rotate.y += isSpinning ? 0.01 : 0;
        illo.updateRenderGraph();
        requestAnimationFrame(animate);
    }
    animate();

}, false)