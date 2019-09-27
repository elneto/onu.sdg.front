import Vue from "vue";

Vue.directive("home-video", {
  bind: function(el, binding, vnode) {
    const headerHeight = $("header")[0].clientHeight;
    $(el).css({ height: `calc(100vh - ${headerHeight}px)` });
  }
});
