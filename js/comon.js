$(function () {


    let watt;
    let Kwh;
    let time = 0;
    let rev_kwh = 0;
    let days;

    // let date = [];
    let Electricity = [];
    let json01;
    let json02;
    let data01 = [];
    let data02 = [];

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

    // ローカルストレージの保存数
    // const length = localStorage.length;
    // console.log(length);
    /* ========================= test02.js ========================= */

    let date = [];

    let a = [];


    $.when(
        $(".btn01").on('click', function () {
            // console.log("hello");

            // 計測定数
            rev_kwh = $("#rev_kwh").val();
            console.log(rev_kwh);

            // タイム
            time = $("#time").val();
            console.log(time);

            /* ===== 計算式 ===== */
            watt = 3600 * 1000 / (time * rev_kwh);
            Kwh = watt / 1000;
            Kwh = watt * 24;
            console.log(Kwh);

            /* ===== ローカルストレージに記録 ===== */

            if (window.localStorage) {// 使える時
                console.log("localStorageが使える");

                date.push(days);
                // console.log(date);

                // ローカルホスト保存　日にち
                json01 = JSON.stringify(date, undefined, 1);
                localStorage.setItem('day', json01);

                data01 = localStorage.getItem('day');
                data01 = JSON.parse(data01);
                console.log(data01);

                Electricity.push(watt);
                // console.log(Electricity);

                // ローカルホスト保存　消費電力
                json02 = JSON.stringify(Electricity, undefined, 1);
                localStorage.setItem('value', json02);

                data02 = localStorage.getItem('value');
                data02 = JSON.parse(data02);
                console.log(data02);


            } else { //使えない時
                console.log("ローカルストレージ使用できません");
            }
        })
    ).done(function () {


    });

    console.log(data01);
    console.log(data02);
    /* ===== 記録書き出し ===== */
    $(".btn02").on("click", function () {
        $(".box").empty();
        for (let i = 0; i < data01.length; i++) {
            $(".box").append(`<div class="box__list${i}"></div>`);
            $(`.box__list${i}`).append(`<p id="day" class="day${i}">日付：${data01[i]}</p>`);
            $(`.box__list${i}`).append(`<h4 id="value" class="value${i}">消費電力:${data02[i]}</h4>`)
        }
    })

    $(".btn03").on("click", function () {
        // ローカルストレージ全削除
        localStorage.clear();
    })
    // ローカルストレージの保存数
    const length = localStorage.length;
    console.log(length);


    /* ========================= index.js ========================= */




    /* ========================= ranking.js ========================= */

    //     let a = 200;
    //     let b = 300;

    //     $(".btn-1").on('click', function () {
    //         console.log("hello");

    //         if (a < b) {
    //             $(".main__rec__up").addClass("UP");
    //             console.log("前回と比べて増えた");
    //         } else if (a > b) {
    //             $(".main__rec__down").addClass("DOWN");
    //             console.log("前回と比べて減った");
    //         } else {
    //             console.log("同じ値");
    //         }
    //     });




    /* ========================= record.js ========================= */
});