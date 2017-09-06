<template>
<div :class="{'shrink' : toSmall}" class="head-main">
    <header class="head-wrap">
        <img class="logo" src="../assets/baoxing_biglogo.png">
        <ul class="nav" :class="{'openMenu' : open}">
            <transition name="fade">
                <li class="li1 fn-clear" v-show="!toSmall">
                    <div class="info1"><img :src="textImg"></div>
                    <div class="info2">
                        <div class="left">
                            <span class="fn-mr-5">SH600845</span>
                            <span>宝信软件</span>
                            <span class="fn-mr--8"><i class="iconfont icon-sanjiao fn-red"></i></span>
                            <span class="fn-mr-5">15.580</span>
                            <span class="fn-mr-50">0.32%</span>

                            <span class="fn-mr-5">客服热线</span>
                            <span class="fn-mr-5">800-820-0020</span>
                            <span class="fn-mr-10">400-821-0860</span>
                        </div>
                        <div class="right">
                            <a class="fn-mr-5"><i class="iconfont icon-weibo"></i></a>
                            <a><i class="iconfont icon-weixin"></i></a>
                        </div>
                    </div>
                </li>
            </transition>
            <li class="li2 fn-clear">
                <div class="menus fn-clear">
                    <a href="#" class="active">专业领域</a>
                    <a href="#">行业应用</a>
                    <a href="#">新闻中心</a>
                    <a href="#">投资者关系</a>
                    <a href="#">加入我们</a>
                </div>

                <div class="search" v-show="!toSmall">
                    <span>繁</span>
                    <span>｜</span>
                    <span>EN</span>
                    <a v-if="!searchVisible" @click="searchVisible=true"><i class="iconfont icon-chaxun"></i></a>
                    <a v-else @click="searchVisible=false"><i class="iconfont icon-shanchu fn-blue"></i></a>
                </div>
            </li>
            <span class="operate-wrap">
                <a @click="open=false"><i class="iconfont icon-weibiaoti101"></i></a>
            </span>
        </ul>
        <span class="operate-wrap">
            <a @click="open=true"><i class="iconfont icon-icon-test"></i></a>
        </span>
    </header>
    <transition name="fade">
        <div class="search-wrap" :class="{'visible' : searchVisible}" v-show="!toSmall">
            <div class="search-content fn-clear">
                <input placeholder="Search">
                <button><i class="iconfont icon-chaxun"></i></button>
            </div>
        </div>
    </transition>
