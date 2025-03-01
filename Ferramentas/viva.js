

var campoinp = document.querySelector('.fazer')
var btt = document.querySelector('.btadd')


btt.addEventListener('click',list)

function list(){
    var input = document.createElement("input");
    input.type = "text";
    input.classList.add("inpi");
    campoinp.append(input)
    input.addEventListener('keydown',function(event){
        
        if(event.key === 'Enter') { 
            var ulfz2 = document.createElement('ul'); 
            ulfz2.classList.add("ulfz2")
            var lifz = document.createElement('li'); 
            lifz.classList.add("listfz")
            
            lifz.textContent = input.value;

            var btnRemove = document.createElement('button');
            
            btnRemove.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
</svg>`;

            btnRemove.classList.add("brfz");
            btnRemove.addEventListener('click', function() {
                ulfz2.remove(); 
            });
            lifz.appendChild(btnRemove);

            ulfz2.appendChild(lifz);
            campoinp.appendChild(ulfz2);
          
            input.value = '';
            input.remove()
    }}
)
}

/*andamento */


var estoque = document.querySelector('.estoque')
var btts = document.querySelector('.btadds')


btts.addEventListener('click',lists)

function lists(){
    var inputs = document.createElement("input");
    inputs.type = "text";
    inputs.classList.add("inpis");
    estoque.append(inputs)
   
    inputs.addEventListener('keydown',function(event){
        
        if(event.key === 'Enter') { 
            var ulfz2s = document.createElement('ul'); 
            ulfz2s.classList.add("ulfz2")
            var lifzs = document.createElement('li'); 
            lifzs.classList.add("listfz")
            
            lifzs.textContent = inputs.value;

            var btnRemoves = document.createElement('button');
            
            btnRemoves.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
</svg>`;

            btnRemoves.classList.add("brfz");
            btnRemoves.addEventListener('click', function() {
                ulfz2s.remove(); 
            });
            lifzs.appendChild(btnRemoves);

            ulfz2s.appendChild(lifzs);
            estoque.appendChild(ulfz2s);
          
            inputs.value = '';
            inputs.remove()
    }}
)
}


/*Concluido */
var Concluido = document.querySelector('.concluido');
var bttcd = document.querySelector('.btaddcd');

bttcd.addEventListener('click', listcd);

function listcd() {
    var inputcd = document.createElement("input");
    inputcd.type = "text";
    inputcd.classList.add("inpicd");
    Concluido.append(inputcd);

    inputcd.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            var ulfcd = document.createElement('ul');
            ulfcd.classList.add("ulfcd"); 
            var lifcd = document.createElement('li');
            lifcd.classList.add("listcd");
            lifcd.textContent = inputcd.value; // 

            var btnRemovecd = document.createElement('button');
            btnRemovecd.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/>
                </svg>
            `;
            btnRemovecd.classList.add("brcd");
            btnRemovecd.addEventListener('click', function() {
                ulfcd.remove();  
            });

            lifcd.appendChild(btnRemovecd); 

            ulfcd.appendChild(lifcd); 
            Concluido.appendChild(ulfcd); 

            // Limpa o campo de entrada após adicionar o item
            inputcd.value = '';
            inputcd.remove(); // Remove o campo de entrada após o uso
        }
    });
}

/*sobre back log */

var dvd = document.querySelector('.dvd')
var sobreback = document.querySelector('.sobreback')


dvd.addEventListener('click', function() {
    
    if (sobreback.style.visibility === 'hidden')
        {
        sobreback.style.visibility = 'visible';
    } else {
        sobreback.style.visibility = 'hidden';
    }
});


/*coloca a pagina inicial ai */

document.querySelector('.vivimg').addEventListener('click',function(){
    window.location.href = "index.html"; 
})

