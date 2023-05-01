const keys = document.querySelectorAll('.key');

function pressKey(event) {
  const options = {
    code: event.target.dataset.code,
    shiftKey: event.shiftKey || event.target.dataset.code.includes('Shift') || event.getModifierState('CapsLock'),
    ctrlKey: event.ctrlKey || event.target.dataset.code.includes('Control'),
    altKey: event.altKey || event.target.dataset.code.includes('Alt'),
  };

  const keyDownEvent = new KeyboardEvent('keydown', options);
  document.dispatchEvent(keyDownEvent);

  const keyUpEvent = new KeyboardEvent('keyup', options);
  document.dispatchEvent(keyUpEvent);
}

keys.forEach((key) => key.addEventListener('click', pressKey));
