import {createStore} from 'vuex'

export default createStore({
    state:{
        cartList:[],//购物车列表数据
        orderList:[],//生成订单列表数据
        orderListed:[],//生成订单后列表的数据
        edit:true,
        userAddress:[{
            id:1001,
            name:'张三',
            tel:'13123456111',
            province:'广东省',
            city:'广州市',
            county:'天河区',
            addressDetail:'asd',
            isDefault:true,
            areaCode:'110111',
        },
        {
            id:1002,
            name:'李四',
            tel:'13123456111',
            province:'广东省',
            city:'广州市',
            county:'天河区',
            addressDetail:'asd',
            isDefault:false,
            areaCode:'110111',
        },
    ],
    },
    mutations:{
        ADDCART(state,value){
          state.cartList=value;
        },
        PAY(state,value){
            state.orderList = value;
        },
        DELETE(state,value){
            state.cartList = value;
        },
        EDIT(state,value){
            if(value === 'delete'){
               state.edit=true;
            }else{
                state.edit = !state.edit;
            }
        },
        UPDATEORDER(state){
                state.orderListed = state.orderListed.concat(state.orderList);
            },
            //新增地址
        ADDADDRESS(state,value){
                state.userAddress.map((item)=>{
                    if(value.isDefault){
                        item.isDefault = false;
                    }
                });
                state.userAddress.push(value);
            },

            //编辑地址
            CHANGEADDRESS(state,value){
                state.userAddress=state.userAddress.map((item)=>{
                    if(value.isDefault){
                        item.isDefault = false;
                    }
                    return item.id === value.id ? value : item;
                });
            },
            //地址删除按钮
            DELETEADDRESS(state,value){
                state.userAddress=state.userAddress.filter((item)=>{
                    return !(value.id === item.id);
                });
                if(value.isDefault && state.userAddress.length){
                    value.userAddress[0].isDefault = true;
                }
            },
        },
    actions:{},
});