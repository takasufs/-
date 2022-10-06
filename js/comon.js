


$(function () {
    
    let watt;
    let time;
    let rev_kwh;
    let days;


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


    // 消費電力の計算
    time = 960
    rev_kwh = 60

    console.log(3600 * 1000);
    console.log(time * rev_kwh)
    
    watt = 3600 * 1000 / (time * rev_kwh);
    console.log(watt);


    


/* =========================index.js ========================= */

    // ローカdateレージ
    //保存
    // let date = new Object();
    
    // localStorage.setItem('days', day);
    
    // console.log(date.date)
    // //保存
    // let Electricity = new Object();

    // 日付配列
    let date = ["2022/10/06", "2022/10/07", "2022/10/08", "2022/10/09"];
    // date.push('2022/10/10');
    // 消費電力
    let Electricity = ["120", "200", "40", "160"];

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


/* =========================recode.js ========================= */

    
    // 記録
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