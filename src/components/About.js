import React from 'react'
import Rainbow from '../hoc/Rainbow'

const About = () =>{
    return(
    <div className="container">
        <h1 className="center">About</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod justo eu feugiat blandit. Aliquam auctor mattis turpis, sit amet pulvinar nibh cursus et. In in ante libero. Integer scelerisque blandit pellentesque. Praesent mollis, urna in sollicitudin viverra, dui tortor malesuada erat, vel rutrum dolor sapien ac arcu.</p>
    </div>
    )
}

export default Rainbow(About)