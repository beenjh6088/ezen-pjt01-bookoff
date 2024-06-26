
const duration = 3000;
const url = `${window.location.protocol+"//"+window.location.host+"/"}`;
let userinfo = {};
let header = null;
// let isLogin = Boolean(localStorage.getItem("isLogin"));
let links = [];
let mainMenus = null;
let bookarr = [];
let userarr = [];
let depth01 = null;
let depth02 = null;
let depth03 = null;
let bookdic = [];
let set_depth01 = null;
let set_depth02 = null;
let set_depth03 = null;
let sbl_depth02 = null;
let sbl_depth03 = null;
let amt_all = 0;
let amt_depth01 = 0;
let amt_depth02 = 0;
let amt_depth03 = 0;


function init() {
  // setAside();
  includeHtml();
  setData();
  fnHeader();
  setAbsLink();
  login();
  setCurrency();
}

function setData() {
  bookarr = JSON.parse(JSON.stringify(BookObj)).books;
  userarr = JSON.parse(JSON.stringify(UserObj)).users;
  // console.log(`setdata`)
  // console.log(userarr)
  // localStorage.setItem("bookarr", bookarr);
  // localStorage.setItem("userarr", userarr);
}

function fnHeader() {
  mainMenus = document.querySelectorAll(".mainMenu > li");
  header = document.querySelector("#header");
  
  // make box shadow in header
  window.addEventListener("scroll", function() {
    let headertop = header.querySelector(".top");
    if(this.window.scrollY >= 32) {
      headertop.style.boxShadow = "0 1px 4px rgba(0,0,0,0.6)";
    }
    if(this.window.scrollY == 0) {
      headertop.style.boxShadow = "";
    }
  });
  
  let ulIcons = document.querySelector("#header .icons");
  console.log("fnHeader isLogin")
  let isLogin = localStorage.getItem("isLogin");
  console.log(isLogin)
  if(isLogin == 'true' ){
    console.log("fnHeader login true")
    ulIcons.classList.add("login")
  }else if(isLogin=='false') {
    console.log("fnHeader login true")
    ulIcons.classList.remove("login")

  }
  
}

function includeHtml() {
  const includeTarget = document.querySelectorAll('.includeJs');
  includeTarget.forEach(function(el, idx) {
    const targetFile = el.dataset.includeFile;
    // console.log(targetFile)
    if(targetFile){
      let xhttp = new XMLHttpRequest();

      xhttp.onreadystatechange = function() {
        if (this.readyState === XMLHttpRequest.DONE) {
          this.status === 200 ? (el.innerHTML = this.responseText) : null
          this.status === 404 ? (el.innerHTML = 'include not found.') : null
        }
      }
      // xhttp.open('GET', targetFile, true);
      // asynchronism = false
      // xhttp.open('GET', targetFile, false);
      xhttp.open('GET', url+targetFile, false);
      xhttp.send();
      return;
    }
  });
};


function setAbsLink() {
  links = document.querySelectorAll(".link");
  links.forEach(function(link, idx) {
    let val = link.getAttribute("value");
    let addr = url+val;
    link.setAttribute("href", addr);
  }); 
}


// function setAside() {
//   let search = window.location.search;
//   let key = search.substring(search.indexOf("=")+1)
//   const navi = document.querySelector("main .wrapper #navi");
//   const cont = document.querySelector("main .wrapper #contents")
//   console.log(`search : ${search}`)
//   console.log(`key : ${key}`)
//   console.log(cont)
//   if (search.includes("books")) {
//     navi.setAttribute("data-include-file", `${url}/html/nav/nav-01-${key}.html`);
//     cont.setAttribute("data-include-file", `${url}/html/contents/cont-01-${key}.html`);
//   }else if (search.includes("comics")) {
//     navi.setAttribute("data-include-file", `${url}/html/nav/nav-02-${key}.html`);
//     cont.setAttribute("data-include-file", `${url}/html/contents/cont-02-${key}.html`);
//   }else if (search.includes("cd")) {
//     navi.setAttribute("data-include-file", `${url}/html/nav/nav-03-${key}.html`);
//     cont.setAttribute("data-include-file", `${url}/html/contents/cont-03-${key}.html`);
//   }else if (search.includes("dvdBluray")) {
//     navi.setAttribute("data-include-file", `${url}/html/nav/nav-04-${key}.html`);
//     cont.setAttribute("data-include-file", `${url}/html/contents/cont-04-${key}.html`);
//   }else if (search.includes("game")) {
//     navi.setAttribute("data-include-file", `${url}/html/nav/nav-05-${key}.html`);
//     cont.setAttribute("data-include-file", `${url}/html/contents/cont-05-${key}.html`);
//   }else if (search.includes("setBulk")) {
//     navi.setAttribute("data-include-file", `${url}/html/nav/nav-06-${key}.html`);
//     cont.setAttribute("data-include-file", `${url}/html/contents/cont-06-${key}.html`);
//   }
//   // console.log(window.location.url)
// }


