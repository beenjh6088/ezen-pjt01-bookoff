function fetchFilter() {
  // console.log("depth02.js");
  // console.log(`books : ${bookarr.length}`);console.log(`users : ${userarr.length}`);
  // console.log(bookarr);
  // console.log(`depth01: ${depth01}, depth02: ${depth02}, depth03 : ${depth03}`)
  const category = document.querySelector("#filter .category");
  if(category != null) {
    amt_all = bookarr.reduce(function(pre,cur,index) {
      return index+1;
    });
    amt_depth01 = bookarr.reduce(function(pre, cur, index) {
      if(cur.depth01 == depth01) {pre ++;}
      return pre;
    }, 0);
    amt_depth02 = bookarr.reduce(function(pre, cur, index) {
      // console.log(`${cur.depth02}\t\t${depth02}`)
      if(cur.depth02 == depth02) {pre ++;}
      return pre;
    }, 0);
    amt_depth03 = bookarr.reduce(function(pre, cur, index) {
      if(cur.depth03 == depth03) {pre ++;}
      return pre;
    }, 0);
    // console.log(`amt_all: ${amt_all}`);
    // console.log(`amt_depth01: ${amt_depth01}`)
    // console.log(`amt_depth02: ${amt_depth02}`)
    // console.log(`amt_depth03: ${amt_depth03}`)
    let arr_depth02 = bookarr.map(function(book) {
      // console.log(`${book.depth02}\t\t${depth02}`)
      if(book.depth02 == depth02){
        return book;
      }
    }).filter((book, index)=> {
      if(book != undefined) return book
    });
    let arr_depth03 = [];
    for(let i = 0; i < arr_depth02.length; i++){
      if(arr_depth03.includes(arr_depth02[i].depth03)) {
        arr_depth03;
      }else {
        arr_depth03.push(arr_depth02[i].depth03);
      }
    }
    let cnt_depth03 = arr_depth03.length;
    let obj_depth03 = [cnt_depth03];
    for(let i = 0; i < arr_depth03.length; i++) {
      obj_depth03[i] = {};
      // obj_depth03[i][''+arr_depth03[i]] = 0;
    }
    for(let i = 0; i <arr_depth03.length; i++) {
      let cnt = 0;
      for(let j = 0; j < arr_depth02.length; j++) {
        if(arr_depth03[i] === arr_depth02[j].depth03) {
          cnt++;
        }
      }
      // console.log(`${arr_depth03[i]}\t\t${cnt}`)
      obj_depth03[i][''+arr_depth03[i]] = cnt;
    }
    // console.log('depth02')
    // console.log(depth02)
    // console.log('arr_depth02')
    // console.log(arr_depth02)
    // console.log('arr_depth03')
    // console.log(arr_depth03)
    // console.log('obj_depth03')
    // console.log(obj_depth03)


    const categoryList = category.querySelectorAll("li.depth");
    const cateFormat = "<a href='#'>?</a>"
    categoryList.forEach(function(li, idx) {
      if(li.className.includes("all")) {
        li.innerHTML = cateFormat.replace("?", `All <span>(${new Intl.NumberFormat().format(amt_all)})</span>`);
      }else if(li.className.includes("depth01")) {
        li.innerHTML = cateFormat.replace("?", `${depth01} <span>(${new Intl.NumberFormat().format(amt_depth01)})</span>`).replace("#", `${url}/html/page/depth01.html?depth01=${depth01}`);
      }else if(li.className.includes("depth02")) {
        li.innerHTML = cateFormat.replaceAll("?", `${depth02} <span>(${new Intl.NumberFormat().format(amt_depth02)})</span>`);
      }else if(li.className.includes("depth03")) {
        // li.innerHTML = cateFormat.replace("?", `${depth03} <span>(${new Intl.NumberFormat().format(amt_depth03)})</span>`);

        for(let i = 0; i < obj_depth03.length; i++) {
          // console.log(obj_depth03[i])
          let lDepth03 = document.createElement("li");
          lDepth03.classList.add("depth");
          lDepth03.classList.add("depth03");
          arr_depth03[i] == depth03 ? lDepth03.classList.add("active") : null;
          lDepth03.innerHTML = `<a href='${url}/html/page/depth02.html?depth01=${depth01}&depth02=${depth02}&depth03=${arr_depth03[i]}'>${arr_depth03[i]}<span>(${new Intl.NumberFormat().format(obj_depth03[i][''+arr_depth03[i]])})</span></a>`
          li.parentElement.appendChild(lDepth03);
        }
      }
      // console.log(li.className)
    });
  }
}



