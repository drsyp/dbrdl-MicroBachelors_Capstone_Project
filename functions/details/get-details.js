/**
* Get all dealerships
*/
const { CloudantV1 } = require('@ibm-cloud/cloudant');
const { IamAuthenticator } = require('ibm-cloud-sdk-core');

function main(params) {
  return new Promise((resolve, reject) => {
    if (params && params.type === "reviews") {
      getReviews(params).then(reviews => {
        //resolve({"reviews":reviews.docs})
        resolve({"reviews":reviews.body})
      });
    } else if (params && params.type === "timeslots") {
      if (params.date) {
        resolve(getTimeSlots(params.date));
      } else {
        resolve(getTimeSlots(new Date()));
      }
    }
  })
}

function getReviews(params) {
    const authenticator = new IamAuthenticator({ apikey: params.CLOUDANT_APIKEY })
    const cloudant = CloudantV1.newInstance({ authenticator: authenticator});
    cloudant.setServiceUrl(params.CLOUDANT_URL);
    
    let reviews = [];
    
    return new Promise(function (resolve, reject) {
     cloudant.postAllDocs({ db: 'reviews2' , includeDocs: true })            
        .then((result)=>{
          // console.log(result.result.rows);
          let code = 200;
          if (result.result.rows.length == 0) {
              code = 404;
          }
          jsonArray = result.result.rows;
          jsonArray = jsonArray.map(x => x['doc']);

          resolve({
              
              
              statusCode: code,
              headers: { 'Content-Type': 'application/json' },
              //body: result
              //body: result.result.rows['doc']
              body: jsonArray
          });
        }).catch((err)=>{
          reject(err);
        })
    
    })
  
}

function getTimeSlots(date) {

  // ideally the code would look this up in the database, but due to limited time, this function returns some hardcoded values at this time
  const d = new Date(date);

  let result = {
    "arr": [
      {
        "title": `Available time slots for ${date}`,
        "options": [
        ],
        "description": "",
        "response_type": "option"
      }
    ]
  }

  switch (d.getDay()) {
    case 0:
      // Sunday
      // result.day = "Sunday";
      getSlots(result);
      break;
    case 1:
      // Monday
      getSlots(result);
      break;
    case 2:
      // Tue
      getSlots(result);
      break;
    case 3:
      // Wed
      getSlots(result);
      break;
    case 4:
      // Thu
      getSlots(result);
      break;
    case 5:
      // Fri
      getSlots(result);
      break;
    case 6:
      // Sat
      getSlots(result);
      break;
    default:
      result = {
        error: "Something went wrong!"
      }
      break;
  }
  return result;
}

function getWeekend(result) {
 //Implement it if you want to challenge yourself.
}

function getSlots(result) {
  result.arr[0].options.push(
    {
      "label": "8:00am - 9:00am",
      "value": {
        "input": {
          "text": "8:00am - 9:00am"
        }
      }
    });

  result.arr[0].options.push({
    "label": "11:00am - 1:00pm",
    "value": {
      "input": {
        "text": "11:00am - 1:00pm"
      }
    }
  });

  return result;
}
