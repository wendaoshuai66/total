Vue.directive('focus', {
    inserted: function (val1,val2) {
        console.log(val1)
        console.log(val2)
        val1.focus();
    },
})
new Vue({
    el:"#app",
})