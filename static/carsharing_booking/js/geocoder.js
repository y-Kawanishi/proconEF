window.onload = function getAddress(){
  
  //緯度・経度をLatLngクラスに変換します。
  var latLngInput = new google.maps.LatLng(idoInput, keidoInput);

  //Google Maps APIのジオコーダを使います。
  var geocoder = new google.maps.Geocoder();
  
  //ジオコーダのgeocodeを実行します。
  //第１引数のリクエストパラメータにlatLngプロパティを設定します。
  //第２引数はコールバック関数です。取得結果を処理します。
  geocoder.geocode(
    {
      latLng: latLngInput
    },
    function(results, status) {
      
      var address = "";
      
      if (status == google.maps.GeocoderStatus.OK) {
      //取得が成功した場合
        
        //住所を取得します。
        address = results[0].formatted_address.replace(/^日本、/, '');
        
      } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
        alert("住所が見つかりませんでした。");
      } else if (status == google.maps.GeocoderStatus.ERROR) {
        alert("サーバ接続に失敗しました。");
      } else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
        alert("リクエストが無効でした。");
      } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
        alert("リクエストの制限回数を超えました。");
      } else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
        alert("サービスが使えない状態でした。");
      } else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
        alert("原因不明のエラーが発生しました。");
      }
      
      //住所の結果表示をします。
      document.getElementById('addressOutput').value = address;
      target1 = document.getElementById("addressOutput");
      target1.innerHTML = address;
      document.getElementById('addressPush').value = address;
      target2 = document.getElementById("addressPush");
      target2.innerHTML = address;
    });

}
