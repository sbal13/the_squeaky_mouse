import React from "react"
import PhraseForm from "./PhraseForm"
import Gif from "./Gif"
import { motivationArray } from "./data"

const Phrase = (props) => {
    console.log(motivationArray)

    const shuffle = (a) => {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    const motivationalWord = () => {
        let word = shuffle(motivationArray)[0]
        let wordArray = word.split("")

        return wordArray.join(" · ").toUpperCase()
    }
    return (
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="box frame">
                        <Gif />
                        <h1 class="title phrase">
                            {motivationalWord()}
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