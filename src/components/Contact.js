import React from 'react'

const Contact = (props) =>{
    setTimeout(()=>{
        props.history.push('/about')
    },2000)
    return(
    <div className="container">
        <h1 className="center">Contact</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod justo eu feugiat blandit. Aliquam auctor mattis turpis, sit amet pulvinar nibh cursus et. In in ante libero. Integer scelerisque blandit pellentesque. Praesent mollis, urna in sollicitudin viverra, dui tortor malesuada erat, vel rutrum dolor sapien ac arcu.</p>
    </div>
    )
}

export default Contact