function masivebisGadawyoba() {
    var masivi = [];
    var luwiEl = [];
    var kentiIndex = [];

    for (var i = 0; i < 10; i++){
        var el = parseInt(prompt('შემოიტანეთ რიცხვები'));
        masivi.push(el);
    }

    for (var j = 0; j < 10; j++){
        var indexiKentia = j % 2 == 1;
        var elLuwia = masivi[j] % 2 == 0;

        if (indexiKentia) {
            kentiIndex.push(masivi[j]);
        }
        if (elLuwia) {
            luwiEl.push(masivi[j]);
        }
    }
    document.getElementById('tavdapirveliMasivi').innerHTML = 'თქვენს მიერ შემოტანილი ელემენტებია: ' + masivi;
    document.getElementById('kentiIndeqsebi').innerHTML = 'კენტ პოზიციაზე მდგომი ელემენტებია: ' + kentiIndex;
    document.getElementById('luwiElementebi').innerHTML = 'ლუწი ელემენტებია: ' + luwiEl;
}



function gakenteba() {
    var masivi = [];
    var luwebi = [];
    // var ramdeniEl = document.getElementById('ramdeniEl').value;
    var ramdeniEl = parseInt(prompt('რამდენი ელემენტის შემოტანა გსურთ?'));
    for (var i = 0; i < ramdeniEl; i++){
        var el = parseInt(prompt('შემოიტანეთ რიცხვები'));
        masivi.push(el);
    }

    for (var j = 0; j < masivi.length; j++){
        var luwia = masivi[j] % 2 == 0;
        if (luwia) {
            masivi[j]++;
        }
        luwebi.push(masivi[j]);
    }

    alert('რომ გავაკენტოთ ყველა ლუწი ელემენტი, მასივს ექნება შემდეგი სახე: ' + luwebi);
}


var coloredBox = document.getElementById('coloredBox');
coloredBox.addEventListener('mouseover', toRed);
coloredBox.addEventListener('mouseout', toYellow);

function toRed() {
    document.getElementById('coloredBox').style.backgroundColor = 'red';
}
function toYellow() {
    document.getElementById('coloredBox').style.backgroundColor = 'aquamarine';
}

var landscapePhoto = document.getElementById('landscapePhoto');
landscapePhoto.addEventListener('click', changePhoto);
function changePhoto() {
    landscapePhoto.src = 'https://i.pinimg.com/originals/bd/6c/0b/bd6c0bef4a473bfca44d1f6c83c95006.png';
}


