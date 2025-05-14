document.addEventListener('DOMContentLoaded', () => {
    const serviceBoard = document.querySelector('#service-board');
    const exploreButton = document.getElementById('explore-services');

    const services = [
        {
            title: 'Cloud Services',
            shortTitle: 'Cloud Solutions',
            description: 'Transform your business with our comprehensive cloud solutions.',
            features: [
                'Cloud Migration & Strategy',
                'AWS & Azure Solutions',
                'Cloud Security & Compliance',
                '24/7 Cloud Monitoring'
            ]
        },
        {
            title: 'Full Stack Development',
            shortTitle: 'Full Stack',
            description: 'End-to-end development solutions for modern applications.',
            features: [
                'Custom Web Applications',
                'Mobile App Development',
                'API Development',
                'Database Design'
            ]
        },
        {
            title: 'AI Services',
            shortTitle: 'AI Solutions',
            description: 'Leverage the power of artificial intelligence for your business.',
            features: [
                'Machine Learning Solutions',
                'Natural Language Processing',
                'Computer Vision',
                'AI Strategy Consulting'
            ]
        },
        {
            title: 'Marketing Services',
            shortTitle: 'Digital Marketing',
            description: 'Digital marketing solutions to grow your online presence.',
            features: [
                'SEO Optimization',
                'Social Media Marketing',
                'Content Strategy',
                'Analytics & Reporting'
            ]
        },
        {
            title: 'Small Project Services',
            shortTitle: 'Small Projects',
            description: 'Quick and efficient solutions for smaller projects.',
            features: [
                'Website Maintenance',
                'Technical Support',
                'Performance Optimization',
                'Security Updates'
            ]
        }
    ];

    function createServiceCard(service) {
        const card = document.createElement('div');
        card.className = 'service-card';
        
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-front">
                    <div class="card-front-content">
                        ${service.shortTitle}
                    </div>
                </div>
                <div class="card-back">
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-description">${service.description}</p>
                    <ul class="service-features">
                        ${service.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        return card;
    }

    function initializeServices() {
        serviceBoard.innerHTML = '';
        services.forEach(service => {
            const card = createServiceCard(service);
            serviceBoard.appendChild(card);
        });
    }

    exploreButton.addEventListener('click', () => {
        initializeServices();
        exploreButton.style.display = 'none';
    });
});
