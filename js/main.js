const submenus = document.querySelectorAll("#weeklyRank .submenu");
submenus.forEach((el, index) => {
  el.addEventListener("click", function() {
    // console.log(`#weeklyRank .sub0${index+1}`);
    submenus.forEach((i) => i.classList.remove("active"));
    submenus[index].classList.add("active");
    makeSlider(`#weeklyRank .sub0${index+1}`);
  })
})
