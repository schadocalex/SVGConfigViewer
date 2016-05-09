/**
 * Created by Alexis on 01/05/2016.
 */
define([], function () {
    function SVG(parent, svg) {
        var el = parent.appendChild(Snap.parse(svg).node);
        this.paper = Snap(el);
    }

    SVG.prototype.animate = function(oldValue, newValue, cfg) {
        // Get the element with the selector
        var el = this.paper.select(cfg.selector);

        // Create params
        var attr = {};
        attr[cfg.property] = newValue;
        var duration = cfg.duration || 0;
        var easing = mina[cfg.easing] || mina.linear;

        // Animate
        el.animate(attr, duration, easing);
    };

    return SVG;
});