import React from 'react';

const experiences = (props) =>{
    return(
        <section className="section experiences-section" >
            <h2 className="section-title"><i className="fa fa-briefcase"></i>Experiences</h2> 
            {Object.keys(props.data).map((item)=>{
                 return (
                    <div key="item" className="item">
                    <div className="meta">
                        <div className="upper-row">
                            <h3 className="job-title">{props.data[item].title}</h3>
                            <div className="time">{props.data[item].time}</div>
                        </div>
                        <div className="company">{props.data[item].company}</div>
                    </div>
                    <div className="details">
                        <p>{props.data[item].details}</p>
                    </div>
                </div>  
                 );
            })}
       </section>
    );
}

export default experiences;
