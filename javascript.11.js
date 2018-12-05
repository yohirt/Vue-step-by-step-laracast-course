Vue.component('tabs', {

    template: `
    <div>
        <div class="tabs">
            <ul>
                <li v-for="tab in tabs" :class="{'is-active' : tab.isactive}">
                <a :href="tab.href" @click="selectTab(tab)">{{tab.name}}</a>
                </li>
             </ul>
        </div>
        
        <div class="tabs-details">
            <slot></slot>  
        </div>
    </div>`,
    /* mounted() {
        console.log(this.$children);
    }, */
    data() {
        return {
            tabs: []
        };
    },
    created() {
        this.tabs = this.$children;
    },

    methods:{
        selectTab(selectedTab){
            // console.log(selectedTab.name);
            this.tabs.forEach(tab => {
                tab.isactive = (tab.name == selectedTab.name);
            });
        }
    }
});

Vue.component('tab', {
    template: `
        <div v-show="isactive"><slot></slot></div>
    `,
    props: {
        name: {
            required: true
        },
        selected: {default: false}
    },
    computed:{
        href(){
        return '#'+this.name.toLowerCase().replace(/ /g, '-');
        }
    },

    data(){
        return{

            isactive: false
        }
    },
    mounted() {
        this.isactive = this.selected; 
    },
});

new Vue({
    el: "#root",
    data: {
        showModal: false,
    }
});