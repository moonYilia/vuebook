<template>
    <div class="footer">
        <router-link to="/home">
            <span class="iconfont icon-shouye"></span>
            首页
        </router-link>
        <router-link to="/list">
            <span class="iconfont icon-liebiao"></span>
            列表
        </router-link>
        <router-link to="/add">
            <span class="iconfont icon-tianjia"></span>
            添加
        </router-link>
        <router-link to="/collect">
            <span class="iconfont icon-star__easyico"></span>
            收藏
        </router-link>
    </div>
</template>
<script>
    export default {

    }
</script>
<style scoped lang="less">
    .footer {
        position:fixed;
        left:0;
        bottom:0;
        width:100%;
        height:40px;
        display:flex;
        a {
            flex:1;
            display:flex;
            flex-direction:column;
            align-items:center;
            justify-content:center;
        }
        a.router-link-active {
            color:red;
        }
    }
</style>