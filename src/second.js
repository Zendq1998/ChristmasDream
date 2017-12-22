import Vue from 'vue'
import second from './components/second.vue'
import style from './main.scss'

new Vue({
    el: "#second",
    render: h => h(second)
})