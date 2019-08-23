import React from "react"
import Header from "../components/header"
import Hero from "../components/hero"
import Latestblog from "../components/latestblog"
import Science from "../components/science"
import Helmet from "react-helmet";

export default () => (
	<div id="wrap">
		<Helmet>
			<script src="https://code.jquery.com/jquery-3.4.1.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossOrigin="anonymous"></script>
			<script src="http://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js" type="text/javascript" />
			<script src={'static/app.js'}/>
		</Helmet>

		<Header />
		<Hero />
		<Latestblog/>
		<Science/>
	</div>
)
