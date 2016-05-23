//global scope
var hi = "whats up?";
var bye = "see ya!";

// boolean = true || false
// number = 1
// string =

var array = ['orange', 'apple', 'banana', 'kiwi'];

var rand = function() {
  result = Math.floor(Math.random() * 5 + 1);
  console.log(result);
  return result;
}

var saying = function() {
  num = rand();
  if(num === 1) {
    console.log("Sally likes " + array[0]);
  } else if(num === 2) {
      console.log("Mike likes " + array[1]);
  } else if(num === 3) {
      console.log("Paul likes " + array[2]);
  } else if(num === 4) {
      console.log("Alisha like " + array[3]);
  } else {
      console.log("Kids like fruits!");
  }
}



// document.getElementById("demo").innerHTML = saying()
