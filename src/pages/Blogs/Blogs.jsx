/* eslint-disable react/no-unescaped-entities */

const Blogs = () => {
	return (
		<div>
			<p className="font-semibold text-purple-400">Que 1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
			<p> <span className="font-semibold text-purple-400"> Ans: </span><br /> In authentication and authorisation systems, access tokens and refresh tokens commonly used.</p>
			<p>An access token is a temporary token used to get access to protected resources. It is commonly used to send authenticated requests to a resource server. Access tokens are often provided with a limited scope that specifies the resources to which they can be utilized. A refresh token is a token that has a lengthy life and may be used to receive additional access tokens. Refresh tokens are normally not used to directly access protected resources. They are instead used to get fresh access tokens when the previous one expires. Refresh tokens often have a broader reach than access tokens.</p>
			<p>When a user signs in to an application, the authorization server provides the client application with an access token. The access token is used by the client application to perform authenticated queries to the resource server. When the access token expires, the client application can receive a new access token by using the refresh token. The refresh token may only be used a certain number of times to receive new access tokens. After a specific number of uses, the refresh token is revoked and cannot be used to get new access tokens.</p>
			<p>These two tokens are normally stored on the client side. But the particular place where they are kept, is determined by the programer.Access tokens and refresh tokens may be saved in the browser's local storage or session storage in some instances. In other circumstances, they may be saved in a database or on the user's device as a file. It is essential to securely store access tokens and refresh tokens. If they are not secured properly, attacker might use them to gain access to protected resources on the user's behalf. So to protect them and to secure our data we can follow the following steps :
				<div>
					<ul className="list-decimal">
						<li>i. Use algorithm to encrypt access tokens and refresh tokens before storing them so that we can protect then from misuse.</li>
					</ul>
					<ul>
						<li>ii. Store these tokens in a secure location.</li>
					</ul>
					<ul><li>iii. Invalidate them when they are no longer needed.</li>
					</ul>
				</div>
			</p>
			<p className="font-semibold text-purple-500">Que 2. Compare SQL and NoSQL databases?</p>
			<p><span className="font-semibold text-purple-500"> Ans: </span><br /></p>
			<p>SQL is a domain-specific language for querying and managing data. It operates by giving users the ability to query, insert, remove, and update records in relational databases. SQL also enables for the application of complicated logic via transactions and embedded procedures such as stored functions or views. </p>
			<p>NoSQL stands for Not Only SQL. It is a form of database that stores and retrieves data using non-relational data structures such as documents, graph databases, and key-value stores. NoSQL systems are meant to be more adaptable than traditional relational databases, and they can readily scale up or down to match variations in usage or demand. As a result, they are suited for use in applications. A short comparison between the SQL and NoSQL is given below: </p>
			<table className=" min-w-full">
				<thead>
					<tr className="bg-purple-100">
						<th className="border px-4 py-2 text-purple-500">SQL</th>
						<th className="border px-4 py-2 text-purple-500">NoSQL</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td className="border px-4 py-2">Stands for Structured Query Language</td>
						<td className="border px-4 py-2">Stands for Not Only SQL</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Relational database management system (RDBMS)</td>
						<td className="border px-4 py-2">Non-relational database management system</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Data is stored in tables with columns and rows.</td>
						<td className="border px-4 py-2">Data is stored in collections or documents</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Hierarchical data storage suites these databases.</td>
						<td className="border px-4 py-2">Hierarchical data storage is the best suited these databases system.</td>
					</tr>

					<tr>
						<td className="border px-4 py-2">Vertical scaling is required to manage vast amounts of data.</td>
						<td className="border px-4 py-2">To manage massive amounts of data, horizontal scaling is conceivable.</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Follows ACID properties (Atomicity, Consistency, Isolation, Durability) for transaction management</td>
						<td className="border px-4 py-2">This follows CAP which stands for consistency, availability, partition tolerance.</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Uses normalized data structure.</td>
						<td className="border px-4 py-2">Uses de-normalized data structure.</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Stands for Structured Query Language</td>
						<td className="border px-4 py-2">Stands for Not Only SQL</td>
					</tr>
					<tr>
						<td className="border px-4 py-2">Examples: MySQL, PostgreSQL, Oracle, SQL Server, Microsoft SQL Server.</td>
						<td className="border px-4 py-2">Examples: MongoDB, Cassandra, Couchbase, Amazon DynamoDB, Redis.</td>
					</tr>


				</tbody>
			</table>

			<p className="font-semibold text-purple-500">Que 3. What is express js? What is Nest JS?</p>
			<p><span className="font-semibold text-purple-500"> Ans: </span><br />
				Express.js is a well-known and commonly used Node.js web application framework. It takes a straightforward, simple approach to developing web apps and APIs. Express.js makes managing HTTP requests, routing, middleware implementation, and response processing easier. It enables developers to efficiently design server-side apps and APIs by offering a versatile and lightweight framework. <br />
				NestJS, on the other hand, is a TypeScript-based web application framework built on top of Node.js. It is intended to make the development of server-side applications more organized, scalable, and maintainable. NestJS is inspired by Angular and uses decorators, modules, and dependency injection to organize and construct applications. To make development easier, it includes capabilities like as routing, middleware, dependency injection, and a large ecosystem of modules. NestJS supports a number of transports (for example, HTTP and WebSockets) and adheres to architectural patterns such as MVC (Model-View-Controller) and SOLID principles. <br />

				While Express.js is more basic and flexible, NestJS is a more opinionated and organized framework with extra capabilities and patterns. The decision between the two is determined by the project's individual requirements and preferences.
			</p>
			<p className="font-semibold text-purple-500">Que 4. What is MongoDB aggregate and how does it work?</p>
			<p><span className="font-semibold text-purple-500"> Ans: </span><br />
				The aggregate function in MongoDB is used to conduct sophisticated data aggregation operations within the MongoDB database. It enables you to process and evaluate data by running it through a series of phases on a collection of documents. The aggregation pipeline is divided into phases, each of which performs a specific function on the documents. Filtering, grouping, sorting, converting, and calculating are examples of these steps. <br />

				Pipeline: Create an array of stages that correspond to the intended operation sequence. <br />

				Specify Stages: Each step of the pipeline describes an operation to be done on the documents. $match is used to filter documents, $group is used to group and summarize data, $sort is used to sort documents, and $project is used to reshape the data. <br />

				Apply Operators: To perform computations and transformations on the data, you can use operators such as $sum, $avg, $count, $push, $addToSet, and more within each stage. <br />

				Execute the Aggregation: Pass the pipeline array to MongoDB's aggregate function, which processes the documents through each stage of the pipeline. <br />

				Obtain Results: The aggregate output is the product of the pipeline's last stage. You may save the results in a new collection or retrieve them for future analysis. <br />

				We can efficiently perform complex data analysis tasks directly within MongoDB, reducing the need for additional data processing on the client-side by utilizing the aggregation framework. It allows to process large volumes of data, aggregate results, and gain valuable insights from your MongoDB collections.
			</p>



		</div>
	);
};

export default Blogs;