import React from 'react'
import coverImage from "../../assets/cover/cover-image.jpg"
function index() {
    return (
        <section className = 'my-5'>
            <h1 id='about'>Who I am?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
        </section>
    )
}

export default index
