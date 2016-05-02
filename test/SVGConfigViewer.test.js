require("mocha").should();

describe("SVGConfigViewer", function() {
    var obj = {
        data: {
            background: {
                visible: true,
                src: "http://placehold.it/350x150"
            },
            door: {
                visible: true,
                color1: "red",
                color2: "black"
            }
        },
        cfg: {
            background: {
                src: {
                    selector: "#background",
                    property: "background-image",
                    transition: "none"
                }
            },
            door: {
                color1: {
                    selector: "#door .part1",
                    property: "fill",
                    transition: "fade",
                    easing: "ease"
                },
                color2: {
                    selector: "#door .part2",
                    property: "background-image",
                    transition: "fade",
                    easing: "ease"
                }
            }
        }
    };
});