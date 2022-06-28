import './css/styles.css';
import './fetchCountries';

const DEBOUNCE_DELAY = 300;


const input = document.querySelector('#search-box');
const list = document.querySelector('.country-list');
const div = document.querySelector('.country-info');
