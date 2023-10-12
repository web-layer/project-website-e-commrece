import arrprodact from './prodact.js';



document.addEventListener("DOMContentLoaded", init);
let carticon = document.querySelector(".addcrat span");
let getvalue = localStorage.getItem("totalcount")
if(getvalue) {

    carticon.textContent = getvalue

  }

function init() {



    let getIdProdact = JSON.parse(localStorage.getItem("cartIds")) || []
    let cartshow = document.querySelector(".card .container")

    let cartProducts = JSON.parse(localStorage.getItem("cart"))  





let add = arrprodact.filter(function (prodact) {
    return getIdProdact.includes(prodact.id)
})






    if(add.length > 0) {    
        
   


          renderCart(cartshow, add)
    localStorage.setItem("cart", JSON.stringify(add)) 

}else{
  let massegeProdact = document.querySelector(".massegeProdact")
  massegeProdact.style.display = "block"
}





}


    
function renderCart(container, prodacts) {
  container.innerHTML = ''; 
    for(let i = 0; i < prodacts.length; i++) {
           let {title, Image, price, id} = prodacts[i]
            let cart = `
            <div class="box_prodact" data-id="${id}">

            <div class="prodact_card">
                <div class="flex">
                    <img src="/img/${Image}">
                    <div class="title">${title}</div>

                    <div class="price">${price}</div>
                </div>





                <div>
                    <button  class="delete-product" data-id="${id}" >
                     <i class="fa-solid fa-trash"></i>delete
                    </button>
                </div>


            </div>

        </div>
            `
            container.insertAdjacentHTML("beforeend", cart)

    
     }



}


  document.addEventListener("click", function(e) {
    if(e.target.classList.contains("delete-product")) {
      let id = parseInt(e.target.getAttribute("data-id"))
      let cartIds = JSON.parse(localStorage.getItem("cartIds")) 
      
        cartIds = cartIds.filter(cartid => cartid !== id);
        localStorage.setItem("cartIds", JSON.stringify(cartIds))


        let currentCount = parseInt(carticon.textContent) || 0;
        currentCount -= 1;
        carticon.textContent = currentCount;
        localStorage.setItem("totalcount", JSON.stringify(currentCount))  


        window.location.reload()

    }
  });


