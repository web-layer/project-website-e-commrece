import arrprodact from './prodact.js';
document.addEventListener("DOMContentLoaded", init)

let carticon = document.querySelector(".addcrat span");
let getvalue = localStorage.getItem("totalcount")
if(getvalue) {

    carticon.textContent = getvalue

  }

function init() {
//Window.localStorage.setItem('prodact', JSON.stringify(arrprodact))

    function showprodact(arr = []) {
        let containerprodact = document.querySelector('.prodact')
        
        let sliceprodact = arr.slice(0,8)
            let listprodact = sliceprodact.map(function (prodacts){
                return `
                <div class="cart" data-id="${prodacts.id}">
                    <img src="img/${prodacts.Image}">
                    <div class="info col-info">
                        <h4>${prodacts.title}</h4>
                        <span>${prodacts.price}</span>
                    </div>
        
                </div>
        
                `
            })
        
 
           containerprodact.insertAdjacentHTML('beforeend', listprodact.join(""))
        
        
        
        
        
        
        
        
 
        
          let containerprodact2 = document.querySelector('.section_new .prodact')
          let listprodact2 = arr.slice(0,4).map(function (prodacts){
              return `
              <div class="cart" data-id='${prodacts.id}'>
                  <img src="img/${prodacts.Image}">
                  <div class="info col-info">
                      <h4>${prodacts.title}</h4>
                      <span>${prodacts.price}</span>
                  </div>
        
              </div>
        
              `
          })
        
          containerprodact2.insertAdjacentHTML('beforeend', listprodact2.join("")) 
        
         
        
        
        }
        

        showprodact(arrprodact)

document.querySelectorAll(".cart").forEach( (item) => {
    item.addEventListener("click", function (e) {
       let idprodact = e.currentTarget.dataset.id 
        localStorage.setItem("idprodact", idprodact)
      window.location = "detailsProdact.html"
  
    })
  })

}









