import React from 'react'

const BlogItem = ({ title, subtitle }) => {
    return (
        <div className='blog-item-container'>
            <img src="https://ikwilmeerreizen.nl/wp-content/uploads/2020/08/wat-te-doen-in-zwolle-sassenpoort-790x593.jpg" alt="zwolle" />
            <h2>A Walk Through Medieval Zwolle</h2>
            <p>Experience the rich history of Zwolle as we stroll past medieval walls, stunning churches, and ancient merchant houses that whisper tales of the past.</p>
        </div>
    )
}

export default BlogItem
