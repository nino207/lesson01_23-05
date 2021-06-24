function samisJeradebi() {
    var masivi = [];
    var namravli = 1;
    var raodenoba = parseInt(prompt('რამდენი რიცხვის შემოტანა გსურთ?'));
    
    for (var i = 0; i < raodenoba; i++){
        var el = parseInt(prompt('შემოიტანეთ რიცხვები'));
        masivi.push(el);
    }

    for (var j = 0; j < masivi.length; j++){
        var samisJeradi = masivi[j] % 3 == 0;
        if (samisJeradi) {
            namravli *= masivi[j];
        } else {
            namravli = 0;
        }
    }
    alert('სამის ჯერადი რიცხვების ნამრავლია ' + namravli);
}

function maxEl() {
    var masivi = [];
    var raodenoba = parseInt(prompt('რამდენი რიცხვის შემოტანა გსურთ?'));
    
    for (var i = 0; i < raodenoba; i++){
        var el = parseInt(prompt('შემოიტანეთ ' + (raodenoba - i) + ' რიცხვი'));
        masivi.push(el);
    }
    
    var max = masivi[0];
    for (var j = 0; j < masivi.length; j++){
        if (max < masivi[j]) {
            max = masivi[j];
        }
    }
    alert('შემოტანილი რიცხვებიდან უდიდესია: ' + max);
}


function winaOrisJami() {
    var ricxvi1 = parseInt(prompt('შემოიტანეთ პირველი რიცხვი'));
    var ricxvi2 = parseInt(prompt('შემოიტანეთ მეორე რიცხვი'));
    var raodenoba = parseInt(prompt('შემოიტანეთ რიცხვების სასურველი რაოდენობა'));
    var masivi = [];
    masivi.push(ricxvi1);
    masivi.push(ricxvi2);

    for (var i = 2; i < raodenoba; i++){
        var shemdegiRicxvi = masivi[i - 1] + masivi[i - 2];
        masivi.push(shemdegiRicxvi);
    }
    alert('თქვენს მიერ შემოტანილი რიცხვების მიმდევრობა გაგრძელდება შემდეგნაირად ' + masivi);
}

function addClass() {
    var divEl = document.getElementById('addClass');
    divEl.classList.add('someClass');
}
function removeClass() {
    var divEl = document.getElementById('addClass');
    divEl.classList.remove('someClass');
}
function toggleClass() {
    var divEl = document.getElementById('toggleExample');
    divEl.classList.toggle('toggleClass');
}

function showDiv() {
    document.getElementById('showHide').classList.toggle('displayBlock');
}