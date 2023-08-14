
document.getElementById('deposit-btn').addEventListener('click', () => {
    // deposit
    const previousDepositElement = document.getElementById('deposit');
    const previousDepositString = previousDepositElement.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    const newDepositElement = document.getElementById('new-deposit');
    const newDepositString = newDepositElement.value;
    const newDeposit = parseFloat(newDepositString);
   
    newDepositElement.value = '';
    if(isNaN(newDeposit)) {
        alert('Please provide a valid number')
        return;
    }
    const currentDeposit = previousDeposit + newDeposit;
    previousDepositElement.innerText = currentDeposit;

    // balance
    const previousBalanceElement = document.getElementById('balance');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const currentBalance = newDeposit + previousBalance;
    previousBalanceElement.innerText = currentBalance;
    
   
});


document.getElementById('withdraw-btn').addEventListener('click', () => {
    // Withdraw
   const previousWithdrawElement = document.getElementById('withdraw');
   const previousWithdrawString = previousWithdrawElement.innerText;
   const previousWithdraw = parseFloat(previousWithdrawString);
   const newWithdrawElement = document.getElementById('new-withdraw');
   const newWithdrawString = newWithdrawElement.value;
   const newWithdraw = parseFloat(newWithdrawString);

  

   
   // balance
   const previousBalanceElement = document.getElementById('balance');
   const previousBalanceString = previousBalanceElement.innerText;
   const previousBalance = parseFloat(previousBalanceString);
   newWithdrawElement.value = '';

    if(newWithdraw > previousBalance || isNaN(newWithdraw)) {
        alert('Please provide a valid number')
        return;
    }
    const currentWithdraw = previousWithdraw + newWithdraw;
    previousWithdrawElement.innerText = currentWithdraw;
    
    const currentBalance = previousBalance - currentWithdraw
    previousBalanceElement.innerText = currentBalance;

})

