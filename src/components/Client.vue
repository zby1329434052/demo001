<template>
    <div class="client_container">
            <div class="client_box">
                <h2>Client功能页</h2>
                <h3>取货信息</h3>
                <span>{{ $store.state.order }}</span>

                <el-form ref="clientFormRef" :model="clientForm" :rules="clientFormRules"
                         label-width="0px" class="client_form">
                    <el-form-item prop="phone">
                        <el-input v-model="clientForm.phone" placeholder="请输入Client手机号"></el-input>
                    </el-form-item>
                    <el-form-item prop="order">
                        <el-input v-model="clientForm.order" placeholder="请输入取货码"></el-input>
                    </el-form-item>
                    <el-form-item prop="address">
                        <el-input
                                type="textarea"
                                :rows="2"
                                placeholder="请输入详细地址"
                                v-model="clientForm.address">
                        </el-input>
                    </el-form-item>
                    <el-button type="primary" @click="requestDelivery">请求派送</el-button>
<!--                    <el-button type="primary" @click="sendClientPhone">请求派送</el-button>-->
                </el-form>
            </div>
    </div>
</template>

<script>
    export default {
        name: "Client",
        data() {
            return {
                clientForm: {
                    phone: '',
                    order: '',
                    address: ''
                },
                clientFormRules: {
                    //验证用户名是否合法
                    phone: [
                        {required: true, message: "请输入手机号", trigger: "blur"},
                        {min: 11, max: 11, message: '长度为11个数字', trigger: 'blur'}
                    ],
                    //验证密码是否合法
                    order: [
                        {required: true, message: "请输入订单号", trigger: "blur"},
                        {min: 6, max: 10, message: '长度在 6 到 10 个字符', trigger: 'blur'}
                    ],
                    address: [
                        {required: true, message: "请输入详细地址", trigger: "blur"},
                        {min: 6, max: 50, message: '长度在 6 到 60 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            requestDelivery() {
                this.$refs.clientFormRef.validate(valid => {
                    if (!valid) return;
                    this.$store.commit({
                        type: 'setRequestDelivery',
                        phone: this.clientForm.phone,
                        order: this.clientForm.order,
                        address: this.clientForm.address
                    });
                    alert('正在请求');
                    this.$router.push('/staff');
                })
            },
            // sendClientPhone() {
            //     this.$store.commit('setClientPhone',this.clientForm.phone);
            //     console.log('正在请求');
            //     this.$router.push('/staff');
            // }
        }
    }
</script>

<style scoped>
    h2{
        text-align: center;
    }
    .client_form{
        margin-top: 10px;
    }
    .client_container{
        background-color: cadetblue;
        height: 100%;
    }
    .client_box {
        padding-top: 20px;
        width: 600px;
        height: 400px;
        background-color: #f3f3f3;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    button{
        margin-left: 500px;

    }
</style>