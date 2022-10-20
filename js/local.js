$(function () {
    
        // ローカルストレージ全削除
    // localStorage.clear();

    // let watt;
    // let time = 0;
    // let rev_kwh = 0;
    // let days;

    // let date = [];
    // let Electricity = [];
    // let json01;
    // let json02;
    // let data01;
    // let data02;
    let c = 0;

// ローカルストレージの保存数
    const length = localStorage.length;
    console.log(length);


    /* ===== 日付の取得 ===== */
    // 日付の取得
    // let today = new Date();
    // console.log(today);

    // // 年の取得
    // var Year = today.getFullYear().toString();
    // // console.log(Year);

    // // 月の取得
    // let month = today.getMonth();
    // month = month + 1;
    // month = month.toString();
    // // console.log(month);

    // // 日の取得
    // var day = today.getDate().toString();
    // // console.log(day);

    // days = (Year + "/" + month + "/" + day);
    // console.log(days);



    // $(".btn01").on('click', function (e) {
    //     $.when(
    //         // 先に実行したい処理
    //         console.log('処理1'),
    //         rev_kwh = $("#rev_kwh").val(),
    //         console.log(rev_kwh),

    //         // タイム
    //         time = $("#time").val(),
    //         console.log(time),

    //         /* ===== 計算式 ===== */
    //         watt = 3600 * 1000 / (time * rev_kwh),
    //         watt = Math.round(watt),
    //         console.log(watt),

    //         /* ===== ローカルストレージに記録 ===== */
    //         date.unshift(days),
    //         // console.log(date);

    //         // ローカルホスト保存　日にち
    //         json01 = JSON.stringify(date, undefined, 1),
    //         localStorage.setItem('key01', json01),

    //         data01 = localStorage.getItem('key01'),
    //         data01 = JSON.parse(data01),
    //         console.log(data01),

    //         Electricity.unshift(watt),
    //         // console.log(Electricity);

    //         // ローカルホスト保存　消費電力
    //         json02 = JSON.stringify(Electricity, undefined, 1),
    //         localStorage.setItem('key02', json02),

    //         data02 = localStorage.getItem('key02'),
    //         data02 = JSON.parse(data02),
    //         console.log(data02),


    //     ).done(function () {
    //         // 後に実行したい処理
    //         console.log('処理3');
    //     ++c;
    //     console.log(c);

    //     /* ===== 記録の表示　(途中)  ===== */
    //     $("#result").append(`<ul class="result__ul ${c}" id="ul"></ul>`)

    //     $(`#ul.result__ul`).append(`<li class="result__txt ${c}" id="days"></li>`);

    //     $(`#days.result__txt `).append(`${data01[0]}`);

    //     console.log($(`#days`).eq());

    //     $(`#ul.result__ul`).append(`<li class="result__txt ${c}" id="time"></li>`);

    //     $(`#time.result__txt`).append(`${data02[0]}`);

    //     }).fail(function () {
    //         // エラーが発生したときの処理
    //     });
    // })

    
    ++c;
    console.log(c);

    $("#result").append(`<ul class="result__ul ${c}" id="ul"></ul>`)

    $(`#ul.result__ul`).append(`<li class="result__txt ${c}" id="days"></li>`);

    $(`#days.result__txt `).append(`${data01[0]}`);

    console.log($(`#days`).eq());

    $(`#ul.result__ul`).append(`<li class="result__txt ${c}" id="time"></li>`);

    $(`#time.result__txt`).append(`${data02[0]}`);
    });
