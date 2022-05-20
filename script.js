function showTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var session = "AM";

  if (h > 12) {
    H = h - 12;
  }
  if (h >= 12) {
    session = "PM";
  }
  H = H < 10 ? "0" + H : H;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = H + " : " + m + " : " + s + " " + session;
  setTimeout(showTime, 1000);
  document.getElementsByTagName("h1")[0].innerText = time;
}
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementsByTagName("h2")[0].innerText = day;

var dd = d.getDate();
var mm = d.getMonth() + 1;
var yy = d.getFullYear();
mm = mm < 10 ? "0" + mm : mm;
dd = dd < 10 ? "0" + dd : dd;
var date = dd + " " + mm + " " + yy;
document.getElementsByTagName("h3")[0].innerText = date;
