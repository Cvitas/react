import types from "static/js/action-types";
export default function metadata(state = {
	loaded:false,
    wholeFood: [], //菜品元数据
    navList:[], //菜品分类
    sellOutDishIds:[], //菜品估清项
    skuList:[],//菜品备注
    presaleDishIds:[],//预点菜品
},action){
	switch(action.type){
        case types.HANDLE_METADATA:
            return{
                loaded:!state.loaded
            };
		default:
			return state;
	}
}
