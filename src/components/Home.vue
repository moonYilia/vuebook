<template>
    <div>
        Home
        <Mheader :back="true">首页</Mheader>
        <div class="mainContent">
            <Swiper :sliders="sliders"></Swiper>
            <ul>
                <li v-for="books in hotsBooks">
                    <img :src="books.bookCover"/>   
                    <b>{{books.bookName}}</b>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Mheader from "../base/Mheader.vue";
    import Swiper from "../base/Swiper.vue";
    import {getSliders,gethotbooks} from "../api/index.js";
    export default {
        created(){
            this.getSlider();
            this.gethotBook();
        },
        data(){
            return {
                sliders:[],
                hotsBooks:[]   
            }
        },
        components:{
            Mheader,
            Swiper
        },
        methods:{
            async getSlider(){
                //取一个别名，或者在返回数据时做一个拦截
               // let {data:sliders} = await getSliders(); 
               // this.sliders = sliders;
               this.sliders = await getSliders(); 
            },
            async gethotBook(){
                this.hotsBooks = await gethotbooks();
            }

        }
    }
</script>
<style>
    li {
        width: 50%;
        float: left;
        text-align: center;
        margin: 5px 0;
    }
</style>