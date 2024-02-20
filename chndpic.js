let chg = document.getElementById("chg");
var nm = document.getElementById("nm");

function change(){
    var i = prompt("Enter new name : ");

    if(i == null)
        return nm;
    else     
        nm.innerHTML = i;

}chg.addEventListener("click",change);


$(document).ready(function(){
    $('#dp1').click(function(){
            $('#dp').attr('src','m2.jpg');
    });
});

$(document).ready(function(){
    $(".del1").click(function(){
        $(".post1").hide(10);
    });
    $(".del2").click(function(){
        $(".post2").hide(10);
    });
    $(".del3").click(function(){
        $(".post3").hide(10);
    });
    $(".del4").click(function(){
        $(".post4").hide(10);
    });
});