import React, { useState } from 'react'
import './Home.css'
import viteLogo from '/vite.svg'
import { useNavigate } from 'react-router-dom'
import shop1 from './../assets/shopimg (1).png'
import shop2 from './../assets/shopimg (2).png'
import shop3 from './../assets/shopimg (3).png'


const Home = () => {

const navigate = useNavigate();
    
const [loading , setloading]=useState(false );
const rederact =()=>{
        setloading(true);
        setTimeout(() => {
             navigate('/register')
        }, 3000);
    } 
 const skip =()=>{
      
             navigate('/register')
      
    }   
   
  return (
    <div className='home-section'  >
        <div className="container ">
             <p className='skip text-black ' onClick={skip} >skip</p>
            <div className="row  d-flex justify-content-center">
                <div className="col-12 d-flex justify-content-center con ">    
                    {/* <img src={viteLogo} alt="   " /> */}
                  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators"  >
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={shop1} class="d-block w-100" alt="..." style={{width:'350px',height:'250px'}} />
    </div>
    <div class="carousel-item">
      <img src={shop2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={shop3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    
                </div>
                <div className="col-12 text-center ani " >
                    <h2  >Module<br />Online<span className='text-success' >Shopping</span> </h2>
                </div>
                <div className="col-12 justify-content-center" style={{display:'flex'}}  >

               {!loading?(
                     <button id='btn'   onClick={rederact} type='button'  className='btn mt-4 justify-content-center startbtn ' ><svg xmlns="http://www.w3.org/2000/svg" height="50px" viewBox="0 -960 960 960" width="50px" fill="#FFFFFF"><path d="M673-446.67H160v-66.66h513l-240-240L480-800l320 320-320 320-47-46.67 240-240Z"/></svg></button>
               ):(<div class="spinner-border text-success"   id='spiner' role="status">
                 <span class="sr-only">Loading...</span>
                  </div>)

               }
                
                
             </div>    
            </div>
        </div>  
       
    </div>
  )
}

export default Home