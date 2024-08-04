$(function () {

  // quiz.html

  // 海のいきものクイズ タブ選択時
  $('#cetegory-sea-living').on('click', function() {
    $('#quiz-sea-living').css('display', 'block');
    $('#quiz-sea-clean').css('display', 'none');
    $('#quiz-plastic-pollution').css('display', 'none');
    $('#quiz-sea-env').css('display', 'none');
  });
  // 海岸そうじクイズ タブ選択時
  $('#cetegory-sea-clean').on('click', function() {
    $('#quiz-sea-living').css('display', 'none');
    $('#quiz-sea-clean').css('display', 'block');
    $('#quiz-plastic-pollution').css('display', 'none');
    $('#quiz-sea-env').css('display', 'none');
  });
  // プラスチック汚染のクイズ タブ選択時
  $('#cetegory-plastic-pollution').on('click', function() {
    $('#quiz-sea-living').css('display', 'none');
    $('#quiz-sea-clean').css('display', 'none');
    $('#quiz-plastic-pollution').css('display', 'block');
    $('#quiz-sea-env').css('display', 'none');
  });
  // 海の環境クイズ タブ選択時
  $('#cetegory-sea-env').on('click', function() {
    $('#quiz-sea-living').css('display', 'none');
    $('#quiz-sea-clean').css('display', 'none');
    $('#quiz-plastic-pollution').css('display', 'none');
    $('#quiz-sea-env').css('display', 'block');
  });

  // クイズ チェック処理
  $('input[class="quiz-radio"]').change(function() {
    if (this.name == "C1-ans-no1") {      
      // No1
      console.log("No1");
      if (this.value == "A") {
        $('#C1-rslt-no1-A').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C1-rslt-no1-B').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C1-rslt-no1-C').css('visibility', 'visible');
      }else {
        $('#C1-rslt-no1-D').css('visibility', 'visible');
      }
      $('input[name="C1-ans-no1"]').prop('disabled',true);
      // No2
    }else if (this.name == "C1-ans-no2") {
      console.log("No2");
      if (this.value == "A") {
        $('#C1-rslt-no2-A').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C1-rslt-no2-B').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C1-rslt-no2-C').css('visibility', 'visible');
      }else {
        $('#C1-rslt-no2-D').css('visibility', 'visible');
      }
      $('input[name="C1-ans-no2"]').prop('disabled',true);
      // No3
    }else if (this.name == "C1-ans-no3") {
      console.log("No3");
      if (this.value == "D") {
        $('#C1-rslt-no3-D').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C1-rslt-no3-B').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C1-rslt-no3-C').css('visibility', 'visible');
      }else {
        $('#C1-rslt-no3-A').css('visibility', 'visible');
      }
      $('input[name="C1-ans-no3"]').prop('disabled',true);
      // No4
    }else if (this.name == "C1-ans-no4") {
      console.log("No4");
      if (this.value == "B") {
        $('#C1-rslt-no4-B').css('visibility', 'visible');
      }else if (this.value == "D") {
        $('#C1-rslt-no4-D').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C1-rslt-no4-C').css('visibility', 'visible');
      }else {
        $('#C1-rslt-no4-A').css('visibility', 'visible');
      }
      $('input[name="C1-ans-no4"]').prop('disabled',true);
      // No5
    }else if (this.name == "C1-ans-no5") {
      console.log("No5");
      if (this.value == "A") {
        $('#C1-rslt-no5-A').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C1-rslt-no5-B').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C1-rslt-no5-C').css('visibility', 'visible');
      }else {
        $('#C1-rslt-no5-D').css('visibility', 'visible');
      }
      $('input[name="C1-ans-no5"]').prop('disabled',true);
      // No6
    }else if (this.name == "C2-ans-no1") {
      console.log("No6");
      if (this.value == "C") {
        $('#C2-rslt-no1-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C2-rslt-no1-B').css('visibility', 'visible');
      }else if (this.value == "D") {
        $('#C2-rslt-no1-D').css('visibility', 'visible');
      }else {
        $('#C2-rslt-no1-A').css('visibility', 'visible');
      }
      $('input[name="C2-ans-no1"]').prop('disabled',true);
    }
    // No7
    else if (this.name == "C2-ans-no2") {
      console.log("No7");
      if (this.value == "C") {
        $('#C2-rslt-no2-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C2-rslt-no2-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C2-rslt-no2-A').css('visibility', 'visible');
      }else {
        $('#C2-rslt-no2-D').css('visibility', 'visible');
      }
      $('input[name="C2-ans-no2"]').prop('disabled',true);
    }
    // No8
    else if (this.name == "C2-ans-no3") {
      console.log("No8");
      if (this.value == "C") {
        $('#C2-rslt-no3-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C2-rslt-no3-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C2-rslt-no3-A').css('visibility', 'visible');
      }else {
        $('#C2-rslt-no3-D').css('visibility', 'visible');
      }
      $('input[name="C2-ans-no3"]').prop('disabled',true);
    }
    // No9
    else if (this.name == "C2-ans-no4") {
      console.log("No5");
      if (this.value == "C") {
        $('#C2-rslt-no4-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C2-rslt-no4-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C2-rslt-no4-A').css('visibility', 'visible');
      }else {
        $('#C2-rslt-no4-D').css('visibility', 'visible');
      }
      $('input[name="C2-ans-no4"]').prop('disabled',true);
    }
    // No10
    else if (this.name == "C2-ans-no5") {
      console.log("No5");
      if (this.value == "C") {
        $('#C2-rslt-no5-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C2-rslt-no5-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C2-rslt-no5-A').css('visibility', 'visible');
      }else {
        $('#C2-rslt-no5-D').css('visibility', 'visible');
      }
      $('input[name="C2-ans-no5"]').prop('disabled',true);
    }
    // No11
    else if (this.name == "C3-ans-no1") {
      console.log("No11");
      if (this.value == "C") {
        $('#C3-rslt-no1-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C3-rslt-no1-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C3-rslt-no1-A').css('visibility', 'visible');
      }else {
        $('#C3-rslt-no1-D').css('visibility', 'visible');
      }
      $('input[name="C3-ans-no1"]').prop('disabled',true);
    }
    // No12
    else if (this.name == "C3-ans-no2") {
      console.log("No12");
      if (this.value == "B") {
        $('#C3-rslt-no2-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C3-rslt-no2-A').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C3-rslt-no2-C').css('visibility', 'visible');
      }else {
        $('#C3-rslt-no2-D').css('visibility', 'visible');
      }
      $('input[name="C3-ans-no2"]').prop('disabled',true);
    }
    // No13
    else if (this.name == "C3-ans-no3") {
      console.log("No13");
      if (this.value == "B") {
        $('#C3-rslt-no3-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C3-rslt-no3-A').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C3-rslt-no3-C').css('visibility', 'visible');
      }else {
        $('#C3-rslt-no3-D').css('visibility', 'visible');
      }
      $('input[name="C3-ans-no3"]').prop('disabled',true);
    }
    // No14
    else if (this.name == "C3-ans-no4") {
      console.log("No14");
      if (this.value == "B") {
        $('#C3-rslt-no4-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C3-rslt-no4-A').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C3-rslt-no4-C').css('visibility', 'visible');
      }else {
        $('#C3-rslt-no4-D').css('visibility', 'visible');
      }
      $('input[name="C3-ans-no4"]').prop('disabled',true);
    }
    // No15
    else if (this.name == "C3-ans-no5") {
      console.log("No15");
      if (this.value == "A") {
        $('#C3-rslt-no5-A').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C3-rslt-no5-B').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C3-rslt-no5-C').css('visibility', 'visible');
      }else {
        $('#C3-rslt-no5-D').css('visibility', 'visible');
      }
      $('input[name="C3-ans-no5"]').prop('disabled',true);
    }
    // No16
    else if (this.name == "C4-ans-no1") {
      console.log("No16");
      if (this.value == "B") {
        $('#C4-rslt-no1-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C4-rslt-no1-A').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C4-rslt-no1-C').css('visibility', 'visible');
      }else {
        $('#C4-rslt-no1-D').css('visibility', 'visible');
      }
      $('input[name="C4-ans-no1"]').prop('disabled',true);
    }
    // No17
    else if (this.name == "C4-ans-no2") {
      console.log("No17");
      if (this.value == "A") {
        $('#C4-rslt-no2-A').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C4-rslt-no2-B').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C4-rslt-no2-C').css('visibility', 'visible');
      }else {
        $('#C4-rslt-no2-D').css('visibility', 'visible');
      }
      $('input[name="C4-ans-no2"]').prop('disabled',true);
    }
    // No18
    else if (this.name == "C4-ans-no3") {
      console.log("No18");
      if (this.value == "C") {
        $('#C4-rslt-no3-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C4-rslt-no3-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C4-rslt-no3-A').css('visibility', 'visible');
      }else {
        $('#C4-rslt-no3-D').css('visibility', 'visible');
      }
      $('input[name="C4-ans-no3"]').prop('disabled',true);
    }
    // No19
    else if (this.name == "C4-ans-no4") {
      console.log("No19");
      if (this.value == "B") {
        $('#C4-rslt-no4-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C4-rslt-no4-A').css('visibility', 'visible');
      }else if (this.value == "C") {
        $('#C4-rslt-no4-C').css('visibility', 'visible');
      }else {
        $('#C4-rslt-no4-D').css('visibility', 'visible');
      }
      $('input[name="C4-ans-no4"]').prop('disabled',true);
    }
    // No20
    else if (this.name == "C4-ans-no5") {
      console.log("No20");
      if (this.value == "C") {
        $('#C4-rslt-no5-C').css('visibility', 'visible');
      }else if (this.value == "B") {
        $('#C4-rslt-no5-B').css('visibility', 'visible');
      }else if (this.value == "A") {
        $('#C4-rslt-no5-A').css('visibility', 'visible');
      }else {
        $('#C4-rslt-no5-D').css('visibility', 'visible');
      }
      $('input[name="C4-ans-no5"]').prop('disabled',true);
    }

  });

  // $('input[name="C1-ans-no1"]').change(function() {
    /*ちなみにチェックされたラジオボタンの情報はthisに入っている。
    下記はチェックされたラジオボタンのvalue値を取得できる。*/
    // console.log($(this).val());
// });


  // var r = document.getElementsByName('C1-ans-no1');

  // for (var i = 0; i < r.length; i++) {
  //   r[i].onchange = function() {        配列を取り出し一つ一つにonchangeを設定
  //     for (var j = 0; j < r.length; j++) {
  //        チェックされた場合の処理
  //       if (r[j].checked == true) {
          
  //         チェックされた選択肢の確認 
  //         console.log(r.item(j).value);
  //       }
  //     }
  //   }
  // }

});