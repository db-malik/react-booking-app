import React from "react";
import Header from "../../components/header/Header";
import NavBar from "../../components/navBar/NavBar";

const List = () => {
	return (
		<div>
			<NavBar />
			<Header type={"list"} />
			<div className="container">
				<div className="listWrapper">
					<div className="listSearch">
						<h1 className="listTitle">Search</h1>
					</div>
					<div className="listResult"></div>
				</div>
			</div>
		</div>
	);
};

export default List;
