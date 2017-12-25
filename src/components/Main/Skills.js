import React from 'react';

const skills = (props) =>{
    return (
        <section class="skills-section section">
            <h2 class="section-title"><i class="fa fa-rocket"></i>Skills &amp; Proficiency</h2>
            <div class="skillset">
                {Object.keys(props.data).map((skill)=>{
                    return (
                        <div class="item">
                        <h3 class="level-title">{props.data[skill].name}</h3>
                        <div class="level-bar">
                            <div class="level-bar-inner" data-level={props.data[skill].level}>
                         </div>                                      
                        </div>                          
                    </div> 
                    );
                })}
            </div>
        </section>
    );
}

export default skills;