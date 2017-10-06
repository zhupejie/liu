<template>
  <div id="carlist">
        <MyHeader :isShow='false'></MyHeader>
	    <ul>
	    	<li class="carlist" v-for="(v,i) in goodsList" :key='v.id'>
	    		<div class="carlist_img">
	    			<img :src="v.url">
	    		</div>
	    		<div class="carlist_detail">
	    			<p class="carlist_detail_name">{{v.name}}</p>
	    			<p class="carlist_detail_number">数量：<button class="icon iconfont icon-jian" @click="changeNumber(v.id,-1)"></button><input type="text" readonly="" v-model="v.number"><button class="icon iconfont icon-jia" @click="changeNumber(v.id,1)"></button></p>
	    			<p>单价：<span>￥{{v.price}}</span></p>
	    			<p>小计：<span>￥{{v.price*v.number}}</span></p>
	    		</div>
	    		<div class="carlist_operate">
	    			<span class="icon iconfont icon-cuowuguanbiquxiao-yuankuang" @click="del(v.id)"></span>
	    			<label >
	    				<!-- <input type="checkbox" name="goods" :checked="v.select==true" @change="toggleSelect(v.id)"> -->
                    
                        <el-checkbox :checked="v.select==true" @change="toggleSelect(v.id)"></el-checkbox>
	    			</label>
	    		</div>	   	    		
	    	</li>
	    </ul>
	    <div class="car_foot_nav">
	    	<div class="sum_price">总额：￥{{sum}}</div>
	    	<router-link :to='{name:"goods"}' class="continue_shopping" tag="button">继续购物</router-link>
	    	<button class="to_pay" @click="checkout">结算</button>
	    </div>
   </div>
</template>
<script>
import MyHeader from './header'
//vuex提供了mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'
export default{
    name:'car',
    data(){
        return{

        }
    },
    components:{
        MyHeader
    },
    methods:{//在methos中使用展开运算符混入到原有方法中
        ...mapMutations(//向methods混入2个方法
            ["deleteGoods","updateGoods"]
        ),
        findPosition(id){//定位操作的数据
            return this.goodsList.findIndex(item=>{
                return item.id==id
            })
        },
        changeNumber(id,val){//点击加减号时，传入+1或者-1
            let i=this.findPosition(id);
            let number=this.goodsList[i].number;
            this.updateGoods({
                index:i,
                key:"number",
                value:number+val<=0?1:number+val
            })
        },
        del(id){//点击删除
            let i=this.findPosition(id);
            this.deleteGoods(i);
        },
        toggleSelect(id){//点击切换选中
            let i=this.findPosition(id);
            let select=this.goodsList[i].select;
            this.updateGoods({
                index:i,
                key:"select",
                value:!select
            })            
        },
        checkout(){
            if(this.$store.state.sum!=0){
                this.$store.state.goodsList=[];
               this.$store.state.sum=0;
                this.$message({
                    message:'结账成功'
                })
            }else{
                this.$message.error('不能空结')
            }
        }
    },
    computed:{
        ...mapGetters(
            [ "sum"]
        ), 
        goodsList(){
            return this.$store.state.goodsList
        }
    }
}
</script>
<style>
    #carlist{
        background: #fafafa;
        height: 100%;
    }
    #carlist>ul{
        margin-top: 1.25rem;
        padding-bottom:1.11rem;
    }
    .carlist{
        padding: 0.3125rem;
   		position: relative;
   		border-bottom: 0.0312rem solid #ddd;
        display: flex;
    }
    .carlist_img{
        width:2rem;
	   	height: 2rem;
    }
    .carlist_detail{
        flex:1;
   		padding:0 .35rem;
    }
    .carlist_detail>p{
        padding:.0312rem 0;
   		color: #888;
    }
    .carlist_detail>p>span{
        color:#a73b3f;
    }
    .carlist_detail .carlist_detail_name{
        padding-bottom: .08rem;
        color:#000;
 
    }
    .carlist_detail_number>button{
        width: .6344rem;
   		height: .6344rem;
        border: 1px solid #aaa;
   		background: #fafafa;
        text-align: center;
   		vertical-align: middle;   
    }
    .carlist_detail_number>input{
        border: 1px solid #aaa;
        border-left: none;
        border-right: none;
        box-sizing: border-box;
        width:1rem;
        height: .6344rem;
        text-align: center;
        vertical-align: middle;
        color: #666;
    }
    .carlist_operate{
        width:.5rem;
    }
    .icon-cuowuguanbiquxiao-yuankuang{
        color:#bbb;
        position: absolute;
        top:.3125rem;
        right:.3125rem;
        font-size: .5rem
    }
    .carlist_operate>label{
        position: absolute;
        bottom:.3125rem;
        right:.3125rem;
    }
    .car_foot_nav{
        position: fixed;
   	    bottom:0;
   	    width: 100%;
   	    border-top: .0156rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .car_foot_nav>button{
        flex:1;
        height: 1.11rem;
        border: none;
    }
    .sum_price{
        background: #fff;
        width:40%;
        height: 1.11rem;
        color:#a73b3f;
        text-align: center;
        line-height: 1.11rem;
    }
    .continue_shopping{
        background: #666;
		color: #fafafa;
    }
    .to_pay{
        background: #a73b3f;
		color: #fafafa;
    }
</style>