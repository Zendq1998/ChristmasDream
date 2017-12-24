<template>
    <div class="full_width full_hight background" >
        <transition name="fade">
            <div class="black full_width full_height" v-if="!warn&&word==0" >
                <img src="../pictures/home.png" class="full_width full_height" @click="next">
                <img src="../pictures/start.gif" class="start" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==1" @click="next">
                <transition name="fade">
                    <div class="dialog" v-if="word==1">
                        <span>平安夜 大家都睡着了 来看看你吧...</span>
                    </div>
            </transition>
            </div>
        </transition>
        
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==2" @click="next">
                <transition name="fade">
                    <div class="dialog" v-if="word==2">
                        <span>平安夜的晚上，你在床头挂好袜子，在期待中睡着了。</span>
                    </div>
            </transition>
            </div>
        </transition>
        <div class="black full_width full_height" v-if="warn" @click="change">
            <transition name="fade">
                <div class="dialog">
                    <span>横屏浏览效果更佳。(记得打开手机的翻转功能哦)</span>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                word:0,
                show:true,
                warn:false
            };
        },
        mounted(){
            if(window.innerHeight > window.innerWidth) {
                this.warn = true
            }
        },
        methods: {
            next() {
                this.word ++;
                if(this.word == 3) {
                    window.location.href = '/second'
                }
            },
            change() {
                this.warn=false
            }
        }
    }
</script>

<style lang="scss">
    .home {
        position: absolute;
        top: 0;
        left: 0;
    }
    
    .start {
        position: absolute;     
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        cursor: pointer;
        width: 300px;
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
    }
</style>
