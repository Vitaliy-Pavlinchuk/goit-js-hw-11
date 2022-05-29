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
 

function displayGallery (arr) {
  
  for (let i = 0; i < arr.length; i++) {
    let previewURL = arr[i].previewURL
    let tags = arr[i].tags;
    let likes = arr[i].likes;
    let views = arr[i].views;
    let comments = arr[i].comments;
    let downloads = arr[i].downloads;
    
    const elements =
      `<div class="photo-card">  

    <img src="${previewURL}" alt="${tags}" loading="lazy" />
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
    ;

    gallery.insertAdjacentHTML('afterbegin', elements);
    
  }
} 


axios({
  method: 'get',
  url: `${BASE_URL}?key=${KEY}&q=beer&image_type=${params.image_type}&orientation=horizontal&safesearch=tru&per_page=${params.per_page}&page=${params.page}`,
  responseType: 'json',
}).then(function (response) {
displayGallery(response.data.hits);
});


  
  

  






// // const img = response.data.hits[0].largeImageURL;
// const img = document.querySelector('.foto')
// const url ='https://pixabay.com/get/g84386367c33cc4579d94255ecfdcaef7c6849319f5de68eed5ab3954c676253d1e87cd0584fd1bc7d1793666871c387f69f89f265e45e77751846b61da5db85a_1280.jpg';
// const lagrUrl =
//   'https://pixabay.com/get/g0a34c7cd4016a82fec42bee8a8f66a226df55b72ac86903684bbb9d3934049cb71f0016e82b95e9ca44c2ad90df2d5c165cfb8e4971d480aa46304103ff6e3a5_1280.jpg';


// const images = [
//   {
//     largeImageURL: lagrUrl,
//     webformatURL: url,
//     tags: 'White and Black Long Fur Cat',
//     likes: 144,
//     views: 50,
//     comments: 51,
//     downloads: 86383,
//   },
// ];
// const element = images.map(({ previewURL, tags, likes, views, comments, downloads }) => {
//   console.log("hi");
// })


// const elements = images.map(({ previewURL , tags, likes, views, comments, downloads }) => {
//   return `<div class="photo-card">

//   <img src="${previewURL}" alt="${tags}" loading="lazy" />
//   <div class="info">
//     <p class="info-item">
//       <b>Likes ${likes}</b>
//     </p>
//     <p class="info-item">
//       <b>Views ${views}</b>
//     </p>
//     <p class="info-item">
//       <b>Comments ${comments}</b>
//     </p>
//     <p class="info-item">
//       <b>Downloads ${downloads}</b>
//     </p>
//   </div>
// </div>`;
// });


// gallery.insertAdjacentHTML('afterbegin', elements.join(''))




form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    const onTarget = event.currentTarget.elements.searchQuery.value;
    console.log(onTarget);
}

