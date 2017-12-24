<template>
    <div class="full_width full_hight background">
        <transition name="fade">
            <div class="black full_width full_height">
                <img src="../pictures/chrishome.png" class="full_width full_height" @click="nofind">
            </div>
        </transition>

        <!-- 四个礼物 -->
        <transition name="fade">
            <div class="smallgift one" @click="chose(2)" v-if="!speak && exist==2">
                <img src="../pictures/gift1.png"  v-if="gift>=2">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift two" @click="chose(3)" v-if="!speak && exist==3">
                <img src="../pictures/gift2.png" v-if="gift>=3">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift three" @click="chose(4)" v-if="!speak && exist==4">
                <img src="../pictures/gift3.png" v-if="gift>=4">
            </div>
        </transition>
        <transition name="fade">
            <div class="smallgift four" @click="chose(1)" v-if="!speak && exist==1">
                <img src="../pictures/gift4.png" v-if="gift==1">
            </div>
        </transition>
        <!-- 四个礼物 -->

        <!-- 对话框 -->
        <transition name="fade">
            <img src="../pictures/dialog.png" class="dia-img" v-if="speak" @click="next">
        </transition>
        <transition name="fade">
            <div class="santa-name" v-if="speak && word!=6" @click="next">
                <h3>圣诞老人:</h3>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-name" v-if="speak && word==6" @click="next">
                <h3>提示:</h3>
            </div>
        </transition>
        <!-- 对话框 -->

        <!-- 对话 -->
        <transition name="fade">
            <div class="santa-speak" v-if="speak && word==1" @click="next">
                <h2>Merry Christmas!</h2>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="speak && word==2" @click="next">
                <p>悄悄告诉你一个秘密，</p>
                <p>所有向我许愿的孩子都会得到一个惊喜哦！</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="speak && word==3" @click="next">
                <p>今天有四个礼物要送呢，</p>
                <p>可是……我好像找不到礼物盒了，你能帮帮我么？</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak startsearching" v-if="speak && (word==4 || word==5)" @click="search">
                <span>开始寻找第{{gift+1}}个礼盒！</span>
                <span class="arrow"></span>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak searchingtip" v-if="speak && word==4" @click="tip">
                <span>先给我一点提示！</span>
                <span class="arrow"></span>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak searchingtip" v-if="speak && word==5" @click="tip">
                <span>再看一下提示！</span>
                <span class="arrow"></span>
            </div>
        </transition>
        
        <!-- 对话 -->

        <!-- 提示 -->
        <transition name="fade">
            <div class="santa-speak startsearching" v-if="speak && word==10" @click="next">
                <span>找到了！真棒诶！</span>
                <span class="arrow"></span>
            </div>
        </transition>

        <transition name="fade">
            <div class="santa-speak" v-if="speak && word==7" @click="next">
                <span>{{ends[gift]}}</span>
            </div>
        </transition>
        
        <transition name="fade">
            <div class="santa-speak tip" v-if="speak && word==6" @click="next">
                <p>{{info[gift]}}</p>
            </div>
        </transition>

        <transition name="fade">
            <div class="santa-speak continue" v-if="speak && word==6" @click="search">
                <span>继续找</span>
                <span class="arrow"></span>
            </div>
        </transition>

        <transition name="fade">
            <div class="santa-speak end" v-if="speak && word==6" @click="end">
                <span>不找了，到此为止</span>
                <span class="arrow"></span>
            </div>
        </transition>
        <!-- 提示 -->

        <div class="black full_width full_height" v-if="warn" @click="change">
            <transition name="fade">
                <div class="dialog">
                    <span>横屏浏览效果更佳。</span>
                </div>
            </transition>
        </div>
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                gift:0,
                warn:false,
                speak:true,
                word:1,
                find:0,
                exist:1,
                info: [
                    "对了,那个绿盒子超大，应该很好找",
                    "也是个绿盒子，它总喜欢高高在上",
                    "好像...昨天拿它垫东西了",
                    "噢！那是一个黄色的小盒子"
                ],
                ends:[
                    "居然连一个都没有找到！没关系，我送你一个吧",
                    "只找到了第一个有点遗憾，来看看是啥吧！",
                    "只找到了第一个和第二个，拆开看看吧！",
                    "不错呢，找到了前三个，加油！拆开看看吧",
                    "你真是个天才，居然全找到了，我要送你一份大礼！"
                ]
            };
        },
        mounted(){
            if(window.innerHeight > window.innerWidth) {
                this.warn = true
            }
        },
        methods: {
            change() {
                if(window.innerHeight < window.innerWidth) {
                    this.warn = false
                }
            },
            next() {
                if(window.innerHeight > window.innerWidth) {
                    this.warn = true
                }
                if(this.word<=3) {
                    this.word++
                }
                if(this.word==6) {
                    this.word=5
                }
                if(this.word==7) {
                    window.location.href = '/share'
                }
                if(this.word==10) {
                    if(this.gift==4) {
                        this.word = 7
                    }
                    else {
                        this.word=4
                    }  
                }
            },
            tip() {
                this.word =  6
            },
            getgft() {
                if(this.gift==4) {
                    this.word = 7
                }
                else {
                    this.word==4
                }               
            },
            chose(index) {
                if(this.gift==this.exist) {
                    this.speak = true
                    this.word = 10
                    this.exist++
                    return 0
                }//刚刚找到并且点击一下
                if(index == this.gift+1){
                    this.gift++
                    this.find=0
                }    
            },
            search() {
                this.speak = false;
            },
            end() {
                this.word=7;
            },
            nofind() {
                if(this.gift==this.exist) {
                    this.speak = true
                    this.word = 10
                    this.exist++
                    return 0
                }//刚刚找到并且点击一下
                if(!this.speak) {
                    this.find ++
                    if(this.find==7) {
                        this.speak = true
                        this.word =  6
                        this.find = 0
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .smallgift {
        width: 4%;
        height: 6%;
        background-color: transparent;
        position: absolute;
        transform: translate(-50%,-50%);
        cursor: pointer;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
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
        position: absolute;
        background-color: transparent;
        top: 75%;
        left: 37%;
        transform: translate(-50%,-50%);
        padding-top: 30px;
        line-height: 80%;
        -webkit-tap-highlight-color:rgba(0,0,0,0);
    }
    .startsearching {
        font-size: 15px;
        left: 30%;
        line-height: 100%;
        cursor: pointer;
    }
    .searchingtip {
        font-size: 15px;
        left: 53%;
        line-height: 100%;
        cursor: pointer;
    }
    .tip {
        font-size: 10px;
        top:66%;
        left: 43%;
        line-height: 100%;
        cursor: pointer;
    }
    .continue {
        font-size: 10px;
        left: 25.5%;
        line-height: 100%;
        top: 80%;
        cursor: pointer;
    }
    .end {
        font-size: 10px;
        left: 50%;
        top: 80%;
        cursor: pointer;
        line-height: 100%;
    }
</style>
