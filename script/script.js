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
   
   const amount = document.getElementById("deposit-amount").value;
   const amountNumber = parseFloat(amount);


   const currentBalance = document.getElementById("current-balance").innerText
   const currentNumber = parseFloat(currentBalance);
   const total = currentNumber + amountNumber;
   document.getElementById("current-balance").innerText = total;
})

  
   
})