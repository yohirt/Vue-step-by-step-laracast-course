Vue.component('message', {
    props: ['title', 'body'],
    
    template:'<article>\
        <div>{{title}} \
            <button type="button" class="close" > x</button></div> \
        <div>{{body}}</div>\
        </article>',
 
});

Vue.component('taska', {
    template: '<li><slot></slot></li>'
})

new Vue({
    el: '#root'
})