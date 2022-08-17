
/* 


*/

document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withDrawField.value; 
    const newWithDrawamount = parseFloat(newWithDrawAmountString);

    withDrawField.value = '';
    if(isNaN(newWithDrawamount)){
        alert('Please provide a vaild number');
        return;
    }
    
    const withdrawTotalElement  = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    

    if(newWithDrawamount > previousBalanceTotal){
        alert('Your Balance Is not Enough your account');
        return;
    
    }

    // step-4

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawamount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    // step-6

    const newBalanceTotal = previousBalanceTotal - newWithDrawamount;
    balanceTotalElement.innerText = newBalanceTotal;

    withDrawField.value = '';
    
})