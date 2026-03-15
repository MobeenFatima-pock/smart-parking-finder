let parkingData = [

{name:"City Mall Parking",location:"Mall",spaces:10,price:100},

{name:"Blue Area Parking",location:"Street",spaces:6,price:120},

{name:"Commercial Garage",location:"Garage",spaces:15,price:80},

{name:"Airport Parking Zone A",location:"Airport",spaces:20,price:150},

{name:"Airport Parking Zone B",location:"Airport",spaces:12,price:140},

{name:"University Main Parking",location:"University",spaces:25,price:50},

{name:"University Gate 2 Parking",location:"University",spaces:18,price:40},

{name:"Satellite Town Street Parking",location:"Street",spaces:14,price:70},

{name:"Mall Basement Parking",location:"Mall",spaces:30,price:110}

];

let totalBookings=0;

function login(){

let user=document.getElementById("username").value;

if(user=="")
alert("Enter name first");

else
alert("Welcome "+user);

}


function displayParking(list){

let container=document.getElementById("parkingList");

container.innerHTML="";

list.forEach(p=>{

let card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${p.name}</h3>

<p>Location: ${p.location}</p>

<p>Available Spaces: ${p.spaces}</p>

<p>Price: Rs ${p.price}/hr</p>

<button onclick="bookParking('${p.name}')">
Reserve Spot
</button>

`;

container.appendChild(card);

});

}


function searchParking(){

let type=document.getElementById("type").value;

let filtered=parkingData.filter(p=>{

return type=="" || p.location==type;

});

displayParking(filtered);

}


function bookParking(name){

let space=parkingData.find(p=>p.name==name);

if(space.spaces>0){

space.spaces--;

totalBookings++;

document.getElementById("bookings").innerText=totalBookings;

alert("Parking Reserved!");

displayParking(parkingData);

}

else{

alert("No spaces available");

}

}


displayParking(parkingData);