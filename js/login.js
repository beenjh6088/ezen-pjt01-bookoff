function checkAuth() {
  console.log('checkauth');
  console.log(userarr);
  let res_email = false;
  let res_password = false;

  let inp_email = document.querySelector(".area-email .email").value;
  let inp_password = document.querySelector(".area-password .password").value;
  // console.log(inp_email);
  // console.log(inp_password);

  for(let i = 0; i < userarr.length; i++) {
    if(inp_email == userarr[i].email) res_email = true;
    if(inp_password == userarr[i].password) res_password = true;
  }
  // console.log(res_email && res_password)
  let ulIcons = document.querySelector("#header .icons");
  console.log(ulIcons)
  ulIcons.classList.add("login")
  if(res_email && res_password) {
    localStorage.setItem("isLogin", true);
    if(document.referrer) {
      location.href = document.referrer;
    }
  }
  // return res_email && res_password;
}


