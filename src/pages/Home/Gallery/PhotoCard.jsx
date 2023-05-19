
const PhotoCard = ({ photo }) => {
	const { id, url, alt } = photo;

	return (
		<div>
			<div className="card  bg-base-100 shadow-xl rounded-lg">
				<figure><img src={url} alt={alt} /></figure>
				{/* <div className="card-body">
					<h2 className="card-title">alt</h2>
					<p>id</p>
					<div className="card-actions justify-end">
						<button className="btn btn-primary">Watch</button>
					</div>
				</div> */}
			</div>
		</div>
	);
};

export default PhotoCard;