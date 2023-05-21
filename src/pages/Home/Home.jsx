import banner1 from '../../assets/banner/New folder/b1.webp'
import banner2 from '../../assets/banner/New folder/b5.jpg'
import banner3 from '../../assets/banner/New folder/b2.webp'
import banner4 from '../../assets/banner/New folder/b4.jpg'
import banner5 from '../../assets/banner/New folder/b3.webp'
import Gallery from './Gallery/Gallery'
import ShopCategory from './ShopCategory/ShopCategory'


const Home = () => {
	return (
		<>
			<div className="carousel w-full h-[800px] rounded-xl">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={banner1} className="w-full " />
					<div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#eca2da] to-[rgba(21, 21, 21, 0)]">
						<div className='text-white space-y-7 pl-12'>
							<h2 className='text-6xl font-bold'>Disney Dreamland Doll</h2>
							<p className='text-xl'> Live dream with disney magic & <br /> Discover a world of magic and nostalgia with us
							</p>
							<div>
								<button className="text-white btn btn-outline btn-primary mr-5">Show Toys</button>
								<button className="text-white btn btn-outline btn-primary ">Buy Toys</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide4" className="btn btn-circle btn-outline btn-primary bg-purple-300 mr-5">❮</a>
						<a href="#slide2" className="btn btn-circle btn-outline btn-primary bg-purple-300">❯</a>
					</div>
				</div>

				<div id="slide2" className="carousel-item relative w-full">
					<img src={banner2} className="w-full " />

					<div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#eca2da] to-[rgba(21, 21, 21, 0)]">
						<div className='text-white space-y-7 pl-12'>
							<h2 className='text-6xl font-bold'>Disney Dreamland Doll</h2>
							<p className='text-xl'> Live dream with disney magic & <br /> Discover a world of magic and nostalgia with us
							</p>
							<div>
								<button className="text-white btn btn-outline btn-primary mr-5">Show Toys</button>
								<button className="text-white btn btn-outline btn-primary ">Buy Toys</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide1" className="btn btn-circle btn-outline btn-primary bg-purple-300 mr-5">❮</a>
						<a href="#slide3" className="btn btn-circle btn-outline btn-primary bg-purple-300">❯</a>
					</div>


				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src={banner3} className="w-full " />
					<div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#eca2da] to-[rgba(21, 21, 21, 0)]">
						<div className='text-white space-y-7 pl-12'>
							<h2 className='text-6xl font-bold'>Disney Dreamland Doll</h2>
							<p className='text-xl'> Live dream with disney magic & <br /> Discover a world of magic and nostalgia with us
							</p>
							<div>
								<button className="text-white btn btn-outline btn-primary mr-5">Show Toys</button>
								<button className="text-white btn btn-outline btn-primary ">Buy Toys</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide2" className="btn btn-circle btn-outline btn-primary bg-purple-300 mr-5">❮</a>
						<a href="#slide4" className="btn btn-circle btn-outline btn-primary bg-purple-300">❯</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src={banner4} className="w-full " />
					<div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#eca2da] to-[rgba(21, 21, 21, 0)]">
						<div className='text-white space-y-7 pl-12'>
							<h2 className='text-6xl font-bold'>Disney Dreamland Doll</h2>
							<p className='text-xl'> Live dream with disney magic & <br /> Discover a world of magic and nostalgia with us
							</p>
							<div>
								<button className="text-white btn btn-outline btn-primary mr-5">Show Toys</button>
								<button className="text-white btn btn-outline btn-primary ">Buy Toys</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide3" className="btn btn-circle btn-outline btn-primary bg-purple-300 mr-5">❮</a>
						<a href="#slide5" className="btn btn-circle btn-outline btn-primary bg-purple-300">❯</a>
					</div>
				</div>

				<div id="slide5" className="carousel-item relative w-full">
					<img src={banner5} className="w-full " />
					<div className="absolute h-full flex items-center  left-0 top-0 bg-gradient-to-r from-[#eca2da] to-[rgba(21, 21, 21, 0)]">
						<div className='text-white space-y-7 pl-12'>
							<h2 className='text-6xl font-serif'>Disney Dreamland Doll</h2>
							<p className='text-xl font-serif'> Live dream with disney magic & <br /> Discover a world of magic and nostalgia with us
							</p>
							<div>
								<button className="text-white btn btn-outline btn-primary mr-5">Show Toys</button>
								<button className="text-white btn btn-outline btn-primary ">Buy Toys</button>
							</div>
						</div>
					</div>
					<div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
						<a href="#slide4" className="btn btn-circle btn-outline btn-primary bg-purple-300 mr-5">❮</a>
						<a href="#slide1" className="btn btn-circle btn-outline btn-primary bg-purple-300">❯</a>
					</div>
				</div>



			</div>


			{/* image gallery */}
			<Gallery></Gallery>

			{/* react tab - shop by Category */}
			<ShopCategory></ShopCategory>

		</>
	);
};

export default Home;