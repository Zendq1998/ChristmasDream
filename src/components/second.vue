<template>
    <div class="full_width full_hight background">
        
        <transition name="fade">
            <div class="black full_width full_height" v-if="word>=1&&!warn">
                <img src="../pictures/bedroom.png" class="full_width full_height" @click="next">
            </div>
        </transition>

        <transition name="fade">
            <img src="../pictures/bubble.png" class="bubble" v-if="word>=2" @click="next">
        </transition>

        <transition name="fade">
            <div class="childspeak" v-if="word==2">
                <span>圣诞节要到了,</span>
                <br>
                <span>圣诞老人会给我送礼物么？</span>
            </div>
        </transition>

         <transition name="fade">
            <div class="childspeak1" v-if="word==3">
                <span>想要</span>
                
                <span>......</span>
                
                <br>
            </div>
        </transition>

        <transition name="fade">
            <img src="../pictures/bigift.gif" class="bigift" v-if="word>=4" @click="go">
        </transition>
        <div class="black full_width full_height" v-if="warn" @click="change">
            <transition name="fade">
                <div class="dialog">
                    <span>请用横屏浏览。</span>
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
               warn:false
            };
        },
        components: {
           
        },
        mounted: function(){
            if(window.innerHeight > window.innerWidth) {
                this.warn = true
            }
            this.word++
        },
        methods: {
            next(){
                if(window.innerHeight > window.innerWidth) {
                    this.warn = true
                    return 0;
                }
                if(this.word<=4){
                    this.word++;
                }   
                if(this.word>4) {
                    window.location.href = '/crishome'
                }    
            },
            go(){
                if(window.innerHeight > window.innerWidth) {
                    this.warn = true
                    return 0;
                }
                window.location.href = '/crishome'
            },
            change() {
                if(window.innerHeight < window.innerWidth) {
                    this.warn = false
            }
            }
        }
    }
</script>

<style lang="scss">
.bubble {
    position: absolute;
    top: 33%;
    left: 36%;
    transform: translate(-50%,-50%);
    width: 35%;
}
.childspeak {
    color: #6A2716;
    font-size: 16px;
    font-family: '华文隶书';
    position: absolute;
    background-color: transparent;
    display: inline;
    top: 30%;
    left: 38%;
    transform: translate(-50%,-50%);
    line-height: 200%;
}
.childspeak1 {
    color: #6A2716;
    font-size: 30px;
    font-family: '华文隶书';
    position: absolute;
    background-color: transparent;
    display: inline;
    top: 30%;
    left: 38%;
    transform: translate(-50%,-50%);
    line-height: 200%;
}
.arrow1 {
    border-width: 10px;
    margin-left: 90%;
    margin-top: 0px;
}

.arrow2 {
    border-width: 10px;
    margin-left: 95%;
}
.bigift {
    position: absolute;
    top: 31%;
    left: 37%;
    width: 17%;
    transform: translate(-50%,-50%);
    cursor: pointer;
    -webkit-tap-highlight-color:rgba(0,0,0,0); 
}
</style>
