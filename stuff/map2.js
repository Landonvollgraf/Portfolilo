// Store map index and list from local storage 
var item = localStorage.getItem("map");
console.log(item);
var list = localStorage.getItem("myList");
const myList = JSON.parse(list);
// Chnage index number from string to number 
var i = Number(item);

var map = document.querySelector(".map");

// make sidebar content box and map display 
function makeMap() {
    var item = myList[i];
    var img = document.createElement('img');
    var content = document.createElement('div');
    content.className = "content";
    var title = document.createElement('h2');
    var address = document.createElement('div');
    address.className = "address";
    var ad = document.createElement('p');
    const p = document.createElement('p');
    p.innerHTML = `${item.name}`;
    var add = document.createElement('img');
    //add.src = "placeholder.png";
    //add.style.width = "20px";
    //add.style.height = "20px";
    ad.innerHTML = item.address;
    
    //side.append(content);
    //content.append(tittle);
    //content.append(address);
    //address.append(add);
    //address.append(ad);
    //content.append(p);


    map.innerHTML=`<iframe src="${item.map}"></iframe>`;
}
makeMap();