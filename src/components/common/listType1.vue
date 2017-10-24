<template>
    <router-link tag="li" :to="{name:'article', query: {firstNodeId:pNodeId, secondNodeId: currentNodeId, thirdNodeId: item.id}}" class="item">
        <div class="whole fn-clear">
            <div class="part left">
                <img :src="news1">
            </div>
            <div class="part right">
                <div>
                    <span class="label-primary">{{currentNode.nodeName}}</span>
                    <p>
                        {{item.title}}
                    </p>
                    <span class="time">
                        {{item.addDate}}
                    </span>
                </div>
            </div>
        </div>
    </router-link>
</template>
<script>
import news1 from '@/images/news1.png'
import {mapGetters} from 'vuex'
export default {
   data() {
       return {
           news1
       }
   },
   props: {
       item: {
           type: Object,
           default: () => {return {}}
       }
   },
   computed: {
       ...mapGetters(['currentNode', 'pNodeId', 'currentNodeId'])
   }
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
    .item {
        float: left;
        position: relative;
        width: calc(50% - 40px);
        min-width: 440px;
        margin-bottom: 40px;
        margin-left: 20px;
        margin-right: 20px;
        background: $blue;
        cursor: pointer;
        .whole {
            transition: all 0.3s;
            &:hover {
                transform: translate(-8px, -8px)
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
    @media only screen and (max-width: 768px) {
        .item {
            float: initial;
            margin: 20px 0;
            width: 100%;
            min-width: initial;
            .part.right {
                & > div {
                    padding: 6%;
                }
                p {
                    margin: 2% 0;
                    font-size: 1.4rem;
                }
                .time {
                    font-size: 1.2rem;
                }
            }
        }
    }
    @media only screen and (min-width: 768px) {
        .item {
            margin-top: 40px;
            margin-bottom: 0;
        }
        .part {
            p {
                margin-bottom: 0;
                min-height: 60px;
            }
        }
        .less .item {
            margin-top: 0;
            margin-bottom: 40px;
        }
    }
    @media only screen and (min-width: 992px) {

    }
    @media only screen and (min-width: 1200px) {
        .part.right {
            p {
                font-size: 2.0rem;
            }
        }
    }
    @media only screen and (min-width: 1800px){
        .part.right {
            p {
                font-size: 2.4rem;
                margin-bottom: 16px;
                min-height: initial;
            }
            & > div {
                padding: 60px 40px;
            }
        }
    }
</style>
