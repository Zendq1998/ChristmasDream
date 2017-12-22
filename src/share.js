import Vue from 'vue'
import share from './components/share.vue'
import style from './main.scss'

new Vue({
    el: "#share",
    render: h => h(share)
})