// Your code here
const dodger = document.getElementById("dodger");
function moveDodgerLeft(){
    dodger.style.left = "20px"
}

function moveDodgerRight(){
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left + 1}px`;
    }
}