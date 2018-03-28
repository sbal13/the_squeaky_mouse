import React from "react"

const Gif = (props) => {

	return (
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title gif">
						<iframe src={props.embedURL} width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
					</h1>

				</div>
			</div>
		</section>
	)
}

export default Gif


