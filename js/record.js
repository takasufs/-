$(function () {
    
    let days;
    let value;


    let today = new Date();
    console.log(today);

    // 年の取得
    var Year = today.getFullYear().toString();
    console.log(Year); // 2016

    // 月の取得
    let month = today.getMonth();
    month = month + 1;
    month = month.toString();
    console.log(month);
    
    // 日の取得
    var day = today.getDate().toString();
    console.log(day);


    days = (Year + "/" + month + "/" + day);
    console.log(days);

    let record_ul;
    let record_li;
    let record_days;
    let record_value;

    // record_ul = $("ul.main__record__table");
    // console.log(record_ul);

    // record_li = $("li.main__record__table__result");
    // console.log(record_li);

    // record_days = $("p.main__record__table__result__day");
    // console.log(record_days);

    // record_value = $("p.main__record__table__result__watt");
    // console.log(record_value);














    // // ulにliを追加
    // $("ul.main__record__table").append('<li class="main__record__table__result"></li>');

    // // liにp(day)を追加
    // $("li.main__record__table__result").append('<p class="main__record__table__result__day">'+ days +'</p>');

    // // liにp(w)を追加
    // $("li.main__record__table__result").append('<p class="main__record__table__result__watt"><span class="h4">500</span></p>');


})