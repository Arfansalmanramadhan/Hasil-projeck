let index = 0;
show();

function show() {
  let a;
  const slide = document.getElementsByClassName("slides");
  const dot = document.getElementsByClassName("dot");
  for (a = 0; a < slide.length; a++) {
    slide[a].style.display = `none`;
  }
  index++;
  if (index > slide.length) {
    index = 1;
  }

  for (a = 0; a < dot.length; a++) {
    dot[a].className = dot[a].className.replace("active", " ");
  }
  slide[index - 1].style.display = "block";
  dot[index - 1].className += "active";
  setTimeout(show, 4000);
}

let index1 = 0;
show1();

function show1() {
  let a;
  const slides1 = document.getElementsByClassName("slides1");
  const dots1 = document.getElementsByClassName("dots1");
  for (a = 0; a < slides1.length; a++) {
    slides1[a].style.display = `none`;
  }
  index1++;
  if (index1 > slides1.length) {
    index1 = 1;
  }

  for (a = 0; a < dots1.length; a++) {
    dots1[a].className = dots1[a].className.replace("active", " ");
  }
  slides1[index1 - 1].style.display = "block";
  dots1[index1 - 1].className += "active";
  setTimeout(show1, 3000);
}
let index2 = 0;
show2();

function show2() {
  let a;
  const slides2 = document.getElementsByClassName("slides2");
  const dots2 = document.getElementsByClassName("dots2");
  for (a = 0; a < slides2.length; a++) {
    slides2[a].style.display = `none`;
  }
  index2++;
  if (index2 > slides2.length) {
    index2 = 1;
  }

  for (a = 0; a < dots2.length; a++) {
    dots2[a].className = dots2[a].className.replace("active", " ");
  }
  slides2[index2 - 1].style.display = "block";
  dots2[index2 - 1].className += "active";
  setTimeout(show2, 3000);
}
let index3 = 0;
show3();

function show3() {
  let a;
  const slides3 = document.getElementsByClassName("slides3");
  const dots3 = document.getElementsByClassName("dots3");
  for (a = 0; a < slides3.length; a++) {
    slides3[a].style.display = `none`;
  }
  index3++;
  if (index3 > slides3.length) {
    index3 = 1;
  }

  for (a = 0; a < dots3.length; a++) {
    dots3[a].className = dots3[a].className.replace("active", " ");
  }
  slides3[index3 - 1].style.display = "block";
  dots3[index3 - 1].className += "active";
  setTimeout(show3, 3000);
}
let index4 = 0;
show4();

function show4() {
  let a;
  const slides4 = document.getElementsByClassName("slides4");
  const dots4 = document.getElementsByClassName("dots4");
  for (a = 0; a < slides4.length; a++) {
    slides4[a].style.display = `none`;
  }
  index4++;
  if (index4 > slides4.length) {
    index4 = 1;
  }

  for (a = 0; a < dots4.length; a++) {
    dots4[a].className = dots4[a].className.replace("active", " ");
  }
  slides4[index4 - 1].style.display = "block";
  dots4[index4 - 1].className += "active";
  setTimeout(show4, 3000);
}
let index5 = 0;
show5();

function show5() {
  let a;
  const slides5 = document.getElementsByClassName("slides5");
  const dots5 = document.getElementsByClassName("dots5");
  for (a = 0; a < slides5.length; a++) {
    slides5[a].style.display = `none`;
  }
  index5++;
  if (index5 > slides5.length) {
    index5 = 1;
  }

  for (a = 0; a < dots5.length; a++) {
    dots5[a].className = dots5[a].className.replace("active", " ");
  }
  slides5[index5 - 1].style.display = "block";
  dots5[index5 - 1].className += "active";
  setTimeout(show5, 3000);
}
let index6 = 0;
show6();

function show6() {
  let a;
  const slides6 = document.getElementsByClassName("slides6");
  const dots6 = document.getElementsByClassName("dots6");
  for (a = 0; a < slides6.length; a++) {
    slides6[a].style.display = `none`;
  }
  index6++;
  if (index6 > slides6.length) {
    index6 = 1;
  }

  for (a = 0; a < dots6.length; a++) {
    dots6[a].className = dots6[a].className.replace("active", " ");
  }
  slides6[index6 - 1].style.display = "block";
  dots6[index6 - 1].className += "active";
  setTimeout(show6, 3000);
}
let index7 = 0;
show7();

