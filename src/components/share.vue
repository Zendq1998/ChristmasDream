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
            <div class="you-speak" v-if="word==2">
                <p>哇！真的有圣诞老人！</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="you-speak" v-if="word==3">
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
            <div class="you-speak" v-if="word==5">
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
            <div class="share" v-if="word==7">
                <img src="../pictures/share.png" @click="shareToQq">
            </div>
        </transition>
        <transition name="fade">
            <div class="again" v-if="word==7">
                <img src="../pictures/again.png" @click="back">
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                word:0,
                url:'www.baidu.com',
                picurl:"http://chuantu.biz/t6/184/1514004060x-1376440250.png",
                title:"快来啊"
            };
        },
        components: {
           
        },
        methods: {
            next(){
                this.word++
            },
            shareToQq(){
                window.open('http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary='+this.title+'&url='+this.url+'&pics='+this.picurl,
                'newwindow','height=400,width=400,top=100,left=100');
            },
            back() {
                window.location.href = '/'
            }
        },
        mounted: function(){
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
    }
    .again {
        position: absolute;
        transform: translate(-50%,-50%);
        top: 80%;
        left: 38%;
        cursor: pointer;
    }
</style>
