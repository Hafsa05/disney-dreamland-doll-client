import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CategoryTab = ({ dollCategory }) => {
	const { id, category, subcategories } = dollCategory;

	return (
		<div>
			<div >
				<Tabs >
					<TabPanel>
						{
							subcategories.map(subcategory => <div key={id}>{subcategory.name}</div>)
						}
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default CategoryTab;