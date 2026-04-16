var knopkaMenu = document.querySelector('.menu-knopka');
var nav = document.querySelector('.ssylki-navigacii');

if (knopkaMenu && nav) {
  knopkaMenu.onclick = function () {
    if (nav.classList.contains('open')) {
      nav.classList.remove('open');
    } else {
      nav.classList.add('open');
    }
  };
}

var poisk = document.getElementById('poisk-nazvaniya');
var karts = document.querySelectorAll('.instrument-kartochka');

if (poisk) {
  poisk.onkeyup = function () {
    var val = poisk.value.toLowerCase();

    for (var i = 0; i < karts.length; i++) {
      var txt = karts[i].textContent.toLowerCase();
      var data = (karts[i].getAttribute('data-name') || '').toLowerCase();

      if (txt.indexOf(val) !== -1 || data.indexOf(val) !== -1 || val === '') {
        karts[i].style.display = 'block';
      } else {
        karts[i].style.display = 'none';
      }
    }
  };
}

var voprosy = document.querySelectorAll('.vopros-knopka');
for (var j = 0; j < voprosy.length; j++) {
  voprosy[j].onclick = function () {
    var otvet = this.nextElementSibling;
    if (otvet.style.maxHeight && otvet.style.maxHeight != '0px') {
      otvet.style.maxHeight = null;
      otvet.style.paddingTop = '0px';
      otvet.style.paddingBottom = '0px';
    } else {
      otvet.style.maxHeight = otvet.scrollHeight + 'px';
      otvet.style.paddingTop = '10px';
      otvet.style.paddingBottom = '10px';
    }
  };
}

var forma = document.getElementById('forma-svyazi');
var otvet = document.getElementById('otvet-formy');
if (forma && otvet) {
  forma.onsubmit = function (e) {
    e.preventDefault();
    otvet.innerHTML = 'Сообщение отправлено';
    forma.reset();
  };
}