function show7() {
  let a;
  const slides7 = document.getElementsByClassName("slides7");
  const dots7 = document.getElementsByClassName("dots7");
  for (a = 0; a < slides7.length; a++) {
    slides7[a].style.display = `none`;
  }
  index7++;
  if (index7 > slides7.length) {
    index7 = 1;
  }

  for (a = 0; a < dots7.length; a++) {
    dots7[a].className = dots7[a].className.replace("active", " ");
  }
  slides7[index7 - 1].style.display = "block";
  dots7[index7 - 1].className += "active";
  setTimeout(show7, 3000);
}
let index8 = 0;
show8();

function show8() {
  let a;
  const slides8 = document.getElementsByClassName("slides8");
  const dots8 = document.getElementsByClassName("dots8");
  for (a = 0; a < slides8.length; a++) {
    slides8[a].style.display = `none`;
  }
  index8++;
  if (index8 > slides8.length) {
    index8 = 1;
  }

  for (a = 0; a < dots8.length; a++) {
    dots8[a].className = dots8[a].className.replace("active", " ");
  }
  slides8[index8 - 1].style.display = "block";
  dots8[index8 - 1].className += "active";
  setTimeout(show8, 3000);
}
let index9 = 0;
show9();

function show9() {
  let a;
  const slides9 = document.getElementsByClassName("slides9");
  const dots4 = document.getElementsByClassName("dots4");
  for (a = 0; a < slides9.length; a++) {
    slides9[a].style.display = `none`;
  }
  index9++;
  if (index9 > slides9.length) {
    index9 = 1;
  }

  for (a = 0; a < dots4.length; a++) {
    dots4[a].className = dots4[a].className.replace("active", " ");
  }
  slides9[index9 - 1].style.display = "block";
  dots4[index9 - 1].className += "active";
  setTimeout(show9, 3000);
}
let index10 = 0;
show10();

function show10() {
  let a;
  const slides10 = document.getElementsByClassName("slides10");
  const dots10 = document.getElementsByClassName("dots10");
  for (a = 0; a < slides10.length; a++) {
    slides10[a].style.display = `none`;
  }
  index10++;
  if (index10 > slides10.length) {
    index10 = 1;
  }

  for (a = 0; a < dots10.length; a++) {
    dots10[a].className = dots10[a].className.replace("active", " ");
  }
  slides10[index10 - 1].style.display = "block";
  dots10[index10 - 1].className += "active";
  setTimeout(show10, 3000);
}
let index11 = 0;
show11();

function show11() {
  let a;
  const slides11 = document.getElementsByClassName("slides11");
  const dots11 = document.getElementsByClassName("dots11");
  for (a = 0; a < slides11.length; a++) {
    slides11[a].style.display = `none`;
  }
  index11++;
  if (index11 > slides11.length) {
    index11 = 1;
  }

  for (a = 0; a < dots11.length; a++) {
    dots11[a].className = dots11[a].className.replace("active", " ");
  }
  slides11[index11 - 1].style.display = "block";
  dots11[index11 - 1].className += "active";
  setTimeout(show11, 3000);
}
let index12 = 0;
show12();

function show12() {
  let a;
  const slides12 = document.getElementsByClassName("slides12");
  const dots12 = document.getElementsByClassName("dots12");
  for (a = 0; a < slides12.length; a++) {
    slides12[a].style.display = `none`;
  }
  index12++;
  if (index12 > slides12.length) {
    index12 = 1;
  }

  for (a = 0; a < dots12.length; a++) {
    dots12[a].className = dots12[a].className.replace("active", " ");
  }
  slides12[index12 - 1].style.display = "block";
  dots12[index12 - 1].className += "active";
  setTimeout(show12, 3000);
}

const menu = document.querySelector(`.menu input`);
const nav = document.querySelector(`nav ul`);
const navv = document.querySelector(`nav ul li a `);
menu.addEventListener(`click`, function () {
  nav.classList.toggle(`slide`);
});

navv.addEventListener(`click`, function () {
  nav.classList.toggle(`slide`);
});
