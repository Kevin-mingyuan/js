
define(['jquery'],function($){
    'use strict';
    console.log('我是show模块'); 

    return {
        do:function(){
            $(document.body).append(`<div>我是动态生成的</div>`)
        },
        alertLL:function(){
            alert('你点击了我哦')
        }
    }

})