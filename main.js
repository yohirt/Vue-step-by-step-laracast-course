Vue.component('task-list',{
    template: '<li><slot></slot></li>',
    data() {
        return {
            message: "foobarrrrr"
        }
    }
}) 

new Vue({
    el: '#root'
})