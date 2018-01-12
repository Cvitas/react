/**
 * Created by cx on 2017/10/18.
 * Include
 * description
 */

/**
 * Created by caoxin@grkj.cn on 2016/11/23.
 * http://kd.cc
 * Include
 * description
 */
import fetch from "isomorphic-fetch";
import urls from "urls"
var CMD = urls;
export default {
    sendCmd:'',//发送的cmd
    sendTime:0,//发送时间
    stopSendInterval:300,//时间间隔内(ms)的相同的请求终止发送
    /*模拟WEBSOCKET请求*/
    send(cmd,data,method,url,cache){
        var promise = new Promise((resolve, reject)=> {
            var time = new Date().getTime();
            method = method?method:"post";
            if(CMD[cmd]){
                if(this.currentCmd == cmd && (time - this.sendTime) < this.stopSendInterval){
                    console.log(cmd+':请求发送时间间隔太短，被终止!');
                    reject();//防止轮询被终止
                    return false;
                }
                this.currentCmd = cmd;
                this.sendTime = time;
                if(cache){
                    if(window.sessionStorage.getItem(cmd)){
                        var val = JSON.parse(window.sessionStorage.getItem(cmd));
                        resolve(val);
                        return false;
                    }
                }
                url = url?CMD[cmd]+url:CMD[cmd];
                if(url.indexOf("{orderId}") > -1){
                    if(data.orderId){
                        url = url.replace("{orderId}",data.orderId);
                    }else{
                        reject();
                    }
                }
                data = data?data:null;
                let body = Object.entries(data).reduce((arr, [k, v]) =>
                    arr.concat(encodeURIComponent(k) + '=' + encodeURIComponent(v)), []).join('&');
                let params = {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
                    },
                    method : method,
                    body : body
                };
                fetch(url,params).then((response)=>{
                    return response.json();
                }).then(val=>{
                    if(val.code == '1001'){
                        window.sessionStorage.clear();
                        return;
                    }
                    if(val.code == '1010'){
                        window.location.reload();
                        return;
                    }
                    if(val.code == '200'){
                        console.log("获取成功:"+cmd);
                        if(cache){
                            window.sessionStorage.setItem(cmd,JSON.stringify(val));
                        }
                        resolve(val);
                    }else{
                        reject(val);
                    }
                }).catch((error)=>{
                    console.log("获取异常:"+cmd);
                    reject(error);
                });
            }else{
                //异常处理
                console.log("获取异常:"+cmd);
                reject();
            }
        });
        return promise;
    }
};