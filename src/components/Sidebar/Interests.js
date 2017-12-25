import React from 'react'

const interests = (props)=>{
    return (
        <div className="interests-container container-block">
            <h2 className="container-block-title">Interests</h2>
            <ul className="list-unstyled interests-list">
            {Object.keys(props.data).map((item)=>{
                        return (
                            <li key={item}> {props.data[item]}
                            </li>
                        );
                    })}
            </ul>

        </div>
    );
} 

export default interests;