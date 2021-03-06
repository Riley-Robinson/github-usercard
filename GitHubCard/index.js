/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

//this is how to use azios to call for data
//.then response to deal with data coming from github 




/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:*/

/*<div class="card">     done
  <img src={image url of user} />     done
  <div class="card-info">     done
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>


 List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/


function PeopleCard(data) {
  const newCard = document.createElement('div');
  const  imgSrc = document.createElement('img');
  const  cardInfo = document.createElement('div');
  const  userName = document.createElement('h3');
  const   userPar = document.createElement('p');
  const  userLocation = document.createElement('p');
  const  userProfile = document.createElement('p');
  const  profileUrl = document.createElement('a');
  const  userFollowers = document.createElement('p');
  const  userFollowing = document.createElement('p');
  const  userBio = document.createElement('p');

    newCard.appendChild(imgSrc);
    newCard.appendChild(cardInfo);

    cardInfo.appendChild(userName);
    cardInfo.appendChild(userLocation);
    cardInfo.appendChild(userPar);
    cardInfo.appendChild(userProfile);
    cardInfo.appendChild(userFollowers);
    cardInfo.appendChild(userFollowing);
    cardInfo.appendChild(userBio);

    userProfile.appendChild(profileUrl);

    newCard.classList.add("card");
    cardInfo.classList.add("card-info");
    userName.classList.add("name");
    userPar.classList.add("username");

 imgSrc.src = data.avatar_url;
 userName.textContent = data.name;
 userPar.textContent = data.login;
 userLocation.textContent = data.location;
 profileUrl.textContent = data.html_url;
 userFollowers.textContent = data.followers;
 userFollowing.textContent = data.following;
 userBio.textContent = data.bio;

  return newCard;
}

const cards = document.querySelector(".cards");

axios.get('https://api.github.com/users/Riley-Robinson')
.then(response => {
  console.log(response.data);
  cards.appendChild(PeopleCard(response.data));
  })
    
//error message via .catch 

.catch(error => {
  console.log("Ya fucked up kid", error)
})
          

const followersArray = ["chelsabeth", "christianlewis024", "kwmorlock", "ashoffmann90", "	Alfredov96"];
    followersArray.forEach(userFollowers => {axios.get(`https://api.github.com/users/${userFollowers}`).then(response => {
      cards.append(PeopleCard(response.data)) 
    });
  })