<template>
    <el-container class="login-wrap">
        <el-main class="login-main">
            <router-view></router-view>
        </el-main>

    </el-container>
</template>

<script>
    import logo from "../../../static/img/logo.png";
    export default {
        data: function(){
            return {
                Logo: logo,
            }
        },
        methods: {
        }
    }
</script>

<style scoped lang="less">
    .login-wrap{
        position: relative;
        //background: url("../../../../static/img/bg.png")no-repeat center;
        width:100%;
        height:100%;
        background-color: #fff;
    }
    .login-main{
        position: relative;
        background: url("../../../static/img/loginBg.jpg")no-repeat center;
        text-align: right;
    }
</style>