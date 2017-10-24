<template>
    <footer>
        <ul class="link-list">
            <li><a>宝信网站群</a></li>
            <li><a>网站地图</a></li>
            <li><a>友情链接</a></li>
            <li><a>法律声明</a></li>
            <li><a>帮助信息</a></li>
        </ul>
        <div>
            <span>COPYRIGHT</span>
            <span>©2017</span>
            <span>上海宝信软件股份有限公司</span>
            <span>沪ICP备10001471号</span>
            <div class="fn-right right-wrap">
                <span>网站地图</span>
                <i class="iconfont icon-sjup"></i>
            </div>
        </div>
        <div>
            <span>技术支持</span>
            <span>宝信软件</span>
            <span>网站管理员</span>
        </div>
    </footer>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '../../style/param';
footer {
    padding: 60px;
    font-size: 12px;
    font-family: $fontlight;
    background: $blue;
    color: $white;
    line-height: 1.8;
    font-weight: normal;
    span {
        margin-right: 10px;
    }
}
.link-list {
    margin: 0;
    li {
        display: inline-block;
        &:after {
            content: ' |'
        }
    }
}
.right-wrap {
    span {
        margin-right: 3px;
    }
    .iconfont {
        font-size: 12px;
    }
}
@media only screen and (max-width: 768px) {
    footer {
        padding: 30px;
    }
    .right-wrap {
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
