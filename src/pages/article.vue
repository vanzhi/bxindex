<template>
    <div :class="{'less' : this.menuList.length < 6}">
        <Left :menuList="menuList" v-if="this.menuList.length"></Left><div class="article-wrap">
            <template v-if="contentObj">
                <div class="article-header">
                    <h2 class="article-title">{{contentObj.title}}</h2>
                    <h3 class="article-subtitle">{{currentNode.content}}</h3>
                    <ul class="article-crumbs">
                        <li>首页</li>
                        <li>{{pNode.nodeName}}</li>
                        <li>{{currentNode.nodeName}}</li>
                    </ul>
                </div>
                <div class="article-main" v-html="contentObj.content">
                    
                </div>
                <!-- <div class="article-main">
                    
                </div> -->
            </template>
            <template v-else>
                <div class="article-list">
                    <ul class="fn-clear">
                        <List-Type1 v-for="(item, index) in contentList" :key="item.id" :item="item"></List-Type1>
                    </ul>
                    <el-pagination
                        small
                        layout="prev, pager, next"
                        :total="total"
                        @current-change="currentChange"
                        >
                    </el-pagination>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Left from '@/components/common/left'
    import ListType1 from '@/components/common/listType1.vue'
    import {API_GetContentByNodeId} from '@/fetch/restApi'

    import WeChat from '@/components/template/wechat'
    export default {
        data() {
            return {
                contentDate: null,
                pageNo: 0,
                pageSize: 10,
                total: 0
            }
        },
        computed: {
            ...mapGetters(['pNodeId', 'currentNodeId', 'thirdNodeId', 'currentNode', 'pNode']),
            // 二级栏目菜单列表
            menuList() {
                let list = this.$store.getters.secondLevelMenuListById[this.pNodeId] || []
                return list
            },
            // 是否为list展示
            isList() {
                return this.currentNodeId && [34, 35, 36, 42].indexOf(this.currentNodeId) > -1
            },
            // 内容对象列表
            contentList() {
                let list = this.contentDate && this.contentDate.data || []
                let obj = {}
                for (let i = 0; i < list.length; i ++) {
                    obj[list[i].id] = list[i]
                }
                return obj
            },
            // 内容对象
            contentObj() {
                if (!this.isList) {
                    return this.contentDate && this.contentDate.data[0] || null
                }
                if (this.thirdNodeId > -1) {
                    return this.contentList[this.thirdNodeId]
                }
                return null
            }
        },
        watch: {
            '$route.query' : function(val) {
                this.setRouteQueryToStore()
            }
        },
        methods: {
            getArticleByNodeId() {
                this.contentDate = null
                API_GetContentByNodeId({
                    nodeId: this.currentNodeId,
                    pageSize: this.pageSize,
                    pageNo: this.pageNo
                }).then(success => {
                    this.contentDate = success.data
                    this.total = this.contentDate.totalCount
                }).catch(error => {

                })
            },
            currentChange(pageNo) {
                this.pageNo = pageNo - 1
                this.getArticleByNodeId()
            },
            setRouteQueryToStore() {
                this.$store.dispatch('setRouteQuery', {...this.$route.query})
                // 路由改变，刷新页面
                this.pageNo = 0
                this.total = 0
                this.getArticleByNodeId()
            }
        },
        mounted() {
            this.setRouteQueryToStore()
        },
        components: {
            Left,
            ListType1,
            WeChat
        }
    }
</script>
<style lang="scss" scoped>
@import '../style/param.scss';
.article-wrap {
    position: relative;
    display: inline-block;
    margin-left: 50px;
    vertical-align: top;
    width: calc(100% - 360px);
    min-height: 600px;
}
.article-header {
    
}
.article-main {
    margin-top: 3.6%;
    margin-bottom: 3.6%;
    margin-right: 25%;
    color: $grey5;
    font-size: 1.4rem;
    line-height: 1.7;
    margin-right: 25%;
    min-width: 670px;
    // background: $white;
    p {
        margin: 3.7% 0;
    }
    img {
        width: 100%;
    }
}
.article-list {
    // margin-right: 25%;
    width: 965px;
}
.article-title {
    font-size: 3.6rem;
    font-weight: normal;
    color: $dark;
    margin-top: 20px;
    margin-bottom: 20px;
}
.article-crumbs {
    position: absolute;
    top: 40px;
    right: 60px;
    li {
        display: inline-block;
        color: $grey5;
        &:after {
            font-family: 'iconfont';
            content: '\e65e';
            margin-left: 5px;
            margin-right: 3px;
            font-size: 1.2rem;
        }
        &:last-child {
            color: $blue;
            &:after {
                display: none;
            }
        }
    }
}
@media only screen and (max-width: 768px) {
    .article-header {
        display: none;
    }
    .article-wrap {
        padding: 0 30px;
        margin: 0;
        margin-top: 30px;
        width: 100%;
    }
    .article-main {
        margin-top: 20px;
        min-width: initial;
        margin-right: 0;
        img {
            width: 100%;
        }
    }
    .article-list {
        width: initial;
        min-width: initial;
        margin-right: 0;
    }
}
@media only screen and (min-width: 768px) {
    .less {
        .article-wrap {
            padding: 0 60px;
            margin: 3.6% 0;
            width: 100%;
        }
        .article-header {
            text-align: center;
        }
        .article-crumbs {
            display: none;
        }
        .article-main {
            margin: 0 auto;
            margin-top: 3.6%;
            width: 65%;
            max-width: 760px;
        }
        .article-title {
            margin-top: 0;
        }
        .article-list {
            margin: 0 auto;
            width: 65%;
            min-width: 960px;
        }
    }
}
@media only screen and (min-width: 1200px) {
    .article-wrap {
        width: calc(100% - 380px);
    }
    .article-crumbs {
        right: 80px;
    }
    .less {
        .article-wrap {
            padding: 0 80px;
        }
    }
}
</style>
