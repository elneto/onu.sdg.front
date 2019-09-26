import Vue from "vue";

Vue.directive("popover", {
  bind: function(el, binding, vnode) {
    $('[data-toggle="popover"]').popover();
  }
});
