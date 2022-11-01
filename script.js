// top buttons
const newContact = document.querySelector('#newContact');
const clearAll = document.querySelector('#clearAll');
const clearSelected = document.querySelector('#clearSelected');
const search = document.querySelector('#search');
const addRemove = document.querySelector('#addRemove');
const searchField = document.querySelector('#searchField');
// top buttons


// form
const formDisplay = document.querySelector('#form');
const fname = document.querySelector('#name');
const phone = document.querySelector('#phone');
const email = document.querySelector('#mail');
const address = document.querySelector('#address');
const form = document.querySelector('form');
const close = document.querySelector('#close');
const clearSearch = document.querySelector('#clearSearch');
const contactList = document.querySelector('#contactList');
const favoriteList = document.querySelector('#favoriteList');
const searchResults = document.querySelector('#searchResults');
formDisplay.style.display= 'none';
//form


function isorine (contact, vieta) {
  console.log(contact.name)
  const card = document.createElement('div');
    const nfield = document.createElement('p');
    const pfield = document.createElement('p');
    const efield = document.createElement('p');
    const afield = document.createElement('p');
    const deleteOne = document.createElement('button');
    deleteOne.setAttribute('class', `delete${contact.id}`);
    deleteOne.textContent='delete';
    deleteOne.style.backgroundColor= 'red';
    deleteOne.style.marginRight= '5px';
    const favorite = document.createElement('button');
    favorite.setAttribute('class', `favorite`);
    favorite.textContent='favorite';
    favorite.style.backgroundColor= 'rgb(87, 87, 237)';
    favorite.style.color= 'white';
    favorite.style.marginRight= '5px';
    const select = document.createElement('button');
    select.style.color= 'green';
    select.textContent= 'Select';
    card.style.backgroundColor= 'beige';
    card.style.width= '300px';
    card.style.padding= '10px';
    card.style.margin= '20px';

    card.appendChild(nfield);
    card.appendChild(pfield);
    card.appendChild(efield);
    card.appendChild(afield);
    card.appendChild(deleteOne);
    card.appendChild(favorite);
    card.appendChild(select);

    nfield.textContent=`Name: ${contact.name}`;
    pfield.textContent=`Phone nr: ${contact.phone}`;
    efield.textContent=`Email address: ${contact.email}`;
    afield.textContent=`Home address: ${contact.address}`;
    vieta.appendChild(card);


    if(contact.selected){
      card.style.backgroundColor= 'purple';
        select.textContent= 'Unselect';
    }

    deleteOne.addEventListener('click', (event)=> {
      let idCon = show.indexOf(contact);
      console.log(idCon)
      show.splice(idCon, 1)
      let idFav = showFav.indexOf(contact);
      console.log(idFav);

      if (idFav !== -1) {
        showFav.splice(idFav,1);
      };
      localStorage.setItem(`contacts`, JSON.stringify(show));
      localStorage.setItem(`favorites`, JSON.stringify(showFav))
      location.reload();
    })

    favorite.addEventListener('click', ()=> {
      if(contact.favorite===false){
      contact.favorite=true;
      let fav= JSON.parse(localStorage.getItem('favorites')) || [];
      let idCon = show.indexOf(contact);
      fav.push(show[idCon]);
      localStorage.setItem('favorites', JSON.stringify(fav));
      localStorage.setItem('contacts', JSON.stringify(show));
      } else {
        contact.favorite=false;
        console.log('false');
        let idFav = showFav.indexOf(contact);
        showFav.splice(idFav,1);
        console.log(idFav);
        if (idFav !== -1) {
          showFav.splice(idFav,1);
        };
          localStorage.setItem('favorites', JSON.stringify(showFav));
          localStorage.setItem('contacts', JSON.stringify(show));
        }
        location.reload();
      })

    select.addEventListener('click', ()=> {
      if(card.style.backgroundColor=== 'beige') {
        card.style.backgroundColor= 'purple';
        select.textContent= 'Unselect';
        contact.selected= true;
        localStorage.setItem('contacts', JSON.stringify(show));
      } else {
        card.style.backgroundColor= 'beige';
        select.textContent= 'Select';
        contact.selected= false;
        localStorage.setItem('contacts', JSON.stringify(show));
      }
    })
}

