require.config({
    paths:{
        'jquery':'../lib/jquery.min',
        'show':'./show'
    }
})
//如果依赖的模块不在当前目录下 ，需要require.config 进行路径配置 进行映射
define(['jquery','show'],function($,show){
    'use strict';
    $(function(){
        $('#box').html(`<h1>hell require</h1>`);
        $('#box').click(function(){
            show.alertLL();
            show.do();
        })
        show.do();
    })

})
