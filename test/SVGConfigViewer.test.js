require("mocha").should();

describe("SVGConfigViewer", function() {
    var cfg = {
        default: {
            transition: "none",
            easing: "ease",
            duration: 500
        },
        background: {
            src: {
                property: "background-image",
                    selector: "#background",
                    transition: "none"
            }
        },
        door: {
            opacity: {
                selector: "#door",
                    property: "opacity",
                    transition: "fade",
                    easing: "ease",
                    duration: 1000
            },
            color1: {
                selector: "#door .part1",
                property: "fill"
            },
            color2: {
                selector: "#door .part2",
                property: "fill"
            }
        }
    };
    var data = {
        background: {
            src: ""
        },
        door: {
            opacity: 1,
            color1: "red",
            color2: "black"
        }
    };

    // Create the viewer with the data and the config (no animation)
    var viewer = new SVGConfigViewer(data, cfg);

    // Change data the way you want
    data.background.src = "http://placehold.it/350x150";
    data.door.color1 = "blue";

    // Change new state with config animations
    viewer.setState(data);
});