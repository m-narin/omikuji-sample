let name;
let userName;
let userResult;
const resultArray = ["大吉", "中吉", "小吉", "吉", "凶"]

userName = prompt("お名前を教えて下さい。");

if (userName == ""){
  userName = "名無し"
}

document.getElementById("name").innerHTML = userName;

let rand = Math.floor( Math.random() * 5);
userResult = resultArray[rand]

document.getElementById("result").innerHTML = userResult;