Vue.component('message', {
    props: ['body', 'title'],
    data() {
        return {
            isVisible: true
        };
    },
    template: 
    `<article class="message is-primary" v-show="isVisible">
        <div class="message-header">
        <p>{{title}}</p>
        <!-- <span class="close" type="button" @click="hideModal">x</span>;
        -->
        <span class="close" type="button" @click="isVisible = false">x</span>
        <button class="delete" aria-label="delete"></button>
        </div>

        <div class="message-body">
            {{body}}
        </div>
    </article>`,
    methods: {
        hideModal(){
            this.isVisible = false; 
        }
    }
});

new Vue({
    el: "#root"
});