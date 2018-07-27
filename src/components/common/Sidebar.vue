<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#AAB9D0" active-text-color="#fff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            <i :class="subItem.icon"></i><span slot="title">{{ subItem.title }}</span>
                        </el-menu-item>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        name: 'Sidebar',
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'iconfont icon-home',
                        index: '/homePage',
                        title: '主页'
                    },
                    {
                        icon: 'el-icon-document',
                        index: 'self',
                        title: '我的工单',
                        subs: [
                            {
                                icon: 'iconfont icon-itquestion',
                                index: '/self/itquestion',
                                title: '我的IT问题'
                            },
                            {
                                icon: 'iconfont icon-mycheck',
                                index: '/self/check',
                                title: '我的审核'
                            },
                            {
                                icon: 'iconfont icon-mymission',
                                index: '/self/mission',
                                title: '我的任务'
                            }
                        ]
                    },
                ]
            }
        },
        methods: {
            // 获取菜单栏
            getMenu() {
                this.$http.get(`${process.env.API_HOST}/menus`)
                .then(data => {
                    console.log(data);
                })
                .catch(function(error) {
                    console.log('catched:', error);
                });
            }
                
        },
        computed:{
            onRoutes(){
                // return this.$route.path.replace('/','');//TODO  what the hell
            }
        },
        created(){
            this.getMenu();

            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }

    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 240px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
