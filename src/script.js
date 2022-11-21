const inputUsername = document.querySelector('#username')
const successMessage = document.querySelector('.success-message')
const failureMessage = document.querySelector('.failure-message')

inputUsername.onkeyup = function () {
  if (isMoreThan4Length(inputUsername.value)) {
    successMessage.classList.remove('hide')
    failureMessage.classList.add('hide')
  } else {
    successMessage.classList.add('hide')
    failureMessage.classList.remove('hide')
  }
}

function isMoreThan4Length(value) {
  return value.length >= 4;
  // TODO : 동영상 강의를 보고 이 함수를 완성하세요.
}

//의사코드
// 비밀번호 키를 입력
// 비밀번호 확인에 키를 입력
// 두개 비교해서 맞으면 true, 틀리면 false
// true면 hide를 추가
// false면 hide를 삭제

// inputPassword에 입력 시 숫자나 영어가 아니면 메세지(영어나 숫자 써!)
// inputPassword에 입력 시 숫자나 영어가 아니면 메세지(영어나 숫자 써!)


const inputPassword = document.querySelector('#password')
const inputPasswordRe = document.querySelector('#password-retype') 
const passwordMessage = document.querySelector('.mismatch-message')
// const enOrNumOrStMessage = document.querySelector('.enOrNumOrSt')
// const enOrNumOrSt1 = document.querySelector('.enOrNumOrSt1')
// const enOrNumOrSt2 = document.querySelector('.enOrNumOrSt2')

function isMatch (password1, password2) {
  return password1 === password2
}

inputPasswordRe.onkeyup = function () {
  if(isMatch(inputPassword.value, inputPasswordRe.value)) {
    passwordMessage.classList.add('hide')
  } else {
    passwordMessage.classList.remove('hide')
  }
}

inputPassword.onkeyup = function () {
  if(isMatch(inputPassword.value, inputPasswordRe.value)) {
    passwordMessage.classList.add('hide')
  } else {
    passwordMessage.classList.remove('hide')
  }
}




