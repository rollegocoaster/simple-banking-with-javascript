let balance = 100;
var clearAfterUse = false;
function change(){
    clearAfterUse = document.getElementById("clearAfterUse").checked;
    console.log(clearAfterUse)
}
function checkInput(){
    var amount = document.getElementById("input").value;
    console.log("test",amount > balance);
    triggerButtons("");
    if (amount > balance){
        document.getElementById("withdraw").className = "button buttonw disabled";
    }
    
}

function triggerButtons(text){
    if(text=="" || text==" disabled"){
        document.getElementById("withdraw").className = "button buttonw" + text;
        document.getElementById("add funds").className = "button buttonadd" + text;
    }
}


function withdrawAmount(){
    var amount = Number(document.getElementById("input").value);
    if(amount <= balance){
        balance = (balance - amount);
        document.getElementById("balance").innerHTML = "Current Balance: $" + balance.toFixed(2);
        if(clearAfterUse){
            document.getElementById("input").value = "";
            triggerButtons(" disabled");
        } else if(balance == 0) {
            document.getElementById("withdraw").className = "button buttonw disabled";
        }
        
    }
}

function addFunds(){
    let amount = Number(document.getElementById("input").value);
    balance = balance + amount;
    document.getElementById("balance").innerHTML = "Current Balance: $" + balance.toFixed(2);
    if(clearAfterUse){
        document.getElementById("input").value = "";
        triggerButtons(" disabled");
    } else {
        triggerButtons("");
    }

}