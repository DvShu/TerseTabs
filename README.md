# TerseTabs
---
在前端页面开发的时候，经常会用到选项卡的实现，特别是在做移动页面开发的时候，选项卡是最常用的方式了。<br>
这里我用了两种方式来实现，第一种是通过js控制，第二种是通过css来控制；现在我对通过js控制做了一个简单的封装，而通过css控制的没有做封装，因为这种方式适合在比较简单的选项卡上，需要通过&lt;lable&gt;的for属性来实现。
![](https://github.com/ReconcileMySelf/TerseTabs/raw/master/images/screen1.png)
![](https://github.com/ReconcileMySelf/TerseTabs/raw/master/images/screen2.png)
---
使用也比较简单。<br>
1.标签布局
``` HTML
  <!-- 声明：这些样式仅为提供的样式，如果觉得样式不好，可以自己声明样式表,不会影响使用
            其中：terse_tab_pack样式为主样式,其解决的问题的有：
                1.去除ul li前面的项目编号
                2.去除ul li的默认的内外边距
                3.设置文本不能被选择
         -->
        <ul id="tabs1" class="terse_tab_pack terse_tabs_style0">
            <li class="terse_tab_style0">语文</li>
            <li class="terse_tab_style0">数学</li>
            <li class="terse_tab_style0">英语</li>
        </ul>
```
2.调用封装的方法：
```javascript
$("#tabs1").terseTabs({
                "defaultIndex": -1, // 初始没有选中项
                /* 切换样式,每一种样式之间用空格分隔,第一种样式为为选中时(默认)的样式,第二种样式为选中时的样式 */
                "toggleClass" : "terse_tab_item_normal terse_tab_item_selected",
                // 选项卡切换事件
                "onChange" : function (i) {
                    var content = "";
                    if(i == 0){
                        content = "这是语文课";
                    }else if(i == 1){
                        content = "这是数学课";
                    }else if(i == 2){
                        content = "这是英语课";
                    }
                    $("#content").html(content);
                }
            });
```
`注意：封装是基于jquery来的，所以在使用之前应该先引用jquery。`
