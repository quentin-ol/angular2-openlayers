"use strict";
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var source_components_1 = require('./source.components');
var FeatureComponent = (function () {
    function FeatureComponent(source) {
        // console.log('instancing aol-feature');
        this.host = source;
        this.componentType = 'feature';
    }
    FeatureComponent.prototype.ngOnInit = function () {
        this.instance = new openlayers_1.Feature();
        this.host.instance.addFeature(this.instance);
    };
    FeatureComponent.prototype.ngOnDestroy = function () {
        // console.log('removing aol-feature');
        this.host.instance.removeFeature(this);
    };
    FeatureComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-feature',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    FeatureComponent.ctorParameters = function () { return [
        { type: source_components_1.SourceVectorComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    return FeatureComponent;
}());
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=feature.component.js.map