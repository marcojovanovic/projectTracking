let hamburger = document.querySelector('.hamburger')
let close = document.querySelector('#close')
let navList = document.querySelector('.nav-list')


//navList.classList.add('hide')

hamburger.addEventListener('click',()=>{


  navList.classList.toggle('show')
  hamburger.classList.add('hide')
  close.classList.remove('hide')
  close.classList.add('show')
})


close.addEventListener('click',()=>{


  hamburger.classList.remove('hide')
  hamburger.classList.add('show')
  close.classList.add('hide')
  navList.classList.toggle('show')

})

