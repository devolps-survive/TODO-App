const List = document.getElementById("lists");
const Input = document.getElementById("UserInput");
const Tdo = document.getElementById("ToDo");
const ul = document.createElement("ul");
List.appendChild(ul);
const con = document.createElement("p");
con.className = "count"; 


let count=0;


Tdo.addEventListener("click", () => {
   

    const task = document.createElement("div");
    task.className = "UserInput";
    const closeIcon = document.createElement("i");
    closeIcon.className = "fa-solid fa-xmark close";

    const label = document.createElement("label");
    label.textContent = "Add Your Task";

    const input = document.createElement("input");
    input.type = "text";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add";
    addBtn.className = "ad";



    closeIcon.addEventListener("click", () => {
        const confirmed = confirm("Delete this task?");
        if (confirmed) {
            task.remove();
        }
    });
    addBtn.addEventListener("click", () => {
        if (input.value.trim() === "") return;
        const myTask = document.createElement("div");
        myTask.className = "myTask";
        const li = document.createElement("li");
        li.textContent = input.value;
        myTask.appendChild(li);
        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener('click', ()=> {
            li.style.textDecoration = 'line-through';
        });
       
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener('click', ()=>{
            myTask.remove();
            count--;
            con.textContent = `Number Of Tasks: ${count}`;
        })
        myTask.appendChild(completeBtn);
        myTask.appendChild(deleteBtn);
        ul.appendChild(myTask);
        count++;
        con.textContent = `Number Of Tasks: ${count}`;
        deleteBtn.className = "delete";
        count++;
        input.value = ""; 
        task.remove();


    });

    task.append(closeIcon, label, input, addBtn);
    Input.appendChild(task);
});



closeIcon.addEventListener("click", () => {
    alert("Close icon clicked");
});
