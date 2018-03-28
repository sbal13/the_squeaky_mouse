import React from "react"
import PhraseForm from "./PhraseForm"
import Gif from "./Gif"

const Phrase = (props) => {

    return (
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="box frame">
                        <Gif embedURL={props.embedURL} />
                        <h1 className="phrase-header">
                            {props.motivationalPhrase}
                        </h1>
                        <hr />
                        <h2 className="phrase-content">
                            {props.phrase}
                        </h2>
                    </div>
                    <PhraseForm handleClick={props.handleClick} />

                </div>
            </div>
        </section>
    )
}

export default Phrase