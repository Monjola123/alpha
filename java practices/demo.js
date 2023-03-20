let random = Math.floor(Math.random() * 50 + 1); 
let display = document.getElementById('displayText');
let display2= document.getElementById('displayText2')
let play = document.getElementById('play');
let restart =  document.getElementById('restart');
let box = document.getElementById('guess-game')
let button = document.getElementById('button');
let count = document.getElementById('count');




 
function guessTheNumber (event){
       let input = document.getElementById("input").value;
       input = parseInt(input)
  
        event.preventDefault()
        console.log(event)
        console.log(input);
        count.innerText = "The button was clicked ${input} times!";
play.addEventListener('click', () => {
    input++; 
    count.innerText = "The button was clicked ${input} times!" ;
})

    
    if( input === random) {
         display.innerText = "NICE!!! You must be really good🍾";
         display2.innerText = "Try Again"
          box.style.backgroundImage = "url(https://th.bing.com/th/id/R.8aca24e0deeaac0f1a3160725f962e4a?rik=Eua%2fpH8A7ex8Eg&riu=http%3a%2f%2fi.imgur.com%2fJw6HHnP.gif&ehk=QMe0hzWCyq3%2fOvYSO6L7u%2bCM149MiSXw%2ftR9ndrvKNs%3d&risl=&pid=ImgRaw&r=0)"
          box.style.backgroundRepeat = "no-repeat"

    }
    else if (input > random && input > 50){
        display.innerText = "That's above range, try between 1 - 50";
        box.style.backgroundColor = "red"
       
    }
    else if (input > random){
        display.innerText = "Too high,a little lesser";
        box.style.backgroundColor = "grey"
    }
    
     else if (input < random && input < 1){
        display.innerText = "That's below range, try between 1 - 50";
        box.style.backgroundColor = "black"
    }
     else if (input + 10 < random ){
        display.innerText = "Naaah! Your guess is still pretty much lower";
        box.style.backgroundColor = "green"
    }

    else if (input < random ){
        display.innerText = "You're almost there A little higher";
        box.style.backgroundColor = "#89164f"
         

    }
    else if (input < random){

    }
    
}
restart.addEventListener("click", function (e){
    e.preventDefault()
    console.log(e)
    location.reload()
})



