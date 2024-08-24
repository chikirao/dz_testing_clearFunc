module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true, // Добавляем поддержку Jest
  },
  extends: [
    'airbnb-base',
    'plugin:jest/recommended', // Подключаем правила для Jest
  ],
  plugins: [
    'jest', // Подключаем плагин Jest
  ],
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
