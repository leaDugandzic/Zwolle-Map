import React from 'react'

const Header = ({ title, subtitle }) => {
    return (
        <header
            className="banner relative h-96 flex flex-col justify-center items-center bg-cover bg-center text-white"
            style={{
                backgroundImage:
                    "url('https://www.touristserver.nl/img/91887-1489506831/C1600X560/SassenpoortCloudshots_3398cropx+300+dpi_klein.jpg')",
            }}
        >
            <h1 className="text-4xl font-bold text-gray-100">Split-Zwolle Map Project</h1>
            <button className="mt-4 text-2xl bg-white text-blue-600 p-2 rounded-full shadow-lg hover:bg-gray-200">
                &#8595;
            </button>
        </header>
    )
}

export default Header
