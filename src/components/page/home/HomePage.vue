<template>
    <el-container class="home-wrap">
        <el-main class="home-main">
            <div class="home-page">
                <div class="home-header">
                    <img :src="logo" alt="">
                    <span>IAM管理系统</span>
                </div>

                <div class="home-contend">
                    <div class="home-app" @click="()=>{this.$router.push('admin/user') }">
                        <div class="icon"><img :src="application" alt=""></div>
                        <p>权限管理系统</p>

                        <div class="home-app-go">立即进入系统>></div>
                    </div>

                    <div class="home-app">
                        <div class="icon"><img :src="application" alt=""></div>
                        <p>A应用</p>

                        <div class="home-app-go">立即进入系统>></div>
                    </div>

                    <div class="home-app">
                        <div class="icon"><img :src="application" alt=""></div>
                        <p>B应用</p>

                        <div class="home-app-go">立即进入系统>></div>
                    </div>

                    <div class="home-app" @click="jump">
                        <div class="icon"><img :src="application" alt=""></div>
                        <p>运营管理系统</p>

                        <div class="home-app-go">立即进入系统>></div>
                    </div>

                    <div class="home-app">
                        <div class="icon"><img :src="application" alt=""></div>
                        <p>审批系统</p>

                        <div class="home-app-go">立即进入系统>></div>
                    </div>
                </div>

            </div>
        </el-main>

    </el-container>
</template>

<script>
    import application from '../../../../static/img/application.png';
    import Operation from '../../../../static/img/Operation.png';
    import Permission from '../../../../static/img/Permission.png';
    import logo from '../../../../static/img/logo.png';
    export default {
        name: "Home",
        data(){
            return{
                application,
                Operation,
                Permission,
                logo,
            }
        },
        methods: {
            jump(){
                location.href = 'http://localhost:8080/#/self/mission';
            }
        }
    }
</script>

<style lang="less">
    @import "./HomePage";
    .el-main{
        padding: 0px;
    }
    .home-wrap{
        background: #fff;
        width: 100%;
        height: 100%;
    }
    .home-main{
        background: url("../../../../static/img/homeBg.jpg") no-repeat center;
        position: relative;
        margin: 0 auto;
    }
</style>