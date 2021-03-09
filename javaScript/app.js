'use strict';
let form = document.getElementById('stuform');
let tabelParent = document.getElementById('displayForom');
// formOfStudent = [];

// helper function 

function getRandomArbitrary(min, max) {
    return Math.random() * (min - max) + min;
}

function FormOfStudent(id, name, mobile, age, tution) {
    this.id = id;
    this.name = name;
    this.email = name + '@ltuc.com';
    this.mobile = mobile;
    this.age = getRandomArbitrary(18, 25);
    this.tution = tution;



    formOfStudent.push(this);


}

function storData() {
    localStorage.setItem('student', JSON.stringify(formOfStudent));
}

function renderStudent() {

}

function getList() {
    if (localStorage.getItem('student')) {
        formOfStudent = JSON.parse(localStorage.getItem('student'));
        // render
    }
}

function logSubmit(event) {
    log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
}
// function handelItem(event) {
//     event.preventDefult();

//     let stuEm = event.target.stuEm.value;
//     let mobileNumber = event.target.mobileNumber.value;
//     let tution = event.target.value


// }
// const getForm = JSON.stringify()
// localStorage.getItem()

FormOfStudent.prototype.render = function() {
    let rowOne = document.createElement('tr');
    tabelParent.appendChild(rowOne);

    let nameOne = document.createElement('td');
    tabelParent.appendChild(nameOne);
    nameOne.textContent = this.name;

    let idOne = document.createElement('td');
    tabelParent.appendChild(idOne);
    idOne.textContent = this.id

    let mobileOne = document.createElement('td')
    tabelParent.appendChild(mobileOne);
    mobileOne.textContent = this.mobile;

    let ageOne = document.createElement('td')
    tabelParent.appendChild(ageOne);
    ageOne.textContent = this.age;

    // let mobileOne = document.createElement('td')
    // tabelParent.appendChild(mobileOne);
    // mobileOne.textContent = this.mobile;





}

form.addEventListener('submit', handelItem);
clear.addEventListener();
handelItem()

FormOfStudent.prototype.render()