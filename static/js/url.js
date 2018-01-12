/**
 * Created by cx on 2017/10/23.
 * Include
 * description
 */
export default {
    getOrgId:'/rms/wechat/restaurant/orgid/get.do',//获取orgId
    getOpenIdRedirect:'/rms/wechat/restaurant/authorization/auth-url.do',//微信重定向获取openId
    weichatPayRedirect:'/rms/wechat/restaurant/pay/auth-code-url.do',//微信重定向获取openId
    getOpenId:'/rms/wechat/restaurant/authorization/openid.do',//微信重定向获取openId
    authority:'/rms/wechat/restaurant/take-out/check.do',//是否启用点餐权限
    dishesAndType:'/rms/wechat/restaurant/dishes-and-types.do',//查询所有菜品元数据
    getTableList:'/rms/wechat/restaurant/reserve/table/list.do',//查询可用餐桌
    confirmOrder:'/rms/weixin/take_out/confirmOrder.do',//下单
    confirmTakeout:'/rms/wechat/restaurant/take-out/add.do',//增加外卖
    orderPreview:'/rms/weixin/order/{orderId}/checkount/preview.do',//查询订单
    orderInfo:'/rms/weixin/order/info-new.do',//预定信息
    orderCheckOut:'/rms/weixin/order/checkout.do',//增加预定
    getContactList:'/rms/wechat/restaurant/take-out/receiver/address/list.do',//查询联系人列表
    addContact:'/rms/wechat/restaurant/take-out/receiver/address/add.do',//查询联系人列表
    deleteContact:'/rms/wechat/restaurant/take-out/receiver/address/delete.do',//删除联系人
    getCouponList:'/rms/wechat/restaurant/coupon/get.do',//查询优惠券列表
    checkCoupon:'/rms/wechat/restaurant/check/coupon.do',//验券
    getOrderList:'/rms/weixin/order/take_out/info-detail.do',//获取订单列表
}