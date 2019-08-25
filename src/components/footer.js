import React from "react"
//import { useStaticQuery, graphql } from "gatsby"

export default () => (
	<footer id="footer-primary">
		<div className="container">
			<div className="row">
				<div className="col-24 col-md-16 left">
					<nav id="nav-footer-primary" className="stacked">
						<ul className="bs-menu nav">
							<li className="first  nav-item"><a href="/" title="" className="nav-link active">Support Center</a></li>
							<li className=" nav-item"><a href="/" title="" className="nav-link active">Sitemap</a></li>
							<li className=" nav-item"><a href="/" title="" className="nav-link active">Careers</a></li>
							<li className=" nav-item"><a href="/" title="" className="nav-link active">Ancestry Blog</a></li>
							<li className=" nav-item"><a href="/" title="" className="nav-link active">Privacy</a></li>
							<li className="last  nav-item"><a href="/" title="" className="nav-link active">Terms &amp; Conditions</a></li>
						</ul>
					</nav>
					<nav id="nav-footer-secondary" className="stacked">
						<ul className="nav">
							<li className="nav-item"><a className="nav-link" href="#" onClick={e => e.preventDefault()}>© 2019 Ancestry</a></li>
						</ul>
					</nav>
				</div>

				<div className="col-24 col-md-8 right">
					<nav id="nav-footer-social" className="stacked">
						<div className="menu-menu-footer-social-menu-container d-lg-flex" id="menu-menu-footer-social-menu-container">
							<ul className="nav ml-auto">
								<li className="first nav-item">
									<a className="nav-link" href="https://facebook.com"><i className="fab fa-facebook"></i></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://twitter.com"><i className="fab fa-twitter"></i></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://youtube.com"><i className="fab fa-youtube"></i></a>
								</li>
								<li className="nav-item">
									<a className="nav-link" href="https://instagram.com"><i className="fab fa-instagram"></i></a>
								</li>
								<li className="last nav-item">
									<a className="nav-link" href="https://pinterest.com"><i className="fab fa-pinterest"></i></a>
								</li>
							</ul>
						</div>
					</nav>
				</div>
			</div>

		</div>
	</footer>
)

