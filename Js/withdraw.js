
/* 


*/

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withDrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withDrawField.value; 
    const newWithDrawamount = parseFloat(newWithDrawAmountString);
    
    const withdrawTotalElement  = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    withDrawField.value = '';

    if(newWithDrawamount > previousBalanceTotal){
        alert('Your Balance Is not Enough your account');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithDrawamount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previousBalanceTotal - newWithDrawamount;
    balanceTotalElement.innerText = newBalanceTotal;

    withDrawField.value = '';
    
})