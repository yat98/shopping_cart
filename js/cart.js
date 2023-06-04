const updateCart = (e) => {
  const el = e.target;
  let value = e.target.value;
  if(value <= 0 || isNaN(value)){
    el.parentElement.parentElement.remove();
    value = 1;
  }
  updateTotal();
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

  totalEl.value = `${convertToRupiah(total)}.000.000,-`;
}

const ready = () => {
  const jumlahEls = document.getElementsByClassName('browser-default');

  for(let jumlahEl of jumlahEls){
    jumlahEl.addEventListener('change', updateCart);
  }
}

if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded',ready);
}else{
  ready();
}