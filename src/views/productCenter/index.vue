<template>
    <div class="product_page">
        <div class="title">国信诚信宝</div>
        <div class="nr">
            <div><img src="../../assets/imgs/1.png" alt=""></div>
            <p class="intro">谭一春土家土膏贴风湿骨病止痛贴关节炎镇痛膏功效显著一贴见效</p>
            <div class="player">
                <video-player  class="video-player vjs-custom-skin"
                        ref="videoPlayer"
                        :playsinline="true"
                        :options="playerOptions"
                        @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)">
                </video-player>
            </div>
        </div>
        <nav-bars></nav-bars>
    </div>
</template>
    
<script>
    import navBars from '@/components/navbars'
    import { videoPlayer } from 'vue-video-player'

    export default{
        components:{navBars},
        data(){
            return{
                playerOptions : {
                    playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
                    autoplay: false, //如果true,浏览器准备好时开始回放。
                    muted: false, // 默认情况下将会消除任何音频。
                    loop: false, // 导致视频一结束就重新开始。
                    preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language: 'zh-CN',
                    aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources: [{
                        type: "",
                        src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" //url地址
                    }],
                    poster: "../../assets/imgs/1.png", //你的封面地址
                    width: document.documentElement.clientWidth,
                    notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar: {
                    timeDivider: true,
                    durationDisplay: true,
                    remainingTimeDisplay: false,
                    fullscreenToggle: true  //全屏按钮
                    }
                }

            }
        },
        computed: {
            player() {
            return this.$refs.videoPlayer.player
            }
        },
        methods: {
            onPlayerPlay(player) {
                alert("play");
            },
            onPlayerPause(player){
                alert("pause");
            },

        }
    }
</script>

<style lang="scss">
.product_page{
    .nr{
        padding: 0 0.15rem;
        img{
            width: 100%;
        }
        .intro{
            font-size: 0.22rem;
            height: 0.5rem;
            line-height: 0.5rem;
        } 
        
    }
    .video-js .vjs-modal-dialog:focus,.video-js button:focus{
        outline: none;
    }
    .video-js .vjs-big-play-button{
        border-radius: 50%;
        width: 1.5rem !important;
        height: 1.5rem !important;
        background:rgb(194, 194, 194);
        border: none;
        margin-top: -0.8rem !important;
        margin-left: -0.8rem !important;
    }
    .vjs-icon-play:before, .video-js .vjs-big-play-button .vjs-icon-placeholder:before, .video-js .vjs-play-control .vjs-icon-placeholder:before{
        color:#fff;
        
        color:#fff;
        margin: 0.1rem 0 0 0;
    }
    
}
</style>