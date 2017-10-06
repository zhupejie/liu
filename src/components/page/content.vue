<template>
    <div id="content">
        <v-touch @swipeleft="onLeft">
            <!-- 引导页会显示在这个嵌套路由中 -->
            <router-view class="view1"></router-view>
        </v-touch>
    </div>   
</template>
<script>
export default {
    name: 'content',
    methods: {
        onLeft() {
        	// router转场后会自动触发vueg的转场特效
            switch (this.$route.name) {
                case 'condef':
                case 'con1':
                    this.$router.push({
                        name: 'con2'
                    })
                    break
                case 'con2':
                    this.$router.push({
                        name: 'con3'
                    })
                    break
                
            }
        }
    },
    mounted(){
        // let orderHeight=document.body.clientHeight;
        // document.getElementById("content").style.height=orderHeight+'px';
    },
}
</script>
<style>
#content{
    height: 100%;
}
.view1 {
    min-height: 100%;
}
#content>div {
    height: inherit;
}
</style>
