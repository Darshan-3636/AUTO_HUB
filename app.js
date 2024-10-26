// Car data (mock data for demonstration)
const cars = [
    { id: 1, name: 'Tesla Model S', image: 'tesla.jpg', price: '$75,000' },
    { id: 2, name: 'Ford Mustang', image: 'mustang.jpg', price: '$55,000' },
    { id: 3, name: 'Chevrolet Camaro', image: 'camaro.jpg', price: '$50,000' },
];

// Display cars in the "Available Cars" section
function showCars() {
    const carContainer = document.getElementById('carContainer');
    carContainer.innerHTML = cars.map(car => `
        <div class="car-card">
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>Price: ${car.price}</p>
        </div>
    `).join('');
}

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('contactForm').reset();
});
