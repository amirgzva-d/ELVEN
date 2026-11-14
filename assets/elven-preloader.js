(function(){
  var screen = document.getElementById('elven-preloader');
  if (!screen || screen.dataset.readyHandler) return;
  screen.dataset.readyHandler = '1';
  var started = Date.now();
  var finished = false;
  function hideScreen(){
    if (finished) return;
    finished = true;
    var wait = Math.max(0, 450 - (Date.now() - started));
    window.setTimeout(function(){
      screen.classList.add('is-hidden');
      window.setTimeout(function(){ if(screen && screen.parentNode) screen.parentNode.removeChild(screen); }, 750);
    }, wait);
  }
  var pageReady = new Promise(function(resolve){
    if (document.readyState === 'complete') resolve();
    else window.addEventListener('load', resolve, { once:true });
  });
  var fontsReady = document.fonts && document.fonts.ready
    ? document.fonts.ready.catch(function(){})
    : Promise.resolve();
  Promise.race([
    Promise.all([pageReady, fontsReady]),
    new Promise(function(resolve){ window.setTimeout(resolve, 9000); })
  ]).then(hideScreen);
})();