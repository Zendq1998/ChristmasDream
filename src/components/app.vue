<template>
    <div class="full_width full_hight background portraid" >
        <transition name="fade">
            <div class="black full_width full_height" >
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

        

    </div>
</template>

<script>
    export default {
        data() {
            return {
                word:0,
                show:true,
                portraid:false
            };
        },
        components: {
           
        },
        mounted: function(){
            if(window.orientation==180||window.orientation==0) {
                portraid = true
            }
        },
        methods: {
            next() {
                this.word ++;
                if(this.word == 3) {
                    window.location.href = '/second'
                }
            },
            go() {
                
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
        top: 50vh;
        left: 50vh;
        transform: translate(-50%,-50%);
        cursor: pointer;
        width: 200px;
    }
    .dialog {
        position: absolute;
        background-color: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    
    .start {
        position: absolute;     
        top: 80%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        cursor: pointer;
        width: 500px;
    }
    .start:hover {
        background-color: red;
    }
    .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
    }
</style>
