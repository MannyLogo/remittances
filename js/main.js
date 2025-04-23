document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('nav');
    const missionSection = document.querySelector('#mission');

    window.addEventListener('scroll', () => {
        const missionTop = missionSection.getBoundingClientRect().top;
        const navHeight = nav.offsetHeight;

        if (missionTop <= navHeight) {
            nav.classList.add('scrolled'); // Add dark background
        } else {
            nav.classList.remove('scrolled'); // Remove dark background
        }
    });

    // Optional: Ensure the background changes immediately when clicking the nav link
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (link.getAttribute('href') === '#mission') {
                nav.classList.add('scrolled');
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const chartCanvas = document.getElementById('remittanceChart');
    if (chartCanvas) {
        const ctx = chartCanvas.getContext('2d');

        // Mock data
        const data = {
            labels: ['Mexico', 'Guatemala', 'El Salvador', 'Honduras', 'Dominican Republic'],
            datasets: [{
                label: 'Remittances (in billions)',
                data: [58, 18, 7, 5, 4], // Mock remittance amounts
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        };

        // Chart configuration
        const config = {
            type: 'bar', // Bar chart
            data: data,
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Remittances to Latin America (2024)'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        };

        // Render the chart
        new Chart(ctx, config);
    }
});
