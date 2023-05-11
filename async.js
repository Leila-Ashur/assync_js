// Write an asynchronous function that accepts a message string
//  and a delay time in milliseconds. The function should 
// log the message to the console after the specified
//  delay time.
async function logMessageWithDelay(message,delay) {
   await new Promise(resolve => setTimeout(resolve, delay));
    console.log(message);
    
}
logMessageWithDelay("I am a girl",1000)


// You have an array of user IDs and a function getUserData(id)
//  that returns a Promise with user data when given a user ID.
//  Write an asynchronous function that fetches and logs the
//  data for each user ID one by one, in sequence.
async function fetchAndLogsTheUserData(userIds) {
    for(const Id in userIds){
        const userData = await userData(Id);
        console.log(userData);

    }
    
}
const userIds=[23,54,67,89]
fetchAndLogsTheUserData(userIds);




// You have an asynchronous function performTask() that
//  returns a Promise. The Promise resolves if the task is 
// successful and rejects if there's an error. Write a function
//  that calls performTask() and logs a custom success message
//  if the task is successful, and a custom error message if 
// there's an error.
function performTask(task) {
  console.log("task successful")
}
performTask()

let message=[{}]
let task=new Promise((resolve,reject)=>{
  if(message){
    return ((resolve('task was successful')))

  }
  else{
    return reject(("task not successful"))
  }
  })
  async function customMessage(){
    let task=await task
    console.log({task});
  }
  customMessage()

    

