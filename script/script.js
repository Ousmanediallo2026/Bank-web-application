const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", function (){
   const emailInput = document.getElementById("email");
   const passwordInput = document.getElementById("password");


   const emailValue = emailInput.value
   const passwordValue = passwordInput.value

   // Validate user credentials

  if (emailValue && passwordValue ) {
      const loginArea = document.getElementById("login-area")
      loginArea.style.display = "none"
      const transactionArea = document.getElementById("transaction-area")
      transactionArea.style.display = "block"

  
} else {
   alert("Provide the email and password.")
}

const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener("click", function(){
   
   const amount = document.getElementById("number").value;
   const amountNumber = parseFloat(amount);


   const currentBalance = document.getElementById("current-balance").innerText
   const currentNumber = parseFloat(currentBalance);
   const total = currentNumber + amountNumber;
   document.getElementById("current-balance").innerText = total;
  
   // Update the curent deposit anytime the user deposit money.
   const currentBalance1 = document.getElementById("deposit-amount").innerText
   const currentNumber1 = parseFloat(currentBalance1);
   const total1 = currentNumber1 + amountNumber;
   document.getElementById("deposit-amount").innerText = total1;
   console.log(total1)
  
})

  // Withdraw code line 
  

  const withdrawButton = document.getElementById("withdraw-btn");
  withdrawButton.addEventListener("click", function(){
   const currentWithdraw = document.getElementById("number-1").value
   const amountWithdraw = parseFloat(currentWithdraw);

   const theWithdraw = document.getElementById("current-balance").innerText
   const currentThisWithdaw = parseFloat(theWithdraw);
   if (amountWithdraw < currentThisWithdaw){
      alert("You have unsifficient balance for this transaction.")
   } else {
      const total2 = currentThisWithdaw - amountWithdraw;
      document.getElementById("current-balance").innerText = total2;
      console.log(total2)

   }
 
  })
   
})