function setAside() {
  setData();
  let search = (window.location.search)
  let queryArr = search.split("?")[1].split("&");
  depth01 = (queryArr[0] != undefined && queryArr[0] != null) ? queryArr[0].substring(queryArr[0].indexOf("=")+1).replaceAll("%20", " ").replaceAll("%27", "'") : null;
  depth02 = (queryArr[1] != undefined && queryArr[1] != null) ? queryArr[1].substring(queryArr[1].indexOf("=")+1).replaceAll("%20", " ").replaceAll("%27", "'") : null;
  depth03 = (queryArr[2] != undefined && queryArr[2] != null) ? queryArr[2].substring(queryArr[2].indexOf("=")+1).replaceAll("%20", " ").replaceAll("%27", "'") : null;
  if(depth01 != null && (depth02 == null || depth03 == null)) {
    const navi = document.querySelector("main .wrapper #navi");
    const cont = document.querySelector("main .wrapper #contents");
    if(navi == null || cont == null) return;
    if (depth01.includes("books")) {
      // navi.setAttribute("data-include-file", `${url}/html/nav/nav-01-${depth01}.html`);
      // cont.setAttribute("data-include-file", `${url}/html/contents/cont-01-${depth01}.html`);
      navi.setAttribute("data-include-file", `html/nav/nav-01-${depth01}.html`);
      cont.setAttribute("data-include-file", `html/contents/cont-01-${depth01}.html`);
    }else if (depth01.includes("comics")) {
      // navi.setAttribute("data-include-file", `${url}/html/nav/nav-02-${depth01}.html`);
      // cont.setAttribute("data-include-file", `${url}/html/contents/cont-02-${depth01}.html`);
      navi.setAttribute("data-include-file", `html/nav/nav-02-${depth01}.html`);
      cont.setAttribute("data-include-file", `html/contents/cont-02-${depth01}.html`);
    }else if (depth01.includes("cd")) {
      // navi.setAttribute("data-include-file", `${url}/html/nav/nav-03-${depth01}.html`);
      // cont.setAttribute("data-include-file", `${url}/html/contents/cont-03-${depth01}.html`);
      navi.setAttribute("data-include-file", `html/nav/nav-03-${depth01}.html`);
      cont.setAttribute("data-include-file", `html/contents/cont-03-${depth01}.html`);
    }else if (depth01.includes("dvdBluray")) {
      // navi.setAttribute("data-include-file", `${url}/html/nav/nav-04-${depth01}.html`);
      // cont.setAttribute("data-include-file", `${url}/html/contents/cont-04-${depth01}.html`);
      navi.setAttribute("data-include-file", `html/nav/nav-04-${depth01}.html`);
      cont.setAttribute("data-include-file", `html/contents/cont-04-${depth01}.html`);
    }else if (depth01.includes("game")) {
      // navi.setAttribute("data-include-file", `${url}/html/nav/nav-05-${depth01}.html`);
      // cont.setAttribute("data-include-file", `${url}/html/contents/cont-05-${depth01}.html`);
      navi.setAttribute("data-include-file", `html/nav/nav-05-${depth01}.html`);
      cont.setAttribute("data-include-file", `html/contents/cont-05-${depth01}.html`);
    }else if (depth01.includes("setBulk")) {
      // navi.setAttribute("data-include-file", `${url}/html/nav/nav-06-${depth01}.html`);
      // cont.setAttribute("data-include-file", `${url}/html/contents/cont-06-${depth01}.html`);
      navi.setAttribute("data-include-file", `html/nav/nav-06-${depth01}.html`);
      cont.setAttribute("data-include-file", `html/contents/cont-06-${depth01}.html`);
    }
  } else {
    const filter = document.querySelector("main .wrapper #filter");
    const list = document.querySelector("main .wrapper #list");

    if(filter == null || list == null) return;

    // console.log(`depth02 ${depth02}`)
    let set_depth01 = bookarr.reduce((acc, cur) => {
      if(acc.includes(cur.depth01)) {
        return acc;
      }else {
        return [...acc, cur.depth01];
      }
    }, []);
    let set_depth02 = bookarr.reduce((acc, cur) => {
      if(acc.includes(cur.depth02)) {
        return acc;
      }else {
        return [...acc, cur.depth02];
      }
    }, []);
    let set_depth03 = bookarr.reduce((acc, cur) => {
      if(acc.includes(cur.depth03)) {
        return acc;
      }else {
        return [...acc, cur.depth03];
      }
    }, []);
    // console.log(set_depth01);
    // console.log(set_depth02);
    // console.log(set_depth03);

    
    filter.setAttribute("data-include-file", `html/filter/filter.html`);
    list.setAttribute("data-include-file", `html/list/list.html`);

  }
  // console.log(window.location.url)
}


