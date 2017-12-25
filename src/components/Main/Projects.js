import React from 'react'

const projects = (props)=>{
    return (
        <section className="section projects-section">
        <h2 className="section-title"><i className="fa fa-archive"></i>Projects</h2>
        <div className="intro">
            <p>You can list your side projects or open source libraries in this section. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et ligula in nunc bibendum fringilla a eu lectus.</p>
        </div>
        {Object.keys(props.data).map((project)=>{
                 return (
            <div className="item">
                <span className="project-title"><a href={props.data[project].projectURL}>{props.data[project].title}</a></span> - <span className="project-tagline">{props.data[project].tagline}</span>
                
            </div> 
                 );
            })}
        </section>
    );
}

export default projects;