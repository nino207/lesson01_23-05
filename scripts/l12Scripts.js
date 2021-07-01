function gamotvla() {
    var masivi = [];
    var arrLength = parseInt(prompt('რამდენი ელემენტის შემოტანა გსურთ?'));
    for (var i = 0; i < arrLength; i++){
        var el = parseInt(prompt('შემოიტანეთ ' + (arrLength - i) + ' რიცხვი'));
        masivi.push(el);
    }
    var luwiArrLength = arrLength % 2 == 0;
    if (luwiArrLength) {
        var extraEl = parseInt(prompt('თქვენს მიერ შემოტანილი ელემეტენის რაოდენობა ლუწია, ამიტომაც შუა ინდექსის საჩვენებლად საჭიროა კიდევ ერთი რიცხვი. შემოიტანეთ :)'));
        masivi.push(extraEl);
    }
    var shuaIndex = (masivi.length - 1) / 2;
    var shuaEl = masivi[shuaIndex];
    var pirveliEl = masivi[0];
    var boloEl = masivi[masivi.length - 1];
    var kvadratebisJami = pirveliEl ** 2 + boloEl ** 2;

    alert('შემოტანილი რიცხვებისგან შედგა შემდეგი მასივი: ' + masivi + ', სადაც შუა ინდექსია ' + shuaIndex + ' და მასზე მდგომი ელემენტია ' + shuaEl + '. პირველი და ბოლო ელემენტების კვადრატების ჯამი კი იქნება: ' + kvadratebisJami);
}


function moqmedebebiMasivze() {
    var arr = [];
    var arrLength = parseInt(prompt('რამდენი რიცხვის შემოტანა გსურთ?'))
    for (var i = 0; i < arrLength; i++){
        var el = parseInt(prompt('შემოიტანეთ ' + (arrLength - i) + ' რიცხვი'));
        arr.push(el);
    }
    var pirveliEl = arr[0];
    var meoreEl = arr[1];
    var boloEl = arr[arrLength - 1];

    var pirveliLuwia = pirveliEl % 2 == 0;
    var pirveliMetia = pirveliEl > meoreEl;
    var boloMetia = pirveliEl < boloEl;

    if (pirveliLuwia && pirveliMetia) {
        alert('პირველი ელემენტი ლუწია და ის მეტია მეორეზე');
    } else if (!pirveliLuwia && boloMetia) {
        alert('პირველი ელემენტი კენტია და ნაკლებია ბოლო ელემენტზე');
    } else {
        alert('ამოცანაში მოცემული პირობები არ კმაყოფილდება მოცემული მასივის ელემენტებით');
    }
}