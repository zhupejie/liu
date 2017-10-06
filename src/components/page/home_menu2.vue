<template>
<div>
    <div class="cbp-spmenu cbp-spmenu-horizontal cbp-spmenu-top" id="cbp-spmenu-s3">
        <form action="">
            <input type="text" placeholder="请输入">
            <button>搜索</button>
        </form>
        <div class="clearfix spmenu_group" v-for="(item,key,index) in searcharr" :key="item.id">
            <div class="clearfix">
                <div class="spmenu_left">{{key}}</div>
                <ul class="spmenu_right clearfix">
                    <li v-for="val in item.btnitem" :key="val.id"><router-link :to="val.routerto">{{val.name}}</router-link></li>
                </ul>
            </div>          
            <div :class="{spmenu_line:item.line}"></div>
        </div>
    </div>
    <button id="showTop"></button>
</div>
</template>
<script>
import "../../assets/libs/js/classie.js"
export default {
    data () {
        return {
            open: false,
            searcharr:{
                '材质':{
                    'btnitem':[
                        {'name':'布帛','routerto':''},
                        {'name':'纸本','routerto':''},
                        {'name':'原木','routerto':''},
                        {'name':'金属','routerto':''},
                        {'name':'大漆','routerto':''},
                        {'name':'麻绳','routerto':''},
                        {'name':'陶瓷','routerto':''},
                        {'name':'其他','routerto':''}
                        ],
                    'line':true
                },
                '地域':{
                    'btnitem':[
                        {'name':'扬州漆器','routerto':''},
                        {'name':'徽州砖雕','routerto':''},
                        {'name':'江西瓷器','routerto':''},
                        {'name':'更多','routerto':''}
                        ],
                    'line':false
                }
            }
        }
    },
    methods: {
        toggle () {
        this.open = !this.open
        }
    },
    mounted(){
        let showTop = document.getElementById( 'showTop' ),
        menuTop = document.getElementById( 'cbp-spmenu-s3' ),
        body = document.body;
        showTop.onclick = function() {
            classie.toggle( this, 'active' );
            classie.toggle( menuTop, 'cbp-spmenu-open' );
        }
    }
}
</script>
<style>
    #showTop{
        width: 1.16rem;
        height: 1.16rem;
        background-image:url(http://h5zz.cn/item/liu/static/img/home_pic_10.jpg);
        background-repeat:no-repeat;
        background-size:cover;
        background-color:transparent;
        position: fixed;
        left:3.17rem;
        bottom: 1.09rem;
        border: none;
        outline:none
    }
    #showTop.active{
        background-image:url(http://h5zz.cn/item/liu/static/img/home_btn2.png);
    }
    .cbp-spmenu{
        height: 9.84rem;
        width: 100%;
        background: rgba(0,0,0, .8);
        position:fixed;
        color: #fff
        }
    .cbp-spmenu-horizontal{
        width:100%;
        height:9.84rem;
        left:0;
        z-index:1000;
        overflow:hidden;
        }
    .cbp-spmenu-top{
        top:-9.84rem;
        }
    .cbp-spmenu-top.cbp-spmenu-open{
        top:0px;
        }
    .cbp-spmenu,.cbp-spmenu-push{
        -webkit-transition:all 0.3s ease;
        -moz-transition:all 0.3s ease;
        transition:all 0.3s ease;
        }
    form{
        padding: .4rem 0 .7rem 1.2rem
        }
    form>input{
        width: 4.24rem;
        height: .56rem;
        border: .2px solid #fff;
        border-radius: 25px;
        background: transparent;
        vertical-align: middle;
        color:#9b9b9b;
        margin-right: .45rem;
        padding-left: .23rem;
        line-height: .56rem;
    }
    form>button{
        vertical-align: middle;
        background: transparent;
        border: none;      
        font-size: .26rem;
        width: .3rem;
        text-align:  center;
        color: #fff;
    }
    .spmenu_left{
        float: left;
        height: 1.43rem;
        width: .55rem;
        border: .06rem double #fff;
        text-align: center;
        line-height: .7rem;
        border-radius: .07rem;
        margin: .55rem .66rem;
    }   
    .spmenu_right li{
        width: .3rem;
        text-align: center;
        margin: .5rem;
        line-height: .41rem;
        color:#fff;
        float: left;       
    }
    .spmenu_right li>a{
        color:#fff;
    }
    .spmenu_line{
        height: 0;
        width: 6.12rem;
        border: .01rem solid #979797;
        margin-left: .7rem;
    }
</style>