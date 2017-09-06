<template>
<div class="fn-clear">
    <section class="section-wrap-2">
        <c-title title="最新资讯" engTitle="News"></c-title>
        <div class="list-wrap">
            <ul class="info-list">
                <li class="item" v-for="i in 5" :key="i">
                    <div class="whole fn-clear">
                        <div class="part left">
                            <img :src="news1">
                        </div>
                        <div class="part right">
                            <div>
                                <span class="label-primary">公司新闻</span>
                                <p>
                                    宝信软件成功签约龙山县智慧农业项目
                                </p>
                                <span class="time">
                                    2017.05.10
                                </span>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="last">
                    <div class="content">
                        <p>
                            READ MORE
                        </p>
                        <span class="arrow"><i class="iconfont icon-jiantou"></i></span>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</div>
</template>
<script>
import cTitle from './cTitle'
import news1 from '../assets/news1.png'
export default {
    data() {
        return {
            news1
        }
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scope>
@import '../style/base/param';
.info-list {
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 0;
    margin-top: 0;
    .item:nth-child(1)  {
        margin-top: 0;
    }
    .item:nth-child(2) {
        margin-top: 0;
    }
    .item, .last {
        float: left;
        position: relative;
        width: calc(50% - 40px);
        min-width: 440px;
        margin-top: 40px;
        margin-left: 20px;
        margin-right: 20px;
    }
    .item {
        background: $blue;
        cursor: pointer;
        .whole {
            transition: all 0.3s;
            &:hover {
                transform: translate(-8px, -8px)
            }
        }
    }
    .last {
        background: $white;
        vertical-align: middle;
        cursor: pointer;
        transition: all 0.3s;
        &:hover {
            color: $white;
            background: $blue;
        }
        .content {
            position: relative;
            padding: 16.5% 0;
        }
        .content > * {
            position: absolute;
            top: 50%;
        }
        p {
            width: 100%;
            text-align: center;
            display: inline-block;
            margin: -1rem 0 0 0;
            font-size: 2.4rem
        }
        .arrow {
            display: inline-block;
            margin-top: -2.5rem;
            right: 40px;
            i.iconfont.icon-jiantou {
                font-size: 4.8rem;
            }
        }
    }
    .part {
        float: left;
        width: 50%;
        position: relative;
        padding: 16.5% 0;
        overflow: hidden;
        font-family: $fontlight;
        color: $blue;
        &.right {
            background: $white;
            & > div {
                padding: 20px;
                bottom: 0;
            }
        }
        & > * {
            position: absolute;
            top: 0;
            left: 0;
        }
        p {
            font-size: 1.6rem;
        }
        img {
            width: 100%;
        }
    }
}
.time {
    color: $blue;
}
@media only screen and (max-width: 768px) {
    ::-webkit-scrollbar {
        display: none;
    }
    .list-wrap {
        margin-top: -10px;
        padding-top: 10px;
        overflow-y: scroll;
    }
    .info-list {
        margin-left: -15px;
        margin-right: -15px;
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        .item, .last {
            width: calc(50% - 30px);
            min-width: 350px;
            margin-top: 0;
            margin-left: 15px;
            margin-right: 15px;
        }
        .last {
            .content {
                padding: 20.5% 0;
            }
        }
        .part {
            padding: 20.5% 0;
        }
        .item .whole:hover {
            transform: none;
        }
        .item .whole:active {
            transform: translate(-8px, -8px);
        }
        .last:hover {
            color: inherit;
            background: $white;
        }
        .last:active {
            color: $white;
            background: $blue;
        }
        .part.right {
            font-size: 1.2rem;
            p {
                font-size: 1.44rem;
            }
        }
    }
}
@media only screen and (min-width: 768px) {

}
@media only screen and (min-width: 992px) {

}
@media only screen and (min-width: 1200px) {
    .info-list {
        .part.right {
            p {
                font-size: 2.0rem;
            }
        }
    }
}
@media only screen and (min-width: 1800px) {
    .info-list {
        .part.right {
            p {
                font-size: 2.4rem;
            }
            & > div {
                padding: 60px 40px;
            }
        }
        .last .arrow {
            right: 80px;
        }
    }
}
</style>
