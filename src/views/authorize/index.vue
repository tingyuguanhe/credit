<template>
    <div class="authorize_page">
        <div class="title">国&nbsp;信&nbsp;诚&nbsp;信&nbsp;宝</div>
        <div class="nr">
            <div class="head">品牌授权信息</div>
            <ul v-for="(item,index) in num">
                <li class="clearfix">
                    <label for="">授权品牌</label>
                    <input type="text">
                </li>
                <li class="clearfix">
                    <label for="">授权产品</label>
                    <input type="text">
                </li>   
                <li class="clearfix">
                    <label for="">授权证号</label>
                    <input type="text">
                </li>
                <li class="clearfix">
                    <label for="">授权级别</label>
                    <input type="text">
                </li>
            </ul>
            <div class="clearfix">
                <button class="upload_btn" @click="uploadCertificate">上传授权证书</button>
            </div>
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
                num: 1
            }
        },
        methods: {
            uploadCertificate(){
                alert('上传授权证书');
            },
            addNewBrand(){
                this.num ++
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
                    label{
                        float: left;
                    }
                    input{
                        float: left;
                        width: 70%;
                        margin: 0;
                    }
                }
            }
            button{
                background: #4070BF;
                color:#fff;
            }
            button.upload_btn{
                height: 0.56rem;
                line-height: 0.56rem;
                width: 2.2rem;
                border-radius: 5px;
                font-size: 0.24rem;
                float: left;
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