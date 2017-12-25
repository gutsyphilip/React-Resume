import React from 'react';

const careerProfile = (props) =>{
    return(
        <section class="section summary-section" >
            <h2 class="section-title"><i class="fa fa-user"></i>Career Profile</h2> 
            <div class="summary">
                    <p>{props.data}</p>
                </div>
       </section>
    );
}

export default careerProfile;
