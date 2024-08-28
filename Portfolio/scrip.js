//TURN PAGE WHEN CLICK
const  pageTurnBtn =document.querySelectorAll('.nextprev-btn');
pageTurnBtn.forEach((e1, index) => {
          e1.onclick = () => {
            const pageTurnId=e1.getAttribute('data-page');
            const pageTurn =document.getElementById(pageTurnId);

            if(pageTurn.classList.contains('turn')){
                pageTurn.classList.remove('turn');
                setTimeout(() =>{
                    pageTurn.style.zIndex=20-index;
                },500)
            }  
            else{
                pageTurn.classList.add('turn')
                setTimeout(() =>{
                    pageTurn.style.zIndex=20+index;
                },500)
                        }
          } 
})
// HORIA IN SAB KI MAMA HA 
//  zabarkhan
//  ayezal darti ha zabarkhan sa
//  hayan parisha(us ka sans lena ba mushkkil)
//  zanik or insha 
 

//  hayan parisha 
//  dukhan  or woh larki (dananis)


//  ( zoraiz or abiha )
//  zanik mom dad app apn pyar 