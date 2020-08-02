$(function () {
  // ---------- gnav ----------
  const open = "open";
  $(".gnav_btn").on("click", function () {
    if (!$("span").hasClass(open)) {
      $("span").addClass(open);
      $("nav").stop().fadeIn(600);
    } else {
      $("span").removeClass(open);
      $("nav").stop().fadeOut(600);
    }
  });

  $(".gnav_link").on("click", function () {
    $("span").removeClass(open);
    $("nav").stop().fadeOut(600);
  });

  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    let windowWidth = $(window).width();

    // ---------- concept image animation ----------
    let imageHand = $(".image-hand").offset().top;
    if (
      scroll > imageHand / 3 &&
      scroll < imageHand * 1.2 &&
      windowWidth > 1024
    ) {
      $(".image-hand_cover").css({
        transform:
          "matrix(" +
          `${1 + scroll * 0.00009}` +
          ", 0, 0," +
          `${1 + scroll * 0.00009}` +
          ", 0, 0)",
      });

      $(".image-hand").css({
        transform:
          "matrix3d(" +
          "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0," +
          `${scroll * 0.06}` +
          ", 0, 1)",
      });
    } else if (windowWidth < 1024) {
      $(".image-hand_cover").css("transform", "");
      $(".image-hand").css("transform", "");
    }

    let imageFlower = $(".image-flower").offset().top;
    if (
      scroll > imageFlower / 3 &&
      scroll < imageFlower * 1.2 &&
      windowWidth > 1024
    ) {
      $(".image-flower").css({
        transform:
          "matrix3d(" +
          "1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0," +
          `${-scroll * 0.1}` +
          ", 0, 1)",
      });
    } else if (windowWidth < 1024) {
      $(".image-flower").css("transform", "");
    }

    // ---------- text animation ----------
    $(
      ".title,.ja,.en,.products-name,.products-price,.products-detail,dt,dd"
    ).each(function () {
      let t = $(this).offset().top;
      if (scroll > t - windowHeight) {
        $(this).addClass("animation");
      } else if (scroll < t - windowHeight) {
        $(this).removeClass("animation");
      }
    });
  });

  // ---------- check out ----------
  $(".checkout_btn").click(function () {
    let color = $(".color").val();
    let num = $(".num").val();
    let tax = Math.round(num * 600 + 300 * 1.1);

    $(".checkout__color").text("カラー：" + color);
    $(".checkout__num").text("個数：" + num);
    $(".checkout__total").text("合計：" + tax + "円");
    $(".checkout").fadeIn(200);
  });

  $(".buy_btn").click(function () {
    let name = $("#checkout__name").val();
    let tel = $("#checkout__tel").val();
    let email = $("#checkout__email").val();
    let zipcode = $("#checkout__zipcode").val();
    let address = $("#checkout__address").val();

    if (name == "") {
      alert("名前を入力してください");
    } else if (tel == "") {
      alert("電話番号を入力してください");
    } else if (email == "") {
      alert("メールアドレスを入力してください");
    } else if (zipcode == "") {
      alert("郵便番号を入力してください");
    } else if (address == "") {
      alert("住所を入力してください");
    } else {
      alert("購入手続きが完了しました！");
      $("select").prop("selectedIndex", 0);
      $(".checkout").fadeOut(200);
    }
  });

  $(".close_btn").click(function () {
    $(".checkout").fadeOut(200);
  });

  // ---------- contact us ----------
  $(".confirm_btn").click(function () {
    let name = $("#name").val();
    let tel = $("#tel").val();
    let email = $("#email").val();
    let text = $("#text").val();

    if (name == "") {
      alert("名前を入力してください");
    } else if (tel == "") {
      alert("電話番号を入力してください");
    } else if (email == "") {
      alert("メールアドレスを入力してください");
    } else if (text == "") {
      alert("お問い合わせ内容を入力してください");
    } else {
      $(".confirm__name").text(name);
      $(".confirm__tel").text(tel);
      $(".confirm__email").text(email);
      $(".confirm__text").text(text);
      $(".confirm").fadeIn(200);
    }
  });

  $(".back_btn").on("click", function () {
    $(".confirm").fadeOut(200);
  });

  $(".submit_btn").on("click", function () {
    alert("送信されました！");
    $("#name").val("");
    $("#tel").val("");
    $("#email").val("");
    $("#text").val("");
    $(".confirm").fadeOut(200);
  });
});
