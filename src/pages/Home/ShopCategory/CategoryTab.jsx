import { Tab, Tabs, TabPanel, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CategoryTab = ({ dollCategory }) => {
	const { id, category, subcategories } = dollCategory;

	return (
		<div>
			<div >
				{/* <Tabs >
					<TabPanel>
						{
							subcategories.map(subcategory => <div key={id}>{subcategory.name}</div>)
						}
					</TabPanel>
				</Tabs> */}

				<Tabs>
					<TabList>
						<Tab>Tab 1</Tab>
						<Tab>Tab 2</Tab>
						<Tab>Tab 3</Tab>
					</TabList>

					<TabPanel>
						<h2>Subsection 1 of Tab 1</h2>
						<p>Content for Subsection 1 of Tab 1 goes here.</p>
					</TabPanel>
					<TabPanel>
						<h2>Subsection 2 of Tab 1</h2>
						<p>Content for Subsection 2 of Tab 1 goes here.</p>
					</TabPanel>

					<TabPanel>
						<h2>Subsection 1 of Tab 2</h2>
						<p>Content for Subsection 1 of Tab 2 goes here.</p>
					</TabPanel>
					<TabPanel>
						<h2>Subsection 2 of Tab 2</h2>
						<p>Content for Subsection 2 of Tab 2 goes here.</p>
					</TabPanel>

					<TabPanel>
						<h2>Subsection 1 of Tab 3</h2>
						<p>Content for Subsection 1 of Tab 3 goes here.</p>
					</TabPanel>
					<TabPanel>
						<h2>Subsection 2 of Tab 3</h2>
						<p>Content for Subsection 2 of Tab 3 goes here.</p>
					</TabPanel>
				</Tabs>
			</div>
		</div>
	);
};

export default CategoryTab;