import { useEffect, useState } from "react";
import PhotoCard from "./PhotoCard";

const Gallery = () => {
	const [photos, setPhotos] = useState([]);

	useEffect(() => {
		fetch('https://disney-dreamland-doll-server.vercel.app/gallery')
			.then(res => res.json())
			.then(data => setPhotos(data));
	}, [])

	return (
		<div className="p-10 mx-auto">
			<p className="text-3xl text-purple-700 font-serif font-bold text-center m-5">Product Galley</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
				{
					// <p>{photos.length}</p> 
					photos.map(photo => <PhotoCard
						key={photo.id}
						photo={photo}
					></PhotoCard>)
				}

			</div>
		</div>

	);
};

export default Gallery;