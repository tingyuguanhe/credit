<template>
    <div class="change_user_info">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="head">个人信息</div>
            <ul class="infos">
                <li class="clearfix">
                    <label>姓名</label>
                    <input type="text" placeholder="" value="热巴">
                </li>
                <li class="clearfix sex">
                    <label class="f_left">性别</label>
                    <span class="boy clearfix f_left">
                        <label for="boy">
                            <span id="boy" class="f_left">男</span>
                            <img class="f_left" v-if="radioChecked != 0" src="../../assets/icons/radio_normal.png" alt="" @click="changeRadioChecked('0')">
                            <img class="f_left" v-else src="../../assets/icons/radio_select.png" alt="" @click="changeRadioChecked('0')">
                        </label>
                    </span>
                    <span class="clearfix f_left"> 
                        <label for="girl">
                            <span id="girl"  class="f_left">女</span>
                            <img class="f_left" v-if="radioChecked == 0" src="../../assets/icons/radio_normal.png" alt="" @click="changeRadioChecked('1')">
                            <img class="f_left" v-else src="../../assets/icons/radio_select.png" alt="" @click="changeRadioChecked('1')">
                        </label>
                    </span>
                </li>
                <li class="clearfix">
                    <label>手机号</label>
                    <input type="text" value="15045854855">
                </li>
                <li class="clearfix">
                    <label>籍贯</label>
                    <span @click="selectArea">{{areaString}}</span>
                </li>
                
                <li class="clearfix">
                    <label>微信号码</label>
                    <input type="text" value="gwuowtuyut5">
                </li>
                
            </ul>
           
            <div>
                <button class="next_step" @click="nextStep">下一步</button>
            </div>
        </div>
        <van-popup v-model="areaListShow" position="bottom">
            <van-area :area-list="areaList" :columns-num="2" :value="selectAreasData" title="选择地址" @cancel="Cancel" @confirm="Confirm"/>
        </van-popup>
        
    </div>
</template>
    
<script>
   
    export default{
        data(){
            return{
                radioChecked: 0,  //男
                areaListShow: false,
                selectAreasData:'110100',
                areaString:'北京市海淀区西四环',
                areaList:{
                    province_list: {
                        110000: '北京市',
                        120000: '天津市'
                    },
                    city_list: {
                        110100: '北京市',
                        110200: '县',
                        120100: '天津市',
                        120200: '县'
                    }
                },
                
            }
        },
        methods: {
            changeRadioChecked(flag){
                if(this.radioChecked == flag){
                    return;
                }else{
                    this.radioChecked = flag
                    
                } 
            },
            nextStep(){
                this.$router.push({name: 'IdCards'});
            },
            selectArea(){
                this.areaListShow = true;
            },
            Cancel(){
                this.areaListShow = false;
            },
            Confirm(arr){
                this.areaString = '';
                for(let i =0 ;i<arr.length;i++){
                    this.areaString += arr[i].name;
                }
                this.areaListShow = false;
            }
            
        }
    }
</script>

<style lang="scss">
    .change_user_info{
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
            .head{
                font-size: 0.45rem;
                color:#221815;
                font-weight: 500;
                margin: 0.2rem 0 0.6rem 0;
            }
            .infos{
                text-align: left;
                color:#8D8D8D;
                font-size: 0.36rem;
                font-weight: 500;
                li{
                    border-bottom: 2px solid #8D8D8D;
                    min-height: 0.7rem;
                    line-height: 0.7rem;
                    margin-bottom: 0.4rem;
                    
                    >label{
                        float: left;
                        margin-right: 0.3rem;
                    }
                    input{
                        float: left;
                        width: 65%;
                        color: #8D8D8D;
                        font-size: 0.36rem;
                        font-weight: 500;
                        margin: 0;
                        height: 0.6rem;
                        line-height: 0.6rem;
                        padding: 0;
                    }
                    button{
                        background: #4070BF;
                        width: 2.2rem;
                        height: 0.6rem;
                        color: #fff;
                        border-radius: 6px;
                        font-size: 0.23rem;
                        &:first-child{
                            margin: 0 0.2rem 0 0;
                        }
                    }
                    &.sex{
                        img{
                            width: 0.4rem;
                            margin: 0.13rem 0 0 0.1rem;
                        }
                        .boy{
                            margin: 0 0.4rem 0 0;
                        }
                    }
                    .btns{
                        height: 0.8rem;
                        width: 100%;
                        clear: both;
                    }
                    .user_id{
                        input{
                            width: 100%;
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
                margin-top: 1rem;
            }
        }

        .van-picker{
            font-size: 0.3rem !important;
        }
    }
</style>