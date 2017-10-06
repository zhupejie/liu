<template>
  <div class="shi1">
    <router-link to=""  slot="shi_con_pic" class="shi_con_pic"><img src="../../assets/images/shi_con_pic1.png"></router-link>  
    <Shicon shi_con_tit='精品 拍卖'></Shicon>
  </div>
</template>
<script>
import Shicon from "./shi_swipe_con"
	export default{
		components:{
        Shicon
    },
		data(){
			return {
				//由于vueg的嵌套路由默认不启动转场动画，需要在其匹配组件中设置为启用
				vuegConfig:{
					disable:false
        }
			}
    }
	}
</script>
<style  scoped>
</style>