<template>
    <div class="full_width full_hight background" >
       <transition name="fade">
            <div class="black full_width full_height" v-if="word==1">
                <img src="../pictures/getgift.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==2 || word==3">
                <img src="../pictures/getgift1.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="you-speak" v-if="word==2" @click="next">
                <p>哇！真的有圣诞老人！</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="you-speak" v-if="word==3" @click="next">
                <p>快！拆开看看！</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==4">
                <img src="../pictures/opengift.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==5">
                <img src="../pictures/opengift1.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="you-speak" v-if="word==5" @click="next">
                <p>什么？？一张小纸条？</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==6">
                <img src="../pictures/pepper1.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="black full_width full_height" v-if="word==7">
                <img src="../pictures/paper2.png" class="full_width full_height">
            </div>
        </transition>
        <transition name="fade">
            <div v-if="word==7">
                <img src="../pictures/share.png" class="share" @click="shareToQq">
            </div>
        </transition>
        <transition name="fade">
            <div v-if="word==7">
                <img src="../pictures/again.png" class="again" @click="back">
            </div>
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
                url:'https://christmas.muxixyz.com',
                picurl:"http://chuantu.biz/t6/184/1514004060x-1376440250.png",
                title:"快来啊！圣诞老人送你礼物啦！",
                warn:false
            };
        },
        components: {
           
        },
        methods: {
            next(){
                if(window.innerHeight > window.innerWidth) {
                    this.warn = true
                    return 0;
                }
                this.word++
            },
            shareToQq(){
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+this.title+'&url='+this.url+'&pics='+this.picurl,
                'newwindow','height=400,width=400,top=100,left=100');
            },
            back() {
                window.location.href = '/'
            },
            change() {
                if(window.innerHeight < window.innerWidth) {
                    this.warn = false
            }
            }
        },
        mounted: function(){
            if(window.innerHeight > window.innerWidth) {
                this.warn = true
            }
            this.word++
        }
    }
</script>

<style lang="scss">
    .you-speak {
        color: #6A2716;
        font-size: 32px;
        position: absolute;
        background-color: transparent;
        top: 70%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .share {
        position: absolute;
        transform: translate(-50%,-50%);
        top: 80%;
        left: 65%;
        cursor: pointer;
        width: 20%;
        -webkit-tap-highlight-color:rgba(0,0,0,0); 
    }
    .again {
        position: absolute;
        transform: translate(-50%,-50%);
        top: 80%;
        left: 38%;
        cursor: pointer;
        width: 20%;
        -webkit-tap-highlight-color:rgba(0,0,0,0); 
    }
</style>
