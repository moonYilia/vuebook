<template>
    <div class="header">
        <slot></slot>
        <span class="iconfont icon-fanhui" v-if="back" @click="goback"></span>
    </div>
</template>
<script>
    export default {
        props:{
            "back":{
                "type":Boolean,
                "default":false
            }
        },
        methods:{
            goback(){
                this.$router.go(-1);//返回
            }
        }
    }
</script>
<style lang="less">
    .header {
        position:fixed;
        left:0;
        top:0;
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
        background-color:skyblue;
        span {
            position:absolute;
            left:10px;
            font-size:28px;
        }
    }
</style>