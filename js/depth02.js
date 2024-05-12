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
      if(cur.depth02 == depth02) {pre ++;}
      return pre;
    }, 0);
    amt_depth03 = bookarr.reduce(function(pre, cur, index) {
      if(cur.depth03 == depth03) {pre ++;}
      return pre;
    }, 0);
    console.log(`amt_all: ${amt_all}`);
    console.log(`amt_depth01: ${amt_depth01}`)
    console.log(`amt_depth02: ${amt_depth02}`)
    console.log(`amt_depth03: ${amt_depth03}`)
    // const price = 14340;
    // console.log(new Intl.NumberFormat('en-Us', {style:'currency',currency:'USD'}).format(price));

    const categoryList = category.querySelectorAll("li.depth");
    const cateFormat = "<a href='#'>?</a>"
    categoryList.forEach(function(li, idx) {
      if(li.className.includes("all")) {
        li.innerHTML = cateFormat.replace("?", `All (${new Intl.NumberFormat().format(amt_all)})`);
      }else if(li.className.includes("depth01")) {
        li.innerHTML = cateFormat.replace("?", `${depth01} (${new Intl.NumberFormat().format(amt_depth01)})`);
      }else if(li.className.includes("depth02")) {
        li.innerHTML = cateFormat.replace("?", `${depth02} (${new Intl.NumberFormat().format(amt_depth02)})`);
      }else if(li.className.includes("depth03")) {
        li.innerHTML = cateFormat.replace("?", `${depth03} (${new Intl.NumberFormat().format(amt_depth03)})`);
      }
      // console.log(li.className)
    });
  }


}
