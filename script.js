// async await -
// fetch -
// then,catch -
// axios -

// let row = document.querySelector(".row")

// fetch("https://jsonplaceholder.typicode.com/todos/")    .then(data => data.json())
//     .then(result => {        console.log(result)
//         result.map(el => {            row.innerHTML += `<div class="col-4">
// <p>${el.id}</p><h6>${el.title}</h6>
// </div>`        })
//     }).catch((e) => {    console.log(e, "error")
// })

// fetch("https://restcountries.com/v3.1/all")
//     .then(data => data.json())
//     .then(result =>{
//         console.log(result.slice(0,10))
//         result.sort((a,b)=>{
//             return a.area < b.area ? 1 : -1
//         })
//         result.slice(0,250).map(el =>{
//             row.innerHTML += `<div class="col-4" style="border:40px solid purple">
// <img src="${el.flags.png}" alt="" style="width: 250px;height: 150px;margin: 0 40px;margin-top: 40px">
// <h4 class="py-2"style="margin-left: 40px"> ${el.name.common}</h4>
// <h5 class=""style="margin-left: 37px">capital: ${el.capital} city</h5>
// <h6 class=""style="margin-left: 37px">area: ${el.area} km</h6>
// <a href="${el.maps.googleMaps}" target="_blank" style="display: flex;flex-direction: column;margin-left: 30px">${el.maps.googleMaps}</a>
//
// </div>`
//         })
//     }).catch((e)=>{
//     console.log(e, 'error')
// })


//
// fetch("https://restcountries.com/v3.1/all")    .then(data => data.json())
//     .then(result => {        console.log(result.slice(0,150))
//         result.sort((a,b) => {            return a.area > b.area ? 1 : -1
//         })
//         result.slice(0,250).map(el => {            row.innerHTML += `<div class="col-4" style="border: 2px solid black">
// <img src="${el.flags.png}" alt="" style="width: 250px; height: 150px;"><h4 class="py-2">${el.name.common}</h4>
// <h5>citi: ${el.capital}</h5><h6>area: ${el.area} km</h6>
// <a href="${el.maps.googleMaps}" target="_blank">${el.maps.googleMaps}</a>
// </div>`        })
//     }).catch((e) => {    console.log(e, "error")
// })

// fetch('https://dog.ceo/api/breed/name/imeges/random')
//     .then(data => data.json())
//     .then(result =>{
//         result.sort((a,b)=>{
//         })
//         result.sort(0,100).map(el =>{
//             row.innerHTML += `<div class="col-4">
//
//
//
// </div>`
//         })
//         })




// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: "auto",
//     centeredSlides: true,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
// });











let row = document.querySelector(".row")
const btn = document.querySelector(".search-btn")
const input = document.querySelector(".input")
const error = document.querySelector(".error")

btn.addEventListener("click",() =>{
search()
})
input.addEventListener('keydown',(event)=>{
    if (event.key === 'Enter'){
        search()
    }
})

function search (){
    fetch(`https://dog.ceo/api/breed/${input.value.toLowerCase()}/images`)
        .then(res => res.json())
        .then(data =>{
            row.innerHTML = ''
            console.log(data.message.slice(0,10))
            data.message.length ? data.message.slice(0,10).map(el =>{
                row.innerHTML += `<div class="d-flex col-4 my-5">
<img src="${el}" alt="" class="image my-4" style=" width: 450px;height: 400px;margin-right: 20px"> 
</div>`
            }):error.innerHTML += 'нечего не найден'
        })
}


// fetch(`https://dog.ceo/api/breed/${name}/images`)
//     .then(data => data.json())
//     .then(result =>{
//         console.log(result.slice(0,10))
//         result.sort((a,b)=>{
//         })
//         result.sort(0,10).map(el =>{
//             row.innerHTML += `<div class="col - 4">
//
//
// </div>`
//         })
//     })