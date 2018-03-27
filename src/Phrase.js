import React from "react"
import PhraseForm from "./PhraseForm"

const Phrase = (props) => {

    return (
        <section class="hero is-medium is-primary is-bold">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title phrase">
                        {props.phrase}
                    </h1>
                    <PhraseForm handleClick={props.handleClick} />

                </div>
            </div>
        </section>
    )
}

export default Phrase