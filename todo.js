let todoList=[]; 
    let dateList=[];
    

    function addTodo(){
       
        const taskBox= document.querySelector("#task_box");
        const task= taskBox.value;
        todoList.push(task);
       document.querySelector("#one").innerText= todoList.join("\n\n\n");
       
      const calendar=document.querySelector('#calendar');
      const date= calendar.value;
      dateList.push(date);
        document.querySelector("#two").innerText= dateList.join("\n\n\n");

        let button = document.createElement('button');
        button.innerText= 'Delete';
        button.style.backgroundColor='red';
        document.querySelector('.container4').appendChild(button);
        
        button.onclick= function(){
            document.querySelector('.container4').removeChild(button);
            for(let i=0; i<todoList.length; i++){
                if(todoList[i]===task){
                    todoList.splice(i,1);
                     dateList.splice(i,1);
                }
            }
            document.querySelector("#one").innerText= todoList.join("\n\n\n");
            document.querySelector("#two").innerText= dateList.join("\n\n\n");   
        }
     
    }
