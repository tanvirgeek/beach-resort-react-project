import React from 'react';
import Hero from "../components/Hero.js";
import Banner from "../components/Banner.js";
import {Link} from "react-router-dom";
const Home = () => {
	return (
		<Hero>
			<Banner title="Tanvir is Cool" subtitle="Delux rooms starting at $299">
				<Link to="/rooms" className="btn-primary">
					Our Rooms
				</Link>
			</Banner>
		</Hero>
	)
}

export default Home;
