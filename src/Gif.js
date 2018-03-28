import React from "react"

const Gif = (props) => {



	console.log(props)
	return (
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title gif">
						<iframe src={props.url} width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/jasonderulo-3oEjI10muIW5IX4BWg">via GIPHY</a></p>
					</h1>

				</div>
			</div>
		</section>
	)
}

export default Gif


