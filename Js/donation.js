// Noakhali
document
  .getElementById("btn-donate-now-noakhali")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("input-field-noakhali");

    // check whether the donation money is valid
    if (donateMoney <= 0 || isNaN(donateMoney)) {
      alert("Failed to Donate Money");
      return;
    }

    const myAccountBalance = parseFloat(getTextFieldValueById("my-balance"));

    if (donateMoney > myAccountBalance) {
      alert("You dont have sufficient balance");
      return;
    }

    // calculate the new balance
    const newBalance =
      parseFloat(donateMoney) +
      parseFloat(getTextFieldValueById("noakhali-balance"));

    // set the new balance
    document.getElementById("noakhali-balance").innerText = newBalance;

    // remove money from my balnce
    document.getElementById("my-balance").innerText =
      myAccountBalance - parseFloat(donateMoney);

    // add transaction history

    const currentDate = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "rounded-lg",
      "w-4/5",
      "mx-auto",
      "p-6",
      "shadow-md",
      "border",
      "border-[rgba(17,17,17,0.1)]",
      "space-y-2",
      "mt-3"
    );
    div.innerHTML = `
    <h3 class="text-2xl font-bold"> ${donateMoney} Taka is Donated for flood Flood at Noakhali, Bangladesh</h3>
    <p>Date: ${currentDate.toLocaleString()} </p>
    `;
    document.getElementById("transaction-history").appendChild(div);

    // show modal
    document.getElementById("pop-up-donation").classList.remove("hidden");

    // clear input field
    document.getElementById("input-field-noakhali").value = "";
  });

  //Feni
document
  .getElementById("btn-donate-now-feni")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("input-field-feni");

    // check whether the donation money is valid
    if (donateMoney <= 0 || isNaN(donateMoney)) {
      alert("Failed to Donate Money");
      return;
    }

    const myAccountBalance = parseFloat(getTextFieldValueById("my-balance"));

    if (donateMoney > myAccountBalance) {
      alert("You dont have sufficient balance");
      return;
    }

    // calculate the new balance
    const newBalance =
      parseFloat(donateMoney) +
      parseFloat(getTextFieldValueById("feni-balance"));

    // set the new balance
    document.getElementById("feni-balance").innerText = newBalance;

    // remove money from my balnce
    document.getElementById("my-balance").innerText =
      myAccountBalance - parseFloat(donateMoney);

    // add transaction history

    const currentDate = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "rounded-lg",
      "w-4/5",
      "mx-auto",
      "p-6",
      "shadow-md",
      "border",
      "border-[rgba(17,17,17,0.1)]",
      "space-y-2",
      "mt-3"
    );
    div.innerHTML = `
    <h3 class="text-2xl font-bold"> ${donateMoney} Taka is Donated for flood Flood at Feni, Bangladesh</h3>
    <p>Date: ${currentDate.toLocaleString()} </p>
    `;
    document.getElementById("transaction-history").appendChild(div);

    // show modal
    document.getElementById("pop-up-donation").classList.remove("hidden");

    // clear input field
    document.getElementById("input-field-feni").value = "";
  });

  // Quota movement
document
  .getElementById("btn-donate-now-quota")
  .addEventListener("click", function () {
    const donateMoney = getInputFieldValueById("input-field-quota");

    // check whether the donation money is valid
    if (donateMoney <= 0 || isNaN(donateMoney)) {
      alert("Failed to Donate Money");
      return;
    }

    const myAccountBalance = parseFloat(getTextFieldValueById("my-balance"));

    if (donateMoney > myAccountBalance) {
      alert("You dont have sufficient balance");
      return;
    }

    // calculate the new balance
    const newBalance =
      parseFloat(donateMoney) +
      parseFloat(getTextFieldValueById("quota-balance"));

    // set the new balance
    document.getElementById("quota-balance").innerText = newBalance;

    // remove money from my balnce
    document.getElementById("my-balance").innerText =
      myAccountBalance - parseFloat(donateMoney);

    // add transaction history

    const currentDate = new Date();
    const div = document.createElement("div");
    div.classList.add(
      "rounded-lg",
      "w-4/5",
      "mx-auto",
      "p-6",
      "shadow-md",
      "border",
      "border-[rgba(17,17,17,0.1)]",
      "space-y-2",
      "mt-3"
    );
    div.innerHTML = `
    <h3 class="text-2xl font-bold"> ${donateMoney} Taka is Donated for injured in Quota Movement in Bangladesh</h3>
    <p>Date: ${currentDate.toLocaleString()} </p>
    `;
    document.getElementById("transaction-history").appendChild(div);

    // show modal
    document.getElementById("pop-up-donation").classList.remove("hidden");

    // clear input field
    document.getElementById("input-field-quota").value = "";
  });
