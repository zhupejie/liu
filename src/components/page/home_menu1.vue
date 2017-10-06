<template>
    <nav>
        <div> 
            <mu-raised-button class="home_btn1" @click="toggle(true)"/>
            <mu-drawer :open="open" :docked="docked" @close="toggle()">
                <mu-list @itemClick="docked ? '' : toggle()">
                    <mu-list-item title="" @click="$router.push({name:'con2'})"/>
                    <mu-list-item title="" @click="$router.push({name:'shi'})"/>
                    <mu-list-item title="" @click="$router.push({name:'con2'})"/>
                    <mu-list-item title="" @click="$router.push({name:'con2'})"/>
                    <mu-list-item v-if="docked" @click.native="open = false" title="Close"/>
                </mu-list>
            </mu-drawer>
        </div>    
    </nav>    
</template>
<script>
export default {   
    data () {
        return {
            open: false,
            docked: true
        }
    },
    methods: {
        toggle (flag) {
        this.open = !this.open
        this.docked = !flag
        }
    },
    mounted(){       
        let homebtn = document.getElementsByClassName('home_btn1')[0];      
        homebtn.onclick=function(){        
            homebtn.className +=' active'
        }
    },
}
</script>
<style>
.home_btn1{
    width: .7rem;
    height: .6rem;
    line-height: 0;
    min-width: 0;
    background-image:url(http://h5zz.cn/item/dist/static/img/home_btn.png);
    background-repeat:no-repeat;
    background-size:cover;
    background-color:transparent;
    box-shadow: none;
    margin:.62rem 0 0 .05rem;
    position: fixed;
}
.home_btn1.active{
   background-image:url(http://h5zz.cn/item/dist/static/img/home_btn_active.png); 
}
.mu-drawer{
    width: 2.5rem;
    background-image:url(http://h5zz.cn/item/dist/static/img/nav.jpg);
    background-repeat:no-repeat;
    background-size:cover;
    background-color:transparent;
}
.mu-list{
    height: inherit;
    padding-top: 3.25rem;
}
.mu-item{
    padding: .77rem 0;
    margin-bottom: .7rem;
}
</style>
