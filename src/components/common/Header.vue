<template>
    <div class="header">
        <div class="header-main">
            <div class="logo"></div>
            <el-menu :default-active="activeIndex"
                     background-color="#39B2F9"
                     text-color="#fff"
                     active-text-color="#fff"
                     class="el-menu-demo"
                     mode="horizontal"
                     @select="handleSelect">
                <el-menu-item index="1">用户管理</el-menu-item>
                <el-menu-item index="2">组织管理</el-menu-item>
                <el-menu-item index="3">系统管理</el-menu-item>
                <el-menu-item index="4"><a href="#">角色管理</a></el-menu-item>
                <el-menu-item index="5"><a href="#">权限管理</a></el-menu-item>
                <el-menu-item index="6"><a href="#">我的</a></el-menu-item>
            </el-menu>
        </div>
    </div>
</template>
<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                activeIndex: '1',
            }
        },
        computed:{
        },
        methods:{
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>
<style lang="less">
    .header {
        position: relative;
        box-sizing: border-box;
        width: 100%;
        background: #39B2F9;
        height: 100px;
        font-size: 20px;
        color: #fff;
        margin: 0 auto;
    }
    .header-main{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        overflow: hidden;
    }
    .logo{
        float: left;
        background: url("../../../static/img/logo-s.png");
        width: 220px;
        height: 43px;
        margin-top: 25px;
    }
    .el-menu-demo{
        float: right;
        height: 100%;
        .is-active{
            background: #279CF6!important;
            border-bottom: 0px!important;
        }
        li{
            border-bottom: 0px!important;
            height: 100%!important;
            line-height: 100px!important;
        }
    }
</style>
