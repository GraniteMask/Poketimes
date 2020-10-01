import React, {Component} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Pokeball from '../pokeball.png'
import { connect } from 'react-redux'

//const Home = () =>{
class Home extends Component{  
    /*return(
    <div className="container">
        <h1 className="center">Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin euismod justo eu feugiat blandit. Aliquam auctor mattis turpis, sit amet pulvinar nibh cursus et. In in ante libero. Integer scelerisque blandit pellentesque. Praesent mollis, urna in sollicitudin viverra, dui tortor malesuada erat, vel rutrum dolor sapien ac arcu.</p>
    </div>
    )*/
    /*We delete this while doing redux
    state = {
            posts: [ ]
        }
    componentDidMount(){
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res=>{
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }*/

    render(){
        //const {posts} =this.state;   while doing without redux
        //while doing with redux
        const {posts} =this.props;
        const postList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={Pokeball} alt="A pokeball" />
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                            <span className="card-title red-text">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No posts yet</div>
        )
        return(
            <div className="container home">
                <h1 className="center">Home</h1>
                <p>{postList}</p>
            </div>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(Home)