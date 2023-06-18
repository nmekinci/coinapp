const inputArea = document.querySelector("input")
const formArea = document.getElementById("form-area")
const button = document.getElementById("button")
const ul = document.querySelector("ul")


// formArea.addEventListener("click",(e) => {
//     e.preventDefault()
//     console.log(e.target);
//     // if (e.target)
// })

button.addEventListener("click",(e) => {
    e.preventDefault()
    
    const options = {
        headers: {
          "x-access-token":
            "coinrankingd738b68f1c6cc9a731ac778b002d984fe9dfc688c5794312",
        },
      };
    
      fetch('https://api.coinranking.com/v2/coin/Qwsogvtv82FCd', options)
  .then((response) => response.json())
  .then((result) => {
    
    ul.innerHTML += `
<li>
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="${result.data.coin.iconUrl}" class="img-fluid rounded-start" alt="${result.data.coin.name}">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${result.data.coin.name}</h5>
                      <p class="card-text"><a href="${result.data.coin.coinrankingUrl}">${result.data.coin.name}</a></p>
                      <p class="card-text"><small class="text-body-secondary">${result.data.coin.price}</small></p>
                    </div>
                  </div>
                </div>
              </div>
        </li>
`
});
})


