<template>
    <div class="home_page">
        <div>56789</div>
        <nav-bars></nav-bars>
    </div> 
</template>

<script>
    import navBars from '@/components/navbars'

    export default{
        components:{navBars},
        data(){
            return{

            }
        }
    }
</script>

<style lang="scss">
    .home_page{
        position: absolute;
        top:0;
        bottom:0;
        width: 100%;
        background: url('../../assets/imgs/bg.jpg') no-repeat;
        background-size: cover;
    }
</style>