/*
DO NOT DELETE!! This is your tracker for the project!
Store each input as a variable (there should be two input boxes - one for each answer) [ ]
Store the button as a variable (there should be ONE button) [ ]
Create a click handler [ ]
Use the .value property to store user input [ ]
Add console.log to test if the code is being stored [ ]
Write a conditional statement with else-if to include all 4 possible results [ ]
Write a compound conditional statement that uses input from both questions to provide the user with a result [ ]
Write a sentence using string concatenation using the data stored in the user input variables [ ]
Add a next level feature! [ ]
*/
let submit=document.querySelector("button");
let input1=document.querySelector(".describe");
let input2=document.querySelector(".you");
let result=document.querySelector(".result");

  submit.onclick=function(){
  if(input1.value==="Vengful" && input2.value==="Telekinesis"){
    result.innerHTML="You are Quetsiyah!";
  }
    if(input1.value==="Vengful" && input2.value==="Super Strength"){
      result.innerHTML="You are Katherine Pierce!";
    }
    if(input1.value==="Loyal" && input2.value==="Telekinesis"){
      result.innerHTML="You are Bonnie Bennet!";
    }
    if(input1.value==="Loyal" && input2.value==="Super Strength"){
      result.innerHTML="You are Elena Gilbert!";
    }
};

console.log(input2);