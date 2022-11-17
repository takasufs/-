$(function () {


    let watt;
    let Kwh = 0;
    let time = 0;
    let rev_kwh = 0;
    let days;

    // let date = [];
    // let Electricity = [];
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

    /* ========================= test02.js ========================= */
    let date = [];
    let Electricity = [];

    // /* ===== 記録書き出し・表示 ===== */
    // 読み込んだ時に過去の記録を表示
    $(window).on('load', function () {
        // Electricityのローカルストレージを配列に入れる
        data01 = localStorage.getItem('day');
        data01 = JSON.parse(data01);
        console.log(data01);

        // Electricityのローカルストレージを配列に入れる
        data02 = localStorage.getItem('value');
        data02 = JSON.parse(data02);
        console.log(data02);
    });


    $.when(
        $(".btn01").on('click', function () {
            // console.log("hello");

            // 計測定数
            rev_kwh = $("#constant").val();
            console.log(rev_kwh);

            // タイム
            time = $("#time").val();
            console.log(time);

            /* ===== 計算式 ===== */
            watt = 3600 * 1000 / (time * rev_kwh);
            console.log(watt)
            Kwh = watt / 1000;
            Kwh = watt * 24;
            console.log(Kwh);

            /* ===== ローカルストレージに記録 ===== */

            if (window.localStorage) {// 使える時
                console.log("localStorageが使える");

                // ローカルホスト保存　日にち(date)
                // 配列に日付を入れる
                date.push(days);
                // console.log(date);

                // jsonにデータ形式を変える
                json01 = JSON.stringify(date, undefined, 1);
                console.log(json01)
                localStorage.setItem('day', json01);

                data01 = localStorage.getItem('day');
                data01 = JSON.parse(data01);
                console.log(data01);


                // ローカルホスト保存　消費電力(Electricity)
                // 配列に計算結果を入れる
                Electricity.push(Kwh);
                // console.log(Electricity);

                // jsonにデータ形式を変える
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



    $(".btn02").on("click", function () {
        $(".box").empty();
        console.log(data01);
        console.log(data02);
        for (let i = 0; i < data01.length; i++) {
            $(".box").append(`<div class="box__list${i}"></div>`);
            $(`.box__list${i}`).append(`<p id="day" class="day${i}">日付：${data01[i]}</p>`);
            $(`.box__list${i}`).append(`<h4 id="value" class="value${i}">消費電力:${data02[i]}</h4>`)
        }
    })

    /* ===== データ削除 ===== */
    $(".btn03").on("click", function () {

        // 確認ダイアログ
        if (confirm('削除してもよろしいですか？（＊この操作は取り消せません）')) {
            // 「OK」をクリックした際の処理を記述
            $(".box").empty();
            // ローカルストレージ全削除
            localStorage.clear();
        } else {
            //キャンセルした場合
            //何も起きない
            return false
        }



    })
    // ローカルストレージの保存数
    const length = localStorage.length;
    console.log(length);


    /* ========================= index.js ========================= */

    // let date = [];
    // let Electricity = [];

    // /* ===== 記録書き出し・表示 ===== */
    // // 読み込んだ時に過去の記録を表示
    // $(window).on('load', function () {
    //     // Electricityのローカルストレージを配列に入れる
    //     data01 = localStorage.getItem('day');
    //     data01 = JSON.parse(data01);
    //     console.log(data01);

    //     // Electricityのローカルストレージを配列に入れる
    //     data02 = localStorage.getItem('value');
    //     data02 = JSON.parse(data02);
    //     console.log(data02);
    // });



    // $(".Yreset").on('click', function () {
    //     // console.log("hello");

    //     // 計測定数
    //     rev_kwh = $("#ocrResult").val();
    //     console.log(rev_kwh);

    //     // タイム
    //     time = $("#timer").val();
    //     console.log(time);

    //     /* ===== 計算式 ===== */
    //     watt = 3600 * 1000 / (time * rev_kwh);
    //     console.log(watt)
    //     Kwh = watt / 1000;
    //     Kwh = watt * 24;
    //     console.log(Kwh);

    //     /* ===== ローカルストレージに記録 ===== */

    //     if (window.localStorage) {// 使える時
    //         console.log("localStorageが使える");

    //         // ローカルホスト保存　日にち(date)
    //         // 配列に日付を入れる
    //         date.push(days);
    //         // console.log(date);

    //         // jsonにデータ形式を変える
    //         json01 = JSON.stringify(date, undefined, 1);
    //         console.log(json01)
    //         localStorage.setItem('day', json01);

    //         data01 = localStorage.getItem('day');
    //         data01 = JSON.parse(data01);
    //         console.log(data01);


    //         // ローカルホスト保存　消費電力(Electricity)
    //         // 配列に計算結果を入れる
    //         Electricity.push(Kwh);
    //         // console.log(Electricity);

    //         // jsonにデータ形式を変える
    //         json02 = JSON.stringify(Electricity, undefined, 1);
    //         localStorage.setItem('value', json02);

    //         data02 = localStorage.getItem('value');
    //         data02 = JSON.parse(data02);
    //         console.log(data02);

    //     } else { //使えない時
    //         console.log("ローカルストレージ使用できません");
    //     }
    // });
    // /* ===== データ削除 ===== */
    // $(".btn03").on("click", function () {

    //     // 確認ダイアログ
    //     if (confirm('削除してもよろしいですか？（＊この操作は取り消せません）')) {
    //         // 「OK」をクリックした際の処理を記述
    //         $(".box").empty();
    //         // ローカルストレージ全削除
    //         localStorage.clear();
    //     } else {
    //         //キャンセルした場合
    //         //何も起きない
    //         return false
    //     }



    // })
    // // ローカルストレージの保存数
    // const length = localStorage.length;
    // console.log(length);


    // /* ========================= ranking.js ========================= */

    // 最新の値と一個前の値が入る配列
    let record = [];

    //比較ボタンを押した処理
    $(".comparison").on('click', function () {
        // 配列dara02の値を後ろから二つ持ってきてrecodeに入れる
        record = data02.slice(-2);
        console.log(record)

        //それぞれのデータを変数に入れる
        let yesterday = record[0];
        let today = record[1];




        $('.main__rec__compar__valu')

        if (yesterday < today) {
            $(".main__rec__up").addClass("UP");
            console.log("前回と比べて増えた");
        } else if (yesterday > today) {
            $(".main__rec__down").addClass("DOWN");
            console.log("前回と比べて減った");
        } else {
            console.log("同じ値");
        }
    });

    // /* ========================= record.js ========================= */

    $(".display").on("click", function () {
        $(".main__record__table").empty();
        console.log(data01);
        console.log(data02);
        for (let i = 0; i < data01.length; i++) {
            $(".main__record__table").append(`<div class="box__list${i}"></div>`);
            $(`.box__list${i}`).append(`<p id="day" class="day${i}">日付：${data01[i]}</p>`);
            $(`.box__list${i}`).append(`<h4 id="value" class="value${i}">消費電力:${data02[i]}khw</h4>`)
        }
    })

});