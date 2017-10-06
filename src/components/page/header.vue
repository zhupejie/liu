<template>
    <div class="headerWrap">
        <i class="icon iconfont icon-return" @click="goback(togo)"></i>
        <span v-show='isShow'>{{txt}}</span>
        <!-- 点击类名切换 -->
        <i :class="{'icon iconfont icon-search':!flag,'icon iconfont icon-searchfill':flag}" @click="toggle"  v-show='isShow'></i>
    </div>
</template>
<script>
export default{
    props:['txt','isShow','togo'],
    data(){
        return{
            flag:false      
        }
    },
    methods: {
        toggle(){
            this.flag = !this.flag;
        },
        //返回，传参能返回到指定页面
        goback(togo){
            togo==undefined?this.$router.back():this.$router.push({path:'/'+togo})          
        }
    }
}
</script>
<style>
    .headerWrap{
        width: 100%;
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: .35rem;
        position: fixed;
        top: 0;
        left:0;
        z-index: 100;
        background: #f9f9f9; 
    }
    .headerWrap i{
        font-size:.7rem;
        color: #999;
    }
</style>