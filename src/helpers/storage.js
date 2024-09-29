function putPosterInStorage(poster){
  localStorage.setItem(poster.id, JSON.stringify(poster));
}

function getPosterFromStorage(poster_id){
  return JSON.parse(localStorage.getItem(poster_id)); 
}

function putPersonInStorage(person){
  localStorage.setItem(person.id, JSON.stringify(person))
}

function getPersonFromStorage(person_id){
  return JSON.parse(localStorage.getItem(person_id)); 
}


