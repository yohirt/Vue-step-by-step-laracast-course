Vue.component('modal', {
    props: ['body', 'title'],
    data() {
        return {
            isVisible: true
        };
    },
    template: 
    `<div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="box">
            <p>
            <slot></slot>
            </p>
            </div>

            <!-- Any other Bulma elements you want -->
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('closem')"></button>
    </div>`,
    methods: {
        hideModal(){
            this.isVisible = false; 
        }
    }
});

new Vue({
    el: "#root",
    data: {
        showModal : false,
    }
});