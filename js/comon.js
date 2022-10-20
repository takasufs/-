$(function () {
    // ローカルストレージ全削除
    // localStorage.clear();

    let watt;
    let time = 0;
    let rev_kwh = 0;
    let days;

    let date = [];
    let Electricity = [];
    let json01;
    let json02;
    let data01;
    let data02;
    let c = 0;

// ローカルストレージの保存数
    const length = localStorage.length;
    console.log(length);
/* ========================= test02.js ========================= */
    /* ===== inputから取得 ===== */
    $(".btn01").off(`click`);
    $(".btn01").on('click', function (e) {
        // console.log("hello");
    
        // 計測定数
        rev_kwh = $("#rev_kwh").val();
        console.log(rev_kwh);

        // タイム
        time = $("#time").val();
        console.log(time);

        /* ===== 計算式 ===== */
        watt = 3600 * 1000 / (time * rev_kwh);
        watt = Math.round(watt);
        console.log(watt);

        /* ===== ローカルストレージに記録 ===== */
        if (window.localStorage) {// 使える時
            console.log("localStorageが使える");

            date.unshift(days);
            // console.log(date);

            // ローカルホスト保存　日にち
            json01 = JSON.stringify(date, undefined, 1);
            localStorage.setItem('key01', json01);

            data01 = localStorage.getItem('key01');
            data01 = JSON.parse(data01);
            console.log(data01);

            Electricity.unshift(watt);
            // console.log(Electricity);

            // ローカルホスト保存　消費電力
            json02 = JSON.stringify(Electricity, undefined, 1);
            localStorage.setItem('key02', json02);

            data02 = localStorage.getItem('key02');
            data02 = JSON.parse(data02);
            console.log(data02);


        } else { //使えない時
            console.log("ローカルストレージ使用できません");
        } 

        // カウント
        ++c;
        console.log(c);

        /* ===== 記録の表示　(途中)  ===== */
        $("#result").append(`<ul class="result__ul ${c}" id="ul"></ul>`)

        $(`#ul.result__ul`).append(`<li class="result__txt ${c}" id="days"></li>`);

        $(`#days.result__txt `).append(`${data01[0]}`);

        console.log($(`#days`).eq());

        $(`#ul.result__ul`).append(`<li class="result__txt ${c}" id="time"></li>`);

        $(`#time.result__txt`).append(`${data02[0]}`);

        for (let i = 0; i < date.length; i++){
            scosno
        }


    })



/* ===== 日付の取得 ===== */
    // 日付の取得
    let today = new Date();
    console.log(today);

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
    console.log(days);


/* ===== 消費電力の計算 ===== */
    time = 960
    rev_kwh = 60

    console.log(3600 * 1000);
    console.log(time * rev_kwh)
    
    watt = 3600 * 1000 / (time * rev_kwh);
    console.log(watt);


    


/* ========================= index.js ========================= */

    // ローカdateレージ
    //保存
    // let date = new Object();
    
    // localStorage.setItem('days', day);
    
    // console.log(date.date)
    // //保存
    // let Electricity = new Object();

    // 日付配列
    // let date = ["2022/10/06", "2022/10/07", "2022/10/08", "2022/10/09"];
    // date.push('2022/10/10');
    // 消費電力
    // let Electricity = ["120", "200", "40", "160"];

    for (key in date){
        // console.log(key);
        console.log(date[key]);
    }

    for (key in Electricity){
        // console.log(key);
        console.log(Electricity[key]);
    }



    $('.main__rst').on('click', function () {



    // 呼び出し
    date = localStorage.getItem("day");
    console.log(date);

    // 呼び出し
    Electricity = localStorage.getItem("Electricity");
    console.log(Electricity);
    })

    // const length = localStorage.length;
    // console.log(length);


/* ========================= recode.js ========================= */

    
    /* ===== 記録書き出し ===== */
    let i = 0;
            
    $("div.btn").off(`click`);
    $("div.btn").on(`click`, function (e) {
        i++;
        console.log(i);
        $(".main__record__table__result").empty();
        // ulにliを追加
        $("ul.main__record__table").append('<li class="main__record__table__result"></li>');

        // liにp(day)を追加
        // $(".main__record__table__result__day").empty();
        $("li.main__record__table__result").append(`<p class="main__record__table__result__day">${date[i]}</p>`);
        
        // liにp(w)を追加
        // $(".main__record__table__result__watt").empty();
        $("li.main__record__table__result").append(`<p class="main__record__table__result__watt"><span class="h4">${Electricity[i]}</span></p>`);
    })



    
})



