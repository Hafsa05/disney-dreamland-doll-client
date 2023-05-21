import banner1 from '../../assets/banner/New folder/b1.webp'
import banner2 from '../../assets/banner/New folder/b5.jpg'
import banner3 from '../../assets/banner/New folder/b2.webp'
import banner4 from '../../assets/banner/New folder/b4.jpg'
import banner5 from '../../assets/banner/New folder/b3.webp'
import Gallery from './Gallery/Gallery'
import ShopCategory from './ShopCategory/ShopCategory'


const Home = () => {
	return (
		<div>
			<div className="carousel w-full h-[750px]">
				<div id="item1" className="carousel-item w-full">
					<img src={banner1} className="w-full" />

					<div className="absolute h-full flex items-center left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
						<div className='text-white space-y-7 w-1/2 pl-12'>
							<h2 className='text-6xl font-bold'>Affordable Price For Car Servicing</h2>
							<p>
								There are many variations of passages of  available, but the majority have suffered alteration in some form
							</p>
							<div>
								<button className="text-white btn btn-error mr-5">Discover More</button>
								<button className="btn btn-outline text-white">Latest Project</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide4" className="btn btn-circle mr-5">❮</a>
						<a href="#slide2" className="btn btn-circle">❯</a>
					</div>

				</div>
				<div id="item2" className="carousel-item w-full">
					<img src={banner2} className="w-full" />
				</div>
				<div id="item3" className="carousel-item w-full">
					<img src={banner3} className="w-full" />
				</div>
				<div id="item4" className="carousel-item w-full">
					<img src={banner4} className="w-full" />
				</div>
				<div id="item5" className="carousel-item w-full">
					<img src={banner5} className="w-full" />
				</div>

			</div>
			<div className="flex justify-center w-full py-2 gap-2 bg-purple-50">
				<a href="#item1" className="btn btn-xs bg-purple-200 border-white w-10">1</a>
				<a href="#item2" className="btn btn-xs bg-purple-200 border-white w-10">2</a>
				<a href="#item3" className="btn btn-xs bg-purple-200 border-white w-10">3</a>
				<a href="#item4" className="btn btn-xs bg-purple-200 border-white w-10">4</a>
				<a href="#item5" className="btn btn-xs bg-purple-200 border-white w-10">5</a>

			</div>

			{/* image gallery */}
			<Gallery></Gallery>

			{/* react tab - shop by Category */}
			<ShopCategory></ShopCategory>

		</div>
	);
};

export default Home;