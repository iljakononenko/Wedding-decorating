$(document).ready(function () {
  for (let i = 0; i < 30; i++) {
    $(`.gallery-col-${(i % 3) + 1}`).append(`
        <div class="gallery-item">
            <img class="img-wrapper" src="./img/gallery/${i + 1}.png" />
        </div>
    `);
  }
});
