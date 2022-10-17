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
console.log(document.getElementById('header-title'));
//var div1=document.getElementById('main');
//div1.textContent='Hello Arjun';

var header=document.getElementById('main-header');
header.style.border='solid 3px #000';

var addlister=document.getElementById('main');
addlister.children[0].style.fontWeight='bold';
addlister.children[0].style.color='green';

console.log(addlister);
console.log(addlister.firstElementChild);

/*var items=document.getElementsByClassName('list-group-item');
console.log(items);

items[2].style.backgroundColor='green';

for(let i=0;i<items.length;i++){
    items[i].style.fontWeight='bold';
}*/

var li=document.getElementsByTagName('li');
console.log(li);

for(let i=0;i<li.length;i++){
    li[i].style.fontWeight='bold';
}