// script 안에 작성된 코드는 페이지 로드시 1회만 실행된다.
// 유저가 선택할 때 마다 코드를 실행 해줘야 한다. => 이벤트 리스너
// $('.form-one').on('input', function(){
//   // 1. 유저가 셔츠를 골랐을 때 form-two 보여주기
//   let formOne = $(this).val();
//   let formTwo = $('.select-input').eq(1);

//   if(formOne == '셔츠') {
//     formTwo.removeClass('form-two');
//   } else {
//    formTwo.addClass('form-two');
//   }
// })

let inputs = document.querySelectorAll('.select-input');

inputs[0].addEventListener('input', function(){
  let formOne = this.value;
  let formTwo = inputs[1];

  if(formOne == '셔츠') {
    formTwo.classList.remove('form-hide');
    formTwo.innerHTML = `
      <option>90</option>
      <option>95</option>
    `
  } else if(formOne == '바지') {
    formTwo.classList.remove('form-hide');
    formTwo.innerHTML = ''
    let pants = `
      <option>26</option>
      <option>27</option>
    `
    formTwo.insertAdjacentHTML('beforeend', pants);
  } else {
    formTwo.classList.add('form-hide');
  } 
})


// 미리 숨겨놨다가 보여주는 방색 => 확장성 부족
// 자바스크립트로 html 생성하기
let pTag = document.createElement('p');
pTag.innerHTML = 'Hello';
pTag.classList.add('active');
document.querySelector('.box').appendChild(pTag);

// 자바스크립트로 html 생성법 2 (간단한 문법)
let txt = '<h2 class="hi">안녕하세요!</h2>';
// insertAdjacentElement => 문자형 html 넣어주는 함수
// 첫번째 파라미터 : 추가 할 위치 (안쪽 맨 밑)
// 두번째 마라미터 : 추가할 html 문자
document.querySelector('.box').insertAdjacentHTML('beforeend', txt);

// 내용 추가가 아닌 변경하고 싶다면 innerHTML 사용

// 1. .createElement() => 성능적으로는 더 빠름
// 2. .insertAdjacentHTML()


// 바지 선택 했을 때 26, 27 option 나오게 작성 (JS로 HTML 추가)
// inputs[0].addEventListener('input', function(){
//   let formOne = this.value;

//   if(formOne == '바지') {
//     let opt1 = '<option>26</option>';
//     let opt2 = '<option>27</option>';
//     document.querySelectorAll('.select-input')[2].insertAdjacentHTML('beforeend', opt1);
//     document.querySelectorAll('.select-input')[2].insertAdjacentHTML('beforeend', opt2);
//     document.querySelectorAll('.select-input')[2].classList.remove('form-hide');
//   } else {
//     document.querySelectorAll('.select-input')[2].classList.add('form-hide');
//   }
// })
