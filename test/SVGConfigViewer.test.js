require("mocha").should();

describe("SVGConfigViewer", function() {
    var obj = {
        data: {
            background: {
                src: ""
            },
            door: {
                opacity: 1,
                color1: "red",
                color2: "black"
            }
        },
        cfg: {
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
                    property: "fill",
                    transition: "fade",
                    easing: "ease",
                    duration: 500
                },
                color2: {
                    selector: "#door .part2",
                    property: "background-image",
                    transition: "fade",
                    easing: "ease",
                    duration: 500
                }
            }
        }
    };

    var viewer = new SVGConfigViewer(obj);
    viewer.background.src = "http://placehold.it/350x150";
    viewer.door.color1 = "blue";
});