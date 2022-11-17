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

});