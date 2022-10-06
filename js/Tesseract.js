const recognize = function (evt) {
    const files = evt.target.files;
}
const elm = document.getElementById('uploader');
elm.addEventListener('change', recognize);


//使う変数の宣言
let importImage;
let cropperImage;
let cropButton;
let cropper;
let resultImage;
let resultImageURL;
//この画面がロードされたときに実行　←ここを変える
window.onload = function () {
    //IDで要素を取得
    importImage = document.getElementById("importImage");
    //importImageの中身が変わったときにupdateImage関数を実行
    importImage.onchange = updateImage;
    //IDで要素を取得
    cropperImage = document.getElementById("cropperImage");
    //cropperImageの部分の設定
    cropper = new Cropper(cropperImage, {
        viewMode: 1
    });
    //トリミング結果の埋め込み
    resultImage = document.getElementById("resultImage");
}

//以下,使う関数の宣言と設定
//トリミングをする関数
function crop() {
    //crop関数を実行して切り取った画像を取得し,resultImageに埋め込む
    resultImageURL = cropper.getCroppedCanvas().toDataURL();
    //srcの設定
    resultImage.src = resultImageURL;
}
//画像データを埋め込んだり置き換えたりする関数
function updateImage(image) {
    //ファイルの読み込み
    const reader = new FileReader();
    reader.onload = function (imageURL) {
        //cropperの中身を置き換える
        cropper.replace(imageURL.target.result);
    }
    if (image.target.files[0])
    {
        reader.readAsDataURL(image.target.files[0]);
    }

}

function readbtnclick() {
    Tesseract
        .recognize(files[0], { lang: 'eng', tessedit_pageseg_mode: "RAW_LINE" })
        .then(function (result) {
            // 結果の表示
            //テキストエリアを指定
            let textarea = document.getElementById("ocrResult");
            //テキストエリアに結果を埋め込む
            textarea.value = result.text;
        });
}