<template>
    <div class="user">
        <div class="left"></div>

        <div class="user-main">
            <div class="user-main-operation">
                <el-tag
                        v-for="tag in tags"
                        :key="tag.name"
                        color="#68C4F9"
                        :hit="tag.name === focusTags"
                >
                    {{tag.name}}
                </el-tag>

                <el-button type="primary" @click="dialogFormVisible = true">+ 添加用户</el-button>
            </div>

            <div class="user-main-table">
                <el-table
                        ref="multipleTable"
                        :data="tableData3"
                        tooltip-effect="dark"
                        style="width: 100%"
                        @selection-change="handleSelectionChange">
                    <el-table-column
                            type="selection"
                            width="55">
                    </el-table-column>
                    <el-table-column
                            label="日期"
                            width="120">
                        <template slot-scope="scope">{{ scope.row.date }}</template>
                    </el-table-column>
                    <el-table-column
                            prop="name"
                            label="姓名"
                            width="120">
                    </el-table-column>
                    <el-table-column
                            prop="address"
                            label="地址"
                            show-overflow-tooltip>
                    </el-table-column>
                </el-table>
                <div style="margin-top: 20px">
                    <!--<el-button @click="toggleSelection([tableData3[1], tableData3[2]])">切换第二、第三行的选中状态</el-button>-->
                    <!--<el-button @click="toggleSelection()">取消选择</el-button>-->
                </div>
            </div>


        </div>

        <div class="right"></div>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="用户名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="手机" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户状态" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="关联应用" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    import * as ACTION from '../../../action/UserAction';
    export default {
        name: "User",
        data(){
            return {
                tableData3: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                multipleSelection: [],
                focusTags:'锁定用户',
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px',
                tags: [
                    { name: '关联角色', },
                    { name: '关联权限', },
                    { name: '关联系统', },
                    { name: '关联组织', },
                    { name: '锁定用户', }
                ]
            }
        },
        created(){
            ACTION.findAllUser(this,{

            }).then(res => {
                if(!res){
                    return;
                }
                console.info(res);

            });
        },
        methods: {
            toggleSelection(rows) {
                if (rows) {
                    rows.forEach(row => {
                        this.$refs.multipleTable.toggleRowSelection(row);
                    });
                } else {
                    this.$refs.multipleTable.clearSelection();
                }
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            }
        }
    }
</script>

<style lang="less">
    @import "User";
</style>