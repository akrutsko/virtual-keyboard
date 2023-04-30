import keys from './keys.js';
import { getLanguage } from './local-storage.js';

const keyboard = document.querySelector('.keyboard');

keys.forEach((key) => {
  const keyElement = document.createElement('button');
  keyElement.className = 'key';
  keyElement.dataset.code = key.code;

  if (key.class) {
    keyElement.classList.add(key.class);
  }
  if (key.shiftEn) {
    keyElement.dataset.shiftEn = key.shiftEn;
  }
  if (key.keyRu) {
    keyElement.dataset.keyRu = key.keyRu;
  }
  if (key.shiftRu) {
    keyElement.dataset.shiftRu = key.shiftRu;
  }
  if (key.action) {
    keyElement.dataset.action = key.action;
  }

  const keyLanguage = getLanguage() === 'en' ? key.keyEn : key.keyRu;
  keyElement.textContent = keyLanguage || key.key;

  keyboard.append(keyElement);
});
