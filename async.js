
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
function performTask(task){
  console.log('task successful');
}
performTask()
let successMessage=[{}]
let task=new Promise((resolve,reject)=>{
  if(successMessage){
      return resolve((' success message'))
  }
  else{
      return reject((' error message'))
  }
})
async function customMessage(){
  let message=await task
  console.log({message})
}
customMessage()


// You have an asynchronous function performTask() that
//  returns a Promise. The Promise resolves if the task is 
// successful and rejects if there's an error. Write a function
//  that calls performTask() and logs a custom success message
//  if the task is successful, and a custom error message if 
// there's an error.

 async function runTask() {
   try {
     await performTask();
     console.log('Task completed successfully!');
   } catch (error) {
     console.log('Task encountered an error:', error);
   }
 }
 runTask()
  



