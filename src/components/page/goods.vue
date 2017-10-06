<template>
    <div id="GoodsWrap">
        <!-- 传递实际数据类型要在isShow前加： -->
        <MyHeader txt='工艺集市' :isShow='true' togo='home'></MyHeader>
       
        <ul class="clearfix" id="domul">  
            <router-link tag="li" v-for="(item,index) in goodsitem" :key="item.id" :to='{path:"/goods-detail/"+item.id}' class="goodsitem">
                <img :src="item.picurl" alt="">
                <div class="goodsitemtxt">
                <div class="goodsitemtxt_left">
                    <div class="goodsitem_name">{{item.name}}</div>
                    <div>
                        <span class="goodsitem_remaindernum">剩余{{item.remaindernum}}件</span><span class="goodsitem_totalnum">/共{{item.totalnum}}件</span>
                    </div>
                </div>
                <div class="goodsitemtxt_price">￥{{item.price}}</div>
                </div>    
            </router-link>
        </ul>
        
        
    </div>
</template>
<script>
import MyHeader from './header'
export default{
    components:{
        MyHeader       
    },
    data(){
        return{
            goodsitem:[
                {'name':'檀香折扇','remaindernum':13,'totalnum':20,'price':160,'picurl':require('../../assets/images/goodsitem_03.jpg'),'id':1,'author':'李师傅','des':'檀香扇，特色手工艺品，是苏州的一大特产，用檀香木制成的各式折扇和其他形状的扇。檀香木，又名旃檀，白者白檀，皮腐色紫者紫檀，木质坚硬。檀香木制成檀香扇具有天然香味，用以扇风，清香四溢。为中国四大名扇。'},
                {'name':'便携香盒','remaindernum':1,'totalnum':3,'price':88,'picurl':require('../../assets/images/goodsitem_05.jpg'),'id':2,'author':'金师傅','des':'香包的前身，一个用 玉、金属等材料做成小盒子，里面装着香料，可以当挂件，也可以当腰链、项链。'},
                {'name':'手工蹴鞠','remaindernum':2,'totalnum':3,'price':288,'picurl':require('../../assets/images/goodsitem_09.jpg'),'id':3,'author':'吴师傅','des':'蹴鞠即古代的足球,据史料记载早在战国时期汉族民间就流星娱乐性的蹴鞠游戏。蹴鞠在古代也有镇宅或是祈福的神物。此球采用的毛线材质,配以复杂而华丽的几何花纹。'},
                {'name':'贴金发簪','remaindernum':1,'totalnum':1,'price':980,'picurl':require('../../assets/images/goodsitem_10.jpg'),'id':4,'author':'张师傅','des':'发簪，古代中国用来固定和装饰头发的一种首饰。对于现代女性来说已经是一个很古老的名词了，但是当在看古装剧时，却总是能被它们点缀出的精致效果所折服。'},
                {'name':'檀香折扇1','remaindernum':13,'totalnum':20,'price':160,'picurl':require('../../assets/images/goodsitem_03.jpg'),'id':5,'author':'李师傅','des':'檀香扇，特色手工艺品，是苏州的一大特产，用檀香木制成的各式折扇和其他形状的扇。檀香木，又名旃檀，白者白檀，皮腐色紫者紫檀，木质坚硬。檀香木制成檀香扇具有天然香味，用以扇风，清香四溢。为中国四大名扇。'},
                {'name':'便携香盒2','remaindernum':1,'totalnum':3,'price':88,'picurl':require('../../assets/images/goodsitem_05.jpg'),'id':6,'author':'金师傅','des':'香包的前身，一个用 玉、金属等材料做成小盒子，里面装着香料，可以当挂件，也可以当腰链、项链。'},
                {'name':'手工蹴鞠3','remaindernum':2,'totalnum':3,'price':288,'picurl':require('../../assets/images/goodsitem_09.jpg'),'id':7,'author':'吴师傅','des':'蹴鞠即古代的足球,据史料记载早在战国时期汉族民间就流星娱乐性的蹴鞠游戏。蹴鞠在古代也有镇宅或是祈福的神物。此球采用的毛线材质,配以复杂而华丽的几何花纹。'},
                {'name':'贴金发簪4','remaindernum':1,'totalnum':1,'price':980,'picurl':require('../../assets/images/goodsitem_10.jpg'),'id':8,'author':'张师傅','des':'发簪，古代中国用来固定和装饰头发的一种首饰。对于现代女性来说已经是一个很古老的名词了，但是当在看古装剧时，却总是能被它们点缀出的精致效果所折服。'}
            ],
           
        }
    }
}
</script>
<style>
    #GoodsWrap{
        background:#f9f9f9;
        padding: 0 .3rem;
    }
    #GoodsWrap ul{
        margin-top: 1.25rem;
    }
    #GoodsWrap ul li:nth-of-type(odd){
        margin-right: .5rem;
        }
    .goodsitem{
        width: 3.16rem;
        height: 4.6rem;
        float: left;
    }
    .goodsitem>img{
        width: 3.16rem;
        height: 3.16rem;
    }
    .goodsitemtxt{
        display: flex;
        justify-content: space-between;
        align-items: center;
       
    }
    .goodsitemtxt_left>div{
        white-space:nowrap;
    }
    .goodsitem_name{
        font-size: .3rem;
    }
    .goodsitemtxt_price{
        color:#a73b3f;
        font-size: .45rem;
        font-weight: border;
    }
    .goodsitem_remaindernum{
        font-size: .24rem;
        color:#a73b3f;
    }
    .goodsitem_totalnum{
        font-size: .24rem;
        color:#666;
    }
    .goodsitem>a{
        color: #000;
    }
</style>