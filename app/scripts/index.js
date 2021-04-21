import '../styles/main.scss'
import Inputmask from 'inputmask'

// _input-masked
if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
};
Inputmask('99.99.9999').mask(document.querySelector('.input-masked-date'))

// dropdown-menu
let dropdownSelected = document.querySelector('.dropdown-menu__selectedItem')
let dropdownList = document.querySelector('.dropdown-menu__list')

function addShow () {
  dropdownList.classList.toggle('show')
};

dropdownSelected.addEventListener('click', addShow)

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
let checkboxListDescription = document.querySelector('.checkbox-list__description')
let checkboxList = document.querySelector('.checkbox-list__list')
let checkboxArrow = document.querySelector('.checkbox-list__arrow')

function addShowCheck () {
  checkboxList.classList.toggle('list_show')
  checkboxArrow.classList.toggle('arrow_rotate')
};

checkboxListDescription.addEventListener('click', addShowCheck)

// checkbox-list items
const toggleMark = function () {
  const checkboxes = document.querySelectorAll('.checkbox-list__itemCheck')
  checkboxes.forEach(box => {
    box.addEventListener('click', function () {
      const inp = this.parentElement.querySelector('.checkbox-list__mark')
      if (box.checked) {
        inp.classList.add('checkbox-list__mark_checked')
      } else inp.classList.remove('checkbox-list__mark_checked')
    })
  })
}
toggleMark()