function makeSlider(target) {
  // console.log(target)
  
  // 슬라이크 전체 크기(width 구하기)
  const slide = document.querySelector(target+" "+".slide");
  let slideWidth = slide.clientWidth;

  // 버튼 엘리먼트 선택하기
  const prevBtn = document.querySelector(target+" "+".slide_prev_button");
  const nextBtn = document.querySelector(target+" "+".slide_next_button");

  // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
  let slideItems = document.querySelectorAll(target+" "+".slide_item");
  // 현재 슬라이드 위치가 슬라이드 개수를 넘기지 않게 하기 위한 변수
  const maxSlide = slideItems.length;

  // 버튼 클릭할 때 마다 현재 슬라이드가 어디인지 알려주기 위한 변수
  let currSlide = 1;

  // 페이지네이션 생성
  const pagination = document.querySelector(target+" "+".slide_pagination");

  for (let i = 0; i < maxSlide; i++) {
    if (i === 0) pagination.innerHTML += `<li class="active">•</li>`;
    else pagination.innerHTML += `<li>•</li>`;
  }

  const paginationItems = document.querySelectorAll(target+" "+".slide_pagination > li");

  // 무한 슬라이드를 위해 start, end 슬라이드 복사하기
  const startSlide = slideItems[0];
  const endSlide = slideItems[slideItems.length - 1];
  const startElem = document.createElement("div");
  const endElem = document.createElement("div");

  endSlide.classList.forEach((c) => endElem.classList.add(c));
  endElem.innerHTML = endSlide.innerHTML;

  startSlide.classList.forEach((c) => startElem.classList.add(c));
  startElem.innerHTML = startSlide.innerHTML;

  // 각 복제한 엘리먼트 추가하기
  slideItems[0].before(endElem);
  slideItems[slideItems.length - 1].after(startElem);

  // 슬라이드 전체를 선택해 값을 변경해주기 위해 슬라이드 전체 선택하기
  slideItems = document.querySelectorAll(target+" "+".slide_item");
  //
  let offset = slideWidth + currSlide;
  slideItems.forEach((i) => {
    i.setAttribute("style", `left: ${-offset}px`);
  });

  function nextMove() {
    currSlide++;
    // 마지막 슬라이드 이상으로 넘어가지 않게 하기 위해서
    if (currSlide <= maxSlide) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = 0;
      let offset = slideWidth * currSlide;
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide++;
      offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
      // // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    }
  }
  function prevMove() {
    currSlide--;
    // 1번째 슬라이드 이하로 넘어가지 않게 하기 위해서
    if (currSlide > 0) {
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    } else {
      // 무한 슬라이드 기능 - currSlide 값만 변경해줘도 되지만 시각적으로 자연스럽게 하기 위해 아래 코드 작성
      currSlide = maxSlide + 1;
      let offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
      });
      currSlide--;
      offset = slideWidth * currSlide;
      setTimeout(() => {
        // 각 슬라이드 아이템의 left에 offset 적용
        slideItems.forEach((i) => {
          // i.setAttribute("style", `transition: ${0}s; left: ${-offset}px`);
          i.setAttribute("style", `transition: ${0.15}s; left: ${-offset}px`);
        });
      }, 0);
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    }
  }

  // 버튼 엘리먼트에 클릭 이벤트 추가하기
  nextBtn.addEventListener("click", () => {
    // 이후 버튼 누를 경우 현재 슬라이드를 변경
    nextMove();
  });
  // 버튼 엘리먼트에 클릭 이벤트 추가하기
  prevBtn.addEventListener("click", () => {
    // 이전 버튼 누를 경우 현재 슬라이드를 변경
    prevMove();
  });

  // 브라우저 화면이 조정될 때 마다 slideWidth를 변경하기 위해
  window.addEventListener("resize", () => {
    slideWidth = slide.clientWidth;
  });

  // 각 페이지네이션 클릭 시 해당 슬라이드로 이동하기
  for (let i = 0; i < maxSlide; i++) {
    // 각 페이지네이션마다 클릭 이벤트 추가하기
    paginationItems[i].addEventListener("click", () => {
      // 클릭한 페이지네이션에 따라 현재 슬라이드 변경해주기(currSlide는 시작 위치가 1이기 때문에 + 1)
      currSlide = i + 1;
      // 슬라이드를 이동시키기 위한 offset 계산
      const offset = slideWidth * currSlide;
      // 각 슬라이드 아이템의 left에 offset 적용
      slideItems.forEach((i) => {
        i.setAttribute("style", `left: ${-offset}px`);
      });
      // 슬라이드 이동 시 현재 활성화된 pagination 변경
      paginationItems.forEach((i) => i.classList.remove("active"));
      paginationItems[currSlide - 1].classList.add("active");
    });
  }

  // 드래그(스와이프) 이벤트를 위한 변수 초기화
  let startPoint = 0;
  let endPoint = 0;

  // PC 클릭 이벤트 (드래그)
  slide.addEventListener("mousedown", (e) => {
    startPoint = e.pageX; // 마우스 드래그 시작 위치 저장
  });

  slide.addEventListener("mouseup", (e) => {
    endPoint = e.pageX; // 마우스 드래그 끝 위치 저장
    if (startPoint < endPoint) {
      // 마우스가 오른쪽으로 드래그 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 마우스가 왼쪽으로 드래그 된 경우
      nextMove();
    }
  });

  // 모바일 터치 이벤트 (스와이프)
  slide.addEventListener("touchstart", (e) => {
    startPoint = e.touches[0].pageX; // 터치가 시작되는 위치 저장
  });
  slide.addEventListener("touchend", (e) => {
    endPoint = e.changedTouches[0].pageX; // 터치가 끝나는 위치 저장
    if (startPoint < endPoint) {
      // 오른쪽으로 스와이프 된 경우
      prevMove();
    } else if (startPoint > endPoint) {
      // 왼쪽으로 스와이프 된 경우
      nextMove();
    }
  });

  // 기본적으로 슬라이드 루프 시작하기
  let loopInterval = setInterval(() => {
    nextMove();
  }, duration);

  // 슬라이드에 마우스가 올라간 경우 루프 멈추기
  slide.addEventListener("mouseover", () => {
    clearInterval(loopInterval);
  });

  // 슬라이드에서 마우스가 나온 경우 루프 재시작하기
  slide.addEventListener("mouseout", () => {
    loopInterval = setInterval(() => {
      nextMove();
    }, duration);
  });
}

