import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import RouteCard from '../../components/RouteCard/RouteCard'
import "./Candidates.scss"
import { Nomination, NominationInformation, StatusNPremissions, AffidavitPortal } from "../../components/Icons/CandidatesIcon"

const Candidates = () => {
  return (
    <div className='CandidatesPage'>
      <Navbar active="1"/>
      <main>
          <div className="heading">Candidates</div>
          <div className="group">
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={Nomination} label={"Candidate Nomination"}>
            List of Forms for Nomination etc. in Elections for use by candidates.
            </RouteCard>
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={NominationInformation} label={"Information Related with Nomination"}>
            Qualifications & Disqualifications for contesting elections to Parliament, and documents and other requirements at the time of filing of nomination papers
            </RouteCard>
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={StatusNPremissions} label={"Nomination Status & Permissions"}>
            Candidate App is used to track the nomination / permission application status. Once the application is registered, the periodic status updates are available via notifications
            </RouteCard>
            {/* //TODO: Add Route */}
            <RouteCard route={"/"} Icon={AffidavitPortal} label={"Affidavit Portal"}>
            Candidate Affidavit Portal allows citizens to view the complete list of Candidate Nominations & Affidavits who have applied for the electionsm
            </RouteCard>
          </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Candidates
