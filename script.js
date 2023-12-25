document.addEventListener('DOMContentLoaded', function () {
    fetch('https://raw.githubusercontent.com/Jimmyzm0/star/main/%E7%A5%9D%E7%A6%8F%E8%AA%9E.csv')
        .then(response => response.text())
        .then(data => {
            const blessings = data.split('\n');
            const container = document.querySelector('.grid-container');
            blessings.forEach(blessing => {
                if (blessing.trim()) {
                    const div = document.createElement('div');
                    div.classList.add('grid-item');
                    div.textContent = blessing;
                    container.appendChild(div);
                }
            });
        })
        .catch(error => console.error('Error:', error));
});
