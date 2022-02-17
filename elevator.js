const userDestination = document.querySelector('input');
const btn = document.querySelector('button')
const currentFloor = document.querySelector('.current span');
const message = document.querySelector('.message');
let currentSpeed = document.querySelector('.speed');
let proceed;
let prevDestination;
let speed = (currentSpeed.value * 1000) || 1000;

// do something went the button is clicked
// console.log(typeof(currentFloor.innerHTML))

// check if value is present
const kickElevator = async() => {
  let destination;
  userDestination.value ? proceed = true : proceed = false
  if(!proceed){
    alert("Pls provide a floor you are going to.");
    return;
  }

  // clear user input after click
  prevDestination = parseInt(userDestination.value);
  userDestination.innerHTML = '';

  // check for destination
  parseInt(userDestination.value) > parseInt(currentFloor.innerHTML)  ? destination = "upper" : parseInt(userDestination.value)  < parseInt(currentFloor.innerHTML) ? destination = "lower" : destination = "same";
// if and else is used to do something in the right way and opposite
  // direct elevator based on destination.
  if(destination === "upper"){
    const x = setInterval(() => {
      let toUpdate = parseInt(currentFloor.innerHTML)
      toUpdate++;
      currentFloor.innerHTML = toUpdate.toString();
      if(parseInt(currentFloor.innerHTML) === prevDestination){
        message.innerHTML = "We've gotten to the destination. Step out now."
        setTimeout(() => {
          message.innerHTML = '' 
        }, 3000);
        clearInterval(x);
      }
    }, speed);
    // check if user has gotten to destination and stop elevator
  } else if(destination === "lower"){
    const x = setInterval(() => {
      let toUpdate = parseInt(currentFloor.innerHTML)
      toUpdate--;
      currentFloor.innerHTML = toUpdate.toString();
      if(parseInt(currentFloor.innerHTML) === prevDestination){
        message.innerHTML = "We've gotten to the destination. Step out now."
        setTimeout(() => {
          message.innerHTML = ''
        }, 3000);
        clearInterval(x);
      }
    }, speed);
    // check if user has gotten to destination and stop elevator
  } else{
    message.innerHTML = "Are you mad or something???? You are currently there!!!"
    setTimeout(() => {
      message.innerHTML = ''
    }, 3000);
  }
}

btn.addEventListener('click', () => {
  kickElevator();
})