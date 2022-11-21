$(function () {
    let days;
    let val = 0;

    // 日付の配列
    let A = [];
    // 消費電力量の配列
    let B = [];

    // 日付のjson
    let jsonA;
    // 消費電力のjson
    let jsonB;



    // /* ===== 日付の取得 ===== */
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



    $(".btn01").on('click', function () {
        // console.log("hello");
        val = $("#constant").val();
        // console.log(val);
        A.push(days);
        B.push(val);

        console.log(A);
        console.log(B);
    })

    $(".btn02").on('click', function () {
        // console.log("hello");
        A.forEach(function (value) {
            console.log(value);
        });
        /* ===== ローカルストレージに記録 ===== */

        // if (window.localStorage) {// 使える時
        //     console.log("localStorageが使える");

        //     var array = [];
        //     var obj = {
        //         'A': days,
        //         'B': val
        //     };
        //     array.push(A, B);
        //     console.log(array)
        //     var setjson = JSON.stringify(obj);
        //     localStorage.setItem('dete', setjson);

        // } else { //使えない時
        //     console.log("ローカルストレージ使用できません");
        // }
    })


    var array2 = [
        ['東京', '神奈川', '千葉', '埼玉'],
        ['茨城', '栃木', '群馬', '愛知']
    ];
    console.log(array2);

    let ABC = {};
    // $.each(array2, function (index, value) {
    // })


    for (let i = 0; i < array2[0].length; i++) {
        console.log(array2[0][i]);
        console.log(array2[1][i]);

        var obj = [
            {
                'A': array2[0][i],
                'B': array2[1][i],
            },
        ];
        console.log(obj)
    }

    console.log(ABC)


    let hash = {
        key0: "value0",
        key1: "value1",
    };
    console.log(hash);
    for (let key in hash) {
        console.log('key:' + key + ' value:' + hash[key]);
    }





    var user1 = {
        name: '太郎',
        area: 'tokyo'
    }

    var user2 = {
        name: '花子',
        age: 28
    }


    var result = $.extend(user1, user2);

    console.log(result);





    // // 初期化
    // localStorage.clear()





    let date01 = [0, 0, 0, 0, 0, 0, 0,]
    let url = `https://www.google.com/`;
    console.log(url)
    $(".header__nav__gnav__item__link").on('click', function () {

        // $('.balloon1-top').remove();
        console.log("おめでとう")


        // if (date01.length == 7) {
        //     $('.header__nav').append(`<div class="balloon1-top"></div>`);
        //     $('.balloon1-top').append(`<p></p>`);
        //     $('.balloon1-top p').append(`<a href="${url}">${url}</a>`)
        // } else {
        //     console.log("がんばっれ")
        // }
    })

    let num = 0;
    $(".header__nav__gnav__item__link").click(function () {
        $(this).data("click", ++num);

        if (date01.length == 7) {
            $('.header__nav').append(`<div class="balloon1-top"></div>`);
            $('.balloon1-top').append(`<p>節電をよく頑張ったね！これからも頑張って行こう！</p>`);
            $('.balloon1-top p').append(`<br><a href="${url}">${url}</a>`)
        } else {
            console.log("がんばっれ")
        }
        let click = $(this).data("click");
        if ((click % 2) == 0) {
            $('.balloon1-top').remove();
        }
        return false;
        console.log()
    });

    
        /* ========================= test02.js ========================= */
    // let date = [];
    // let Electricity = [];

    // /* ===== 記録書き出し・表示 ===== */
    // // 読み込んだ時に過去の記録を表示
    // $(window).on('load', function () {

    // });
    // console.log(data01)
    // // Electricityのローカルストレージを配列に入れる
    // data01 = localStorage.getItem('day');
    // data01 = JSON.parse(data01);
    // console.log(data01);

    // // Electricityのローカルストレージを配列に入れる
    // data02 = localStorage.getItem('value');
    // data02 = JSON.parse(data02);
    // console.log(data02);



    // console.log(date);
    // console.log(Electricity);
    // // アプリを使用した時、最初と2回目の処理の分岐
    // if (data01 == null) {
    //     // 最初だとlocalestreageのデータを取得する処理をしない
    //     console.log("1回目最初")

    // } else {
    //     // 2回目の処理　localestreageのデータを取得する処理
    //     console.log("2回目")
    //     date = data01;
    //     Electricity = data02;
    // }


    // $(".btn01").on('click', function () {
    //     // console.log("hello");

    //     // 計測定数
    //     rev_kwh = $("#constant").val();
    //     console.log(rev_kwh);

    //     // タイム
    //     time = $("#time").val();
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
    //         // console.log(json01)
    //         localStorage.setItem('day', json01);

    //         data01 = localStorage.getItem('day');
    //         data01 = JSON.parse(data01);
    //         console.log(data01);


    //         // ローカルホスト保存　消費電力(Electricity)
    //         // 配列に計算結果を入れる
    //         Electricity.push(Kwh);
    //         console.log(Electricity);

    //         // jsonにデータ形式を変える
    //         json02 = JSON.stringify(Electricity, undefined, 1);
    //         console.log(json02)
    //         localStorage.setItem('value', json02);

    //         data02 = localStorage.getItem('value');
    //         data02 = JSON.parse(data02);
    //         console.log(data02);

    //     } else { //使えない時
    //         console.log("ローカルストレージ使用できません");
    //     }
    // });
    // $(".btn02").on("click", function () {
    //     $(".box").empty();
    //     console.log(data01);
    //     console.log(data02);
    //     for (let i = 0; i < data01.length; i++) {
    //         $(".box").append(`<div class="box__list${i}"></div>`);
    //         $(`.box__list${i}`).append(`<p id="day" class="day${i}">日付：${data01[i]}</p>`);
    //         $(`.box__list${i}`).append(`<h4 id="value" class="value${i}">消費電力:${data02[i]}</h4>`)
    //     }
    // })

    // /* ===== データ削除 ===== */
    // $(".btn03").on("click", function () {

    //     // 確認ダイアログ
    //     if (confirm('削除してもよろしいですか？（＊この操作は取り消せません）')) {
    //         // 「OK」をクリックした際の処理を記述
    //         $(".box").empty();
    //         // ローカルストレージ全削除
    //         localStorage.clear();

    //         // 配列内のデータを削除

    //     } else {
    //         //キャンセルした場合
    //         //何も起きない
    //         return false
    //     }

    // })
    // // ローカルストレージの保存数
    // const length = localStorage.length;
    // console.log(length);

});