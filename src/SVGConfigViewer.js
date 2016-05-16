/**
 * Created by Alexis on 01/05/2016.
 */
define(["SVG"], function (SVG) {
    function SVGConfigViewer(cfg, parent) {
        /**
         * Used to manipulate a svg image
         */
        this.svg = new SVG(cfg.src, parent);

        /**
         * Intern save of the data object. The new data object will be dirty checked with this object.
         * @private
         */
        this._data = {};

        /**
         * Config of data properties.
         */
        this.cfg = cfg;
    }

    SVGConfigViewer.prototype.setState = function(data) {
        // Loop for all properties
        Object.getOwnPropertyNames(data).forEach(function(name) {
            var oldValue = this._data[name];
            var newValue = data[name];

            // If the property has changed
            if(oldValue !== newValue) {
                // Change the property
                this._changeProperty(name, oldValue, newValue);

                // Set new value in the intern data object
                this._data[name] = newValue;
            }
        }, this);
    };

    /**
     * Change the property with animation to its new value.
     * @param name
     * @param oldValue
     * @param newValue
     * @private
     */
    SVGConfigViewer.prototype._changeProperty = function(name, oldValue, newValue) {
        var cfg = this.cfg[name];
        // Set animation config (with default value)
        var animationConfig = {
            selector: cfg.selector == null ? "#" + name : cfg.selector,
            property: cfg.property,
            duration: cfg.duration == null ? this.cfg.default.duration || 0 : cfg.duration,
            easing: cfg.easing == null ? this.cfg.default.easing || "linear" : cfg.easing
        };

        // If a binding is in the config, bind properties
        if(cfg.binding != null) {
            oldValue = this._convertValueWithBinding(cfg.binding, oldValue);
            newValue = this._convertValueWithBinding(cfg.binding, newValue);
        }

        // Set duration to 0 if this is the first set
        if(oldValue == null) {
            animationConfig.duration = 0;
        }

        this.svg.animate(oldValue, newValue, animationConfig);
    };

    /**
     * Convert a value with the binding object. If binding[value] is present, this function returns it.
     * Else it takes the default value in bindings["*"] (if it exists).
     * @param binding
     * @param value
     * @returns {*}
     * @private
     */
    SVGConfigViewer.prototype._convertValueWithBinding = function(binding, value) {
        binding = binding || {};
        if(binding[value] != null) {
            return binding[value];
        } else if(binding["*"] != null) {
            return binding["*"];
        } else {
            return value;
        }
    };

    return SVGConfigViewer;
});