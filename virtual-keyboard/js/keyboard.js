const wrapper = document.createElement('div');
wrapper.className = 'wrapper';

const title = document.createElement('p');
title.className = 'title';
title.textContent = 'RSS Виртуальная клавиатура';

const textarea = document.createElement('textarea');
textarea.className = 'text';
textarea.rows = 5;
textarea.cols = 50;

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';

const os = title.cloneNode();
os.textContent = 'Клавиатура создана в операционной системе Windows';

const lang = title.cloneNode();
lang.textContent = 'Для переключения языка комбинация: левыe ctrl + alt';

wrapper.append(title);
wrapper.append(textarea);
wrapper.append(os);
wrapper.append(lang);

document.body.append(wrapper);
