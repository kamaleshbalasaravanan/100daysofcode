// const btnEl = document.getElementById("btn");
// const birthdayEl = document.getElementById("date");
// const resultEl = document.getElementById("result");

// function calculateAge(e) {
//     e.preventDefault()
//   const birthdayValue = birthdayEl.value;
//   if (birthdayValue === "") {
//     alert("Please enter your birthday");
//   } else {
//     const age = getAge(birthdayValue);
//     resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
//   }
// }

// function getAge(birthdayValue) {
//   const currentDate = new Date();
//   const birthdayDate = new Date(birthdayValue);
//   let age = currentDate.getFullYear() - birthdayDate.getFullYear();
//   const month = currentDate.getMonth() - birthdayDate.getMonth();

//   if (
//     month < 0 ||
//     (month === 0 && currentDate.getDate() < birthdayDate.getDate())
//   ) {
//     age--;
//   }
//   return age;
// }

// btnEl.addEventListener("click", calculateAge);

const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const date = document.querySelector('#bdate')

btn.addEventListener("click", calculateDate)

function calculateDate(e){
    e.preventDefault()
    const birthdayValue= date.value
    if(birthdayValue === ""){
        console.log('hi')
        alert('please enter your DOB')
    }
    else{
        console.log('bye')
        const age = calculateAge(birthdayValue)
        result.textContent = `your age is ${age} ${age<=1?"year":"years"} old`
    }
}

function calculateAge(birthdayValue){
    console.log("age")
    const currentDate = new Date()
    const birthdayDate =new Date(birthdayValue)
    console.log(birthdayDate.getFullYear())
    console.log(birthdayDate.getMonth())

    const currentAge = currentDate.getFullYear() - birthdayDate.getFullYear()
    const month = currentDate.getMonth() - birthdayDate.getMonth()
    console.log(currentAge+", "+month)

    if( month < 0 || (month === 0 &&  currentDate.getDate() < birthdayDate.getDate()) ){
        currentAge--
    }
        return currentAge
}