import servicesData from './data/services.js';

const contentArea = document.getElementById('service-content');


const urlParams = new URLSearchParams(window.location.search);
const serviceId = urlParams.get('id');

const service = servicesData.find(s => s.id === serviceId);

if (service) {
 
    contentArea.innerHTML = `
        <span class="badge">Service Details</span>
        <h1 style="font-size: 4.5rem; font-weight: 900;">${service.title}</h1>
        <p style="font-size: 1.25rem; margin: 2rem auto; max-width: 800px;">${service.description}</p>
        
        <div style="text-align: left; max-width: 600px; margin: 0 auto; background: #fff; padding: 3rem; border-radius: 20px; border: 1px solid #eee;">
            <h3 style="margin-bottom: 1.5rem;">What's Included:</h3>
            <ul class="detail-list" style="list-style: none;">
                ${service.details.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <br>
            <a href="contact.html" class="btn-primary" style="display: inline-block;">Consult with Us</a>
        </div>
    `;
} else {
    contentArea.innerHTML = "<h1>Service Not Found</h1><a href='index.html'>Go Back Home</a>";
}