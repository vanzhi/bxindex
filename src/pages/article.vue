<template>
    <div :class="{'less' : this.menuList.length < 6}">
        <Left :menuList="menuList" :currentNode="currentNode" :pNode="pNode" v-if="this.menuList.length"></Left><div class="article-wrap">
            <!-- 测试 -->
            <!-- <div class="article-header">
                <h2 class="article-title">111111</h2>
                <h3 class="article-subtitle">222</h3>
            </div>
            <div class="article-main">
                <Card></Card>
            </div> -->
            
            <!-- 内容列表 -->
            <template v-if="listType === 'content' && !contentObj.content">
                <h2 class="article-title">{{currentNode.nodeName}}</h2>
                <div class="article-list">
                    <ul class="fn-clear">
                        <Content-List v-for="(item, index) in contentList" :currentNode="currentNode" :key="item.id" :item="item"></Content-List>
                    </ul>
                </div>
            </template>
            
            <!-- 外链列表 -->
            <template v-else-if="listType === 'link'">
                <h2 class="article-title">{{currentNode.nodeName}}</h2>
                <div class="article-main">
                    <Link-List  
                        v-for       ="(item, index) in contentList" 
                        :currentNode="currentNode" 
                        :key        ="item.id" 
                        :item       ="item">
                    </Link-List>
                </div>
            </template>

            <!-- 分页 -->
            <template v-if="listType && !contentObj.content">
                <div class="article-main">
                    <el-pagination
                        small
                        layout          ="prev, pager, next"
                        :total          ="total"
                        :current-page   ="pageNo + 1"
                        :page-size      ="10"
                        @current-change ="currentChange">
                    </el-pagination>
                </div>
            </template>

            <!-- 文本内容 -->
            <template v-if="contentObj.content">
                <div class="article-header">
                    <h2 class="article-title">{{contentObj.title}}</h2>
                    <h3 class="article-subtitle">{{currentNode.title}}</h3>
                    <ul class="article-crumbs">
                        <li>首页</li>
                        <li>{{pNode.nodeName}}</li>
                        <li>{{currentNode.nodeName}}</li>
                    </ul>
                </div>
                <div class="article-main" v-html="contentObj.content">
                    
                </div>
            </template>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'
    import Left from '@/components/common/left'
    import ContentList from '@/components/common/contentList'
    import LinkList from '@/components/common/linkList'
    import {API_GetContentByNodeId} from '@/fetch/restApi'

    import WeChat from '@/components/template/wechat'
    import History from '@/components/template/history'
    import Card from '@/components/template/card'
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
            ...mapGetters(['firstLevelMenuListById', 'secondLevelMenuListById']),
            // 二级栏目菜单列表
            menuList() {
                let list = this.$store.getters.firstLevelMenuListById[this.pNodeId] && this.$store.getters.firstLevelMenuListById[this.pNodeId].childs || []
                return list
            },
            // 二级栏目链接类型
            linkType() {
                return this.currentNode.linkType
            },
            // 链接类型
            listType() {
                let type = ''
                if (this.linkType === 'LinkNoRelatedToChannelAndContent' && this.contentDate) {
                    if (this.contentDate.data[0] && this.contentDate.data[0].linkUrl) {
                        type = 'link'
                    } else {
                        type = 'content'
                    }
                }
                return type
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
                if (!this.listType) {
                    return this.contentDate && this.contentDate.data[0] || {}
                }
                if (this.thirdNodeId) {
                    return this.contentList[this.thirdNodeId]
                }
                return {}
            },
            currentNode() {
                return this.secondLevelMenuListById[this.currentNodeId] || {}
            },
            pNode() {
                return this.firstLevelMenuListById[this.pNodeId] || {}
            },
            // 三级菜单id
            thirdNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                return path[2] * 1 || 0
            },
            // 二级菜单id
            currentNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                let nodeId = 0
                if (path.length > 1) {
                    nodeId = path[1] * 1
                } else if (path.length > 0) {
                    if (this.firstLevelMenuListById[path[0]] && this.firstLevelMenuListById[path[0]].childs.length) {
                        nodeId = this.firstLevelMenuListById[path[0]].childs[0].nodeId * 1
                    }
                }
                return nodeId
            },
            // 一级菜单id
            pNodeId() {
                let path = this.$route.params.nodepath ? this.$route.params.nodepath.split('/') : []
                return path[0] * 1 || 0
            }
        },
        watch: {
            currentNodeId : function(val) {
                this.pageNo = 0
                this.getArticleByNodeId()
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
                // 路由改变，刷新页面
                this.pageNo = 0
                this.total = 0
                this.getArticleByNodeId()
            },
        },
        mounted() {
            this.setRouteQueryToStore()
        },
        components: {
            Left,
            ContentList,
            WeChat,
            LinkList,
            History,
            Card
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
    & > .fn-clear {
        padding-top: 20px;
    }
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
            text-align: center;
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
