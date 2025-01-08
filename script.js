function changeLanguage(language) {
  const content = document.getElementById('content');
  let text = '';

  if (language === 'uz') {
    text = `
      <p>Botimiz: <a href="https://t.me/XSpinUzBot" target="_blank">@XSpinUzBot</a></p>
      <p>Kanal: <a href="https://t.me/Xspin_News" target="_blank">@Xspin_News</a></p>
      <p>Guruh: <a href="https://t.me/Xspin_uz" target="_blank">@Xspin_uz</a></p>
      <p>Yaratuvchi: <a href="https://t.me/ulashevvv" target="_blank">@ulashevvv</a></p>
    `;
  } else if (language === 'ru') {
    text = `
      <p>Наш бот: <a href="https://t.me/XSpinUzBot" target="_blank">@XSpinUzBot</a></p>
      <p>Канал: <a href="https://t.me/Xspin_News" target="_blank">@Xspin_News</a></p>
      <p>Группа: <a href="https://t.me/Xspin_uz" target="_blank">@Xspin_uz</a></p>
      <p>Создатель: <a href="https://t.me/ulashevvv" target="_blank">@ulashevvv</a></p>
    `;
  } else if (language === 'en') {
    text = `
      <p>Our Bot: <a href="https://t.me/XSpinUzBot" target="_blank">@XSpinUzBot</a></p>
      <p>Channel: <a href="https://t.me/Xspin_News" target="_blank">@Xspin_News</a></p>
      <p>Group: <a href="https://t.me/Xspin_uz" target="_blank">@Xspin_uz</a></p>
      <p>Creator: <a href="https://t.me/ulashevvv" target="_blank">@ulashevvv</a></p>
    `;
  }

  content.innerHTML = text;
}