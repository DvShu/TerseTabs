/**
 * Created by haoran.shu on 2015/12/10.
 * 选项卡TerseTabs插件
 */
(function($, f){
    var TerseTabs = function(elem, options){
        // 获取所有的li子节点
        var liElems = elem.children("li");

        // 默认的配置项
        var opts = {
            "defaultIndex": 0, // 默认的选中项
            /* 切换样式,每一种样式之间用空格分隔,第一种样式为为选中时(默认)的样式,第二种样式为选中时的样式 */
            "toggleClass" : "terse_tab_item_normal terse_tab_item_selected",
            "onChange": false // 选项卡切换事件
        };

        // 重新配置配置项
       opts = $.extend(opts, options);

        init(liElems, opts); // 初始化

        /**
         * 初始化方法
         */
        function init(liElems, opts){
            if(opts.toggleClass){
                // 拆分传递的切换样式
                var splits= opts.toggleClass.split(" ");
                if(splits && splits.length > 0){
                    // 遍历每一个li
                    liElems.each(function (i) {
                        // 赋值初始样式
                        if(i == opts.defaultIndex){
                            $(liElems[i]).addClass(splits[1]);
                        }else{
                            $(liElems[i]).addClass(splits[0]);
                        }
                        // 为每一个li标签添加点击事件
                        $(this).bind("click", function(){
                            // 切换上一次选择和当前选择的样式
                            $(liElems[opts.defaultIndex]).toggleClass(opts.toggleClass);
                            $(liElems[i]).toggleClass(opts.toggleClass);
                            opts.defaultIndex = i; // 切换样式后设置默认选中项为当前点击的项的index
                            // 如果配置了选项卡切换回调事件,则回调方法
                            $.isFunction(opts.onChange) && opts.onChange(opts.defaultIndex);
                        });
                    });
                }
            }
        }
    };

    $.fn.terseTabs = function(options){
        // 获取当前节点的标签名称
        var tagName = this[0].tagName;
        if(tagName == "UL"){ // 目前只接受ul标签的tabs
            new TerseTabs(this, options);
        }
    }
})(jQuery, false);
