import banner1 from '../../assets/banner/New folder/b1.webp'
import banner2 from '../../assets/banner/New folder/b5.jpg'
import banner3 from '../../assets/banner/New folder/b2.webp'
import banner4 from '../../assets/banner/New folder/b4.jpg'
import banner5 from '../../assets/banner/New folder/b3.webp'
import Gallery from './Gallery/Gallery'
import ShopCatergory from './ShopCatergory/ShopCatergory'


const Home = () => {
	return (
		<div>
			<div className="carousel w-full h-[750px]">
				<div id="item1" className="carousel-item w-full">
					<img src={banner1} className="w-full" />
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
			<ShopCatergory></ShopCatergory>

		</div>
	);
};

export default Home;