// "use strict";

// my_modal_5.showModal()

// toggle donation and history
const donationBtn = getInputById("donationBtn");
const historyBtn = getInputById("historyBtn");
const donationCards = getInputById("donationCards");
const historyCards = getInputById("historyCards");

donationBtn.addEventListener("click", () => {
  donationBtn.classList.add("bg-primaryColor");
  historyBtn.classList.remove("bg-primaryColor");
  donationCards.classList.remove("hidden");
  historyCards.classList.add("hidden");
});

historyBtn.addEventListener("click", () => {
  historyBtn.classList.add("bg-primaryColor");
  donationBtn.classList.remove("bg-primaryColor");
  historyCards.classList.remove("hidden");
  donationCards.classList.add("hidden");
});

//
// Donate for Noakhali
const donateBtnNoaKhali = getInputById("donateBtnNoaKhali");
donateBtnNoaKhali.addEventListener("click", () => {
  noakhaliFunc();
});

const noakhaliFunc = () => {
  // check valid input or not
  let noakhaliInput = getInputValueById("noakhaliInput");
  if (noakhaliInput === "") {
    alert("Invalid input");
    return;
  }

  let mainBalance = getInputInnerTextById("mainBalance");
  let noakhaliBalance = getInputInnerTextById("noakhaliBalance");
  mainBalance = parseFloat(mainBalance);
  noakhaliBalance = parseFloat(noakhaliBalance);
  noakhaliInput = parseFloat(noakhaliInput);

  document.getElementById("mainBalance").innerText =
    mainBalance - noakhaliInput;
  document.getElementById("noakhaliBalance").innerText =
    noakhaliBalance + noakhaliInput;

  const div = document.createElement("div");
  div.innerHTML = `
      <p class="text-xl font-bold">${noakhaliInput} Taka is Donated for Flood at Noakhali, Bangladesh</p>
    <p class="text-base font normal text-gray-600 mt-2">Date : ${new Date()}</p>`;
  div.classList = `border border-gray-200 p-4 px-5 rounded-lg`;
  historyCards.appendChild(div);
  my_modal_5.showModal();
  document.getElementById("noakhaliInput").value = "";
};

//
// Donate for Feni
const donateBtnFeni = getInputById("donateBtnFeni");
donateBtnFeni.addEventListener("click", () => {
  feniFunc();
});

const feniFunc = () => {
  // check valid input or not
  let feniInput = getInputValueById("feniInput");
  if (feniInput === "") {
    alert("Invalid input");
    return;
  }

  let mainBalance = getInputInnerTextById("mainBalance");
  let feniBalance = getInputInnerTextById("feniBalance");
  mainBalance = parseFloat(mainBalance);
  feniBalance = parseFloat(feniBalance);
  feniInput = parseFloat(feniInput);

  document.getElementById("mainBalance").innerText = mainBalance - feniInput;
  document.getElementById("feniBalance").innerText = feniBalance + feniInput;

  const div = document.createElement("div");
  div.innerHTML = `
        <p class="text-xl font-bold">${feniInput} Taka is Donated for Flood Relief in Feni, Bangladesh</p>
      <p class="text-base font normal text-gray-600 mt-2">Date : ${new Date()}</p>`;
  div.classList = `border border-gray-200 p-4 px-5 rounded-lg`;
  historyCards.appendChild(div);
  my_modal_5.showModal();
  document.getElementById("feniInput").value = "";
};

//
// Donate for Injured in the Quota Movement
const donateBtnQuota = getInputById("donateBtnQuota");
donateBtnQuota.addEventListener("click", () => {
  quotaFunc();
});

const quotaFunc = () => {
  // check valid input or not
  let quotaInput = getInputValueById("quotaInput");
  if (quotaInput === "") {
    alert("Invalid input");
    return;
  }

  let mainBalance = getInputInnerTextById("mainBalance");
  let quotaBalance = getInputInnerTextById("quotaBalance");
  mainBalance = parseFloat(mainBalance);
  quotaBalance = parseFloat(quotaBalance);
  quotaInput = parseFloat(quotaInput);

  document.getElementById("mainBalance").innerText = mainBalance - quotaInput;
  document.getElementById("quotaBalance").innerText = quotaBalance + quotaInput;

  const div = document.createElement("div");
  div.innerHTML = `
          <p class="text-xl font-bold">${quotaInput} Taka is Donated for Injured in the Quota Movement</p>
        <p class="text-base font normal text-gray-600 mt-2">Date : ${new Date()}</p>`;
  div.classList = `border border-gray-200 p-4 px-5 rounded-lg`;
  historyCards.appendChild(div);
  my_modal_5.showModal();
  document.getElementById("quotaInput").value = "";
};
