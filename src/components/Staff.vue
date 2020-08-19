<template>
    <div class="staff_container">
        <div class="staff_box">
            <h2>Staff功能页</h2>

            <el-form ref="staffFormRef" :model="staffForm" :rules="staffFormRules"
            label-width="0px" class="staff_form">
                <el-form-item prop="number">
                    <el-input v-model="staffForm.number" placeholder="请输入Client手机号"></el-input>
                </el-form-item>
                <el-form-item prop="order">
                    <el-input
                            type="textarea"
                            :rows="2"
                            placeholder="请输入Client的取货码及相关信息"
                            v-model="staffForm.order">
                    </el-input>
                </el-form-item>
                <el-button type="primary" @click="sendMessage">发送信息</el-button>




<!--                <br>-->
<!--                <router-link itemtype="" to="/baidumappath">map</router-link>-->
            </el-form>


            <div class="client_request">
                <h2>client请求信息</h2>
                Client手机号：<span>{{ $store.state.clientPhone }}</span>
                Client订单号：<span>{{ $store.state.clientOrder }}</span>
                <br>
                Client地址：<span>{{ $store.state.clientAddress }}</span>
                <el-button type="success" @click="baidu_map" >确认派送</el-button>


            </div>

        </div>


        <router-view></router-view>
    </div>
</template>

<script>
    // import BaiduMap from "./BaiduMap";
    export default {
        name: "Staff",
        data() {
            return {
                staffForm: {
                    number: '',
                    order: ''
                },
                staffFormRules: {
                    //验证用户名是否合法
                    number: [
                        {required: true, message: "请输入手机号", trigger: "blur"},
                        {min: 11, max: 11, message: '长度为11个数字', trigger: 'blur'}
                    ],
                    //验证密码是否合法
                    order: [
                        {required: true, message: "请输入取货信息", trigger: "blur"},
                        {min: 6, max: 50, message: '长度在 6 到 60 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            sendMessage() {
                this.$refs.staffFormRef.validate(valid => {
                    if (!valid) return;
                this.$store.commit('setOrder',this.staffForm.order);
                alert('发送成功');
                this.$router.push('/client');
                });
            },
            baidu_map() {
                alert('正在派送');
                this.$router.push('./baidumappath');
            }
        },
    }
</script>

<style scoped>
    h2{
        text-align: center;
    }
    .staff_container{
        background-color: cadetblue;
        height: 100%;
    }
    .staff_box {
        padding-top: 20px;
        width: 600px;
        height: 420px;
        background-color: #f3f3f3;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    button{
        /*display: flex;*/
        /*align-items: flex-end;*/
        /*justify-content: flex-end;*/
        margin-left: 500px;

    }


    .client_request{
        text-align: center;
    }


</style>