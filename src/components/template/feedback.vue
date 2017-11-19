<template>
<!-- 意见反馈模版 -->
<div>
    <ul class="feedback-form">
        <li>
            <span>公司名称</span>
            <span><input v-model="feedbackParams.company" :class="{'error' : feedbackError === 'company'}"/></span>
        </li>
        <li>
            <span>姓名</span>
            <span><input v-model="feedbackParams.name" :class="{'error' : feedbackError === 'name'}"/></span>
        </li>
        <li>
            <span>职务</span>
            <span><input v-model="feedbackParams.job" :class="{'error' : feedbackError === 'job'}"/></span>
        </li>
        <li>
            <span>手机</span>
            <span><input v-model="feedbackParams.phone" :class="{'error' : feedbackError === 'phone'}"/></span>
        </li>
        <li>
            <span>电子邮件</span>
            <span><input v-model="feedbackParams.email" :class="{'error' : feedbackError === 'email'}"/></span>
        </li>
        <li class="feedback-mark">
            <span>反馈信息</span>
            <span><textarea v-model="feedbackParams.messages" :class="{'error' : feedbackError === 'messages'}"/></span>
        </li>
        <li class="feedback-code">
            <span>验证码</span>
            <span><input v-model="feedbackParams.verifyCode" @keyup.13="submitFeedback" :class="{'error' : feedbackError === 'verifyCode'}"/></span>
            <span><img :src="verifyCode" @click="setVerifyCode" ref="VERIFY_CODE"></span>
        </li>
        <li class="feedback-operate">
            <button class="btn-primary" @click="submitFeedback">提交</button>
            <button class="btn-default" @click="resetFeedbackParams">重置</button>
        </li>
    </ul>
</div>
</template>
<script>
import {API_GetVerifyCode, API_AddFeedback} from '@/fetch/restApi'
export default {
    data() {
        return {
            verifyCode: '',
            feedbackError: '',
            feedbackParams: {
                name: '',
                phone: '',
                email: '',
                company: '',
                job: '',
                messages: '',
                verifyCode: ''
            }
        }
    },
    methods: {
        resetFeedbackParams() {
            this.setVerifyCode()
            this.feedbackError = ''
            for (let i in this.feedbackParams) {
                this.feedbackParams[i] = ''
            }
        },
        checkFeedbackParams() {
            this.feedbackError = ''
            if (!this.feedbackParams.company) {
                this.feedbackError = 'company'
                return false
            } else if (!this.feedbackParams.name) {
                this.feedbackError = 'name'
                return false
            } else if (!this.feedbackParams.job) {
                this.feedbackError = 'job'
                return false
            } else if (!this.feedbackParams.phone) {
                this.feedbackError = 'phone'
                return false
            } else if (!(/^1[3|4|5|7|8][0-9]{9}$/.test(this.feedbackParams.phone))) {
                this.feedbackError = 'phone'
                alert('手机号码格式错误！')
                return false
            } else if (!this.feedbackParams.email) {
                this.feedbackError = 'email'
            } else if (!(/^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/.test(this.feedbackParams.email))) {
                this.feedbackError = 'email'
                alert('邮箱格式填写错误！')
                return false
            } else if (!this.feedbackParams.messages) {
                this.feedbackError = 'messages'
                return false
            } else if (!this.feedbackParams.verifyCode) {
                this.feedbackError = 'verifyCode'
                return false
            }
            return true
        },
        submitFeedback() {
            if (this.checkFeedbackParams()) {
                API_AddFeedback({
                    ...this.feedbackParams
                }).then(success => {
                    this.$router.push({path:'/feedbackSuccess'})
                }).catch(error => {
                    if (error.data.code === 1001) alert('验证码错误')
                    else alert('提交反馈失败')
                    this.setVerifyCode()
                }) 
            }
        },
        setVerifyCode() {
            API_GetVerifyCode().then(success => {
                this.verifyCode = 'data:image/png;base64,' + success.data.content
            }).catch(error => {
                
            })
        }
    },
    mounted() {
        if (this.$refs.VERIFY_CODE) {
            this.setVerifyCode()
        }
    }
}
</script>

<style lang="scss" scoped>
@import "../../style/param";
.feedback-form {
    li {
        min-height: 50px;
    }
    li span {
        display: inline-block;
        vertical-align: middle;
        &:first-of-type {
            width: 80px;
            padding-right: 20px;
            text-align: right;
        }
        &:nth-of-type(2) {
            width: calc(100% - 120px);
            input {
                width: 100%;
                border: 0;
                border-bottom: 1px solid $grey1;
                background: none;
                padding:  10px 5px;
                color: $blue;
                &:focus {
                    border-color: $blue;
                }
                &.error {
                    border-color: $red;
                }
            }
        }
    }
    .feedback-mark {
        margin-top: 20px;
        textarea {
            height: 100px;
            width: 100%;
            resize:none;
            background: none;
            border-color: $grey1;
            padding: 10px;
            &.error {
                border-color: $red;
            }
        }
    }
    .feedback-code {
        margin-top: 20px;
        span:nth-of-type(2) {
            width: 30%;
        }
        span:nth-of-type(3) {
            vertical-align: bottom;
            height: 40px;
            width: 120px;
            img {
                height: 100%;
                width: 100%;
            }
        }
    }
    .feedback-operate {
        margin-top: 20px;
        padding-left: 85px;
    }
}
.btn-primary, .btn-default {
    width: 30%;;
    height: 30px;
    line-height: 30px;
    text-align: center;
    margin-right: 20px;
    font-weight: normal;
}

.btn-primary {
    background: $blue;
    color: $white;
    &:active {
        background: $bluelight;
    }
}

.btn-default {
    background: $grey1;
    &:active {
        background: $grey4;
    }
}

</style>
