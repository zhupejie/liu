<template>
  <div id="goodsdetail">
      <MyHeader :isShow='false'></MyHeader>
      <img :src="picurl" alt="" class="goodsdetail_pic">
      <div class="goodsdetail_tit">
            <div class="goodsdetail_left">
                <span class="goodsdetail_name">{{name}} / </span><span class="goodsdetail_author">{{author}}</span>
            </div>
            <div class="goodsdetail_right">
                <span class="goodsdetail_remaindernum">剩余{{remaindernum}}件</span><span class="goodsdetail_totalnum"> / 共{{totalnum}}件</span>
            </div>
      </div>
      <div class="goodsdetail_tit2">
          <div class="goodsdetail_price">￥{{price}}</div>
          <div class="goodsdetail_icon">
              <span><i :class="{'icon iconfont icon-like':!flag,'icon iconfont icon-like_fill':flag}" @click="toggle" ></i> </span><span><i class="icon iconfont icon-share"></i> 分享</span><span><i class="icon iconfont icon-tousu"></i> 投诉</span>
          </div>
      </div>  
    <p>{{des}}</p>
    <div class="goodsdetail_btn">
        <!-- 商品添加入购物车，传入id -->
        <button @click="addToCar(id)">加入购物车</button>      
        <router-link to="/car" >
            <div  @click="addToCar(id)">立即购买</div>
        </router-link>
    </div>
    
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
           flag:false,
           id:this.$route.params.id,
           addSuccess:false,
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
            name:'',
            remaindernum:0,
            totalnum:0,
            price:0,
            picurl:'',
            author:'',
            des:''
        }
    },
    mounted(){
        // let orderHeight=document.body.clientHeight;
        // document.getElementById("goodsdetail").style.height=orderHeight+'px';
        this.id=this.$route.params.id;//商品页点击的商品的id
    	this.addSuccess=false;	//购物车是否有数据的判断值
        this.fetchData();//对应id取数据的方法
    },
    methods: {
        toggle(){
            this.flag = !this.flag;
        },
        fetchData () {
            this.goodsitem.forEach((val)=>{
                if(this.id==val.id){
                    this.name=val.name;
                    this.remaindernum=val.remaindernum;
                    this.totalnum=val.totalnum;
                    this.price=val.price;
                    this.picurl=val.picurl;
                    this.author=val.author;
                    this.des=val.des;
                }
            })
        },
        addToCar(id){
 			let carList=this.$store.state.goodsList;//vuex保存的数据
 			let idExist=carList.find((item)=>{
 				return item.id==id
 			})
 			if(!idExist){//如果购物车没有数据，需要新添加
 				let data={
 					url:this.picurl,
                    name:this.name,
                    price:this.price,
                    number:1,
                    select:false,
                    id:this.id
 				}
 				this.$store.commit("addGoods",data);//使用mutation
 				this.addSuccess=true;//新添加后状态改变						
 			}else{
 				return alert("已加入购物车")
            }
        }
    }
}
</script>
<style>
#goodsdetail{
    padding: 0 .3rem;
    background: #f9f9f9; 
    height: 100%;  
}
.goodsdetail_pic{
    width: 4.44rem;
    height: 4.44rem;
    margin: 1.25rem auto 0;
}
.goodsdetail_tit{
    display: flex;
    justify-content: space-between;
    margin: .7rem 0 .4rem;
}
.goodsdetail_tit2{
    display: flex;
    justify-content: space-between; 
    align-items:  center;
    margin-bottom: .45rem;
}
.goodsdetail_icon{
    width: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items:  center;
    color:#666;
}
.goodsdetail_name{
    font-size: .3rem;
}
.goodsdetail_remaindernum{
    font-size: .24rem;
    color:#a73b3f;
}
.goodsdetail_totalnum{
    font-size: .24rem;
    color:#666;
}
.goodsdetail_price{
    color:#a73b3f;
    font-size: .45rem;
    font-weight: border;
}
.goodsdetail_author{
    font-size: .24rem;
    color:#666;
}
.goodsdetail>p{
    font-size: .14rem;
    color:#666;
    
}
.goodsdetail_btn{
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    position: fixed;
    bottom: .4rem;
    left:0;
}
.goodsdetail_btn>button{
    border: none;
    width: 2.85rem;
    height: .88rem;
    border: 1px solid #000;
    border-radius: .07rem;
    background: #fafafa;
}
.goodsdetail_btn>a{
    display: block;
    width: 2.85rem;
    height: .88rem;
    border: 1px solid #a73b3f;
    border-radius: .07rem;
    background: #fafafa;
    color: #a73b3f;
    text-align: center;
    line-height: .88rem;
    font-size: .28rem;
}
</style>