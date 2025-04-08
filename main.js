const chart1 = new Chart(document.querySelector('#chart1'), {
    type: 'doughnut',
    data: {
        labels: [
            'Игрушки',
            'Одежда',
            'Коляски',
            'Питание',
            'Гигиена',
            'Аксессуары'
        ],
        datasets: [{
            label: 'Продажи',
            data: [500, 300, 150, 200, 100, 80],
            backgroundColor: [
                '#A8DADC',
                '#457B9D',
                '#1D3557',
                '#CDEAC0',
                '#74C69D',
                '#2D6A4F'
            ],
            hoverOffset: 4
        }]
    }
});


const data = {
    labels: [
        'Удобство навигации',
        'Скорость загрузки',
        'Ассортимент товаров',
        'Уровень цен',
        'Качество поддержки',
        'Процесс оплаты'
    ],
    datasets: [{
        label: 'Оценка UX',
        data: [9, 7, 8, 6, 7, 8],
        fill: true,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgb(75, 192, 192)',
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)'
    }, {
        label: 'Оценка конкурента',
        data: [6, 5, 7, 8, 5, 6],
        fill: true,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
};

const chart2 = new Chart(document.querySelector('#chart2'), {
    type: 'radar',
    data: data,
    options: {
        elements: {
            line: {
                borderWidth: 3
            }
        }
    },
});
