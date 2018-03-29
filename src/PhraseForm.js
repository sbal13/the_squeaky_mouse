import React from "react"

const PhraseForm = (props) => {

    return (
        <div className="container">
            <button onClick={props.handleClick} className="button is-large is-black"><i className="fas fa-chevron-circle-right"></i></button>
        </div>
    )

}

export default PhraseForm