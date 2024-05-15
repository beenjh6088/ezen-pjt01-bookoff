function fetchData() {
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
    // let arr = bookarr.map(function(book) {
    //   if(book.depth02 == depth02){
    //     return book;
    //   }
    // }).filter(book => {
    //   if(book != undefined) return book;
    // })
    let arr_depth02 = bookarr.map(function(book) {
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
    console.log(arr_depth03)
    console.log(obj_depth03)


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