function setDate() {
  let hasyear = false;
  let hasmonth = false;
  let hasdate = false;
  const plus = "+";
  const minus = "-";
  let times = document.querySelectorAll("time.this");
  // console.log(times[0])
  times.forEach((time, idx) => {
    let odt = new Date();
    // odt.setMonth(odt.getMonth()+2)
    let ndt = new Date();
    let oldyear = odt.getFullYear();
    let oldmonth = odt.getMonth();
    let olddate = odt.getDate();
    let strDate = "";
    // time.innerHTML = year+"/"+month+"/"+date;
    let timeclasses = time.classList;
    // console.log(timeclasses);
    for(let i = 0; i < timeclasses.length; i++) {
      if(timeclasses[i].includes("year")) {
        if(timeclasses[i].includes(minus)) {
          let index = timeclasses[i].indexOf(minus);
          let variate = Number.parseInt(timeclasses[i].substring(index+1));
          // year = eval(year-variate);
          oldyear = oldyear - variate;
        } else if(timeclasses[i].includes(plus)) {
          let index = timeclasses[i].indexOf(plus);
          let variate = Number.parseInt(timeclasses[i].substring(index+1));
          // year = eval(year+variate);
          oldyear = oldyear + variate;
        }
        hasyear = true;
        ndt.setFullYear(oldyear);
        // strDate = strDate + ndt.getFullYear();
      } else if(timeclasses[i].includes("month")) {
        if(timeclasses[i].includes(minus)) {
          let index = timeclasses[i].indexOf(minus);
          let variate = Number.parseInt(timeclasses[i].substring(index+1));
          // month = eval(month-variate);
          oldmonth = oldmonth - variate;
        } else if(timeclasses[i].includes(plus)) {
          let index = timeclasses[i].indexOf(plus);
          let variate = Number.parseInt(timeclasses[i].substring(index+1));
          // month = eval(month+variate);
          oldmonth = oldmonth + variate;
        }
        hasmonth = true;
        ndt.setMonth(oldmonth);
        // strDate = strDate + ndt.getMonth()+1;
      } else if(timeclasses[i].includes("date")){
        if(timeclasses[i].includes(minus)) {
          let index = timeclasses[i].indexOf(minus);
          let variate = Number.parseInt(timeclasses[i].substring(index+1));
          // date = eval(date-variate);
          olddate = olddate - variate;
        } else if(timeclasses[i].includes(plus)) {
          let index = timeclasses[i].indexOf(plus);
          let variate = Number.parseInt(timeclasses[i].substring(index+1));
          // date = eval(date+variate);
          olddate = olddate + variate;
        }
        hasdate = true;
        ndt.setDate(olddate);
        // strDate = strDate + ndt.getDate();
      }
    }
    if(hasyear) {
      strDate = ndt.getFullYear();
      hasyear = false;
    }
    if(hasmonth) {
      strDate = ndt.getMonth() + 1;
      if(strDate == 1)        strDate = "January"   + "\t" + ndt.getFullYear();
      else if(strDate == 2)   strDate = "February"  + "\t" + ndt.getFullYear();
      else if(strDate == 3)   strDate = "March"     + "\t" + ndt.getFullYear();
      else if(strDate == 4)   strDate = "April"     + "\t" + ndt.getFullYear();
      else if(strDate == 5)   strDate = "May"       + "\t" + ndt.getFullYear();
      else if(strDate == 6)   strDate = "June"      + "\t" + ndt.getFullYear();
      else if(strDate == 7)   strDate = "July"      + "\t" + ndt.getFullYear();
      else if(strDate == 8)   strDate = "August"    + "\t" + ndt.getFullYear();
      else if(strDate == 9)   strDate = "September" + "\t" + ndt.getFullYear();
      else if(strDate == 10)  strDate = "October"   + "\t" + ndt.getFullYear();
      else if(strDate == 11)  strDate = "November"  + "\t" + ndt.getFullYear();
      else if(strDate == 12)  strDate = "December"  + "\t" + ndt.getFullYear();
      hasmonth = false;
    }
    if(hasdate) {
      strDate = ndt.getMonth() + 1;
      if(strDate == 1)        strDate = ndt.getDate() +" "+"January"   + "\t" + ndt.getFullYear();
      else if(strDate == 2)   strDate = ndt.getDate() +" "+"February"  + "\t" + ndt.getFullYear();
      else if(strDate == 3)   strDate = ndt.getDate() +" "+"March"     + "\t" + ndt.getFullYear();
      else if(strDate == 4)   strDate = ndt.getDate() +" "+"April"     + "\t" + ndt.getFullYear();
      else if(strDate == 5)   strDate = ndt.getDate() +" "+"May"       + "\t" + ndt.getFullYear();
      else if(strDate == 6)   strDate = ndt.getDate() +" "+"June"      + "\t" + ndt.getFullYear();
      else if(strDate == 7)   strDate = ndt.getDate() +" "+"July"      + "\t" + ndt.getFullYear();
      else if(strDate == 8)   strDate = ndt.getDate() +" "+"August"    + "\t" + ndt.getFullYear();
      else if(strDate == 9)   strDate = ndt.getDate() +" "+"September" + "\t" + ndt.getFullYear();
      else if(strDate == 10)  strDate = ndt.getDate() +" "+"October"   + "\t" + ndt.getFullYear();
      else if(strDate == 11)  strDate = ndt.getDate() +" "+"November"  + "\t" + ndt.getFullYear();
      else if(strDate == 12)  strDate = ndt.getDate() +" "+"December"  + "\t" + ndt.getFullYear();
      // strDate = strDate + ndt.getDate();
      hasdate = false;
    }
    time.innerHTML = strDate;
    // console.log(ndt.toDateString());
  });
}

