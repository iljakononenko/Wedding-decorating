$(document).ready(function () {
  for (let i = 0; i < 30; i++) {
    $(`.gallery-col-${(i % 3) + 1}`).append(`
        <div class="gallery-item">
            <img class="img-wrapper" data-fancybox="gallery" src="./img/gallery/${
              i + 1
            }.jpg" />
        </div>
    `);
  }

  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });
});
