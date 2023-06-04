if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded',ready);
}else{
  ready();
}

function ready() {
  const jumlahEls = document.getElementsByClassName('browser-default');

  for(let jumlahEl of jumlahEls){
    jumlahEl.addEventListener('change', function(e){
      const el = e.target;
      const value = e.target.value;
      if(value == 0){
        el.parentElement.parentElement.remove();
      }
      updateTotal();
    });
  }
}

const updateTotal = () => {
  const isiChartEl = document.getElementById('isiCart');
  const rowEl = isiChartEl.getElementsByClassName('row');
  const totalEl = document.getElementsByClassName('total')[0];
  let total = 0;

  for(let row of rowEl){
    const hargaEl = row.getElementsByClassName('harga')[0];
    const jumlahEl = row.getElementsByClassName('browser-default')[0];
    const hargaVal =  parseFloat(hargaEl.value);
    const jumlahVal =  jumlahEl.value;
    total += (hargaVal * jumlahVal);
  }

  totalEl.value = `${total}.000.000,-`;
}