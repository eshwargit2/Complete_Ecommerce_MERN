import React from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
   
       const navigate = useNavigate();

    const home_btn=()=>{
       navigate('/dashome')
    }
    const search_btn=()=>{
        navigate('/search')
    }
    const scan_btn=()=>{
        navigate('/order')
    }
    const card_btn=()=>{
       navigate('/card')
    }
    const account_btn=()=>{
       navigate('/account')
    }
    

  return (
    <div className='nav-bar' >
        <nav>
        <div className="container">
            <div className="row">
                
                <div className="col-12 ms-2 nav-btn ">
                 <button onClick={home_btn} > <i class="fa-solid fa-house"></i> </button>
                    <button  type='button' onClick={search_btn} > <i class="fa-solid fa-magnifying-glass"></i> </button>
                    <button onClick={card_btn} > <i class="fa-solid fa-bag-shopping"></i> </button>
                    <button onClick={scan_btn} > <i class="fa-solid fa-cart-shopping"></i> </button>
                    <button onClick={account_btn} > <i class="fa-regular fa-user"></i>  </button>
                </div>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar