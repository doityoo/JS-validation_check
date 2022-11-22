//의사코드
// 비밀번호 키를 입력
// 비밀번호 확인에 키를 입력
// 두개 비교해서 맞으면 true, 틀리면 false
// true면 hide를 추가
// false면 hide를 삭제
// inputPassword에 입력 시 숫자나 영어가 아니면 메세지

const inputUsername = document.querySelector('#username')
const successMessage = document.querySelector('.success-message')
const failureMessage = document.querySelector('.failure-message')
const inputPassword = document.querySelector('#password')
const inputPasswordRe = document.querySelector('#password-retype')
const missPasswordMessage = document.querySelector('.mismatch-message')
const passwordMsg1 = document.querySelector('.enOrNumOrSt1')
const passwordMsg2 = document.querySelector('.enOrNumOrSt2')

function isMoreThan4Length(value) {
  return value.length >= 4;
}

inputUsername.onkeyup = function () {
  if (isMoreThan4Length(inputUsername.value)) {
    // console.log("통과")
    successMessage.classList.remove('hide')
    failureMessage.classList.add('hide')
  } else {
    // console.log("짧음")
    successMessage.classList.add('hide')
    failureMessage.classList.remove('hide')
  }
}

// 알파벳,숫자,특수문자 유효성 검사 함수(정규표현식)
function stPassword(str) {
  return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{3,}$/.test(str);
}

// 최소 8자리 이상 입력, 알파벳, 숫자, 특수문자 1개 이상 포함 입력
inputPassword.onkeyup = function () {
  if (inputPassword.value.length >= 8) {
    passwordMsg1.classList.add('hide')
  } else {
    passwordMsg1.classList.remove('hide')
  }
  if (stPassword(inputPassword.value)) {
    passwordMsg2.classList.add('hide')
  } else {
    passwordMsg2.classList.remove('hide')
  }
}

// 비밀번호 일치/불일치 체크
function isMatch(password1, password2) {
  return password1 === password2
}

inputPasswordRe.addEventListener('keyup', () => {
  if (isMatch(inputPassword.value, inputPasswordRe.value)) {
    console.log("비밀번호 일치")
    missPasswordMessage.classList.add('hide')
  } else {
    console.log("비밀번호 불일치")
    missPasswordMessage.classList.remove('hide')
  }
})




