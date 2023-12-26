document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Jimmyzm0/star/main/tk1.csv');
        const data = await response.text();
        const blessings = data.split('\n');
        const container = document.querySelector('.grid-container');

        if (container) {
            blessings.forEach(blessing => {
                if (blessing.trim()) {
                    const div = document.createElement('div');
                    div.classList.add('grid-item');
                    div.textContent = blessing;
                    container.appendChild(div);
                }
            });
        } else {
            console.error('Container element not found');
        }
    } catch (error) {
        console.error('Error:', error);
        // 这里可以添加用户界面的错误处理，例如显示一个错误消息
    }
});
