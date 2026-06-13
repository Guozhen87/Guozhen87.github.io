let money = 0;
let click = 1;

function earn(){
    money = money + click;
    document.getElementById("money").value = money;
}

function buyuser(){
    if(money < 5){
        alert("你沒有夠多的錢買");
        return;
    }

    money = money - 5;
    document.getElementById("money").value = money;
    alert("已購買 小孩很好吃");
    click = click + 1;
    document.getElementById("click_money").value = click;
    return;
}

function buyuser67(){
    if(money < 67){
        alert("你沒有夠多的錢買");
        return;
    }

    money = money - 67;
    document.getElementById("money").value = money;
    alert("six seven!!!!!!")
    click = click + 67;
    document.getElementById("click_money").value = click;
    return;
}

function buy(){
    if(money <20){
        alert("你沒有夠多的錢買");
        return;
    }
    
    money = money - 20;
    document.getElementById("money").value = money;
    alert("已購買 小孩很好吃");
    
    setInterval(function(){
        money = money + 1;
        document.getElementById("money").value = money;
    }, 1000);
    
    return;
}

function buy67(){
    if(money <67){
        alert("你沒有夠多的錢買");
        return;
    }
    
    money = money - 67;
    document.getElementById("money").value = money;
    alert("six seven!!!");
    
    setInterval(function(){
        money = money + 67;
        document.getElementById("money").value = money;
    }, 1000);
    
    return;
}