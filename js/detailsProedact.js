
import arrprodact from './prodact.js';


document.addEventListener("DOMContentLoaded", init)
let cartItems = []
let currentCount = 0
let carticon = document.querySelector(".addcrat span");
let getvalue = localStorage.getItem("totalcount")


if(getvalue) {

    carticon.textContent = getvalue

    
  }



  let slider = []
  



function init() {

    let idprodact = Number(localStorage.getItem("idprodact")) 


    function showprodactDetails(arr = []) {
        let  findprodact = arr.find(function (items) {
           return items.id === idprodact
          
        });
         
        

        let contqinerProdact = document.querySelector(".details")

        let { id, Image, title, discription, price, quantity, ImageSlider} = findprodact;

        slider = ImageSlider
            let showProdqctDeletqis =  `
        <div class="img_prodact">
            <img src="img/${Image}" data-img="${id}">   
                    
               



        </div>
        <div class="content_prodact">
            <h3>${title}</h3>
            <div class="rating">
                <div class="star">
                    <i class="fa-sharp fa-solid fa-star" style="color: #85863b;"></i>
                    <span><i class="fa-sharp fa-solid fa-star" style="color: #85863b"></i></span>
                    <span><i class="fa-sharp fa-solid fa-star" style="color: #85863b"></i></span>
                    <span><i class="fa-regular fa-star"></i></span>
                </div>
            </div>
            <div class="price">
                <span>${price}</span>
            </div>
            <div class="discription">
                <p>
    
             ${discription}
    
                </p>
            </div>
            <div class="size">
                <span>Size:</span>
                <ul>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                    <li>2XL</li>
                    <li>3XL</li>
                    </+>
            </div>
            <div class="add_Quantity">
                <div class="text">
                    <label>Quantity:</label>
                </div>
    
                <div class="box">
                    <div class="dec">-</div>
                    <input type="text" value="1">
                    <div class="inc">+</div>
                </div>
    
    
                <button class="addtocard" data-idprodact="${id}">
                    <i class="fa-solid fa-cart-shopping"></i>
                    add to card
                </button>
            </div>
        </div>
            
            `
        

     contqinerProdact.insertAdjacentHTML('beforeend', showProdqctDeletqis)




     let imagepopup =  document.querySelector(".img_prodact img")
     imagepopup.addEventListener("click", function imageProdact_popup(e) {
         let popupperent = document.querySelector(".popup_perent")
        let getIdImg = parseInt(e.target.getAttribute("data-img"))

        popupperent.innerHTML = `
     
        <div class="popup">
     
        <img src="img/prodact  (${getIdImg}).jpeg">
     
     </div>
        ` 


     
     

     
     }) 


    
    
 


    }


    


    showprodactDetails(arrprodact)


    


    let cartIds = JSON.parse(localStorage.getItem("cartIds")) || [];

    cartIds.forEach(function (e) {

        let btnstatut = localStorage.getItem(`buttonState_${e}`)

        let btn = document.querySelector(`.addtocard[data-idprodact="${e}"]`)

        if(btn && btnstatut === "disabled") {
            btn.disabled = true;
            btn.style.background = "#85863b70"
        }
    })
}

document.addEventListener("click", function (e) {

     if(e.target.classList.contains("addtocard")) {
     let id = parseInt(e.target.getAttribute("data-idprodact"))
     let btn = e.target;
        let filterProdact = arrprodact.find(function (cart) {
           return cart.id === id
        })

            localStorage.setItem(`buttonState_${id}`, "disabled")
            btn.disabled = true;
            btn.style.background = "#85863b70"

            let cartIds = JSON.parse(localStorage.getItem("cartIds")) || [];
            cartIds.push(id);
            localStorage.setItem("cartIds", JSON.stringify(cartIds));

            let currentCount = parseInt(carticon.textContent) || 0;
            currentCount += 1;
            carticon.textContent = currentCount;

            localStorage.setItem("totalcount", JSON.stringify(currentCount))  




       // localStorage.setItem("eventscart", JSON.stringify(eventscart))
     
/*      let isprodactlAreadycart = false
            for(let i = 0; i < cartItems.length; i++) {
             
                    if(cartItems[i].id === id) {
                        let x = cartItems[i].quantity += 1
                        isprodactlAreadycart = true
                        return 0
                        
                    }
                

             
            }

            if(isprodactlAreadycart !== true) {
                cartItems.push({...filterProdact, quantity: 1})
                let carticon = document.querySelector(".addcrat span");
               let  currentCount = parseInt(carticon.textContent) || 0
               currentCount += 1
               carticon.textContent = currentCount
               localStorage.setItem("currentCount", currentCount )


            }
 */
           
     }

})






