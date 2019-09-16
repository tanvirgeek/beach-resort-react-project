import React from 'react';
import Hero from '../components/Hero.js';
import Banner from "../components/Banner.js";
import {Link} from "react-router-dom";

const Rooms = () => {
	return (
		<Hero hero="roomsHero">
			<Banner title="Our Rooms" subtitle="Delux rooms starting at $299">
				<Link to="/" className="btn-primary">
					Home
				</Link>
			</Banner>
		</Hero>
	)
}

export default Rooms;

