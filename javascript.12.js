Vue.component('coupon', {
    template: '<input placeholder="wpisz swój kupon" @blur="onCouponAppileid">',
    methods: {

        onCouponAppileid() {
            this.$emit('applieda');
        }
    },
})
new Vue({
    el: "#root",
    data: {
        couponApplied: false
    },
    methods: {
        onCouponAppileid() {
            this.couponApplied = true;
        }
    }
});