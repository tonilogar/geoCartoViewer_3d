import React, { Component } from 'react'
import '../css/SignUp.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
class SignUp extends Component {
    
    state = {
        users: [],
        username:''
    }
    
    //Pedimos los datos al servidor de los usernames.
    //Cuando entramos en la dirección http://localhost:4000/api/users 
    //nos muestra con un log los usuarios existentes
    async componentDidMount() {
        this.getUsers();
        console.log(this.state.users)
    }

    getUsers = async () => {
        const res = await axios.get('http://localhost:4000/api/users')
        
        this.setState({users: res.data})
    }
    onChangeUsername = (e) => {
        this.setState({
            username: e.target.value
        });

        console.log(e.target.value)
    }

    
    onSubmit = async e => {
        e.preventDefault();
       const res = await axios.post('http://localhost:4000/api/users', {
           username: this.state.username
        })
        this.setState({username: ''});
        this.getUsers();
        console.log(res )
    }
    render() {
        return (
            <form className="formSignUp" onSubmit={this.onSubmit}>     
                <h1> Create your acount </h1>
                <label className="labelUserName" htmlFor="userName">  User name   </label>
                <input onChange={this.onChangeUsername} className="inputUserName" value={this.state.username} type="text" id="userName"/>

                <label className="labelPassword" htmlFor="password">  Password  </label>
                <input onChange={this.onChangeData} className="inputPassword" type="password" placeholder="********" id="password"/>

                <label className="labelConfirmPassword" htmlFor="confirmPassword">  Confirm password  </label>
                <input onChange={this.onChangeData} className="inputConfirmPassword" type="password" placeholder="********" id="confirmPassword"/>
                <label className="labelEmail" htmlFor="email">  Email   </label>
                <input onChange={this.onChangeData} className="inputEmail" type="email" id="email"/>
                <input onChange={this.onSubmit} className="buttonCreateUser" type="submit" value="Create user"/>
                <button className="buttonHome"  type="button"><Link to="/">Home</Link></button>
                <footer className="footer">
                    <Link to='/'>Terms</Link>
                    <Link to='/'>Privacy</Link>
                    <Link to='/'>helpt</Link>
                </footer>
            </form>
        )
    }
}

export { SignUp } 