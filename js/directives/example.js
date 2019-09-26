import Vue from 'vue'

Vue.directive('example', {
  bind: function (el, binding, vnode) {
    $(el).click(() => {
      alert('Example directive');
    })
  }
});
