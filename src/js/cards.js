import data from '../menu.json';
import tplEl from '../template.hbs';

const tplAction = tplEl(data);

const listEl = document.querySelector('.js-menu');

listEl.insertAdjacentHTML('afterbegin', tplAction);