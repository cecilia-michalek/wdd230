const list = document.querySelector('ul');
const input = document.querySelector('myInput');
const button = document.querySelector('myBtn');

button.disabled = true;
     
button.addEventListener("click", function()) {
  let val = event.target.value;

    if(val==='') {
      button.disabled = true;  // Make button disabled
  }
  else{
      button.disabled = false;  // Make button enabled 
  }
  button.onclick = function (){
    let newItem = input.value;
    input.value = '';  

    let itemList = document.createElement('li');
    let itemText = document.createElement('span');
    let itemBtn = document.createElement('button');
        
    itemList.appendChild(itemText);
    itemText. textContent = newItem;
  
        
    itemList.appendChild(itemBtn);
    itemBtn. textContent = '❌';
        
    list.appendChild(itemList);
        
    itemBtn.onclick = function () {
    list.removeChild(itemList);
        }
    
    
    input.focus();
        
        
      }
    }
      
