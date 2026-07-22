
const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks?.classList.remove('open')));
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
document.querySelectorAll('form[data-demo]').forEach(form=>{
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const msg=form.querySelector('.form-message');
  if(msg){msg.textContent='Your request is ready to connect to email or a form service before launch.';msg.className='notice form-message';}
 });
});
