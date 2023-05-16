const URL = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1';

const setupVideo = () => {

  const video = document.querySelector('.video');
  const media = video.querySelector('.video__media');
  const button = video.querySelector('.video__button');

  button.addEventListener('click', () => {
    let iframe = createIframe();
    media.remove();
    button.remove();
    video.appendChild(iframe);
  });
};

const createIframe = () => {
  let iframe = document.createElement('iframe');
  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('src', URL);

  return iframe;
};

export {setupVideo};
