<template>
    <div class="id_cards">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div>
                <p>真实拍摄的身份证原件，无反光，无水印；</p>
                <p>身份证充满图片，文字清晰可见；</p>
                <p>图片格式为jpg,不大于5M。</p>
            </div>
            
            <ul class="infos">
                <li class="clearfix">
                    <div class="img_wrap">
                        <img v-if="frontImgUrl" :src="frontImgUrl" class=""/>
                        <div class="tip">
                            <input type="file" value="">
                            <span>点击上传身份证</span>
                            <div class="side">正&nbsp;&nbsp;面</div>
                        </div> 
                        
                    </div>
                </li>
                <li class="clearfix">
                    <div class="img_wrap">
                        <img v-if="backImgUrl" :src="backImgUrl" class=""/>
                        <div class="tip">
                            <input type="file" value="">
                            <span>点击上传身份证</span>
                            <div class="side">背&nbsp;&nbsp;面</div>
                        </div> 
                        
                    </div>
                </li>
            </ul>
            <div>
                <button class="next_step" @click="nextStep">下一步</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                frontImgUrl: '',
                //frontImgUrl: require('../../assets/imgs/front.png'),
                backImgUrl: ''
                // backImgUrl: require('../../assets/imgs/back.png')
            }
        },
        methods: {
            nextStep(){
                this.$router.push({name: 'PhotoAndWechat'});
            }
        }
    }
</script>

<style lang="scss">
.id_cards{
    position: absolute;
    width: 100%;
    left: 0;
    top:0;
    bottom: 0;
    background: #4070bf;
    padding: 0.18rem;
    box-sizing: border-box;
    .nr{
        padding: 0.6rem 1rem 1.4rem 1rem;
        box-sizing: border-box;
        background: #fff;
        border-radius: 15px;
        p{
            text-align: left;
            color: #a2a2a2;
            font-size: 0.24rem;
            margin: 0;
            padding: 0 0.3rem;
        }
        .infos{
            color:#b6b6b6;
            font-size: 0.36rem;
            width: 3.6rem;
            margin: 0.5rem auto;
            li{
                line-height: 0.7rem;
                margin-bottom: 0.5rem;
                width: 100%;
                .img_wrap{
                    background: #f6f6f6;
                    width: 100%;
                    height: 2.4rem;
                    border-radius: 3px;
                    overflow: hidden;
                    img{
                        width: 100%;
                    }
                }
                .tip{
                    font-size: 0.26rem;
                    position: relative;
                    input{
                        height: 2.4rem;
                        margin:0;
                        background: transparent;
                        opacity: 0;
                        z-index: 100;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                    span{
                        position: absolute;
                        top: 0.5rem;
                        left: 1rem;
                    }
                    .side{
                        position: absolute;
                        left: 1.3rem;
                        top: 1.1rem;
                        font-size: 0.4rem;
                    }
                }
            }
        }
    }
    .next_step{
        width: 4.4rem;
        background: #4070BF;
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 10px;
        font-size: 0.3rem;
        color:#fff;
        margin-top: 0.5rem;
    }
}
</style>