import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export const store= new Vuex.Store({
    state:{//每次mutation操作后将state中的goodsList存入到localstorage。每次启动服务后，判断localstorage是否有值，有值得话用json.parse转化为数组赋值给state.goodList，没有值得话则为state.goodsList设置默认值为空数组[ ]；
		goodsList:localStorage["goodsList"]?JSON.parse(localStorage["goodsList"]): []  
	},
	getters:{
		sum:state=>{//计算总金额的方法
			let total=0;
            state.goodsList.forEach((item)=>{
                if(item.select){
                    total+=item.price*item.number
                }             
            })
            return total
		},
		goodsNumber:state=>{//商品条目
			return state.goodsList.length
		}
	},
	mutations:{
		addGoods:(state,data)=>{//新添加数据
			state.goodsList.push(data);
			localStorage.setItem("goodsList",JSON.stringify(state.goodsList));						
		},
		deleteGoods(state,index){//删掉数据
			state.goodsList.splice(index,1);		
			localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
		},
		updateGoods(state,data){//更新数据,index为操作第几个元素，key为要改变的key,value为新的值
			const {index,key,value}=data;
			state.goodsList[index][key]=value;	
			localStorage.setItem("goodsList",JSON.stringify(state.goodsList));
		}
	}
})