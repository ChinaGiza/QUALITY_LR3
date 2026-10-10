document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');
    const output = document.getElementById('output');

    if (!btn || !output) return;

    let clickCount = 0;

    btn.addEventListener('click', () => {
        clickCount += 1;
        output.textContent = `Кнопка нажата ${clickCount} раз(а). Время: ${new Date().toLocaleTimeString('ru-RU')}`;
    });
});