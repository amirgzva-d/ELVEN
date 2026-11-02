/* Scale every yeast detail image frame to the current product's image,
   with a safe cap for very narrow/tall images. No desktop changes. */
(function () {
  'use strict';
  var image = document.getElementById('pdImage');
  var frame = document.getElementById('pdImageContainer');
  if (!image || !frame) return;

  function sizeFrame() {
    if (!image.naturalWidth || !image.naturalHeight) {
      frame.style.removeProperty('--yeast-product-photo-ratio');
      return;
    }
    var ratio = image.naturalWidth / image.naturalHeight;
    if (!Number.isFinite(ratio) || ratio <= 0) return;
    /* Avoid extremely thin/tall frames while keeping the entire picture
       visible via object-fit:contain; no photos are cropped. */
    ratio = Math.min(2.6, Math.max(0.55, ratio));
    frame.style.setProperty('--yeast-product-photo-ratio', String(ratio));
  }

  image.addEventListener('load', sizeFrame);
  image.addEventListener('error', function () {
    frame.style.removeProperty('--yeast-product-photo-ratio');
  });

  /* This single image element is reused as different yeast cards open. */
  new MutationObserver(function () {
    frame.style.removeProperty('--yeast-product-photo-ratio');
    if (image.complete && image.naturalWidth) sizeFrame();
  }).observe(image, { attributes: true, attributeFilter: ['src'] });

  if (image.complete) sizeFrame();
})();
