webpackHotUpdate("styles",{

/***/ "./components/VerticalNav/style.scss":
/*!*******************************************!*\
  !*** ./components/VerticalNav/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"goal1":"#e5233d","goal2":"#dda73a","goal3":"#4ca146","goal4":"#13496b","goal5":"#ef402c","goal6":"#27bfe6","goal7":"#fbc412","goal8":"#a31c44","goal9":"#f26a2d","goal10":"#e01483","goal11":"#f89d2a","goal12":"#bf8d2c","goal13":"#407f46","goal14":"#1f97d4","goal15":"#59ba48","goal16":"#126a9f","goal17":"#13496b"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1570519735293");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c6f477b4ca4749b2142e.hot-update.js.map