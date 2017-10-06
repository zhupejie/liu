<template>
    <div id="shi">
        <HomeMenu1></HomeMenu1>
        <v-touch @swipeleft="onSwipeLeft_shi">
            <router-view class="view2"></router-view>
        </v-touch>
        <ul class="circle-nav">
            <li :class="{'nav-current':$route.name==='shi1'||$route.name==='shidef'}"></li>
            <li :class="{'nav-current':$route.name==='shi2'}"></li>
            <li :class="{'nav-current':$route.name==='shi3'}"></li>
        </ul>     
    </div>
</template>
<script>
import HomeMenu1 from "./home_menu1"
export default {
    name: 'shi',
    components:{
        HomeMenu1
    },
    methods: {
        onSwipeLeft_shi() {
        	// router转场后会自动触发vueg的转场特效
            switch (this.$route.name) {
                case 'shidef':
                case 'shi1':
                    this.$router.push({
                        name: 'shi2'
                    })
                    break
                case 'shi2':
                    this.$router.push({
                        name: 'shi3'
                    })
                    break
                
            }
        }
    },
     mounted(){
        // let orderHeight=document.body.clientHeight;
        // document.getElementById("shi").style.height=orderHeight+'px';
    },
}
</script>
<style>
#shi{
    height: 100%;
}
.view2 {
    min-height: 100%;
    text-align: center;
    background: #f9f9f9;
}
#shi>div{
    height: inherit;
}
#shi .home_btn1{
   margin-left: .45rem
}
.circle-nav {
    position: fixed;
    bottom: 1.1rem;
    width: 100%;
    max-width: inherit;
    text-align: center;
    padding: 0;
    opacity: 0.75;
}

.circle-nav li {
    display: inline-block;
    width: .1rem;
    height: .1rem;
    border: .02rem solid #030303;
    background: #fff;
    margin: .34rem;
    position: relative;
}
.nav-current:before{
    content: '';
    display: block;
    width: .3rem;
    height: .3rem;
    background:  #030303;
    border-radius: 50%;
    position: relative;
    z-index: -1;
    left: -.12rem;
    top:-.12rem;
    border: .01rem solid #333;
}
</style>