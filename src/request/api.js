import axios from './request';

//首页数据接口
export const getHomeData=()=>axios.get('/mock/home.json')

export const getStoreData = ()=> axios.get('/mock/store.json')