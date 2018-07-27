<template>
    <el-container class="login-wrap">
        <el-main class="login-main">
            <div class="ms-login">
                <div class="login-logo">

                </div>


                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
                    <div class="login-modal"></div>
                    <el-form-item prop="username">
                        <el-input v-model="ruleForm.username" placeholder="用户名/邮箱">
                            <template slot="prepend">
                                <i class="iconfont icon-username"></i>
                            </template>
                        </el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" placeholder="密码" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                            <template slot="prepend">
                                <i class="iconfont icon-password"></i>
                            </template>
                        </el-input>
                    </el-form-item>

                    <el-form-item class="login-submit">
                        <div class="login-btn">
                            <el-button type="success" @click="submitForm('ruleForm')">登录</el-button>
                        </div>
                    </el-form-item>



                </el-form>
            </div>
        </el-main>

    </el-container>

</template>

<script>
    import * as ACTION from '../../../action/LoginAction';
    export default {
        data: function(){
            return {
                ruleForm: {
                    username: '',
                    password: '',
                },
                rules: {
                    username: [
                        { required: true, message: '请输入用户名', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        ACTION.login(this,{
                            password: this.ruleForm.password,
                            username: this.ruleForm.username
                        }).then(res => {
                            if(!res){
                                return;
                            }

                            this.$router.push('/home');

                        });

                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style lang="less">
    @import "LoginPage";
    .login-wrap{
        position: relative;
        //background: url("../../../../static/img/bg.png")no-repeat center;
        width:100%;
        height:100%;
        background-color: #fff;
    }
    .login-main{
        position: relative;
        background: url("../../../../static/img/loginBg.jpg")no-repeat center;
        text-align: right;
    }
</style>