//recognize関数の宣言
const recognize = function (evt) {
    //読み込むファイルの宣言
    const files = evt.target.files;
    //ファイルの中身がないときには実行しない
    if (files.length == 0)
    {
        return;
    }
    const img = document.getElementById('cropper-img');
    img.src = files[0]

    // //Tesseract.jsの実行
    // Tesseract
    //     //OCR機能を実行する際の読み込むファイルや言語を設定（言語はlang: ''の中身をengやjpnに変更することで英語や日本語にすることが可能です）
    //     .recognize(files[0], { lang: 'eng', tessedit_pageseg_mode: "RAW_LINE" })
    //     .then(function (result) {
    //         // 結果の表示
    //         //テキストエリアを指定
    //         let textarea = document.getElementById("ocrResult");
    //         //テキストエリアに結果を埋め込む
    //         textarea.value = result.text;
    //     });
}
//関数宣言終了


//関数を実行
//ファイル選択ボタンを指定して宣言
const elm = document.getElementById('uploader');
//ファイルの中に写真が追加されたらrecognize関数を実行
elm.addEventListener('change', recognize);