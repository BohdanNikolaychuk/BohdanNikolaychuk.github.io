export default function animation() {
  //title animation
  const title = document.querySelector('.main__title');
  const strText = title.textContent;
  const splitText = strText.split('');
  title.textContent = '';
  for (let index = 0; index < splitText.length; index++) {
    title.innerHTML += '<span>' + splitText[index] + '</span>';
  }

  let char = 0;
  let timer = setInterval(ontick, 50);

  function ontick() {
    const span = document.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++;
    if (char > 17) {
      span.classList.add('purpe__span');
    }
    if (char === strText.length) {
      clearInterval(timer);
      timer = null;
    }
  }
}
