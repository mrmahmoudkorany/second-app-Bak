// const { request } = require("http");

// const request = require("request")

// const request = require ("request")
// const url="http://api.weatherapi.com/v1/current.json?key=01cedda7775649e7a7575202232011%20&q=china"
// request ({url,json:true},(error,response) =>{
// //   const data1=JSON.parse(response.body)
//   console.log(response.body.location.name)
//   console.log(response.body.current.condition.text)
// })
// ...................................................................
// const request=require("request")
// const url = "http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"
// request({url, json:true} ,(error,response)=>{
//     console.log(response.body)
//     // console.log(response.body.location.name)
//     // console .log(response.body.current.weather_descriptions[0])
// }
// )
// ..............................................................................
// const request= require("request")
// const url="http://api.weatherstack.com/current?access_key=aaf8d75230687617eaa10d75e38c7550&query=germany"
// request({url , json :true} ,(error,response)=>{
//     if(error){
//         console.log("EROR HAS OCCURED")
//     } else node app.js
// console.log(response.body.error.message)
//     } else{
//         console.log(response.body.location.name ,response.body.current.weather_descriptions[0] )
//     }
// })
// .......................................................................
// ........................................................................
                    //   lec6

// const request=require ("request")
// const geocodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/egypt.json?access_token=pk.eyJ1IjoiaXNsYW0yODQiLCJhIjoiY2wwamEzNmFhMGFtNTNkb3pqaXk4bXNnYSJ9.qYlrWIqo41gXgNNc4h8yIw"

// request({url:geocodeUrl ,json:true} ,(error, response)=>{
//     if(error){
//         console.log("unable to connect geocode services")
//     }else if(response.body.message)
//     {console.log(response.body.message)}
//     else if (response.body.features.length == 0){
//         console.log("unable to find location")
//     } else {
//         const longtitude =response.body.features[0].center[0]
//         const langtitude =response.body.features[0].center[1]
//         console .log (longtitude,langtitude)
//     }
// })
// .....................................................................


// ................................................................  
const geocode=require("./data/geocode")
const forecast=require("./data/forecast")
const country =process.argv[2]
geocode(country, (error,data)=>{
console.log("ERROR:",error)
console.log("DATA:",data)

forecast(data.latitude,data.longtitude,(error,data)=>{
    console.log ("ERROR:", error)
    console.log ("DATA:", data)
} )  
})
