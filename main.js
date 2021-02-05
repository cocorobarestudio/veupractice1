var btnLoad = document.querySelector("#load");
btnLoad.addEventListener("click", function (event) {
  //ツボコツp.165【手順1】XMLHttpRequestオブジェクトのインスタンス作成
  var xmlHttpRequest = new XMLHttpRequest();
  //【手順２】通信状態の変化を監視するイベントハンドラ
  xmlHttpRequest.onreadystatechange = function () {
    //レスポンスの受信が正常に完了した時
    if (this.readyState == 4) {
      console.log(this.readyState, this.response);
    }
  };
  //【手順3】レスポンスの形式を指定する
  xmlHttpRequest.responseType = "json";
  //【手順4】リクエストメソッドと読み込むファイルのパスを指定する
  xmlHttpRequest.open("GET", "products.json");
  //【手順5】リクエストを送信する（非同期通信を開始する）
  xmlHttpRequest.send();
});
