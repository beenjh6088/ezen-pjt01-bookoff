window.onload = function() {
  const headerLogoBtn = document.getElementById("headerLogoBtn");
  const logoBtnMenu = document.getElementById("logoBtnMenu");
  let sts_headerLogoBtn;

  headerLogoBtn.addEventListener("click", function() {
    sts_headerLogoBtn = headerLogoBtn.className;
    if(sts_headerLogoBtn == "up") {
      headerLogoBtn.classList.remove("up");
      headerLogoBtn.classList.add("down");
      logoBtnMenu.style.display = "block";
    }else if(sts_headerLogoBtn == "down") {
      headerLogoBtn.classList.remove("down");
      headerLogoBtn.classList.add("up");
      logoBtnMenu.style.display = "none";
    }
  });
  
}