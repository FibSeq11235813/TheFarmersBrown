const toggle=document.querySelector('.nav-toggle');const nav=document.querySelector('#site-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{toggle.setAttribute('aria-expanded','false');nav.classList.remove('open')}));}
const y=document.querySelector('#year');if(y)y.textContent=new Date().getFullYear();
const io='IntersectionObserver'in window?new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08}):null;document.querySelectorAll('.reveal').forEach(el=>{if(io)io.observe(el);else el.classList.add('visible')});

// Keep Branch & Byte inquiries inside the hidden workshop while still posting to Formspree.
document.querySelectorAll('body.digital form[data-stay-on-page="true"]').forEach(form=>{
  form.addEventListener('submit',async event=>{
    event.preventDefault();
    const button=form.querySelector('button[type="submit"]');
    let status=form.querySelector('.form-status');
    if(!status){status=document.createElement('p');status.className='form-status';status.setAttribute('role','status');form.appendChild(status);}
    const original=button?button.textContent:'';
    if(button){button.disabled=true;button.textContent='sending...';}
    status.textContent='Sending your request...';status.classList.remove('form-status-error','form-status-success');
    try{
      const response=await fetch(form.action,{method:'POST',body:new FormData(form),headers:{'Accept':'application/json'}});
      if(response.ok){form.reset();status.textContent='Request received. We’ll follow up by email.';status.classList.add('form-status-success');}
      else{let message='Something went wrong. Please try again.';try{const data=await response.json();if(data&&data.errors&&data.errors.length)message=data.errors.map(e=>e.message).join(' ');}catch(_){}status.textContent=message;status.classList.add('form-status-error');}
    }catch(_){status.textContent='Could not send the request. Please check your connection and try again.';status.classList.add('form-status-error');}
    finally{if(button){button.disabled=false;button.textContent=original;}}
  });
});
