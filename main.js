const navigationBar = document.querySelector('.navigation');
console.log(navigationBar);

function scrollDown(event) {
  console.log(window.scrollY);

  if (window.scrollY >= 364) {
    navigationBar.classList.add('navfix');
  } else {
    navigationBar.classList.remove('navfix');
    git;
  }
}

window.addEventListener('scroll', scrollDown);
