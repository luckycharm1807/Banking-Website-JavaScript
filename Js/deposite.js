
// step-1: add even listener to the deposite button 

document.getElementById('btn-deposite').addEventListener('click', function(){
    // console.log('deposite button click')

    // step-2: get the deposite amount form the deposite input field

    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);



    // console.log(depositeAmount);

    // step-3: get the current deposte total
    // for non-input(element other than input, textarea) use innerText to get the text
    const depositeTotalElement = document.getElementById('deposite-total');
    const previousDepositeTotalString = depositeTotalElement.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeTotalString);
    
    // step-4: add numbers to set the  total deposite
    const currentDepositeTotal = previousDepositeTotal + newDepositeAmount;

    depositeTotalElement.innerText = currentDepositeTotal;

    // step-5: get balance current total 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    // step-6: calculate current total balance

    const currentBalanceTotal = previousBalanceTotal + newDepositeAmount;
    balanceTotalElement.innerText = currentBalanceTotal;




    // step-7: clear the deposite field

    depositeField.value='';
    
})