search.addEventListener('click', ()=> {
  if(searchField.style.display=== 'none'){
  searchField.style.display= 'block';
} else {
  searchField.style.display= 'none';
}
})

clearAll.addEventListener('click', ()=> {
localStorage.clear()
console.log('clicked')
location.reload();
})

newContact.addEventListener('click', ()=> {
  if (formDisplay.style.display=== 'none'){
  formDisplay.style.display= 'flex';
} else {
  formDisplay.style.display= 'none';
}
})

close.addEventListener('click', ()=> {
  formDisplay.style.display= 'none';
})

searchField.addEventListener('keyup', (e) => {
  const b = e.target.value.toLowerCase();
const filteredCharacters = show.filter((character) => {
  return (
    character.name.toLowerCase().includes(b)
  );
})
console.log(filteredCharacters)
if (b){
  ndexNumber=contact.id
  filteredCharacters.forEach((contact) => {
  contactList.innerHTML=null;
  isorine(contact, contactList);
  })
  } else {
    location.reload();
  }
})

let arr= JSON.parse(localStorage.getItem('contacts')) || [];
const contact = localStorage.getItem('contacts');
let show =JSON.parse(contact) || [];

show.forEach((contact) => {
  isorine(contact, contactList)
});

let fav= JSON.parse(localStorage.getItem('favorites')) || [];
const favorites = localStorage.getItem('favorites');
let showFav = JSON.parse(favorites) || [];

showFav.forEach((contact, indexNumber) => {
  isorine(contact, favoriteList);
});

clearSelected.addEventListener('click', ()=> {
  show.forEach((contact) => {
    if(contact.selected){
    let idCon = show.indexOf(contact);
    console.log(idCon);
    show.splice(idCon, 1);
    }

  })
  showFav.forEach((contact, indexNumber) => {
    if(contact.selected){
      console.log(contact.selected);
      let idFav = showFav.indexOf(contact);
    if (idFav !== -1) {
      showFav.splice(idFav,1);
    };
    } 
  })
  console.log(show);
    localStorage.setItem(`contacts`, JSON.stringify(show));
    localStorage.setItem(`favorites`, JSON.stringify(showFav))
    location.reload();
  })

  addRemove.addEventListener('click', ()=> {
    show.forEach((contact, indexNumber) => {
      if(contact.selected) {
        contact.favorite = true;
        contact.selected = false;
        localStorage.setItem('contacts', JSON.stringify(show));
        fav.push(show[indexNumber]);
        localStorage.setItem('favorites', JSON.stringify(fav));
        location.reload();
      } 
    })
    showFav.forEach((favorit, indexNumber) => {
      if(favorit.selected) {
        favorit.selected= false;
        showFav.splice(indexNumber,1);
        localStorage.setItem('favorites', JSON.stringify(showFav));
        location.reload();
      }
    })
  })

form.addEventListener('submit', (event)=> {
event.preventDefault();
let contactAll = JSON.parse(localStorage.getItem('contacts'))
console.log(contactAll)
if (fname.value && email.value && address.value){
  function obj(name, phone, email, address){
    this.name= name;
    this.phone= phone;
    this.email= email;
    this.address= address;
    this.favorite= false;
    this.selected= false;
    this.id= contactAll ? contactAll.length+1:1;
  }

  let contacts = new obj(`${fname.value}`, `${phone.value}`, `${email.value}`, `${address.value}`);
  arr.push(contacts);
  console.log(arr)
  localStorage.setItem('contacts', JSON.stringify(arr));
  fname.value='';
  phone.value='';
  email.value= '';
  address.value= '';
  location.reload();
}
})