</div>
</template>
<script>
import textImg from '@/assets/slogan.png'
export default {
    data() {
        return {
            searchVisible: false,
            open: false,
            textImg
        }
    },
    props: {
        scrollTop   : {
            type    : [Number],
            default : 0
        }
    },
    computed: {
        toSmall() {
            return this.scrollTop >= 250;
        }
    },
    watch: {
        searchVisible(value) {
            this.$emit('search', this.searchVisible)
        },
        scrollTop(value) {
            
        }
    }
}
</script>
<!-- head -->
<style lang="scss">
    @import '../style/base/param.scss';
    .head-main {
        transition: all 0.3s;
        * {
            transition: inherit;
        }
    }
    .head-wrap {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 144px;
        padding: 0 60px;
        z-index: 99;
        background: $bgcolor;
        min-width: 1080px;
        .logo {
            position: absolute;
            display: inline-block;
            top: 40px;
            left: 60px;
        }
        .nav {
            margin-left: 294px;
            position: relative;
            .li1 {
                margin-top: 38px;
                padding-bottom: 16px;
                margin-bottom: 16px;
                border-bottom: 1px solid $grey1;
                .info1 {
                    float: left;
                    display: none;
                }
                .info2 {
                    .left {
                        float: left;
                        margin-right: 60px;
                    }
                    .right {
                        position: absolute;
                        right: 0;
                        top: -4px;
                        color: $blue;
                        .iconfont {
                            font-size: 2rem;
                        }
                    }
                }
            }
            .li2 {
                line-height: initial;
            }
            .menus {
                float: left;
                a {
                    float: left;
                    display: block;
                    margin-right: 40px;
                }
                a:last-child {
                    margin-right: 0;
                }
                .active {
                    color: $blue;
                }
            }
            .search {
                float: right;
                padding-right: 35px;
                .iconfont {
                    position: absolute;
                    bottom: -1px;
                    right: 0;
                    font-size: 2rem;
                }
            }
        }
        .operate-wrap {
            display: none;
        }
    }
    .search-wrap {
        position: fixed;
        width: 100%;
        top: 144px;
        z-index: 99;
        background: $bgcolor;
        height: 0;
        overflow: hidden;
        &.visible {
            height: 150px;
            .search-content {
                opacity: 1;
            }
        }
        .search-content {
            padding-top: 20px;
            width: 660px;
            margin: 0 auto;
            opacity: 0;
            transition: inherit;
        }
        input {
            float: left;
            height: 50px;
            width: 590px;
            border: 1px solid $grey3;
            margin: 0 auto;
            padding: 0 20px;
        }
        button {
            float: left;
            background: $blue;
            height: 50px;
            width: 70px;
            &:active {
                background: $bluedark;
            }
            .iconfont {
                color: $white;
                font-size: 2rem;
            }
        }
    }
    
    .shrink {
        .head-wrap {
            height: 120px;
            background: $white;
            box-shadow: 0 1px 15px 1px $grey1;
            .logo {
                transform: scale(0.63);
                transform-origin: 0 0;
            }
            .nav {
                margin-left: 246px;
                .li2 {
                    margin-top: 40px;
                }
                .menus {
                    a {
                        line-height: 40px;
                        padding: 0 20px;
                        margin-right: 40px;
                    }
                    a:last-child {
                        margin-right: 0;
                    }
                    .active {
                        background: $blue;
                        color: $white;
                    }
                }
            }
        }
        .search-wrap {
            top: 120px;
        }
    }
    @media only screen and (max-width: 768px) {
        .shrink .head-wrap, .head-wrap {
            height: 50px;
            padding: 0 30px;
            background: $bgcolor;
            min-width: initial;
            box-shadow: initial;
            .logo {
                transform: scale(0.28);
                transform-origin: 0 0;
                left: 30px;
                top: 15px;
            }
            .nav {
                margin-left: -30px;
                margin-right: -30px;
                margin-top: -50px;
                z-index: 3;
                top: -550px;
                opacity: 0;
                transition: all 0.8s;
                &.openMenu {
                    top: 0;
                    opacity: 1;
                }
                .li1 {
                    display: none;
                }
                .li2 {
                    margin-top: 50px;
                }
                .menus {
                    width: 100%;
                    padding-top: 50px;
                    padding-bottom: 50px;
                    background: $bgcolor;
                    a {
                        line-height: 40px;
                        padding: 0;
                        margin-right: 0;
                        font-size: 1.6rem;
                        width: 100%;
                        text-align: center;
                    }
                    a:last-child {
                        margin-right: 0;
                    }
                    .active {
                        background: none;
                        color: $blue;
                    }
                }
                .search {
                    display: none;
                }
            }
            .operate-wrap {
                display: block;
                position: absolute;
                top: 10px;
                right: 10px;
                color: $blue;
                font-size: 2.4rem;
            }
        }
        .search-wrap {
            display: none;
        }
    }
    @media only screen and (min-width: 768px) {

    }
    @media only screen and (min-width: 992px) {

    }
    @media only screen and (min-width: 1200px) {
        .head-wrap {
            padding: 0 80px;
            .logo {
                left: 80px;
            }
            .nav {
                .menus {
                    a {
                        margin-right: 80px;
                    }
                }
            }
        }
    }
    @media only screen and (min-width: 1400px) {
        .head-wrap {
            .nav {
                .li1 {
                    .info1 {
                        display: block;
                    }
                    .info2 {
                        float: right;
                    }
                }
            }
        }
        .shrink {
            .head-wrap {
                .logo {
                    transform: scale(0.63);
                    transform-origin: 0 0;
                    left: 360px;
                }
                .nav {
                    margin-left: 526px;
                }
            }
        }
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
        opacity: 0;
        height: 0 !important;
        margin-top: 0 !important;
        margin-bottom: 0 !important;
        border-bottom: none !important;
        padding-bottom: 0 !important;
    }
</style>