const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>obs.observe(e));
const links=[...document.querySelectorAll('nav a')], sections=[...document.querySelectorAll('main section[id]')];
addEventListener('scroll',()=>{
  const y=scrollY+220; let cur='home'; sections.forEach(s=>{if(y>=s.offsetTop)cur=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+cur));
  const h=document.documentElement.scrollHeight-innerHeight; document.querySelector('.progress').style.width=(scrollY/h*100)+'%';
});
document.getElementById('year').textContent=new Date().getFullYear();
