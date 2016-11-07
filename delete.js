var str = 'this is my sentence';
//Write a function called reverse that takes a given str
//as it's only argument and returns that string after it's been reversed

  //Code Here
  console.log(reverse(str));
function reverse(str) {
  var arr = str.split(" ").reverse().join(" ");
  return arr;
}
