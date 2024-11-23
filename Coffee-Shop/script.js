// event.html
var event_name = document.getElementsByName('event-name');
var event_email = document.getElementsByName('event-email');
var event_phone = document.getElementsByName('event-phone');
var event_date = document.getElementsByName('event-date');
var event_time = document.getElementsByName('event-time');
var event_guest = document.getElementsByName('event-guest');
var event_location = document.getElementsByName('event-location');
var event_other = document.getElementsByName('event-other');
var event_btn = document.getElementById('event-btn');
const MAIL_VALIDATION = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
const PHONE_VALIDATION = /^[0-9]$/;


//エラー有無チェック共通関数化
function checkErrorStatus (objError) {
  let num = 0;
  let errorCount = 0;
  let checkBool = true;
  objError.inputError.forEach(function(error){
    if (error == false) {
      console.log(objError.errorMsg[num])
      errorCount++;
    }
    num++;
  })
  if (errorCount > 0) {
    checkBool = false;
  }
  console.log('no issue detected');
  return checkBool;
}


function eventCheckValue(){

  var result = EventParamCheck();

  //エラー有無チェック共通関数呼び出し
  if (checkErrorStatus(result) == false) {
    return false
  }
}

function EventParamCheck () {

  var inputError = [true, true, true, true, true, true, true, true];
  var errorMsg = ['','','','','','','',''];

  //Name
  if (event_name[0].value == '') {
    inputError[0] = false;
    errorMsg[0] = 'Name is mandatory';
  }
  //Emails
  if (event_email[0].value == '') {
    inputError[1] = false;
    errorMsg[1] = 'Email is mandatory';
  }
  //アドレス正規表現チェック
  if (!MAIL_VALIDATION.test(event_email[0].value)) {
    inputError[1] = false;
    errorMsg[1] = errorMsg[1] + 'Email format is inappropriate';    
  }
  //Phone
  if (event_phone[0].value == '') {
    inputError[2] = false;
    errorMsg[2] = 'Phone is mandatory';
  }
  //Date
  if (event_date[0].value == '') {
    inputError[3] = false;
    errorMsg[3] = 'Date is mandatory';
  }
  //Time
  if (event_time[0].value == '') {
    inputError[4] = false;
    errorMsg[4] = 'Time is mandatory';
  }
  //Guest
  if (event_guest[0].value == '') {
    inputError[5] = false;
    errorMsg[5] = 'Guest Number is mandatory';
  }
  //Location
  if (event_location[0].value == '') {
    inputError[6] = false;
    errorMsg[6] = 'Location is mandatory';
  }
  //Other
  if (event_other[0].value == '') {
    inputError[7] = false;
    errorMsg[7] = 'Msg is mandatory';
  }
  // オブジェクトでエラー判定とメッセージを返す
  checkResult = {
    inputError: inputError,
    errorMsg: errorMsg
  }
  return checkResult;
}

// hire.html
var hire_name = document.getElementsByName('hire-name');
var hire_email = document.getElementsByName('hire-email');
var hire_phone = document.getElementsByName('hire-phone');
var hire_position = document.getElementsByName('hire-position');
var hire_location = document.getElementsByName('hire-location');
var hire_hour = document.getElementsByName('hire-hour');
var hire_availability = document.getElementsByName('hire-availability');
var hire_resume = document.getElementsByName('hire-resume');

function hireCheckValue () {
  var hire_result = hireParamCheck();

  //エラー有無チェック共通関数呼び出し
  if (checkErrorStatus(hire_result) == false) {
    return false
  }
}

function hireParamCheck () {
  var inputError = [true, true, true, true, true, true, true, true];
  var errorMsg = ['','','','','','','',''];

  //Name
  if (hire_name[0].value == '') {
    inputError[0] = false;
    errorMsg[0] = 'Name is mandatory';
  }
  //email
  if (hire_email[0].value == '') {
    inputError[1] = false;
    errorMsg[1] = 'Email is mandatory';
  }
  //アドレス正規表現チェック
  if (!MAIL_VALIDATION.test(hire_email[0].value)) {
    inputError[1] = false;
    errorMsg[1] = errorMsg[1] + 'Email format is inappropriate';    
  }
  //phone
  if (hire_phone[0].value == '') {
    inputError[2] = false;
    errorMsg[2] = 'Phone is mandatory';
  }
  //PhoneNumber正規表現チェック
  if (!PHONE_VALIDATION.test(hire_phone[0])) {
    inputError[2] = false;
    errorMsg[2] = errorMsg[2] + 'Phone format is inappropriate';
  }
  //position
  if (hire_position[0].value == '') {
    inputError[3] = false;
    errorMsg[3] = 'Position is mandatory';
  }
  //location
  if (hire_location[0].value == '') {
    inputError[4] = false;
    errorMsg[4] = 'Location is mandatory';
  }
  //hours
  if (hire_hour[0].value == '') {
    inputError[5] = false;
    errorMsg[5] = 'Desired Hours is mandatory';
  }
  //availability
  if (hire_availability[0].value == '') {
    inputError[6] = false;
    errorMsg[6] = 'Availability is mandatory';
  }
  //resume
  if (hire_resume[0].value == '') {
    inputError[7] = false;
    errorMsg[7] = 'Resume is mandatory';
  }

  // オブジェクトでエラー判定とメッセージを返す
  checkResult = {
    inputError: inputError,
    errorMsg: errorMsg
  }
  return checkResult;
}


//contact.html
var contact_name = document.getElementsByName('contact-name');
var contact_email = document.getElementsByName('contact-email');
var contact_category = document.getElementsByName('contact-category');
var contact_subject = document.getElementsByName('contact-subject');
var contact_msg = document.getElementsByName('contact-msg');

function contactCheckValue () {
  var contact_result = contactParamCheck();

  //エラー有無チェック共通関数呼び出し
  if (checkErrorStatus(contact_result) == false) {
    return false
  }
}

function contactParamCheck () {
  var inputError = [true, true, true, true, true];
  var errorMsg = ['','','','',''];

  //Name
  if (contact_name[0].value == '') {
    inputError[0] = false;
    errorMsg[0] = 'Name is mandatory';
  }
  //Email
  if (contact_email[0].value == '') {
    inputError[1] = false;
    errorMsg[1] = 'Email is mandatory';
  }
  //アドレス正規表現チェック
  if (!MAIL_VALIDATION.test(contact_email[0].value)) {
    inputError[1] = false;
    errorMsg[1] = errorMsg[1] + 'Email format is inappropriate';    
  }
  //Category
  if (contact_category[0].value == '') {
    inputError[2] = false;
    errorMsg[2] = 'Category is mandatory';
  }
  //Category
  if (contact_subject[0].value == '') {
    inputError[3] = false;
    errorMsg[3] = 'Subject is mandatory';
  }
  //Message
  if (contact_msg[0].value == '') {
    inputError[4] = false;
    errorMsg[4] = 'Message is mandatory';
  }

  // オブジェクトでエラー判定とメッセージを返す
  checkResult = {
    inputError: inputError,
    errorMsg: errorMsg
  }
  return checkResult;
}


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


//   $("#event-btn").on("click",function(){
//     let num = false;
//     if(false == false){
//       console.log('wow');
//         return false;
//     }
// });
  
});