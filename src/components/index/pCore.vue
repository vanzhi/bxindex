<template>
    <section class="section-wrap">
        <c-title title="核心竞争" engTitle="Core Competence"></c-title>
        <ul class="core-list" :style="{left: -left + 'px'}">
            <li v-for="(item, index) in coreList" :key="index">
                <div class="core-logo"><i :class="'ic icon-core-' + (index + 1)"></i></div><div class="core-content">
                    <h3>{{item.title}}</h3>
                    <p>{{item.content}}</p>
                </div>
            </li>
        </ul>
        <div class="core-operate-wrap">
            <a @click="prev">
                <i class="iconfont icon-jiantoufuben1"></i>
            </a>
            <a @click="next">
                <i class="iconfont icon-jiantoufuben"></i>
            </a>
        </div>
    </section>
</template>
<script>
import cTitle from './cTitle'
export default {
    data() {
        return {
            left: 0,
            coreList: [{
                title: '完善的基础业务构件能力',
                content: '公司拥有完整的制造企业信息化和城市智能化领域的系列产品和解决方案，在激烈的市场竞争和长期服务宝钢的过程中，公司逐步培育、积累、形成了基于钢铁行业的三全服务能力。'
            }, {
                title: '强大的综合集成能力',
                content: '公司拥有完整的制造企业信息化和城市智能化领域的系列产品和解决方案，在激烈的市场竞争和长期服务宝钢的过程中，公司逐步培育、积累、形成了基于钢铁行业的三全服务能力。'
            }, {
                title: '高效稳定的过程管理能力',
                content: '公司拥有完整的制造企业信息化和城市智能化领域的系列产品和解决方案，在激烈的市场竞争和长期服务宝钢的过程中，公司逐步培育、积累、形成了基于钢铁行业的三全服务能力。'
            }, {
                title: '新技术、新产品研发与应用能力',
                content: '公司拥有完整的制造企业信息化和城市智能化领域的系列产品和解决方案，在激烈的市场竞争和长期服务宝钢的过程中，公司逐步培育、积累、形成了基于钢铁行业的三全服务能力。'
            }, {
                title: '助力中国传统产业“两化”深度融合能力',
                content: '公司拥有完整的制造企业信息化和城市智能化领域的系列产品和解决方案，在激烈的市场竞争和长期服务宝钢的过程中，公司逐步培育、积累、形成了基于钢铁行业的三全服务能力。'
            }]
        }
    },
    methods: {
        next() {
            if (this.left < 370 * (this.coreList.length - 2)) {
                this.left += 370;
            }
        },
        prev() {
            if (this.left > 0) {
                this.left -= 370;
            }
        }
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scope>
@import "../../style/param";
.section-wrap {
    position: relative;
}
/* icon bgimages*/
.ic {
    display: inline-block;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    transition: all 0.3s;
    &.icon-core-1 {
        height: 91px;
        width: 99px;
        background-image: url(../../images/i1.png);
        .core-list li:hover & {
            background-image: url(../../images/c1.png);
        }
    }
    &.icon-core-2 {
        height: 100px;
        width: 89px;
        background-image: url(../../images/i2.png);
        .core-list li:hover & {
            background-image: url(../../images/c2.png);
        }
    }
    &.icon-core-3 {
        height: 100px;
        width: 100px;
        background-image: url(../../images/i3.png);
        .core-list li:hover & {
            background-image: url(../../images/c3.png);
        }
    }
    &.icon-core-4 {
        height: 96px;
        width: 83px;
        background-image: url(../../images/i4.png);
        .core-list li:hover & {
            background-image: url(../../images/c4.png);
        }
    }
    &.icon-core-5 {
        height: 98px;
        width: 88px;
        background-image: url(../../images/i5.png);
        .core-list li:hover & {
            background-image: url(../../images/c5.png);
        }
    }
}
.core-logo {
    height: 200px;
    text-align: center;
    .ic {
        vertical-align: top;
    }
}
.core-list {
    position: relative;
    margin-left: -50px;
    white-space: nowrap;
    transition: left 0.3s;
    li {
        display: inline-block;
        margin: 1px;
        padding: 50px;
        width: 368px;
        white-space: normal;
        cursor: pointer;
        transition: all 0.3s;
        vertical-align: top;
        height: 500px;
        h3 {
            font-size: 2.4rem;
            font-weight: normal;
            transition: color 0.3s;
        }
        p {
            margin-top: 50px;
            line-height: 1.5;
        }
        &:hover {
            box-shadow: 0 0 0 1px $blue;
            background: $white;
            h3 {
                color: $blue;
            }
        }
    }
}
.core-operate-wrap {
    position: absolute;
    top: 30px;
    right: 60px;
    user-select: none;
    a {
        margin-left: 10px;
        display: inline-block;
        height: 40px;
        width: 40px;
        background: $white;
        line-height: 40px;
        text-align: center;
        font-weight: bold;
        border: 1px solid $grey1;
        &:active {
            background: $blue;
            color: $white;
            border-color: $blue;
        }
    }
}
@media only screen and (max-width: 768px) {
    .core-operate-wrap {
        display: none;
    }
    .core-list {
        margin: 0;
        white-space: normal;
        li {
            margin: 0;
            margin-right: 30px;
            display: block;
            padding: 20px;
            margin-top: 20px;
            width: auto;
            height: auto;
            background: $white;
            box-shadow: 1px 1px 3px 0 $grey1;
            &:hover {
                box-shadow: initial;
            }
            p {
                margin-top: 15px;
                margin-bottom: 0;
                font-size: 1.2rem;
            }
            h3 {
                font-size: 1.6rem;
                color: $blue;
            }

        }
    }
    .core-content {
        display: inline-block;
        width: calc(100% - 70px);
        vertical-align: middle;
    }
    .core-logo {
        display: inline-block;
        width: 70px;
        height: 60px;
        overflow: hidden;
        vertical-align: middle;
        .ic {
            background-size: 60% 60%;
        }
    }
}
@media only screen and (min-width: 768px) {
    .core-operate-wrap {
        display: block;
    }
}
@media only screen and (min-width: 992px) {
    .core-operate-wrap {
        display: block;
    }
}   
@media only screen and (min-width: 1200px) {
    .core-operate-wrap {
        display: block;
    }
}
@media only screen and (min-width: 1800px) {
    .core-operate-wrap {
        display: none;
    }
}
</style>
