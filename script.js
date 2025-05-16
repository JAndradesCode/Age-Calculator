// create variables
const name="John Doe";
const age=28;
const occupation="Web Developer";
const bio="Passionate about coding and teaching others";
const profilePicture="profile.png"

const profileContainer=document.getElementById("profile-container");

// string literal example
// string literals use '' or "" (AWFUL)

// const profileCard='<div class="card">'+
// '<img src="'+ profilePicture +'"alt="Profile Picture">'+
// '<h2>'+ name +'</h2>' + 
// '<p>'+ age +'</p>' + 
// '<p>'+ occupation +'</p>' + 
// '<p>'+ bio +'</p>' + 

// '</div>';


// template literal example (MUCH BETTER)

const profileCard=`
    <div class="card">
        <img src="${profilePicture}" alt="Profile Picture">
        <h2>${name}</h2>
        <p>${age}</p>
        <p>${occupation}</p>
        <p>${bio}</p>
    </div>
    `;
profileContainer.innerHTML=profileCard;