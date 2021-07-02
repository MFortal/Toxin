import '../styles/main.scss'
import Inputmask from 'inputmask'

// _input-masked
if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
};
Inputmask('99.99.9999').mask(document.querySelector('.input-masked-date'))

// dropdown-menu
const dropdownMenu = function () {
  let dropdownSelected = document.querySelectorAll('.dropdown-menu__selectedItem')
  dropdownSelected.forEach(drop => {
    drop.addEventListener('click', function () {
      let droplist = drop.nextSibling
      droplist.classList.toggle('show')
      drop.classList.toggle('dropdown-menu__selectedItem_open')
    })
  })
}
dropdownMenu()

// dropdown-menu counter
const counter = function () {
  const btns = document.querySelectorAll('.dropdown-menu__counter-btn')
  btns.forEach(btn => {
    btn.addEventListener('click', function () {
      const direction = this.dataset.direction
      const inp = this.parentElement.querySelector('.dropdown-menu__count')
      const btnMinus = this.parentElement.querySelector('.dropdown-menu__buttonMinus')
      const currentValue = +inp.textContent
      let newValue
      if (direction === 'plus') {
        newValue = currentValue + 1
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0
      }
      inp.textContent = newValue
      if (newValue === 0) {
        btnMinus.classList.add('opacity_minus')
      } else btnMinus.classList.remove('opacity_minus')
    })
  })
}
counter()

// checkbox-list
let checkboxLists = document.querySelectorAll('.checkbox-list__description')

function addShowCheck () {
  let checkboxArrow = this.querySelector('.checkbox-list__arrow')
  let checkboxList = this.nextElementSibling
  checkboxList.classList.toggle('list_show')
  checkboxArrow.classList.toggle('arrow_rotate')
};

checkboxLists.forEach(list => list.addEventListener('click', addShowCheck))

// checkbox-list items
const toggleMark = function () {
  const checkboxes = document.querySelectorAll('.checkbox-item__itemCheck')
  checkboxes.forEach(box => {
    box.addEventListener('click', function () {
      const inp = this.previousSibling
      if (box.checked) {
        inp.classList.add('checkbox-item__mark_checked')
      } else inp.classList.remove('checkbox-item__mark_checked')
    })
  })
}
toggleMark()

// like-button__button
const likeButton = function () {
  const likeButtons = document.querySelectorAll('.like-button__button')
  likeButtons.forEach(button => {
    button.addEventListener('click', function () {
      button.classList.toggle('like-button__button_active')
      if (button.classList.contains('like-button__button_active'))
        button.textContent = +button.textContent + 1
      else button.textContent = +button.textContent - 1
    })
  })
}
likeButton()
