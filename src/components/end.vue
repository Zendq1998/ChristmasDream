<template>
    <div class="full_width full_hight background" @click="next">
        
        <transition name="fade">
            <div class="black full_width full_height" v-if="word>=1" @click="next">
                <img src="../pictures/getgift.png" class="full_width full_height" @click="next">
            </div>
        </transition>
        <transition name="fade">
            
        </transition>
        <transition name="fade">
            
        </transition>
        <transition name="fade">
            
        </transition>      
    </div>    
</template>

<script>
    export default {
        data() {
            return {
                word: 0,
                show:false
            };
        },
        mounted: function(){
            this.word++
        },
        components: {
           
        },
        methods: {
            next() {
                this.word++
            }
        }
    }
</script>

<style lang="scss">
    .dia-img {
        position: absolute;
        left: 50%;
        transform: translate(-50%,0);
        top: 33%;
        
    }
    .santa-name {
        color: #6A2716;
        font-size: 20px;
        position: absolute;
        background-color: transparent;
        top: 60%;
        left: 25%;     
    }
    .santa-speak {
        color: #6A2716;
        font-size: 20px;
        font-family: '华文隶书';
        position: absolute;
        background-color: transparent;
        top: 68%;
        left: 25%;
        display: inline; 
    }
</style>
