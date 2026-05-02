import servicesData from './data/services.js';

const servicesList = document.getElementById('services-list');

function renderServices() {
    servicesList.innerHTML = servicesData.map(service => `
        <div class="service-card">
            <span class="service-num">${service.number}</span>
            <h2>${service.title}</h2>
            <p>${service.description}</p>
            <ul class="detail-list">
                ${service.details.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <a href="contact.html" class="btn-inline">Inquire Now</a>
        </div>
    `).join('');
}

renderServices();