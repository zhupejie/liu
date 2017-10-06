<template>
    <div @click="$router.push({name:'con3'})"></div>
</template>
<script>
	export default{	
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
<style scoped>
div {
    background-image:url(http://h5zz.cn/item/liu/static/img/con2.png);
    background-size:contain;
    background-repeat:no-repeat;
	background-position:center;
}
</style>