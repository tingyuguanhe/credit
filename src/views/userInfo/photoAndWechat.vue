<template>
    <div class="imgs">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            
            <ul class="infos">
                <li class="clearfix">
                    <div class="img_wrap photo">
                        <img v-if="photoImgUrl" :src="photoImgUrl" class=""/>
                        <div class="tip">
                            <input type="file" value="">
                            <span>点击上传头像照片</span>
                        </div> 
                    </div>
                </li>
                <li class="clearfix">
                    <div class="img_wrap code">
                        <img v-if="codeImgUrl" :src="codeImgUrl" class=""/>
                        <div class="tip">
                            <input type="file" value="">
                            <span>点击上传微信二维码</span>
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
                    // photoImgUrl: require('../../assets/imgs/timg.jpg'),
                    // codeImgUrl: require('../../assets/imgs/code.png')
                    photoImgUrl: '',
                    codeImgUrl: ''
                }
            },
            methods: {
                nextStep(){
                    this.$router.push({name: 'Finished'});
                }
            }
        }
    </script>
    
<style lang="scss">
    .imgs{
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
                        height: 3rem;
                        border-radius: 3px;
                        overflow: hidden;
                        img{
                            width: 100%;
                        }
                        &.photo{
                            img{
                                height: 3rem;
                            }
                        }
                        &.code{
                            height: 3.5rem;
                        }
                    }
                    .tip{
                        font-size: 0.26rem;
                        position: relative;
                        input{
                            height: 3rem;
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
                            top: 1.2rem;
                            left: 0.7rem;
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