const jumlahEls = document.getElementsByClassName('browser-default');

for(let jumlahEl of jumlahEls){
  jumlahEl.addEventListener('change', function(e){
    const el = e.target;
    const value = e.target.value;
    if(value == 0){
      el.parentElement.parentElement.remove();
    }
  });
}