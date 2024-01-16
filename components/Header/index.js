import {Component} from 'react'
import './index.css'
import Logo from '../Images/LogoImage.svg'
import { IoMdMenu } from "react-icons/io";

class Header extends Component{

    state = {

        "smNav":false
    }

    onClickMenu = () =>{
        const {smNav} = this.state
        this.setState({
            smNav:!smNav
        })
    }

    render(){

        const {smNav} = this.state

        return <> <nav>
            <div className='logo-container'>
                <img src={Logo}/>
                <h1 className='logo-heading'>UPRO</h1>

            </div>

            <ul className='nav-ul lg-nav'>
                <li>Home</li>
                <li>Product</li>
                <li>Services</li>
                <li>Why Us</li>
                <li>Resourses</li>
                <li>About</li>
                <li>
                    <button className='build-btn'>Build on UPRO</button>
                </li>
            </ul> 

            
           
            <button className='menu-icon' onClick={this.onClickMenu}>

            <IoMdMenu />
            </button>

            
            
            
        </nav>
        {
            smNav === true ? <ul className='nav-ul sm-nav'>
            <li>Home</li>
            <li>Product</li>
            <li>Services</li>
            <li>Why Us</li>
            <li>Resourses</li>
            <li>About</li>
            <li>
                <button className='build-btn'>Build on UPRO</button>
            </li>
        </ul> : null
        }
        
        </>
    }
}


export default Header