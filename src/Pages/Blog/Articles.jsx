import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

const Articles = () => {
    return (
        <div className="text-lg">
            <article>
                <h1 className="text-3xl font-bold mb-12">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>

                <p>Providing top notch security while delivering an excellent user experience is essential for every platform and Website/app building business. It can be irritating to sign in several times just to access the basic tools you need to do your job.</p>

                <h2 className="text-xl font-extrabold mt-7 mb-1">Access Token?</h2>
                <p>An access token is a piece of code that contains information about the user, timeframes, groups, and permissions which move from a server to a user device. Access tokens give permission to a particular application to access an API.</p>

                <p className="font-semibold mt-4 mb-3">Access tokens generally contain three parts that are used to verify a user has permission to access a particular resource including:</p>

                <ul className="ml-4">
                    <li className="mb-3"><strong>Header:</strong> gives information about how to validate the token and information about the type of token.</li>
                    <li className="mb-3"><strong>Payload:</strong> provides information about the user and application that is requesting access to the service.</li>
                    <li className="mb-3"><strong>Signature:</strong> contains the verification data used to validate and authenticate the token.</li>
                </ul>

                <p className="font-semibold mt-10 mb-4">Access tokens work by communicating between the server and a device where users follow these simple steps:</p>
                <ul className="list-disc ml-6">
                    <li><strong>Sign in:</strong> verify your identity by entering your username and password.</li>
                    <li><strong>Verify:</strong> the server verifies the data and provides a token.</li>
                    <li><strong>Store:</strong> the token is sent to your browser.</li>
                    <li><strong>Communicate:</strong> the token is verified each time you access something new on the server.</li>
                    <li><strong>Delete:</strong> the token is deleted once your session has ended.</li>
                </ul>

                <p className="font-black my-8">There are a few different types of access tokens, from JWT access tokens to API management tokens.</p>

                <h2 className="text-xl font-extrabold mt-7 mb-1">Refresh Token?</h2>

                <p>A refresh token is a special token used to unlock more access tokens. Access tokens are only valid for a short period of time. When they expire, a refresh token can give the user continued access without having to sign in again.</p>

                <p className="my-8 text-xl">When authentication servers provide an access token to a user it also provides a valid refresh token which is then used to authenticate users after the access token has expired.</p>

                <p>Refresh tokens improve the user experience without compromising any security and do not give users additional access beyond the original scope.</p>

                <p className="font-semibold mt-10 mb-4"> Let us dive into how refresh tokens work behind the scenes:</p>

                <ul className="list-disc ml-6">
                    <li><strong>Sign in:</strong> the user signs into an application using their username and password.</li>
                    <li><strong>Access a protected endpoint:</strong> the user gains access to a valid access token and the server makes a request on behalf of the user.</li>
                    <li><strong>Use a refresh token to renew access:</strong> the access token will expire after a short period of time, so a request is sent to another endpoint to renew the access token.</li>
                </ul>

                <p className="font-black my-8">If a user revokes access to their session the refresh token and the access token become invalid and a new request for an access token and a new refresh token.</p>
            </article>
            <article>
                <h1 className="text-3xl font-bold mb-12">Compare SQL and NoSQL databases?</h1>
                <h2 className="text-xl font-extrabold mt-7 mb-1">SQL Database</h2>

                <p>An SQL database—also known as a relational database—and named for the programming language it is written in, Structured Query Language (SQL). A relational database management system (RDBMS) executes queries, retrieves data, and edits data by updating, deleting, or creating new records. SQL is a lightweight, declarative language that does the heavy lifting for the relational database, acting as a database version of a server-side script.</p>

                <p className="text-xl my-8 ml-3">SQL databases remain popular because they fit naturally into many venerable software stacks, including LAMP and Ruby-based stacks. These databases are well understood and widely supported, which can be a major advantage if you run into problems. One particular advantage of SQL is its simple-yet-powerful JOIN clause, allowing developers to retrieve related data stored across multiple tables with a single command.</p>
                <h2 className="text-xl font-extrabold mt-7 mb-1">NoSQL database</h2>
                <p>NoSQL databases--also known as “non SQL” or “not only SQL,” store data in a format other than relational tables. If your data requirements aren not clear at the outset or if you are dealing with massive amounts of unstructured data, you will want to use non-relational databases because they offer greater flexibility.</p>

                <p className="text-xl my-8 ml-3">NoSQL databases offer more flexibility, which makes them more intuitive. NoSQL databases come in a variety of types based on their data model. The main types are document, key-value, wide-column, and graph.</p>

                <p className="text-orange-300 font-bold my-10 text-center">Data Structure/Models</p>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">SQL or relational models work better with structured data. This is because structured data is easy to search and analyze, much like data that is laid out in a table with columns and rows.</div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">NoSQL models make sense for less structured data sets because it does not rely on a predefined model to analyze the data.
                    </div>
                </div>
                <p className="text-orange-300 font-bold my-10 text-center">Scaling</p>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">Most SQL databases are vertically scalable, meaning that you add more RAM or CPU to your existing single server to increase storage space.</div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">NoSQL databases are horizontally scalable, meaning that you simply add more servers to your database to get more storage space. Because of the ability to add additional servers, NoSQL databases offer a much more distributed database. A popular way to horizontally scale your database is known as sharding. Sharding refers to the concept of splitting up your database into multiple components to sit on multiple servers.</div>
                </div>
                <p className="text-orange-300 font-bold my-10 text-center">Query Data</p>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">SQL systems are straightforward when it comes to data queries because they rely on one language. Because it is been around for a long time, a lot has also gone unchanged, making the language easier to pick up for team members who might be less tech-savvy.</div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">NoSQL systems are a bit more complex when it comes to running queries. Because there is no set query language, your team will likely need to work with a developer or someone a bit more knowledgeable in information technology to pull data queries.</div>
                </div>
                <p className="text-orange-300 font-bold my-10 text-center">Data Storage</p>
                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">The SQL storage model is a table with fixed rows and columns, which programmers refer to as a relational database.</div>
                    <div className="divider lg:divider-horizontal"></div>
                    <div className="grid flex-grow bg-base-300 rounded-box place-items-center p-3">There are multiple storage models for NoSQL databases, including key-value model, column storage, document database, and graph database.</div>
                </div>
            </article>
            <article>
                <h1 className="text-3xl font-bold mb-12 mt-16">What is express js? What is Nest JS?</h1>
                <h2 className="text-xl font-extrabold mt-7 mb-1">Express.js</h2>

                <p>Express.js is the most popular backend framework for Node.js, and it is an extensive part of the JavaScript ecosystem.</p>
                <p className="my-5">ExpressJS is a bridge between the front-end and back-end of a web application. It acts as the intermediary that processes data and information between the two, making it possible for users to interact with the application in real-time. This framework also includes a range of helpful features, such as middleware, routing, and templating, that make it easier to develop and maintain a web application.</p>
                <p className="ml-3 text-xl my-8">Technically speaking, ExpressJS is a free and open-source web application framework that is built on top of Node.js. It is designed to simplify the process of building and maintaining server-side applications. With ExpressJS, you can create dynamic and interactive websites, build RESTful APIs, and handle HTTP requests and responses in an organized and efficient manner.</p>
                <p className="font-black">ExpressJS is a great choice for beginners and experienced web developers alike. Its simple yet powerful architecture makes it easy to learn and use, while its robust set of features makes it suitable for creating complex web applications.</p>

                <h2 className="text-xl font-extrabold mt-7 mb-1">Nest.js</h2>
                <p>Nest.js is one of the fastest-growing Node.js frameworks for building efficient, scalable, and enterprise-grade backend applications using Node.js. It is known for producing highly testable, maintainable, and scalable applications using modern JavaScript and TypeScript.</p>
                <p className="ml-3 my-8 text-xl">Nest.js is a server-side Node.js framework that is great for building highly testable and maintainable backend applications. Since the framework leverages TypeScript, Nest.js is especially popular with teams seeking to leverage TypeScript is type-checking power. What is more, it is simple to learn and master, with a powerful CLI to boost productivity and ease of development. This powerful CLI makes it a breeze to jump-start any server-side project and see it to completion.</p>
            </article>
            <article>
                <h1 className="text-3xl font-bold mb-12 mt-16">What is MongoDB aggregate and how does it work</h1>
                <p>In MongoDB, aggregation operations process the data records/documents and return computed results. It collects values from various documents and groups them together and then performs different types of operations on that grouped data like sum, average, minimum, maximum, etc to return a computed result. It is similar to the <strong>aggregate function</strong> of SQL.</p>

                <p className="text-xl mt-10">MongoDB provides three ways to perform aggregation</p>

                <ul className="list-disc ml-12">
                    <li className="mt-4">Aggregation pipeline</li>
                    <li>Map-reduce function</li>
                    <li>Single-purpose aggregation</li>
                </ul>
                <p className="text-center font-bold mt-9 mb-3 text-orange-300">Aggregation pipeline</p>
                <p>In MongoDB, the aggregation pipeline consists of stages and each stage transforms the document.</p>
                <p className="text-center font-bold mt-9 mb-3 text-orange-300">Map Reduce</p>
                <p>Map reduce is used for aggregating results for the large volume of data. Map reduce has two main functions one is a map that groups all the documents and the second one is the reduce which performs operation on the grouped data.</p>
                <p className="text-center font-bold text-orange-300 mt-9 mb-3">Single Purpose Aggregation</p>
                <p>It is used when we need simple access to document like counting the number of documents or for finding all distinct values in a document. It simply provides the access to the common aggregation process using the count(), distinct(), and estimatedDocumentCount() methods, so due to which it lacks the flexibility and capabilities of the pipeline.</p>
            </article>
            <p className="mt-6"><small>Last updated:</small></p>
            <div className="flex justify-between mb-20">
                <p>25, March, 2022</p>
                <label className="swap swap-flip text-9xl">
                    <input type="checkbox" />
                    <div className="swap-off"><FaThumbsUp className="h-8"></FaThumbsUp></div>
                    <div className="swap-on"><FaThumbsDown className="h-8"></FaThumbsDown></div>
                </label>
            </div>
        </div>
    );
};

export default Articles;