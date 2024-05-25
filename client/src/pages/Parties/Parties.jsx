import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Parties.scss"
import { Registration, PartiesNSymbols, Constitutions, Guidelines } from "../../components/Icons/PartiesIcon"

const Parties = () => {
  return (
    <div className='PartiesPage'>
      <Navbar active="0"/>
      <main>
          <div className="heading">Parties</div>
          <div className="group">
            {/* //TODO: Add Route */}
            <Link to={"/"} className="tabs">
              <Registration className="icon"/>
              <div className="tabName">Political Party Registration</div>
              <div className="tabContent">
                Registration of new political parties under section 29 A of Representation of the People Act, 1951
              </div>
            </Link>
            {/* //TODO: Add Route */}
            <Link to={"/"} className="tabs">
              <PartiesNSymbols className="icon"/>
              <div className="tabName">Political parties & Election Symbol</div>
              <div className="tabContent">
                Allotment of reserved symbols under para 10, 10A, para 10B and Misc. Orders reg. Election Symbols and Symbol orders
              </div>
            </Link>
            {/* //TODO: Add Route */}
            <Link to={"/"} className="tabs">
              <Constitutions className="icon"/>
              <div className="tabName">Constitutions of Political Parties</div>
              <div className="tabContent">
                See the Constitutions of Recognized Political Parties
              </div>
            </Link>
            {/* //TODO: Add Route */}
            <Link to={"/"} className="tabs">
              <Guidelines className="icon"/>
              <div className="tabName">Guidelines for political parties</div>
              <div className="tabContent">
                Guidelines on transparency and accountbility in party
              </div>
            </Link>
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Parties
