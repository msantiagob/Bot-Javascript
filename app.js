    //              paint
const templatemsbot = document.getElementById('templatemsbot');
const templatemsuser = document.getElementById('templatemsuser');
const msuser = document.querySelector('.msuser');
const main = document.querySelector('main');
const msbot = document.querySelector('.msbot');
const user = document.querySelector('.userms');
section = document.querySelector('section');
const fragment = document.createDocumentFragment();

function containsAnyLetter(str) {
    return /[a-zA-Z]/.test(str);
  }

  
    KeyboardEvent,addEventListener("keydown", (e) =>{
        if (e.key === 'Enter' && containsAnyLetter(user.value)){
            paint();
            
        }
    })
    document.addEventListener("click", (e) => {
    
        if(e.target.matches(".send") && containsAnyLetter(user.value)){
            paint();
        }
        if(e.target.matches(".btnsend") && containsAnyLetter(user.value)){
            paint();
        }
        
    })
  
const paint = ()=>{
    const clone = templatemsuser.content.cloneNode(true);

    clone.querySelector(".msuser");
    clone.querySelector(".messageuser").textContent = user.value;
    section.appendChild(clone);
    mind();
    
}

const mind = () => {
    
    const greetings =["hello",  "hi", "hey"];

    const extGreetings = ["good morning", "good afternoon", "good evening", "good to see you", "nice to see you", ];

    const hAYS = ["how are you?","how is it going?","how is everything?","how are things?","what’s been going on?","are you well?","how are you keeping?","what’s up?","what’s new?","all right?", ];
    
    const farewells = ["goodbye", "bye"];   

    const extFarewells = ["have a nice day", "have a good day", "take care", "see you", "take it easy", "so long", "see you later"]



    let separatePhrase = user.value.split(" ").map(p => p.toLowerCase());
    
    for ( i = 0; i < separatePhrase.length; i++){
        let greeting = greetings.some((greeting) => {
            if(separatePhrase[i].indexOf(greeting) === -1){
                return false;  
            }else{
                let greeting = true;
                answer(greetings,farewells,greeting);
            }
        });
        let extGreeting = extGreetings.some((extGreeting) => {
        
            if (user.value.indexOf(extGreeting) === -1 ){
                return false;
            }else{
                let greeting = true;
                answer(greetings,farewells,greeting);
            }
        });
        let hAY = hAYS.some((hAY) => {
        
            if (user.value.indexOf(hAY) === -1 ){
                return false;
            }else{
                let hAY = true;
                answer(farewells,hAYS,greetings,hAY,);
            }
        });
        let extFarewell = extFarewells.some((extFarewell) => {
        
            if (user.value.indexOf(extFarewell) === -1 ){
                return false
            }else{
                let farewell = true;
                answer(farewells,greetings,farewell);
            }
        });
        if (separatePhrase[i].includes("’") ){
            let coma = false;
            answer(coma);
        };

       let farewell = farewells.some((farewell) => {
            if(separatePhrase[i].indexOf(farewell) === -1){
                return false;  
            }else{
                let farewell = true;
                answer(farewells,greetings,farewell);
            }
            });
        
    } 

        
    user.value = "";
}
const answer = (greetings,farewells,greeting, farewell,coma,hAYS,hAY)=>{
    const clone = templatemsbot.content.cloneNode(true);
    clone.querySelector(".msbot");

    if(coma !== false) {
    clone.querySelector(".messagebot").textContent = "I do not understand ( ' )";
    }
    if(hAY === true){
        clone.querySelector(".messagebot").textContent = "melo";
    }
    if (greeting === true){ 
        let randomAnswerG = Math.floor(Math.random() * greetings.length);
        clone.querySelector(".messagebot").textContent = greetings [randomAnswerG];
        greeting === false;
    }
    if (farewell === true){ 
        let randomAnswerf = Math.floor(Math.random() * farewells.length);
        clone.querySelector(".messagebot").textContent = farewells[randomAnswerf];
    }
   
    section.appendChild(clone);
    user.value = " ";
    main.scrollTop = '9999';

}
