<template>
  <div id="app">
     
            <v-touch @swipeleft="onSwipeLeft" @swiperight="onSwipeRight">
                <router-view></router-view>
            </v-touch> 
     
  </div>
</template>
<script>
export default {
  name: 'app',
  methods: {
        onSwipeLeft() {
        	// router转场后会自动触发vueg的转场特效
            switch (this.$route.name) {
                case 'default':
                case 'page1':
                    this.$router.push({
                        name: 'page2'
                    })
                    break
                case 'page2':
                    this.$router.push({
                        name: 'page3'
                    })
                    break
                case 'page3':
                    this.$router.push({
                        name: 'page4'
                    })
                    break
                case 'page4':
                    this.$router.push({
                        name: 'page5'
                    })
                    break
                case 'page5':
                    this.$router.push({
                        name: 'Home'
                    })
                    break
            }
        },
        onSwipeRight() {
            this.$router.back()
        }
    },
    mounted(){//解决默认touch-action被改成none，导致页面不能上下移动
        document.getElementById("app").children[0].style.touchAction='auto'
    }
}
</script>
<style>

#app>div {
    height: inherit;
   
}
</style>
