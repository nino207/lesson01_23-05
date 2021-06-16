var i;
var start = 1;
var finish = 55;
var sum = 0;
for (i = start; i < finish; i+=2) {
    var iyofa5ze = i % 5 == 0;
    var kentia = i % 2 == 1;
    if (iyofa5ze && kentia) {
        sum += i;
    }
} console.log(sum);


function udidesi() {
    var pasuxi = document.getElementById('udidesiRicxvi');
    var pirveli = parseInt(prompt('შემოიტანეთ პირველი რიცხვი'));
    var meore = parseInt(prompt('შემოიტანეთ მეორე რიცხვი'));

    if (pirveli > meore) {
        pasuxi.innerHTML = 'თქვენს მიერ შემოტანილი რიცხვებია ' + pirveli + ' და ' + meore + ' და მათ შორის უდიდესია ' + pirveli;
    } else if (pirveli < meore) {
        pasuxi.innerHTML = 'თქვენს მიერ შემოტანილი რიცხვებია ' + pirveli + ' და ' + meore + ' და მათ შორის უდიდესია ' + meore;
    } else {
        alert('თქვენს მიერ შემოტანილი რიცხვებია ' + pirveli + ' და ' + meore + ' და ისინი ერთმანეთის ტოლია');
    }
}

function chanacvleba100it() {
    var masivi = [5, 8, 9, 12, 54, 1, 23, 4, 87, 89];
    for (var i = 0; i < masivi.length; i++){
        if (masivi[i]%2==1) {
            masivi[i] = 100;
        }
    }
    console.log(masivi);
    // document.getElementById('masivisVeli').innerHTML = masivi;
}


function namravlisNishani() {
    var ricxvi1 =document.getElementById('ricxvi1').value;
    var ricxvi2 = document.getElementById('ricxvi2').value;
    var ricxvi3 = document.getElementById('ricxvi3').value;
    var namravli = ricxvi1 * ricxvi2 * ricxvi3;

    if (namravli > 0) {
        alert('ამ რიცვების ნამრავლი არის: ' + namravli + ' და ის დადებითია');
    }else if(namravli < 0) {
        alert('ამ რიცვების ნამრავლი არის: ' + namravli + ' და ის უარყოფითია');
    }else {
        alert('ნამრავლი 0-ის ტოლია');
    }
}



// function mandzili(t, v) {
//     var tSaatebi = t / 60;
//     var s = v * tSaatebi;
//     return s;
// }
// console.log(mandzili(120, 8));
function findS() {
    function mandzili(t, v) {
        var tSaatebi = t / 60;
        var s = v * tSaatebi;
        return s;
    }
    
    var inputDro = document.getElementById('t').value;
    var inputSichqare = document.getElementById('v').value;
    document.getElementById('datvliliMandzili').innerHTML = mandzili(inputDro, inputSichqare);
}




function masivisJami() {
    var masivi = [];
    for (var i = 1; i < 6; i++){
        var el = parseInt(prompt('შემოიტანეთ რიცხვი'));
        masivi.push(el);
    }

    var luwebisJami = 0;
    var kentebisJami = 0;
    var jamebisJami = 0;
    for (var j = 0; j < masivi.length; j++){
        var kentia = masivi[j] % 2 == 1;
        if (kentia) {
            kentebisJami += masivi[j];
        } else {
            luwebisJami += masivi[j];
        }
    }
    jamebisJami = kentebisJami + luwebisJami;
    alert('კენტი რიცხვების ჯამია ' + kentebisJami + ', ხოლო ლუწი რიცხვების ჯამია: ' + luwebisJami + '; მათი ჯამი კი იქნება: ' + jamebisJami);
}