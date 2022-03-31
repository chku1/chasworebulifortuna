let cards = [
  "6a.gif",
  "6g.gif",
  "6j.gif",
  "6k.gif",
  "7a.gif",
  "7g.gif",
  "7j.gif",
  "7k.gif",
  "8a.gif",
  "8g.gif",
  "8j.gif",
  "8k.gif",
  "9a.gif",
  "9g.gif",
  "9j.gif",
  "9k.gif",
  "10a.gif",
  "10g.gif",
  "10j.gif",
  "10k.gif",
  "va.gif",
  "vg.gif",
  "vj.gif",
  "vk.gif",
  "da.gif",
  "dg.gif",
  "dj.gif",
  "dk.gif",
  "ka.gif",
  "kg.gif",
  "kj.gif",
  "kk.gif",
  "ta.gif",
  "tg.gif",
  "tj.gif",
  "tk.gif",
];

let RS = Math.floor(Math.random() * 36); //პირველი კარტი RandomStart
let i = 0;
let pointPC;
document.images[i].src = "deck/" + cards[RS];
pointPC = point(RS);
console.log("pointPC = " + pointPC);
let ki_ara = true;

function change(I) {
  let RC = Math.floor(Math.random() * 36);
  document.images[I].src = "deck/" + cards[RC];
  //RandomChange
  document.getElementById("btnChng").disabled = "yes";
}
function Up() {
  i++;
  if (i <= 4) {
    let RUp = Math.floor(Math.random() * 36); //RandomUp
    document.images[i].src = "deck/" + cards[RUp];
    pointUp = point(RUp);
    console.log("pointUp = " + pointUp);
    if (pointUp > pointPC) {
      document.getElementById("result").innerHTML = "არის მაღალი!";
      pointPC = pointUp;
      document.getElementById("result").style.color = "purple";
    } else {
      document.getElementById("result").innerHTML =
        "არ არის მაღალი. თამაში დამთავრებულია";
      document.getElementById("btnChng").disabled = "yes";
      document.getElementById("UP").disabled = "yes";
      document.getElementById("Down").disabled = "yes";
      document.getElementById("result").style.color = "red";
      document.getElementById("btnRestart").style.visibility = "visible";
    }
  } else {
    document.getElementById("result").innerHTML = "თქვენ მოიგეთ!!!";
    document.getElementById("result").style.color = "purple";
    document.getElementById("btnRestart").style.visibility = "visible";
  }
}
function Down() {
  i++;
  if (i <= 4) {
    let RDown = Math.floor(Math.random() * 36); //RandomDown
    document.images[i].src = "deck/" + cards[RDown];
    pointDown = point(RDown);
    console.log("pointDown = " + pointDown);
    if (pointDown < pointPC) {
      document.getElementById("result").innerHTML = "არის დაბალი!";
      pointPC = pointDown;
      document.getElementById("result").style.color = "purple";
    } else {
      document.getElementById("result").innerHTML =
        "არ არის დაბალი. თამაში დამთავრებულია";
      document.getElementById("btnChng").disabled = "yes";
      document.getElementById("UP").disabled = "yes";
      document.getElementById("Down").disabled = "yes";
      document.getElementById("result").style.color = "red";
      document.getElementById("btnRestart").style.visibility = "visible";
    }
  } else {
    document.getElementById("result").innerHTML = "თქვენ მოიგეთ!!!";
    document.getElementById("result").style.color = "purple";
    document.getElementById("btnRestart").style.visibility = "visible";
  }
}
function point(I) {
  if (cards[I].substring(0, 1) == "6") {
    P = 6; //point
  }
  if (cards[I].substring(0, 1) == "7") {
    P = 7;
  }
  if (cards[I].substring(0, 1) == "8") {
    P = 8;
  }
  if (cards[I].substring(0, 1) == "9") {
    P = 9;
  }
  if (cards[I].substring(0, 1) == "1") {
    P = 10;
  }
  if (cards[I].substring(0, 1) == "v") {
    P = 11;
  }
  if (cards[I].substring(0, 1) == "d") {
    P = 12;
  }
  if (cards[I].substring(0, 1) == "k") {
    P = 13;
  }
  if (cards[I].substring(0, 1) == "t") {
    P = 14;
  }
  return P;
}
