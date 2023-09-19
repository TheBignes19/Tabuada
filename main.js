//const container = document.querySelector(".container")

function tabuada(){
    let num = parseInt(document.querySelector(".num").value);
    if(isNaN(num)){
      return
    }
    let result = document.querySelector('.result');
    let tabuada='';
  
    for(let count=1; count<=10 ; count++)
     tabuada += num+ " x " +count+ " = " + (num*count) + "<br/>";
                 
    result.innerHTML = tabuada;
  }
