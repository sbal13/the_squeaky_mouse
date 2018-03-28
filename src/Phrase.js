import React from "react"
import PhraseForm from "./PhraseForm"
import Gif from "./Gif"

const Phrase = (props) => {
    
    return (
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="box frame">
                        <Gif embedURL={props.embedURL}/>
                        <h1 class="title phrase">
                            {props.motivationalPhrase}
                        </h1>
                        <h2 className="phrase">
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