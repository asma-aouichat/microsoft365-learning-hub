
const key='m365-progress';
const state=JSON.parse(localStorage.getItem(key)||'{}');
document.querySelectorAll('[data-course]').forEach(box=>{
 const id=box.dataset.course, cb=box.querySelector('input[type=checkbox]');
 if(cb){cb.checked=!!state[id]; cb.addEventListener('change',()=>{state[id]=cb.checked;localStorage.setItem(key,JSON.stringify(state));update()})}
});
function update(){const total=6,done=Object.values(state).filter(Boolean).length;document.querySelectorAll('.progress span').forEach(x=>x.style.width=(done/total*100)+'%');document.querySelectorAll('[data-progress-text]').forEach(x=>x.textContent=`${done}/${total} modules terminés`)}
update();
document.querySelectorAll('[data-reveal]').forEach(b=>b.addEventListener('click',()=>{const a=b.parentElement.querySelector('.answer');a.style.display=a.style.display==='block'?'none':'block'}));
