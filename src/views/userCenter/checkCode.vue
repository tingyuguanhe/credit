<template>
    <div class="check_code">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <p class="tip">短信验证</p>
            <p>请用手机{{num}}获取验证码短信</p>
            <input type="text" placeholder="" v-model="code">
            <button>获取验证码</button>
        </div>
        <nav-bars></nav-bars>
    </div>
</template>
    
<script>
    import navBars from '@/components/navbars'
    export default{
        components:{navBars},
        data(){
            return{
                num: '150******15',
                code:''
            }
        },
        watch: {
            code: function(newVal, oldVal){
                if(newVal == oldVal){
                    return
                }else{
                    if(newVal.length == 4){
                        this.$router.push({name:'BaseUserInfo'});
                    }
                    
                }
            }
        }
    }
</script>

<style lang="scss">
    .check_code{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        bottom: 0;
        background: #F0EFF5;
        .nr{
            padding: 0.4rem;
            p{
                color: #000;
                font-size: 0.32rem;
                font-weight: 500;
                text-align: left;
                margin: 0;
            }
            .tip{
                font-size: 0.4rem;
            }
            button{
                width:3.4rem;
                height:1rem;
                line-height: 1rem;
                background:rgba(46,124,210,1);
                border-radius:9px;
                font-size: 0.34rem;
                color:#fff;
                margin: 0.3rem 0 0 0;
            }
        }
    }
</style>