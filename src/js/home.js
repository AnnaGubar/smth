// toggle кнопок

const headerLinksRef = document.querySelectorAll('.header-link');

for (let headerLink of headerLinksRef) {
  headerLink.addEventListener('click', function () {
    headerLinksRef.forEach(link => link.classList.remove('current-page'));

    this.classList.toggle('current-page');
  });
}

// смена формы на кнопки просмотров

const myLibraryBtnRef = document.querySelector('.header-link-my-library');
const homeBtnRef = document.querySelector('.header-link-home');
const searchFormRef = document.querySelector('.search-form');
const headerBtnsRef = document.querySelector('.header-buttons');

myLibraryBtnRef.addEventListener('click', onMyLibraryBtnClick);
homeBtnRef.addEventListener('click', onHomeBtnClick);

function onMyLibraryBtnClick(e) {
  if (e.currentTarget.classList.contains('current-page')) {
    searchFormRef.style.display = 'none';
    headerBtnsRef.style.display = 'block';
  }
}

function onHomeBtnClick(e) {
  if (e.currentTarget.classList.contains('current-page')) {
    searchFormRef.style.display = 'block';
    headerBtnsRef.style.display = 'none';
  }
}
