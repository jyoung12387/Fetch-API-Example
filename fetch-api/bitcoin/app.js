async function getData() {
  let url =
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function renderData() {
  let price = await getData();
  let container = document.querySelector(".container");
  container.innerHTML = `<div> ${price.bitcoin.usd} </div>
                         <div> ${price.ethereum.usd} </div>
  `;
}

renderData();
