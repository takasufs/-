$(function () {

    let watt;
    let Kwh;

    let days;

    let date = [];
    let Electricity = [];
    let json01;
    let json02;
    let data01;
    let data02;

    /* ===== 日付の取得 ===== */
    // 日付の取得
    let today = new Date();
    // console.log(today);

    // 年の取得
    var Year = today.getFullYear().toString();
    // console.log(Year); 

    // 月の取得
    let month = today.getMonth();
    month = month + 1;
    month = month.toString();
    // console.log(month);

    // 日の取得
    var day = today.getDate().toString();
    // console.log(day);

    days = (Year + "/" + month + "/" + day);
    // console.log(days);



    /* ===== 計算 ===== */
    // 消費電力量(結果)
    consumption = 0;

    function calculation(constant, time) {
        constant = $("#constant").val()
        // タイム
        time = $("#time").val();

        /* ===== 計算式 ===== */
        consumption = 3600 * 1000 / (time * constant);
        console.log(consumption)
        Kwh = consumption / 1000;
        Kwh = consumption * 24;
        console.log(Kwh);
    }


    /* ===== 計算が押されたら ===== */
    $(".btn01").on('click', function () {
        console.log("hello");
        // 計算の関数を呼び出す
        calculation(constant, time);
    })

    $(function () {
        let constant = $("#constant");
        let time = $("#time");
        let btn = $(".btn01");
        var timer = window.setInterval(function () {
            btn.prop("disabled", !constant.val());
        }, 500);
    });

    /* ===== ローカルストレージに記録 ===== */

    if (window.localStorage) {// 使える時
        console.log("localStorageが使える");
    } else { //使えない時
        console.log("ローカルストレージ使用できません");
    }
});






