<template>
    <div class="authorize_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="head">品牌授权信息</div>
            <ul v-for="(item,index) in data" :key="index">
                <li class="clearfix">
                    <label for="">授权品牌</label>
                    <input type="text" v-model="item.brand">
                </li>
                <li class="clearfix">
                    <label for="">授权产品</label>
                    <input type="text" v-model="item.product">
                </li>   
                <li class="clearfix">
                    <label for="">授权证号</label>
                    <input type="text" v-model="item.id">
                </li>
                <li class="clearfix">
                    <label for="">授权级别</label>
                    <input type="text" v-model="item.level">
                </li>
                <li>
                    <div class="f_left">
                        <img :src="item.imgUrl" alt="">
                    </div> 
                    <span class="f_left">{{item.imgName}}</span>
                </li>
                <li class="clearfix">
                    <div>上传授权证书</div>
                    <input class="upload_btn" type="file" @click="uploadCertificate(index)">
                    
                </li>
            </ul>
            
            <div class="add_brand" @click="addNewBrand">
                <img src="../../assets/icons/add.png" alt="">
                <span>新增授权品牌</span>
            </div>
            <div>
                <button class="submit_btn">提交</button>
            </div>
           
        </div>
    </div>
</template>


<script>
    export default{
        data(){
            return{
                data:[
                    {
                        brand:'',
                        product:'',
                        id:'',
                        level:'',
                        imgUrl: require('../../assets/icons/21.png'),
                        imgName: '图片名字'
                    }
                ]
            }
        },
        methods: {
            uploadCertificate(){
                
            },
            addNewBrand(){
                this.data.push(
                    {
                        brand:'',
                        product:'',
                        id:'',
                        level:'',
                        imgUrl: require('../../assets/icons/21.png'),
                        imgName: '图片名字'
                    }
                )
            }
        }
    }
</script>
<style lang="scss">
    .authorize_page{
        position: absolute;
        width: 100%;
        left: 0;
        top:0;
        min-height: 100%;
        background: #4070bf;
        padding: 0 0.18rem;
        box-sizing: border-box;
        .nr{
            background: #fff;
            padding: 0.3rem 1rem 0.5rem 1rem;
            border-radius: 10px;
            font-size: 0.36rem;
            color:#8D8D8D;
            font-weight: 500;
            margin-bottom: 0.6rem;
            .head{
                color:#221815;
                font-size: 0.45rem;
            }
            ul{
                text-align: left;
                li{
                    border-bottom: 2px solid #8D8D8D;
                    line-height: 0.8rem;
                    margin-bottom: 0.2rem;
                    &:nth-child(5){
                        height: 2.5rem;
                        border-bottom: none;
                        div{
                            width: 2.4rem;
                            height: 2rem;
                            border: 1px solid #8D8D8D;
                            padding: 0.2rem;
                            background: #fff;
                            margin-right: 0.2rem;
                        }
                        span{
                            border-bottom: 2px solid #8D8D8D;
                            margin-top: 0.5rem;
                            width: 2rem;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                        }
                    }
                    &:last-child{
                        border-bottom: none;
                        position: relative;
                        height: 0.6rem;
                        div{
                            position: absolute;
                            top: -5px;
                            left: 0;
                            font-size: 0.26rem;
                            background: #4070BF;
                            text-align: center;
                            height: 0.56rem;
                            color: #fff;
                            line-height: 0.56rem;
                            width: 2.2rem;
                            border-radius: 5px;
                            font-size: 0.24rem;
                        }
                        .upload_btn{
                            color: transparent;
                            z-index: 10;
                            position: absolute;
                            left: 0;
                            top: -5px;
                            width: 2.2rem;
                            height: 0.56rem;
                            border-radius: 5px;
                            background: transparent;
                            text-indent: -20rem;
                        }
                    }
                    label{
                        float: left;
                    }
                    input{
                        float: left;
                        width: 70%;
                        margin: 0;
                    }
                    img{
                        width: 2.4rem;
                        height: 2rem;
                    }
                }
            }
            button{
                background: #4070BF;
                color:#fff;
            }
            
            .add_brand{
                text-align: left;
                margin-top: 0.3rem;
                img{
                    width: 0.4rem;
                    vertical-align: text-top;
                }
            }
            button.submit_btn{
                width: 4rem;
                height: 0.8rem;
                line-height: 0.8rem;
                border-radius: 10px;
                font-size: 0.3rem;
                margin-top: 1rem;
            }
        }
}
</style>