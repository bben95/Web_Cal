var buttons = document.getElementsByClassName("button");
var arr = [...buttons];

arr.forEach((element, index) => {
  element.addEventListener("click", () => {
    element.style.opacity = "1";
    if (index == 0) {
      document.getElementById("main").style.backgroundColor =
        "hsl(222, 26%, 31%)";
      document.getElementsByClassName("button")[0].style.backgroundColor =
        "hsl(6, 63%, 50%)";
      document.getElementsByClassName(
        "tri-state-toggle"
      )[0].style.backgroundColor = "hsl(223, 31%, 20%)";
      document.getElementById("main_display").style.backgroundColor =
        "hsl(224, 36%, 15%)";
      document.getElementById("inputs").style.backgroundColor =
        "hsl(223, 31%, 20%)";
      var btns = document.getElementsByTagName("button");

      for (btn of btns) {
        btn.style.backgroundColor = "hsl(225, 21%, 49%)";
        btn.style.color = "hsl(221, 14%, 31%)";
      }
      document.getElementById("del").style.backgroundColor =
        "hsl(30, 25%, 89%)";
      document.getElementById("reset").style.backgroundColor =
        "hsl(30, 25%, 89%)";
      document.getElementById("equals").style.backgroundColor =
        "hsl(6, 63%, 50%)";
      document.getElementById("header1").style.color = "white";
      document.getElementById("header2").style.color = "white";
      document.getElementById("sd").style.color = "white";
      document.getElementById("bd").style.color = "white";
    } else if (index == 1) {
      document.getElementById("main").style.backgroundColor = "hsl(0, 0%, 90%)";
      document.getElementsByClassName("button")[1].style.backgroundColor =
        "hsl(185, 42%, 37%)";
      document.getElementsByClassName(
        "tri-state-toggle"
      )[0].style.backgroundColor = " hsl(0, 5%, 81%)";
      document.getElementById("main_display").style.backgroundColor =
        "hsl(0, 0%, 93%)";
      document.getElementById("inputs").style.backgroundColor =
        "hsl(0, 5%, 81%)";
      var btns = document.getElementsByTagName("button");
      for (btn of btns) {
        btn.style.backgroundColor = "hsl(185, 42%, 37%)";
        btn.style.color = "hsl(60, 10%, 19%)";
      }
      document.getElementById("del").style.backgroundColor = "hsl(45, 7%, 89%)";
      document.getElementById("reset").style.backgroundColor =
        "hsl(45, 7%, 89%)";
      document.getElementById("equals").style.backgroundColor =
        "hsl(25, 98%, 40%)";
      document.getElementById("header1").style.color = "black";
      document.getElementById("header2").style.color = "black";
      document.getElementById("sd").style.color = "black";
      document.getElementById("bd").style.color = "black";
    } else {
      document.getElementById("main").style.backgroundColor =
        "hsl(268, 75%, 9%)";
      document.getElementsByClassName("button")[2].style.backgroundColor =
        "hsl(176, 100%, 44%)";
      document.getElementsByClassName(
        "tri-state-toggle"
      )[0].style.backgroundColor = "hsl(268, 71%, 12%)";
      document.getElementById("main_display").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      document.getElementById("inputs").style.backgroundColor =
        "hsl(268, 71%, 12%)";
      var btns = document.getElementsByTagName("button");
      for (btn of btns) {
        btn.style.backgroundColor = "hsl(281, 89%, 26%)";
        btn.style.color = "hsl(52, 100%, 62%)";
      }
      document.getElementById("del").style.backgroundColor =
        "hsl(268, 47%, 21%)";
      document.getElementById("reset").style.backgroundColor =
        "hsl(268, 47%, 21%)";
      document.getElementById("equals").style.backgroundColor =
        " hsl(176, 100%, 44%)";
      document.getElementById("header1").style.color = "white";
      document.getElementById("header2").style.color = "white";
      document.getElementById("sd").style.color = "white";
      document.getElementById("bd").style.color = "white";
    }
    arr
      .filter(function (item) {
        return item != element;
      })
      .forEach((item) => {
        item.style.opacity = "0";
      });
  });
});
var numbd = "";
var numsd = "";
function addvalue(num) {
  numbd = numbd + num;
  document.getElementById("bd").value = numbd;
}
function addop(op) {
  numbd = numbd + op;
  numsd = numsd + numbd;
  document.getElementById("sd").value = numsd;
  document.getElementById("bd").value = "";
  numbd = "";
}
function final() {
  var final = eval(numsd + numbd);
  document.getElementById("bd").value = final;
  document.getElementById("sd").value = "";
  numbd = final;
  numsd = "";
}
function del() {
  var numdel = document.getElementById("bd").value;
  numbd = numdel.slice(0, -1);
  document.getElementById("bd").value = numbd;
}
function reset() {
  document.getElementById("bd").value = "";
  document.getElementById("sd").value = "";
  numbd = "";
  numsd = "";
}
