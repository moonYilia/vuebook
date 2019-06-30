<template>
    <div>
        <Mheader>列表</Mheader>
        <div class="mainContent">
            <ul>
                <li v-for="book in allBooks">
                    <img :src="book.bookCover"/>
                    <div>
                      <h4>{{book.bookName}}</h4>
                      <p>{{book.bookDesc}}</p>
                      <b>{{book.bookPrice}}</b>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Mheader from "../base/Mheader.vue";
    import {getallBooks} from "../api/index.js";
    export default {
        data(){
            return {
                allBooks:[]
            }
        },
        created(){
            this.getAllBook();
        },
        methods:{
            async getAllBook(){
                    this.allBooks = await getallBooks();
            }
        },
        components:{
            Mheader
        }
    }
</script>
/*<style scoped lang="less">
     .mainContent ul {
        display: flex;
        flex-wrap: wrap;
    }
    .mainContent ul li {
        display:flex;
    }

    .mainContent ul h2{
        line-height: 30px;
        height: 30px;
    }

    .mainContent ul b {
        font-size: 20px;
        color: orange;
    }
    .mainContent ul li div {
        padding: 10px 0;
    }
    .mainContent ul li p {
        margin: 10px 0;
    }
</style>*/

<style scoped>
    .mainContent ul {
        display: flex;
        flex-wrap: wrap;
    }

    .mainContent ul li {
        display: flex;
        
    }

    .mainContent ul h4{
        line-height: 30px;
        height: 30px;
    }

    .mainContent ul b {
        font-size: 20px;
        color: orange;
    }

    .mainContent ul li div {
        padding: 10px 0;
    }

    .mainContent ul li p {
        margin: 10px 0;
    }

    .mainContent button {
        outline: none;
        border: none;
        width: 80px;
        height: 30px;
        border-radius: 8px;
        background: #afd9ee;
        font-size: 18px;

    }
</style>