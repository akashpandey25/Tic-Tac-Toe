 let buttons=document.querySelectorAll(".btn");
 let resetbtn=document.querySelector(".reset");
//  let newGame=document.querySelector(".newgame");
 let msgContainer=document.querySelector(".msg");
 let win=document.querySelector("#win");

 let turn0=true; //for player X & player 0

 //now storing the winning patterns of all 9 buttons
 const winPatterns=[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
 ];  

 buttons.forEach((btn) =>{
     btn.addEventListener("click", ()=>{
        console.log("box was clicked");
       if(turn0){
        //for player O
        btn.innerText="O";
        turn0=false;
       }else{
        //for player X
        btn.innerText="X";
        turn0=true; 
       }
       //after clicking a button, button was disabled cant perform action again
       btn.disabled=true;

       checkWinner();
     });
 });
 const disableBtn=()=>{
   buttons.forEach((btn)=>{
      btn.disabled=true;
    });
 };
 const enabledBtn=()=>{
   buttons.forEach((btn)=>{
      btn.disabled=false;
      btn.innerText="";
    });
 };
 
 const showWinner=(winner)=>{
   win.innerText=`Congratulations, Winner is ${winner}`; //setting the winner in winner text
   msgContainer.classList.remove("hide"); //now removing the hide class to see the winner

   disableBtn();//after a winner all btns will be disabled
 }
 //function to check winner, by following the array pattern
 const checkWinner=()=>{
    for(let pattern of winPatterns){
        //here we are checking the index and associated value
         let pos1Val=buttons[pattern[0]].innerText;
         let pos2Val=buttons[pattern[1]].innerText;
         let pos3Val=buttons[pattern[2]].innerText;

         if(pos1Val!="" && pos2Val!="" && pos3Val!=""){ // value should not be empty
            if(pos1Val===pos2Val && pos2Val===pos3Val){ //checking pos1 pos2 pos3 are equal or not
               showWinner(pos1Val);
            }
         }
      }
   };

   const resetGame=()=>{
      turn0=true;
      enabledBtn();
      msgContainer.classList.add("hide");
   }
   // newGame.addEventListener("click", resetGame);
   resetbtn.addEventListener("click", resetGame);