import { getLanguage, setLanguage } from './local-storage.js';
import { setKeyboardLayout, setUpperCase, setLowerCase } from './keyboard.js';

const textarea = document.querySelector('.text');

function keyDown(event) {
  if (!event.code) return;

  const key = document.querySelector(`[data-code=${event.code}]`);
  if (!key) return;

  key.classList.add('key_pressed');

  if (event.altKey && event.ctrlKey) {
    if (getLanguage() === 'en') {
      setLanguage('ru');

      if (!(event.shiftKey && !event.getModifierState('CapsLock'))) {
        setKeyboardLayout('keyRu');
      }
      if (event.shiftKey && !event.getModifierState('CapsLock')) {
        setKeyboardLayout('shiftRu');
      }
      if (event.shiftKey && event.getModifierState('CapsLock')) {
        setKeyboardLayout('shiftRu');
        setLowerCase();
      }
      if (!event.shiftKey && event.getModifierState('CapsLock')) {
        setKeyboardLayout('capsRu');
      }
    } else {
      setLanguage('en');

      if (!(event.shiftKey && !event.getModifierState('CapsLock'))) {
        setKeyboardLayout('keyEn');
      }
      if (event.shiftKey && !event.getModifierState('CapsLock')) {
        setKeyboardLayout('shiftEn');
      }
      if (event.shiftKey && event.getModifierState('CapsLock')) {
        setKeyboardLayout('shiftEn');
        setLowerCase();
      }
      if (!event.shiftKey && event.getModifierState('CapsLock')) {
        setKeyboardLayout('capsEn');
      }
    }
  } else if (event.shiftKey) {
    if (getLanguage() === 'en') {
      setKeyboardLayout('shiftEn');
    } else {
      setKeyboardLayout('shiftRu');
    }
    if (event.getModifierState('CapsLock') || event.code === 'CapsLock') {
      setLowerCase();
    } else {
      setUpperCase();
    }
  } else if (event.getModifierState('CapsLock')) {
    setUpperCase();
  } else {
    setLowerCase();
  }

  if (key.dataset.prevent) return;
  event.preventDefault();

  textarea.focus();
  const cursorStart = textarea.selectionStart;
  const cursorEnd = textarea.selectionEnd;
  if (event.code === 'Tab') {
    textarea.value = `${textarea.value.substring(0, cursorStart)}\t${textarea.value.substring(cursorEnd)}`;
  } else if (event.code !== 'AltLeft' && event.code !== 'AltRight') {
    textarea.value = `${textarea.value.substring(0, cursorStart)}${key.textContent}${textarea.value.substring(cursorEnd)}`;
  }
  textarea.selectionStart = cursorStart + 1;
  textarea.selectionEnd = textarea.selectionStart;
}

function keyUp(event) {
  if (!event.code) return;

  const key = document.querySelector(`[data-code=${event.code}]`);
  if (!key) return;

  if (!(event.code === 'CapsLock' && event.getModifierState('CapsLock'))) {
    key.classList.remove('key_pressed');
  }

  if (event.code.includes('Shift') && !event.getModifierState('CapsLock')) {
    if (getLanguage() === 'en') {
      setKeyboardLayout('keyEn');
    } else {
      setKeyboardLayout('keyRu');
    }
  } else if (event.code.includes('Shift') && event.getModifierState('CapsLock')) {
    if (getLanguage() === 'en') {
      setKeyboardLayout('capsEn');
    } else {
      setKeyboardLayout('capsRu');
    }
  } else if (event.code === 'CapsLock') {
    if (event.getModifierState('CapsLock')) {
      setUpperCase();
    } else {
      setLowerCase();
    }
  }
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);
