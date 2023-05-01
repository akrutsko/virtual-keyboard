const languageKey = 'language';

function getLanguage() {
  return localStorage.getItem(languageKey) || 'en';
}

function setLanguage(language) {
  localStorage.setItem(languageKey, language);
}

export { getLanguage, setLanguage };
