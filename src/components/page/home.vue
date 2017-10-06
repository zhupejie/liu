<template>
    <div id="home">
        <HomeMenu1></HomeMenu1>
        <img src="../../assets/images/home_pic_03.jpg" alt="home_tit" class="home_tit">
        <router-link to="/content" class="home_con"></router-link>
        <HomeMenu2></HomeMenu2>
    </div>
</template>
<script>
import HomeMenu1 from "./home_menu1"
import HomeMenu2 from "./home_menu2"
export default {
    components:{
        HomeMenu1,
        HomeMenu2
    },
    mounted(){
        // let orderHeight=document.body.clientHeight;
        // document.getElementById("home").style.height=orderHeight+'px';  
    },
}
</script>
<style>
#home {
    background: #f9f9f9;
    padding: 0 .4rem 0;
    height: 100%;
}
.home_tit{
    width: 2.07rem;
    height: 3rem;
    margin: 3.3rem 0 1rem;
    display: inline-block;
}
.home_con{
    display: inline-block;
    width: 6.72rem;
    height: 2.42rem;
    background-image:url(http://h5zz.cn/item/dist/static/img/home_pic_06.jpg);
    background-repeat:no-repeat;
    background-size:contain;
}
</style>