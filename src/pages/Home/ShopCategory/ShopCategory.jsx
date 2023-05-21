import { useEffect, useState } from "react";
import CategoryTab from "./CategoryTab";
import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const ShopCategory = () => {
	const [dollCategories, setDollCategories] = useState([]);

	useEffect(() => {
		fetch('shopCategory.json')
			.then(res => res.json())
			.then(data => setDollCategories(data));
	}, [])

	return (
		<div className="p-10 mx-auto "><h2 className="text-3xl text-purple-700 font-serif font-bold text-center m-5">Shop Category</h2>
			<Tabs className='text-center'>
				<TabList >
					{["Disney Princess", "Frozen Doll", "Animation Doll", "Donald Duck"].map(dollCategory =>
						<Tab>{dollCategory}</Tab>
					)}
				</TabList>

				{
					dollCategories.map(dollCategory =>
						<CategoryTab
							key={dollCategory.id}
							dollCategory={dollCategory}
						>
						</CategoryTab>
					)
				}
			</Tabs>
		</div>
	);
};

export default ShopCategory;