function login() {
  console.log("login")
  // isLogin = localStorage.getItem("isLogin");
  // let isLogin = Boolean(localStorage.getItem("isLogin"));
  // console.log(isLogin)
  // localStorage.setItem("isLogin", isLogin)
  let icons = header.querySelectorAll("#header .icons li");
  // if(isLogin == true) {
  //   icons.forEach(function(li, idx) {
  //     let iconimg = li.querySelector("img");
  //     let imgsrc = iconimg.getAttribute("src");
  //     iconimg.setAttribute("src", imgsrc.replace("off","on"));
  //   })
  // }else {
    // console.log("ff")
    let pop_stranger = document.querySelector("#header .pop_stranger");
    let pop_userinfo = document.querySelector("#header .pop_userinfo");
    let isLogin = localStorage.getItem("isLogin");
    icons.forEach(function(li, idx) {
      li.addEventListener("click", function() {
        // console.log(pop_stranger)
        if(isLogin == "true") {
          pop_userinfo.classList.add("active");
          let offset = -80+(30*idx);
          pop_userinfo.style.transform = `translate(${offset}%, 0)`;
        } else if(isLogin == "false") {
          pop_stranger.classList.add("active");
          let offset = -80+(30*idx);
          pop_stranger.style.transform = `translate(${offset}%, 0)`;
        }
      })
    })
    document.addEventListener("mouseup", function(e) {
      // console.log(e)
      // console.log(e.target)
      // console.log(e.target.closest(".pop_stranger"))
      if(!(e.target.closest(".pop_userinfo"))) pop_userinfo.classList.remove("active");
      if(!(e.target.closest(".pop_stranger"))) pop_stranger.classList.remove("active");
    })
  // }
}


