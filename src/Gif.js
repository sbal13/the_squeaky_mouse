import React from "react"

const Gif = (props) => {

	return (
		<section class="hero is-medium is-primary is-bold">
			<div class="hero-body">
				<div class="container">
					<h1 class="title gif">
						<iframe src={props.embedURL} title="Your Squeaky Mouse" width="100%" height="100%" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
					</h1>

				</div>
			</div>
		</section>
	)
}

export default Gif


