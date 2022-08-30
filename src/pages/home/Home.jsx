import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredPropreties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import NavBar from "../../components/navBar/NavBar";
import PropertyList from "../../components/propretyList/PropertyList";

import classes from "./Home.module.css";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Header />
			<div className={classes.mainHomeContainer}>
				<Featured />
				<PropertyList />
				<FeaturedProperties />
			</div>
			<MailList />
			<Footer />
		</div>
	);
};

export default Home;
