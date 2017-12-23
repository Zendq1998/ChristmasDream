<template>
    <div class="full_width full_hight background">
        
        <transition name="fade">
            <div class="black full_width full_height" v-if="word>=1">
                <img src="../pictures/chrishome.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift one" v-if="word>=1" @click="chose(1)">
                <img v-bind:class="{ bouncea: move}" src="../pictures/gift1.png" v-if="chosed == 1 && random == 1">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift two" v-if="word>=1" @click="chose(2)">
                <img v-bind:class="{ bounceb: move}" src="../pictures/gift2.png" v-if="chosed == 1 && random == 2">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift three" v-if="word>=1" @click="chose(3)">
                <img v-bind:class="{ bouncec: move}" src="../pictures/gift3.png" v-if="chosed == 1 && random == 3">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift four" v-if="word>=1" @click="chose(4)">
                <img v-bind:class="{ bounced: move}" src="../pictures/gift4.png" v-if="chosed == 1 && random == 4">
            </div>
        </transition>
        
        <transition name="fade1">
            <img src="../pictures/rightbubble.png" class="bubble" v-if="chosed==1&&choosing">
        </transition>
        <transition name="fade1">
            <img src="../pictures/falsebubble.png" class="bubble" v-if="chosed==-1&&choosing">
        </transition>
        <transition name="fade">
            <img src="../pictures/dialog.png" class="dia-img" v-if="word>=1 && !choosing && word!=6" @click="next">
        </transition>
        <transition name="fade">
            <div class="santa-name" v-if="word>=1 && !choosing && word<=5">
                <h2>圣诞老人:</h2>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==1">
                <h2>Merry Christmas!</h2>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==2">
                <p>悄悄告诉你一个秘密，</p>
                <p>所有向我许愿的孩子都会得到一个惊喜哦！</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==3 && random==1">
                <p>可是……我好像找不到礼物盒了，你能帮帮我么？</p>
                <p>......{{info[0]}}</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==3 && random==2">
                <p>可是……我好像找不到礼物盒了，你能帮帮我么？</p>
                <p>......{{info[1]}}</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==3 && random==3">
                <p>可是……我好像找不到礼物盒了，你能帮帮我么？</p>
                <p>......{{info[2]}}</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==3 && random==4">
                <p>可是……我好像找不到礼物盒了，你能帮帮我么？</p>
                <p>......{{info[3]}}</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==5">
                <p>礼物找到啦！接下来，看我的！</p>
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
                word: 0,
                choosing: false,
                chosed: 0,
                random: 0,
                move: false,
                warn:false,
                info: [
                    "那个盒子，它总觉得自己是照片",
                    "似乎昨天拿它垫东西了(可能在圣诞树下面)",
                    "噢！那是一个黄色的小盒子（可能再火炉上面）",
                    "对了,那个绿盒子超大，应该很好找"
                ]
            };
        },
        mounted: function(){
            if(window.innerHeight > window.innerWidth) {
                this.warn = true
            }
            this.random = Math.floor(Math.random()*4)+1;
            this.word++
        },
        components: {
           
        },
        methods: {
            next() {
                if(window.innerHeight > window.innerWidth) {
                    this.warn = true
                    return 0;
                }
                if(this.word==6) {
                    window.location.href = '/share'
                }
                if(this.word==5) {
                    this.move = true
                }
                if(!this.choosing) {
                    this.word ++;
                    if(this.word == 4) {
                        this.choosing = true;
                    }
                }
                if(this.choosing && this.chosed == 1) {
                    this.choosing = false;
                    this.word++;
                }
                else if(this.choosing) {
                    this.chosed = 0;
                }
            },
            chose(index) {
                if(window.innerHeight > window.innerWidth) {
                    this.warn = true
                    return 0;
                }
                if(this.chosed==1) {
                    this.choosing = false;
                    this.word++;
                }
                if(index == this.random) {
                    this.chosed = 1;
                }
                else {
                    this.chosed = -1;
                }
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
    .dialog {
        position: absolute;
        background-color: transparent;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    .bouncea {
        transform: translate(290%,75%);
        transition-duration: 1s;
    }
    .bounceb {
        transform: translate(15%,-130%);
        transition-duration: 1s;
    }
    .bouncec {
        transform: translate(-490%,230%);
        transition-duration: 1s;
    }
    .bounced {
        transform: translate(-290%,-100%);
        transition-duration: 1s;
    }
    .smallgift {
        width: 4%;
        height: 6%;
        background-color: transparent;
        position: absolute;
        transform: translate(-50%,-50%);
        cursor: pointer;
    }
    .one {
        top: 39%;
        left: 15%;
    }
    .two {
        top: 67%;
        left: 34%;
        height: 5%;
        width: 6%;
    }
    .three {
        top: 33%;
        left: 56%;
        width: 2%;
    }
    .four {
        top:66%;
        left: 75%;
        width: 5%;
        height: 14%;
    }
    .littleold {
        width: 15%;
        height: 30%;
        position: absolute;
        left: 20%;
        top: 80%;
        transform: translate(-50%,-50%);
    }
    .bubble {
        width: 8%;
        position: absolute;
        left: 16%;
        top: 63%;
        transform: translate(-50%,-50%);
    }
    .dia-img {
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        top: 66%;
        width: 80%;
        height: 65%;
        cursor: pointer;
         -webkit-tap-highlight-color:rgba(0,0,0,0); 
    }
    .santa-name {
        color: #6A2716;
        font-size: 14px;
        position: absolute;
        background-color: transparent;
        top: 70%;
        left: 25%;
        transform: translate(-50%,-50%);
    }
    .santa-speak {
        color: #6A2716;
        font-size: 13px;
        font-family: '华文隶书';
        position: absolute;
        background-color: transparent;
        top: 75%;
        left: 37%;
        transform: translate(-50%,-50%);
        padding-top: 30px;
        line-height: 80%;
    }
</style>
