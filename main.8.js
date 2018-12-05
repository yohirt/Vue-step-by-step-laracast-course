Vue.component('task-list', {
    template: '<div> <taska v-for="task in tasks">{{task.task}}</taska>  </div>',
    data() {
        return {
            tasks: [
                {task: 'task 1' , completed: true},
                {task: 'task 2' , completed: true},
                {task: 'task 3' , completed: false},
                {task: 'task 4' , completed: false},
            ]
        }
    }
}) 

Vue.component('taska',{
    template: '<li><slot></slot></li>'
})

new Vue({
    el: '#root'
})