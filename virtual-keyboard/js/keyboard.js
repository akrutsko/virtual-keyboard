import keys from './keys.js';

const keyboard = document.querySelector('.keyboard');

keys.forEach((key) => {
  const keyElement = document.createElement('button');
  keyElement.className = 'key';
  keyElement.classList.add(key.class);
  keyElement.textContent = key.key;
  keyboard.append(keyElement);
});
