import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
const ShopCatergory = () => {
	return (
		<div><h2 className="text-3xl text-purple-700 font-serif font-bold text-center m-5">Shop Category</h2>
			<Tabs>
				<TabList>
					<Tab>Title 1</Tab>
					<Tab>Title 2</Tab>
				</TabList>

				<TabPanel>
					<h2>Any content 1</h2>
				</TabPanel>
				<TabPanel>
					<h2>Any content 2</h2>
				</TabPanel>
			</Tabs>
		</div>
	);
};

export default ShopCatergory;