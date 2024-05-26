import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./PartyRegistration.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PartyRegistration = () => {
  const [party, setParty] = useState({
    name: "", leader: "", leaderMobile: "", foundedYear: "", ideology: "", headquarter: "", numberOfMembers: ""
  });

  let name, value;

  const changedValues = (ev) => {
    console.log(ev.target.name + "  :  " + ev.target.value)
    name = ev.target.name;
    value = ev.target.value;
    setParty({...party, [name]:value})
  };

  return (
    <div className="PartyRegistrationPage">
      <Navbar active="0" />
      <main>
        <div className="heading">
          <Link className="material-symbols-outlined backBtn" to={"/parties"}>
            arrow_back
          </Link>
          <label htmlFor="page_heading">Party Registration</label>
        </div>
        <div className="formSection">
          <form>
            <div className="input-container">
              <input
                type="text"
                name="name"
                placeholder="Party Name"
                autoComplete="off"
                value={party.name}
                onChange={changedValues}
                required
              />
              <div className="bi bi-tags-fill icon"></div>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="leader"
                placeholder="Leader Name"
                autoComplete="off"
                value={party.leader}
                onChange={changedValues}
                required
              />
              <div className="bi bi-person-fill icon"></div>
            </div>


            <div className="input-container">
              <input
                name="leaderMobile"
                placeholder="Leader Mobile Number"
                autoComplete="off"
                value={party.leaderMobile}
                onChange={changedValues}
                inputMode="numeric"
                minLength={10} maxLength={10}
                required
              />
              <div className="bi bi-telephone-fill icon"></div>
            </div>

            <div className="input-container">
              <input
                type="number"
                name="foundedear"
                placeholder="Founded Year"
                autoComplete="off"
                value={party.foundedYear}
                onChange={changedValues}
                min="1995" max={new Date().getFullYear()}
                required
              />
              <div className="bi bi-calendar-check-fill icon"></div>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="ideology"
                placeholder="Idealogy"
                autoComplete="off"
                value={party.ideology}
                onChange={changedValues}
                required
              />
              <div className="bi bi-lightbulb-fill icon"></div>
            </div>

            <div className="input-container">
              <input
                type="text"
                name="headquarter"
                placeholder="Headquarter Location"
                autoComplete="off"
                value={party.headquarter}
                onChange={changedValues}
                required
              />
              <div className="bi bi-geo-fill icon"></div>
            </div>

            <div className="input-container">
              <input
                type="number"
                name="numberOfMembers"
                placeholder="Number of members"
                autoComplete="off"
                value={party.numberOfMembers}
                onChange={changedValues}
                min="10"
                required
              />
              <div className="bi bi-people icon"></div>
            </div>

            <div className="formButton">
              <button type="reset" id="clear_all_btn">
                Clear All
              </button>
              <button type="submit" id="register_btn">
                Register Party
              </button>
            </div>
          </form>
          <div className="templateImage">
            <img
              src={require("../../assets/images/party_registration_side_image.jpg")}
              alt="Party"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PartyRegistration;
