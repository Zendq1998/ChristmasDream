<template>
    <div>
        <p v-if="word==0" @click="start" class="animated.tada">点击产生你想要的礼物</p>
        <p v-if="word==1" @click="next">你想要{{gifts[random]}}</p>
        <div v-if="word==2">
            <p v-for="(item,index) in gifts" @click.self="choose(index)">{{item}}</p>
        </div>
        <p v-if="chooseright==0" @click="chooseright=-1">选错了，再选一遍吧</p>
        <p v-if="chooseright==1">选对啦</p>
        <p v-if="word==3" @click="end">点我领取礼物</p>

    </div>    
</template>

<script>
    export default {
        data() {
            return {
               gifts:['iphone','macbook','ipad','kindle','手表','项链'],
               word:0,
               random:0,
               chooseright:-1
            };
        },
        components: {
           
        },
        methods: {
            start(){
                this.random = Math.floor(Math.random()*6);
                this.word++;
            },
            next(){
                this.word++;
            },
            choose(index){
                if(index==this.random){
                    this.chooseright = 1;
                    this.word++;
                }
                else {
                    this.chooseright = 0
                }
            },
            end(){
                window.location.href = '/'
            }
        }
    }
</script>

<style lang="scss">

</style>
