onload = () => {
  let general_information = document.getElementById('general');
  let language_information = document.getElementById('language');
  let goal_information = document.getElementById('goal');

  //   마우스를 올릴때 애니메이션 실행되는 코드입니다.
  general_information.addEventListener('mouseenter', function () {
    general_information.classList.add('animate');
  });
  language_information.addEventListener('mouseenter', function () {
    language_information.classList.add('animate');
  });
  goal_information.addEventListener('mouseenter', function () {
    goal_information.classList.add('animate');
  });
  // 마우스를 떼었을때 애니메이션을 제거합니다.
  general_information.addEventListener('mouseleave', function () {
    general_information.classList.remove('animate');
  });
  language_information.addEventListener('mouseleave', function () {
    language_information.classList.remove('animate');
  });
  goal_information.addEventListener('mouseleave', function () {
    goal_information.classList.remove('animate');
  });
  // 마우스를 클릭하면 다른 페이지로 이동합니다.
  general_information.addEventListener('click', function () {
    window.location.href = 'general_information_hsw.html';
  });
  language_information.addEventListener('click', function () {
    window.location.href = 'general_information_hsw.html';
  });
  goal_information.addEventListener('click', function () {
    window.location.href = 'general_information_hsw.html';
  });
};
