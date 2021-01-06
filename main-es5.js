function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js":
  /*!*********************************************************************!*\
    !*** ./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js ***!
    \*********************************************************************/

  /*! exports provided: AngularOpenlayersModule, AttributionComponent, AttributionsComponent, CollectionCoordinatesComponent, ContentComponent, ControlAttributionComponent, ControlComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, CoordinateComponent, DefaultControlComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateAndZoomInteractionComponent, DragRotateInteractionComponent, DragZoomInteractionComponent, DrawInteractionComponent, FeatureComponent, FormatMVTComponent, GeometryCircleComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GraticuleComponent, LayerComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, MapComponent, ModifyInteractionComponent, MouseWheelZoomInteractionComponent, OverlayComponent, PinchZoomInteractionComponent, SelectInteractionComponent, SimpleGeometryComponent, SourceBingmapsComponent, SourceClusterComponent, SourceComponent, SourceGeoJSONComponent, SourceImageArcGISRestComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceOsmComponent, SourceRasterComponent, SourceTileJSONComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceUTFGridComponent, SourceVectorComponent, SourceVectorTileComponent, SourceXYZComponent, StyleCircleComponent, StyleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, TileGridComponent, TileGridWMTSComponent, TranslateInteractionComponent, ViewComponent, ɵa */

  /***/
  function distNgxOpenlayers__ivy_ngcc__Fesm2015NgxOpenlayersJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AngularOpenlayersModule", function () {
      return AngularOpenlayersModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributionComponent", function () {
      return AttributionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AttributionsComponent", function () {
      return AttributionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CollectionCoordinatesComponent", function () {
      return CollectionCoordinatesComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentComponent", function () {
      return ContentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlAttributionComponent", function () {
      return ControlAttributionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlComponent", function () {
      return ControlComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlFullScreenComponent", function () {
      return ControlFullScreenComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlMousePositionComponent", function () {
      return ControlMousePositionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlOverviewMapComponent", function () {
      return ControlOverviewMapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlRotateComponent", function () {
      return ControlRotateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlScaleLineComponent", function () {
      return ControlScaleLineComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlZoomComponent", function () {
      return ControlZoomComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlZoomSliderComponent", function () {
      return ControlZoomSliderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControlZoomToExtentComponent", function () {
      return ControlZoomToExtentComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoordinateComponent", function () {
      return CoordinateComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultControlComponent", function () {
      return DefaultControlComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultInteractionComponent", function () {
      return DefaultInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DoubleClickZoomInteractionComponent", function () {
      return DoubleClickZoomInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragAndDropInteractionComponent", function () {
      return DragAndDropInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragBoxInteractionComponent", function () {
      return DragBoxInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragPanInteractionComponent", function () {
      return DragPanInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRotateAndZoomInteractionComponent", function () {
      return DragRotateAndZoomInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragRotateInteractionComponent", function () {
      return DragRotateInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragZoomInteractionComponent", function () {
      return DragZoomInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawInteractionComponent", function () {
      return DrawInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FeatureComponent", function () {
      return FeatureComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormatMVTComponent", function () {
      return FormatMVTComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryCircleComponent", function () {
      return GeometryCircleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryLinestringComponent", function () {
      return GeometryLinestringComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryMultiLinestringComponent", function () {
      return GeometryMultiLinestringComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryMultiPointComponent", function () {
      return GeometryMultiPointComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryMultiPolygonComponent", function () {
      return GeometryMultiPolygonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryPointComponent", function () {
      return GeometryPointComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GeometryPolygonComponent", function () {
      return GeometryPolygonComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraticuleComponent", function () {
      return GraticuleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerComponent", function () {
      return LayerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerGroupComponent", function () {
      return LayerGroupComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerImageComponent", function () {
      return LayerImageComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerTileComponent", function () {
      return LayerTileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerVectorComponent", function () {
      return LayerVectorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayerVectorTileComponent", function () {
      return LayerVectorTileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyInteractionComponent", function () {
      return ModifyInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MouseWheelZoomInteractionComponent", function () {
      return MouseWheelZoomInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayComponent", function () {
      return OverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PinchZoomInteractionComponent", function () {
      return PinchZoomInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectInteractionComponent", function () {
      return SelectInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleGeometryComponent", function () {
      return SimpleGeometryComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceBingmapsComponent", function () {
      return SourceBingmapsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceClusterComponent", function () {
      return SourceClusterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceComponent", function () {
      return SourceComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceGeoJSONComponent", function () {
      return SourceGeoJSONComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceImageArcGISRestComponent", function () {
      return SourceImageArcGISRestComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceImageStaticComponent", function () {
      return SourceImageStaticComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceImageWMSComponent", function () {
      return SourceImageWMSComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceOsmComponent", function () {
      return SourceOsmComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceRasterComponent", function () {
      return SourceRasterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceTileJSONComponent", function () {
      return SourceTileJSONComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceTileWMSComponent", function () {
      return SourceTileWMSComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceTileWMTSComponent", function () {
      return SourceTileWMTSComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceUTFGridComponent", function () {
      return SourceUTFGridComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceVectorComponent", function () {
      return SourceVectorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceVectorTileComponent", function () {
      return SourceVectorTileComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SourceXYZComponent", function () {
      return SourceXYZComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleCircleComponent", function () {
      return StyleCircleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleComponent", function () {
      return StyleComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleFillComponent", function () {
      return StyleFillComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleIconComponent", function () {
      return StyleIconComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleStrokeComponent", function () {
      return StyleStrokeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StyleTextComponent", function () {
      return StyleTextComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileGridComponent", function () {
      return TileGridComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileGridWMTSComponent", function () {
      return TileGridWMTSComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TranslateInteractionComponent", function () {
      return TranslateInteractionComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewComponent", function () {
      return ViewComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return FormatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ol_View__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ol/View */
    "./node_modules/ol/View.js");
    /* harmony import */


    var ol_Map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ol/Map */
    "./node_modules/ol/Map.js");
    /* harmony import */


    var ol__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ol */
    "./node_modules/ol/index.js");
    /* harmony import */


    var ol_layer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ol/layer */
    "./node_modules/ol/layer.js");
    /* harmony import */


    var ol_source__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ol/source */
    "./node_modules/ol/source.js");
    /* harmony import */


    var ol_tilegrid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ol/tilegrid */
    "./node_modules/ol/tilegrid.js");
    /* harmony import */


    var ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ol/tilegrid/TileGrid */
    "./node_modules/ol/tilegrid/TileGrid.js");
    /* harmony import */


    var ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ol/tilegrid/WMTS */
    "./node_modules/ol/tilegrid/WMTS.js");
    /* harmony import */


    var ol_format__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ol/format */
    "./node_modules/ol/format.js");
    /* harmony import */


    var ol_geom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ol/geom */
    "./node_modules/ol/geom.js");
    /* harmony import */


    var ol_proj__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ol/proj */
    "./node_modules/ol/proj.js");
    /* harmony import */


    var ol_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ol/style */
    "./node_modules/ol/style.js");
    /* harmony import */


    var ol_control__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ol/control */
    "./node_modules/ol/control.js");
    /* harmony import */


    var ol_control_MousePosition__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ol/control/MousePosition */
    "./node_modules/ol/control/MousePosition.js");
    /* harmony import */


    var ol_interaction__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ol/interaction */
    "./node_modules/ol/interaction.js");

    var _c0 = ["*"];

    var SimpleGeometryComponent = /*#__PURE__*/function () {
      function SimpleGeometryComponent(map, host) {
        _classCallCheck(this, SimpleGeometryComponent);

        this.map = map;
        this.host = host;
        this.componentType = 'simple-geometry';
      }

      _createClass(SimpleGeometryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.host.instance.setGeometry(this.instance);
        }
      }]);

      return SimpleGeometryComponent;
    }();

    SimpleGeometryComponent.ɵfac = function SimpleGeometryComponent_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
    };

    SimpleGeometryComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SimpleGeometryComponent,
      inputs: {
        srid: "srid"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SimpleGeometryComponent.prototype, "srid", void 0);

    var SourceComponent = /*#__PURE__*/function () {
      function SourceComponent(host) {
        _classCallCheck(this, SourceComponent);

        this.host = host;
        this.componentType = 'source';
      }

      _createClass(SourceComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.host && this.host.instance) {
            this.host.instance.setSource(null);
          }
        }
      }, {
        key: "_register",
        value: function _register(s) {
          if (this.host) {
            this.host.instance.setSource(s);
          }
        }
      }]);

      return SourceComponent;
    }();

    SourceComponent.ɵfac = function SourceComponent_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
    };

    SourceComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: SourceComponent,
      inputs: {
        attributions: "attributions"
      }
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceComponent.prototype, "attributions", void 0);

    var MapComponent = /*#__PURE__*/function () {
      function MapComponent(host) {
        _classCallCheck(this, MapComponent);

        this.host = host;
        this.componentType = 'map';
        this.width = '100%';
        this.height = '100%'; // we pass empty arrays to not get default controls/interactions because we have our own directives

        this.controls = [];
        this.interactions = [];
        this.olClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pointerDrag = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pointerMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onpostrender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.postRender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onprerender = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.singleClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          // console.log('creating ol.Map instance with:', this);
          this.instance = new ol_Map__WEBPACK_IMPORTED_MODULE_4__["default"](this);
          this.instance.setTarget(this.host.nativeElement.firstElementChild);
          this.instance.on('click', function (event) {
            return _this.olClick.emit(event);
          });
          this.instance.on('dblclick', function (event) {
            return _this.dblClick.emit(event);
          });
          this.instance.on('movestart', function (event) {
            return _this.moveStart.emit(event);
          });
          this.instance.on('moveend', function (event) {
            return _this.moveEnd.emit(event);
          });
          this.instance.on('pointerdrag', function (event) {
            return _this.pointerDrag.emit(event);
          });
          this.instance.on('pointermove', function (event) {
            return _this.pointerMove.emit(event);
          });
          this.instance.on('postrender', function (event) {
            return _this.onpostrender.emit(event);
          });
          this.instance.on('postrender', function (event) {
            return _this.postRender.emit(event);
          });
          this.instance.on('prerender', function (event) {
            return _this.onprerender.emit(event);
          });
          this.instance.on('propertychange', function (event) {
            return _this.propertyChange.emit(event);
          });
          this.instance.on('singleclick', function (event) {
            return _this.singleClick.emit(event);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              properties[key] = changes[key].currentValue;
            }
          } // console.log('changes detected in aol-map, setting new properties: ', properties);


          this.instance.setProperties(properties, false);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.instance.updateSize();
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["aol-map"]],
      inputs: {
        width: "width",
        height: "height",
        pixelRatio: "pixelRatio",
        keyboardEventTarget: "keyboardEventTarget",
        loadTilesWhileAnimating: "loadTilesWhileAnimating",
        loadTilesWhileInteracting: "loadTilesWhileInteracting",
        logo: "logo",
        renderer: "renderer"
      },
      outputs: {
        olClick: "olClick",
        dblClick: "dblClick",
        moveStart: "moveStart",
        moveEnd: "moveEnd",
        pointerDrag: "pointerDrag",
        pointerMove: "pointerMove",
        onpostrender: "onpostrender",
        postRender: "postRender",
        onprerender: "onprerender",
        propertyChange: "propertyChange",
        singleClick: "singleClick"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 4,
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.width)("height", ctx.height);
        }
      },
      encapsulation: 2
    });

    MapComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "width", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "height", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "pixelRatio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "keyboardEventTarget", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "loadTilesWhileAnimating", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "loadTilesWhileInteracting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "logo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MapComponent.prototype, "renderer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "olClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "dblClick", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "moveStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "moveEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "pointerDrag", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "pointerMove", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "onpostrender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "postRender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "onprerender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "propertyChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], MapComponent.prototype, "singleClick", void 0);

    var ViewComponent = /*#__PURE__*/function () {
      function ViewComponent(host) {
        _classCallCheck(this, ViewComponent);

        this.host = host;
        this.componentType = 'view';
        this.zoomAnimation = false;
        this.changeZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeResolution = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // console.log('creating ol.View instance with: ', this);
          this.instance = new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"](this);
          this.host.instance.setView(this.instance);
          this.instance.on('change:zoom', function (event) {
            return _this2.changeZoom.emit(event);
          });
          this.instance.on('change:resolution', function (event) {
            return _this2.changeResolution.emit(event);
          });
          this.instance.on('change:center', function (event) {
            return _this2.changeCenter.emit(event);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              switch (key) {
                case 'zoom':
                  /** Work-around: setting the zoom via setProperties does not work. */
                  if (this.zoomAnimation) {
                    this.instance.animate({
                      zoom: changes[key].currentValue
                    });
                  } else {
                    this.instance.setZoom(changes[key].currentValue);
                  }

                  break;

                case 'projection':
                  this.instance = new ol_View__WEBPACK_IMPORTED_MODULE_3__["default"](this);
                  this.host.instance.setView(this.instance);
                  break;

                case 'center':
                  /** Work-around: setting the center via setProperties does not work. */
                  this.instance.setCenter(changes[key].currentValue);
                  break;

                default:
                  break;
              }

              properties[key] = changes[key].currentValue;
            }
          } // console.log('changes detected in aol-view, setting new properties: ', properties);


          this.instance.setProperties(properties, false);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {// console.log('removing aol-view');
        }
      }]);

      return ViewComponent;
    }();

    ViewComponent.ɵfac = function ViewComponent_Factory(t) {
      return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ViewComponent,
      selectors: [["aol-view"]],
      inputs: {
        zoomAnimation: "zoomAnimation",
        constrainRotation: "constrainRotation",
        enableRotation: "enableRotation",
        extent: "extent",
        maxResolution: "maxResolution",
        minResolution: "minResolution",
        maxZoom: "maxZoom",
        minZoom: "minZoom",
        resolution: "resolution",
        resolutions: "resolutions",
        rotation: "rotation",
        zoom: "zoom",
        zoomFactor: "zoomFactor",
        center: "center",
        projection: "projection",
        constrainOnlyCenter: "constrainOnlyCenter",
        smoothExtentConstraint: "smoothExtentConstraint",
        constrainResolution: "constrainResolution",
        smoothResolutionConstraint: "smoothResolutionConstraint",
        showFullExtent: "showFullExtent",
        multiWorld: "multiWorld"
      },
      outputs: {
        changeZoom: "changeZoom",
        changeResolution: "changeResolution",
        changeCenter: "changeCenter"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ViewComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "constrainRotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "enableRotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "extent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "maxResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "minResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "minZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "resolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "resolutions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "rotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "zoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "zoomFactor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "center", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "constrainOnlyCenter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "smoothExtentConstraint", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "constrainResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "smoothResolutionConstraint", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "showFullExtent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "multiWorld", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ViewComponent.prototype, "zoomAnimation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ViewComponent.prototype, "changeZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ViewComponent.prototype, "changeResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ViewComponent.prototype, "changeCenter", void 0);

    var GraticuleComponent = /*#__PURE__*/function () {
      function GraticuleComponent(map) {
        _classCallCheck(this, GraticuleComponent);

        this.map = map;
        this.componentType = 'graticule';
      }

      _createClass(GraticuleComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              properties[key] = changes[key].currentValue;
            }
          }

          if (properties) {
            this.instance = new ol__WEBPACK_IMPORTED_MODULE_5__["Graticule"](properties);
          }

          this.instance.setMap(this.map.instance);
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.instance = new ol__WEBPACK_IMPORTED_MODULE_5__["Graticule"]({
            strokeStyle: this.strokeStyle,
            showLabels: this.showLabels,
            lonLabelPosition: this.lonLabelPosition,
            latLabelPosition: this.latLabelPosition
          });
          this.instance.setMap(this.map.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.instance.setMap(null);
        }
      }]);

      return GraticuleComponent;
    }();

    GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) {
      return new (t || GraticuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    GraticuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GraticuleComponent,
      selectors: [["aol-graticule"]],
      inputs: {
        strokeStyle: "strokeStyle",
        showLabels: "showLabels",
        lonLabelPosition: "lonLabelPosition",
        latLabelPosition: "latLabelPosition"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GraticuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GraticuleComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraticuleComponent.prototype, "strokeStyle", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraticuleComponent.prototype, "showLabels", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraticuleComponent.prototype, "lonLabelPosition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GraticuleComponent.prototype, "latLabelPosition", void 0);

    var LayerComponent = /*#__PURE__*/function () {
      function LayerComponent(host) {
        _classCallCheck(this, LayerComponent);

        this.host = host;
        this.componentType = 'layer';
      }

      _createClass(LayerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.prerender !== null && this.prerender !== undefined) {
            this.instance.on('prerender', this.prerender);
          }

          if (this.postrender !== null && this.postrender !== undefined) {
            this.instance.on('postrender', this.postrender);
          }

          this.host.instance.getLayers().push(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.host.instance.getLayers().remove(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              properties[key] = changes[key].currentValue;

              if (key === 'prerender') {
                this.instance.un('prerender', changes[key].previousValue);
                this.instance.on('prerender', changes[key].currentValue);
              }

              if (key === 'postrender') {
                this.instance.un('postrender', changes[key].previousValue);
                this.instance.on('postrender', changes[key].currentValue);
              }
            }
          } // console.log('changes detected in aol-layer, setting new properties: ', properties);


          this.instance.setProperties(properties, false);
        }
      }]);

      return LayerComponent;
    }();

    LayerComponent.ɵfac = function LayerComponent_Factory(t) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinvalidFactory"]();
    };

    LayerComponent.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: LayerComponent,
      inputs: {
        opacity: "opacity",
        visible: "visible",
        extent: "extent",
        zIndex: "zIndex",
        minResolution: "minResolution",
        maxResolution: "maxResolution",
        prerender: "prerender",
        postrender: "postrender"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "extent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "zIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "minResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "maxResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "prerender", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerComponent.prototype, "postrender", void 0);

    var LayerGroupComponent = /*#__PURE__*/function (_LayerComponent) {
      _inherits(LayerGroupComponent, _LayerComponent);

      var _super = _createSuper(LayerGroupComponent);

      function LayerGroupComponent(map, group) {
        _classCallCheck(this, LayerGroupComponent);

        return _super.call(this, group || map);
      }

      _createClass(LayerGroupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(`creating ol.layer.Group instance with:`, this);
          this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Group"](this);

          _get(_getPrototypeOf(LayerGroupComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return LayerGroupComponent;
    }(LayerComponent);

    LayerGroupComponent.ɵfac = function LayerGroupComponent_Factory(t) {
      return new (t || LayerGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 12));
    };

    LayerGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayerGroupComponent,
      selectors: [["aol-layer-group"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LayerGroupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    LayerGroupComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: LayerGroupComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    LayerGroupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], LayerGroupComponent);

    var LayerImageComponent = /*#__PURE__*/function (_LayerComponent2) {
      _inherits(LayerImageComponent, _LayerComponent2);

      var _super2 = _createSuper(LayerImageComponent);

      function LayerImageComponent(map, group) {
        _classCallCheck(this, LayerImageComponent);

        return _super2.call(this, group || map);
      }

      _createClass(LayerImageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Image"](this);

          _get(_getPrototypeOf(LayerImageComponent.prototype), "ngOnInit", this).call(this);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(LayerImageComponent.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return LayerImageComponent;
    }(LayerComponent);

    LayerImageComponent.ɵfac = function LayerImageComponent_Factory(t) {
      return new (t || LayerImageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
    };

    LayerImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayerImageComponent,
      selectors: [["aol-layer-image"]],
      inputs: {
        opacity: "opacity",
        visible: "visible",
        extent: "extent",
        minResolution: "minResolution",
        maxResolution: "maxResolution",
        zIndex: "zIndex"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LayerImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    LayerImageComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: LayerGroupComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerImageComponent.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerImageComponent.prototype, "visible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerImageComponent.prototype, "extent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerImageComponent.prototype, "minResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerImageComponent.prototype, "maxResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerImageComponent.prototype, "zIndex", void 0);
    LayerImageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], LayerImageComponent);

    var LayerTileComponent = /*#__PURE__*/function (_LayerComponent3) {
      _inherits(LayerTileComponent, _LayerComponent3);

      var _super3 = _createSuper(LayerTileComponent);

      function LayerTileComponent(map, group) {
        _classCallCheck(this, LayerTileComponent);

        return _super3.call(this, group || map);
      }

      _createClass(LayerTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.layer.Tile instance with:', this);
          this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Tile"](this);

          _get(_getPrototypeOf(LayerTileComponent.prototype), "ngOnInit", this).call(this);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(LayerTileComponent.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return LayerTileComponent;
    }(LayerComponent);

    LayerTileComponent.ɵfac = function LayerTileComponent_Factory(t) {
      return new (t || LayerTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
    };

    LayerTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayerTileComponent,
      selectors: [["aol-layer-tile"]],
      inputs: {
        preload: "preload",
        useInterimTilesOnError: "useInterimTilesOnError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LayerTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    LayerTileComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: LayerGroupComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerTileComponent.prototype, "preload", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerTileComponent.prototype, "useInterimTilesOnError", void 0);
    LayerTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], LayerTileComponent);

    var LayerVectorComponent = /*#__PURE__*/function (_LayerComponent4) {
      _inherits(LayerVectorComponent, _LayerComponent4);

      var _super4 = _createSuper(LayerVectorComponent);

      function LayerVectorComponent(map, group) {
        _classCallCheck(this, LayerVectorComponent);

        return _super4.call(this, group || map);
      }

      _createClass(LayerVectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.layer.Vector instance with:', this);
          this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_6__["Vector"](this);

          _get(_getPrototypeOf(LayerVectorComponent.prototype), "ngOnInit", this).call(this);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(LayerVectorComponent.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return LayerVectorComponent;
    }(LayerComponent);

    LayerVectorComponent.ɵfac = function LayerVectorComponent_Factory(t) {
      return new (t || LayerVectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
    };

    LayerVectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayerVectorComponent,
      selectors: [["aol-layer-vector"]],
      inputs: {
        renderBuffer: "renderBuffer",
        style: "style",
        updateWhileAnimating: "updateWhileAnimating",
        updateWhileInteracting: "updateWhileInteracting"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LayerVectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    LayerVectorComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: LayerGroupComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorComponent.prototype, "renderBuffer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorComponent.prototype, "updateWhileAnimating", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorComponent.prototype, "updateWhileInteracting", void 0);
    LayerVectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], LayerVectorComponent);

    var LayerVectorTileComponent = /*#__PURE__*/function (_LayerComponent5) {
      _inherits(LayerVectorTileComponent, _LayerComponent5);

      var _super5 = _createSuper(LayerVectorTileComponent);

      function LayerVectorTileComponent(map, group) {
        _classCallCheck(this, LayerVectorTileComponent);

        return _super5.call(this, group || map);
      }

      _createClass(LayerVectorTileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.layer.VectorTile instance with:', this);
          this.instance = new ol_layer__WEBPACK_IMPORTED_MODULE_6__["VectorTile"](this);

          _get(_getPrototypeOf(LayerVectorTileComponent.prototype), "ngOnInit", this).call(this);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          _get(_getPrototypeOf(LayerVectorTileComponent.prototype), "ngOnChanges", this).call(this, changes);
        }
      }]);

      return LayerVectorTileComponent;
    }(LayerComponent);

    LayerVectorTileComponent.ɵfac = function LayerVectorTileComponent_Factory(t) {
      return new (t || LayerVectorTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerGroupComponent, 8));
    };

    LayerVectorTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LayerVectorTileComponent,
      selectors: [["aol-layer-vectortile"]],
      inputs: {
        renderBuffer: "renderBuffer",
        renderMode: "renderMode",
        renderOrder: "renderOrder",
        style: "style",
        updateWhileAnimating: "updateWhileAnimating",
        updateWhileInteracting: "updateWhileInteracting",
        visible: "visible"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function LayerVectorTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    LayerVectorTileComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: LayerGroupComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "renderBuffer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "renderMode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "renderOrder", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "updateWhileAnimating", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "updateWhileInteracting", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], LayerVectorTileComponent.prototype, "visible", void 0);
    LayerVectorTileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], LayerVectorTileComponent);

    var TileGridComponent = /*#__PURE__*/function () {
      function TileGridComponent() {
        _classCallCheck(this, TileGridComponent);
      }

      _createClass(TileGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.resolutions) {
            this.instance = Object(ol_tilegrid__WEBPACK_IMPORTED_MODULE_8__["createXYZ"])(this);
          } else {
            this.instance = new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_9__["default"](this);
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.resolutions) {
            this.instance = Object(ol_tilegrid__WEBPACK_IMPORTED_MODULE_8__["createXYZ"])(this);
          } else {
            this.instance = new ol_tilegrid_TileGrid__WEBPACK_IMPORTED_MODULE_9__["default"](this);
          }
        }
      }]);

      return TileGridComponent;
    }();

    TileGridComponent.ɵfac = function TileGridComponent_Factory(t) {
      return new (t || TileGridComponent)();
    };

    TileGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TileGridComponent,
      selectors: [["aol-tilegrid"]],
      inputs: {
        extent: "extent",
        maxZoom: "maxZoom",
        minZoom: "minZoom",
        tileSize: "tileSize",
        origin: "origin",
        resolutions: "resolutions"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 0,
      vars: 0,
      template: function TileGridComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridComponent.prototype, "extent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridComponent.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridComponent.prototype, "minZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridComponent.prototype, "tileSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridComponent.prototype, "origin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridComponent.prototype, "resolutions", void 0);
    var SourceXYZComponent_1;

    var SourceXYZComponent = SourceXYZComponent_1 = /*#__PURE__*/function (_SourceComponent) {
      _inherits(SourceXYZComponent, _SourceComponent);

      var _super6 = _createSuper(SourceXYZComponent);

      function SourceXYZComponent(layer) {
        var _this3;

        _classCallCheck(this, SourceXYZComponent);

        _this3 = _super6.call(this, layer);
        _this3.layer = layer;
        _this3.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this3.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this3.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this3;
      }

      _createClass(SourceXYZComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
          }

          this.init();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              properties[key] = changes[key].currentValue;
            }
          }

          this.instance.setProperties(properties, false);

          if (changes.hasOwnProperty('url')) {
            this.init();
          }
        }
      }, {
        key: "init",
        value: function init() {
          var _this4 = this;

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["XYZ"](this);
          this.instance.on('tileloadstart', function (event) {
            return _this4.tileLoadStart.emit(event);
          });
          this.instance.on('tileloadend', function (event) {
            return _this4.tileLoadEnd.emit(event);
          });
          this.instance.on('tileloaderror', function (event) {
            return _this4.tileLoadError.emit(event);
          });

          this._register(this.instance);
        }
      }]);

      return SourceXYZComponent;
    }(SourceComponent);

    SourceXYZComponent.ɵfac = function SourceXYZComponent_Factory(t) {
      return new (t || SourceXYZComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 9));
    };

    SourceXYZComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceXYZComponent,
      selectors: [["aol-source-xyz"]],
      contentQueries: function SourceXYZComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TileGridComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tileGridXYZ = _t.first);
        }
      },
      inputs: {
        tileGrid: "tileGrid",
        cacheSize: "cacheSize",
        crossOrigin: "crossOrigin",
        opaque: "opaque",
        projection: "projection",
        reprojectionErrorThreshold: "reprojectionErrorThreshold",
        minZoom: "minZoom",
        maxZoom: "maxZoom",
        tileLoadFunction: "tileLoadFunction",
        tilePixelRatio: "tilePixelRatio",
        tileSize: "tileSize",
        tileUrlFunction: "tileUrlFunction",
        url: "url",
        urls: "urls",
        wrapX: "wrapX"
      },
      outputs: {
        tileLoadStart: "tileLoadStart",
        tileLoadEnd: "tileLoadEnd",
        tileLoadError: "tileLoadError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceXYZComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceXYZComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceXYZComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "cacheSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "opaque", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "reprojectionErrorThreshold", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "minZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "tileGrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "tileLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "tilePixelRatio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "tileSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "tileUrlFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "urls", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceXYZComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TileGridComponent)], SourceXYZComponent.prototype, "tileGridXYZ", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceXYZComponent.prototype, "tileLoadStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceXYZComponent.prototype, "tileLoadEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceXYZComponent.prototype, "tileLoadError", void 0);
    SourceXYZComponent = SourceXYZComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceXYZComponent);
    var SourceOsmComponent_1;

    var SourceOsmComponent = SourceOsmComponent_1 = /*#__PURE__*/function (_SourceXYZComponent) {
      _inherits(SourceOsmComponent, _SourceXYZComponent);

      var _super7 = _createSuper(SourceOsmComponent);

      function SourceOsmComponent(layer) {
        var _this5;

        _classCallCheck(this, SourceOsmComponent);

        _this5 = _super7.call(this, layer);
        _this5.layer = layer;
        _this5.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this5.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this5.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this5;
      }

      _createClass(SourceOsmComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this6 = this;

          if (this.tileGridXYZ) {
            this.tileGrid = this.tileGridXYZ.instance;
          }

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["OSM"](this);
          this.instance.on('tileloadstart', function (event) {
            return _this6.tileLoadStart.emit(event);
          });
          this.instance.on('tileloadend', function (event) {
            return _this6.tileLoadEnd.emit(event);
          });
          this.instance.on('tileloaderror', function (event) {
            return _this6.tileLoadError.emit(event);
          });

          this._register(this.instance);
        }
      }]);

      return SourceOsmComponent;
    }(SourceXYZComponent);

    SourceOsmComponent.ɵfac = function SourceOsmComponent_Factory(t) {
      return new (t || SourceOsmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 9));
    };

    SourceOsmComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceOsmComponent,
      selectors: [["aol-source-osm"]],
      inputs: {
        attributions: "attributions",
        cacheSize: "cacheSize",
        crossOrigin: "crossOrigin",
        maxZoom: "maxZoom",
        opaque: "opaque",
        reprojectionErrorThreshold: "reprojectionErrorThreshold",
        tileLoadFunction: "tileLoadFunction",
        url: "url",
        wrapX: "wrapX"
      },
      outputs: {
        tileLoadStart: "tileLoadStart",
        tileLoadEnd: "tileLoadEnd",
        tileLoadError: "tileLoadError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceOsmComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-source-osm"]],
      template: function SourceOsmComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    SourceOsmComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "attributions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "cacheSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "opaque", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "reprojectionErrorThreshold", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "tileLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceOsmComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceOsmComponent.prototype, "tileLoadStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceOsmComponent.prototype, "tileLoadEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceOsmComponent.prototype, "tileLoadError", void 0);
    SourceOsmComponent = SourceOsmComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceOsmComponent);
    var SourceBingmapsComponent_1;

    var SourceBingmapsComponent = SourceBingmapsComponent_1 = /*#__PURE__*/function (_SourceComponent2) {
      _inherits(SourceBingmapsComponent, _SourceComponent2);

      var _super8 = _createSuper(SourceBingmapsComponent);

      function SourceBingmapsComponent(layer) {
        var _this7;

        _classCallCheck(this, SourceBingmapsComponent);

        _this7 = _super8.call(this, layer);
        _this7.imagerySet = 'Aerial';
        return _this7;
      }

      _createClass(SourceBingmapsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["BingMaps"](this);
          this.host.instance.setSource(this.instance);
        }
      }]);

      return SourceBingmapsComponent;
    }(SourceComponent);

    SourceBingmapsComponent.ɵfac = function SourceBingmapsComponent_Factory(t) {
      return new (t || SourceBingmapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
    };

    SourceBingmapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceBingmapsComponent,
      selectors: [["aol-source-bingmaps"]],
      inputs: {
        imagerySet: "imagerySet",
        cacheSize: "cacheSize",
        hidpi: "hidpi",
        culture: "culture",
        key: "key",
        maxZoom: "maxZoom",
        reprojectionErrorThreshold: "reprojectionErrorThreshold",
        tileLoadFunction: "tileLoadFunction",
        wrapX: "wrapX"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceBingmapsComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-source-bingmaps"]],
      template: function SourceBingmapsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    SourceBingmapsComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "cacheSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "hidpi", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "culture", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "key", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "imagerySet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "maxZoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "reprojectionErrorThreshold", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "tileLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceBingmapsComponent.prototype, "wrapX", void 0);
    SourceBingmapsComponent = SourceBingmapsComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceBingmapsComponent);
    var SourceVectorComponent_1;

    var SourceVectorComponent = SourceVectorComponent_1 = /*#__PURE__*/function (_SourceComponent3) {
      _inherits(SourceVectorComponent, _SourceComponent3);

      var _super9 = _createSuper(SourceVectorComponent);

      function SourceVectorComponent(layer) {
        _classCallCheck(this, SourceVectorComponent);

        return _super9.call(this, layer);
      }

      _createClass(SourceVectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["Vector"](this);
          this.host.instance.setSource(this.instance);
        }
      }]);

      return SourceVectorComponent;
    }(SourceComponent);

    SourceVectorComponent.ɵfac = function SourceVectorComponent_Factory(t) {
      return new (t || SourceVectorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 1));
    };

    SourceVectorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceVectorComponent,
      selectors: [["aol-source-vector"]],
      inputs: {
        overlaps: "overlaps",
        useSpatialIndex: "useSpatialIndex",
        wrapX: "wrapX",
        url: "url",
        format: "format",
        strategy: "strategy"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceVectorComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceVectorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceVectorComponent.ctorParameters = function () {
      return [{
        type: LayerVectorComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorComponent.prototype, "overlaps", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorComponent.prototype, "useSpatialIndex", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorComponent.prototype, "strategy", void 0);
    SourceVectorComponent = SourceVectorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceVectorComponent);
    var SourceClusterComponent_1;

    var SourceClusterComponent = SourceClusterComponent_1 = /*#__PURE__*/function (_SourceComponent4) {
      _inherits(SourceClusterComponent, _SourceComponent4);

      var _super10 = _createSuper(SourceClusterComponent);

      function SourceClusterComponent(layer) {
        _classCallCheck(this, SourceClusterComponent);

        return _super10.call(this, layer);
      }

      _createClass(SourceClusterComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.source = this.sourceVectorComponent.instance;
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["Cluster"](this);
          this.host.instance.setSource(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.instance && changes.hasOwnProperty('distance')) {
            this.instance.setDistance(this.distance);
          }
        }
      }]);

      return SourceClusterComponent;
    }(SourceComponent);

    SourceClusterComponent.ɵfac = function SourceClusterComponent_Factory(t) {
      return new (t || SourceClusterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 1));
    };

    SourceClusterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceClusterComponent,
      selectors: [["aol-source-cluster"]],
      contentQueries: function SourceClusterComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SourceVectorComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.sourceVectorComponent = _t.first);
        }
      },
      inputs: {
        distance: "distance",
        geometryFunction: "geometryFunction",
        wrapX: "wrapX"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceClusterComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceClusterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceClusterComponent.ctorParameters = function () {
      return [{
        type: LayerVectorComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceClusterComponent.prototype, "distance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceClusterComponent.prototype, "geometryFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceClusterComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(SourceVectorComponent)], SourceClusterComponent.prototype, "sourceVectorComponent", void 0);
    SourceClusterComponent = SourceClusterComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceClusterComponent);

    var TileGridWMTSComponent = /*#__PURE__*/function (_TileGridComponent) {
      _inherits(TileGridWMTSComponent, _TileGridComponent);

      var _super11 = _createSuper(TileGridWMTSComponent);

      function TileGridWMTSComponent() {
        _classCallCheck(this, TileGridWMTSComponent);

        return _super11.apply(this, arguments);
      }

      _createClass(TileGridWMTSComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_tilegrid_WMTS__WEBPACK_IMPORTED_MODULE_10__["default"](this);
        }
      }]);

      return TileGridWMTSComponent;
    }(TileGridComponent);

    TileGridWMTSComponent.ɵfac = function TileGridWMTSComponent_Factory(t) {
      return ɵTileGridWMTSComponent_BaseFactory(t || TileGridWMTSComponent);
    };

    TileGridWMTSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TileGridWMTSComponent,
      selectors: [["aol-tilegrid-wmts"]],
      inputs: {
        origin: "origin",
        origins: "origins",
        resolutions: "resolutions",
        matrixIds: "matrixIds",
        sizes: "sizes",
        tileSizes: "tileSizes",
        widths: "widths"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function TileGridWMTSComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "origin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "origins", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "resolutions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "matrixIds", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "sizes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "tileSizes", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TileGridWMTSComponent.prototype, "widths", void 0);
    var SourceTileWMTSComponent_1;

    var SourceTileWMTSComponent = SourceTileWMTSComponent_1 = /*#__PURE__*/function (_SourceComponent5) {
      _inherits(SourceTileWMTSComponent, _SourceComponent5);

      var _super12 = _createSuper(SourceTileWMTSComponent);

      function SourceTileWMTSComponent(layer) {
        var _this8;

        _classCallCheck(this, SourceTileWMTSComponent);

        _this8 = _super12.call(this, layer);
        _this8.tileLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this8.tileLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this8.tileLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this8;
      }

      _createClass(SourceTileWMTSComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              switch (key) {
                case 'url':
                  this.url = changes[key].currentValue;
                  this.setLayerSource();
                  break;

                default:
                  break;
              }

              properties[key] = changes[key].currentValue;
            }
          }

          this.instance.setProperties(properties, false);
        }
      }, {
        key: "setLayerSource",
        value: function setLayerSource() {
          var _this9 = this;

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["WMTS"](this);
          this.instance.on('tileloadstart', function (event) {
            return _this9.tileLoadStart.emit(event);
          });
          this.instance.on('tileloadend', function (event) {
            return _this9.tileLoadEnd.emit(event);
          });
          this.instance.on('tileloaderror', function (event) {
            return _this9.tileLoadError.emit(event);
          });
          this.host.instance.setSource(this.instance);
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (this.tileGridWMTS) {
            this.tileGrid = this.tileGridWMTS.instance;
            this.setLayerSource();
          }
        }
      }]);

      return SourceTileWMTSComponent;
    }(SourceComponent);

    SourceTileWMTSComponent.ɵfac = function SourceTileWMTSComponent_Factory(t) {
      return new (t || SourceTileWMTSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
    };

    SourceTileWMTSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceTileWMTSComponent,
      selectors: [["aol-source-tilewmts"]],
      contentQueries: function SourceTileWMTSComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TileGridWMTSComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tileGridWMTS = _t.first);
        }
      },
      inputs: {
        url: "url",
        tileGrid: "tileGrid",
        cacheSize: "cacheSize",
        crossOrigin: "crossOrigin",
        projection: "projection",
        reprojectionErrorThreshold: "reprojectionErrorThreshold",
        requestEncoding: "requestEncoding",
        layer: "layer",
        style: "style",
        tileClass: "tileClass",
        tilePixelRatio: "tilePixelRatio",
        version: "version",
        format: "format",
        matrixSet: "matrixSet",
        dimensions: "dimensions",
        tileLoadFunction: "tileLoadFunction",
        urls: "urls",
        wrapX: "wrapX"
      },
      outputs: {
        tileLoadStart: "tileLoadStart",
        tileLoadEnd: "tileLoadEnd",
        tileLoadError: "tileLoadError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceTileWMTSComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceTileWMTSComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceTileWMTSComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "cacheSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "tileGrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "reprojectionErrorThreshold", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "requestEncoding", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "layer", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "tileClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "tilePixelRatio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "version", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "format", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "matrixSet", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "dimensions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "tileLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "urls", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMTSComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceTileWMTSComponent.prototype, "tileLoadStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceTileWMTSComponent.prototype, "tileLoadEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceTileWMTSComponent.prototype, "tileLoadError", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TileGridWMTSComponent)], SourceTileWMTSComponent.prototype, "tileGridWMTS", void 0);
    SourceTileWMTSComponent = SourceTileWMTSComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceTileWMTSComponent);

    var FormatComponent = function FormatComponent() {
      _classCallCheck(this, FormatComponent);

      this.componentType = 'format';
    };

    var SourceVectorTileComponent_1;

    var SourceVectorTileComponent = SourceVectorTileComponent_1 = /*#__PURE__*/function (_SourceComponent6) {
      _inherits(SourceVectorTileComponent, _SourceComponent6);

      var _super13 = _createSuper(SourceVectorTileComponent);

      function SourceVectorTileComponent(layer) {
        _classCallCheck(this, SourceVectorTileComponent);

        return _super13.call(this, layer);
      }
      /* need the children to construct the OL3 object */


      _createClass(SourceVectorTileComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.format = this.formatComponent.instance;
          this.tileGrid = this.tileGridComponent.instance; // console.log('creating ol.source.VectorTile instance with:', this);

          this.instance = new ol__WEBPACK_IMPORTED_MODULE_5__["VectorTile"](this);
          this.host.instance.setSource(this.instance);
        }
      }]);

      return SourceVectorTileComponent;
    }(SourceComponent);

    SourceVectorTileComponent.ɵfac = function SourceVectorTileComponent_Factory(t) {
      return new (t || SourceVectorTileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorTileComponent, 1));
    };

    SourceVectorTileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceVectorTileComponent,
      selectors: [["aol-source-vectortile"]],
      contentQueries: function SourceVectorTileComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, FormatComponent, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, TileGridComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.formatComponent = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.tileGridComponent = _t.first);
        }
      },
      inputs: {
        cacheSize: "cacheSize",
        overlaps: "overlaps",
        projection: "projection",
        tilePixelRatio: "tilePixelRatio",
        tileUrlFunction: "tileUrlFunction",
        url: "url",
        urls: "urls",
        wrapX: "wrapX"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceVectorTileComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceVectorTileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceVectorTileComponent.ctorParameters = function () {
      return [{
        type: LayerVectorTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "cacheSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "overlaps", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "tilePixelRatio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "tileUrlFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "urls", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceVectorTileComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(FormatComponent)], SourceVectorTileComponent.prototype, "formatComponent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(TileGridComponent)], SourceVectorTileComponent.prototype, "tileGridComponent", void 0);
    SourceVectorTileComponent = SourceVectorTileComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceVectorTileComponent);
    var SourceTileWMSComponent_1;

    var SourceTileWMSComponent = SourceTileWMSComponent_1 = /*#__PURE__*/function (_SourceComponent7) {
      _inherits(SourceTileWMSComponent, _SourceComponent7);

      var _super14 = _createSuper(SourceTileWMSComponent);

      function SourceTileWMSComponent(layer) {
        _classCallCheck(this, SourceTileWMSComponent);

        return _super14.call(this, layer);
      }

      _createClass(SourceTileWMSComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["TileWMS"](this);
          this.host.instance.setSource(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
          }
        }
      }]);

      return SourceTileWMSComponent;
    }(SourceComponent);

    SourceTileWMSComponent.ɵfac = function SourceTileWMSComponent_Factory(t) {
      return new (t || SourceTileWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
    };

    SourceTileWMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceTileWMSComponent,
      selectors: [["aol-source-tilewms"]],
      inputs: {
        cacheSize: "cacheSize",
        crossOrigin: "crossOrigin",
        gutter: "gutter",
        hidpi: "hidpi",
        params: "params",
        projection: "projection",
        reprojectionErrorThreshold: "reprojectionErrorThreshold",
        serverType: "serverType",
        tileGrid: "tileGrid",
        tileLoadFunction: "tileLoadFunction",
        url: "url",
        urls: "urls",
        wrapX: "wrapX"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceTileWMSComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceTileWMSComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceTileWMSComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "cacheSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "gutter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "hidpi", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "reprojectionErrorThreshold", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "serverType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "tileGrid", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "tileLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "urls", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileWMSComponent.prototype, "wrapX", void 0);
    SourceTileWMSComponent = SourceTileWMSComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceTileWMSComponent);
    var SourceTileJSONComponent_1;

    var SourceTileJSONComponent = SourceTileJSONComponent_1 = /*#__PURE__*/function (_SourceComponent8) {
      _inherits(SourceTileJSONComponent, _SourceComponent8);

      var _super15 = _createSuper(SourceTileJSONComponent);

      function SourceTileJSONComponent(layer) {
        _classCallCheck(this, SourceTileJSONComponent);

        return _super15.call(this, layer);
      }

      _createClass(SourceTileJSONComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["TileJSON"](this);
          this.host.instance.setSource(this.instance);
        }
      }]);

      return SourceTileJSONComponent;
    }(SourceComponent);

    SourceTileJSONComponent.ɵfac = function SourceTileJSONComponent_Factory(t) {
      return new (t || SourceTileJSONComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
    };

    SourceTileJSONComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceTileJSONComponent,
      selectors: [["aol-source-tilejson"]],
      inputs: {
        url: "url"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceTileJSONComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceTileJSONComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceTileJSONComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceTileJSONComponent.prototype, "url", void 0);
    SourceTileJSONComponent = SourceTileJSONComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceTileJSONComponent);
    var SourceGeoJSONComponent_1;

    var SourceGeoJSONComponent = SourceGeoJSONComponent_1 = /*#__PURE__*/function (_SourceComponent9) {
      _inherits(SourceGeoJSONComponent, _SourceComponent9);

      var _super16 = _createSuper(SourceGeoJSONComponent);

      function SourceGeoJSONComponent(layer) {
        _classCallCheck(this, SourceGeoJSONComponent);

        return _super16.call(this, layer);
      }

      _createClass(SourceGeoJSONComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.format = new ol_format__WEBPACK_IMPORTED_MODULE_11__["GeoJSON"](this);
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["Vector"](this);
          this.host.instance.setSource(this.instance);
        }
      }]);

      return SourceGeoJSONComponent;
    }(SourceComponent);

    SourceGeoJSONComponent.ɵfac = function SourceGeoJSONComponent_Factory(t) {
      return new (t || SourceGeoJSONComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 1));
    };

    SourceGeoJSONComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceGeoJSONComponent,
      selectors: [["aol-source-geojson"]],
      inputs: {
        defaultDataProjection: "defaultDataProjection",
        featureProjection: "featureProjection",
        geometryName: "geometryName",
        url: "url"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceGeoJSONComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceGeoJSONComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceGeoJSONComponent.ctorParameters = function () {
      return [{
        type: LayerVectorComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceGeoJSONComponent.prototype, "defaultDataProjection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceGeoJSONComponent.prototype, "featureProjection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceGeoJSONComponent.prototype, "geometryName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceGeoJSONComponent.prototype, "url", void 0);
    SourceGeoJSONComponent = SourceGeoJSONComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceGeoJSONComponent);
    var SourceImageStaticComponent_1;

    var SourceImageStaticComponent = SourceImageStaticComponent_1 = /*#__PURE__*/function (_SourceComponent10) {
      _inherits(SourceImageStaticComponent, _SourceComponent10);

      var _super17 = _createSuper(SourceImageStaticComponent);

      function SourceImageStaticComponent(layer) {
        var _this10;

        _classCallCheck(this, SourceImageStaticComponent);

        _this10 = _super17.call(this, layer);
        _this10.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this10.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this10.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this10;
      }

      _createClass(SourceImageStaticComponent, [{
        key: "setLayerSource",
        value: function setLayerSource() {
          var _this11 = this;

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["ImageStatic"](this);
          this.host.instance.setSource(this.instance);
          this.instance.on('imageloadstart', function (event) {
            return _this11.imageLoadStart.emit(event);
          });
          this.instance.on('imageloadend', function (event) {
            return _this11.imageLoadEnd.emit(event);
          });
          this.instance.on('imageloaderror', function (event) {
            return _this11.imageLoadError.emit(event);
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setLayerSource();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var properties = {};

          if (!this.instance) {
            return;
          }

          for (var key in changes) {
            if (changes.hasOwnProperty(key)) {
              switch (key) {
                case 'url':
                  this.url = changes[key].currentValue;
                  this.setLayerSource();
                  break;

                default:
                  break;
              }

              properties[key] = changes[key].currentValue;
            }
          }

          this.instance.setProperties(properties, false);
        }
      }]);

      return SourceImageStaticComponent;
    }(SourceComponent);

    SourceImageStaticComponent.ɵfac = function SourceImageStaticComponent_Factory(t) {
      return new (t || SourceImageStaticComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
    };

    SourceImageStaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceImageStaticComponent,
      selectors: [["aol-source-imagestatic"]],
      inputs: {
        url: "url",
        projection: "projection",
        imageExtent: "imageExtent",
        attributions: "attributions",
        crossOrigin: "crossOrigin",
        imageLoadFunction: "imageLoadFunction",
        imageSize: "imageSize"
      },
      outputs: {
        imageLoadStart: "imageLoadStart",
        imageLoadEnd: "imageLoadEnd",
        imageLoadError: "imageLoadError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceImageStaticComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceImageStaticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceImageStaticComponent.ctorParameters = function () {
      return [{
        type: LayerImageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "imageExtent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "attributions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "imageLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageStaticComponent.prototype, "imageSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageStaticComponent.prototype, "imageLoadStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageStaticComponent.prototype, "imageLoadEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageStaticComponent.prototype, "imageLoadError", void 0);
    SourceImageStaticComponent = SourceImageStaticComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceImageStaticComponent);
    var SourceImageWMSComponent_1;

    var SourceImageWMSComponent = SourceImageWMSComponent_1 = /*#__PURE__*/function (_SourceComponent11) {
      _inherits(SourceImageWMSComponent, _SourceComponent11);

      var _super18 = _createSuper(SourceImageWMSComponent);

      function SourceImageWMSComponent(layer) {
        var _this12;

        _classCallCheck(this, SourceImageWMSComponent);

        _this12 = _super18.call(this, layer);
        _this12.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this12.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this12.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this12;
      }

      _createClass(SourceImageWMSComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["ImageWMS"](this);
          this.host.instance.setSource(this.instance);
          this.instance.on('imageloadstart', function (event) {
            return _this13.imageLoadStart.emit(event);
          });
          this.instance.on('imageloadend', function (event) {
            return _this13.imageLoadEnd.emit(event);
          });
          this.instance.on('imageloaderror', function (event) {
            return _this13.imageLoadError.emit(event);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
          }
        }
      }]);

      return SourceImageWMSComponent;
    }(SourceComponent);

    SourceImageWMSComponent.ɵfac = function SourceImageWMSComponent_Factory(t) {
      return new (t || SourceImageWMSComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
    };

    SourceImageWMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceImageWMSComponent,
      selectors: [["aol-source-imagewms"]],
      inputs: {
        attributions: "attributions",
        crossOrigin: "crossOrigin",
        hidpi: "hidpi",
        serverType: "serverType",
        imageLoadFunction: "imageLoadFunction",
        params: "params",
        projection: "projection",
        ratio: "ratio",
        resolutions: "resolutions",
        url: "url"
      },
      outputs: {
        imageLoadStart: "imageLoadStart",
        imageLoadEnd: "imageLoadEnd",
        imageLoadError: "imageLoadError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceImageWMSComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceImageWMSComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceImageWMSComponent.ctorParameters = function () {
      return [{
        type: LayerImageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "attributions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "hidpi", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "serverType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "imageLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "ratio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "resolutions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageWMSComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageWMSComponent.prototype, "imageLoadStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageWMSComponent.prototype, "imageLoadEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageWMSComponent.prototype, "imageLoadError", void 0);
    SourceImageWMSComponent = SourceImageWMSComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceImageWMSComponent);
    var SourceImageArcGISRestComponent_1;

    var SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = /*#__PURE__*/function (_SourceComponent12) {
      _inherits(SourceImageArcGISRestComponent, _SourceComponent12);

      var _super19 = _createSuper(SourceImageArcGISRestComponent);

      function SourceImageArcGISRestComponent(layer) {
        var _this14;

        _classCallCheck(this, SourceImageArcGISRestComponent);

        _this14 = _super19.call(this, layer);
        _this14.ratio = 1.5;
        _this14.imageLoadStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this14.imageLoadEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this14.imageLoadError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this14;
      }

      _createClass(SourceImageArcGISRestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["ImageArcGISRest"](this);
          this.host.instance.setSource(this.instance);
          this.instance.on('imageloadstart', function (event) {
            return _this15.imageLoadStart.emit(event);
          });
          this.instance.on('imageloadend', function (event) {
            return _this15.imageLoadEnd.emit(event);
          });
          this.instance.on('imageloaderror', function (event) {
            return _this15.imageLoadError.emit(event);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.instance && changes.hasOwnProperty('params')) {
            this.instance.updateParams(this.params);
          }
        }
      }]);

      return SourceImageArcGISRestComponent;
    }(SourceComponent);

    SourceImageArcGISRestComponent.ɵfac = function SourceImageArcGISRestComponent_Factory(t) {
      return new (t || SourceImageArcGISRestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
    };

    SourceImageArcGISRestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceImageArcGISRestComponent,
      selectors: [["aol-source-imagearcgisrest"]],
      inputs: {
        ratio: "ratio",
        projection: "projection",
        url: "url",
        attributions: "attributions",
        crossOrigin: "crossOrigin",
        imageLoadFunction: "imageLoadFunction",
        params: "params",
        resolutions: "resolutions",
        wrapX: "wrapX"
      },
      outputs: {
        imageLoadStart: "imageLoadStart",
        imageLoadEnd: "imageLoadEnd",
        imageLoadError: "imageLoadError"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceImageArcGISRestComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceImageArcGISRestComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceImageArcGISRestComponent.ctorParameters = function () {
      return [{
        type: LayerImageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "url", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "attributions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "imageLoadFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "params", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "ratio", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "resolutions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceImageArcGISRestComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageArcGISRestComponent.prototype, "imageLoadStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageArcGISRestComponent.prototype, "imageLoadEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceImageArcGISRestComponent.prototype, "imageLoadError", void 0);
    SourceImageArcGISRestComponent = SourceImageArcGISRestComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceImageArcGISRestComponent);
    var SourceRasterComponent_1;

    var SourceRasterComponent = SourceRasterComponent_1 = /*#__PURE__*/function (_SourceComponent13) {
      _inherits(SourceRasterComponent, _SourceComponent13);

      var _super20 = _createSuper(SourceRasterComponent);

      function SourceRasterComponent(layer) {
        var _this16;

        _classCallCheck(this, SourceRasterComponent);

        _this16 = _super20.call(this, layer);
        _this16.beforeOperations = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this16.afterOperations = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        _this16.sources = [];
        return _this16;
      }

      _createClass(SourceRasterComponent, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          var _this17 = this;

          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["Raster"](this);
          this.instance.on('beforeoperations', function (event) {
            return _this17.beforeOperations.emit(event);
          });
          this.instance.on('afteroperations', function (event) {
            return _this17.afterOperations.emit(event);
          });

          this._register(this.instance);
        }
      }, {
        key: "source",
        set: function set(sourceComponent) {
          this.sources = [sourceComponent.instance];

          if (this.instance) {
            // Openlayer doesn't handle sources update. Just recreate Raster instance.
            this.init();
          }
        }
      }]);

      return SourceRasterComponent;
    }(SourceComponent);

    SourceRasterComponent.ɵfac = function SourceRasterComponent_Factory(t) {
      return new (t || SourceRasterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerImageComponent, 1));
    };

    SourceRasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceRasterComponent,
      selectors: [["aol-source-raster"]],
      contentQueries: function SourceRasterComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, SourceComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.source = _t.first);
        }
      },
      inputs: {
        operation: "operation",
        threads: "threads",
        lib: "lib",
        operationType: "operationType"
      },
      outputs: {
        beforeOperations: "beforeOperations",
        afterOperations: "afterOperations"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceRasterComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceRasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceRasterComponent.ctorParameters = function () {
      return [{
        type: LayerImageComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceRasterComponent.prototype, "operation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceRasterComponent.prototype, "threads", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceRasterComponent.prototype, "lib", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceRasterComponent.prototype, "operationType", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceRasterComponent.prototype, "beforeOperations", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SourceRasterComponent.prototype, "afterOperations", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(SourceComponent)], SourceRasterComponent.prototype, "source", null);
    SourceRasterComponent = SourceRasterComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceRasterComponent);

    var FeatureComponent = /*#__PURE__*/function () {
      function FeatureComponent(host) {
        _classCallCheck(this, FeatureComponent);

        this.host = host;
        this.componentType = 'feature';
      }

      _createClass(FeatureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol__WEBPACK_IMPORTED_MODULE_5__["Feature"]();

          if (this.id !== undefined) {
            this.instance.setId(this.id);
          }

          this.host.instance.addFeature(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.host.instance.removeFeature(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.instance) {
            this.instance.setId(this.id);
          }
        }
      }]);

      return FeatureComponent;
    }();

    FeatureComponent.ɵfac = function FeatureComponent_Factory(t) {
      return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SourceVectorComponent));
    };

    FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FeatureComponent,
      selectors: [["aol-feature"]],
      inputs: {
        id: "id"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function FeatureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    FeatureComponent.ctorParameters = function () {
      return [{
        type: SourceVectorComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FeatureComponent.prototype, "id", void 0);

    var GeometryCircleComponent = /*#__PURE__*/function (_SimpleGeometryCompon) {
      _inherits(GeometryCircleComponent, _SimpleGeometryCompon);

      var _super21 = _createSuper(GeometryCircleComponent);

      function GeometryCircleComponent(map, host) {
        var _this18;

        _classCallCheck(this, GeometryCircleComponent);

        _this18 = _super21.call(this, map, host);
        _this18.componentType = 'geometry-circle'; // defaulting coordinates to [0,0]. To be overridden in child component.

        _this18.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["Circle"]([0, 0]);
        return _this18;
      }

      _createClass(GeometryCircleComponent, [{
        key: "radius",
        get: function get() {
          return this.instance.getRadius();
        },
        set: function set(radius) {
          this.instance.setRadius(radius);
        }
      }]);

      return GeometryCircleComponent;
    }(SimpleGeometryComponent);

    GeometryCircleComponent.ɵfac = function GeometryCircleComponent_Factory(t) {
      return new (t || GeometryCircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryCircleComponent,
      selectors: [["aol-geometry-circle"]],
      inputs: {
        radius: "radius"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryCircleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryCircleComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], GeometryCircleComponent.prototype, "radius", null);

    var GeometryLinestringComponent = /*#__PURE__*/function (_SimpleGeometryCompon2) {
      _inherits(GeometryLinestringComponent, _SimpleGeometryCompon2);

      var _super22 = _createSuper(GeometryLinestringComponent);

      function GeometryLinestringComponent(map, host) {
        var _this19;

        _classCallCheck(this, GeometryLinestringComponent);

        _this19 = _super22.call(this, map, host);
        _this19.componentType = 'geometry-linestring';
        return _this19;
      }

      _createClass(GeometryLinestringComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["LineString"]([[0, 0], [1, 1]]);

          _get(_getPrototypeOf(GeometryLinestringComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return GeometryLinestringComponent;
    }(SimpleGeometryComponent);

    GeometryLinestringComponent.ɵfac = function GeometryLinestringComponent_Factory(t) {
      return new (t || GeometryLinestringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryLinestringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryLinestringComponent,
      selectors: [["aol-geometry-linestring"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryLinestringComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryLinestringComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    var GeometryMultiLinestringComponent = /*#__PURE__*/function (_SimpleGeometryCompon3) {
      _inherits(GeometryMultiLinestringComponent, _SimpleGeometryCompon3);

      var _super23 = _createSuper(GeometryMultiLinestringComponent);

      function GeometryMultiLinestringComponent(map, host) {
        var _this20;

        _classCallCheck(this, GeometryMultiLinestringComponent);

        _this20 = _super23.call(this, map, host);
        _this20.componentType = 'geometry-multilinestring';
        return _this20;
      }

      _createClass(GeometryMultiLinestringComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["MultiLineString"]([[[0, 0], [1, 1]]]);

          _get(_getPrototypeOf(GeometryMultiLinestringComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return GeometryMultiLinestringComponent;
    }(SimpleGeometryComponent);

    GeometryMultiLinestringComponent.ɵfac = function GeometryMultiLinestringComponent_Factory(t) {
      return new (t || GeometryMultiLinestringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryMultiLinestringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryMultiLinestringComponent,
      selectors: [["aol-geometry-multilinestring"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryMultiLinestringComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryMultiLinestringComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    var GeometryMultiPointComponent = /*#__PURE__*/function (_SimpleGeometryCompon4) {
      _inherits(GeometryMultiPointComponent, _SimpleGeometryCompon4);

      var _super24 = _createSuper(GeometryMultiPointComponent);

      function GeometryMultiPointComponent(map, host) {
        var _this21;

        _classCallCheck(this, GeometryMultiPointComponent);

        _this21 = _super24.call(this, map, host);
        _this21.componentType = 'geometry-multipoint';
        return _this21;
      }

      _createClass(GeometryMultiPointComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["MultiPoint"]([[0, 0], [1, 1]]);

          _get(_getPrototypeOf(GeometryMultiPointComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return GeometryMultiPointComponent;
    }(SimpleGeometryComponent);

    GeometryMultiPointComponent.ɵfac = function GeometryMultiPointComponent_Factory(t) {
      return new (t || GeometryMultiPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryMultiPointComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryMultiPointComponent,
      selectors: [["aol-geometry-multipoint"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryMultiPointComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryMultiPointComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    var GeometryMultiPolygonComponent = /*#__PURE__*/function (_SimpleGeometryCompon5) {
      _inherits(GeometryMultiPolygonComponent, _SimpleGeometryCompon5);

      var _super25 = _createSuper(GeometryMultiPolygonComponent);

      function GeometryMultiPolygonComponent(map, host) {
        var _this22;

        _classCallCheck(this, GeometryMultiPolygonComponent);

        _this22 = _super25.call(this, map, host);
        _this22.componentType = 'geometry-multipolygon';
        return _this22;
      }

      _createClass(GeometryMultiPolygonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["MultiPolygon"]([[[[0, 0], [1, 1], [0, 1]]]]);

          _get(_getPrototypeOf(GeometryMultiPolygonComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return GeometryMultiPolygonComponent;
    }(SimpleGeometryComponent);

    GeometryMultiPolygonComponent.ɵfac = function GeometryMultiPolygonComponent_Factory(t) {
      return new (t || GeometryMultiPolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryMultiPolygonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryMultiPolygonComponent,
      selectors: [["aol-geometry-multipolygon"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryMultiPolygonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryMultiPolygonComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    var GeometryPointComponent = /*#__PURE__*/function (_SimpleGeometryCompon6) {
      _inherits(GeometryPointComponent, _SimpleGeometryCompon6);

      var _super26 = _createSuper(GeometryPointComponent);

      function GeometryPointComponent(map, host) {
        var _this23;

        _classCallCheck(this, GeometryPointComponent);

        _this23 = _super26.call(this, map, host);
        _this23.componentType = 'geometry-point';
        return _this23;
      }

      _createClass(GeometryPointComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["Point"]([0, 0]);

          _get(_getPrototypeOf(GeometryPointComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return GeometryPointComponent;
    }(SimpleGeometryComponent);

    GeometryPointComponent.ɵfac = function GeometryPointComponent_Factory(t) {
      return new (t || GeometryPointComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryPointComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryPointComponent,
      selectors: [["aol-geometry-point"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryPointComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryPointComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    var GeometryPolygonComponent = /*#__PURE__*/function (_SimpleGeometryCompon7) {
      _inherits(GeometryPolygonComponent, _SimpleGeometryCompon7);

      var _super27 = _createSuper(GeometryPolygonComponent);

      function GeometryPolygonComponent(map, host) {
        var _this24;

        _classCallCheck(this, GeometryPolygonComponent);

        _this24 = _super27.call(this, map, host);
        _this24.componentType = 'geometry-polygon';
        return _this24;
      }

      _createClass(GeometryPolygonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_geom__WEBPACK_IMPORTED_MODULE_12__["Polygon"]([[[0, 0], [1, 1], [0, 1]]]);

          _get(_getPrototypeOf(GeometryPolygonComponent.prototype), "ngOnInit", this).call(this);
        }
      }]);

      return GeometryPolygonComponent;
    }(SimpleGeometryComponent);

    GeometryPolygonComponent.ɵfac = function GeometryPolygonComponent_Factory(t) {
      return new (t || GeometryPolygonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent));
    };

    GeometryPolygonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: GeometryPolygonComponent,
      selectors: [["aol-geometry-polygon"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function GeometryPolygonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    GeometryPolygonComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: FeatureComponent
      }];
    };

    var ContentComponent = function ContentComponent(elementRef) {
      _classCallCheck(this, ContentComponent);

      this.elementRef = elementRef;
    };

    ContentComponent.ɵfac = function ContentComponent_Factory(t) {
      return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ContentComponent,
      selectors: [["aol-content"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ContentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ContentComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    var OverlayComponent = /*#__PURE__*/function () {
      function OverlayComponent(map) {
        _classCallCheck(this, OverlayComponent);

        this.map = map;
        this.componentType = 'overlay';
      }

      _createClass(OverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new ol__WEBPACK_IMPORTED_MODULE_5__["Overlay"](this);
            this.map.instance.addOverlay(this.instance);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.instance) {
            this.map.instance.removeOverlay(this.instance);
          }
        }
      }]);

      return OverlayComponent;
    }();

    OverlayComponent.ɵfac = function OverlayComponent_Factory(t) {
      return new (t || OverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: OverlayComponent,
      selectors: [["aol-overlay"]],
      contentQueries: function OverlayComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, ContentComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      inputs: {
        id: "id",
        offset: "offset",
        positioning: "positioning",
        stopEvent: "stopEvent",
        insertFirst: "insertFirst",
        autoPan: "autoPan",
        autoPanAnimation: "autoPanAnimation",
        autoPanMargin: "autoPanMargin"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function OverlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    OverlayComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(ContentComponent, {
      "static": true
    })], OverlayComponent.prototype, "content", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "id", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "positioning", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "stopEvent", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "insertFirst", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "autoPan", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "autoPanAnimation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], OverlayComponent.prototype, "autoPanMargin", void 0);

    var CoordinateComponent = /*#__PURE__*/function () {
      function CoordinateComponent(map, viewHost, geometryPointHost, geometryCircleHost, overlayHost) {
        _classCallCheck(this, CoordinateComponent);

        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857'; // console.log('instancing aol-coordinate');

        if (geometryPointHost !== null) {
          this.host = geometryPointHost;
        } else if (geometryCircleHost !== null) {
          this.host = geometryCircleHost;
        } else if (viewHost !== null) {
          this.host = viewHost;
        } else if (overlayHost !== null) {
          this.host = overlayHost;
        }
      }

      _createClass(CoordinateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.map.instance.on('change:view', function (e) {
            return _this25.onMapViewChanged(e);
          });
          this.mapSrid = this.map.instance.getView().getProjection().getCode();
          this.transformCoordinates();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.transformCoordinates();
        }
      }, {
        key: "onMapViewChanged",
        value: function onMapViewChanged(event) {
          this.mapSrid = event.target.get(event.key).getProjection().getCode();
          this.transformCoordinates();
        }
      }, {
        key: "transformCoordinates",
        value: function transformCoordinates() {
          var transformedCoordinates;

          if (this.srid === this.mapSrid) {
            transformedCoordinates = [this.x, this.y];
          } else {
            transformedCoordinates = Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["transform"])([this.x, this.y], this.srid, this.mapSrid);
          }

          switch (this.host.componentType) {
            case 'geometry-point':
              this.host.instance.setCoordinates(transformedCoordinates);
              break;

            case 'geometry-circle':
            case 'view':
              this.host.instance.setCenter(transformedCoordinates);
              break;

            case 'overlay':
              this.host.instance.setPosition(transformedCoordinates);
              break;
          }
        }
      }]);

      return CoordinateComponent;
    }();

    CoordinateComponent.ɵfac = function CoordinateComponent_Factory(t) {
      return new (t || CoordinateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ViewComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryPointComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](OverlayComponent, 8));
    };

    CoordinateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CoordinateComponent,
      selectors: [["aol-coordinate"]],
      inputs: {
        srid: "srid",
        x: "x",
        y: "y"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-coordinate"]],
      template: function CoordinateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    CoordinateComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: ViewComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: GeometryPointComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: GeometryCircleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: OverlayComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoordinateComponent.prototype, "x", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoordinateComponent.prototype, "y", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CoordinateComponent.prototype, "srid", void 0);
    CoordinateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], CoordinateComponent);

    var CollectionCoordinatesComponent = /*#__PURE__*/function () {
      function CollectionCoordinatesComponent(map, geometryLinestring, geometryPolygon, geometryMultipoint, geometryMultilinestring, geometryMultipolygon) {
        _classCallCheck(this, CollectionCoordinatesComponent);

        this.map = map;
        this.mapSrid = 'EPSG:3857';
        this.srid = 'EPSG:3857';

        if (!!geometryLinestring) {
          this.host = geometryLinestring;
        } else if (!!geometryPolygon) {
          this.host = geometryPolygon;
        } else if (!!geometryMultipoint) {
          this.host = geometryMultipoint;
        } else if (!!geometryMultilinestring) {
          this.host = geometryMultilinestring;
        } else if (!!geometryMultipolygon) {
          this.host = geometryMultipolygon;
        } else {
          throw new Error('aol-collection-coordinates must be a child of a geometry component');
        }
      }

      _createClass(CollectionCoordinatesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.map.instance.on('change:view', function (e) {
            return _this26.onMapViewChanged(e);
          });
          this.mapSrid = this.map.instance.getView().getProjection().getCode();
          this.transformCoordinates();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.transformCoordinates();
        }
      }, {
        key: "onMapViewChanged",
        value: function onMapViewChanged(event) {
          this.mapSrid = event.target.get(event.key).getProjection().getCode();
          this.transformCoordinates();
        }
      }, {
        key: "transformCoordinates",
        value: function transformCoordinates() {
          var _this27 = this;

          var transformedCoordinates;

          if (this.srid === this.mapSrid) {
            transformedCoordinates = this.coordinates;
          } else {
            switch (this.host.componentType) {
              case 'geometry-linestring':
              case 'geometry-multipoint':
                transformedCoordinates = this.coordinates.map(function (c) {
                  return Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["transform"])(c, _this27.srid, _this27.mapSrid);
                });
                break;

              case 'geometry-polygon':
              case 'geometry-multilinestring':
                transformedCoordinates = this.coordinates.map(function (cc) {
                  return cc.map(function (c) {
                    return Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["transform"])(c, _this27.srid, _this27.mapSrid);
                  });
                });
                break;

              case 'geometry-multipolygon':
                transformedCoordinates = this.coordinates.map(function (ccc) {
                  return ccc.map(function (cc) {
                    return cc.map(function (c) {
                      return Object(ol_proj__WEBPACK_IMPORTED_MODULE_13__["transform"])(c, _this27.srid, _this27.mapSrid);
                    });
                  });
                });
                break;
            }
          }

          this.host.instance.setCoordinates(transformedCoordinates);
        }
      }]);

      return CollectionCoordinatesComponent;
    }();

    CollectionCoordinatesComponent.ɵfac = function CollectionCoordinatesComponent_Factory(t) {
      return new (t || CollectionCoordinatesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryLinestringComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryPolygonComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryMultiPointComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryMultiLinestringComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](GeometryMultiPolygonComponent, 8));
    };

    CollectionCoordinatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CollectionCoordinatesComponent,
      selectors: [["aol-collection-coordinates"]],
      inputs: {
        srid: "srid",
        coordinates: "coordinates"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-collection-coordinates"]],
      template: function CollectionCoordinatesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    CollectionCoordinatesComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: GeometryLinestringComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: GeometryPolygonComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: GeometryMultiPointComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: GeometryMultiLinestringComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: GeometryMultiPolygonComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CollectionCoordinatesComponent.prototype, "coordinates", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], CollectionCoordinatesComponent.prototype, "srid", void 0);
    CollectionCoordinatesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], CollectionCoordinatesComponent);

    var StyleComponent = /*#__PURE__*/function () {
      function StyleComponent(featureHost, layerHost) {
        _classCallCheck(this, StyleComponent);

        this.componentType = 'style'; // console.log('creating aol-style');

        this.host = !!featureHost ? featureHost : layerHost;

        if (!this.host) {
          throw new Error('aol-style must be applied to a feature or a layer');
        }
      }

      _createClass(StyleComponent, [{
        key: "update",
        value: function update() {
          // console.log('updating style\'s host: ', this.host);
          this.host.instance.changed();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating aol-style instance with: ', this);
          this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Style"](this);
          this.host.instance.setStyle(this.instance);
        }
      }]);

      return StyleComponent;
    }();

    StyleComponent.ɵfac = function StyleComponent_Factory(t) {
      return new (t || StyleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](FeatureComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerVectorComponent, 8));
    };

    StyleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StyleComponent,
      selectors: [["aol-style"]],
      inputs: {
        geometry: "geometry",
        fill: "fill",
        image: "image",
        stroke: "stroke",
        text: "text",
        zIndex: "zIndex"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function StyleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    StyleComponent.ctorParameters = function () {
      return [{
        type: FeatureComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: LayerVectorComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleComponent.prototype, "geometry", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleComponent.prototype, "fill", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleComponent.prototype, "image", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleComponent.prototype, "stroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleComponent.prototype, "zIndex", void 0);
    StyleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], StyleComponent);

    var StyleCircleComponent = /*#__PURE__*/function () {
      function StyleCircleComponent(host) {
        _classCallCheck(this, StyleCircleComponent);

        this.host = host;
        this.componentType = 'style-circle';
      }
      /**
       * WORK-AROUND: since the re-rendering is not triggered on style change
       * we trigger a radius change.
       * see openlayers #6233 and #5775
       */


      _createClass(StyleCircleComponent, [{
        key: "update",
        value: function update() {
          if (!!this.instance) {
            // console.log('setting ol.style.Circle instance\'s radius');
            this.instance.setRadius(this.radius);
          }

          this.host.update();
        }
      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          // console.log('creating ol.style.Circle instance with: ', this);
          this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Circle"](this);
          this.host.instance.setImage(this.instance);
          this.host.update();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.instance) {
            return;
          }

          if (changes.radius) {
            this.instance.setRadius(changes.radius.currentValue);
          } // console.log('changes detected in aol-style-circle, setting new radius: ', changes['radius'].currentValue);

        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-style-circle');
          this.host.instance.setImage(null);
        }
      }]);

      return StyleCircleComponent;
    }();

    StyleCircleComponent.ɵfac = function StyleCircleComponent_Factory(t) {
      return new (t || StyleCircleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 1));
    };

    StyleCircleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StyleCircleComponent,
      selectors: [["aol-style-circle"]],
      inputs: {
        fill: "fill",
        radius: "radius",
        snapToPixel: "snapToPixel",
        stroke: "stroke",
        atlasManager: "atlasManager"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function StyleCircleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    StyleCircleComponent.ctorParameters = function () {
      return [{
        type: StyleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleCircleComponent.prototype, "fill", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleCircleComponent.prototype, "radius", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleCircleComponent.prototype, "snapToPixel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleCircleComponent.prototype, "stroke", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleCircleComponent.prototype, "atlasManager", void 0);
    StyleCircleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], StyleCircleComponent);

    var StyleTextComponent = /*#__PURE__*/function () {
      function StyleTextComponent(host) {
        _classCallCheck(this, StyleTextComponent);

        this.host = host;
        this.componentType = 'style-text';

        if (!host) {
          throw new Error('aol-style-text must be a descendant of aol-style');
        } // console.log('creating aol-style-text with: ', this);

      }

      _createClass(StyleTextComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.style.Text instance with: ', this);
          this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Text"](this);
          this.host.instance.setText(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.instance) {
            return;
          }

          if (changes.font) {
            this.instance.setFont(changes.font.currentValue);
          }

          if (changes.offsetX) {
            this.instance.setOffsetX(changes.offsetX.currentValue);
          }

          if (changes.offsetY) {
            this.instance.setOffsetY(changes.offsetY.currentValue);
          }

          if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
          }

          if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
          }

          if (changes.text) {
            this.instance.setText(changes.text.currentValue);
          }

          if (changes.textAlign) {
            this.instance.setTextAlign(changes.textAlign.currentValue);
          }

          if (changes.textBaseLine) {
            this.instance.setTextBaseline(changes.textBaseLine.currentValue);
          }

          this.host.update(); // console.log('changes detected in aol-style-text, setting new properties: ', changes);
        }
      }]);

      return StyleTextComponent;
    }();

    StyleTextComponent.ɵfac = function StyleTextComponent_Factory(t) {
      return new (t || StyleTextComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 8));
    };

    StyleTextComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StyleTextComponent,
      selectors: [["aol-style-text"]],
      inputs: {
        font: "font",
        offsetX: "offsetX",
        offsetY: "offsetY",
        scale: "scale",
        rotateWithView: "rotateWithView",
        rotation: "rotation",
        text: "text",
        textAlign: "textAlign",
        textBaseLine: "textBaseLine"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-style-text"]],
      template: function StyleTextComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    StyleTextComponent.ctorParameters = function () {
      return [{
        type: StyleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "font", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "offsetX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "offsetY", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "scale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "rotateWithView", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "rotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "text", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "textAlign", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleTextComponent.prototype, "textBaseLine", void 0);
    StyleTextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], StyleTextComponent);

    var StyleStrokeComponent = /*#__PURE__*/function () {
      function StyleStrokeComponent(styleHost, styleCircleHost, styleTextHost) {
        _classCallCheck(this, StyleStrokeComponent);

        if (!styleHost) {
          throw new Error('aol-style-stroke must be a descendant of aol-style');
        }

        if (!!styleTextHost) {
          this.host = styleTextHost;
        } else if (!!styleCircleHost) {
          this.host = styleCircleHost;
        } else {
          this.host = styleHost;
        } // console.log('creating aol-style-stroke with: ', this);

      }

      _createClass(StyleStrokeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.style.Stroke instance with: ', this);
          this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Stroke"](this);

          switch (this.host.componentType) {
            case 'style':
              this.host.instance.setStroke(this.instance); // console.log('setting ol.style instance\'s stroke:', this.host);

              break;

            case 'style-text':
              this.host.instance.setStroke(this.instance);
              break;

            case 'style-circle':
              this.host.stroke = this.instance; // console.log('setting ol.style.circle instance\'s stroke:', this.host);

              break;

            default:
              throw new Error('unknown host type: ' + this.host);
            // break;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.instance) {
            return;
          }

          if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
          }

          if (changes.lineCap) {
            this.instance.setLineCap(changes.lineCap.currentValue);
          }

          if (changes.lineDash) {
            this.instance.setLineDash(changes.lineDash.currentValue);
          }

          if (changes.lineJoin) {
            this.instance.setLineJoin(changes.lineJoin.currentValue);
          }

          if (changes.miterLimit) {
            this.instance.setMiterLimit(changes.miterLimit.currentValue);
          }

          if (changes.width) {
            this.instance.setWidth(changes.width.currentValue);
          }

          this.host.update(); // console.log('changes detected in aol-style-stroke, setting new properties: ', changes);
        }
      }]);

      return StyleStrokeComponent;
    }();

    StyleStrokeComponent.ɵfac = function StyleStrokeComponent_Factory(t) {
      return new (t || StyleStrokeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleTextComponent, 8));
    };

    StyleStrokeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StyleStrokeComponent,
      selectors: [["aol-style-stroke"]],
      inputs: {
        color: "color",
        lineCap: "lineCap",
        lineDash: "lineDash",
        lineJoin: "lineJoin",
        miterLimit: "miterLimit",
        width: "width"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-style-stroke"]],
      template: function StyleStrokeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    StyleStrokeComponent.ctorParameters = function () {
      return [{
        type: StyleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: StyleCircleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: StyleTextComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleStrokeComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleStrokeComponent.prototype, "lineCap", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleStrokeComponent.prototype, "lineDash", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleStrokeComponent.prototype, "lineJoin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleStrokeComponent.prototype, "miterLimit", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleStrokeComponent.prototype, "width", void 0);
    StyleStrokeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], StyleStrokeComponent);

    var StyleIconComponent = /*#__PURE__*/function () {
      function StyleIconComponent(host) {
        _classCallCheck(this, StyleIconComponent);

        this.host = host;
      }

      _createClass(StyleIconComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.style.Icon instance with: ', this);
          this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Icon"](this);
          this.host.instance.setImage(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.instance) {
            return;
          }

          if (changes.opacity) {
            this.instance.setOpacity(changes.opacity.currentValue);
          }

          if (changes.rotation) {
            this.instance.setRotation(changes.rotation.currentValue);
          }

          if (changes.scale) {
            this.instance.setScale(changes.scale.currentValue);
          }

          if (changes.src) {
            this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Icon"](this);
            this.host.instance.setImage(this.instance);
          }

          this.host.update(); // console.log('changes detected in aol-style-icon: ', changes);
        }
      }]);

      return StyleIconComponent;
    }();

    StyleIconComponent.ɵfac = function StyleIconComponent_Factory(t) {
      return new (t || StyleIconComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 1));
    };

    StyleIconComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StyleIconComponent,
      selectors: [["aol-style-icon"]],
      inputs: {
        anchor: "anchor",
        anchorXUnits: "anchorXUnits",
        anchorYUnits: "anchorYUnits",
        anchorOrigin: "anchorOrigin",
        color: "color",
        crossOrigin: "crossOrigin",
        img: "img",
        offset: "offset",
        offsetOrigin: "offsetOrigin",
        opacity: "opacity",
        scale: "scale",
        snapToPixel: "snapToPixel",
        rotateWithView: "rotateWithView",
        rotation: "rotation",
        size: "size",
        imgSize: "imgSize",
        src: "src"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-style-icon"]],
      template: function StyleIconComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    StyleIconComponent.ctorParameters = function () {
      return [{
        type: StyleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "anchor", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "anchorXUnits", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "anchorYUnits", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "anchorOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "color", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "crossOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "img", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "offset", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "offsetOrigin", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "opacity", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "scale", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "snapToPixel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "rotateWithView", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "rotation", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "size", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "imgSize", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleIconComponent.prototype, "src", void 0);
    StyleIconComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], StyleIconComponent);

    var StyleFillComponent = /*#__PURE__*/function () {
      function StyleFillComponent(styleHost, styleCircleHost, styleTextHost) {
        _classCallCheck(this, StyleFillComponent);

        if (!styleHost) {
          throw new Error('aol-style-stroke must be a descendant of aol-style');
        }

        if (!!styleTextHost) {
          this.host = styleTextHost;
        } else if (!!styleCircleHost) {
          this.host = styleCircleHost;
        } else {
          this.host = styleHost;
        } // console.log('creating aol-style-fill with: ', this);

      }

      _createClass(StyleFillComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log('creating ol.style.Fill instance with: ', this);
          this.instance = new ol_style__WEBPACK_IMPORTED_MODULE_14__["Fill"](this);

          switch (this.host.componentType) {
            case 'style':
              this.host.instance.setFill(this.instance); // console.log('setting ol.style instance\'s fill:', this.host);

              break;

            case 'style-text':
              this.host.instance.setFill(this.instance);
              break;

            case 'style-circle':
              this.host.fill = this.instance; // console.log('setting ol.style.circle instance\'s fill:', this.host);

              break;

            default:
              throw new Error('unknown host type: ' + this.host);
            // break;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (!this.instance) {
            return;
          }

          if (changes.color) {
            this.instance.setColor(changes.color.currentValue);
          }

          this.host.update(); // console.log('changes detected in aol-style-fill, setting new color: ', changes);
        }
      }]);

      return StyleFillComponent;
    }();

    StyleFillComponent.ɵfac = function StyleFillComponent_Factory(t) {
      return new (t || StyleFillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleCircleComponent, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](StyleTextComponent, 8));
    };

    StyleFillComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: StyleFillComponent,
      selectors: [["aol-style-fill"]],
      inputs: {
        color: "color"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 0,
      consts: [[1, "aol-style-fill"]],
      template: function StyleFillComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
        }
      },
      encapsulation: 2
    });

    StyleFillComponent.ctorParameters = function () {
      return [{
        type: StyleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: StyleCircleComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: StyleTextComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], StyleFillComponent.prototype, "color", void 0);
    StyleFillComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])())], StyleFillComponent);

    var DefaultControlComponent = /*#__PURE__*/function () {
      function DefaultControlComponent(map) {
        _classCallCheck(this, DefaultControlComponent);

        this.map = map;
      }

      _createClass(DefaultControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this28 = this;

          // console.log('ol.control.defaults init: ', this);
          this.instance = Object(ol_control__WEBPACK_IMPORTED_MODULE_15__["defaults"])(this);
          this.instance.forEach(function (c) {
            return _this28.map.instance.addControl(c);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this29 = this;

          // console.log('removing aol-control-defaults');
          this.instance.forEach(function (c) {
            return _this29.map.instance.removeControl(c);
          });
        }
      }]);

      return DefaultControlComponent;
    }();

    DefaultControlComponent.ɵfac = function DefaultControlComponent_Factory(t) {
      return new (t || DefaultControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DefaultControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DefaultControlComponent,
      selectors: [["aol-control-defaults"]],
      inputs: {
        attribution: "attribution",
        attributionOptions: "attributionOptions",
        rotate: "rotate",
        rotateOptions: "rotateOptions",
        zoom: "zoom",
        zoomOptions: "zoomOptions"
      },
      decls: 0,
      vars: 0,
      template: function DefaultControlComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DefaultControlComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultControlComponent.prototype, "attribution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultControlComponent.prototype, "attributionOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultControlComponent.prototype, "rotate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultControlComponent.prototype, "rotateOptions", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultControlComponent.prototype, "zoom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DefaultControlComponent.prototype, "zoomOptions", void 0);

    var ControlComponent = /*#__PURE__*/function () {
      function ControlComponent(map) {
        _classCallCheck(this, ControlComponent);

        this.map = map;
        this.componentType = 'control';
      }

      _createClass(ControlComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.content) {
            this.element = this.content.elementRef.nativeElement;
            this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["Control"](this);
            this.map.instance.addControl(this.instance);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.instance) {
            this.map.instance.removeControl(this.instance);
          }
        }
      }]);

      return ControlComponent;
    }();

    ControlComponent.ɵfac = function ControlComponent_Factory(t) {
      return new (t || ControlComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlComponent,
      selectors: [["aol-control"]],
      contentQueries: function ControlComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticContentQuery"](dirIndex, ContentComponent, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
        }
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(ContentComponent, {
      "static": true
    })], ControlComponent.prototype, "content", void 0);

    var ControlAttributionComponent = /*#__PURE__*/function () {
      function ControlAttributionComponent(map, element) {
        _classCallCheck(this, ControlAttributionComponent);

        this.map = map;
        this.element = element;
        this.componentType = 'control';
      }

      _createClass(ControlAttributionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.target = this.element.nativeElement; // console.log('ol.control.Attribution init: ', this);

          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["Attribution"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-attribution');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlAttributionComponent;
    }();

    ControlAttributionComponent.ɵfac = function ControlAttributionComponent_Factory(t) {
      return new (t || ControlAttributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ControlAttributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlAttributionComponent,
      selectors: [["aol-control-attribution"]],
      inputs: {
        collapsible: "collapsible"
      },
      decls: 0,
      vars: 0,
      template: function ControlAttributionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    ControlAttributionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlAttributionComponent.prototype, "collapsible", void 0);

    var ControlFullScreenComponent = /*#__PURE__*/function () {
      function ControlFullScreenComponent(map) {
        _classCallCheck(this, ControlFullScreenComponent);

        this.map = map; // console.log('instancing aol-control-fullscreen');
      }

      _createClass(ControlFullScreenComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["FullScreen"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-fullscreen');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlFullScreenComponent;
    }();

    ControlFullScreenComponent.ɵfac = function ControlFullScreenComponent_Factory(t) {
      return new (t || ControlFullScreenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlFullScreenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlFullScreenComponent,
      selectors: [["aol-control-fullscreen"]],
      inputs: {
        className: "className",
        label: "label",
        labelActive: "labelActive",
        tipLabel: "tipLabel",
        keys: "keys"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlFullScreenComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlFullScreenComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlFullScreenComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlFullScreenComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlFullScreenComponent.prototype, "labelActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlFullScreenComponent.prototype, "tipLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlFullScreenComponent.prototype, "keys", void 0);

    var ControlMousePositionComponent = /*#__PURE__*/function () {
      function ControlMousePositionComponent(map, element) {
        _classCallCheck(this, ControlMousePositionComponent);

        this.map = map;
        this.element = element;
      }

      _createClass(ControlMousePositionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.target = this.element.nativeElement; // console.log('ol.control.MousePosition init: ', this);

          this.instance = new ol_control_MousePosition__WEBPACK_IMPORTED_MODULE_16__["default"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-mouseposition');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlMousePositionComponent;
    }();

    ControlMousePositionComponent.ɵfac = function ControlMousePositionComponent_Factory(t) {
      return new (t || ControlMousePositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    ControlMousePositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlMousePositionComponent,
      selectors: [["aol-control-mouseposition"]],
      inputs: {
        coordinateFormat: "coordinateFormat",
        projection: "projection"
      },
      decls: 0,
      vars: 0,
      template: function ControlMousePositionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    ControlMousePositionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlMousePositionComponent.prototype, "coordinateFormat", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlMousePositionComponent.prototype, "projection", void 0);

    var ControlOverviewMapComponent = /*#__PURE__*/function () {
      function ControlOverviewMapComponent(map) {
        _classCallCheck(this, ControlOverviewMapComponent);

        this.map = map;
      }

      _createClass(ControlOverviewMapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["OverviewMap"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeControl(this.instance);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (this.instance != null && changes.hasOwnProperty('view')) {
            this.reloadInstance();
          }
        }
      }, {
        key: "reloadInstance",
        value: function reloadInstance() {
          this.map.instance.removeControl(this.instance);
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["OverviewMap"](this);
          this.map.instance.addControl(this.instance);
        }
      }]);

      return ControlOverviewMapComponent;
    }();

    ControlOverviewMapComponent.ɵfac = function ControlOverviewMapComponent_Factory(t) {
      return new (t || ControlOverviewMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlOverviewMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlOverviewMapComponent,
      selectors: [["aol-control-overviewmap"]],
      inputs: {
        collapsed: "collapsed",
        collapseLabel: "collapseLabel",
        collapsible: "collapsible",
        label: "label",
        layers: "layers",
        target: "target",
        tipLabel: "tipLabel",
        view: "view"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlOverviewMapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlOverviewMapComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "collapsed", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "collapseLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "collapsible", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "layers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "target", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "tipLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlOverviewMapComponent.prototype, "view", void 0);

    var ControlRotateComponent = /*#__PURE__*/function () {
      function ControlRotateComponent(map) {
        _classCallCheck(this, ControlRotateComponent);

        this.map = map; // console.log('instancing aol-control-rotate');
      }

      _createClass(ControlRotateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["Rotate"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-rotate');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlRotateComponent;
    }();

    ControlRotateComponent.ɵfac = function ControlRotateComponent_Factory(t) {
      return new (t || ControlRotateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlRotateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlRotateComponent,
      selectors: [["aol-control-rotate"]],
      inputs: {
        className: "className",
        label: "label",
        tipLabel: "tipLabel",
        duration: "duration",
        autoHide: "autoHide"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlRotateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlRotateComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlRotateComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlRotateComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlRotateComponent.prototype, "tipLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlRotateComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlRotateComponent.prototype, "autoHide", void 0);

    var ControlScaleLineComponent = /*#__PURE__*/function () {
      function ControlScaleLineComponent(map) {
        _classCallCheck(this, ControlScaleLineComponent);

        this.map = map; // console.log('instancing aol-control-scaleline');
      }

      _createClass(ControlScaleLineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["ScaleLine"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-scaleline');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlScaleLineComponent;
    }();

    ControlScaleLineComponent.ɵfac = function ControlScaleLineComponent_Factory(t) {
      return new (t || ControlScaleLineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlScaleLineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlScaleLineComponent,
      selectors: [["aol-control-scaleline"]],
      inputs: {
        units: "units"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlScaleLineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlScaleLineComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlScaleLineComponent.prototype, "units", void 0);

    var ControlZoomComponent = /*#__PURE__*/function () {
      function ControlZoomComponent(map) {
        _classCallCheck(this, ControlZoomComponent);

        this.map = map; // console.log('instancing aol-control-zoom');
      }

      _createClass(ControlZoomComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["Zoom"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-zoom');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlZoomComponent;
    }();

    ControlZoomComponent.ɵfac = function ControlZoomComponent_Factory(t) {
      return new (t || ControlZoomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlZoomComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlZoomComponent,
      selectors: [["aol-control-zoom"]],
      inputs: {
        duration: "duration",
        zoomInLabel: "zoomInLabel",
        zoomOutLabel: "zoomOutLabel",
        zoomInTipLabel: "zoomInTipLabel",
        zoomOutTipLabel: "zoomOutTipLabel",
        delta: "delta"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlZoomComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlZoomComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomComponent.prototype, "zoomInLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomComponent.prototype, "zoomOutLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomComponent.prototype, "zoomInTipLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomComponent.prototype, "zoomOutTipLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomComponent.prototype, "delta", void 0);

    var ControlZoomSliderComponent = /*#__PURE__*/function () {
      function ControlZoomSliderComponent(map) {
        _classCallCheck(this, ControlZoomSliderComponent);

        this.map = map; // console.log('instancing aol-control-zoomslider');
      }

      _createClass(ControlZoomSliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["ZoomSlider"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-zoomslider');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlZoomSliderComponent;
    }();

    ControlZoomSliderComponent.ɵfac = function ControlZoomSliderComponent_Factory(t) {
      return new (t || ControlZoomSliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlZoomSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlZoomSliderComponent,
      selectors: [["aol-control-zoomslider"]],
      inputs: {
        className: "className",
        duration: "duration",
        maxResolution: "maxResolution",
        minResolution: "minResolution"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlZoomSliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlZoomSliderComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomSliderComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomSliderComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomSliderComponent.prototype, "maxResolution", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomSliderComponent.prototype, "minResolution", void 0);

    var ControlZoomToExtentComponent = /*#__PURE__*/function () {
      function ControlZoomToExtentComponent(map) {
        _classCallCheck(this, ControlZoomToExtentComponent);

        this.map = map; // console.log('instancing aol-control-zoomtoextent');
      }

      _createClass(ControlZoomToExtentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["ZoomToExtent"](this);
          this.map.instance.addControl(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // console.log('removing aol-control-zoomtoextent');
          this.map.instance.removeControl(this.instance);
        }
      }]);

      return ControlZoomToExtentComponent;
    }();

    ControlZoomToExtentComponent.ɵfac = function ControlZoomToExtentComponent_Factory(t) {
      return new (t || ControlZoomToExtentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ControlZoomToExtentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ControlZoomToExtentComponent,
      selectors: [["aol-control-zoomtoextent"]],
      inputs: {
        className: "className",
        label: "label",
        tipLabel: "tipLabel",
        extent: "extent"
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function ControlZoomToExtentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    ControlZoomToExtentComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomToExtentComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomToExtentComponent.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomToExtentComponent.prototype, "tipLabel", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ControlZoomToExtentComponent.prototype, "extent", void 0);
    var FormatMVTComponent_1;

    var FormatMVTComponent = FormatMVTComponent_1 = /*#__PURE__*/function (_FormatComponent) {
      _inherits(FormatMVTComponent, _FormatComponent);

      var _super28 = _createSuper(FormatMVTComponent);

      function FormatMVTComponent() {
        var _this30;

        _classCallCheck(this, FormatMVTComponent);

        _this30 = _super28.call(this);
        _this30.instance = new ol_format__WEBPACK_IMPORTED_MODULE_11__["MVT"](_assertThisInitialized(_this30));
        return _this30;
      }

      return FormatMVTComponent;
    }(FormatComponent);

    FormatMVTComponent.ɵfac = function FormatMVTComponent_Factory(t) {
      return new (t || FormatMVTComponent)();
    };

    FormatMVTComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FormatMVTComponent,
      selectors: [["aol-format-mvt"]],
      inputs: {
        featureClass: "featureClass",
        geometryName: "geometryName",
        layerName: "layerName",
        layers: "layers"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: FormatComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return FormatMVTComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      decls: 0,
      vars: 0,
      template: function FormatMVTComponent_Template(rf, ctx) {},
      encapsulation: 2
    });
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormatMVTComponent.prototype, "featureClass", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormatMVTComponent.prototype, "geometryName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormatMVTComponent.prototype, "layerName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], FormatMVTComponent.prototype, "layers", void 0);

    var DefaultInteractionComponent = /*#__PURE__*/function () {
      function DefaultInteractionComponent(map) {
        _classCallCheck(this, DefaultInteractionComponent);

        this.map = map;
      }

      _createClass(DefaultInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this31 = this;

          this.instance = Object(ol_interaction__WEBPACK_IMPORTED_MODULE_17__["defaults"])();
          this.instance.forEach(function (i) {
            return _this31.map.instance.addInteraction(i);
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this32 = this;

          this.instance.forEach(function (i) {
            return _this32.map.instance.removeInteraction(i);
          });
        }
      }]);

      return DefaultInteractionComponent;
    }();

    DefaultInteractionComponent.ɵfac = function DefaultInteractionComponent_Factory(t) {
      return new (t || DefaultInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DefaultInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DefaultInteractionComponent,
      selectors: [["aol-interaction-default"]],
      decls: 0,
      vars: 0,
      template: function DefaultInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DefaultInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    var DoubleClickZoomInteractionComponent = /*#__PURE__*/function () {
      function DoubleClickZoomInteractionComponent(map) {
        _classCallCheck(this, DoubleClickZoomInteractionComponent);

        this.map = map;
      }

      _createClass(DoubleClickZoomInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DoubleClickZoom"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DoubleClickZoomInteractionComponent;
    }();

    DoubleClickZoomInteractionComponent.ɵfac = function DoubleClickZoomInteractionComponent_Factory(t) {
      return new (t || DoubleClickZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DoubleClickZoomInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DoubleClickZoomInteractionComponent,
      selectors: [["aol-interaction-doubleclickzoom"]],
      inputs: {
        duration: "duration",
        delta: "delta"
      },
      decls: 0,
      vars: 0,
      template: function DoubleClickZoomInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DoubleClickZoomInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DoubleClickZoomInteractionComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DoubleClickZoomInteractionComponent.prototype, "delta", void 0);

    var DragAndDropInteractionComponent = /*#__PURE__*/function () {
      function DragAndDropInteractionComponent(map) {
        _classCallCheck(this, DragAndDropInteractionComponent);

        this.map = map;
      }

      _createClass(DragAndDropInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DragAndDrop"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DragAndDropInteractionComponent;
    }();

    DragAndDropInteractionComponent.ɵfac = function DragAndDropInteractionComponent_Factory(t) {
      return new (t || DragAndDropInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DragAndDropInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragAndDropInteractionComponent,
      selectors: [["aol-interaction-draganddrop"]],
      inputs: {
        formatConstructors: "formatConstructors",
        projection: "projection",
        target: "target"
      },
      decls: 0,
      vars: 0,
      template: function DragAndDropInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DragAndDropInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragAndDropInteractionComponent.prototype, "formatConstructors", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragAndDropInteractionComponent.prototype, "projection", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragAndDropInteractionComponent.prototype, "target", void 0);

    var DragBoxInteractionComponent = /*#__PURE__*/function () {
      function DragBoxInteractionComponent(map) {
        _classCallCheck(this, DragBoxInteractionComponent);

        this.map = map;
      }

      _createClass(DragBoxInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DragBox"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DragBoxInteractionComponent;
    }();

    DragBoxInteractionComponent.ɵfac = function DragBoxInteractionComponent_Factory(t) {
      return new (t || DragBoxInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DragBoxInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragBoxInteractionComponent,
      selectors: [["aol-interaction-dragbox"]],
      inputs: {
        className: "className",
        condition: "condition",
        boxEndCondition: "boxEndCondition"
      },
      decls: 0,
      vars: 0,
      template: function DragBoxInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DragBoxInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragBoxInteractionComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragBoxInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragBoxInteractionComponent.prototype, "boxEndCondition", void 0);

    var DragPanInteractionComponent = /*#__PURE__*/function () {
      function DragPanInteractionComponent(map) {
        _classCallCheck(this, DragPanInteractionComponent);

        this.map = map;
      }

      _createClass(DragPanInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DragPan"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DragPanInteractionComponent;
    }();

    DragPanInteractionComponent.ɵfac = function DragPanInteractionComponent_Factory(t) {
      return new (t || DragPanInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DragPanInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragPanInteractionComponent,
      selectors: [["aol-interaction-dragpan"]],
      inputs: {
        condition: "condition",
        kinetic: "kinetic"
      },
      decls: 0,
      vars: 0,
      template: function DragPanInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DragPanInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragPanInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragPanInteractionComponent.prototype, "kinetic", void 0);

    var DragRotateInteractionComponent = /*#__PURE__*/function () {
      function DragRotateInteractionComponent(map) {
        _classCallCheck(this, DragRotateInteractionComponent);

        this.map = map;
      }

      _createClass(DragRotateInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DragRotate"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DragRotateInteractionComponent;
    }();

    DragRotateInteractionComponent.ɵfac = function DragRotateInteractionComponent_Factory(t) {
      return new (t || DragRotateInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DragRotateInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragRotateInteractionComponent,
      selectors: [["aol-interaction-dragrotate"]],
      inputs: {
        condition: "condition",
        duration: "duration"
      },
      decls: 0,
      vars: 0,
      template: function DragRotateInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DragRotateInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragRotateInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragRotateInteractionComponent.prototype, "duration", void 0);

    var DragRotateAndZoomInteractionComponent = /*#__PURE__*/function () {
      function DragRotateAndZoomInteractionComponent(map) {
        _classCallCheck(this, DragRotateAndZoomInteractionComponent);

        this.map = map;
      }

      _createClass(DragRotateAndZoomInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DragRotateAndZoom"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DragRotateAndZoomInteractionComponent;
    }();

    DragRotateAndZoomInteractionComponent.ɵfac = function DragRotateAndZoomInteractionComponent_Factory(t) {
      return new (t || DragRotateAndZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DragRotateAndZoomInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragRotateAndZoomInteractionComponent,
      selectors: [["aol-interaction-dragrotateandzoom"]],
      inputs: {
        condition: "condition",
        duration: "duration"
      },
      decls: 0,
      vars: 0,
      template: function DragRotateAndZoomInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DragRotateAndZoomInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragRotateAndZoomInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragRotateAndZoomInteractionComponent.prototype, "duration", void 0);

    var DragZoomInteractionComponent = /*#__PURE__*/function () {
      function DragZoomInteractionComponent(map) {
        _classCallCheck(this, DragZoomInteractionComponent);

        this.map = map;
      }

      _createClass(DragZoomInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["DragZoom"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DragZoomInteractionComponent;
    }();

    DragZoomInteractionComponent.ɵfac = function DragZoomInteractionComponent_Factory(t) {
      return new (t || DragZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DragZoomInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DragZoomInteractionComponent,
      selectors: [["aol-interaction-dragzoom"]],
      inputs: {
        className: "className",
        condition: "condition",
        duration: "duration",
        out: "out"
      },
      decls: 0,
      vars: 0,
      template: function DragZoomInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DragZoomInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragZoomInteractionComponent.prototype, "className", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragZoomInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragZoomInteractionComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DragZoomInteractionComponent.prototype, "out", void 0);

    var MouseWheelZoomInteractionComponent = /*#__PURE__*/function () {
      function MouseWheelZoomInteractionComponent(map) {
        _classCallCheck(this, MouseWheelZoomInteractionComponent);

        this.map = map;
      }

      _createClass(MouseWheelZoomInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["MouseWheelZoom"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return MouseWheelZoomInteractionComponent;
    }();

    MouseWheelZoomInteractionComponent.ɵfac = function MouseWheelZoomInteractionComponent_Factory(t) {
      return new (t || MouseWheelZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    MouseWheelZoomInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: MouseWheelZoomInteractionComponent,
      selectors: [["aol-interaction-mousewheelzoom"]],
      inputs: {
        duration: "duration",
        timeout: "timeout",
        useAnchor: "useAnchor"
      },
      decls: 0,
      vars: 0,
      template: function MouseWheelZoomInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    MouseWheelZoomInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MouseWheelZoomInteractionComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MouseWheelZoomInteractionComponent.prototype, "timeout", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MouseWheelZoomInteractionComponent.prototype, "useAnchor", void 0);

    var PinchZoomInteractionComponent = /*#__PURE__*/function () {
      function PinchZoomInteractionComponent(map) {
        _classCallCheck(this, PinchZoomInteractionComponent);

        this.map = map;
      }

      _createClass(PinchZoomInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["PinchZoom"](this);
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return PinchZoomInteractionComponent;
    }();

    PinchZoomInteractionComponent.ɵfac = function PinchZoomInteractionComponent_Factory(t) {
      return new (t || PinchZoomInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    PinchZoomInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: PinchZoomInteractionComponent,
      selectors: [["aol-interaction-pinchzoom"]],
      inputs: {
        duration: "duration",
        constrainResolution: "constrainResolution"
      },
      decls: 0,
      vars: 0,
      template: function PinchZoomInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    PinchZoomInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PinchZoomInteractionComponent.prototype, "duration", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], PinchZoomInteractionComponent.prototype, "constrainResolution", void 0);

    var DrawInteractionComponent = /*#__PURE__*/function () {
      function DrawInteractionComponent(map) {
        _classCallCheck(this, DrawInteractionComponent);

        this.map = map;
        this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.olChangeActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drawEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drawStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(DrawInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["Draw"](this);
          this.instance.on('change', function (event) {
            return _this33.olChange.emit(event);
          });
          this.instance.on('change:active', function (event) {
            return _this33.olChangeActive.emit(event);
          });
          this.instance.on('drawend', function (event) {
            return _this33.drawEnd.emit(event);
          });
          this.instance.on('drawstart', function (event) {
            return _this33.drawStart.emit(event);
          });
          this.instance.on('propertychange', function (event) {
            return _this33.propertyChange.emit(event);
          });
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return DrawInteractionComponent;
    }();

    DrawInteractionComponent.ɵfac = function DrawInteractionComponent_Factory(t) {
      return new (t || DrawInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    DrawInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DrawInteractionComponent,
      selectors: [["aol-interaction-draw"]],
      inputs: {
        clickTolerance: "clickTolerance",
        features: "features",
        source: "source",
        snapTolerance: "snapTolerance",
        type: "type",
        maxPoints: "maxPoints",
        minPoints: "minPoints",
        finishCondition: "finishCondition",
        style: "style",
        geometryFunction: "geometryFunction",
        geometryName: "geometryName",
        condition: "condition",
        freehandCondition: "freehandCondition",
        freehand: "freehand",
        wrapX: "wrapX"
      },
      outputs: {
        olChange: "olChange",
        olChangeActive: "olChangeActive",
        drawEnd: "drawEnd",
        drawStart: "drawStart",
        propertyChange: "propertyChange"
      },
      decls: 0,
      vars: 0,
      template: function DrawInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    DrawInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "clickTolerance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "features", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "snapTolerance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "type", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "maxPoints", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "minPoints", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "finishCondition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "geometryFunction", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "geometryName", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "freehandCondition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "freehand", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], DrawInteractionComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DrawInteractionComponent.prototype, "olChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DrawInteractionComponent.prototype, "olChangeActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DrawInteractionComponent.prototype, "drawEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DrawInteractionComponent.prototype, "drawStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], DrawInteractionComponent.prototype, "propertyChange", void 0);

    var SelectInteractionComponent = /*#__PURE__*/function () {
      function SelectInteractionComponent(map) {
        _classCallCheck(this, SelectInteractionComponent);

        this.map = map;
        this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.olSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SelectInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this34 = this;

          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["Select"](this);
          this.instance.on('change', function (event) {
            return _this34.olChange.emit(event);
          });
          this.instance.on('select', function (event) {
            return _this34.olSelect.emit(event);
          });
          this.instance.on('propertychange', function (event) {
            return _this34.propertyChange.emit(event);
          });
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return SelectInteractionComponent;
    }();

    SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) {
      return new (t || SelectInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    SelectInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SelectInteractionComponent,
      selectors: [["aol-interaction-select"]],
      inputs: {
        addCondition: "addCondition",
        condition: "condition",
        layers: "layers",
        style: "style",
        removeCondition: "removeCondition",
        toggleCondition: "toggleCondition",
        multi: "multi",
        features: "features",
        filter: "filter",
        wrapX: "wrapX"
      },
      outputs: {
        olChange: "olChange",
        olSelect: "olSelect",
        propertyChange: "propertyChange"
      },
      decls: 0,
      vars: 0,
      template: function SelectInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    SelectInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "addCondition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "layers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "removeCondition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "toggleCondition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "multi", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "features", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "filter", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SelectInteractionComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SelectInteractionComponent.prototype, "olChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SelectInteractionComponent.prototype, "olSelect", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SelectInteractionComponent.prototype, "propertyChange", void 0);

    var ModifyInteractionComponent = /*#__PURE__*/function () {
      function ModifyInteractionComponent(map) {
        _classCallCheck(this, ModifyInteractionComponent);

        this.map = map;
        this.modifyEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.modifyStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.olChangeActive = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ModifyInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this35 = this;

          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["Modify"](this);
          this.instance.on('change', function (event) {
            return _this35.olChange.emit(event);
          });
          this.instance.on('change:active', function (event) {
            return _this35.olChangeActive.emit(event);
          });
          this.instance.on('propertychange', function (event) {
            return _this35.propertyChange.emit(event);
          });
          this.instance.on('modifyend', function (event) {
            return _this35.modifyEnd.emit(event);
          });
          this.instance.on('modifystart', function (event) {
            return _this35.modifyStart.emit(event);
          });
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return ModifyInteractionComponent;
    }();

    ModifyInteractionComponent.ɵfac = function ModifyInteractionComponent_Factory(t) {
      return new (t || ModifyInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    ModifyInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ModifyInteractionComponent,
      selectors: [["aol-interaction-modify"]],
      inputs: {
        condition: "condition",
        deleteCondition: "deleteCondition",
        pixelTolerance: "pixelTolerance",
        style: "style",
        features: "features",
        wrapX: "wrapX",
        source: "source"
      },
      outputs: {
        modifyEnd: "modifyEnd",
        modifyStart: "modifyStart",
        olChange: "olChange",
        olChangeActive: "olChangeActive",
        propertyChange: "propertyChange"
      },
      decls: 0,
      vars: 0,
      template: function ModifyInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    ModifyInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "condition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "deleteCondition", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "pixelTolerance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "style", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "features", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "wrapX", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ModifyInteractionComponent.prototype, "source", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModifyInteractionComponent.prototype, "modifyEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModifyInteractionComponent.prototype, "modifyStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModifyInteractionComponent.prototype, "olChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModifyInteractionComponent.prototype, "olChangeActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ModifyInteractionComponent.prototype, "propertyChange", void 0);

    var TranslateInteractionComponent = /*#__PURE__*/function () {
      function TranslateInteractionComponent(map) {
        _classCallCheck(this, TranslateInteractionComponent);

        this.map = map;
        this.olChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.propertyChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translateEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translateStart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.translating = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(TranslateInteractionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.instance = new ol_interaction__WEBPACK_IMPORTED_MODULE_17__["Translate"](this);
          this.instance.on('change', function (event) {
            return _this36.olChange.emit(event);
          });
          this.instance.on('propertychange', function (event) {
            return _this36.propertyChange.emit(event);
          });
          this.instance.on('translateend', function (event) {
            return _this36.translateEnd.emit(event);
          });
          this.instance.on('translatestart', function (event) {
            return _this36.translateStart.emit(event);
          });
          this.instance.on('translating', function (event) {
            return _this36.translating.emit(event);
          });
          this.map.instance.addInteraction(this.instance);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.map.instance.removeInteraction(this.instance);
        }
      }]);

      return TranslateInteractionComponent;
    }();

    TranslateInteractionComponent.ɵfac = function TranslateInteractionComponent_Factory(t) {
      return new (t || TranslateInteractionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MapComponent));
    };

    TranslateInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: TranslateInteractionComponent,
      selectors: [["aol-interaction-translate"]],
      inputs: {
        features: "features",
        layers: "layers",
        hitTolerance: "hitTolerance"
      },
      outputs: {
        olChange: "olChange",
        propertyChange: "propertyChange",
        translateEnd: "translateEnd",
        translateStart: "translateStart",
        translating: "translating"
      },
      decls: 0,
      vars: 0,
      template: function TranslateInteractionComponent_Template(rf, ctx) {},
      encapsulation: 2
    });

    TranslateInteractionComponent.ctorParameters = function () {
      return [{
        type: MapComponent
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranslateInteractionComponent.prototype, "features", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranslateInteractionComponent.prototype, "layers", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], TranslateInteractionComponent.prototype, "hitTolerance", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TranslateInteractionComponent.prototype, "olChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TranslateInteractionComponent.prototype, "propertyChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TranslateInteractionComponent.prototype, "translateEnd", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TranslateInteractionComponent.prototype, "translateStart", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], TranslateInteractionComponent.prototype, "translating", void 0);

    var AttributionComponent = /*#__PURE__*/function () {
      function AttributionComponent(elementRef) {
        _classCallCheck(this, AttributionComponent);

        this.elementRef = elementRef;
      }

      _createClass(AttributionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.html = this.elementRef.nativeElement.innerHTML;
          this.instance = new ol_control__WEBPACK_IMPORTED_MODULE_15__["Attribution"](this);
        }
      }]);

      return AttributionComponent;
    }();

    AttributionComponent.ɵfac = function AttributionComponent_Factory(t) {
      return new (t || AttributionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]));
    };

    AttributionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AttributionComponent,
      selectors: [["aol-attribution"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function AttributionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    AttributionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    var AttributionsComponent = /*#__PURE__*/function () {
      function AttributionsComponent(source) {
        _classCallCheck(this, AttributionsComponent);

        this.source = source;
      }
      /* we can do this at the very end */


      _createClass(AttributionsComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          if (this.attributions.length) {
            this.instance = this.attributions.map(function (cmp) {
              return cmp.instance;
            }); // console.log('setting attributions:', this.instance);

            this.source.instance.setAttributions(this.instance);
          }
        }
      }]);

      return AttributionsComponent;
    }();

    AttributionsComponent.ɵfac = function AttributionsComponent_Factory(t) {
      return new (t || AttributionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](SourceComponent, 1));
    };

    AttributionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AttributionsComponent,
      selectors: [["aol-attributions"]],
      contentQueries: function AttributionsComponent_ContentQueries(rf, ctx, dirIndex) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, AttributionComponent, false);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.attributions = _t);
        }
      },
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function AttributionsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    AttributionsComponent.ctorParameters = function () {
      return [{
        type: SourceComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(AttributionComponent)], AttributionsComponent.prototype, "attributions", void 0);
    AttributionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], AttributionsComponent);
    var SourceUTFGridComponent_1;

    var SourceUTFGridComponent = SourceUTFGridComponent_1 = /*#__PURE__*/function (_SourceComponent14) {
      _inherits(SourceUTFGridComponent, _SourceComponent14);

      var _super29 = _createSuper(SourceUTFGridComponent);

      function SourceUTFGridComponent(layer) {
        _classCallCheck(this, SourceUTFGridComponent);

        return _super29.call(this, layer);
      }

      _createClass(SourceUTFGridComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.instance = new ol_source__WEBPACK_IMPORTED_MODULE_7__["UTFGrid"](this);
          this.host.instance.setSource(this.instance);
        }
      }]);

      return SourceUTFGridComponent;
    }(SourceComponent);

    SourceUTFGridComponent.ɵfac = function SourceUTFGridComponent_Factory(t) {
      return new (t || SourceUTFGridComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](LayerTileComponent, 1));
    };

    SourceUTFGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SourceUTFGridComponent,
      selectors: [["aol-source-utfgrid"]],
      inputs: {
        tileJSON: "tileJSON",
        url: "url"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: SourceComponent,
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return SourceUTFGridComponent_1;
        })
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]],
      ngContentSelectors: _c0,
      decls: 1,
      vars: 0,
      template: function SourceUTFGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
        }
      },
      encapsulation: 2
    });

    SourceUTFGridComponent.ctorParameters = function () {
      return [{
        type: LayerTileComponent,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
        }]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceUTFGridComponent.prototype, "tileJSON", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SourceUTFGridComponent.prototype, "url", void 0);
    SourceUTFGridComponent = SourceUTFGridComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"])())], SourceUTFGridComponent);
    var COMPONENTS = [MapComponent, ViewComponent, GraticuleComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, SourceOsmComponent, SourceBingmapsComponent, SourceClusterComponent, SourceUTFGridComponent, SourceVectorComponent, SourceXYZComponent, SourceVectorTileComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceTileJSONComponent, SourceGeoJSONComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceImageArcGISRestComponent, SourceRasterComponent, FeatureComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GeometryCircleComponent, CoordinateComponent, CollectionCoordinatesComponent, StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, DefaultControlComponent, ControlComponent, ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, FormatMVTComponent, TileGridComponent, TileGridWMTSComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent, PinchZoomInteractionComponent, DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent, OverlayComponent, ContentComponent, AttributionsComponent, AttributionComponent];

    var AngularOpenlayersModule = function AngularOpenlayersModule() {
      _classCallCheck(this, AngularOpenlayersModule);
    };

    AngularOpenlayersModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AngularOpenlayersModule
    });
    AngularOpenlayersModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AngularOpenlayersModule_Factory(t) {
        return new (t || AngularOpenlayersModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-map',
          template: "\n    <div [style.width]=\"width\" [style.height]=\"height\"></div>\n    <ng-content></ng-content>\n  "
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        height: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        olClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        dblClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        moveEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pointerDrag: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pointerMove: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onpostrender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        postRender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        onprerender: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        propertyChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        singleClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        pixelRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keyboardEventTarget: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loadTilesWhileAnimating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        loadTilesWhileInteracting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        logo: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        renderer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-view',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        zoomAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        changeZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        changeResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        changeCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        constrainRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        enableRotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        extent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resolutions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomFactor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        constrainOnlyCenter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        smoothExtentConstraint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        constrainResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        smoothResolutionConstraint: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showFullExtent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multiWorld: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GraticuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-graticule',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        strokeStyle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        showLabels: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lonLabelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        latLabelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-layer-group',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: LayerGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-layer-image',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: LayerGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        extent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-layer-tile',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: LayerGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        preload: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        useInterimTilesOnError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerVectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-layer-vector',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: LayerGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        renderBuffer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        updateWhileAnimating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        updateWhileInteracting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LayerVectorTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-layer-vectortile',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: LayerGroupComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        renderBuffer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        renderMode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        renderOrder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        updateWhileAnimating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        updateWhileInteracting: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        visible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TileGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-tilegrid',
          template: ''
        }]
      }], null, {
        extent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resolutions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceXYZComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-xyz',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceXYZComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        tileLoadStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileLoadEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileLoadError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opaque: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reprojectionErrorThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilePixelRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileUrlFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        urls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileGridXYZ: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [TileGridComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceOsmComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-osm',
          template: " <div class=\"aol-source-osm\"></div> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceOsmComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        tileLoadStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileLoadEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileLoadError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attributions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opaque: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reprojectionErrorThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceBingmapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-bingmaps',
          template: " <div class=\"aol-source-bingmaps\"></div> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceBingmapsComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        imagerySet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidpi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        culture: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        key: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxZoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reprojectionErrorThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceVectorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-vector',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceVectorComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerVectorComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        overlaps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        useSpatialIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        strategy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceClusterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-cluster',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceClusterComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerVectorComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        distance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geometryFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sourceVectorComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [SourceVectorComponent]
        }]
      });
    })();

    var ɵTileGridWMTSComponent_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](TileGridWMTSComponent);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TileGridWMTSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-tilegrid-wmts',
          template: ''
        }]
      }], null, {
        origin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        origins: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resolutions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matrixIds: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        sizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileSizes: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        widths: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceTileWMTSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-tilewmts',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceTileWMTSComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        tileLoadStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileLoadEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        tileLoadError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        cacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reprojectionErrorThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        requestEncoding: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilePixelRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        version: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        format: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matrixSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        dimensions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        urls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileGridWMTS: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [TileGridWMTSComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceVectorTileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-vectortile',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceVectorTileComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerVectorTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        cacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        overlaps: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tilePixelRatio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileUrlFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        urls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        formatComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [FormatComponent]
        }],
        tileGridComponent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [TileGridComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceTileWMSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-tilewms',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceTileWMSComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        cacheSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        gutter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidpi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        params: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        reprojectionErrorThreshold: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        serverType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tileLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        urls: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceTileJSONComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-tilejson',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceTileJSONComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceGeoJSONComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-geojson',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceGeoJSONComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerVectorComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        defaultDataProjection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        featureProjection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geometryName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceImageStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-imagestatic',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceImageStaticComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerImageComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        imageLoadStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        imageLoadEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        imageLoadError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageExtent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        attributions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceImageWMSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-imagewms',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceImageWMSComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerImageComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        imageLoadStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        imageLoadEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        imageLoadError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        attributions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hidpi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        serverType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        params: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resolutions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceImageArcGISRestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-imagearcgisrest',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceImageArcGISRestComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerImageComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        ratio: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageLoadStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        imageLoadEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        imageLoadError: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        attributions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imageLoadFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        params: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        resolutions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceRasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-raster',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceRasterComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerImageComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        beforeOperations: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        afterOperations: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [SourceComponent]
        }],
        operation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        threads: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lib: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        operationType: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeatureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-feature',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: SourceVectorComponent
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryCircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-circle',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, {
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryLinestringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-linestring',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryMultiLinestringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-multilinestring',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryMultiPointComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-multipoint',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryMultiPolygonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-multipolygon',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryPointComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-point',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GeometryPolygonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-geometry-polygon',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: FeatureComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-content',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-overlay',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [ContentComponent, {
            "static": true
          }]
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        positioning: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stopEvent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        insertFirst: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPan: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPanAnimation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoPanMargin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CoordinateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-coordinate',
          template: " <div class=\"aol-coordinate\"></div> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: ViewComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: GeometryPointComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: GeometryCircleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: OverlayComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        srid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        x: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        y: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CollectionCoordinatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-collection-coordinates',
          template: " <div class=\"aol-collection-coordinates\"></div> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: GeometryLinestringComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: GeometryPolygonComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: GeometryMultiPointComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: GeometryMultiLinestringComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: GeometryMultiPolygonComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        srid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        coordinates: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-style',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: FeatureComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: LayerVectorComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        geometry: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        image: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zIndex: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleCircleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-style-circle',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: StyleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        fill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        radius: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapToPixel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        stroke: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        atlasManager: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleTextComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-style-text',
          template: " <div class=\"aol-style-text\"></div> "
        }]
      }], function () {
        return [{
          type: StyleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        font: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetY: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateWithView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        textAlign: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        textBaseLine: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleStrokeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-style-stroke',
          template: " <div class=\"aol-style-stroke\"></div> "
        }]
      }], function () {
        return [{
          type: StyleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: StyleCircleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: StyleTextComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineCap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineDash: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        lineJoin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        miterLimit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        width: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleIconComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-style-icon',
          template: " <div class=\"aol-style-icon\"></div> "
        }]
      }], function () {
        return [{
          type: StyleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        anchor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorXUnits: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorYUnits: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        anchorOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        crossOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        img: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offset: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        offsetOrigin: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        opacity: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        scale: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapToPixel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateWithView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotation: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        size: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        imgSize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](StyleFillComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-style-fill',
          template: " <div class=\"aol-style-fill\"></div> "
        }]
      }], function () {
        return [{
          type: StyleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: StyleCircleComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: StyleTextComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }];
      }, {
        color: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-defaults',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        attribution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        attributionOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        rotateOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomOptions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"],
          args: [ContentComponent, {
            "static": true
          }]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlAttributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-attribution',
          template: ""
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        collapsible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlFullScreenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-fullscreen',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        labelActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tipLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        keys: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlMousePositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-mouseposition',
          template: ""
        }]
      }], function () {
        return [{
          type: MapComponent
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, {
        coordinateFormat: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlOverviewMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-overviewmap',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        collapsed: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        collapseLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        collapsible: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tipLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlRotateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-rotate',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tipLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        autoHide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlScaleLineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-scaleline',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        units: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlZoomComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-zoom',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomInLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomOutLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomInTipLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        zoomOutTipLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        delta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlZoomSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-zoomslider',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ControlZoomToExtentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-control-zoomtoextent',
          template: " <ng-content></ng-content> "
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        label: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        tipLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        extent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FormatMVTComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-format-mvt',
          template: '',
          providers: [{
            provide: FormatComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return FormatMVTComponent_1;
            })
          }]
        }]
      }], function () {
        return [];
      }, {
        featureClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geometryName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layerName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DefaultInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-default',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DoubleClickZoomInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-doubleclickzoom',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        delta: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragAndDropInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-draganddrop',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        formatConstructors: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        projection: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        target: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragBoxInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-dragbox',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        boxEndCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragPanInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-dragpan',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        kinetic: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragRotateInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-dragrotate',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragRotateAndZoomInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-dragrotateandzoom',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DragZoomInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-dragzoom',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        className: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        out: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MouseWheelZoomInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-mousewheelzoom',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        timeout: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        useAnchor: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PinchZoomInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-pinchzoom',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        duration: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        constrainResolution: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DrawInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-draw',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        olChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        olChangeActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drawEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        drawStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        propertyChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        clickTolerance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        features: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        snapTolerance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        maxPoints: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        minPoints: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        finishCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geometryFunction: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        geometryName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        freehandCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        freehand: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SelectInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-select',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        olChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        olSelect: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        propertyChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        addCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        removeCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        toggleCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        multi: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        features: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModifyInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-modify',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        modifyEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        modifyStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        olChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        olChangeActive: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        propertyChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        condition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        deleteCondition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        pixelTolerance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        style: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        features: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        wrapX: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        source: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TranslateInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-interaction-translate',
          template: ''
        }]
      }], function () {
        return [{
          type: MapComponent
        }];
      }, {
        olChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        propertyChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        translateEnd: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        translateStart: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        translating: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }],
        features: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        layers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        hitTolerance: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttributionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-attribution',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }];
      }, null);
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AttributionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-attributions',
          template: '<ng-content></ng-content>'
        }]
      }], function () {
        return [{
          type: SourceComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        attributions: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"],
          args: [AttributionComponent]
        }]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SourceUTFGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'aol-source-utfgrid',
          template: " <ng-content></ng-content> ",
          providers: [{
            provide: SourceComponent,
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
              return SourceUTFGridComponent_1;
            })
          }]
        }]
      }], function () {
        return [{
          type: LayerTileComponent,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"]
          }]
        }];
      }, {
        tileJSON: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        url: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AngularOpenlayersModule, {
        declarations: function declarations() {
          return [MapComponent, ViewComponent, GraticuleComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, SourceOsmComponent, SourceBingmapsComponent, SourceClusterComponent, SourceUTFGridComponent, SourceVectorComponent, SourceXYZComponent, SourceVectorTileComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceTileJSONComponent, SourceGeoJSONComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceImageArcGISRestComponent, SourceRasterComponent, FeatureComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GeometryCircleComponent, CoordinateComponent, CollectionCoordinatesComponent, StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, DefaultControlComponent, ControlComponent, ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, FormatMVTComponent, TileGridComponent, TileGridWMTSComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent, PinchZoomInteractionComponent, DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent, OverlayComponent, ContentComponent, AttributionsComponent, AttributionComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
        },
        exports: function exports() {
          return [MapComponent, ViewComponent, GraticuleComponent, LayerGroupComponent, LayerImageComponent, LayerTileComponent, LayerVectorComponent, LayerVectorTileComponent, SourceOsmComponent, SourceBingmapsComponent, SourceClusterComponent, SourceUTFGridComponent, SourceVectorComponent, SourceXYZComponent, SourceVectorTileComponent, SourceTileWMSComponent, SourceTileWMTSComponent, SourceTileJSONComponent, SourceGeoJSONComponent, SourceImageStaticComponent, SourceImageWMSComponent, SourceImageArcGISRestComponent, SourceRasterComponent, FeatureComponent, GeometryLinestringComponent, GeometryMultiLinestringComponent, GeometryMultiPointComponent, GeometryMultiPolygonComponent, GeometryPointComponent, GeometryPolygonComponent, GeometryCircleComponent, CoordinateComponent, CollectionCoordinatesComponent, StyleComponent, StyleCircleComponent, StyleFillComponent, StyleIconComponent, StyleStrokeComponent, StyleTextComponent, DefaultControlComponent, ControlComponent, ControlAttributionComponent, ControlFullScreenComponent, ControlMousePositionComponent, ControlOverviewMapComponent, ControlRotateComponent, ControlScaleLineComponent, ControlZoomComponent, ControlZoomSliderComponent, ControlZoomToExtentComponent, FormatMVTComponent, TileGridComponent, TileGridWMTSComponent, DefaultInteractionComponent, DoubleClickZoomInteractionComponent, DragAndDropInteractionComponent, DragBoxInteractionComponent, DragPanInteractionComponent, DragRotateInteractionComponent, DragRotateAndZoomInteractionComponent, DragZoomInteractionComponent, MouseWheelZoomInteractionComponent, PinchZoomInteractionComponent, DrawInteractionComponent, SelectInteractionComponent, ModifyInteractionComponent, TranslateInteractionComponent, OverlayComponent, ContentComponent, AttributionsComponent, AttributionComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AngularOpenlayersModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: COMPONENTS,
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
          exports: COMPONENTS
        }]
      }], null, null);
    })();
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ngx-openlayers.js.map

    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 0,
      consts: [["routerLink", "/"], [1, "main-container"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ngx-openlayer demo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["header[_ngcontent-%COMP%] {\n        top: 0;\n        height: 75px;\n        width: 100%;\n        display: -ms-flexbox;\n        display: flex;\n        flex-wrap: wrap;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        z-index: 4;\n        background-color: #202124;\n        color: #fff;\n        font-family: Roboto, sans-serif;\n        font-size: 16px;\n        opacity: 1;\n        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n      }\n\n      header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n        cursor: pointer;\n      }\n\n      .main-container[_ngcontent-%COMP%] {\n        height: calc(100% - 72px);\n        background-color: white;\n        margin: 0px;\n        overflow: auto;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <header><h1 routerLink=\"/\">ngx-openlayer demo</h1></header>\n    <div class=\"main-container\"><router-outlet></router-outlet></div>\n  ",
          styles: ["\n      header {\n        top: 0;\n        height: 75px;\n        width: 100%;\n        display: -ms-flexbox;\n        display: flex;\n        flex-wrap: wrap;\n        -ms-flex-pack: justify;\n        justify-content: space-between;\n        z-index: 4;\n        background-color: #202124;\n        color: #fff;\n        font-family: Roboto, sans-serif;\n        font-size: 16px;\n        opacity: 1;\n        box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12);\n      }\n\n      header h1 {\n        padding-left: 1rem;\n        cursor: pointer;\n      }\n\n      .main-container {\n        height: calc(100% - 72px);\n        background-color: white;\n        margin: 0px;\n        overflow: auto;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./arcgis-image/arcgis-image.component */
    "./src/app/arcgis-image/arcgis-image.component.ts");
    /* harmony import */


    var _basic_basic_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./basic/basic.component */
    "./src/app/basic/basic.component.ts");
    /* harmony import */


    var _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cluster/cluster.component */
    "./src/app/cluster/cluster.component.ts");
    /* harmony import */


    var _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./color-select-hover/color-select-hover.component */
    "./src/app/color-select-hover/color-select-hover.component.ts");
    /* harmony import */


    var _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./cursor-position/cursor-position.component */
    "./src/app/cursor-position/cursor-position.component.ts");
    /* harmony import */


    var _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./display-geojson-source/display-geojson-source.component */
    "./src/app/display-geojson-source/display-geojson-source.component.ts");
    /* harmony import */


    var _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./display-geometry/display-geometry.component */
    "./src/app/display-geometry/display-geometry.component.ts");
    /* harmony import */


    var _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./draw-polygon/draw-polygon.component */
    "./src/app/draw-polygon/draw-polygon.component.ts");
    /* harmony import */


    var _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./examples-item/examples-item.component */
    "./src/app/examples-item/examples-item.component.ts");
    /* harmony import */


    var _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./examples-list/examples-list.component */
    "./src/app/examples-list/examples-list.component.ts");
    /* harmony import */


    var _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./graticule/graticule.component */
    "./src/app/graticule/graticule.component.ts");
    /* harmony import */


    var _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./image-static/image-static.component */
    "./src/app/image-static/image-static.component.ts");
    /* harmony import */


    var _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./image-wms/image-wms.component */
    "./src/app/image-wms/image-wms.component.ts");
    /* harmony import */


    var _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./map-position/map-position.component */
    "./src/app/map-position/map-position.component.ts");
    /* harmony import */


    var _marker_marker_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./marker/marker.component */
    "./src/app/marker/marker.component.ts");
    /* harmony import */


    var _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./modify-polygon/modify-polygon.component */
    "./src/app/modify-polygon/modify-polygon.component.ts");
    /* harmony import */


    var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./overlay/overlay.component */
    "./src/app/overlay/overlay.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/overview/overview.component.ts");
    /* harmony import */


    var _raster_raster_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./raster/raster.component */
    "./src/app/raster/raster.component.ts");
    /* harmony import */


    var _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./select-interaction/select-interaction.component */
    "./src/app/select-interaction/select-interaction.component.ts");
    /* harmony import */


    var _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./side-by-side/side-by-side.component */
    "./src/app/side-by-side/side-by-side.component.ts");
    /* harmony import */


    var _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./swipe/swipe.component */
    "./src/app/swipe/swipe.component.ts");
    /* harmony import */


    var _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./tile-json/tile-json.component */
    "./src/app/tile-json/tile-json.component.ts");
    /* harmony import */


    var _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./utfgrid/utfgrid.component */
    "./src/app/utfgrid/utfgrid.component.ts");
    /* harmony import */


    var _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./view-projection-update/view-projection-update.component */
    "./src/app/view-projection-update/view-projection-update.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["AngularOpenlayersModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_7__["BasicComponent"], _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_8__["ClusterComponent"], _raster_raster_component__WEBPACK_IMPORTED_MODULE_24__["RasterComponent"], _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_15__["ExamplesListComponent"], _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_14__["ExamplesItemComponent"], _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_19__["MapPositionComponent"], _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_10__["CursorPositionComponent"], _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_12__["DisplayGeometryComponent"], _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_11__["DisplayGeojsonSourceComponent"], _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_13__["DrawPolygonComponent"], _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_21__["ModifyPolygonComponent"], _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_26__["SideBySideComponent"], _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_27__["SwipeComponent"], _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_22__["OverlayComponent"], _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_9__["ColorSelectHoverComponent"], _marker_marker_component__WEBPACK_IMPORTED_MODULE_20__["MarkerComponent"], _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_6__["ArcgisImageComponent"], _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_29__["UTFGridComponent"], _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_18__["ImageWMSComponent"], _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_25__["SelectInteractionComponent"], _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_17__["ImageStaticComponent"], _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_28__["TileJsonComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__["OverviewComponent"], _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_30__["ViewProjectionUpdateComponent"], _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_16__["GraticuleComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["AngularOpenlayersModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _basic_basic_component__WEBPACK_IMPORTED_MODULE_7__["BasicComponent"], _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_8__["ClusterComponent"], _raster_raster_component__WEBPACK_IMPORTED_MODULE_24__["RasterComponent"], _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_15__["ExamplesListComponent"], _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_14__["ExamplesItemComponent"], _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_19__["MapPositionComponent"], _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_10__["CursorPositionComponent"], _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_12__["DisplayGeometryComponent"], _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_11__["DisplayGeojsonSourceComponent"], _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_13__["DrawPolygonComponent"], _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_21__["ModifyPolygonComponent"], _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_26__["SideBySideComponent"], _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_27__["SwipeComponent"], _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_22__["OverlayComponent"], _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_9__["ColorSelectHoverComponent"], _marker_marker_component__WEBPACK_IMPORTED_MODULE_20__["MarkerComponent"], _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_6__["ArcgisImageComponent"], _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_29__["UTFGridComponent"], _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_18__["ImageWMSComponent"], _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_25__["SelectInteractionComponent"], _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_17__["ImageStaticComponent"], _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_28__["TileJsonComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_23__["OverviewComponent"], _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_30__["ViewProjectionUpdateComponent"], _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_16__["GraticuleComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["AngularOpenlayersModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cluster/cluster.component */
    "./src/app/cluster/cluster.component.ts");
    /* harmony import */


    var _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./basic/basic.component */
    "./src/app/basic/basic.component.ts");
    /* harmony import */


    var _raster_raster_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./raster/raster.component */
    "./src/app/raster/raster.component.ts");
    /* harmony import */


    var _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./examples-list/examples-list.component */
    "./src/app/examples-list/examples-list.component.ts");
    /* harmony import */


    var _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./examples-item/examples-item.component */
    "./src/app/examples-item/examples-item.component.ts");
    /* harmony import */


    var _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./map-position/map-position.component */
    "./src/app/map-position/map-position.component.ts");
    /* harmony import */


    var _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./cursor-position/cursor-position.component */
    "./src/app/cursor-position/cursor-position.component.ts");
    /* harmony import */


    var _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./display-geometry/display-geometry.component */
    "./src/app/display-geometry/display-geometry.component.ts");
    /* harmony import */


    var _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./display-geojson-source/display-geojson-source.component */
    "./src/app/display-geojson-source/display-geojson-source.component.ts");
    /* harmony import */


    var _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./draw-polygon/draw-polygon.component */
    "./src/app/draw-polygon/draw-polygon.component.ts");
    /* harmony import */


    var _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modify-polygon/modify-polygon.component */
    "./src/app/modify-polygon/modify-polygon.component.ts");
    /* harmony import */


    var _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./side-by-side/side-by-side.component */
    "./src/app/side-by-side/side-by-side.component.ts");
    /* harmony import */


    var _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./swipe/swipe.component */
    "./src/app/swipe/swipe.component.ts");
    /* harmony import */


    var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./overlay/overlay.component */
    "./src/app/overlay/overlay.component.ts");
    /* harmony import */


    var _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./color-select-hover/color-select-hover.component */
    "./src/app/color-select-hover/color-select-hover.component.ts");
    /* harmony import */


    var _marker_marker_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./marker/marker.component */
    "./src/app/marker/marker.component.ts");
    /* harmony import */


    var _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./arcgis-image/arcgis-image.component */
    "./src/app/arcgis-image/arcgis-image.component.ts");
    /* harmony import */


    var _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./image-wms/image-wms.component */
    "./src/app/image-wms/image-wms.component.ts");
    /* harmony import */


    var _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./view-projection-update/view-projection-update.component */
    "./src/app/view-projection-update/view-projection-update.component.ts");
    /* harmony import */


    var _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./utfgrid/utfgrid.component */
    "./src/app/utfgrid/utfgrid.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/overview/overview.component.ts");
    /* harmony import */


    var _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./tile-json/tile-json.component */
    "./src/app/tile-json/tile-json.component.ts");
    /* harmony import */


    var _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./select-interaction/select-interaction.component */
    "./src/app/select-interaction/select-interaction.component.ts");
    /* harmony import */


    var _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./image-static/image-static.component */
    "./src/app/image-static/image-static.component.ts");
    /* harmony import */


    var _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./graticule/graticule.component */
    "./src/app/graticule/graticule.component.ts");

    var routes = [{
      path: '',
      component: _examples_list_examples_list_component__WEBPACK_IMPORTED_MODULE_5__["ExamplesListComponent"]
    }, {
      path: 'examples',
      component: _examples_item_examples_item_component__WEBPACK_IMPORTED_MODULE_6__["ExamplesItemComponent"],
      children: [{
        path: 'basic',
        component: _basic_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"]
      }, {
        path: 'map-position',
        component: _map_position_map_position_component__WEBPACK_IMPORTED_MODULE_7__["MapPositionComponent"]
      }, {
        path: 'cursor-position',
        component: _cursor_position_cursor_position_component__WEBPACK_IMPORTED_MODULE_8__["CursorPositionComponent"]
      }, {
        path: 'display-geometry',
        component: _display_geometry_display_geometry_component__WEBPACK_IMPORTED_MODULE_9__["DisplayGeometryComponent"]
      }, {
        path: 'display-geojson-source',
        component: _display_geojson_source_display_geojson_source_component__WEBPACK_IMPORTED_MODULE_10__["DisplayGeojsonSourceComponent"]
      }, {
        path: 'draw-polygon',
        component: _draw_polygon_draw_polygon_component__WEBPACK_IMPORTED_MODULE_11__["DrawPolygonComponent"]
      }, {
        path: 'modify-polygon',
        component: _modify_polygon_modify_polygon_component__WEBPACK_IMPORTED_MODULE_12__["ModifyPolygonComponent"]
      }, {
        path: 'side-by-side',
        component: _side_by_side_side_by_side_component__WEBPACK_IMPORTED_MODULE_13__["SideBySideComponent"]
      }, {
        path: 'swipe',
        component: _swipe_swipe_component__WEBPACK_IMPORTED_MODULE_14__["SwipeComponent"]
      }, {
        path: 'overlay',
        component: _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_15__["OverlayComponent"]
      }, {
        path: 'color-select-hover',
        component: _color_select_hover_color_select_hover_component__WEBPACK_IMPORTED_MODULE_16__["ColorSelectHoverComponent"]
      }, {
        path: 'marker',
        component: _marker_marker_component__WEBPACK_IMPORTED_MODULE_17__["MarkerComponent"]
      }, {
        path: 'cluster',
        component: _cluster_cluster_component__WEBPACK_IMPORTED_MODULE_2__["ClusterComponent"]
      }, {
        path: 'raster',
        component: _raster_raster_component__WEBPACK_IMPORTED_MODULE_4__["RasterComponent"]
      }, {
        path: 'arcgis-image',
        component: _arcgis_image_arcgis_image_component__WEBPACK_IMPORTED_MODULE_18__["ArcgisImageComponent"]
      }, {
        path: 'image-wms',
        component: _image_wms_image_wms_component__WEBPACK_IMPORTED_MODULE_19__["ImageWMSComponent"]
      }, {
        path: 'view-projection-update',
        component: _view_projection_update_view_projection_update_component__WEBPACK_IMPORTED_MODULE_20__["ViewProjectionUpdateComponent"]
      }, {
        path: 'overview',
        component: _overview_overview_component__WEBPACK_IMPORTED_MODULE_22__["OverviewComponent"]
      }, {
        path: 'utf-grid',
        component: _utfgrid_utfgrid_component__WEBPACK_IMPORTED_MODULE_21__["UTFGridComponent"]
      }, {
        path: 'image-static',
        component: _image_static_image_static_component__WEBPACK_IMPORTED_MODULE_25__["ImageStaticComponent"]
      }, {
        path: 'select-interaction',
        component: _select_interaction_select_interaction_component__WEBPACK_IMPORTED_MODULE_24__["SelectInteractionComponent"]
      }, {
        path: 'tile-json',
        component: _tile_json_tile_json_component__WEBPACK_IMPORTED_MODULE_23__["TileJsonComponent"]
      }, {
        path: 'graticule',
        component: _graticule_graticule_component__WEBPACK_IMPORTED_MODULE_26__["GraticuleComponent"]
      }]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/arcgis-image/arcgis-image.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/arcgis-image/arcgis-image.component.ts ***!
    \********************************************************/

  /*! exports provided: ArcgisImageComponent */

  /***/
  function srcAppArcgisImageArcgisImageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArcgisImageComponent", function () {
      return ArcgisImageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var ArcgisImageComponent = /*#__PURE__*/function () {
      function ArcgisImageComponent() {
        _classCallCheck(this, ArcgisImageComponent);

        this.zoom = 4;
        this.opacity = 1.0;
      }

      _createClass(ArcgisImageComponent, [{
        key: "imageLoadStart",
        value: function imageLoadStart() {
          console.log('image starts loading at: ' + new Date());
        }
      }, {
        key: "imageLoadEnd",
        value: function imageLoadEnd() {
          console.log('image ends loading at: ' + new Date());
        }
      }]);

      return ArcgisImageComponent;
    }();

    ArcgisImageComponent.ɵfac = function ArcgisImageComponent_Factory(t) {
      return new (t || ArcgisImageComponent)();
    };

    ArcgisImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ArcgisImageComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 4,
      consts: [[3, "zoom"], [3, "x", "y"], ["projection", "EPSG:3857", "url", "https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer", 3, "ratio", "imageLoadStart", "imageLoadEnd"]],
      template: function ArcgisImageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-source-imagearcgisrest", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoadStart", function ArcgisImageComponent_Template_aol_source_imagearcgisrest_imageLoadStart_9_listener() {
            return ctx.imageLoadStart();
          })("imageLoadEnd", function ArcgisImageComponent_Template_aol_source_imagearcgisrest_imageLoadEnd_9_listener() {
            return ctx.imageLoadEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0 - 10997148)("y", 4569099);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ratio", 1);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ControlFullScreenComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerImageComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceImageArcGISRestComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ArcgisImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map>\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-control-fullscreen></aol-control-fullscreen>\n      <aol-view [zoom]=\"zoom\"> <aol-coordinate [x]=\"-10997148\" [y]=\"4569099\"></aol-coordinate> </aol-view>\n      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-image>\n        <aol-source-imagearcgisrest\n          projection=\"EPSG:3857\"\n          [ratio]=\"1\"\n          url=\"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer\"\n          (imageLoadStart)=\"imageLoadStart()\"\n          (imageLoadEnd)=\"imageLoadEnd()\"\n        ></aol-source-imagearcgisrest>\n      </aol-layer-image>\n    </aol-map>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 100%;\n        height: 100%;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/basic/basic.component.ts":
  /*!******************************************!*\
    !*** ./src/app/basic/basic.component.ts ***!
    \******************************************/

  /*! exports provided: BasicComponent */

  /***/
  function srcAppBasicBasicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
      return BasicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var _c0 = function _c0() {
      return [0.5, 1];
    };

    var BasicComponent = /*#__PURE__*/function () {
      function BasicComponent() {
        _classCallCheck(this, BasicComponent);

        this.zoom = 15;
        this.opacity = 1.0;
        this.width = 5;
        this.lon = 5;
        this.lat = 45;
      }

      _createClass(BasicComponent, [{
        key: "increaseZoom",
        value: function increaseZoom() {
          this.zoom = Math.min(this.zoom + 1, 18);
          console.log('zoom: ', this.zoom);
        }
      }, {
        key: "decreaseZoom",
        value: function decreaseZoom() {
          this.zoom = Math.max(this.zoom - 1, 1);
          console.log('zoom: ', this.zoom);
        }
      }, {
        key: "increaseLat",
        value: function increaseLat() {
          this.lat = Math.max(-90, Math.min(90, this.lat + 1));
          console.log('lat: ', this.lat);
        }
      }, {
        key: "decreaseLat",
        value: function decreaseLat() {
          this.lat = Math.max(-90, Math.min(90, this.lat - 1));
          console.log('lat: ', this.lat);
        }
      }, {
        key: "increaseLon",
        value: function increaseLon() {
          this.lon = Math.max(-180, Math.min(180, this.lat + 1));
          console.log('lon: ', this.lon);
        }
      }, {
        key: "decreaseLon",
        value: function decreaseLon() {
          this.lon = Math.max(-180, Math.min(180, this.lat - 1));
          console.log('lon: ', this.lon);
        }
      }, {
        key: "increaseOpacity",
        value: function increaseOpacity() {
          this.opacity = Math.min(this.opacity + 0.1, 1);
          console.log('opacity: ', this.opacity);
        }
      }, {
        key: "decreaseOpacity",
        value: function decreaseOpacity() {
          this.opacity = Math.max(this.opacity - 0.1, 0);
          console.log('opacity: ', this.opacity);
        }
      }, {
        key: "changeResolution",
        value: function changeResolution(evt) {
          console.log('Resolution changed:', evt);
        }
      }, {
        key: "changeCenter",
        value: function changeCenter(evt) {
          console.log('Center changed:', evt);
        }
      }, {
        key: "changeZoom",
        value: function changeZoom(evt) {
          console.log('Zoom changed:', evt);
        }
      }]);

      return BasicComponent;
    }();

    BasicComponent.ɵfac = function BasicComponent_Factory(t) {
      return new (t || BasicComponent)();
    };

    BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BasicComponent,
      selectors: [["app-root"]],
      decls: 48,
      vars: 25,
      consts: [[3, "width", "height"], [3, "zoom", "changeResolution", "changeZoom", "changeCenter"], [3, "x", "y", "srid"], [3, "opacity"], [3, "radius"], [3, "color", "width"], [3, "color"], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"], [1, "controls"], [3, "click"]],
      template: function BasicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeResolution", function BasicComponent_Template_aol_view_changeResolution_1_listener($event) {
            return ctx.changeResolution($event);
          })("changeZoom", function BasicComponent_Template_aol_view_changeZoom_1_listener($event) {
            return ctx.changeZoom($event);
          })("changeCenter", function BasicComponent_Template_aol_view_changeCenter_1_listener($event) {
            return ctx.changeCenter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-layer-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-layer-vector", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-source-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-geometry-point");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-style-circle", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-style-stroke", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "aol-style-fill", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aol-geometry-point");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "aol-style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "aol-style-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "opacity:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_22_listener() {
            return ctx.increaseOpacity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_24_listener() {
            return ctx.decreaseOpacity();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "zoom:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_29_listener() {
            return ctx.increaseZoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_31_listener() {
            return ctx.decreaseZoom();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "latitude:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_36_listener() {
            return ctx.increaseLat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_38_listener() {
            return ctx.decreaseLat();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "longitude:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_43_listener() {
            return ctx.increaseLon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "+");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BasicComponent_Template_button_click_45_listener() {
            return ctx.decreaseLon();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "-");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", ctx.opacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", ctx.opacity);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", ctx.width);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5.1)("y", 45.1)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/marker.png")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 0.1)("anchorOrigin", "top-left");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPointComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleCircleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleStrokeComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleFillComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleIconComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BasicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map [width]=\"'100%'\" [height]=\"'100%'\">\n      <aol-view\n        [zoom]=\"zoom\"\n        (changeResolution)=\"changeResolution($event)\"\n        (changeZoom)=\"changeZoom($event)\"\n        (changeCenter)=\"changeCenter($event)\"\n      >\n        <aol-coordinate [x]=\"5\" [y]=\"45\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n      <aol-layer-tile [opacity]=\"opacity\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n      <aol-layer-vector [opacity]=\"opacity\">\n        <aol-source-vector>\n          <aol-feature>\n            <aol-geometry-point>\n              <aol-coordinate [x]=\"5\" [y]=\"45\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-geometry-point>\n            <aol-style>\n              <aol-style-circle [radius]=\"10\">\n                <aol-style-stroke [color]=\"'black'\" [width]=\"width\"></aol-style-stroke>\n                <aol-style-fill [color]=\"'green'\"></aol-style-fill>\n              </aol-style-circle>\n            </aol-style>\n          </aol-feature>\n          <aol-feature>\n            <aol-geometry-point>\n              <aol-coordinate [x]=\"5.1\" [y]=\"45.1\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-geometry-point>\n            <aol-style>\n              <aol-style-icon\n                [src]=\"'assets/marker.png'\"\n                [anchor]=\"[0.5, 1]\"\n                [anchorXUnits]=\"'fraction'\"\n                [anchorYUnits]=\"'fraction'\"\n                [scale]=\"0.1\"\n                [anchorOrigin]=\"'top-left'\"\n              >\n              </aol-style-icon>\n            </aol-style>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n    <div class=\"controls\">\n      <span>opacity:</span><button (click)=\"increaseOpacity()\">+</button><button (click)=\"decreaseOpacity()\">-</button\n      ><br />\n      <span>zoom:</span><button (click)=\"increaseZoom()\">+</button><button (click)=\"decreaseZoom()\">-</button><br />\n      <span>latitude:</span><button (click)=\"increaseLat()\">+</button><button (click)=\"decreaseLat()\">-</button><br />\n      <span>longitude:</span><button (click)=\"increaseLon()\">+</button><button (click)=\"decreaseLon()\">-</button><br />\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .controls {\n        width: 28%;\n        padding: 1rem;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cluster/cluster.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/cluster/cluster.component.ts ***!
    \**********************************************/

  /*! exports provided: ClusterComponent */

  /***/
  function srcAppClusterClusterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClusterComponent", function () {
      return ClusterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function ClusterComponent_aol_feature_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-geometry-point");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-coordinate", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var p_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", p_r1.x)("y", p_r1.y)("srid", "EPSG:4326");
      }
    }

    var _c0 = function _c0() {
      return [1.47, 43.545];
    };

    var _c1 = function _c1() {
      return [1.51, 43.545];
    };

    var _c2 = function _c2() {
      return [1.51, 43.565];
    };

    var _c3 = function _c3() {
      return [1.47, 43.565];
    };

    var _c4 = function _c4(a0, a1, a2, a3) {
      return [a0, a1, a2, a3];
    };

    var _c5 = function _c5(a0) {
      return [a0];
    };

    var _c6 = function _c6() {
      return [255, 0, 0, 0.1];
    };

    var ClusterComponent = /*#__PURE__*/function () {
      function ClusterComponent() {
        _classCallCheck(this, ClusterComponent);

        this.distance = 60;
        this.points = [];
      }

      _createClass(ClusterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // Generate random points
          var nbPoints = 2000;

          for (var i = 0; i < nbPoints; ++i) {
            this.points.push({
              x: this.getRandomInRange(1.47, 1.51, 4),
              y: this.getRandomInRange(43.545, 43.565, 4)
            });
          }
        }
      }, {
        key: "getRandomInRange",
        value: function getRandomInRange(from, to, fixed) {
          return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
        }
      }]);

      return ClusterComponent;
    }();

    ClusterComponent.ɵfac = function ClusterComponent_Factory(t) {
      return new (t || ClusterComponent)();
    };

    ClusterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ClusterComponent,
      selectors: [["app-cluster"]],
      decls: 30,
      vars: 31,
      consts: [[3, "width", "height"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "distance"], [4, "ngFor", "ngForOf"], [3, "radius"], [3, "color"], [3, "coordinates", "srid"], [3, "color", "width"], [1, "control"], ["type", "range", "min", "0", "max", "255", 3, "ngModel", "ngModelChange"]],
      template: function ClusterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-source-cluster", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-source-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClusterComponent_aol_feature_11_Template, 3, 3, "aol-feature", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "aol-style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "aol-style-circle", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "aol-style-stroke", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "aol-style-fill", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "aol-layer-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "aol-source-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "aol-geometry-polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "aol-collection-coordinates", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "aol-style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "aol-style-stroke", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "aol-style-fill", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Distance : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ClusterComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.distance = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("distance", ctx.distance);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.points);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#fff");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "#3399CC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction4"](23, _c4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3))))("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "red")("width", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.distance);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.distance, ")");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ControlFullScreenComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceClusterComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleCircleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleStrokeComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleFillComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPolygonComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CollectionCoordinatesComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPointComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }\n\n      .control[_ngcontent-%COMP%] {\n        flex: 0 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClusterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cluster',
          template: "\n    <aol-map [width]=\"'100%'\" [height]=\"'100%'\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-control-fullscreen></aol-control-fullscreen>\n\n      <aol-view [zoom]=\"14\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-vector>\n        <aol-source-cluster [distance]=\"distance\">\n          <aol-source-vector>\n            <aol-feature *ngFor=\"let p of points\">\n              <aol-geometry-point>\n                <aol-coordinate [x]=\"p.x\" [y]=\"p.y\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n              </aol-geometry-point>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-style>\n            <aol-style-circle [radius]=\"10\">\n              <aol-style-stroke [color]=\"'#fff'\"></aol-style-stroke>\n              <aol-style-fill [color]=\"'#3399CC'\"></aol-style-fill>\n            </aol-style-circle>\n          </aol-style>\n        </aol-source-cluster>\n      </aol-layer-vector>\n\n      <aol-layer-vector>\n        <aol-source-vector>\n          <aol-feature>\n            <aol-geometry-polygon>\n              <aol-collection-coordinates\n                [coordinates]=\"[\n                  [\n                    [1.47, 43.545],\n                    [1.51, 43.545],\n                    [1.51, 43.565],\n                    [1.47, 43.565]\n                  ]\n                ]\"\n                [srid]=\"'EPSG:4326'\"\n              >\n              </aol-collection-coordinates>\n            </aol-geometry-polygon>\n            <aol-style>\n              <aol-style-stroke [color]=\"'red'\" [width]=\"2\"></aol-style-stroke>\n              <aol-style-fill [color]=\"[255, 0, 0, 0.1]\"></aol-style-fill>\n            </aol-style>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n\n    <div class=\"control\">\n      <span>Distance : </span>\n      <input type=\"range\" min=\"0\" max=\"255\" [(ngModel)]=\"distance\" />\n      <span> ({{ distance }})</span>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      aol-map {\n        flex: 1 1 auto;\n      }\n\n      .control {\n        flex: 0 0 auto;\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/color-select-hover/color-select-hover.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/color-select-hover/color-select-hover.component.ts ***!
    \********************************************************************/

  /*! exports provided: ColorSelectHoverComponent */

  /***/
  function srcAppColorSelectHoverColorSelectHoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ColorSelectHoverComponent", function () {
      return ColorSelectHoverComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/style */
    "./node_modules/ol/style.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["map"];
    var _c1 = ["aoiLayerVector"];

    function ColorSelectHoverComponent_aol_layer_vector_11_aol_style_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-style-stroke", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-style-fill", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "white");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.3)");
      }
    }

    function ColorSelectHoverComponent_aol_layer_vector_11_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-style-stroke", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-style-fill", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.5)");
      }
    }

    function ColorSelectHoverComponent_aol_layer_vector_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector", null, 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColorSelectHoverComponent_aol_layer_vector_11_aol_style_2_Template, 3, 2, "aol-style", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColorSelectHoverComponent_aol_layer_vector_11_ng_template_3_Template, 3, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-feature", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-geometry-polygon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "aol-collection-coordinates", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var f_r51 = ctx.$implicit;

        var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

        var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", f_r51.id === ctx_r50.hoveredFeatureId)("ngIfElse", _r54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", f_r51.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", f_r51.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    var ColorSelectHoverComponent = /*#__PURE__*/function () {
      function ColorSelectHoverComponent() {
        _classCallCheck(this, ColorSelectHoverComponent);

        this.features = {
          type: 'FeatureCollection',
          features: [{
            id: 1,
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [[[-1.4501953125, 48.40003249610685], [2.13134765625, 48.40003249610685], [2.13134765625, 50.13466432216694], [-1.4501953125, 50.13466432216694], [-1.4501953125, 48.40003249610685]]]
            }
          }, {
            id: 2,
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [[[5.3173828125, 47.368594345213374], [9.29443359375, 47.368594345213374], [9.29443359375, 49.36806633482156], [5.3173828125, 49.36806633482156], [5.3173828125, 47.368594345213374]]]
            }
          }, {
            id: 3,
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [[[-3.3837890625, 43.61221676817573], [1.51611328125, 43.61221676817573], [1.51611328125, 46.694667307773116], [-3.3837890625, 46.694667307773116], [-3.3837890625, 43.61221676817573]]]
            }
          }, {
            id: 4,
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [[[4.50439453125, 42.342305278572816], [9.16259765625, 42.342305278572816], [9.16259765625, 45.66012730272194], [4.50439453125, 45.66012730272194], [4.50439453125, 42.342305278572816]]]
            }
          }]
        };
        this.styleInteratiselected = new ol_style__WEBPACK_IMPORTED_MODULE_1__["Style"]({
          fill: new ol_style__WEBPACK_IMPORTED_MODULE_1__["Fill"]({
            color: 'rgba(0, 153, 255, 0.1)'
          }),
          stroke: new ol_style__WEBPACK_IMPORTED_MODULE_1__["Stroke"]({
            color: 'rgba(0, 153, 255)',
            width: 3
          })
        });
      }

      _createClass(ColorSelectHoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "changeFeatureHovered",
        value: function changeFeatureHovered(event) {
          var hit = this.map.instance.forEachFeatureAtPixel(event.pixel, function (f) {
            return f;
          }, {
            layerFilter: inLayer.apply(void 0, _toConsumableArray(this.aoiLayerVector.toArray())),
            hitTolerance: 10
          });

          if (!hit && this.hoveredFeatureId) {
            this.hoveredFeatureId = null;
          }

          if (hit && hit.getId() !== this.hoveredFeatureId) {
            this.hoveredFeatureId = hit.getId();
          }
        }
      }]);

      return ColorSelectHoverComponent;
    }();

    ColorSelectHoverComponent.ɵfac = function ColorSelectHoverComponent_Factory(t) {
      return new (t || ColorSelectHoverComponent)();
    };

    ColorSelectHoverComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ColorSelectHoverComponent,
      selectors: [["app-color-select-hover"]],
      viewQuery: function ColorSelectHoverComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.aoiLayerVector = _t);
        }
      },
      decls: 12,
      vars: 8,
      consts: [["width", "100%", "height", "100%", 3, "pointerMove"], ["map", ""], ["select", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngFor", "ngForOf"], ["aoiLayerVector", ""], [4, "ngIf", "ngIfElse"], ["notHovered", ""], [3, "id"], [3, "coordinates", "srid"], ["width", "3", 3, "color"], [3, "color"]],
      template: function ColorSelectHoverComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerMove", function ColorSelectHoverComponent_Template_aol_map_pointerMove_0_listener($event) {
            return ctx.changeFeatureHovered($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-interaction-select", null, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-layer-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColorSelectHoverComponent_aol_layer_vector_11_Template, 9, 5, "aol-layer-vector", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleInteratiselected);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features.features);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["SelectInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["LayerGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["LayerVectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["GeometryPolygonComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["CollectionCoordinatesComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["StyleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["StyleStrokeComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["StyleFillComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorSelectHoverComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-color-select-hover',
          template: "\n    <aol-map #map (pointerMove)=\"changeFeatureHovered($event)\" width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-interaction-select #select [style]=\"styleInteratiselected\"></aol-interaction-select>\n\n      <aol-view [zoom]=\"5\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-group>\n        <aol-layer-vector #aoiLayerVector *ngFor=\"let f of features.features\">\n          <aol-style *ngIf=\"f.id === hoveredFeatureId; else notHovered\">\n            <aol-style-stroke [color]=\"'white'\" width=\"3\"></aol-style-stroke>\n            <aol-style-fill [color]=\"'rgba(90, 17, 26, 0.3)'\"></aol-style-fill>\n          </aol-style>\n          <ng-template #notHovered>\n            <aol-style>\n              <aol-style-stroke [color]=\"'rgba(90, 17, 26)'\" width=\"3\"></aol-style-stroke>\n              <aol-style-fill [color]=\"'rgba(90, 17, 26, 0.5)'\"></aol-style-fill>\n            </aol-style>\n          </ng-template>\n          <aol-source-vector>\n            <aol-feature [id]=\"f.id\">\n              <aol-geometry-polygon>\n                <aol-collection-coordinates\n                  [coordinates]=\"f.geometry.coordinates\"\n                  [srid]=\"'EPSG:4326'\"\n                ></aol-collection-coordinates>\n              </aol-geometry-polygon>\n            </aol-feature>\n          </aol-source-vector>\n        </aol-layer-vector>\n      </aol-layer-group>\n    </aol-map>\n  "
        }]
      }], function () {
        return [];
      }, {
        map: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }],
        aoiLayerVector: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
          args: ['aoiLayerVector']
        }]
      });
    })();

    function inLayer() {
      for (var _len = arguments.length, layers = new Array(_len), _key = 0; _key < _len; _key++) {
        layers[_key] = arguments[_key];
      }

      return function (l) {
        return layers.some(function (layer) {
          return layer.instance === l;
        });
      };
    }
    /***/

  },

  /***/
  "./src/app/cursor-position/cursor-position.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/cursor-position/cursor-position.component.ts ***!
    \**************************************************************/

  /*! exports provided: CursorPositionComponent */

  /***/
  function srcAppCursorPositionCursorPositionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CursorPositionComponent", function () {
      return CursorPositionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/proj */
    "./node_modules/ol/proj.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var CursorPositionComponent = /*#__PURE__*/function () {
      function CursorPositionComponent() {
        _classCallCheck(this, CursorPositionComponent);

        this.lon = 0;
        this.lat = 0;
      }

      _createClass(CursorPositionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "dispatchCursor",
        value: function dispatchCursor(event) {
          var coordinates = event.coordinate;
          this.lon = Object(ol_proj__WEBPACK_IMPORTED_MODULE_1__["transform"])(coordinates, 'EPSG:3857', 'EPSG:4326')[0];
          this.lat = Object(ol_proj__WEBPACK_IMPORTED_MODULE_1__["transform"])(coordinates, 'EPSG:3857', 'EPSG:4326')[1];
        }
      }, {
        key: "latToString",
        value: function latToString(lat) {
          return toSexagesimal(lat, '', '-');
        }
      }, {
        key: "lonToString",
        value: function lonToString(lon) {
          return toSexagesimal(lon, '', '-');
        }
      }]);

      return CursorPositionComponent;
    }();

    CursorPositionComponent.ɵfac = function CursorPositionComponent_Factory(t) {
      return new (t || CursorPositionComponent)();
    };

    CursorPositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CursorPositionComponent,
      selectors: [["app-cursor-position"]],
      decls: 16,
      vars: 7,
      consts: [["width", "100%", "height", "100%", 3, "pointerMove"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [1, "info"], [1, "cursor-coordinates"]],
      template: function CursorPositionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerMove", function CursorPositionComponent_Template_aol_map_pointerMove_0_listener($event) {
            return ctx.dispatchCursor($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cursor coordinates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Longitude: ", ctx.lonToString(ctx.lon), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Latitude: ", ctx.latToString(ctx.lat), "");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["SourceOsmComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .cursor-coordinates[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CursorPositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cursor-position',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\" (pointerMove)=\"dispatchCursor($event)\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n\n      <aol-view [zoom]=\"14\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n    </aol-map>\n\n    <div class=\"info\">\n      <div class=\"cursor-coordinates\">\n        <h3>Cursor coordinates</h3>\n        <span>Longitude: {{ lonToString(lon) }}</span> <span>Latitude: {{ latToString(lat) }}</span>\n      </div>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .info {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .cursor-coordinates {\n        display: flex;\n        flex-direction: column;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();

    function toSexagesimal(value, positiveSuffix, negativeSuffix) {
      var modValue = (value + 180) % 360 - 180;
      return (modValue > 0 ? positiveSuffix : negativeSuffix) + Math.abs(modValue).toFixed(6);
    }
    /***/

  },

  /***/
  "./src/app/display-geojson-source/display-geojson-source.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/display-geojson-source/display-geojson-source.component.ts ***!
    \****************************************************************************/

  /*! exports provided: DisplayGeojsonSourceComponent */

  /***/
  function srcAppDisplayGeojsonSourceDisplayGeojsonSourceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayGeojsonSourceComponent", function () {
      return DisplayGeojsonSourceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var DisplayGeojsonSourceComponent = /*#__PURE__*/function () {
      function DisplayGeojsonSourceComponent() {
        _classCallCheck(this, DisplayGeojsonSourceComponent);
      }

      _createClass(DisplayGeojsonSourceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DisplayGeojsonSourceComponent;
    }();

    DisplayGeojsonSourceComponent.ɵfac = function DisplayGeojsonSourceComponent_Factory(t) {
      return new (t || DisplayGeojsonSourceComponent)();
    };

    DisplayGeojsonSourceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayGeojsonSourceComponent,
      selectors: [["app-display-geojson-source"]],
      decls: 13,
      vars: 6,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "url"]],
      template: function DisplayGeojsonSourceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-layer-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-source-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-source-geojson", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerGroupComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceGeoJSONComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayGeojsonSourceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-geojson-source',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n\n      <aol-view [zoom]=\"4\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-group>\n        <aol-layer-vector>\n          <aol-source-vector>\n            <aol-feature>\n              <aol-source-geojson\n                [url]=\"'https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json'\"\n              >\n              </aol-source-geojson>\n            </aol-feature>\n          </aol-source-vector>\n        </aol-layer-vector>\n      </aol-layer-group>\n    </aol-map>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/display-geometry/display-geometry.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/display-geometry/display-geometry.component.ts ***!
    \****************************************************************/

  /*! exports provided: DisplayGeometryComponent */

  /***/
  function srcAppDisplayGeometryDisplayGeometryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DisplayGeometryComponent", function () {
      return DisplayGeometryComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-style-stroke", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-style-fill", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-geometry-polygon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-collection-coordinates", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(90, 17, 26, 0.5)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r17.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-geometry-point");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-style-circle", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-style-stroke", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-style-fill", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", feature_r17.geometry.coordinates[0])("y", feature_r17.geometry.coordinates[1])("srid", "EPSG:4326");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-geometry-linestring");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-collection-coordinates", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r17.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-geometry-circle", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-style-stroke", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-style-fill", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", feature_r17.geometry.radius);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", feature_r17.geometry.coordinates[0])("y", feature_r17.geometry.coordinates[1]);
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-geometry-multipoint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-collection-coordinates", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-style-circle", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-style-stroke", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-style-fill", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r17.geometry.coordinates)("srid", "EPSG:4326");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-geometry-multilinestring");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-collection-coordinates", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r17.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-style-stroke", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-style-fill", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-geometry-multipolygon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-collection-coordinates", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(81, 15.3, 23.4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "rgba(81, 15.3, 23.4, 0.4)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", feature_r17.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    function DisplayGeometryComponent_aol_layer_vector_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_1_Template, 7, 4, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_2_Template, 8, 7, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_3_Template, 4, 2, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_4_Template, 7, 3, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_5_Template, 8, 6, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_6_Template, 4, 2, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DisplayGeometryComponent_aol_layer_vector_9_aol_source_vector_7_Template, 7, 4, "aol-source-vector", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var feature_r17 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", feature_r17.geometry.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Polygon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Point");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "LineString");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Circle");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MultiPoint");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MultiLineString");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "MultiPolygon");
      }
    }

    var DisplayGeometryComponent = /*#__PURE__*/function () {
      function DisplayGeometryComponent() {
        _classCallCheck(this, DisplayGeometryComponent);

        this.features = [{
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[[-1.131591796875, 47.03269459852135], [0.98876953125, 47.03269459852135], [0.98876953125, 48.356249029540734], [-1.131591796875, 48.356249029540734], [-1.131591796875, 47.03269459852135]]]
          }
        }, {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [2.8125, 49.61782831211117]
          }
        }, {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [[1.856689453125, 49.102645497788814], [5.009765625, 48.95858066440977], [6.1083984375, 47.96785877999251], [6.85546875, 48.71271258145237], [5.064697265625, 49.62494564650146]]
          }
        }, {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Circle',
            coordinates: [3.1060516834259033, 45.78940226200967],
            radius: 50000
          }
        }, {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'MultiPoint',
            coordinates: [[0, 45], [0.5, 45], [1, 45]]
          }
        }, {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'MultiLineString',
            coordinates: [[[0, 44], [1, 44], [2, 44.5]], [[0.5, 43.8], [1.5, 43.8], [2.5, 44.3]], [[1, 43.6], [2, 43.6], [3, 44.1]]]
          }
        }, {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'MultiPolygon',
            coordinates: [[[[4, 45], [4.5, 44.5], [4, 44], [4, 45]]], [[[5, 45], [5.5, 44.5], [5, 44], [5, 45]]], [[[6, 45], [6.5, 44.5], [6, 44], [6, 45]]]]
          }
        }];
      }

      _createClass(DisplayGeometryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DisplayGeometryComponent;
    }();

    DisplayGeometryComponent.ɵfac = function DisplayGeometryComponent_Factory(t) {
      return new (t || DisplayGeometryComponent)();
    };

    DisplayGeometryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DisplayGeometryComponent,
      selectors: [["app-display-geometry"]],
      decls: 10,
      vars: 6,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "ngSwitch", 4, "ngFor", "ngForOf"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["width", "3", 3, "color"], [3, "color"], [3, "coordinates", "srid"], [3, "radius"], [3, "color", "width"], ["srid", "EPSG:4326", 3, "x", "y"], ["color", "blue", "width", "2"], ["color", "rgba(255, 255, 0, 0.5)"], ["width", "2", 3, "color"]],
      template: function DisplayGeometryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DisplayGeometryComponent_aol_layer_vector_9_Template, 8, 8, "aol-layer-vector", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1)("y", 46.292896)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.features);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleStrokeComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleFillComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPolygonComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CollectionCoordinatesComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPointComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleCircleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryLinestringComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryCircleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryMultiPointComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryMultiLinestringComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryMultiPolygonComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DisplayGeometryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-geometry',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n\n      <aol-view [zoom]=\"6\"> <aol-coordinate [x]=\"1\" [y]=\"46.292896\" [srid]=\"'EPSG:4326'\"></aol-coordinate> </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-group>\n        <aol-layer-vector *ngFor=\"let feature of features\" [ngSwitch]=\"feature.geometry.type\">\n          <aol-source-vector *ngSwitchCase=\"'Polygon'\">\n            <aol-style>\n              <aol-style-stroke [color]=\"'rgba(90, 17, 26)'\" width=\"3\"></aol-style-stroke>\n              <aol-style-fill [color]=\"'rgba(90, 17, 26, 0.5)'\"></aol-style-fill>\n            </aol-style>\n            <aol-feature>\n              <aol-geometry-polygon>\n                <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n                </aol-collection-coordinates>\n              </aol-geometry-polygon>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-source-vector *ngSwitchCase=\"'Point'\">\n            <aol-feature>\n              <aol-geometry-point>\n                <aol-coordinate\n                  [x]=\"feature.geometry.coordinates[0]\"\n                  [y]=\"feature.geometry.coordinates[1]\"\n                  [srid]=\"'EPSG:4326'\"\n                >\n                </aol-coordinate>\n                <aol-style>\n                  <aol-style-circle [radius]=\"10\">\n                    <aol-style-stroke [color]=\"'black'\" [width]=\"5\"></aol-style-stroke>\n                    <aol-style-fill [color]=\"'green'\"></aol-style-fill>\n                  </aol-style-circle>\n                </aol-style>\n              </aol-geometry-point>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-source-vector *ngSwitchCase=\"'LineString'\">\n            <aol-feature>\n              <aol-geometry-linestring>\n                <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n                </aol-collection-coordinates>\n              </aol-geometry-linestring>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-source-vector *ngSwitchCase=\"'Circle'\">\n            <aol-feature>\n              <aol-geometry-circle [radius]=\"feature.geometry.radius\">\n                <aol-coordinate\n                  [x]=\"feature.geometry.coordinates[0]\"\n                  [y]=\"feature.geometry.coordinates[1]\"\n                  srid=\"EPSG:4326\"\n                >\n                </aol-coordinate>\n                <aol-style>\n                  <aol-style-stroke color=\"blue\" width=\"2\"></aol-style-stroke>\n                  <aol-style-fill color=\"rgba(255, 255, 0, 0.5)\"></aol-style-fill>\n                </aol-style>\n              </aol-geometry-circle>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-source-vector *ngSwitchCase=\"'MultiPoint'\">\n            <aol-feature>\n              <aol-geometry-multipoint>\n                <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n                </aol-collection-coordinates>\n                <aol-style>\n                  <aol-style-circle [radius]=\"5\">\n                    <aol-style-stroke [color]=\"'black'\" [width]=\"5\"></aol-style-stroke>\n                    <aol-style-fill [color]=\"'green'\"></aol-style-fill>\n                  </aol-style-circle>\n                </aol-style>\n              </aol-geometry-multipoint>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-source-vector *ngSwitchCase=\"'MultiLineString'\">\n            <aol-feature>\n              <aol-geometry-multilinestring>\n                <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n                </aol-collection-coordinates>\n              </aol-geometry-multilinestring>\n            </aol-feature>\n          </aol-source-vector>\n\n          <aol-source-vector *ngSwitchCase=\"'MultiPolygon'\">\n            <aol-style>\n              <aol-style-stroke [color]=\"'rgba(81, 15.3, 23.4)'\" width=\"2\"></aol-style-stroke>\n              <aol-style-fill [color]=\"'rgba(81, 15.3, 23.4, 0.4)'\"></aol-style-fill>\n            </aol-style>\n            <aol-feature>\n              <aol-geometry-multipolygon>\n                <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n                </aol-collection-coordinates>\n              </aol-geometry-multipolygon>\n            </aol-feature>\n          </aol-source-vector>\n        </aol-layer-vector>\n      </aol-layer-group>\n    </aol-map>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/draw-polygon/draw-polygon.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/draw-polygon/draw-polygon.component.ts ***!
    \********************************************************/

  /*! exports provided: DrawPolygonComponent */

  /***/
  function srcAppDrawPolygonDrawPolygonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawPolygonComponent", function () {
      return DrawPolygonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/interaction/Draw */
    "./node_modules/ol/interaction/Draw.js");
    /* harmony import */


    var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ol/proj/Projection */
    "./node_modules/ol/proj/Projection.js");
    /* harmony import */


    var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ol/geom/Polygon */
    "./node_modules/ol/geom/Polygon.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DrawPolygonComponent_aol_interaction_draw_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-interaction-draw", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("drawEnd", function DrawPolygonComponent_aol_interaction_draw_3_Template_aol_interaction_draw_drawEnd_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37);

          var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r36.endDraw($event.feature);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("geometryFunction", ctx_r34.drawBoxGeometryFunction);
      }
    }

    function DrawPolygonComponent_aol_layer_vector_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-geometry-polygon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-collection-coordinates", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", ctx_r35.feature.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    var DrawPolygonComponent = /*#__PURE__*/function () {
      function DrawPolygonComponent() {
        _classCallCheck(this, DrawPolygonComponent);

        this.isDrawing = false;
        this.drawBoxGeometryFunction = Object(ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_1__["createBox"])();
      }

      _createClass(DrawPolygonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "drawMode",
        value: function drawMode() {
          this.isDrawing = !this.isDrawing;
        }
      }, {
        key: "endDraw",
        value: function endDraw(feature) {
          var olGeomPolygon = Object(ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_3__["fromExtent"])(feature.getGeometry().getExtent());
          olGeomPolygon.transform(new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"]({
            code: 'EPSG:3857'
          }), new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"]({
            code: 'EPSG:4326'
          }));
          this.feature = {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'Polygon',
              coordinates: [olGeomPolygon.getCoordinates()[0]]
            }
          };
        }
      }]);

      return DrawPolygonComponent;
    }();

    DrawPolygonComponent.ɵfac = function DrawPolygonComponent_Factory(t) {
      return new (t || DrawPolygonComponent)();
    };

    DrawPolygonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DrawPolygonComponent,
      selectors: [["app-draw-polygon"]],
      decls: 19,
      vars: 11,
      consts: [["width", "100%", "height", "100%"], ["map", ""], ["type", "Circle", 3, "geometryFunction", "drawEnd", 4, "ngIf"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], [1, "info"], [1, "draw-section"], [3, "click"], ["type", "Circle", 3, "geometryFunction", "drawEnd"], [3, "coordinates", "srid"]],
      template: function DrawPolygonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DrawPolygonComponent_aol_interaction_draw_3_Template, 1, 1, "aol-interaction-draw", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DrawPolygonComponent_aol_layer_vector_8_Template, 5, 2, "aol-layer-vector", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DrawPolygonComponent_Template_button_click_11_listener() {
            return ctx.drawMode();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isDrawing);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feature);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.isDrawing ? "End draw" : "Start draw");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.feature));
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["DefaultInteractionComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["DrawInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["GeometryPolygonComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["CollectionCoordinatesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["JsonPipe"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DrawPolygonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-draw-polygon',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-interaction-draw\n        *ngIf=\"isDrawing\"\n        type=\"Circle\"\n        [geometryFunction]=\"drawBoxGeometryFunction\"\n        (drawEnd)=\"endDraw($event.feature)\"\n      >\n      </aol-interaction-draw>\n\n      <aol-view [zoom]=\"5\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-vector *ngIf=\"feature\">\n        <aol-source-vector>\n          <aol-feature>\n            <aol-geometry-polygon>\n              <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n              </aol-collection-coordinates>\n            </aol-geometry-polygon>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n\n    <div class=\"info\">\n      <div class=\"draw-section\">\n        <button (click)=\"drawMode()\">{{ isDrawing ? 'End draw' : 'Start draw' }}</button>\n        <h3>Result</h3>\n        <code>\n          <pre>{{ feature | json }}</pre>\n        </code>\n      </div>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .info {\n        width: 28%;\n        padding: 1rem;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/example-list.ts":
  /*!*********************************!*\
    !*** ./src/app/example-list.ts ***!
    \*********************************/

  /*! exports provided: examplesList */

  /***/
  function srcAppExampleListTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "examplesList", function () {
      return examplesList;
    });

    var examplesList = [{
      title: 'Basic',
      description: 'Basic example. Demonstrates zoom and opacity.',
      routerLink: 'basic'
    }, {
      title: 'Map position',
      description: 'Map longitude, latitude and zoom.',
      routerLink: 'map-position'
    }, {
      title: 'Cursor position',
      description: 'Example of a mouse position control, outside the map.',
      routerLink: 'cursor-position',
      openLayersLink: 'https://openlayers.org/en/latest/examples/mouse-position.html'
    }, {
      title: 'Display geometry',
      description: 'Example of geojson features : point, polygon, linestring, circle, multi-point, multi-linestring, multi-polygon.',
      routerLink: 'display-geometry',
      openLayersLink: 'https://openlayers.org/en/latest/examples/geojson.html'
    }, {
      title: 'Display geometry from a geojson file',
      description: 'Example of using aol-source-geojson',
      routerLink: 'display-geojson-source',
      openLayersLink: 'https://openlayers.org/en/latest/examples/vector-layer.html'
    }, {
      title: 'Draw polygon',
      description: 'Example of using aol-interaction-draw',
      routerLink: 'draw-polygon',
      openLayersLink: 'https://openlayers.org/en/latest/examples/draw-features.html'
    }, {
      title: 'Modify polygon',
      description: 'Example of using aol-interaction-modify',
      routerLink: 'modify-polygon',
      openLayersLink: 'https://openlayers.org/en/latest/examples/modify-features.html'
    }, {
      title: 'Side by side',
      description: 'Compare 2 maps side by side',
      routerLink: 'side-by-side'
    }, {
      title: 'Swipe',
      description: 'Compare 2 layers tile with swipe',
      routerLink: 'swipe',
      openLayersLink: 'https://openlayers.org/en/latest/examples/layer-swipe.html'
    }, {
      title: 'Overlay',
      description: 'Example of using aol-overlay',
      routerLink: 'overlay',
      openLayersLink: 'https://openlayers.org/en/latest/examples/overlay.html'
    }, {
      title: 'Change color when feature is selected or hovered',
      description: 'Change aol-style on hover or on select',
      routerLink: 'color-select-hover',
      openLayersLink: 'https://openlayers.org/en/latest/examples/vector-layer.html'
    }, {
      title: 'Marker',
      description: 'Display marker with svg on specific point',
      routerLink: 'marker',
      openLayersLink: 'https://openlayers.org/en/latest/examples/icon-color.html'
    }, {
      title: 'Cluster',
      description: 'Example of using aol-source-cluster. This example shows how to do clustering on point features.',
      routerLink: 'cluster',
      openLayersLink: 'https://openlayers.org/en/latest/examples/cluster.html'
    }, {
      title: 'Raster',
      description: 'Example of using raster to perform pixel-based operations. Adjust brightness and contrast in this case.',
      routerLink: 'raster'
    }, {
      title: 'Image ArcGIS',
      description: 'Example of using aol-source-imagearcgisrest. This example display exported image of MapServer ArcGis endpoint.',
      routerLink: 'arcgis-image',
      openLayersLink: 'https://openlayers.org/en/latest/examples/arcgis-image.html'
    }, {
      title: 'Image Load Events',
      description: 'Example of using aol-source-imagewms. This example listens to image loading events.',
      routerLink: 'image-wms',
      openLayersLink: 'https://openlayers.org/en/latest/examples/image-load-events.html'
    }, {
      title: 'View projection update',
      description: 'Dynamically update view projection.',
      routerLink: 'view-projection-update'
    }, {
      title: 'Overview',
      description: 'Overview of map',
      routerLink: 'overview',
      openLayersLink: 'https://openlayers.org/en/latest/examples/overviewmap.html'
    }, {
      title: 'UTF Grid',
      description: 'Example of using aol-source-utfgrid. This example display country flag in an overlay on hover',
      routerLink: 'utf-grid',
      openLayersLink: 'https://openlayers.org/en/latest/examples/utfgrid.html'
    }, {
      title: 'Image static',
      description: 'Example of using aol-source-imagestatic.',
      routerLink: 'image-static',
      openLayersLink: 'https://openlayers.org/en/latest/examples/static-image.html'
    }, {
      title: 'Select intercation static',
      description: 'Example of using select intercation',
      routerLink: 'select-interaction',
      openLayersLink: 'https://openlayers.org/en/latest/examples/select-features.html'
    }, {
      title: 'Tile Json',
      description: 'Example of using aol-source-tilejson. This example display mapbox json',
      routerLink: 'tile-json',
      openLayersLink: 'https://openlayers.org/en/latest/examples/tilejson.html'
    }, {
      title: 'Graticule',
      description: 'Example of using aol-graticule. This example shows how to add a graticule overlay to a map',
      routerLink: 'graticule',
      openLayersLink: 'https://openlayers.org/en/latest/examples/graticule.html'
    }];
    /***/
  },

  /***/
  "./src/app/examples-item/examples-item.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/examples-item/examples-item.component.ts ***!
    \**********************************************************/

  /*! exports provided: ExamplesItemComponent */

  /***/
  function srcAppExamplesItemExamplesItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesItemComponent", function () {
      return ExamplesItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _example_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../example-list */
    "./src/app/example-list.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExamplesItemComponent_div_0_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r11.exampleInfo.openLayersLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r11.exampleInfo.openLayersLink, " ");
      }
    }

    function ExamplesItemComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExamplesItemComponent_div_0_div_5_Template, 3, 2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.exampleInfo.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.exampleInfo.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.exampleInfo.openLayersLink);
      }
    }

    var ExamplesItemComponent = /*#__PURE__*/function () {
      function ExamplesItemComponent(router) {
        _classCallCheck(this, ExamplesItemComponent);

        this.router = router;
      }

      _createClass(ExamplesItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this37 = this;

          this.exampleInfo = _example_list__WEBPACK_IMPORTED_MODULE_1__["examplesList"].find(function (item) {
            return _this37.router.url.includes(item.routerLink);
          });
        }
      }]);

      return ExamplesItemComponent;
    }();

    ExamplesItemComponent.ɵfac = function ExamplesItemComponent_Factory(t) {
      return new (t || ExamplesItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ExamplesItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExamplesItemComponent,
      selectors: [["app-examples-item"]],
      decls: 3,
      vars: 1,
      consts: [["class", "example-info", 4, "ngIf"], [1, "example"], [1, "example-info"], [1, "title"], [1, "description"], ["class", "open-layers-link", 4, "ngIf"], [1, "open-layers-link"], ["target", "_blank", 3, "href"]],
      template: function ExamplesItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExamplesItemComponent_div_0_Template, 6, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.exampleInfo);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .example-info[_ngcontent-%COMP%] {\n        flex: 0 1 auto;\n        padding: 2rem 1rem;\n        display: flex;\n        flex-direction: column;\n        font-family: Roboto, Arial, sans-serif;\n      }\n\n      .example-info[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n        font-family: Roboto, sans-serif;\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 25px;\n        font-weight: 700;\n        padding-bottom: 0.5rem;\n      }\n      .example-info[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n      .example-info[_ngcontent-%COMP%]   .open-layers-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n\n      .example[_ngcontent-%COMP%] {\n        flex: 1 1 auto;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-examples-item',
          template: "\n    <div class=\"example-info\" *ngIf=\"exampleInfo\">\n      <span class=\"title\">{{ exampleInfo.title }}</span> <span class=\"description\">{{ exampleInfo.description }}</span>\n      <div *ngIf=\"exampleInfo.openLayersLink\" class=\"open-layers-link\">\n        <a [href]=\"exampleInfo.openLayersLink\" target=\"_blank\"> {{ exampleInfo.openLayersLink }} </a>\n      </div>\n    </div>\n    <div class=\"example\">\n      <router-outlet></router-outlet>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n        flex-direction: column;\n      }\n\n      .example-info {\n        flex: 0 1 auto;\n        padding: 2rem 1rem;\n        display: flex;\n        flex-direction: column;\n        font-family: Roboto, Arial, sans-serif;\n      }\n\n      .example-info .title {\n        font-family: Roboto, sans-serif;\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 25px;\n        font-weight: 700;\n        padding-bottom: 0.5rem;\n      }\n      .example-info .description {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n      .example-info .open-layers-link a {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n\n      .example {\n        flex: 1 1 auto;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/examples-list/examples-list.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/examples-list/examples-list.component.ts ***!
    \**********************************************************/

  /*! exports provided: ExamplesListComponent */

  /***/
  function srcAppExamplesListExamplesListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamplesListComponent", function () {
      return ExamplesListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _example_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../example-list */
    "./src/app/example-list.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ExamplesListComponent_div_4_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExamplesListComponent_div_4_div_5_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          return $event.stopPropagation();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var example_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", example_r5.openLayersLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](example_r5.openLayersLink);
      }
    }

    function ExamplesListComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExamplesListComponent_div_4_div_5_Template, 3, 2, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var example_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "examples/" + example_r5.routerLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](example_r5.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](example_r5.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", example_r5.openLayersLink);
      }
    }

    var ExamplesListComponent = /*#__PURE__*/function () {
      function ExamplesListComponent(fb) {
        _classCallCheck(this, ExamplesListComponent);

        this.fb = fb;
        this.list = _example_list__WEBPACK_IMPORTED_MODULE_1__["examplesList"];
      }

      _createClass(ExamplesListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this38 = this;

          this.form = this.fb.group({
            term: ''
          });
          this.form.get('term').valueChanges.subscribe(function () {
            var termValue = _this38.form.get('term').value.toLowerCase();

            if (!termValue.trim()) {
              _this38.list = _example_list__WEBPACK_IMPORTED_MODULE_1__["examplesList"];
            } else {
              _this38.list = _this38.list.filter(function (item) {
                return item.title && item.title.toLowerCase().includes(termValue) || item.description && item.description.toLowerCase().includes(termValue);
              });
            }
          });
        }
      }]);

      return ExamplesListComponent;
    }();

    ExamplesListComponent.ɵfac = function ExamplesListComponent_Factory(t) {
      return new (t || ExamplesListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]));
    };

    ExamplesListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExamplesListComponent,
      selectors: [["app-examples-list"]],
      decls: 5,
      vars: 2,
      consts: [[1, "search"], [3, "formGroup"], ["type", "text", "formControlName", "term", "placeholder", "Search"], [1, "wrapper"], ["class", "example-item", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "example-item", 3, "routerLink"], [1, "title"], [1, "description"], ["class", "open-layers-link", 3, "click", 4, "ngIf"], [1, "open-layers-link", 3, "click"], ["target", "_blank", 3, "href"]],
      template: function ExamplesListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExamplesListComponent_div_4_Template, 6, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      styles: [".search[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: center;\n        padding: 1rem;\n      }\n      .example-item[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n        background-color: #f5f5f5;\n        height: 140px;\n        margin: 10px 0;\n        overflow: auto;\n        line-height: 1.42857143;\n        color: black;\n        font-family: Roboto, Arial, sans-serif;\n        font-weight: 400;\n        cursor: pointer;\n      }\n\n      .example-item[_ngcontent-%COMP%]:hover {\n        background-color: #ddd;\n      }\n\n      .wrapper[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 10px;\n        grid-auto-rows: minmax(100px, auto);\n      }\n\n      .title[_ngcontent-%COMP%] {\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 18px;\n        font-weight: 500;\n        padding-bottom: 0.5rem;\n      }\n\n      .description[_ngcontent-%COMP%] {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n\n      .open-layers-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-examples-list',
          template: "\n    <div class=\"search\">\n      <form [formGroup]=\"form\"><input type=\"text\" formControlName=\"term\" placeholder=\"Search\" /></form>\n    </div>\n    <div class=\"wrapper\">\n      <div class=\"example-item\" *ngFor=\"let example of list\" [routerLink]=\"'examples/' + example.routerLink\">\n        <span class=\"title\">{{ example.title }}</span> <span class=\"description\">{{ example.description }}</span>\n        <div *ngIf=\"example.openLayersLink\" class=\"open-layers-link\" (click)=\"$event.stopPropagation()\">\n          <a [href]=\"example.openLayersLink\" target=\"_blank\">{{ example.openLayersLink }}</a>\n        </div>\n      </div>\n    </div>\n  ",
          styles: ["\n      .search {\n        display: flex;\n        justify-content: center;\n        padding: 1rem;\n      }\n      .example-item {\n        display: flex;\n        flex-direction: column;\n        padding: 10px;\n        background-color: #f5f5f5;\n        height: 140px;\n        margin: 10px 0;\n        overflow: auto;\n        line-height: 1.42857143;\n        color: black;\n        font-family: Roboto, Arial, sans-serif;\n        font-weight: 400;\n        cursor: pointer;\n      }\n\n      .example-item:hover {\n        background-color: #ddd;\n      }\n\n      .wrapper {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 10px;\n        grid-auto-rows: minmax(100px, auto);\n      }\n\n      .title {\n        margin-top: 0px;\n        color: rgba(0, 0, 0, 0.87);\n        font-size: 18px;\n        font-weight: 500;\n        padding-bottom: 0.5rem;\n      }\n\n      .description {\n        color: rgba(0, 0, 0, 0.6);\n        line-height: 24px;\n        padding-bottom: 0.5rem;\n      }\n\n      .open-layers-link a {\n        margin-bottom: 0px;\n        color: rgba(0, 0, 0, 0.6);\n        font-size: 12px;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/graticule/graticule.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/graticule/graticule.component.ts ***!
    \**************************************************/

  /*! exports provided: GraticuleComponent */

  /***/
  function srcAppGraticuleGraticuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GraticuleComponent", function () {
      return GraticuleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/style */
    "./node_modules/ol/style.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function GraticuleComponent_aol_graticule_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aol-graticule", 7);
      }

      if (rf & 2) {
        var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("strokeStyle", ctx_r69.graticuleStyle)("showLabels", true);
      }
    }

    var GraticuleComponent = function GraticuleComponent() {
      _classCallCheck(this, GraticuleComponent);

      this.zoom = 4;
      this.opacity = 1.0;
      this.shownGraticule = true;
      this.graticuleStyle = new ol_style__WEBPACK_IMPORTED_MODULE_1__["Stroke"]({
        color: 'rgba(255,120,0,0.9)',
        width: 2,
        lineDash: [0.5, 4]
      });
    };

    GraticuleComponent.ɵfac = function GraticuleComponent_Factory(t) {
      return new (t || GraticuleComponent)();
    };

    GraticuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: GraticuleComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 5,
      consts: [["width", "100%", "height", "100%"], [3, "zoom"], [3, "x", "y"], [3, "strokeStyle", "showLabels", 4, "ngIf"], [1, "controls"], ["type", "checkbox", "id", "graticule", "name", "graticule", 3, "ngModel", "ngModelChange"], ["for", "graticule"], [3, "strokeStyle", "showLabels"]],
      template: function GraticuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, GraticuleComponent_aol_graticule_8_Template, 1, 2, "aol-graticule", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GraticuleComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.shownGraticule = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Toggle graticule");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0 - 10997148)("y", 4569099);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.shownGraticule);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.shownGraticule);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["ControlFullScreenComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["SourceOsmComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_2__["GraticuleComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 80%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 18%;\n        padding: 1rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GraticuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-control-fullscreen></aol-control-fullscreen>\n      <aol-view [zoom]=\"zoom\"> <aol-coordinate [x]=\"-10997148\" [y]=\"4569099\"></aol-coordinate> </aol-view>\n\n      <aol-layer-tile>\n        <aol-source-osm></aol-source-osm>\n      </aol-layer-tile>\n\n      <aol-graticule *ngIf=\"shownGraticule\" [strokeStyle]=\"graticuleStyle\" [showLabels]=\"true\"></aol-graticule>\n    </aol-map>\n\n    <div class=\"controls\">\n      <input type=\"checkbox\" id=\"graticule\" name=\"graticule\" [(ngModel)]=\"shownGraticule\" />\n      <label for=\"graticule\">Toggle graticule</label>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 80%;\n      }\n\n      .controls {\n        width: 18%;\n        padding: 1rem;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/image-static/image-static.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/image-static/image-static.component.ts ***!
    \********************************************************/

  /*! exports provided: ImageStaticComponent */

  /***/
  function srcAppImageStaticImageStaticComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageStaticComponent", function () {
      return ImageStaticComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_extent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/extent */
    "./node_modules/ol/extent.js");
    /* harmony import */


    var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ol/proj/Projection */
    "./node_modules/ol/proj/Projection.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return [512, 484];
    };

    var ImageStaticComponent = /*#__PURE__*/function () {
      function ImageStaticComponent() {
        _classCallCheck(this, ImageStaticComponent);

        this.url = 'https://imgs.xkcd.com/comics/online_communities.png';
        this.zoom = 5;
        this.opacity = 1.0;
        this.extent = [0, 0, 1024, 968];
        this.po = {
          code: 'xkcd-image',
          units: 'pixels',
          extent: [0, 0, 1024, 968]
        };
        this.projection = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"](this.po);

        this.getCenter = function (ext) {
          return Object(ol_extent__WEBPACK_IMPORTED_MODULE_1__["getCenter"])(ext);
        };
      }

      _createClass(ImageStaticComponent, [{
        key: "onUrlChange",
        value: function onUrlChange(evt) {
          this.url = evt.target.value;
        }
      }]);

      return ImageStaticComponent;
    }();

    ImageStaticComponent.ɵfac = function ImageStaticComponent_Factory(t) {
      return new (t || ImageStaticComponent)();
    };

    ImageStaticComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageStaticComponent,
      selectors: [["app-root"]],
      decls: 11,
      vars: 11,
      consts: [[3, "width", "height"], [3, "projection", "zoom", "center"], [3, "opacity", "extent"], [3, "url", "projection", "imageExtent"], [1, "controls"], [3, "change"], ["value", "https://imgs.xkcd.com/comics/online_communities.png"], ["value", "https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg"]],
      template: function ImageStaticComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-layer-image", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-source-imagestatic", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Current image url: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ImageStaticComponent_Template_select_change_6_listener($event) {
            return ctx.onUrlChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "https://imgs.xkcd.com/comics/online_communities.png");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("projection", ctx.projection)("zoom", 2)("center", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", ctx.opacity)("extent", ctx.extent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.url)("projection", ctx.projection)("imageExtent", ctx.extent);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["LayerImageComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["SourceImageStaticComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageStaticComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map [width]=\"'100%'\" [height]=\"'100%'\">\n      <aol-view [projection]=\"projection\" [zoom]=\"2\" [center]=\"[512, 484]\"> </aol-view>\n      <aol-layer-image [opacity]=\"opacity\" [extent]=\"extent\">\n        <aol-source-imagestatic [url]=\"url\" [projection]=\"projection\" [imageExtent]=\"extent\"> </aol-source-imagestatic>\n      </aol-layer-image>\n    </aol-map>\n    <div class=\"controls\">\n      Current image url:\n      <select (change)=\"onUrlChange($event)\">\n        <option value=\"https://imgs.xkcd.com/comics/online_communities.png\"\n          >https://imgs.xkcd.com/comics/online_communities.png</option\n        >\n        <option value=\"https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg\"\n          >https://pbs.twimg.com/media/D7IgamEUEAA5DHE.jpg</option\n        >\n      </select>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .controls {\n        width: 28%;\n        padding: 1rem;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/image-wms/image-wms.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/image-wms/image-wms.component.ts ***!
    \**************************************************/

  /*! exports provided: ImageWMSComponent */

  /***/
  function srcAppImageWmsImageWmsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageWMSComponent", function () {
      return ImageWMSComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var ImageWMSComponent = /*#__PURE__*/function () {
      function ImageWMSComponent() {
        _classCallCheck(this, ImageWMSComponent);

        this.params = {
          LAYERS: 'topp:states'
        };
      }

      _createClass(ImageWMSComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "imageLoadStart",
        value: function imageLoadStart() {
          console.log('image starts loading at: ' + new Date());
        }
      }, {
        key: "imageLoadEnd",
        value: function imageLoadEnd() {
          console.log('image ends loading at: ' + new Date());
        }
      }]);

      return ImageWMSComponent;
    }();

    ImageWMSComponent.ɵfac = function ImageWMSComponent_Factory(t) {
      return new (t || ImageWMSComponent)();
    };

    ImageWMSComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImageWMSComponent,
      selectors: [["app-root"]],
      decls: 7,
      vars: 5,
      consts: [["width", "100%", "height", "100%"], ["map", ""], ["zoom", "4"], [3, "x", "y"], [3, "url", "params", "serverType", "imageLoadStart", "imageLoadEnd"]],
      template: function ImageWMSComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-layer-image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-source-imagewms", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageLoadStart", function ImageWMSComponent_Template_aol_source_imagewms_imageLoadStart_6_listener() {
            return ctx.imageLoadStart();
          })("imageLoadEnd", function ImageWMSComponent_Template_aol_source_imagewms_imageLoadEnd_6_listener() {
            return ctx.imageLoadEnd();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0 - 10997148)("y", 4569099);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", "https://ahocevar.com/geoserver/wms")("params", ctx.params)("serverType", "geoserver");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerImageComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceImageWMSComponent"]],
      styles: ["map[_ngcontent-%COMP%] {\n        background: #e0eced;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageWMSComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-view zoom=\"4\"> <aol-coordinate [x]=\"-10997148\" [y]=\"4569099\"></aol-coordinate> </aol-view>\n      <aol-layer-image>\n        <aol-source-imagewms\n          [url]=\"'https://ahocevar.com/geoserver/wms'\"\n          [params]=\"params\"\n          [serverType]=\"'geoserver'\"\n          (imageLoadStart)=\"imageLoadStart()\"\n          (imageLoadEnd)=\"imageLoadEnd()\"\n        ></aol-source-imagewms>\n      </aol-layer-image>\n    </aol-map>\n  ",
          styles: ["\n      map {\n        background: #e0eced;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/map-position/map-position.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/map-position/map-position.component.ts ***!
    \********************************************************/

  /*! exports provided: MapPositionComponent */

  /***/
  function srcAppMapPositionMapPositionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPositionComponent", function () {
      return MapPositionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_proj__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/proj */
    "./node_modules/ol/proj.js");
    /* harmony import */


    var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ol/proj/Projection */
    "./node_modules/ol/proj/Projection.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var _c0 = ["map"];
    var _c1 = ["view"];

    var MapPositionComponent = /*#__PURE__*/function () {
      function MapPositionComponent(fb) {
        _classCallCheck(this, MapPositionComponent);

        this.fb = fb;
        this.displayProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"]({
          code: 'EPSG:3857'
        });
        this.inputProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_2__["default"]({
          code: 'EPSG:4326'
        });
        this.moving = false;
        this.currentZoom = 0;
        this.currentLon = 0;
        this.currentLat = 0;
      }

      _createClass(MapPositionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.fb.group({
            x: 1.4886,
            y: 43.5554,
            zoom: 4
          });
        }
      }, {
        key: "displayCoordinates",
        value: function displayCoordinates() {
          this.moving = false;
          this.currentZoom = this.view.instance.getZoom();

          var _Object = Object(ol_proj__WEBPACK_IMPORTED_MODULE_1__["transform"])(this.view.instance.getCenter(), this.displayProj, this.inputProj);

          var _Object2 = _slicedToArray(_Object, 2);

          this.currentLon = _Object2[0];
          this.currentLat = _Object2[1];
        }
      }, {
        key: "startMoving",
        value: function startMoving() {
          this.moving = true;
        }
      }]);

      return MapPositionComponent;
    }();

    MapPositionComponent.ɵfac = function MapPositionComponent_Factory(t) {
      return new (t || MapPositionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]));
    };

    MapPositionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapPositionComponent,
      selectors: [["app-map-position"]],
      viewQuery: function MapPositionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
        }
      },
      decls: 35,
      vars: 8,
      consts: [["width", "100%", "height", "100%", 3, "moveStart", "moveEnd"], ["map", ""], [3, "zoom"], ["view", ""], ["srid", "EPSG:4326", 3, "x", "y"], [3, "opacity"], [1, "info"], [1, "current-coordinates"], [1, "update-coordinates"], [3, "formGroup"], [1, "row"], ["min", "0", "type", "number", "formControlName", "x"], ["min", "0", "type", "number", "formControlName", "y"], ["min", "0", "type", "number", "formControlName", "zoom"]],
      template: function MapPositionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("moveStart", function MapPositionComponent_Template_aol_map_moveStart_0_listener() {
            return ctx.startMoving();
          })("moveEnd", function MapPositionComponent_Template_aol_map_moveEnd_0_listener() {
            return ctx.displayCoordinates();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-layer-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Map coordinates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Update coordinates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Longitude:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Latitude:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Zoom:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.form.get("zoom").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx.form.get("x").value)("y", ctx.form.get("y").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Longitude: ", ctx.moving ? "----" : ctx.currentLon, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Latitude: ", ctx.moving ? "----" : ctx.currentLat, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Zoom: ", ctx.moving ? "----" : ctx.currentZoom, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_4__["SourceOsmComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .current-coordinates[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .update-coordinates[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .row[_ngcontent-%COMP%] {\n        padding: 1rem;\n      }\n\n      .row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n        min-width: 5rem;\n        display: inline-block;\n        float: left;\n      }\n\n      .row[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n        width: calc(50% - 5rem);\n        display: inline-block;\n        float: left;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapPositionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-map-position',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\" (moveStart)=\"startMoving()\" (moveEnd)=\"displayCoordinates()\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n\n      <aol-view #view [zoom]=\"form.get('zoom').value\">\n        <aol-coordinate [x]=\"form.get('x').value\" [y]=\"form.get('y').value\" srid=\"EPSG:4326\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n    </aol-map>\n\n    <div class=\"info\">\n      <div class=\"current-coordinates\">\n        <h3>Map coordinates</h3>\n        <span>Longitude: {{ moving ? '----' : currentLon }}</span>\n        <span>Latitude: {{ moving ? '----' : currentLat }}</span>\n        <span>Zoom: {{ moving ? '----' : currentZoom }}</span>\n      </div>\n      <div class=\"update-coordinates\">\n        <h3>Update coordinates</h3>\n        <form [formGroup]=\"form\">\n          <div class=\"row\"><label>Longitude:</label><input min=\"0\" type=\"number\" formControlName=\"x\" /></div>\n          <div class=\"row\"><label>Latitude:</label><input min=\"0\" type=\"number\" formControlName=\"y\" /></div>\n          <div class=\"row\"><label>Zoom:</label><input min=\"0\" type=\"number\" formControlName=\"zoom\" /></div>\n        </form>\n      </div>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .info {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .current-coordinates {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .update-coordinates form {\n        display: flex;\n        flex-direction: column;\n      }\n\n      .row {\n        padding: 1rem;\n      }\n\n      .row label {\n        min-width: 5rem;\n        display: inline-block;\n        float: left;\n      }\n\n      .row input {\n        width: calc(50% - 5rem);\n        display: inline-block;\n        float: left;\n      }\n    "]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
        }];
      }, {
        map: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['view', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/marker/marker.component.ts":
  /*!********************************************!*\
    !*** ./src/app/marker/marker.component.ts ***!
    \********************************************/

  /*! exports provided: MarkerComponent */

  /***/
  function srcAppMarkerMarkerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarkerComponent", function () {
      return MarkerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0() {
      return [0.5, 1];
    };

    function MarkerComponent_aol_layer_vector_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-source-vector", null, 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-geometry-point");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-style");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-style-icon", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx_r57.marker.lon)("y", ctx_r57.marker.lat)("srid", "EPSG:4326");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/marker.svg")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 2)("anchorOrigin", "top-left");
      }
    } //


    var MarkerComponent = /*#__PURE__*/function () {
      function MarkerComponent() {
        _classCallCheck(this, MarkerComponent);

        this.feature = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[[-2.3565673828124996, 46.92588289494367], [-2.1148681640624996, 46.92588289494367], [-2.1148681640624996, 47.04954010021555], [-2.3565673828124996, 47.04954010021555], [-2.3565673828124996, 46.92588289494367]]]
          }
        };
        this.marker = {
          lon: -2.264184,
          lat: 46.996207
        };
      }

      _createClass(MarkerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MarkerComponent;
    }();

    MarkerComponent.ɵfac = function MarkerComponent_Factory(t) {
      return new (t || MarkerComponent)();
    };

    MarkerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MarkerComponent,
      selectors: [["app-display-marker"]],
      decls: 9,
      vars: 6,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], ["markers", ""], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"]],
      template: function MarkerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MarkerComponent_aol_layer_vector_8_Template, 8, 10, "aol-layer-vector", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0 - 2.269282)("y", 46.987247)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marker);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPointComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleIconComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarkerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-marker',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n\n      <aol-view [zoom]=\"12\">\n        <aol-coordinate [x]=\"-2.269282\" [y]=\"46.987247\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-vector *ngIf=\"marker\">\n        <aol-source-vector #markers>\n          <aol-feature>\n            <aol-geometry-point>\n              <aol-coordinate [x]=\"marker.lon\" [y]=\"marker.lat\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-geometry-point>\n            <aol-style>\n              <aol-style-icon\n                [src]=\"'assets/marker.svg'\"\n                [anchor]=\"[0.5, 1]\"\n                [anchorXUnits]=\"'fraction'\"\n                [anchorYUnits]=\"'fraction'\"\n                [scale]=\"2\"\n                [anchorOrigin]=\"'top-left'\"\n              >\n              </aol-style-icon>\n            </aol-style>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modify-polygon/modify-polygon.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modify-polygon/modify-polygon.component.ts ***!
    \************************************************************/

  /*! exports provided: ModifyPolygonComponent */

  /***/
  function srcAppModifyPolygonModifyPolygonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModifyPolygonComponent", function () {
      return ModifyPolygonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_proj_Projection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/proj/Projection */
    "./node_modules/ol/proj/Projection.js");
    /* harmony import */


    var ol_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ol/format */
    "./node_modules/ol/format.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ModifyPolygonComponent_aol_layer_vector_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-layer-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "aol-source-vector");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-feature");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-geometry-polygon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-collection-coordinates", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", ctx_r41.feature.geometry.coordinates)("srid", "EPSG:4326");
      }
    }

    var ModifyPolygonComponent = /*#__PURE__*/function () {
      function ModifyPolygonComponent() {
        _classCallCheck(this, ModifyPolygonComponent);

        this.format = new ol_format__WEBPACK_IMPORTED_MODULE_2__["GeoJSON"]();
        this.displayProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_1__["default"]({
          code: 'EPSG:3857'
        });
        this.inputProj = new ol_proj_Projection__WEBPACK_IMPORTED_MODULE_1__["default"]({
          code: 'EPSG:4326'
        });
        this.feature = {
          geometry: {
            coordinates: [[[-1.7138671875, 43.35713822211053], [4.515380859375, 43.35713822211053], [4.515380859375, 47.76886840424207], [-1.7138671875, 47.76886840424207], [-1.7138671875, 43.35713822211053]]],
            type: 'Polygon'
          },
          properties: {},
          type: 'Feature'
        };
      }

      _createClass(ModifyPolygonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "modifyEnd",
        value: function modifyEnd(feature) {
          this.feature = this.format.writeFeatureObject(feature, {
            dataProjection: this.inputProj,
            featureProjection: this.displayProj
          });
        }
      }]);

      return ModifyPolygonComponent;
    }();

    ModifyPolygonComponent.ɵfac = function ModifyPolygonComponent_Factory(t) {
      return new (t || ModifyPolygonComponent)();
    };

    ModifyPolygonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModifyPolygonComponent,
      selectors: [["app-modify-polygon"]],
      decls: 19,
      vars: 11,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "wrapX"], ["select", ""], [3, "features", "modifyEnd"], ["modify", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [4, "ngIf"], [1, "info"], [3, "coordinates", "srid"]],
      template: function ModifyPolygonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-interaction-select", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "aol-interaction-modify", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modifyEnd", function ModifyPolygonComponent_Template_aol_interaction_modify_modifyEnd_5_listener($event) {
            return ctx.modifyEnd($event.features.getArray()[0]);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-view", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "aol-coordinate", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-layer-tile", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModifyPolygonComponent_aol_layer_vector_11_Template, 5, 2, "aol-layer-vector", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Result");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "pre");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "json");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrapX", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("features", _r39.instance.getFeatures());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.feature);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 9, ctx.feature));
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["SelectInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["ModifyInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["SourceOsmComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["GeometryPolygonComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["CollectionCoordinatesComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["JsonPipe"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .info[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModifyPolygonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modify-polygon',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-interaction-select [wrapX]=\"true\" #select></aol-interaction-select>\n      <aol-interaction-modify\n        #modify\n        [features]=\"select.instance.getFeatures()\"\n        (modifyEnd)=\"modifyEnd($event.features.getArray()[0])\"\n      >\n      </aol-interaction-modify>\n\n      <aol-view [zoom]=\"5\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-vector *ngIf=\"feature\">\n        <aol-source-vector>\n          <aol-feature>\n            <aol-geometry-polygon>\n              <aol-collection-coordinates [coordinates]=\"feature.geometry.coordinates\" [srid]=\"'EPSG:4326'\">\n              </aol-collection-coordinates>\n            </aol-geometry-polygon>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n\n    <div class=\"info\">\n      <h3>Result</h3>\n      <code>\n        <pre>{{ feature | json }}</pre>\n      </code>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .info {\n        width: 28%;\n        padding: 1rem;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/overlay/overlay.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/overlay/overlay.component.ts ***!
    \**********************************************/

  /*! exports provided: OverlayComponent */

  /***/
  function srcAppOverlayOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverlayComponent", function () {
      return OverlayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ol_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ol/format */
    "./node_modules/ol/format.js");
    /* harmony import */


    var ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ol/geom/Polygon */
    "./node_modules/ol/geom/Polygon.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var OverlayComponent = /*#__PURE__*/function () {
      function OverlayComponent() {
        _classCallCheck(this, OverlayComponent);

        this.geoJsonFormat = new ol_format__WEBPACK_IMPORTED_MODULE_1__["GeoJSON"]();
        this.feature = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [[[-2.3565673828124996, 46.92588289494367], [-2.1148681640624996, 46.92588289494367], [-2.1148681640624996, 47.04954010021555], [-2.3565673828124996, 47.04954010021555], [-2.3565673828124996, 46.92588289494367]]]
          }
        };
        this.tooltip = {
          lon: 0,
          lat: 0,
          text: 'Lorem ipsum dolor sit amet'
        };
      }

      _createClass(OverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var olFeature = this.geoJsonFormat.readFeature(this.feature);
          var olGeomPolygon = Object(ol_geom_Polygon__WEBPACK_IMPORTED_MODULE_2__["fromExtent"])(olFeature.getGeometry().getExtent());

          var _olGeomPolygon$getExt = olGeomPolygon.getExtent();

          var _olGeomPolygon$getExt2 = _slicedToArray(_olGeomPolygon$getExt, 3);

          this.tooltip.lat = _olGeomPolygon$getExt2[1];
          this.tooltip.lon = _olGeomPolygon$getExt2[2];
        }
      }]);

      return OverlayComponent;
    }();

    OverlayComponent.ɵfac = function OverlayComponent_Factory(t) {
      return new (t || OverlayComponent)();
    };

    OverlayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverlayComponent,
      selectors: [["app-display-overlay"]],
      decls: 18,
      vars: 13,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], [3, "coordinates", "srid"], [3, "positioning", "stopEvent"], [1, "tooltip", "tooltip-static"]],
      template: function OverlayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-source-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-geometry-polygon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-collection-coordinates", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "aol-overlay", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aol-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0 - 2.269282)("y", 46.987247)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("coordinates", ctx.feature.geometry.coordinates)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positioning", "center-center")("stopEvent", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx.tooltip.lon)("y", ctx.tooltip.lat)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.tooltip.text);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["GeometryPolygonComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["CollectionCoordinatesComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["OverlayComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_3__["ContentComponent"]],
      styles: [".tooltip[_ngcontent-%COMP%] {\n        margin-top: 35%;\n        right: 50%;\n        position: relative;\n        border-radius: 4px;\n        color: white;\n        padding: 4px 8px;\n        white-space: nowrap;\n      }\n\n      .tooltip-static[_ngcontent-%COMP%] {\n        background-color: #000000;\n        color: white;\n        border: 1px solid white;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-display-overlay',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n\n      <aol-view [zoom]=\"11\">\n        <aol-coordinate [x]=\"-2.269282\" [y]=\"46.987247\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-vector>\n        <aol-source-vector>\n          <aol-feature>\n            <aol-geometry-polygon>\n              <aol-collection-coordinates\n                [coordinates]=\"feature.geometry.coordinates\"\n                [srid]=\"'EPSG:4326'\"\n              ></aol-collection-coordinates>\n            </aol-geometry-polygon>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n\n      <aol-overlay [positioning]=\"'center-center'\" [stopEvent]=\"false\">\n        <aol-coordinate [x]=\"tooltip.lon\" [y]=\"tooltip.lat\" [srid]=\"'EPSG:4326'\"> </aol-coordinate>\n        <aol-content>\n          <div class=\"tooltip tooltip-static\">{{ tooltip.text }}</div>\n        </aol-content>\n      </aol-overlay>\n    </aol-map>\n  ",
          styles: ["\n      .tooltip {\n        margin-top: 35%;\n        right: 50%;\n        position: relative;\n        border-radius: 4px;\n        color: white;\n        padding: 4px 8px;\n        white-space: nowrap;\n      }\n\n      .tooltip-static {\n        background-color: #000000;\n        color: white;\n        border: 1px solid white;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/overview/overview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/overview/overview.component.ts ***!
    \************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var OverviewComponent = function OverviewComponent() {
      _classCallCheck(this, OverviewComponent);

      this.zoom = 15;
    };

    OverviewComponent.ɵfac = function OverviewComponent_Factory(t) {
      return new (t || OverviewComponent)();
    };

    OverviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-root"]],
      decls: 10,
      vars: 5,
      consts: [["width", "100%", "height", "100%"], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], ["osm", ""]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-overviewmap");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-layer-tile", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", ctx.zoom);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ControlOverviewMapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-control-overviewmap></aol-control-overviewmap>\n      <aol-view #view [zoom]=\"zoom\">\n        <aol-coordinate [x]=\"5\" [y]=\"45\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n      <aol-layer-tile #osm [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n    </aol-map>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/raster/raster.component.ts":
  /*!********************************************!*\
    !*** ./src/app/raster/raster.component.ts ***!
    \********************************************/

  /*! exports provided: RasterComponent, rasterOperation */

  /***/
  function srcAppRasterRasterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RasterComponent", function () {
      return RasterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rasterOperation", function () {
      return rasterOperation;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function RasterComponent_aol_source_osm_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aol-source-osm");
      }
    }

    function RasterComponent_aol_source_xyz_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "aol-source-xyz", 11);
      }
    }

    var RasterComponent = /*#__PURE__*/function () {
      function RasterComponent() {
        _classCallCheck(this, RasterComponent);

        this.operation = rasterOperation;
        this.brightness = 0;
        this.contrast = 0;
        this.selectLayer = 'osm';
      }

      _createClass(RasterComponent, [{
        key: "beforeOperations",
        value: function beforeOperations(event) {
          var data = event.data;
          data.brightness = this.brightness;
          data.contrast = this.contrast;
        }
      }, {
        key: "updateRaster",
        value: function updateRaster() {
          this.rasterSource.instance.refresh();
        }
      }]);

      return RasterComponent;
    }();

    RasterComponent.ɵfac = function RasterComponent_Factory(t) {
      return new (t || RasterComponent)();
    };

    RasterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RasterComponent,
      selectors: [["app-raster"]],
      viewQuery: function RasterComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceRasterComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rasterSource = _t.first);
        }
      },
      decls: 30,
      vars: 13,
      consts: [["width", "100%", "height", "100%"], [3, "zoom"], [3, "x", "y", "srid"], ["threads", "4", "operationType", "image", 3, "operation", "beforeOperations"], [4, "ngIf"], ["url", "https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71", "crossOrigin", "", 4, "ngIf"], [1, "controls"], ["type", "radio", "name", "layer", "value", "osm", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "layer", "value", "xyz", 3, "ngModel", "ngModelChange"], [1, "control"], ["type", "range", "min", "-255", "max", "255", 3, "ngModel", "ngModelChange", "input"], ["url", "https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71", "crossOrigin", ""]],
      template: function RasterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-source-raster", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeOperations", function RasterComponent_Template_aol_source_raster_beforeOperations_7_listener($event) {
            return ctx.beforeOperations($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RasterComponent_aol_source_osm_8_Template, 1, 0, "aol-source-osm", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RasterComponent_aol_source_xyz_9_Template, 1, 0, "aol-source-xyz", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.selectLayer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OSM");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.selectLayer = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "XYZ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Contrast : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_21_listener($event) {
            return ctx.contrast = $event;
          })("input", function RasterComponent_Template_input_input_21_listener() {
            return ctx.updateRaster();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Brightness : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RasterComponent_Template_input_ngModelChange_27_listener($event) {
            return ctx.brightness = $event;
          })("input", function RasterComponent_Template_input_input_27_listener() {
            return ctx.updateRaster();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("operation", ctx.operation);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectLayer === "osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectLayer === "xyz");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectLayer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectLayer);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.contrast);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.contrast, ")");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.brightness);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" (", ctx.brightness, ")");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ControlFullScreenComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerImageComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceRasterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceXYZComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .control[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RasterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-raster',
          template: "\n    <aol-map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-control-fullscreen></aol-control-fullscreen>\n\n      <aol-view [zoom]=\"14\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-image>\n        <aol-source-raster\n          threads=\"4\"\n          operationType=\"image\"\n          [operation]=\"operation\"\n          (beforeOperations)=\"beforeOperations($event)\"\n        >\n          <aol-source-osm *ngIf=\"selectLayer === 'osm'\"></aol-source-osm>\n          <aol-source-xyz\n            *ngIf=\"selectLayer === 'xyz'\"\n            url=\"https://c.tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=0e6fc415256d4fbb9b5166a718591d71\"\n            crossOrigin=\"\"\n          ></aol-source-xyz>\n        </aol-source-raster>\n      </aol-layer-image>\n    </aol-map>\n\n    <div class=\"controls\">\n      <form>\n        <input type=\"radio\" name=\"layer\" value=\"osm\" [(ngModel)]=\"selectLayer\" />OSM<br />\n        <input type=\"radio\" name=\"layer\" value=\"xyz\" [(ngModel)]=\"selectLayer\" />XYZ<br />\n      </form>\n\n      <div class=\"control\">\n        <span>Contrast : </span>\n        <input type=\"range\" min=\"-255\" max=\"255\" [(ngModel)]=\"contrast\" (input)=\"updateRaster()\" />\n        <span> ({{ contrast }})</span>\n      </div>\n      <div class=\"control\">\n        <span>Brightness : </span>\n        <input type=\"range\" min=\"-255\" max=\"255\" [(ngModel)]=\"brightness\" (input)=\"updateRaster()\" />\n        <span> ({{ brightness }})</span>\n      </div>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .controls {\n        width: 28%;\n        padding: 1rem;\n      }\n\n      .control {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin: 20px;\n      }\n    "]
        }]
      }], null, {
        rasterSource: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceRasterComponent"], {
            "static": true
          }]
        }]
      });
    })();
    /**
     * @see https://github.com/canastro/image-filter-brightness/blob/master/src/transform.js
     * @see https://github.com/canastro/image-filter-contrast/blob/master/src/transform.js
     */


    function rasterOperation(imageDatas, data) {
      var _imageDatas = _slicedToArray(imageDatas, 1),
          imageData = _imageDatas[0];

      var pixels = imageData.data;
      var pixelsLength = pixels.length;
      var factor = 259 * (data.contrast + 255) / (255 * (259 - data.contrast));

      for (var i = 0; i < pixelsLength; i += 4) {
        pixels[i] += data.brightness;
        pixels[i + 1] += data.brightness;
        pixels[i + 2] += data.brightness;
        pixels[i] = factor * (pixels[i] - 128) + 128;
        pixels[i + 1] = factor * (pixels[i + 1] - 128) + 128;
        pixels[i + 2] = factor * (pixels[i + 2] - 128) + 128;
      }

      return imageData;
    }
    /***/

  },

  /***/
  "./src/app/select-interaction/select-interaction.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/select-interaction/select-interaction.component.ts ***!
    \********************************************************************/

  /*! exports provided: SelectInteractionComponent */

  /***/
  function srcAppSelectInteractionSelectInteractionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectInteractionComponent", function () {
      return SelectInteractionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var _c0 = ["markersLayer"];

    var SelectInteractionComponent = /*#__PURE__*/function () {
      function SelectInteractionComponent() {
        var _this39 = this;

        _classCallCheck(this, SelectInteractionComponent);

        this.isMarkerLayer = function (layer) {
          return layer === _this39.markersLayer.instance;
        };
      }

      _createClass(SelectInteractionComponent, [{
        key: "select",
        value: function select($event) {
          console.log($event);
        }
      }]);

      return SelectInteractionComponent;
    }();

    SelectInteractionComponent.ɵfac = function SelectInteractionComponent_Factory(t) {
      return new (t || SelectInteractionComponent)();
    };

    SelectInteractionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SelectInteractionComponent,
      selectors: [["app-select-interaction"]],
      viewQuery: function SelectInteractionComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.markersLayer = _t.first);
        }
      },
      decls: 15,
      vars: 11,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "layers", "wrapX", "olSelect"], [3, "zoom"], [3, "x", "y", "srid"], [3, "opacity"], ["markersLayer", ""], [3, "wrapX"], ["markersSource", ""]],
      template: function SelectInteractionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-interaction-select", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("olSelect", function SelectInteractionComponent_Template_aol_interaction_select_olSelect_3_listener($event) {
            return ctx.select($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-view", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-vector", null, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "aol-source-vector", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "aol-geometry-point");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("layers", ctx.isMarkerLayer)("wrapX", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 1.4886)("y", 43.5554)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("wrapX", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SelectInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPointComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectInteractionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-select-interaction',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n\n      <aol-interaction-select\n        [layers]=\"isMarkerLayer\"\n        (olSelect)=\"select($event)\"\n        [wrapX]=\"false\"\n      ></aol-interaction-select>\n\n      <aol-view [zoom]=\"5\">\n        <aol-coordinate [x]=\"1.4886\" [y]=\"43.5554\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\">\n        <aol-source-osm></aol-source-osm>\n      </aol-layer-tile>\n\n      <aol-layer-vector #markersLayer>\n        <aol-source-vector #markersSource [wrapX]=\"false\">\n          <aol-feature>\n            <aol-geometry-point>\n              <aol-coordinate [x]=\"5\" [y]=\"45\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-geometry-point>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n  "
        }]
      }], function () {
        return [];
      }, {
        markersLayer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['markersLayer', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/side-by-side/side-by-side.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/side-by-side/side-by-side.component.ts ***!
    \********************************************************/

  /*! exports provided: SideBySideComponent */

  /***/
  function srcAppSideBySideSideBySideComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideBySideComponent", function () {
      return SideBySideComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var _c0 = ["secondMap"];
    var _c1 = ["view"];

    var SideBySideComponent = /*#__PURE__*/function () {
      function SideBySideComponent() {
        _classCallCheck(this, SideBySideComponent);
      }

      _createClass(SideBySideComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.secondMap.instance.setView(this.view.instance);
        }
      }]);

      return SideBySideComponent;
    }();

    SideBySideComponent.ɵfac = function SideBySideComponent_Factory(t) {
      return new (t || SideBySideComponent)();
    };

    SideBySideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SideBySideComponent,
      selectors: [["app-side-by-side"]],
      viewQuery: function SideBySideComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.secondMap = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
        }
      },
      decls: 13,
      vars: 7,
      consts: [[3, "width", "height"], ["map", ""], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], ["width", "100%", "height", "100%"], ["secondMap", ""], ["url", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"]],
      template: function SideBySideComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-view", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-map", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "aol-source-xyz", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 2.181539)("y", 47.125488)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceXYZComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 50%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideBySideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-side-by-side',
          template: "\n    <aol-map #map [width]=\"'100%'\" [height]=\"'100%'\">\n      <aol-interaction-default></aol-interaction-default>\n\n      <aol-view #view [zoom]=\"5\">\n        <aol-coordinate [x]=\"2.181539\" [y]=\"47.125488\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n    </aol-map>\n\n    <aol-map #secondMap width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-layer-tile>\n        <aol-source-xyz\n          url=\"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\"\n        >\n        </aol-source-xyz>\n      </aol-layer-tile>\n    </aol-map>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 50%;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        secondMap: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['secondMap', {
            "static": true
          }]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['view', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/swipe/swipe.component.ts":
  /*!******************************************!*\
    !*** ./src/app/swipe/swipe.component.ts ***!
    \******************************************/

  /*! exports provided: SwipeComponent */

  /***/
  function srcAppSwipeSwipeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SwipeComponent", function () {
      return SwipeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var _c0 = ["map"];

    var SwipeComponent = /*#__PURE__*/function () {
      function SwipeComponent() {
        _classCallCheck(this, SwipeComponent);

        this.swipeValue = 50;
        this.swipeOffsetToCenter = 0;
        this.positionPx = 0;
        this.startX = 0;
        this.paddingSize = 16;
      }

      _createClass(SwipeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.prerenderFunction = this.prerender();
          this.postrenderFunction = this.postrender();
        }
      }, {
        key: "onWindowResize",
        value: function onWindowResize(event) {
          this.resetSwipeValues();
        }
      }, {
        key: "prerender",
        value: function prerender() {
          var _this40 = this;

          return function (event) {
            var ctx = event.context;
            var width = ctx.canvas.width * (_this40.swipeValue / 100);
            ctx.save();
            ctx.beginPath();
            ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
            ctx.clip();
          };
        }
      }, {
        key: "postrender",
        value: function postrender() {
          return function (event) {
            var ctx = event.context;
            ctx.restore();
          };
        }
      }, {
        key: "resetSwipeValues",
        value: function resetSwipeValues() {
          this.startX = 0;
          this.swipeOffsetToCenter = 0;
          this.swipeValue = 50;
          this.positionPx = 0;
        }
      }, {
        key: "onPanStart",
        value: function onPanStart() {
          this.startX = this.swipeOffsetToCenter;
        }
      }, {
        key: "onPan",
        value: function onPan(event) {
          event.preventDefault();
          var swipePercentageMax = 98;
          var swipePercentageMin = 2;
          var maxPercentage = 0.48;
          this.swipeOffsetToCenter = this.startX + event.deltaX;
          var screenSizePx = event.srcEvent.view.innerWidth - this.paddingSize;
          this.positionPx = screenSizePx / 2 + this.swipeOffsetToCenter;
          this.swipeValue = this.positionPx / screenSizePx * 100;
          var isDraggingButtonOutsideOnRight = this.swipeOffsetToCenter > maxPercentage * screenSizePx;
          var isDraggingButtonOutsideOnLeft = this.swipeOffsetToCenter < -maxPercentage * screenSizePx;

          if (isDraggingButtonOutsideOnRight) {
            this.swipeOffsetToCenter = maxPercentage * screenSizePx;
            this.swipeValue = swipePercentageMax;
          }

          if (isDraggingButtonOutsideOnLeft) {
            this.swipeOffsetToCenter = -maxPercentage * screenSizePx;
            this.swipeValue = swipePercentageMin;
          }

          this.map.instance.render();
        }
      }]);

      return SwipeComponent;
    }();

    SwipeComponent.ɵfac = function SwipeComponent_Factory(t) {
      return new (t || SwipeComponent)();
    };

    SwipeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SwipeComponent,
      selectors: [["app-swipe"]],
      viewQuery: function SwipeComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.map = _t.first);
        }
      },
      hostBindings: function SwipeComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function SwipeComponent_resize_HostBindingHandler($event) {
            return ctx.onWindowResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 12,
      vars: 9,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], ["view", ""], [3, "x", "y", "srid"], [3, "opacity"], [3, "prerender", "postrender"], ["url", "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"], [1, "swipe-button", 3, "panstart", "panmove"]],
      template: function SwipeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "aol-view", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-coordinate", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-xyz", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("panstart", function SwipeComponent_Template_button_panstart_10_listener() {
            return ctx.onPanStart();
          })("panmove", function SwipeComponent_Template_button_panmove_10_listener($event) {
            return ctx.onPan($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " <> ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 2.181539)("y", 47.125488)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opacity", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("prerender", ctx.prerenderFunction)("postrender", ctx.postrenderFunction);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("margin-left", ctx.swipeOffsetToCenter, "px");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceXYZComponent"]],
      styles: [".swipe-button[_ngcontent-%COMP%] {\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n          0 1px 18px 0 rgba(0, 0, 0, 0.12);\n        background-color: #0a2340;\n        color: white;\n        cursor: pointer;\n        left: calc(50% - 27px);\n        position: absolute;\n        top: 60%;\n        box-sizing: border-box;\n        border: none;\n        display: inline-block;\n        white-space: nowrap;\n        text-decoration: none;\n        vertical-align: baseline;\n        text-align: center;\n        margin: 0;\n        line-height: 36px;\n        border-radius: 2px;\n        min-width: 0;\n        width: 40px;\n        height: 40px;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwipeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-swipe',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-interaction-default></aol-interaction-default>\n\n      <aol-view #view [zoom]=\"5\">\n        <aol-coordinate [x]=\"2.181539\" [y]=\"47.125488\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-layer-tile [opacity]=\"1\"> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n\n      <aol-layer-tile [prerender]=\"prerenderFunction\" [postrender]=\"postrenderFunction\">\n        <aol-source-xyz\n          url=\"https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}\"\n        >\n        </aol-source-xyz>\n      </aol-layer-tile>\n    </aol-map>\n    <button\n      class=\"swipe-button\"\n      [style.marginLeft.px]=\"swipeOffsetToCenter\"\n      (panstart)=\"onPanStart()\"\n      (panmove)=\"onPan($event)\"\n    >\n      <>\n    </button>\n  ",
          styles: ["\n      .swipe-button {\n        box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14),\n          0 1px 18px 0 rgba(0, 0, 0, 0.12);\n        background-color: #0a2340;\n        color: white;\n        cursor: pointer;\n        left: calc(50% - 27px);\n        position: absolute;\n        top: 60%;\n        box-sizing: border-box;\n        border: none;\n        display: inline-block;\n        white-space: nowrap;\n        text-decoration: none;\n        vertical-align: baseline;\n        text-align: center;\n        margin: 0;\n        line-height: 36px;\n        border-radius: 2px;\n        min-width: 0;\n        width: 40px;\n        height: 40px;\n      }\n    "]
        }]
      }], function () {
        return [];
      }, {
        map: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['map', {
            "static": true
          }]
        }],
        onWindowResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/tile-json/tile-json.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/tile-json/tile-json.component.ts ***!
    \**************************************************/

  /*! exports provided: TileJsonComponent */

  /***/
  function srcAppTileJsonTileJsonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TileJsonComponent", function () {
      return TileJsonComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");

    var TileJsonComponent = function TileJsonComponent() {
      _classCallCheck(this, TileJsonComponent);
    };

    TileJsonComponent.ɵfac = function TileJsonComponent_Factory(t) {
      return new (t || TileJsonComponent)();
    };

    TileJsonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TileJsonComponent,
      selectors: [["app-tile-json"]],
      decls: 8,
      vars: 4,
      consts: [["width", "100%", "height", "100%"], ["map", ""], [3, "zoom"], [3, "x", "y", "srid"], ["url", "https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json"]],
      template: function TileJsonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-view", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-tilejson", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0 - 2.269282)("y", 46.987247)("srid", "EPSG:4326");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceTileJSONComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TileJsonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tile-json',
          template: "\n    <aol-map #map width=\"100%\" height=\"100%\">\n      <aol-view [zoom]=\"3\">\n        <aol-coordinate [x]=\"-2.269282\" [y]=\"46.987247\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-layer-tile>\n        <aol-source-tilejson\n          url=\"https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json\"\n        ></aol-source-tilejson>\n      </aol-layer-tile>\n    </aol-map>\n  "
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utfgrid/utfgrid.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/utfgrid/utfgrid.component.ts ***!
    \**********************************************/

  /*! exports provided: UTFGridComponent */

  /***/
  function srcAppUtfgridUtfgridComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UTFGridComponent", function () {
      return UTFGridComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["UTFGrid"];
    var _c1 = ["view"];

    function UTFGridComponent_aol_overlay_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-overlay", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-coordinate", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-content");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("positioning", "BOTTOM_RIGHT")("stopEvent", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", ctx_r62.coords[0])("y", ctx_r62.coords[1])("srid", "EPSG:3857");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/png;base64," + ctx_r62.info["flag_png"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var _c2 = function _c2() {
      return [3000000, 3000000];
    };

    var UTFGridComponent = /*#__PURE__*/function () {
      function UTFGridComponent() {
        _classCallCheck(this, UTFGridComponent);

        this.key = 'pk.eyJ1IjoieWFrb3VzdCIsImEiOiJjanVkc3Y0b2cwNWppM3lwaXd5M3JidHRzIn0.rJmuWPJnuKA9MJ9z5RPKZw';
      }

      _createClass(UTFGridComponent, [{
        key: "displayInfo",
        value: function displayInfo(c) {
          var _this41 = this;

          this.UTFGrid.instance.forDataAtCoordinateAndResolution(c, this.view.instance.getResolution(), function (data) {
            if (data !== null && data !== undefined && data !== '') {
              _this41.info = data;
              _this41.coords = c;
            }
          });
        }
      }]);

      return UTFGridComponent;
    }();

    UTFGridComponent.ɵfac = function UTFGridComponent_Factory(t) {
      return new (t || UTFGridComponent)();
    };

    UTFGridComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UTFGridComponent,
      selectors: [["app-root"]],
      viewQuery: function UTFGridComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.UTFGrid = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
        }
      },
      decls: 12,
      vars: 5,
      consts: [[3, "pointerMove"], [3, "zoom", "center"], ["view", ""], [3, "url"], ["UTFGrid", ""], [3, "positioning", "stopEvent", 4, "ngIf"], [3, "positioning", "stopEvent"], [3, "x", "y", "srid"], [3, "src"]],
      template: function UTFGridComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pointerMove", function UTFGridComponent_Template_aol_map_pointerMove_0_listener($event) {
            return ctx.displayInfo($event.coordinate);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "aol-control-defaults");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-control-fullscreen");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "aol-view", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "aol-source-utfgrid", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UTFGridComponent_aol_overlay_11_Template, 4, 6, "aol-overlay", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 2)("center", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", "https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=" + ctx.key);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.coords && ctx.info);
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultControlComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ControlFullScreenComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceUTFGridComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["OverlayComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ContentComponent"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 100%;\n        height: 100%;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UTFGridComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map (pointerMove)=\"displayInfo($event.coordinate)\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-control-defaults></aol-control-defaults>\n      <aol-control-fullscreen></aol-control-fullscreen>\n      <aol-view #view [zoom]=\"2\" [center]=\"[3000000, 3000000]\"></aol-view>\n      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n      <aol-layer-tile>\n        <aol-source-utfgrid\n          #UTFGrid\n          [url]=\"'https://api.tiles.mapbox.com/v4/mapbox.geography-class.json?secure&access_token=' + key\"\n        ></aol-source-utfgrid>\n      </aol-layer-tile>\n      <aol-overlay *ngIf=\"coords && info\" [positioning]=\"'BOTTOM_RIGHT'\" [stopEvent]=\"false\">\n        <aol-coordinate [x]=\"coords[0]\" [y]=\"coords[1]\" [srid]=\"'EPSG:3857'\"> </aol-coordinate>\n        <aol-content>\n          <img [src]=\"'data:image/png;base64,' + info['flag_png']\" />\n        </aol-content>\n      </aol-overlay>\n    </aol-map>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 100%;\n        height: 100%;\n      }\n    "]
        }]
      }], null, {
        UTFGrid: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['UTFGrid', {
            "static": true
          }]
        }],
        view: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['view', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/view-projection-update/view-projection-update.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/view-projection-update/view-projection-update.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ViewProjectionUpdateComponent */

  /***/
  function srcAppViewProjectionUpdateViewProjectionUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewProjectionUpdateComponent", function () {
      return ViewProjectionUpdateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-openlayers */
    "./dist/ngx-openlayers/__ivy_ngcc__/fesm2015/ngx-openlayers.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var _c0 = function _c0() {
      return [0.5, 1];
    };

    var ViewProjectionUpdateComponent = /*#__PURE__*/function () {
      function ViewProjectionUpdateComponent() {
        _classCallCheck(this, ViewProjectionUpdateComponent);

        this.viewProjection = 'EPSG:3857';
      }

      _createClass(ViewProjectionUpdateComponent, [{
        key: "projectionChange",
        value: function projectionChange(evt) {
          console.log("Projection changed to ".concat(evt.target.value));
          this.viewProjection = evt.target.value;
        }
      }]);

      return ViewProjectionUpdateComponent;
    }();

    ViewProjectionUpdateComponent.ɵfac = function ViewProjectionUpdateComponent_Factory(t) {
      return new (t || ViewProjectionUpdateComponent)();
    };

    ViewProjectionUpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewProjectionUpdateComponent,
      selectors: [["app-root"]],
      decls: 27,
      vars: 24,
      consts: [[3, "width", "height"], [3, "zoom", "projection"], [3, "x", "y", "srid"], [3, "radius"], [3, "color", "width"], [3, "color"], [3, "src", "anchor", "anchorXUnits", "anchorYUnits", "scale", "anchorOrigin"], [1, "controls"], [3, "change"], ["value", "EPSG:3857"], ["value", "EPSG:4326"]],
      template: function ViewProjectionUpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aol-map", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "aol-interaction-default");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "aol-view", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "aol-layer-tile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "aol-source-osm");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "aol-layer-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "aol-source-vector");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "aol-geometry-point");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "aol-style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "aol-style-circle", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "aol-style-stroke", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "aol-style-fill", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "aol-feature");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "aol-geometry-point");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "aol-coordinate", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "aol-style");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "aol-style-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Current projection: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ViewProjectionUpdateComponent_Template_select_change_22_listener($event) {
            return ctx.projectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "EPSG:3857");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", "100%")("height", "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zoom", 2)("projection", ctx.viewProjection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 0)("y", 0)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5)("y", 45)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("radius", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "black")("width", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "green");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("x", 5.1)("y", 45.1)("srid", "EPSG:4326");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/marker.png")("anchor", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c0))("anchorXUnits", "fraction")("anchorYUnits", "fraction")("scale", 0.1)("anchorOrigin", "top-left");
        }
      },
      directives: [ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["MapComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["DefaultInteractionComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["CoordinateComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerTileComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceOsmComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["LayerVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["SourceVectorComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["FeatureComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["GeometryPointComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleCircleComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleStrokeComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleFillComponent"], ngx_openlayers__WEBPACK_IMPORTED_MODULE_1__["StyleIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]],
      styles: ["[_nghost-%COMP%] {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map[_ngcontent-%COMP%] {\n        width: 70%;\n      }\n\n      .controls[_ngcontent-%COMP%] {\n        width: 28%;\n        padding: 1rem;\n      }"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewProjectionUpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          template: "\n    <aol-map [width]=\"'100%'\" [height]=\"'100%'\">\n      <aol-interaction-default></aol-interaction-default>\n      <aol-view [zoom]=\"2\" [projection]=\"viewProjection\">\n        <aol-coordinate [x]=\"0\" [y]=\"0\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n      </aol-view>\n      <aol-layer-tile> <aol-source-osm></aol-source-osm> </aol-layer-tile>\n      <aol-layer-vector>\n        <aol-source-vector>\n          <aol-feature>\n            <aol-geometry-point>\n              <aol-coordinate [x]=\"5\" [y]=\"45\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-geometry-point>\n            <aol-style>\n              <aol-style-circle [radius]=\"10\">\n                <aol-style-stroke [color]=\"'black'\" [width]=\"2\"></aol-style-stroke>\n                <aol-style-fill [color]=\"'green'\"></aol-style-fill>\n              </aol-style-circle>\n            </aol-style>\n          </aol-feature>\n          <aol-feature>\n            <aol-geometry-point>\n              <aol-coordinate [x]=\"5.1\" [y]=\"45.1\" [srid]=\"'EPSG:4326'\"></aol-coordinate>\n            </aol-geometry-point>\n            <aol-style>\n              <aol-style-icon\n                [src]=\"'assets/marker.png'\"\n                [anchor]=\"[0.5, 1]\"\n                [anchorXUnits]=\"'fraction'\"\n                [anchorYUnits]=\"'fraction'\"\n                [scale]=\"0.1\"\n                [anchorOrigin]=\"'top-left'\"\n              >\n              </aol-style-icon>\n            </aol-style>\n          </aol-feature>\n        </aol-source-vector>\n      </aol-layer-vector>\n    </aol-map>\n    <div class=\"controls\">\n      Current projection:\n      <select (change)=\"projectionChange($event)\">\n        <option value=\"EPSG:3857\">EPSG:3857</option>\n        <option value=\"EPSG:4326\">EPSG:4326</option>\n      </select>\n    </div>\n  ",
          styles: ["\n      :host {\n        height: 100%;\n        display: flex;\n      }\n\n      aol-map {\n        width: 70%;\n      }\n\n      .controls {\n        width: 28%;\n        padding: 1rem;\n      }\n    "]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.log(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/quentin-ol/ngx-openlayers/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map