// function login() {
//   // localStorage.setItem("isLogin", isLogin)
//   let pop_stranger = document.querySelector("#header .pop_stranger");
//   let pop_userinfo = document.querySelector("#header .pop_userinfo");

//   let icons = header.querySelectorAll("#header .icons li");
//   icons.forEach(function(li, idx) {
//     li.addEventListener("click", function() {
//       console.log("login")
//       let isLogin = Boolean(localStorage.getItem("isLogin"));
//       console.log(isLogin)
//       if(isLogin == true) {
//         pop_stranger.classList.remove("active");
//         pop_userinfo.classList.add("active");
//         let offset = -80+(30*idx);
//         pop_userinfo.style.transform = `translate(${offset}%, 0)`;
//       }else if(isLogin == false) {
//         pop_userinfo.classList.remove("active");
//         pop_stranger.classList.add("active");
//         let offset = -80+(30*idx);
//         pop_stranger.style.transform = `translate(${offset}%, 0)`;

//       }
//     })
//   });
  
//   document.addEventListener("mouseup", function(e) {
//     let isLogin = localStorage.getItem("isLogin");
//     if(isLogin == true) {
//       if(!(e.target.closest(".pop_userinfo"))) pop_userinfo.classList.remove("active");
//     }
//   })


//   document.addEventListener("mouseup", function(e) {
//     let isLogin = localStorage.getItem("isLogin");
//     if(isLogin == false) {
//       if(!(e.target.closest(".pop_stranger"))) pop_stranger.classList.remove("active");
//     }
//   })
// }



function logout() {
  console.log("logout");
  localStorage.setItem("isLogin", false);
  if(document.referrer) location.href = url;
}

function openPopup(path, title, style) {
  window.open(path, title, style);
}

function setCurrency() {
  var currencyInputs = document.querySelectorAll('input[type="currency"]')
  var currency = 'USD' // https://www.currency-iso.org/dam/downloads/lists/list_one.xml
  
  // bind event listeners
  currencyInputs.forEach((currencyInput)=> {
    currencyInput.addEventListener('blur', onBlur)
    currencyInput.addEventListener('keyup', onkeyup);
  })
  
  
  function onkeyup() {
    let val = this.value;
    this.value = val.replace(/[^0-9.]/g, "").replace(/\.+/g, ".");

  }

  function localStringToNumber( s ){
    return Number(String(s).replace(/[^0-9.,-]+/g,"").replace(/^\./, ""))
  }
  
  function onBlur(e){
    var value = e.target.value
  
    var options = {
        maximumFractionDigits : 2,
        style                 : "currency",
        currency              : currency,
        currencyDisplay       : "symbol"
    }
    e.target.value = (value || value === 0) 
      ? localStringToNumber(value).toLocaleString("en-US", options)
      : ''
  }
}