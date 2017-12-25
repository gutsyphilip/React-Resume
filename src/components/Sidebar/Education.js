import React from 'react';

const education = (props) => {
    return (
        <div className="education-container container-block">
           <h2 className="container-block-title">Education</h2>   
            {Object.keys(props.data).map((item)=>{
                return (
                <div key={item} className="item">
                    <h4 className="degree">{props.data[item].degree}</h4>
                    <h5 className="meta">{props.data[item].meta}</h5>
                    <div className="time">{props.data[item].time}<span><br/>{props.data[item].status}</span></div>
                </div>
                );
            })} 
        </div>
    );
}

export default education;