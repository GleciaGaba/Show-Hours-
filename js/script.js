const BTN = document.querySelector('button');
const CONTENT = document.querySelector('#content');


const display = document.querySelector('#timer')


function updateTime(){
   
    let date = new Date();
    let hours = date.toLocaleTimeString('fr');
    let seconds = date.getSeconds();
   
    display.innerHTML=`<p>${hours}</p>`;

   if(seconds %3 ==0){
      return display.classList.add("red-fat");
   }else{
       return display.classList.remove("red-fat");
   }
   
   display.innerHTML = hours;
    

    

};


 setInterval(updateTime);









/*BTN.addEventListener('click', function(){
    CONTENT.textContent = "Hello World";
});*/