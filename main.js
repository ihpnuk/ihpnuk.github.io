(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('site-nav');
  if(t&&n){t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)})}
  var y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){
  var v=document.querySelector('video[data-autoplay]');
  if(!v||!('IntersectionObserver' in window))return;
  if(window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  var stopped=false;
  v.addEventListener('pause',function(){if(v.dataset.auto!=='1')stopped=true;v.dataset.auto='';});
  new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting&&!stopped&&v.paused){var p=v.play();if(p&&p.catch)p.catch(function(){});}
    else if(!e.isIntersecting&&!v.paused){v.dataset.auto='1';v.pause();}
  })},{threshold:0.5}).observe(v);
})();
