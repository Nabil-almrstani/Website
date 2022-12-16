window.addEventListener("scroll", ()=>{
  let header = document.getElementsByClassName("nav")[0]
    header.classList.toggle('sticky', window.scrollY >= 10)
})
