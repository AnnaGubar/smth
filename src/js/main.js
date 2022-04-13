import { debounce } from 'debounce';
import moviesListCard from '../templates/movies-list.hbs';

const searchRef = document.querySelector('.search');
const mainContentRef = document.querySelector('#main-content');

const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const API_KEY = '387a2500e741e87c896db50117c25d75';
let page = 1;

searchRef.addEventListener('input', debounce(inputHandler, 300));

function inputHandler(e) {
  e.preventDefault();

  console.log(e.target.value);
  let inputValue = e.target.value;

  fetch(`${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}&query=${inputValue}`)
    .then(res => res.json())
    .then(({ results }) => {
      // console.log(results);
      console.log(results.length);
      
      mainContentRef.innerHTML = moviesListCard(results);
    })
    .catch(error => console.log(error));
}
