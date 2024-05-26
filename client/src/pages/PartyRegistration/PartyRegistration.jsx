import React from "react";
import { Link } from "react-router-dom";
import "./PartyRegistration.scss";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const PartyRegistration = () => {
  return (
    <div className="PartyRegistrationPage">
      <Navbar active="0" />
      <main>
        <div class="heading">
          <Link class="material-symbols-outlined backBtn" to={"/parties"}>
            arrow_back
          </Link>
          <label for="page_heading">Party Registration</label>
        </div>
        <div class="formSection">
          <form>
            <div class="input-container">
              <input
                type="text"
                id="party_name"
                name="party_name"
                placeholder="Party Name"
                required
              />
              <div class="bi bi-tags-fill icon"></div>
            </div>

            <div class="input-container">
              <input
                type="text"
                id="leader_name"
                name="leader_name"
                placeholder="Leader Name"
                required
              />
              <div class="bi bi-person-fill icon"></div>
            </div>


            <div class="input-container">
              <input
                id="leader_mobile"
                name="leader_mobile"
                placeholder="Leader Mobile Number"
                inputMode="numeric"
                minLength={10} maxLength={10}
                required
              />
              <div class="bi bi-telephone-fill icon"></div>
            </div>

            <div class="input-container">
              <input
                type="number"
                id="founded_year"
                name="founded_year"
                placeholder="Founded Year"
                min="1995" value="1995" max={new Date().getFullYear()}
                required
              />
              <div class="bi bi-calendar-check-fill icon"></div>
            </div>

            <div class="input-container">
              <input
                type="text"
                id="ideology"
                name="ideology"
                placeholder="Idealogy"
                required
              />
              <div class="bi bi-lightbulb-fill icon"></div>
            </div>

            <div class="input-container">
              <input
                type="text"
                id="hq_location"
                name="hq_location"
                placeholder="Headquarter Location"
                required
              />
              <div class="bi bi-geo-fill icon"></div>
            </div>

            <div class="input-container">
              <input
                type="number"
                id="number_of_members"
                name="number_of_members"
                placeholder="Number of members"
                min="10"
                required
              />
              <div class="bi bi-people icon"></div>
            </div>

            <div class="formButton">
              <button type="reset" id="clear_all_btn">
                Clear All
              </button>
              <button type="submit" id="register_btn">
                Register Party
              </button>
            </div>
          </form>
          <div class="templateImage">
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
