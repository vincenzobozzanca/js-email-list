
const btn = document.getElementById("add-btn");
const eList = document.getElementById("list");
let totalEmail = [];


btn.addEventListener("click", function() {
    eList.innerHTML = "";

    for (let i = 0; i < 10; i++) {

        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((resp) => {
            console.log(resp.data); 
        
        eList.innerHTML += `<div class="list-group-item list-group-item-action text-center fw-bold">${resp.data.response}</div>`;
    
    
    
    
        })
    }
    

}
)








