import '../styles/main.scss'
import Inputmask from 'inputmask'

if (process.env.NODE_ENV !== 'production') {
  require('../index.pug')
};
Inputmask('99.99.9999').mask(document.querySelector('.input-masked-date'))
