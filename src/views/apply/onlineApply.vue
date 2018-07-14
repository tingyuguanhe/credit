<template>
    <div class="online_apply">
        <div class="nr">
            <div class="tip">用户ID：{{id}}</div>
            <div class="wrap clearfix">   
                <label for="" class="f_left">申请年限：</label>
                <div class="set_num f_left">
                    <span @click="setNum('reduce')">-</span>
                    {{num}}
                    <span  @click="setNum('add')">+</span>
                </div>
            </div>
            <div class="wrap">   
                <span class="money">¥ 398</span>
            </div>
            <div class="tip pay_type">支付方式：</div>
            <div class="wrap clearfix">   
                <img class="pay_style f_left wechat" src="../../assets/icons/wechat.png" alt="">
                <img class="radio f_right"  v-if="checkStatus == 'weixin'" src="../../assets/icons/radio_select.png" alt="" @click="changeRadioStatus('weixin')">
                <img class="radio f_right"  v-else src="../../assets/icons/radio_normal.png" alt="" @click="changeRadioStatus('weixin')">
                
            </div>
            <div class="wrap clearfix">   
                <img class="pay_style f_left" src="../../assets/icons/Alipay.png" alt="">
                <img class="radio f_right"  v-if="checkStatus == 'ali'" src="../../assets/icons/radio_select.png" alt="" @click="changeRadioStatus('ali')">
                <img class="radio f_right" v-else src="../../assets/icons/radio_normal.png" alt="" @click="changeRadioStatus('ali')">
            </div>

            <div class="btns clearfix">
                <button class="f_left">退出登录</button>
                <button class="f_right">确定支付</button>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                id:'12345678',
                num:0,
                checkStatus: 'weixin'
            }
        },
        methods: {
            setNum(type){
                if(type == 'reduce'){
                    if(this.num>0){
                        this.num --;
                    }
                }else{
                    this.num ++
                }
            },
            changeRadioStatus(type){
                console.log(type);
                if(type == 'weixin'){
                    if(this.checkStatus == 'ali'){
                        this.checkStatus = type
                    }
                    
                }else if(type == 'ali'){
                    if(this.checkStatus == 'weixin'){
                        this.checkStatus = type
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    .online_apply{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        padding: 0 0.18rem;
        box-sizing: border-box;
        font-size: 0.3rem;
        .nr{
            margin: 1rem 0 0 0;
            padding: 0 0.8rem;
            text-align: left;
        }
        .tip{
            
            font-weight: 500;
            color: #000;
        }
        .wrap{
            height: 1rem;
            line-height: 1rem;
            background: #fff;
            color:#808080;
            padding: 0 0.5rem;
            margin: 0.3rem 0 0 0;
            label{
                font-size: 0.36rem;
            }
            .money{
                color: #FFF100;
                font-weight: 500;
                font-size: 0.48rem;
            }
            img.pay_style{
                width: 1.6rem;
                margin: 0.18rem 0 0 0;
                &.wechat{
                    width: 1.8rem;
                }
            }
            
            img.radio{
                width: 0.4rem;
                margin: 0.3rem 0 0 0;
            }
        }
        .set_num{
            margin: 0 0 0 0.4rem;
            span{
                display: inline-block;
                width: 0.4rem;
                height: 0.4rem;
                line-height: 0.4rem;
                text-align: center;
                font-size: 0.35rem;
                font-weight: 500;
                background: #BFBFBF;
                &:first-child{
                    margin-right: 0.2rem;
                    font-size: 0.4rem;
                }
                &:last-child{
                    margin-left: 0.2rem;
                }
            }
        }
        .pay_type{
            margin: 1rem 0 0 0;
        }
        .btns{
            margin: 1rem 0 0 0;
            button{
                background: #2E87D2;
                width: 2.6rem;
                height: 1.2rem;
                line-height: 1.2rem;
                color: #fff;
                font-size: 0.3rem;
                border-radius: 6px;
            }
        }

    }
</style>