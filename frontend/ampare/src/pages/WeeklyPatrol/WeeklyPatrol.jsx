import React from "react";
import AmpareLogo from "../../assets/Vector.svg";
import AmpareLogoAzul from "../../assets/ampare-logo2.svg";
import "./WeeklyPatrol.styles.css";

const WeeklyPatrol = ({
  //props
}) => {
  return (
    <div>
      <section className="section">
        <div className="weekly-patrol-banner">
          <div className="banner-content-container">
            <div className="banner-content">
              <img src={AmpareLogo} className="ampare-logo"/>
              <h3 className="banner-text">O extraordinário habita na</h3>
              <span className="text-span">simplicidade</span>
            </div>
          </div>
        </div>
        <div className="form-header-container">
          <div className="form-header-content">
            <img src={AmpareLogoAzul} style={{width: 70, height: 50}} className="ampare-logo"/>
            <h2 style={{fontWeight: 200, color: '#005E91', fontSize: 'xx-large' }}>Grupo <span style={{fontWeight: 600}}>Ampare</span></h2>
          </div>
          <h1 style={{fontWeight: 700, color: '#005E91', marginTop: 80}}>Inscrição ronda semanal</h1>
        </div>
      </section>
    </div>
  )
}

export default WeeklyPatrol;
