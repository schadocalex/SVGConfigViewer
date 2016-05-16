requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'src/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        ajax: '../bower_components/ajax/dist/ajax.min',
        Snap: '../bower_components/Snap.svg/dist/snap.svg-min'
    }
});


/**
 * Created by Alexis on 01/05/2016.
 */
define(["./SVGConfigViewer", "../cfg/portail.cfg"], function (SVGConfigViewer, cfg) {
    var data = {
        interphone: true,
        arrow_width: false,
        arrow_height: false
    };

    // Create the viewer with the config
    var viewer = new SVGConfigViewer(cfg);

    setTimeout(function() {
        // Set the data for the first time (no animation)
        viewer.setState(data);

        setInterval(function() {
            // Change data the way you want
            data.interphone = !data.interphone;

            // Change new state with config animations
            viewer.setState(data);
        }, 2000);
    }, 2000);
});