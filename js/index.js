window.onload = function () {
  const footer = document.querySelectorAll('#footer-guide>div')
  const section = document.querySelectorAll('.content>div')
  let footer_router
  console.log(section.length)
  function sectionChange(index) {
    for(let i=0;i<section.length;i++) {
      section[i].className = ''
    }
    section[index].className = 'on'
  }

  for(let i=0; i<footer.length;i++){
    footer[i].onclick = function () {
      for(let j=0; j<footer.length;j++){
        footer[j].className = ''
      }
      this.className = 'on'
      sectionChange(i)
    }
  }



}
