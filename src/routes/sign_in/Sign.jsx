import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../utils/Container'
import './sign.scss'
import img from  '../../assest/images/section.svg'
const Sign = () => {
  return (
    <div>
      <Container>
        <div className="sign-wrapper">
          <div className="sign-wrapper__top">
             <h1>Hello </h1>
             <p className='sign-p1'>Sign in to eBay or <Link to='/registr'>create an account</Link></p>
             <input type="text" placeholder='Email or username' />
             <p className='sign-p2'>Created your account with a mobile number?</p>
             <p className='sign-p3'>Sign in with mobile</p>
             <button className='sign-btn'>Continue</button>
             <span>or</span>
             <button  type='submit' className='registr-btn'>Create account</button>
             <img src={img} alt="" />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Sign