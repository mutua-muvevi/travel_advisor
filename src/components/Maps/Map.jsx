import React from "react";
import GoogleMapReact from "google-map-react";
import{Paper, Typography, useMediaQuery} from "@material-ui/core"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles"

const Map = ({setCoords, setBounds, coords, places, setChildClicked}) => {
	const classes = useStyles()
	const isMobile = useMediaQuery("(max-width:600px)")
	
	return (
		<div className={classes.mapContainer}>
			<GoogleMapReact
				bootstrapURLKeys={{key : "AIzaSyBryvhvlcdQ6ub4C3YrUvzv3COd3-dalWI"}}
				defaultCenter={coords}
				center={coords}
				defaultZoom={14}
				margin={[50, 50, 50, 50]}
				options={""}
				onChange={(e) => {
					setCoords({
						 lat: e.center.lat, 
						 lng: e.center.lng 
					});
					setBounds({ 
						ne: e.marginBounds.ne, 
						sw: e.marginBounds.sw 
					});
				}}
				onChildClick={(child => setChildClicked(child))}
			>
				{
					places?.map((place, i) => (
						<div 
							className={classes.markerContainer}
							lat={Number(place.latitude)}
							lng={Number(place.longitude)}
							key={i}
						>
							{
								isMobile ? (
									<LocationOnOutlinedIcon
										color="primary"
										fontSize="large"
									/>
								) : (
									<Paper elevation={3} className={classes.paper}>
										<Typography
											gutterbottom
											variant="subtitle1"
											className={classes.typography}>
												{place.name}
										</Typography>
										<img
											className={classes.pointer}
											src={place.photo ? place.photo.images.large.url : "https://pixabay.com/photos/restaurant-table-setting-table-449952/"}
											alt={place.name}
											/>
										<Rating  size="small" value={Number(place.rating)}  readOnly/>
									</Paper>
								)
							}	
						</div>
					))
				}
			</GoogleMapReact>
		</div>
	)
}

export default Map