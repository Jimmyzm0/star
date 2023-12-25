document.addEventListener('DOMContentLoaded', function () {
    fetch('https://raw.githubusercontent.com/your-username/your-repository/main/path/to/your/blessings.csv')
        .then(response => response.text())
        .then(data => {
            const blessings = data.split('\n');
            // 以下是将祝福语添加到网页的逻辑
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
