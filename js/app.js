const addAddItemButton = document.querySelector('#AddItem');
const inputField = document.querySelector('#shoppingListItems');
const shopListContainer = document.querySelector('.shoppingList');

inputField.addEventListener('click', selectInput);
addAddItemButton.addEventListener('click', addTask);

function selectInput() {
    inputField.style['boxShadow'] = '0 6px 2px -2px green';
}

function addTask() {
    if(inputField.value.trim().length){

        let newAddItem = document.createElement('li');

        newAddItem.classList.add('li-styling');

        newAddItem.innerText = inputField.value;
        shopListContainer.appendChild(newAddItem);

        newAddItem.addEventListener('click',() => {
            newAddItem.style.color = 'gray';
            newAddItem.style.textDecoration = 'line-through'
        });

        newAddItem.addEventListener('dblclick', () => {
            shopListContainer.removeChild(newAddItem);
        } ) ;

    }
    else {
        console.log('empty value');
        inputField.style['boxShadow'] = '0 6px 2px -2px red';
        
    }

    inputField.value = '';

}