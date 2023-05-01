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
  if (key.keyEn) {
    keyElement.dataset.keyEn = key.keyEn;
  }
  if (key.shiftEn) {
    keyElement.dataset.shiftEn = key.shiftEn;
  }
  if (key.capsEn) {
    keyElement.dataset.capsEn = key.capsEn;
  }
  if (key.keyRu) {
    keyElement.dataset.keyRu = key.keyRu;
  }
  if (key.shiftRu) {
    keyElement.dataset.shiftRu = key.shiftRu;
  }
  if (key.capsRu) {
    keyElement.dataset.capsRu = key.capsRu;
  }
  if (key.prevent) {
    keyElement.dataset.prevent = key.prevent;
  }

  const keyLanguage = getLanguage() === 'en' ? key.keyEn : key.keyRu;
  keyElement.textContent = keyLanguage || key.key;

  keyboard.append(keyElement);
});

const keyElements = document.querySelectorAll('[data-key-en]');

export function setKeyboardLayout(data) {
  keyElements.forEach((keyElement) => {
    const keyText = keyElement;
    if (keyElement.dataset[data]) {
      keyText.textContent = keyElement.dataset[data];
    }
  });
}

export function setUpperCase() {
  keyElements.forEach((keyElement) => {
    const keyText = keyElement;
    keyText.textContent = keyElement.textContent.toUpperCase();
  });
}

export function setLowerCase() {
  keyElements.forEach((keyElement) => {
    const keyText = keyElement;
    keyText.textContent = keyElement.textContent.toLowerCase();
  });
}
