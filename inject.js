(function () {
  if (document.getElementsByClassName('__my_injection_div__')[0]) {
    document.getElementsByClassName('__my_injection_div__')[0].remove();
    return;
  }

  let div = document.createElement('div');
  div.className = '__my_injection_div__';
  div.innerHTML = makeWg();
  document.body.append(div);


  let tid = setInterval(injectCSS, 0);

  makeListeners();

  function injectCSS() {
    if (document.head !== null) {

      let css = document.createElement('link');
      css.href = chrome.extension.getURL('styles.css');
      css.rel = 'stylesheet';
      document.head.append(css);

      clearInterval(tid);
    }
  }

  function makeWg() {
    return `
   <div class="wg-gb-calc">

 <div class="wg-gb-calc__head">
  <span class="wg-gb-calc__head_title"></span>
  <span class="wg-gb-calc__head_btn-close"></span>
 </div>

 <form action="post" class="wg-gb-calc__form">

  <div class="wg-gb-calc__form-row">
   <label for="__gb-price__" class="gb-calc__label">Price: </label>
   <input type="number" id="__gb-price__" class="gb-calc__number">
   <label for="__gb-name__" class="gb-calc__label">Name: </label>
   <select name="GB-name" id="__gb-name__" class="gb-calc__select"></select>
   <label for="__gb-lavel__" class="gb-calc__label">Lavel: </label>
   <input type="number" id="__gb-lavel__" class="gb-calc__number">
  </div>

  <dıv class="wg-gb-calc__form-row" id="__gb-places__">
   <label class="gb-calc__label">I</label>
   <input type="number" value="0" ster="1" class="gb-calc__number">
   <label class="gb-calc__label"> II </label>
   <input type="number" value="0" ster="1" class="gb-calc__number">
   <label class="gb-calc__label"> III </label>
   <input type="number" value="0" ster="1" class="gb-calc__number">
   <label class="gb-calc__label"> IV </label>
   <input type="number" value="0" ster="1" class="gb-calc__number">
   <label class="gb-calc__label"> V </label>
   <input type="number" value="0" ster="1" class="gb-calc__number">
  </dıv>

  <div class="wg-gb-calc__form-row">
   <label for="__deposit_percent-1__" class="gb-calc__label">%</label>
   <input type="number" value="1.9" step="0.01" id="__deposit_percent-1__" class="gb-calc__number">
   <input type="number" value="1.9" step="0.01" class="hidden gb-calc__number">
   <input type="number" value="1.9" step="0.01" class="hidden gb-calc__number">
   <input type="number" value="1.9" step="0.01" class="hidden gb-calc__number">
   <input type="number" value="1.9" step="0.01" class="hidden gb-calc__number">
   <label for="__gb-calc__check-same-percent__" class="gb-calc__label">Same&nbsp;%</label>
   <input type="checkbox" id="__gb-calc__check-same-percent__" class="gb-calc__check" checked>
  </div>

  <div class="wg-gb-calc__form-row">
   <label for="__gb-deposit-history__" class="gb-calc__label">History</label>
   <select name="history" id="__gb-deposit-history__" class="gb-calc__select"></select>
  </div>

 </form>
</div>
    `;
  }

  function makeListeners() {
    let historyElem = document.getElementById('__gb-deposit-history__');
    historyElem.addEventListener('click', () => {
      alert('hello');
    });
  }

})();