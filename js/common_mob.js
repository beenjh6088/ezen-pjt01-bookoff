function showPopup() {
  const burgershot = document.querySelector(".burgershot");
  const popup = document.querySelector(".popup");
  const container_popup = document.querySelector(".popup .container_popup");
  // console.log(`burgershot`);
  // console.log(burgershot);
  burgershot.addEventListener("click", function() {
    popup.classList.add("active");
  })
  document.addEventListener("mouseup", function(e) {
    if(!(e.target.closest(".container_popup"))) popup.classList.remove("active");
  })
}