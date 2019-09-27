import Vue from "vue";

Vue.directive("resize", {
  bind: function(el, binding, vnode) {
    window.onresize = window.onload = () => {
      this.windowWidth = window.innerWidth;
    };
  }
});
