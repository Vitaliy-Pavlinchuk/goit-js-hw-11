export const content = () => {
`<div class="photo-card">
  <img src="" alt="" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
    </p>
    <p class="info-item">
      <b>Views</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
    </p>
  </div>
</div>`;
}


const elements = images.map(({ url, alt }) => {
  return `<img class="image" src="${url}" alt="${alt}"> </li>`;
});

gallery.insertAdjacentHTML('afterbegin', elements.join(''));