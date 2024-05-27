import React from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./Authentication.scss"

function Authentication() {
  const Login = () => {
    return (
      <div className="active">
        <div className="form-input">
          <input type='number' required />
          <div className="underline"></div>
          <label>Aadhar or Mobile Number</label>
        </div>
        <div className="form-input">
          <input type='password' required />
          <div className="underline"></div>
          <label>Password</label>
        </div>
        <div className="forgot-password">Forgot Password?</div>
        <button type='submit' className="form-submit">Login</button>
      </div>
    );
  }

  const Register = () => {
    return (
      <div className='inactive'>
        <div className="register">
          <div className="form-input">
            <input type='text' required />
            <div className="underline"></div>
            <label>Name</label>
          </div>
          <div className="form-input">
            <input type='text' required />
            <div className="underline"></div>
            <label>Father's Name</label>
          </div>
          <div className="form-input">
            <input type='date' required />
            <div className="underline"></div>
          </div>
          <div className="form-input">
            <div className="select-container">
              <select id='gender' name='gender'>
                <option selected disabled>Gender</option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
                <option value={"Others"}>Others</option>
              </select>
            </div>
          </div>
          <div className="form-input">
            <input type='text' required />
            <div className="underline"></div>
            <label>Address</label>
          </div>
          <div className="form-input">
            <input type='number' required />
            <div className="underline"></div>
            <label>Mobile Number</label>
          </div>
          <div className="form-input">
            <input type='number' required />
            <div className="underline"></div>
            <label>Aadhar Number</label>
          </div>
          <div className="form-input">
            <input type='password' required />
            <div className="underline"></div>
            <label>Password</label>
          </div>
          <div className="form-input">
            <input type='password' required />
            <div className="underline" id='cPass'></div>
            <label>Confirm Password</label>
          </div>
        </div>
        <button type='submit' className="form-submit">Register</button>
      </div>
    );
  }

  return (
    <div className='RegistrationPage'>
      <Navbar />
      <main>
        <form>
          <div className="tab-header">
            <div className="active tab">login</div>
            <div className='inactive tab'>register</div>
          </div>
          <div className="tab-body">
            <Login />
            <Register />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  )
}

export default Authentication
