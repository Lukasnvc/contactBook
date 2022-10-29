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

clearSelected.addEventListener('click', ()=> {
  
})



let arr= JSON.parse(localStorage.getItem('contacts')) || [];
  const contact = localStorage.getItem('contacts');
  let show =JSON.parse(contact) || [];
  
  
  show.forEach((contact, indexNumber) => {
    const card = document.createElement('div');
    card.setAttribute('id', `${contact.name}`)
    const nfield = document.createElement('p');
    const pfield = document.createElement('p');
    const efield = document.createElement('p');
    const afield = document.createElement('p');
    const deleteOne = document.createElement('button');
    deleteOne.setAttribute('class', `delete${indexNumber}`);
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
    card.style.width= '250px';
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
    contactList.appendChild(card);

    deleteOne.addEventListener('click', ()=> {
    show.splice(indexNumber,1);
    localStorage.setItem('contacts', JSON.stringify(show));
    location.reload();
    })

    favorite.addEventListener('click', ()=> {
      contact.favorite=true;
      console.log(contact.favorite)
      let fav= JSON.parse(localStorage.getItem('favorites')) || [];
      fav.push(show[indexNumber]);
      localStorage.setItem('favorites', JSON.stringify(fav));
      location.reload();
    })

    select.addEventListener('click', ()=> {
      if(card.style.backgroundColor=== 'beige') {
        card.style.backgroundColor= 'purple';
        select.textContent= 'Unselect';
        contact.selected= true;
        console.log(show[indexNumber].selected);
        localStorage.setItem('contacts', JSON.stringify(show));
      } else {
        card.style.backgroundColor= 'beige';
        select.textContent= 'Select';
        contact.selected= false;
        localStorage.setItem('contacts', JSON.stringify(show));
      }
    })
  });

  let fav= JSON.parse(localStorage.getItem('favorites')) || [];
  const favorites = localStorage.getItem('favorites');
  let showFav = JSON.parse(favorites) || [];

  showFav.forEach((contact, indexNumber) => {
    const card = document.createElement('div');
    card.setAttribute('id', `${contact.name}`)
    const nfield = document.createElement('p');
    const pfield = document.createElement('p');
    const efield = document.createElement('p');
    const afield = document.createElement('p');
    const deleteOne = document.createElement('button');
    deleteOne.setAttribute('class', `delete${indexNumber}`)
    deleteOne.textContent='Delete';
    deleteOne.style.backgroundColor= 'red';
    deleteOne.style.marginRight= '5px'
    const favorite = document.createElement('button');
    favorite.textContent='Delete from favorite';
    favorite.style.color= 'red';
    favorite.style.marginRight= '5px'
    const select = document.createElement('button');
    select.style.color= 'green';
    select.textContent= 'Select';
    card.style.backgroundColor= 'beige';
    card.style.width= '250px';
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
    favoriteList.appendChild(card);

    deleteOne.addEventListener('click', ()=> {
    console.log('click');
    show.splice(indexNumber,1);
    localStorage.setItem('contacts', JSON.stringify(show));
    showFav.splice(indexNumber,1);
    localStorage.setItem('favorites', JSON.stringify(showFav));
    location.reload();
    })

    favorite.addEventListener('click', ()=> {
      contact.favorite=false;
      let fav= JSON.parse(localStorage.getItem('favorites')) || [];
      fav.splice(indexNumber,1);
      localStorage.setItem('favorites', JSON.stringify(fav));
      location.reload();
    })

    select.addEventListener('click', ()=> {
      if(card.style.backgroundColor=== 'beige') {
        card.style.backgroundColor= 'purple';
        select.textContent= 'Unselect';
        contact.selected= true;
        localStorage.setItem('favorites', JSON.stringify(showFav));
      } else {
        card.style.backgroundColor= 'beige';
        select.textContent= 'Select';
        contact.selected= false;
        localStorage.setItem('favorites', JSON.stringify(showFav));
      }
    })
  });



// searchField.addEventListener('keyup', ()=> {
  
//   console.log(searchField.value)

//   show.forEach((contact) => {
//     if(contact.name===searchField.value){
//       console.log('issove');
//       let rastas = show.filter(contact => contact.name===searchField.value);
//       console.log(rastas)
//       const card = document.createElement('div');
//     card.setAttribute('id', `${contact.name}`)
//     const nfield = document.createElement('p');
//     const pfield = document.createElement('p');
//     const efield = document.createElement('p');
//     const afield = document.createElement('p');
//     const deleteOne = document.createElement('button');
//     deleteOne.textContent='Delete';
//     deleteOne.style.backgroundColor= 'red';
//     deleteOne.style.marginRight= '5px'
//     card.style.backgroundColor= 'beige';
//     card.style.width= '250px';
//     card.style.padding= '10px';
//     card.style.margin= '20px';

//     card.appendChild(nfield);
//     card.appendChild(pfield);
//     card.appendChild(efield);
//     card.appendChild(afield);
//     card.appendChild(deleteOne);

//     console.log(contact.name)

//     nfield.textContent=`Name: ${contact.name}`;
//     pfield.textContent=`Phone nr: ${contact.phone}`;
//     efield.textContent=`Email address: ${contact.email}`;
//     afield.textContent=`Home address: ${contact.address}`;
//     searchResults.appendChild(card);

//     deleteOne.addEventListener('click', ()=> {
//       console.log('click');
//       show.splice(indexNumber,1);
//       localStorage.setItem('contacts', JSON.stringify(show));
//       showFav.splice(index,1);
//       localStorage.setItem('favorites', JSON.stringify(showFav));
//       location.reload();
//       })

//     } else {
//       console.log('neissove')
//     }
    
//       })
//       searchField.value='';
// })


searchField.addEventListener('input', (e) => {
  e.preventDefault();
  let b = searchField.value;
  if (b) {
    let target =show.filter((item) => {
      console.log(item.name);
      console.log(item.name.includes(b))
      return item.name.includes(b)
    })
    const find = document.createElement('div');
    let [person] = target
    console.log(person)
    

    const card = document.createElement('div');
    const nfield = document.createElement('p');
    const pfield = document.createElement('p');
    const efield = document.createElement('p');
    const afield = document.createElement('p');
    const deleteOne = document.createElement('button');
    deleteOne.textContent='Delete';
    deleteOne.style.backgroundColor= 'red';
    deleteOne.style.marginRight= '5px'
    card.style.backgroundColor= 'beige';
    card.style.width= '250px';
    card.style.padding= '10px';
    card.style.margin= '20px';

    card.appendChild(nfield);
    card.appendChild(pfield);
    card.appendChild(efield);
    card.appendChild(afield);
    card.appendChild(deleteOne);
  
    nfield.textContent=`Name: ${person.name}`;
    pfield.textContent=`Phone nr: ${person.phone}`;
    efield.textContent=`Email address: ${person.email}`;
    afield.textContent=`Home address: ${person.address}`;
    searchResults.appendChild(card);
  } else {
    nfield.textContent=``;
    pfield.textContent=``;
    efield.textContent=``;
    afield.textContent=``;
  }
  
})




form.addEventListener('submit', (event)=> {
event.preventDefault();
if (fname.value && email.value && address.value){
  function obj(name, phone, email, address){
    this.name= name;
    this.phone= phone;
    this.email= email;
    this.address= address;
    this.favorite= false;
    this.selected= false;
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