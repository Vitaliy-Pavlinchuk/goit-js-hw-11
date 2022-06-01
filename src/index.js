import './css/styles.css';
// import './js/main';

// ////////////////////////////////////////////////////////////////////

import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.getElementById('search-form');
const btn = document.querySelector('[type="submit"]');
const gallery = document.querySelector('.gallery');
const editField = document.querySelector('[name="searchQuery"]');




form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
  // const onTarget = event.currentTarget.elements.searchQuery.value;
  // fetchData(onTarget);
    
}


btn.addEventListener("click", onClick)

function onClick() {
  const onTarget = editField.value
  fetchData(onTarget);
}


const BASE_URL = 'https://pixabay.com/api/';
const KEY = '27623778-664923446bcdf23e9be6810f4';


const params = {
  key: '27623778-664923446bcdf23e9be6810f4',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 40,
  page: 1,
};
 


async function fetchData   (searchText) {
  const url = `${BASE_URL}?key=${KEY}&q=${searchText}&image_type=${params.image_type}&orientation=horizontal&safesearch=tru&per_page=${params.per_page}&page=${params.page}`
    console.log(url);
  await axios({
    method: 'get',
    url: url,
    responseType: 'json',
  }).then(function (response) {
    displayGallery(response.data.hits);
  });
}

function displayGallery(arr) {
  
  let imageArr = [];
  for (let i = 0; i < arr.length; i++) {
    let imageInfo = {};
    imageInfo.previewURL = arr[i].previewURL;
    imageInfo.tags = arr[i].tags;
    imageInfo.likes = arr[i].likes;
    imageInfo.views = arr[i].views;
    imageInfo.comments = arr[i].comments;
    imageInfo.downloads = arr[i].downloads;
    imageInfo.largeImageURL = arr[i].largeImageURL;
    imageArr[i] = imageInfo;
  }
  console.log(imageArr);

  const elements = imageArr.map(
    ({ previewURL, tags, likes, views, comments, downloads, largeImageURL }) => {
      return `<div class="photo-card">
         <a class = "gallery__item" href = "${largeImageURL}">
         <img class = "gallery__image" src="${previewURL}" alt="${tags}">
         </a>
       
    <div class="info">
      <p class="info-item">
        <b>Likes ${likes}</b>
      </p>
      <p class="info-item">
        <b>Views ${views}</b>
      </p>
      <p class="info-item">
        <b>Comments ${comments}</b>
      </p>
      <p class="info-item">
        <b>Downloads ${downloads}</b>
      </p>
    </div>
  </div>`;
    },
  );

  gallery.insertAdjacentHTML('afterbegin', elements.join(''))
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: `alt`,
  captionDelay: 250,
});


// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: `alt`,
//   captionDelay: 250,
// });




// gallery.addEventListener('click', onClickGallery);


// function onClickGallery(event) {
//   const isGalleryImageEl = event.target.classList.contains("gallery__image");
//   if (!isGalleryImageEl) {
//     return;
//   }
//     event.preventDefault();
    

//   const instance = lightbox.create(
    
//     `
//     <img src="${event.target.dataset.source}">
//     `,
//     {
//       onShow: instance => {
//          console.log('2');
//         const listener = function (event) {
//           if (event.key === 'Escape') {
//             document.removeEventListener('keydown', listener);
//             return instance.close();
//           }
//         };
//         document.addEventListener('keydown', listener);
//       },
//     },
//   );

//   instance.show();
// }

















