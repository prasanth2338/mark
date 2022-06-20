'use strict';
const app = require("./app");
const Serverless = require("serverless-http")  
module.exports.mark = Serverless(app);

// const https = require('https')
// let url = "https://docs.aws.amazon.com/lambda/latest/dg/welcome.html"   

// exports.handler = async function(event) {
//   const promise = new Promise(function(resolve, reject) {
//     https.get(url, (res) => {
//         resolve(res.statusCode)
//       }).on('error', (e) => {
//         reject(Error(e))
//       })
//     })
//   return promise
// }

// exports.handler = (event, context, callback) => {
//   var number1 = event.Number1;
//   var number2 = event.Number2;
//   var sum = number1 + number2;
//   var product = number1 * number2;
//   var difference = Math.abs(number1 - number2);
//   var quotient = number1 / number2;
//   callback(null, {
//       "Number1": number1,
//       "Number2": number2,
//       "Sum": sum,
//       "Product": product,
//       "Difference": difference,
//       "Quotient": quotient
//   });
// };