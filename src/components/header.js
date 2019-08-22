import React from "react"

export default () => (
		<header id="header-primary">
			<div className="container">

				<nav id="main-navigation" className="navbar navbar-expand-lg navbar-expand-md navbar-light">

					<h1 className="navbar-brand">
						<a href="/" title="Ancestry Gatbsy">
							<img src="http://dev-ancestry.pantheonsite.io/sites/default/files/branding.png" alt="ancestrydr7kvqfkxwijw.devcloud.acquia-sites.com - " title="ancestrydr7kvqfkxwijw.devcloud.acquia-sites.com - "/>
						</a>
					</h1>

					<button className="navbar-search" type="button" aria-label="Toggle search">
						<span className="navbar-search-icon"></span>
					</button>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<a href="javascript:void(0)" className="navbar-toggler navbar-close" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
							<span></span>
						</a>
						<ul className="main-menu clearfix navbar-nav ml-auto">
							<li className="menu-1091 first nav-item articles active"><a href="/" title="" className="nav-link active">Articles</a></li>
							<li className="menu-2063 nav-item companies active"><a href="/" title="" className="nav-link active">Companies</a></li>
							<li className="menu-2064 nav-item news"><a href="/" title="" className="nav-link">News</a></li>
							<li className="menu-2382 nav-item resources active"><a href="/" title="" className="nav-link active">Resources</a></li>
							<li className="menu-2383 nav-item our-privacy-philosophy active"><a href="/" title="" className="nav-link active">Our Privacy Philosophy</a></li>
							<li className="menu-2384 nav-item contact-us active"><a href="/" title="" className="nav-link active">Contact Us</a></li>
							<li className="menu-2386 last nav-item i-classfas-fa-search-i"><a href="javascript: void(0);" title="" className="nav-link"><i className="fas fa-search"></i></a></li>
						</ul>
						<form className="nav-search d-md-none" onSubmit="return false;">
							<div className="form-row align-items-center">
								<div className="col-24">
									<label className="sr-only" htmlFor="inlineFormInputGroup">Username</label>
									<div className="input-group">
										<div className="input-group-prepend">
											<div className="input-group-text">
												<i className="fas fa-search"></i>
											</div>
										</div>
										<input type="text" className="form-control form-control-lg" id="inlineFormInputGroup" placeholder="Search" />
									</div>
								</div>
							</div>
						</form>

					</div>

				</nav>

			</div>
		</header>
)
