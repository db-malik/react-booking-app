import React from "react";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div>
			<div className="navBar">
				<div className="navContainer">
					<span className="logo">DBM booking</span>
					<div className="navItem">
						<button className="navButton">Register</button>
						<button className="navButton">Login</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
