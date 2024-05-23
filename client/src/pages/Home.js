import React from "react";
import '../css/Home.css'
import Navbar from '../common/Navbar'
import Footer from '../common/Footer'

function Home() {
  return <div>
    <Navbar/>
    <div className="main-view">
      <div className="headRow">
        <div className="article">
          <div className="heading">Polling Day</div>
          <div className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
            maiores sequi nihil impedit, dicta voluptate doloremque, quasi ut
            exercitationem fuga corporis veniam, illo similique dolorem eius
            non. Odit, possimus omnis. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Reprehenderit asperiores dolore atque suscipit
            alias et, autem voluptates unde, rerum esse magni qui cum iusto nemo
            nulla animi sint libero quisquam. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Dolorem perspiciatis nam, rerum
            architecto quaerat tenetur autem odio ex maxime sed! Cum autem illum
            perferendis tenetur ad quisquam, amet ducimus consequuntur! Lorem
            ipsum dolor sit amet consectetur, adipisicing elit.
            <a href="#" className="actionBtn">Get Started</a>
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="secondRow">
        <div className="article">
          <div className="heading"><span>#</span>Right To Vote</div>
          <div className="content">
            The right to vote is a fundamental democratic right that empowers
            citizens to shape their nation's future. In India, this right is
            enshrined in the Constitution, ensuring equality, freedom, and civic
            responsibility for all eligible voters. Each vote cast is a
            declaration of one's beliefs and aspirations for a better society.
            It is a powerful tool for change, allowing individuals to
            participate in decision-making and hold leaders accountable. As we
            exercise our right to vote, let us honor the sacrifices made by
            those who fought for this privilege. By participating in the
            electoral process, we uphold the principles of democracy and
            contribute to a society where every voice is heard and every vote is
            valued.
          </div>
        </div>
      </div>
      <div className="divider"></div>
      <div className="lastRow">
        <a href="." className="tabs">Parties</a>
        <a href="." className="tabs">Candidates</a>
        {/* //TODO : Add Links to Items */}
        <a href="" className="tabs">Vote</a>
        <a href="" className="tabs">Results</a>
      </div>
    </div>
    <Footer/>
  </div>;
}

export default Home;
