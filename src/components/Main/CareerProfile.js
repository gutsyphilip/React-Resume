import React from 'react';


const careerProfile = (props) =>{
    return(
       <section className="section summary-section" >
            <h2 className="section-title">
            <i className="fa fa-user"></i>Career Profile</h2> 
            <div className="summary">
                <p>{props.data}</p>
            </div>
       </section>
    );
}


export default careerProfile;
