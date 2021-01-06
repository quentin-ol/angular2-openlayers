(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ol/ol.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/ol/ol.css ***!
  \*************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".ol-box {\n  box-sizing: border-box;\n  border-radius: 2px;\n  border: 2px solid blue;\n}\n\n.ol-mouse-position {\n  top: 8px;\n  right: 8px;\n  position: absolute;\n}\n\n.ol-scale-line {\n  background: rgba(0,60,136,0.3);\n  border-radius: 4px;\n  bottom: 8px;\n  left: 8px;\n  padding: 2px;\n  position: absolute;\n}\n\n.ol-scale-line-inner {\n  border: 1px solid #eee;\n  border-top: none;\n  color: #eee;\n  font-size: 10px;\n  text-align: center;\n  margin: 1px;\n  will-change: contents, width;\n  transition: all 0.25s;\n}\n\n.ol-scale-bar {\n  position: absolute;\n  bottom: 8px;\n  left: 8px;\n}\n\n.ol-scale-step-marker {\n  width: 1px;\n  height: 15px;\n  background-color: #000000;\n  float: right;\n  z-Index: 10;\n}\n\n.ol-scale-step-text {\n  position: absolute;\n  bottom: -5px;\n  font-size: 12px;\n  z-Index: 11;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n\n.ol-scale-text {\n  position: absolute;\n  font-size: 14px;\n  text-align: center;\n  bottom: 25px;\n  color: #000000;\n  text-shadow: -2px 0 #FFFFFF, 0 2px #FFFFFF, 2px 0 #FFFFFF, 0 -2px #FFFFFF;\n}\n\n.ol-scale-singlebar {\n  position: relative;\n  height: 10px;\n  z-Index: 9;\n  border: 1px solid black;\n}\n\n.ol-unsupported {\n  display: none;\n}\n\n.ol-viewport, .ol-unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-tap-highlight-color: rgba(0,0,0,0);\n}\n\n.ol-overlaycontainer, .ol-overlaycontainer-stopevent {\n  pointer-events: none;\n}\n\n.ol-overlaycontainer > *, .ol-overlaycontainer-stopevent > * {\n  pointer-events: auto;\n}\n\n.ol-selectable {\n  -webkit-touch-callout: default;\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n\n.ol-grabbing {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n\n.ol-grab {\n  cursor: move;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n\n.ol-control {\n  position: absolute;\n  background-color: rgba(255,255,255,0.4);\n  border-radius: 4px;\n  padding: 2px;\n}\n\n.ol-control:hover {\n  background-color: rgba(255,255,255,0.6);\n}\n\n.ol-zoom {\n  top: .5em;\n  left: .5em;\n}\n\n.ol-rotate {\n  top: .5em;\n  right: .5em;\n  transition: opacity .25s linear, visibility 0s linear;\n}\n\n.ol-rotate.ol-hidden {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity .25s linear, visibility 0s linear .25s;\n}\n\n.ol-zoom-extent {\n  top: 4.643em;\n  left: .5em;\n}\n\n.ol-full-screen {\n  right: .5em;\n  top: .5em;\n}\n\n.ol-control button {\n  display: block;\n  margin: 1px;\n  padding: 0;\n  color: white;\n  font-size: 1.14em;\n  font-weight: bold;\n  text-decoration: none;\n  text-align: center;\n  height: 1.375em;\n  width: 1.375em;\n  line-height: .4em;\n  background-color: rgba(0,60,136,0.5);\n  border: none;\n  border-radius: 2px;\n}\n\n.ol-control button::-moz-focus-inner {\n  border: none;\n  padding: 0;\n}\n\n.ol-control button span {\n  pointer-events: none;\n}\n\n.ol-zoom-extent button {\n  line-height: 1.4em;\n}\n\n.ol-compass {\n  display: block;\n  font-weight: normal;\n  font-size: 1.2em;\n  will-change: transform;\n}\n\n.ol-touch .ol-control button {\n  font-size: 1.5em;\n}\n\n.ol-touch .ol-zoom-extent {\n  top: 5.5em;\n}\n\n.ol-control button:hover,\n.ol-control button:focus {\n  text-decoration: none;\n  background-color: rgba(0,60,136,0.7);\n}\n\n.ol-zoom .ol-zoom-in {\n  border-radius: 2px 2px 0 0;\n}\n\n.ol-zoom .ol-zoom-out {\n  border-radius: 0 0 2px 2px;\n}\n\n.ol-attribution {\n  text-align: right;\n  bottom: .5em;\n  right: .5em;\n  max-width: calc(100% - 1.3em);\n}\n\n.ol-attribution ul {\n  margin: 0;\n  padding: 0 .5em;\n  color: #000;\n  text-shadow: 0 0 2px #fff;\n}\n\n.ol-attribution li {\n  display: inline;\n  list-style: none;\n}\n\n.ol-attribution li:not(:last-child):after {\n  content: \" \";\n}\n\n.ol-attribution img {\n  max-height: 2em;\n  max-width: inherit;\n  vertical-align: middle;\n}\n\n.ol-attribution ul, .ol-attribution button {\n  display: inline-block;\n}\n\n.ol-attribution.ol-collapsed ul {\n  display: none;\n}\n\n.ol-attribution:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n\n.ol-attribution.ol-uncollapsible {\n  bottom: 0;\n  right: 0;\n  border-radius: 4px 0 0;\n}\n\n.ol-attribution.ol-uncollapsible img {\n  margin-top: -.2em;\n  max-height: 1.6em;\n}\n\n.ol-attribution.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-zoomslider {\n  top: 4.5em;\n  left: .5em;\n  height: 200px;\n}\n\n.ol-zoomslider button {\n  position: relative;\n  height: 10px;\n}\n\n.ol-touch .ol-zoomslider {\n  top: 5.5em;\n}\n\n.ol-overviewmap {\n  left: 0.5em;\n  bottom: 0.5em;\n}\n\n.ol-overviewmap.ol-uncollapsible {\n  bottom: 0;\n  left: 0;\n  border-radius: 0 4px 0 0;\n}\n\n.ol-overviewmap .ol-overviewmap-map,\n.ol-overviewmap button {\n  display: inline-block;\n}\n\n.ol-overviewmap .ol-overviewmap-map {\n  border: 1px solid #7b98bc;\n  height: 150px;\n  margin: 2px;\n  width: 150px;\n}\n\n.ol-overviewmap:not(.ol-collapsed) button{\n  bottom: 1px;\n  left: 2px;\n  position: absolute;\n}\n\n.ol-overviewmap.ol-collapsed .ol-overviewmap-map,\n.ol-overviewmap.ol-uncollapsible button {\n  display: none;\n}\n\n.ol-overviewmap:not(.ol-collapsed) {\n  background: rgba(255,255,255,0.8);\n}\n\n.ol-overviewmap-box {\n  border: 2px dotted rgba(0,60,136,0.7);\n}\n\n.ol-overviewmap .ol-overviewmap-box:hover {\n  cursor: move;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9vbC9vbC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFFBQVE7RUFDUixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGNBQWM7RUFDZCx5RUFBeUU7QUFDM0U7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osY0FBYztFQUNkLHlFQUF5RTtBQUMzRTs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsMENBQTBDO0FBQzVDOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBO0VBQ0UsOEJBQThCO0VBQzlCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUV4QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0VBRXBCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1Q0FBdUM7RUFDdkMsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFDQTtFQUNFLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBQ0E7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLHFEQUFxRDtBQUN2RDs7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsMERBQTBEO0FBQzVEOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7QUFDWjs7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTs7RUFFRSxxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixXQUFXO0VBQ1gseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUNBO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFNBQVM7RUFDVCxPQUFPO0VBQ1Asd0JBQXdCO0FBQzFCOztBQUNBOztFQUVFLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCOztBQUNBOztFQUVFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJub2RlX21vZHVsZXMvb2wvb2wuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9sLWJveCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbn1cblxuLm9sLW1vdXNlLXBvc2l0aW9uIHtcbiAgdG9wOiA4cHg7XG4gIHJpZ2h0OiA4cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLm9sLXNjYWxlLWxpbmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsNjAsMTM2LDAuMyk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm90dG9tOiA4cHg7XG4gIGxlZnQ6IDhweDtcbiAgcGFkZGluZzogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ub2wtc2NhbGUtbGluZS1pbm5lciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci10b3A6IG5vbmU7XG4gIGNvbG9yOiAjZWVlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxcHg7XG4gIHdpbGwtY2hhbmdlOiBjb250ZW50cywgd2lkdGg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cztcbn1cbi5vbC1zY2FsZS1iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOHB4O1xuICBsZWZ0OiA4cHg7XG59XG4ub2wtc2NhbGUtc3RlcC1tYXJrZXIge1xuICB3aWR0aDogMXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIGZsb2F0OiByaWdodDtcbiAgei1JbmRleDogMTA7XG59XG4ub2wtc2NhbGUtc3RlcC10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC01cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgei1JbmRleDogMTE7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXNoYWRvdzogLTJweCAwICNGRkZGRkYsIDAgMnB4ICNGRkZGRkYsIDJweCAwICNGRkZGRkYsIDAgLTJweCAjRkZGRkZGO1xufVxuLm9sLXNjYWxlLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3R0b206IDI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICB0ZXh0LXNoYWRvdzogLTJweCAwICNGRkZGRkYsIDAgMnB4ICNGRkZGRkYsIDJweCAwICNGRkZGRkYsIDAgLTJweCAjRkZGRkZGO1xufVxuLm9sLXNjYWxlLXNpbmdsZWJhciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMHB4O1xuICB6LUluZGV4OiA5O1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuLm9sLXVuc3VwcG9ydGVkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5vbC12aWV3cG9ydCwgLm9sLXVuc2VsZWN0YWJsZSB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuLm9sLW92ZXJsYXljb250YWluZXIsIC5vbC1vdmVybGF5Y29udGFpbmVyLXN0b3BldmVudCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm9sLW92ZXJsYXljb250YWluZXIgPiAqLCAub2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnQgPiAqIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4ub2wtc2VsZWN0YWJsZSB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogZGVmYXVsdDtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1vei11c2VyLXNlbGVjdDogdGV4dDtcbiAgLW1zLXVzZXItc2VsZWN0OiB0ZXh0O1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbi5vbC1ncmFiYmluZyB7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiYmluZztcbiAgY3Vyc29yOiAtbW96LWdyYWJiaW5nO1xuICBjdXJzb3I6IGdyYWJiaW5nO1xufVxuLm9sLWdyYWIge1xuICBjdXJzb3I6IG1vdmU7XG4gIGN1cnNvcjogLXdlYmtpdC1ncmFiO1xuICBjdXJzb3I6IC1tb3otZ3JhYjtcbiAgY3Vyc29yOiBncmFiO1xufVxuLm9sLWNvbnRyb2wge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC40KTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAycHg7XG59XG4ub2wtY29udHJvbDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcbn1cbi5vbC16b29tIHtcbiAgdG9wOiAuNWVtO1xuICBsZWZ0OiAuNWVtO1xufVxuLm9sLXJvdGF0ZSB7XG4gIHRvcDogLjVlbTtcbiAgcmlnaHQ6IC41ZW07XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyO1xufVxuLm9sLXJvdGF0ZS5vbC1oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBsaW5lYXIsIHZpc2liaWxpdHkgMHMgbGluZWFyIC4yNXM7XG59XG4ub2wtem9vbS1leHRlbnQge1xuICB0b3A6IDQuNjQzZW07XG4gIGxlZnQ6IC41ZW07XG59XG4ub2wtZnVsbC1zY3JlZW4ge1xuICByaWdodDogLjVlbTtcbiAgdG9wOiAuNWVtO1xufVxuXG4ub2wtY29udHJvbCBidXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxcHg7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjE0ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjM3NWVtO1xuICB3aWR0aDogMS4zNzVlbTtcbiAgbGluZS1oZWlnaHQ6IC40ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCw2MCwxMzYsMC41KTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG59XG4ub2wtY29udHJvbCBidXR0b246Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG4ub2wtY29udHJvbCBidXR0b24gc3BhbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLm9sLXpvb20tZXh0ZW50IGJ1dHRvbiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjRlbTtcbn1cbi5vbC1jb21wYXNzIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG59XG4ub2wtdG91Y2ggLm9sLWNvbnRyb2wgYnV0dG9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbi5vbC10b3VjaCAub2wtem9vbS1leHRlbnQge1xuICB0b3A6IDUuNWVtO1xufVxuLm9sLWNvbnRyb2wgYnV0dG9uOmhvdmVyLFxuLm9sLWNvbnRyb2wgYnV0dG9uOmZvY3VzIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsNjAsMTM2LDAuNyk7XG59XG4ub2wtem9vbSAub2wtem9vbS1pbiB7XG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xufVxuLm9sLXpvb20gLm9sLXpvb20tb3V0IHtcbiAgYm9yZGVyLXJhZGl1czogMCAwIDJweCAycHg7XG59XG5cblxuLm9sLWF0dHJpYnV0aW9uIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGJvdHRvbTogLjVlbTtcbiAgcmlnaHQ6IC41ZW07XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMS4zZW0pO1xufVxuXG4ub2wtYXR0cmlidXRpb24gdWwge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgLjVlbTtcbiAgY29sb3I6ICMwMDA7XG4gIHRleHQtc2hhZG93OiAwIDAgMnB4ICNmZmY7XG59XG4ub2wtYXR0cmlidXRpb24gbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ub2wtYXR0cmlidXRpb24gbGk6bm90KDpsYXN0LWNoaWxkKTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xufVxuLm9sLWF0dHJpYnV0aW9uIGltZyB7XG4gIG1heC1oZWlnaHQ6IDJlbTtcbiAgbWF4LXdpZHRoOiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLm9sLWF0dHJpYnV0aW9uIHVsLCAub2wtYXR0cmlidXRpb24gYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLWNvbGxhcHNlZCB1bCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4ub2wtYXR0cmlidXRpb246bm90KC5vbC1jb2xsYXBzZWQpIHtcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBib3JkZXItcmFkaXVzOiA0cHggMCAwO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgaW1nIHtcbiAgbWFyZ2luLXRvcDogLS4yZW07XG4gIG1heC1oZWlnaHQ6IDEuNmVtO1xufVxuLm9sLWF0dHJpYnV0aW9uLm9sLXVuY29sbGFwc2libGUgYnV0dG9uIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLm9sLXpvb21zbGlkZXIge1xuICB0b3A6IDQuNWVtO1xuICBsZWZ0OiAuNWVtO1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuLm9sLXpvb21zbGlkZXIgYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbi5vbC10b3VjaCAub2wtem9vbXNsaWRlciB7XG4gIHRvcDogNS41ZW07XG59XG5cbi5vbC1vdmVydmlld21hcCB7XG4gIGxlZnQ6IDAuNWVtO1xuICBib3R0b206IDAuNWVtO1xufVxuLm9sLW92ZXJ2aWV3bWFwLm9sLXVuY29sbGFwc2libGUge1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAgNHB4IDAgMDtcbn1cbi5vbC1vdmVydmlld21hcCAub2wtb3ZlcnZpZXdtYXAtbWFwLFxuLm9sLW92ZXJ2aWV3bWFwIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi5vbC1vdmVydmlld21hcCAub2wtb3ZlcnZpZXdtYXAtbWFwIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzdiOThiYztcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luOiAycHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5vbC1vdmVydmlld21hcDpub3QoLm9sLWNvbGxhcHNlZCkgYnV0dG9ue1xuICBib3R0b206IDFweDtcbiAgbGVmdDogMnB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ub2wtb3ZlcnZpZXdtYXAub2wtY29sbGFwc2VkIC5vbC1vdmVydmlld21hcC1tYXAsXG4ub2wtb3ZlcnZpZXdtYXAub2wtdW5jb2xsYXBzaWJsZSBidXR0b24ge1xuICBkaXNwbGF5OiBub25lO1xufVxuLm9sLW92ZXJ2aWV3bWFwOm5vdCgub2wtY29sbGFwc2VkKSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC44KTtcbn1cbi5vbC1vdmVydmlld21hcC1ib3gge1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmdiYSgwLDYwLDEzNiwwLjcpO1xufVxuXG4ub2wtb3ZlcnZpZXdtYXAgLm9sLW92ZXJ2aWV3bWFwLWJveDpob3ZlciB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbiJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\nhtml, body {\n  height: 100%;\n  overflow: hidden;\n}\nbody {\n  font-family: \"Roboto\", serif;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTtBQUM5RTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLDRCQUE0QjtFQUM1QixTQUFTO0FBQ1giLCJmaWxlIjoic3JjL3N0eWxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG5odG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNlcmlmO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */", '', '']]

/***/ }),

/***/ "./node_modules/ol/ol.css":
/*!********************************!*\
  !*** ./node_modules/ol/ol.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../postcss-loader/src??embedded!./ol.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/ol/ol.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!*******************************************************!*\
  !*** multi ./src/styles.css ./node_modules/ol/ol.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/travis/build/quentin-ol/ngx-openlayers/src/styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! /home/travis/build/quentin-ol/ngx-openlayers/node_modules/ol/ol.css */"./node_modules/ol/ol.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map