// Description: 전역 메소드를 정의하는 플러그인 파일입니다.

export default ({ app }, inject) => {

  // (임시) 미개발 페이지 안내창
  const checkLink = (to) => {
    if (to === 'noPage') alert('준비중 입니다.');
  }
  inject('checkLink', checkLink)


}
