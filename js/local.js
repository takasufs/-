$(function () {

    let watt;
    let Kwh;
    let time = 0;
    let rev_kwh = 0;
    let days;

    let date = [];
    let Electricity = [];
    let json01;
    let json02;
    let data01;
    let data02;


    $.when(
        $(".btn01").on('click', function () {

            // 計測定数
            rev_kwh = $("#rev_kwh").val();
            console.log(rev_kwh);
    
            // 時間
            time = $("#time").val();
            console.log(time);
            
    
            /* ===== 計算式 ===== */
            watt = 3600 * 1000 / (time * rev_kwh);
            Kwh = watt / 1000;
            Kwh = watt * 24;
            console.log(Kwh);
            
    

        }),
    ).done(function () {
        /* ===== ローカルストレージに記録 ===== */
        if (window.localStorage) {// 使える時
            console.log("localStorageが使える");

            date.push(days);
            // console.log(date);

            // ローカルホスト保存　日にち
            json01 = JSON.stringify(date, undefined, 1);
            localStorage.setItem('key01', json01);

            data01 = localStorage.getItem('key01');
            data01 = JSON.parse(data01);
            console.log(data01);

            Electricity.push(watt);
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
        
        /* ===== 記録書き出し ===== */
        /* 日付 */
        $.each(data01, function (index, val) {
            $(`.item${index}`).css('display', 'block');
            console.log(`.item${index}`);
            $(`.box-day${index}`).html(val);
            index++;
        });
        
        /* 消費量 */
        $.each(data02, function (index, val) {
            
            $(`.item${index}`).css('display', 'block');
            console.log(`.item${index}`);
            $(`.box-val${index}`).html(val);
            index++;
        });
        console.log(data01);
        console.log(data02);
    ;});
});






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