$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
    
    });
    
function rain()
{
let amount = 50;
let header = document.querySelector('header');

let i1=0;
while(i1<amount){
let drop=document.createElement('i1');
let size=Math.random() * 5;
let posX=Math.floor(Math.random() * 280); 
let delay=Math.random() * -5;
let duration=Math.random() * 10;
drop.style.width=0.2 + size + 'px';
drop.style.left=posX + 'px';
drop.style.animationDelay=delay + 's';
drop.style.animationDuration=1 + duration + 's';
header.appendChild(drop);
i1++;
}
}
rain();

function sendmail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_cicu2qt";
    const templateID = "template_wkgdppe";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message is sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }



ScrollReveal({
 reset: true,
 distance: '20px',
 duration: 1000,
 delay: 100 
});

ScrollReveal().reveal('.heading ',{delay:200, origin: 'left'});
ScrollReveal().reveal('.static-txt ',{delay:200, origin: 'top'});
ScrollReveal().reveal('.dynamic-txts ',{delay:200, origin: 'right'});
ScrollReveal().reveal('.t1 ',{delay:200, origin: 'top'});
ScrollReveal().reveal('.t2 ',{delay:200, origin: 'left'});
ScrollReveal().reveal('.t3 ',{delay:200, origin: 'bottom'});
ScrollReveal().reveal('.t4 ',{delay:200, origin: 'right'})
ScrollReveal().reveal('.btn ',{delay:200, origin: 'right'});
ScrollReveal().reveal('.about .box ',{delay:200, origin: 'top'});
ScrollReveal().reveal('.tech .box ',{delay:200, origin: 'right'});
ScrollReveal().reveal('.portfolio .box ',{delay:200, origin: 'bottom'});
ScrollReveal().reveal('.input-group ',{delay:200, origin: 'top'});
function runcode(e){
    console.log(e)
    e.preventDefault();
}