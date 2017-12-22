<template>
    <div class="full_width full_hight background">
        
        <transition name="fade">
            <div class="black full_width full_height" v-if="word>=1">
                <img src="../pictures/chrishome.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            <img src="../pictures/smallgift.png" class="smallgift one" v-if="word>=1" @click="chose(1)">
        </transition>
        <transition name="fade">
            <img src="../pictures/smallgift.png" class="smallgift two" v-if="word>=1" @click="chose(2)">
        </transition>
        <transition name="fade">
            <img src="../pictures/smallgift.png" class="smallgift three" v-if="word>=1" @click="chose(3)">
        </transition>
        <transition name="fade">
            <img src="../pictures/smallgift.png" class="smallgift four" v-if="word>=1" @click="chose(4)">
        </transition>
        <transition name="fade">
            <img src="../pictures/littleold.png" class="littleold" v-if="word>=4">
        </transition>
        <transition name="fade1">
            <img src="../pictures/rightbubble.png" class="bubble" v-if="chosed==1&&choosing">
        </transition>
        <transition name="fade1">
            <img src="../pictures/falsebubble.png" class="bubble" v-if="chosed==-1&&choosing">
        </transition>
        <transition name="fade">
            <img src="../pictures/dialog.png" class="dia-img" v-if="word>=1 && !choosing" @click="next">
        </transition>
        <transition name="fade">
            <div class="santa-name" v-if="word>=1 && !choosing">
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
            <div class="santa-speak" v-if="word==3">
                <p>可是……我好像找不到它了，你能帮帮我么？</p>
            </div>
        </transition>
        <transition name="fade">
            <div class="santa-speak" v-if="word==5">
                <p>礼物找到啦！接下来，看我的！</p>
            </div>
        </transition>          
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                word: 0,
                choosing: false,
                chosed: 0,
                random: 0
            };
        },
        mounted: function(){
            this.random = Math.floor(Math.random()*4)+1;
            this.word++
        },
        components: {
           
        },
        methods: {
            next() {
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
            }
        }
    }
</script>

<style lang="scss">
    .smallgift {
        width: 3%;
        position: absolute;
        transform: translate(-50%,-50%);
        cursor: pointer;
    }
    .smallgift:hover {
        margin-top: -0.3%;
    }
    .one {
        top: 10%;
        left: 10%;
    }
    .two {
        top: 20%;
        left: 30%;
    }
    .three {
        top: 10%;
        left: 30%;
    }
    .four {
        top:10%;
        left: 70%;
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
        width: 7%;
        position: absolute;
        left: 9%;
        top: 75%;
        transform: translate(-50%,-50%);
    }
    .dia-img {
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        top: 66%;
        width: 80%;
        height: 50%;
        cursor: pointer;
    }
    .santa-name {
        color: #6A2716;
        font-size: 18px;
        position: absolute;
        background-color: transparent;
        top: 70%;
        left: 25%;
        transform: translate(-50%,-50%);
    }
    .santa-speak {
        color: #6A2716;
        font-size: 18px;
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
