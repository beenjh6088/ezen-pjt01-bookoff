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
    console.log(`amt_all: ${amt_all}`);
    console.log(`amt_depth01: ${amt_depth01}`)
    console.log(`amt_depth02: ${amt_depth02}`)
    console.log(`amt_depth03: ${amt_depth03}`)

    let arr = [];
    arr.push(1);
    console.log(`arr`)
    console.log(arr)
    // sbl_depth03 = bookarr.reduce((acc, cur) => {
    //   console.log(`${depth02} \t\t ${cur.depth02}\t\t${cur.depth03}`)
    //   if(depth02 == cur.depth02) {
    //     acc.push(cur.depth03);
    //     return acc;
    //     // return acc.push(cur.depth03);
    //   }
    // }, []);

    console.log('slb')
    console.log(sbl_depth03)
    // const price = 14340;
    // console.log(new Intl.NumberFormat('en-Us', {style:'currency',currency:'USD'}).format(price));

    const categoryList = category.querySelectorAll("li.depth");
    const cateFormat = "<a href='#'>?</a>"
    categoryList.forEach(function(li, idx) {
      if(li.className.includes("all")) {
        li.innerHTML = cateFormat.replace("?", `All <span>(${new Intl.NumberFormat().format(amt_all)})</span>`);
      }else if(li.className.includes("depth01")) {
        li.innerHTML = cateFormat.replace("?", `${depth01} <span>(${new Intl.NumberFormat().format(amt_depth01)})</span>`);
      }else if(li.className.includes("depth02")) {
        li.innerHTML = cateFormat.replaceAll("?", `${depth02} <span>(${new Intl.NumberFormat().format(amt_depth02)})</span>`);
      }else if(li.className.includes("depth03")) {
        
        li.innerHTML = cateFormat.replace("?", `${depth03} <span>(${new Intl.NumberFormat().format(amt_depth03)})</span>`);
      }
      // console.log(li.className)
    });
  }


}
