$(function () {


    let watt;
    let Kwh = 0;
    let rev_kwh = 0;
    let time = 0;
    let days;
    let y;


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

    /* ========================= Tesseract.js ========================= */
    // 読みった数字のデータを入れる変数
    // rev_kwh;


    //recognize関数の宣言
    $("#uploader").change(function (evt) {
        const files = evt.target.files;
        if (files.length == 0)
        {
            return;
        }
        Tesseract.recognize(
            files[0],
            'eng',
        )
            .then(function (result) {
                let replace = result.data.text.replaceAll(/[^0-9]/g, '');
                document.querySelector('#result').value = replace;
                rev_kwh = replace;
                console.log(rev_kwh)
            });

    });




    // /* ========================= timers_switches.js ========================= */
    {




        let startTime;       // Startボタンクリック時の時刻
        let timeoutid;       // ID
        let elapsedTime = 0; // StartからStopまでの経過時間

        function countUp() {
            const d = new Date(Date.now() - startTime + elapsedTime);
            /* padStart()で二桁または三桁固定表示とする */
            const m = String(d.getMinutes()).padStart(2, '0');
            const s = String(d.getSeconds()).padStart(2, '0');
            /* 描画 */
            timer.textContent = `${m}:${s}`;


            timeoutid = setTimeout(() => {
                //再帰呼び出し
                countUp();
            }, 10);
        }

        // 状態:初期 または Reset直後
        function setButtonStateInitial() {
            $('#start').removeClass('inactive'); // 活性
            $('#stop').addClass('inactive');    // 非活性
            $('#reset').addClass('inactive');   // 非活性
        }

        // 状態:タイマー動作中
        function setButtonStateRunning() {
            $('#stop').removeClass('inactive');  // 活性
            $('#start').addClass('inactive');   // 非活性
            $('#reset').addClass('inactive');  // 非活性
        }

        // 状態:タイマー停止中
        function setButtonStateStopped() {
            $('#reset').removeClass('inactive'); // 活性
            $('#start').addClass('inactive'); // 活性
            $('#stop').addClass('inactive');    // 非活性
        }



        // Startボタンクリック
        // …タイマーを開始します
        $('#start').on('click', () => {
            if ($('#start').hasClass('inactive') === true)
            {
                return;
            }
            // ボタンをタイマー'動作中'状態とする
            setButtonStateRunning();
            startTime = Date.now();
            countUp();
        });

        // Stopボタンクリック
        // …タイマーを停止します
        $('#stop').on('click', () => {
            if ($('#stop').hasClass('inactive') === true)
            {
                return;
            }
            // タイマーを'停止中'状態とする
            setButtonStateStopped();
            clearTimeout(timeoutid);
            elapsedTime += Date.now() - startTime;
            time = Math.round((elapsedTime / 1000));// 計算式の値のタイムを取得
            console.log(time);
        });

        // Resetボタンクリック
        // …タイマーを「00:00.000」で上書きします
        $('#reset').on('click', () => {
            if ($('#reset').hasClass('inactive') === true)
            {
                return;
            }
            // ボタンを'初期'状態とする
            setButtonStateInitial()
            timer.textContent = '00:00';
            elapsedTime = 0;
        });
    }


    /* ========================= index.js ========================= */

    let date = [];
    let Electricity = [];

    /* ===== 記録書き出し・表示 ===== */
    // 読み込んだ時に過去の記録を表示
    $(window).on('load', function () {

    });
    console.log(data01)
    // Electricityのローカルストレージを配列に入れる
    data01 = localStorage.getItem('day');
    data01 = JSON.parse(data01);
    console.log(data01);

    // Electricityのローカルストレージを配列に入れる
    data02 = localStorage.getItem('value');
    data02 = JSON.parse(data02);
    console.log(data02);



    console.log(date);
    console.log(Electricity);
    // アプリを使用した時、最初と2回目の処理の分岐
    if (data01 == null)
    {
        // 最初だとlocalestreageのデータを取得する処理をしない
        console.log("1回目最初")

    } else
    {
        // 2回目の処理　localestreageのデータを取得する処理
        console.log("2回目")
        date = data01;
        Electricity = data02;
    }




    $("#Yreset").on('click', function () {

        // console.log("hello");

        // 計測定数
        // rev_kwh = $("#constant").val();
        // console.log(rev_kwh);

        // タイム
        // time = $("#time").val();
        // console.log(time);

        /* ===== 計算式 ===== */
        console.log(time);
        watt = 3600 * 1000 / ((time + 180) * rev_kwh);
        console.log(watt)
        Kwh = watt / 1000;
        Kwh = watt * 24;

        // /* ===== canvas計算 ===== */
        let max;
        max = Kwh / 120;
        y = 138 - max;
        let canvas = $("#board")[0].getContext("2d");
        canvas.beginPath();
        canvas.strokeStyle = '#FFF100';
        canvas.fillStyle = '#FFF100';
        canvas.moveTo(0, 138);
        canvas.lineTo(0, y);
        canvas.lineTo(150, y);
        canvas.lineTo(150, 138);
        canvas.fill();

        //0.42

        /* ===== ローカルストレージに記録 ===== */

        if (window.localStorage)
        {// 使える時
            if (Yreset.value == "リセット")
            {
                Yreset.value = "計算";
            } else
            {
                Yreset.value = "リセット";

                console.log("localStorageが使える");

                // ローカルホスト保存　日にち(date)
                // 配列に日付を入れる
                date.push(days);
                // console.log(date);

                // jsonにデータ形式を変える
                json01 = JSON.stringify(date, undefined, 1);
                // console.log(json01)
                localStorage.setItem('day', json01);

                data01 = localStorage.getItem('day');
                data01 = JSON.parse(data01);
                console.log(data01);


                // ローカルホスト保存　消費電力(Electricity)
                // 配列に計算結果を入れる
                Electricity.push(Kwh);
                console.log(Electricity);

                // jsonにデータ形式を変える
                json02 = JSON.stringify(Electricity, undefined, 1);
                console.log(json02)
                localStorage.setItem('value', json02);

                data02 = localStorage.getItem('value');
                data02 = JSON.parse(data02);
                console.log(data02);



            }
        } else
        { //使えない時
            console.log("ローカルストレージ使用できません");
        }
    });


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
    // ローカルストレージの保存数
    const length = localStorage.length;
    console.log(length);



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
        $('.yesterday').html(yesterday);
        $('.today').html(today);

        //前回と今回の差を計算
        let between = yesterday - today;
        console.log(between)
        // 計算した値を表示
        $('.main__rec__compar__valu').html(between);

        if (yesterday < today)
        {
            $(".main__rec__up").addClass("UP");
            console.log("前回と比べて増えた");
        } else if (yesterday > today)
        {
            $(".main__rec__down").addClass("DOWN");
            console.log("前回と比べて減った");
        } else
        {
            console.log("同じ値");
        }
    });

    // /* ========================= record.js ========================= */
    //記録の表示
    $(".display").on("click", function () {
        $(".main__record__table").empty();
        console.log(data01);
        console.log(data02);
        for (let i = 0; i < data01.length; i++)
        {
            $(".main__record__table").append(`<div class="box__list${i}"></div>`);
            $(`.box__list${i}`).append(`<p id="day" class="day${i}">日付：${data01[i]}</p>`);
            $(`.box__list${i}`).append(`<h4 id="value" class="value${i}">消費電力:${data02[i]}khw</h4>`)
        }
    })

    // /* ========================= ベルマークの機能 ========================= */
    let url = `https://www.google.com/`;
    let num = 0;
    $(".header__nav__gnav__item__link").click(function () {
        $(this).data("click", ++num);

        if (data01.length == 7)
        {
            $('.header__nav').append(`<div class="balloon1-top"></div>`);
            $('.balloon1-top').append(`<p>節電をよく頑張ったね！これからも頑張って行こう！</p>`);
            $('.balloon1-top p').append(`<br><a href="${url}">${url}</a>`)
        } else
        {
            console.log("がんばっれ")
        }
        let click = $(this).data("click");
        if ((click % 2) == 0)
        {
            $('.balloon1-top').remove();
        }
        return false;
        console.log()
    });
});
