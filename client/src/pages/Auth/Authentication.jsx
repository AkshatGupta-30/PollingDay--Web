import React, {useState} from 'react'
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer"
import "./Authentication.scss"

function Authentication() {
  const [activeTab, setActiveTab] = useState('login');
  function switchTab(tab) {setActiveTab(tab);}

  const Login = () => {
    const [voter, setVoter] = useState({
      idField: "", password: ""
    });
    function changedValues(ev) {setVoter({...voter, [ev.target.name]:ev.target.value});}

    async function postLogin() {
      const {idField, password} = voter;

      if(idField.length !== 10 && idField.length !== 12) {
        // TODO: Remove alert
        window.alert("Id badly formatted");
        return;
      } else if(password.length === 0) {
        window.alert("Plz enter password");
        return;
      }

      const res = await fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ idField, password })
      });

      const response = await res.json();
      if(response.status === 200) {
        window.alert("Login Successfull")
        console.log("Login Successfull")
      } else {
        window.alert(response.error)
        console.log(response.error)
      }
    };

    return (
      <div className={activeTab === 'login' ? 'active' : 'inactive'}>
        <div className="form-input">
          <input
          type='number'
          name='idField'
          autoComplete='off'
          value={voter.idField}
          onChange={changedValues}
          required />
          <div className="underline"></div>
          <label>Aadhar or Mobile Number</label>
        </div>
        <div className="form-input">
          <input
          type='password'
          name='password'
          autoComplete='off'
          value={voter.password}
          onChange={changedValues}
          required />
          <div className="underline"></div>
          <label>Password</label>
        </div>
        <div className="forgot-password">Forgot Password?</div>
        <button type='submit' className="form-submit" onClick={postLogin}>Login</button>
      </div>
    );
  }

  const Register = () => {
    return (
      <div className={activeTab === 'register' ? 'active' : 'inactive'}>
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
            <label>Date of Birth</label>
            <div className="underline"></div>
          </div>
          <div className="form-input">
            <div className="select-container">
              <select id='gender' name='gender' defaultValue={"Gender"}>
                <option disabled>Gender</option>
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
    <div className='AuthenticationPage'>
      <Navbar />
      <main>
        <div className='form'>
          <div className="tab-header">
            <div className={activeTab === 'login' ? 'active tab' : 'inactive tab'} onClick={() => switchTab('login')}>login</div>
            <div className={activeTab === 'register' ? 'active tab' : 'inactive tab'} onClick={() => switchTab('register')}>register</div>
          </div>
          <div className="tab-body">
            <Login />
            <Register />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Authentication
