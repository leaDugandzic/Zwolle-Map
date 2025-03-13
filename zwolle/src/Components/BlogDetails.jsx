import React from 'react'

const BlogDetails = ({ title, subtitle, content }) => {
    return (
        <div className='blog-details-container'>
            <article className='blog-content'>
                <h2>Zwolle by Bike: The Ultimate Cycling Tour</h2>
                <p>Discover the city's hidden gems, from charming alleyways and historic courtyards to vibrant markets, cozy cafés, and scenic canals waiting to be explored.</p>
                <p>Explore Zwolle like a local on a bike tour through its charming streets and scenic landscapes. Cycle along the beautiful riverbanks, pass historic city walls, and ride through lively squares filled with cozy cafés. Zwolle’s flat terrain and well-maintained cycling paths make it the perfect city for biking. Discover hidden alleys, iconic windmills, and lush parks as you learn about the city's rich history. Stop at local markets for a taste of regional delicacies or enjoy a break at a picturesque canal-side spot. Whether you're a casual rider or an experienced cyclist, this tour offers a fun and immersive way to experience Zwolle’s vibrant atmosphere. Get ready to pedal your way through this Dutch gem!</p>
            </article>
            <aside>
                <img src="https://www.landstedembo.nl/media/4hkpatbf/zwolle-landstede-mbo.jpg?width=405&height=580&format=webp&v=1db08546c9c76b0" alt="zwolle" />
            </aside>
        </div>
    )
}

export default BlogDetails
