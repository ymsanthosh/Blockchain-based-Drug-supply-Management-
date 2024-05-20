import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const redirect_to_roles = () => {
    navigate("/roles");
  };
  const redirect_to_addmed = () => {
    navigate("/addmed");
  };
  const redirect_to_supply = () => {
    navigate("/supply");
  };
  const redirect_to_track = () => {
    navigate("/track");
  };

  return (

    <div style={{ backgroundColor: "#FFFFFF" }}>
    <div className="About-Page">
     
    </div> 
      

      <div className="container" style={{ backgroundColor: "#FFFFFF", padding: "20px" }}>
        <div className="header">
          <h1>
            <div
              style={{
                backgroundColor: "green",
                color: "white",
                padding: "10px",
              }}
            >
              Pharmaceutical Supply Chain{" "}
            </div>
          </h1>
        </div>
        <br />

        <div className="row">
          {/* Register Card */}
          <div className="col" style={{ backgroundColor: "#FFFFFF", paddingLeft: "50px"}}>
            <div className="card" style={{ backgroundColor: "#4DB053", width: "35rem", height: "35rem"  }}>
            <img src="/step1.jpeg" class="card-img-top" alt="Register"></img>
              <div className="card-body">
                <h5 className="card-title">Step 1: Register</h5>
                <p className="card-text">
                  (Note: Here <u>Owner</u> is the person who deployed the smart
                  contract on the blockchain)
                </p>
                <p className="card-text">
                  Owner Should Register Raw material suppliers, Manufacturers,
                  Distributors, and Retailers. (This is a one-time step. Skip to
                  step 2 if already done)
                </p>
                <button
                  onClick={redirect_to_roles}
                  className="btn btn-outline-primary btn-sm"
                >
                  Register
                </button>
              </div>
            </div>
          </div>

          {/* Order Medicines Card */}
          <div className="col" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="card" style={{ width: "35rem", height: "35rem"  }}>
            <img src="/step2.jpeg" class="card-img-top" alt="Register"></img>
              <div className="card-body">
                <h5 className="card-title">Step 2: Order Medicines</h5>
                <p className="card-text">
                The ordering process ensures that the necessary medications are
                available for distribution to distributors and retailers, maintaining a
                smooth flow within the pharmaceutical supply chain.
                </p>
                <button
                  onClick={redirect_to_addmed}
                  className="btn btn-outline-primary btn-sm"
                >
                  Order Medicines
                </button>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="row">
          {/* Control Supply Chain Card */}
          <div className="col" style={{ backgroundColor: "#FFFFFF" , paddingLeft: "50px"}}>
            <div className="card" style={{ width: "35rem", height: "35rem"}}>
            <img src="/step3.jpeg" class="card-img-top" alt="Register"></img>
              <div className="card-body" >
                <h5 className="card-title">Step 3: Control Supply Chain</h5>
                <p className="card-text">
                Pharmaceutical industry, controlling the supply chain specifically refers 
                to the processes and activities involved in ensuring the smooth and efficient 
                movement of medicines.
                </p>
                <button
                  onClick={redirect_to_supply}
                  className="btn btn-outline-primary btn-sm"
                >
                  Control Supply Chain
                </button>
              </div>
            </div>
          </div>

          {/* Track Medicines Card */}
          <div className="col" style={{ backgroundColor: "#FFFFFF" }}>
            <div className="card" style={{ width: "35rem", height: "35rem"  }}>
            <img src="/step4.jpeg" class="card-img-top" alt="Register"></img>
              <div className="card-body">
                <h5 className="card-title">Step 4: Track Medicines</h5>
                <p className="card-text">
                The process of monitoring and tracing pharmaceutical products as they 
                move through the supply chain, from production to distribution and ultimately 
                to the end-user. It ensures the safety, quality,and integrity of medicines.
                </p>
                <button
                  onClick={redirect_to_track}
                  className="btn btn-outline-primary btn-sm"
                >
                  Track Medicines
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
