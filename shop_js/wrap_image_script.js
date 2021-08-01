function canvas1() {
  var canvas = document.getElementById("canvas1");
  var ctx = canvas.getContext("3d");

  var productImg = new Image();
  productImg.onload = function() {
    var iw = productImg.width;
    var ih = productImg.height;
    console.log("height");

    canvas.width = iw;
    canvas.height = ih;

    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
      0, 0, iw, ih);
    loadUpperIMage()
  };

  productImg.src = "Preparing-Mug-Mockup-Blank-Image/Preparing-Mug-Mockup-Blank-Image_Transparent.png"


  function loadUpperIMage() {
    var img = new Image();


    img.src = "Image1.png"
    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      var xOffset = 130, //left padding
        yOffset = 140; //top padding

      //alert(ih)
      var a = 150.0; //image width
      var b = 11; //round ness

      var scaleFactor = iw / (9 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 9, ih, X + xOffset, y + yOffset, 1, 174);
      }
    };
  }

};

function canvas2() {

  var canvas = document.getElementById("canvas2");
  var ctx = canvas.getContext("2d");

  var productImg = new Image();
  productImg.onload = function() {
    var iw = productImg.width;
    var ih = productImg.height;
    console.log("height");

    canvas.width = iw;
    canvas.height = ih;

    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
      0, 0, iw, ih);
    loadUpperIMage()
  };


  productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/h_350/canter_handle_cup_xyxhdd.jpg"

  function loadUpperIMage() {
    var img = new Image();

    img.src = "Image1.png"

    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      // alert(iw)

      var xOffset = 101, //left padding
        yOffset = 110; //top padding

      var a = 75.0; //image width
      var b = 10; //round ness

      var scaleFactor = iw / (4 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 3, ih, X + xOffset, y + yOffset, 1, 174);

      }
    };
  }

};

function canvas3() {

  var canvas = document.getElementById("canvas3");
  var ctx = canvas.getContext("2d");

  var productImg = new Image();
  productImg.onload = function() {
    var iw = productImg.width;
    var ih = productImg.height;

    canvas.width = iw;
    canvas.height = ih;

    ctx.drawImage(productImg, 0, 0, productImg.width, productImg.height,
      0, 0, iw, ih);
    loadUpperIMage()
  };

  productImg.src = "http://res.cloudinary.com/pussyhunter/image/upload/h_350/right_handle_cup_dsdhr7.jpg"


  function loadUpperIMage() {
    var img = new Image();

    img.src = "Image1.png"

    img.onload = function() {

      var iw = img.width;
      var ih = img.height;

      //alert(iw)

      var xOffset = 102, //left padding
        yOffset = 110; //top padding

      var a = 75.0; //image width
      var b = 10; //round ness

      var scaleFactor = iw / (3 * a);

      // draw vertical slices
      for (var X = 0; X < iw; X += 1) {
        var y = b / a * Math.sqrt(a * a - (X - a) * (X - a)); // ellipsis equation
        ctx.drawImage(img, X * scaleFactor, 0, iw / 1.5, ih, X + xOffset, y + yOffset, 1, 174);
      }
    };
  }

};

setTimeout(function() {
  canvas1()
}, 1000);
setTimeout(function() {
  canvas2()
}, 2000);
setTimeout(function() {
  canvas3()
}, 3000);