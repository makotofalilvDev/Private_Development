$(function () {
  // Drinkタブ選択時(デフォルト表示)
  $('#drink-btn').on('click', function() {

    $('.menu-type-tab-drink').css('display', 'block');
    $('.menu-type-tab-food').css('display', 'none');

    $('#drink-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#foods-btn').css('border-bottom', '2px solid #000000');
    $('#coffee-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#tea-btn').css('border-bottom', '2px solid #000000');
    $('#other-btn').css('border-bottom', '2px solid #000000');

    $('#Drink-Coffee').css('display', 'block');
    $('#Drink-Tea').css('display', 'none');
    $('#Drink-Other').css('display', 'none');
    $('#Food-Sand').css('display', 'none');
    $('#Food-Pasta').css('display', 'none');
  });
  // Foodタブ選択時(デフォルト表示)
  $('#foods-btn').on('click', function() {

    $('.menu-type-tab-drink').css('display', 'none');
    $('.menu-type-tab-food').css('display', 'block');

    $('#drink-btn').css('border-bottom', '2px solid #000000');
    $('#foods-btn').css('border-bottom', '2px solid #FFF1BD');
  
    $('#sand-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#pasta-btn').css('border-bottom', '2px solid #000000');

    $('#Drink-Coffee').css('display', 'none');
    $('#Drink-Tea').css('display', 'none');
    $('#Drink-Other').css('display', 'none');
    $('#Food-Sand').css('display', 'block');
    $('#Food-Pasta').css('display', 'none');
  });


  // Coffee押下時
  $('#coffee-btn').on('click', function() {
    console.log('coffee clicked');
    $('#Drink-Coffee').css('display', 'block');
    $('#Drink-Tea').css('display', 'none');
    $('#Drink-Other').css('display', 'none');

    $('#drink-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#foods-btn').css('border-bottom', '2px solid #000000');
    $('#coffee-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#tea-btn').css('border-bottom', '2px solid #000000');
    $('#other-btn').css('border-bottom', '2px solid #000000');

  });
  // Tea押下時
  $('#tea-btn').on('click', function() {
    console.log('tea clicked');
    $('#Drink-Coffee').css('display', 'none');
    $('#Drink-Tea').css('display', 'block');
    $('#Drink-Other').css('display', 'none');
    
    $('#drink-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#foods-btn').css('border-bottom', '2px solid #000000');
    $('#coffee-btn').css('border-bottom', '2px solid #000000');
    $('#tea-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#other-btn').css('border-bottom', '2px solid #000000');
    
  });
  // Other押下時 
  $('#other-btn').on('click', function() {
    console.log('other clicked');
    $('#Drink-Coffee').css('display', 'none');
    $('#Drink-Tea').css('display', 'none');
    $('#Drink-Other').css('display', 'block');
    
    $('#drink-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#foods-btn').css('border-bottom', '2px solid #000000');
    $('#coffee-btn').css('border-bottom', '2px solid #000000');
    $('#tea-btn').css('border-bottom', '2px solid #000000');
    $('#other-btn').css('border-bottom', '2px solid #FFF1BD');
    
  });
  // Sand押下時
  $('#sand-btn').on('click', function() {
    console.log('sand clicked');
    $('#Food-Sand').css('display', 'block');
    $('#Food-Pasta').css('display', 'none');
    
    $('#drink-btn').css('border-bottom', '2px solid #000000');
    $('#foods-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#sand-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#pasta-btn').css('border-bottom', '2px solid #000000');
    
  });
  // Pasta押下時
  $('#pasta-btn').on('click', function() {
    console.log('pasta clicked');
    $('#Food-Sand').css('display', 'none');
    $('#Food-Pasta').css('display', 'block');
    
    $('#drink-btn').css('border-bottom', '2px solid #000000');
    $('#foods-btn').css('border-bottom', '2px solid #FFF1BD');
    $('#sand-btn').css('border-bottom', '2px solid #000000');
    $('#pasta-btn').css('border-bottom', '2px solid #FFF1BD');
    
  });

  // 日付表示用
  class InputDateDefault extends HTMLInputElement {
    connectedCallback() {
        let now = new Date();
        this.value = now.toLocaleDateString('sv-SE');
    }
  }
  customElements.define('default-date', InputDateDefault, { extends: 'input', });
  
});