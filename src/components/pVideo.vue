<template>
    <div>
        <section class="section-wrap-2">
            <c-title title="视频介绍" engTitle="Video"></c-title>
            <div class="video-wrap">
                <video :src="videoUrl"></video>
                <div class="vide-mask">
                    <img :src="img">
                </div>
            </div>
        </section>
        <div class="video-bottom">
            
        </div>
    </div>
</template>
<script>
import cTitle from './cTitle'
import img from '../assets/img2.jpg'
export default {
    data() {
        return {
            videoUrl: '',
            img
        }
    },
    components: {
        cTitle
    }
}
</script>
<style lang="scss" scope>
@import '../style/base/param';
.video-wrap {
    position: relative;
    margin: 0 90px;
    video {
        display: block;
        width: 100%;
        height: 100%;
        margin: 0 auto;
    }
    .vide-mask {
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        height: 100%;
        width: 100%;
        overflow: hidden;  
        img {
            width: 100%;
        }
    }
}
.video-bottom {
    background: $blue;
}
@media only screen and (max-width: 768px) {
    .video-wrap {
        margin: 0 8%;
    }
    .video-bottom {
        height: 100px;
        margin-top: -50px;
    }
}
@media only screen and (min-width: 768px) {
    .video-bottom {
        height: 160px;
        margin-top: -80px;
    }
}
@media only screen and (min-width: 992px) {
    .video-bottom {
        height: 160px;
        margin-top: -80px;
    }
}
@media only screen and (min-width: 1200px) {
    .video-wrap {
        margin: 0 15%;
    }
    .video-bottom {
        height: 240px;
        margin-top: -120px;
    }
}
</style>
