import React from 'react';

const cars = [
    { id: 1, name: 'Tesla Model S', image: 'tesla.jpg', price: '$75,000' },
    { id: 2, name: 'Ford Mustang', image: 'mustang.jpg', price: '$55,000' },
    { id: 3, name: 'Chevrolet Camaro', image: 'camaro.jpg', price: '$50,000' },
];

function CarCard({ car }) {
    return (
        <div className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Price: {car.price}</p>
        </div>
    );
}

export default function App() {
    return (
        <div className="car-listing">
            <h2>Available Cars</h2>
            <div id="carContainer">
                {cars.map(car => <CarCard key={car.id} car={car} />)}
            </div>
        </div>
    );
}
