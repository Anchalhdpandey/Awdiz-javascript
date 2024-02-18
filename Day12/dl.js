function checkIsUserValid() {
  var age = document.getElementById("age").value;
  const pTag = document.getElementById("displayResult");
  if (age > 18 && age < 81) {
    var div = document.createElement("div");
    div.style.color = "red";
    div.innerText = "you are eligible for dl";
    pTag.appendChild(div);
    alert("you are eligible for dl");
  } else if (age == 18) {
    var h1 = document.createElement("h1");
    h1.style.color = "pink";
    h1.style.fontSize = "40px";
    h1.innerText = "you are eligible for ll";
    pTag.appendChild(h1);
    alert("you are eligible for ll");
  } else {
    var h2 = document.createElement("h2");
    h2.style.color = "blue";
    h2.style.fontFamily = "cursive";
    h2.innerText = "You are not eligible for dl";
    pTag.appendChild(h2);
    alert("you are not eligible for dl");
  }
  document.getElementById("age").value = "";
}
