/**
 * Created by Alexis on 01/05/2016.
 */
var SVGConfigViewer = require("./src/SVGConfigViewer");
var cfg = require("./cfg/portail.cfg.json");

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