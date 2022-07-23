// global variables
let balance = 100; // stores the balance to update
var clearAfterUse = false; // stores whether the checkbox is checked

function change(){
    /**
     * updates the clearAfterUse variable to match the new checked state 
    */
    clearAfterUse = document.getElementById("clearAfterUse").checked;
}

function checkInput(){
    /** 
     * gets the value in the input textbox and enables the buttons accordingly
     * enables the add funds button if the textbox is not empty
     * enables the withdraw button if there is enough money in the balance to withdraw 
    */
    var amount = document.getElementById("input").value;
    // try to enable both buttons if not empty 
    enableButtons(
        deposite = (amount != ""), 
        withdraw = (amount != "" && amount <= balance) 
    );
    
}

function enableButtons(deposite, withdraw){
    /**
     * helper function: inputs two booleans to control whether the each button should be enabled
     *      
    */
    if(deposite == true)
        document.getElementById("add funds").className = "button buttonadd";
    else 
        document.getElementById("add funds").className = "button buttonadd disabled";
    document.getElementById("add funds").disabled = !deposite;

    if(withdraw == true)
        document.getElementById("withdraw").className = "button buttonsub";
    else
        document.getElementById("withdraw").className = "button buttonsub disabled";
    
        document.getElementById("withdraw").disabled = !withdraw;
    
}


function withdrawAmount(){
    /**
     * subtracts the contents of the input box from the balance 
     * update buttons if needed
     */
    var amount = Number(document.getElementById("input").value);
    if(amount <= balance)// precausion to prevent withdraw even when button is not properly disabled 
    {
        balance = (balance - amount);
        document.getElementById("balance").innerHTML = "Current Balance: $" + balance.toFixed(2);
        // if the checkbox is enabled reset the buttons and the input-box
        if(clearAfterUse){
            document.getElementById("input").value = "";
            enableButtons(false,false);

        } else if(balance == 0) // disable button if all the money was withdrawn
        {
            document.getElementById("withdraw").className = "button buttonsub disabled";
        }
        
    }
}

function addFunds(){
    /**
     * adds the contents of the input box to the balance
     * update buttons if needed
     */
    let amount = Number(document.getElementById("input").value);
    balance = balance + amount;
    document.getElementById("balance").innerHTML = "Current Balance: $" + balance.toFixed(2);
    if(clearAfterUse)
        document.getElementById("input").value = "";
    // disable/enable both buttons if clearAfterUse is/isn't checked
    enableButtons(deposite=!clearAfterUse, withdraw=!clearAfterUse); 
    

}