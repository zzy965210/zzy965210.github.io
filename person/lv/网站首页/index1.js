window.onload=function(){
    var boximg=document.querySelectorAll(".bannerimg li");
    var boxdian=document.querySelectorAll(".banner-dian li");
    var box=document.querySelector(".banner-box");

    var lis=setInterval(fun,2000);
    var lid=0;
    function fun(){
        //循环
        lid++;
        if(lid==boximg.length){
            lid=0;
        }
        for(var i=0;i<boximg.length;i++){
            boximg[i].classList.remove("active");
            boxdian[i].classList.remove("active");

        }
        boximg[lid].classList.add("active");
        boxdian[lid].classList.add("active");

        //鼠标移入停止
        box.onmouseover=function(){
            clearInterval(lis);
        }
        //鼠标移出开始
        box.onmouseout=function(){
            lis=setInterval(fun,2000);
        }
        //点击轮播点
        boxdian.forEach(function(value,index){
            value.onclick=function(){
                for(var i=0;i<boxdian.length;i++){

                    boxdian[i].classList.remove("active");
                    boximg[i].classList.remove("active");
                }

                boxdian[index].classList.add("active");
                boximg[index].classList.add("active");

                //跳转到当下位置，当下的下标
                lid=index;
            }
        })

    }



}














