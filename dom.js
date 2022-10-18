//Examine DOCUMENT Object

//console.dir(document.all);
/*console.log(document.forms);
console.log(document.head);
console.log(document.links);
console.log(document.body);
console.log(document.all);
console.log(document.all[9]);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
document.title='Hello';*/

//Get Element By ID
//console.log(document.getElementById('header-title'));
//var div1=document.getElementById('main');
//div1.textContent='Hello Arjun';

/*var header=document.getElementById('main-header');
header.style.border='solid 3px #000';

var addlister=document.getElementById('main');
addlister.children[0].style.fontWeight='bold';
addlister.children[0].style.color='green';

console.log(addlister);
console.log(addlister.firstElementChild);*/

/*var items=document.getElementsByClassName('list-group-item');
console.log(items);

items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}*/

/*var li=document.getElementsByTagName('li');
console.log(li);

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}*/

/*var secondElement=document.querySelector('.list-group-item:nth-child(2)');
secondElement.style.backgroundColor='green';

var thirdElement=document.querySelector('.list-group-item:nth-child(3)');
thirdElement.style.display='none';*/

/*var items=document.querySelectorAll('.list-group-item');

items[1].style.color='green';

var oddItems=document.querySelectorAll('.list-group-item:nth-child(odd)');

for(let i=0;i<oddItems.length;i++){
    oddItems[i].style.backgroundColor='green';      
}*/

/*Parent element
var div1=document.querySelector('#main');
console.log(div1.parentElement);
div1.parentElement.style.backgroundColor='#ccc';*/

/*Last child and last element child
var itemList=document.querySelector('#items');
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.color='blue';
console.log(itemList.lastChild);*/

/*first child and first element child
itemList.firstElementChild.style.backgroundColor='yellow';
console.log(itemList.firstChild);*/

/*Next sibling and next element sibling
var header=document.querySelector('.title');
console.log(header);
console.log(header.nextElementSibling);
console.log(header.nextSibling);*/

//header.nextElementSibling.style.backgroundColor='#ccc';

//Prev sibling and prev element sibling
//console.log(itemList.previousElementSibling);
//console.log(header.previousSibling);

//itemList.previousElementSibling.style.backgroundColor='#ccc';


/*create an element
var newDiv=document.createElement('div');

//set attribute
newDiv.setAttribute('title', 'Hello world!');

//create text node
var newDivText=document.createTextNode('Hello World');

//append child
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontsize='60px';

container.insertBefore(newDiv,h1);*/


//Getting value from the input


//making variable for the list
var itemList=document.getElementById('items');

var myForm=document.getElementById('addForm');

myForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function removeItem(e) {
    if(e.target.classList.contains('delete')){
        if (confirm('Are you Sure?')) {
            var li=e.target.parentElement;
            itemList.removeChild(li)
        }
    }
    }


function addItem(e){
    e.preventDefault();
    var data=document.getElementById('item').value;
    var inputText=document.createTextNode(data);
    var li=document.createElement('li');
    li.className='list-group-item';
    li.appendChild(inputText);

    var dlt=document.createElement('button');
    dlt.className='btn btn-danger btn-sm float-right delete';
    dlt.appendChild(document.createTextNode('X'));
    li.appendChild(dlt);

    var addition=document.createElement('button');
    addition.className='btn btn-add btn-sm float-right add';
    addition.appendChild(document.createTextNode('Add'));
    li.appendChild(addition);

    itemList.appendChild(li);
}