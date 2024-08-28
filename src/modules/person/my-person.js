import './my-person.scss'
import personHTML from './index.html'

function create(photo, name, description, mail, website, tg){
    const person = document.createElement('section')
    person.classList.add('person')

    return person;

}

export default{
    create
}