function fetchList() {
  const location = document.querySelector("#list .location");
  location.innerHTML = `<p>${depth01} > ${depth02} > ${depth03}</p>`

  // console.log(depth01);
  // console.log(depth02);
  // console.log(depth03);
  // console.log(bookarr);
  // filter books a user select
  let curlist = bookarr.map((book) => {
    if(book.depth01 === depth01 && book.depth02 === depth02 && book.depth03 === depth03) {
      return book;
    }
  }).filter(function(book) {
    if(book != undefined) return book;
  });

  // init displayicons
  let displaymode = localStorage.getItem("displaymode");
  let dpo_icons = document.querySelectorAll("#list .disposition .icon");
  dpo_icons.forEach((icon) => {
    if(icon.classList.contains(displaymode)) {
      let siblings = icon.parentElement.children;
      for(let sib of siblings) {
        sib.classList.remove("active");
      }
      icon.classList.add("active");
    }
  })

  // init displaymode
  let itemlist = document.querySelector("#list .container-itemlist");
  itemlist.classList.add(displaymode);

  // init quantity to show
  let show_qnt_select = document.querySelector("#list .qnt_show");
  let show_qntList = show_qnt_select.options;
  let show_qnt = localStorage.getItem("show_qnt");
  // console.log(`show_qnt`);
  // console.log(show_qnt);
  for(let qnt of show_qntList) {
    if(qnt.value == show_qnt) show_qntList.selectedIndex = qnt.index;
  }
  // make quantity of show as much as you pick
  // let lDepth03 = document.createElement("li");
  // lDepth03.classList.add("depth");
  // lDepth03.classList.add("depth03");
  // arr_depth03[i] == depth03 ? lDepth03.classList.add("active") : null;
  // lDepth03.innerHTML = `<a href='${url}/html/page/depth02.html?depth01=${depth01}&depth02=${depth02}&depth03=${arr_depth03[i]}'>${arr_depth03[i]}<span>(${new Intl.NumberFormat().format(obj_depth03[i][''+arr_depth03[i]])})</span></a>`
  // li.parentElement.appendChild(lDepth03);
  for(let i = 0; i < show_qnt; i++) {
    let li_item = document.createElement("li");
    li_item.classList.add("item");
    li_item.innerText = i+1;
    itemlist.appendChild(li_item);
  }

}

function inspireEvent() {

  // display icon
  let dpo_icons = document.querySelectorAll("#list .disposition .icon");
  dpo_icons.forEach((icon) => {
    icon.addEventListener("click", function() {
      let siblings = this.parentElement.children;
      for(let sib of siblings) {
        sib.classList.remove("active");
      }
      this.classList.add("active");
      
      let itemlist = document.querySelector("#list .container-itemlist");
      if(icon.classList.contains("active")) {
        // console.log(icon.classList)
        if(icon.classList.contains("list")) {
          itemlist.classList.remove("grid");
          localStorage.setItem("displaymode", "list");
          itemlist.classList.add(localStorage.getItem("displaymode"));
        } else if(icon.classList.contains("grid")) {
          itemlist.classList.remove("list");
          localStorage.setItem("displaymode", "grid");
          itemlist.classList.add(localStorage.getItem("displaymode"));
        }
      }

    })
  });

  // quantity
  let show_qnt_select = document.querySelector("#list .qnt_show");
  let show_qntList = show_qnt_select.options;
  show_qnt_select.addEventListener("change", function() {
    let show_qnt = show_qntList[show_qnt_select.selectedIndex].value;
    localStorage.setItem("show_qnt", show_qnt);
    // console.log(show_qnt)
    let itemlist = document.querySelector("#list .container-itemlist");
    itemlist.innerHTML = "";
    for(let i = 0; i < show_qnt; i++) {
      let li_item = document.createElement("li");
      li_item.classList.add("item");
      li_item.innerText = i+1;
      itemlist.appendChild(li_item);
    }
  })


}