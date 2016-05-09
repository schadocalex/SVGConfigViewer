/**
 * Created by Alexis on 01/05/2016.
 */
define(["./SVGConfigViewer", "../cfg/portail.cfg", "../img/portail.svg"], function (SVGConfigViewer, cfg, svg) {
    var data = {
        interphone: true,
        arrow_width: false,
        arrow_height: false
    };
    cfg.svg = svg;

    // Create the viewer with the config
    var viewer = new SVGConfigViewer(cfg);

    // Set the data for the first time (no animation)
    viewer.setState(data);

    setInterval(function() {
        // Change data the way you want
        data.interphone = !data.interphone;

        // Change new state with config animations
        viewer.setState(data);
    }, 2000);
});