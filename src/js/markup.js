const render = [
<div class="photo-card">
  <a class="gallery__link" href="${largeImageURL}"></a>
  <img src="${webformatURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments : {comments} </b>
    </p>
    <p class="info-item">
      <b>Downloads : {downloads}</b>
    </p>
  </div>
</div>
]



