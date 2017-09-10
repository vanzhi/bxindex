<template>
    <div class="main" :class="{'open' : open}">
        <p-head :scrollTop="scrollTop" @search="(serachVisible) => {open = serachVisible}"></p-head>
        <p-banner></p-banner>
        <p-core></p-core>
        <p-news></p-news>
        <p-video></p-video>
        <p-books></p-books>
        <p-map></p-map>
        <p-bottom></p-bottom>
        <!-- <div class="back-top"><i class="iconfont icon-uparrow"></i></div> -->
        <transition name="fade">
            <div class="back-top" @click="backTop" v-show="scrollTop > clientHeight"><img :src="backImg"><div>TOP</div></div>
        </transition>
    </div>
</template>
<script>
import pHead from './pHead'
import pBanner from './pBanner'
import pCore from './pCore'
import pNews from './pNews'
import pVideo from './pVideo'
import pBooks from './pBooks'
import pMap from './pMap'
import pBottom from './pBottom'
import backImg from '@/assets/huidaodingbu.png'

function getScrollTop(){
    var scrollTop = 0;
    
    if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
    } else if (document.body){
        scrollTop = document.body.scrollTop;
    }
    return scrollTop;
}

function backTo(top, time) {
    let clientHeight    = document.documentElement.clientHeight
    let v               = clientHeight / time / 100;
    let nowHeight       = 0;
    let el              = {};
    if (document.documentElement && document.documentElement.scrollTop) {
        el = document.documentElement;
    } else if (document.body){
        el = document.body;
    }
    let counter = setInterval(_ => {
        if (el.scrollTop <= top) {
            clearInterval(counter);
            counter = null;
            return;
        }
        nowHeight += v;
        el.scrollTop = el.scrollTop - nowHeight;
    }, 10)
}

export default {
    data() {
        return {
            scrollTop: 0,
            clientHeight: 0,
            open: false,
            time: 2,
            backImg
        }
    },
    methods: {
        backTop() {
            backTo(0, this.time);
        }
    },
    mounted() {
        window.onscroll = (value) => {
            this.scrollTop = getScrollTop()
            this.clientHeight = document.documentElement.clientHeight;
        }
    },
    components: {
        pHead,
        pBanner,
        pCore,
        pNews,
        pVideo,
        pBooks,
        pMap,
        pBottom
    }
}
</script>
<style>
.back-top {
    transform: translateZ(0)
}
</style>

<style lang="scss" scoped>
@import '../style/base/param';
.main {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-width: 1080px;
    padding-top: 144px;
    transition: all 0.5s;
    &.open {
        padding-top: 294px;
    }
}
.back-top {
    position: fixed;
    right: 0;
    bottom: 20%;
    background: $blue;
    width: 80px;
    height: 200px;
    text-align: center;
    padding-top: 40px;
    color: $white;
    font-family: $fontlight;
    box-shadow: 0 0 1px 0 $white;
    cursor: pointer;
    img {
        margin-bottom: 40px;
    }
    .iconfont {
        font-size: 4.8rem;
        color: $white;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0
}
@media only screen and (max-width: 768px) {
    .main {
        min-width: initial;
        padding-top: 50px;
    }
    .back-top {
        display: none;
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {
    
}
@media only screen and (min-width: 1200px) {
    
}
</style>
