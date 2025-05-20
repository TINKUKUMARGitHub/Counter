let zeroes=document.getElementById('zeros');
let containers=document.getElementById('containers');
let plus=document.getElementById('pluss');
let minus=document.getElementById('minuss');
let paragraph=document.getElementById('paragraph');
let input=document.getElementById('input');
let reset=document.getElementById('reset')


// plus functionality

plus.addEventListener('click',function(){
let currentVal=parseInt(zeroes.textContent);
let increment=parseInt(input.value) || 1;
zeroes.textContent=currentVal+increment;
    
})

// minus functionality
minus.addEventListener('click',function(){
    let currentValue=parseInt(zeroes.textContent);
    let decrement=parseInt(input.value) || 1;
    zeroes.textContent=currentValue-decrement;
    
})

// reset functionality
reset.addEventListener('click',function(){
   zeroes.textContent=0;
    
})