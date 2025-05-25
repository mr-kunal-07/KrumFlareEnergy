import React from 'react';
import './Partners.css'; // Import the CSS file

const partners = [
    { name: 'Shadowfax', logo: '/Patners/Shadowfax.png' },
    { name: 'Blue Dart + DHL', logo: '/Patners/BlueDart.png' },
    { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { name: 'XpressBees', logo: '/Patners/xpress1.png' },
    { name: 'Delhivery', logo: '/Patners/delhivery.png' },
];

const Partners = () => {
    return (
        <section className="partners-section">
            <h2 className="partners-title text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ">Our Trusted Partners</h2>
            <div className="marquee-container">
                <div className="marquee-track">
                    {[...partners, ...partners].map((partner, index) => (
                        <div className="marquee-item" key={index}>
                            <img src={partner.logo} alt={partner.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
