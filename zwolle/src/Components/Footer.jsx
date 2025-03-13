import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Mijn Website. Alle rechten voorbehouden.</p>
            <nav>
                <a href="/privacy">Privacybeleid</a>
                <a href="/terms">Voorwaarden</a>
                <a href="/contact">Contact</a>
            </nav>
        </footer>
    );
};

export default Footer;
