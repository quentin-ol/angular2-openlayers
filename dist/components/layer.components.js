"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require('@angular/core');
var openlayers_1 = require('openlayers');
var map_component_1 = require('./map.component');
var LayerComponent = (function () {
    function LayerComponent(map) {
        this.componentType = 'layer';
        this.opacity = undefined;
        this.visible = undefined;
        this.extent = undefined;
        this.zIndex = undefined;
        this.minResolution = undefined;
        this.maxResolution = undefined;
        this.host = map;
    }
    LayerComponent.prototype.ngOnInit = function () {
        this.host.instance.addLayer(this.instance);
    };
    LayerComponent.prototype.ngOnDestroy = function () {
        this.host.instance.removeLayer(this.instance);
    };
    LayerComponent.prototype.ngOnChanges = function (changes) {
        var properties = {};
        if (!this.instance) {
            return;
        }
        for (var key in changes) {
            properties[key] = changes[key].currentValue;
        }
        // console.log('changes detected in aol-layer, setting new properties: ', properties);
        this.instance.setProperties(properties, false);
    };
    LayerComponent.propDecorators = {
        'opacity': [{ type: core_1.Input },],
        'visible': [{ type: core_1.Input },],
        'extent': [{ type: core_1.Input },],
        'zIndex': [{ type: core_1.Input },],
        'minResolution': [{ type: core_1.Input },],
        'maxResolution': [{ type: core_1.Input },],
    };
    return LayerComponent;
}());
exports.LayerComponent = LayerComponent;
var LayerTileComponent = (function (_super) {
    __extends(LayerTileComponent, _super);
    function LayerTileComponent(map) {
        _super.call(this, map);
        this.preload = undefined;
        this.useInterimTilesOnError = undefined;
    }
    LayerTileComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Tile instance with:', this);
        this.instance = new openlayers_1.layer.Tile(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerTileComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-layer-tile',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    LayerTileComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    LayerTileComponent.propDecorators = {
        'preload': [{ type: core_1.Input },],
        'useInterimTilesOnError': [{ type: core_1.Input },],
    };
    return LayerTileComponent;
}(LayerComponent));
exports.LayerTileComponent = LayerTileComponent;
var LayerVectorComponent = (function (_super) {
    __extends(LayerVectorComponent, _super);
    function LayerVectorComponent(map) {
        _super.call(this, map);
        this.renderBuffer = undefined;
    }
    LayerVectorComponent.prototype.ngOnInit = function () {
        // console.log('creating ol.layer.Vector instance with:', this);
        this.instance = new openlayers_1.layer.Vector(this);
        _super.prototype.ngOnInit.call(this);
    };
    LayerVectorComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'aol-layer-vector',
                    template: "<ng-content></ng-content>"
                },] },
    ];
    /** @nocollapse */
    LayerVectorComponent.ctorParameters = function () { return [
        { type: map_component_1.MapComponent, decorators: [{ type: core_1.Host },] },
    ]; };
    LayerVectorComponent.propDecorators = {
        'renderBuffer': [{ type: core_1.Input },],
    };
    return LayerVectorComponent;
}(LayerComponent));
exports.LayerVectorComponent = LayerVectorComponent;
//# sourceMappingURL=layer.components.js.map