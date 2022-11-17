//recognize関数の宣言
const recognize = function (evt) {
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
            let replace = result.data.text.replace(/[^0-9]/g, '');
            document.querySelector('#result').value = replace;
        });
};

//関数宣言終了
//関数を実行
//ファイル選択ボタンを指定して宣言
const elm = document.getElementById('uploader');
//ファイルの中に写真が追加されたらrecognize関数を実行
elm.addEventListener('change', recognize);