const addCart = (e) => {
  e.preventDefault();
  const el = e.target;
  const card = el.parentElement.parentElement.parentElement;
  const nama = card.getElementsByClassName('card-title')[0].innerText;
  const harga = card.getElementsByClassName('card-action')[0].innerText
  addItem(nama, harga);
}

const addItem = (nama, harga) => {
  const isiCart = document.getElementById('isiCart');
  const hargaFormat = parseFloat(harga.replace('Rp.',''));
  const namaNagaEls  = document.getElementsByClassName('nama-naga');
  for(let namaNagaEl of namaNagaEls){
    if(namaNagaEl.value == nama){
      M.toast({html: `${nama} ini sudah ada di cart`});
      return;
    }
  }
  const row = document.createElement('div');
  const item = `<div class="input-field col s6">
      <input disabled class="nama-naga" type="text" value="${nama}">
    </div>
    <div class="input-field col s3">
      <input disabled class="harga" type="text" value="${hargaFormat}">
    </div>
    <div class="col s3">
      <label>Jumlah</label>
      <select class="browser-default">
        <option value="0">0</option>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </div>`;
  row.classList.add('row');
  row.innerHTML = item;
  isiCart.append(row);
  M.toast({html: `${nama} ditambahkan ke cart`});
}

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
  const addEls = document.getElementsByClassName('pulse');

  for(let jumlahEl of jumlahEls){
    jumlahEl.addEventListener('change', updateCart);
  }

  for(let addEl of addEls){
    addEl.addEventListener('click', addCart);
  }

}

if(document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded',ready);
}else{
  ready();
}