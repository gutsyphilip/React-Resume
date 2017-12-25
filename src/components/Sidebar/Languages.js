import React from 'react'

const languages =(props) => {
    return(
        <div className="languages-container container-block">
                <h2 className="container-block-title">Languages</h2>
                <ul className="list-unstyled interests-list">
                    {Object.keys(props.data).map((lang)=>{
                        return (
                            <li key={lang}>{lang} <span className="lang-desc">{`(${props.data[lang]})`}</span></li>
                        );
                    })}
                </ul>
        </div>
    );

}
export default languages;