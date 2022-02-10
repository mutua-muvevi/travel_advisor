import React, {useState, useEffect} from 'react';
import {CssBaseline, Grid} from "@material-ui/core"

import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Maps/Map";

import {fetchPlaces} from "./api/index"

const App = () => {
	const [places, setPlaces] = useState([]);
	const [childClicked, setChildClicked] = useState(null)

	const [coords, setCoords] = useState({});
	const [bounds, setBounds] = useState({});

	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		navigator.geolocation.getCurrentPosition(
			({coords: {latitude, longitude}}) => {
				setCoords({
					lat: latitude,
					lng: longitude
				})
			}
		)
	}, [])

	useEffect(() => {
		setIsLoading(true)

		fetchPlaces(bounds.sw, bounds.ne)
			.then((data) => {
				console.log("The places are", data)
				setPlaces(data)
				setIsLoading(false)
			})
	}, [bounds, coords])

	return (
		<>
			<CssBaseline/>
			<Header/>
			<Grid container spacing={3} style={{width: "100%"}}>
				<Grid item xs={12} md={4}>
					<List 
						childClicked = {childClicked}
						isLoading={isLoading}
						places={places}/>
				</Grid>
				<Grid item xs={12} md={8}>
					<Map 
						setCoords={setCoords}
						setBounds={setBounds}
						coords = {coords}
						places={places}
						setChildClicked={setChildClicked}
					/>
				</Grid>
			</Grid>
		</>
	);
};

export default App
