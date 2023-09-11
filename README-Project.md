Project: Bloger2 (EDIT THIS FILE IN VSCODE) -> THIS IS A CLONE OF PROJECT 'bloger'
(React js, Node.js + Express + MySQL)
C:\xampp\htdocs\projects\bloger2

-----------------------------------------------------------------------------------------------------

Project: Bloger2  (FRONTEND) /client
(React js, Node.js + Express + MySQL)
C:\xampp\htdocs\projects\bloger2\client

-----------------------------------------------------------------------------------------------------
Project: Bloger2  (BACKEND) /api
(Node.js)
C:\xampp\htdocs\projects\bloger2\api

-----------------------------------------------------------------------------------------------------

STATUS: WORKING, BACKED UP, API'S TESTED OK WITH POSTMAN

DATE: 08/31/2023

DATABASE: bloger_app2 (bloger_app2.users, bloger_app2.posts)
DB USER: root
DB PASSWORD: 

-----------------------------------------------------------------------------------------------------

BACKEND DEPENDENCIES:	{				FRONTEND DEPENDENCIES:   {
		"axios": "^1.5.0",						"@testing-library/jest-dom": "^5.16.4",
    	"bcryptjs": "^2.4.3",					"@testing-library/react": "^13.1.1",
    	"cookie-parser": "^1.4.6",				"@testing-library/user-event": "^13.5.0",
    	"express": "^4.18.2",					"axios": "^1.5.0",
    	"jsonwebtoken": "^9.0.2",				"moment": "^2.29.4",
    	"multer": "^1.4.5-lts.1",				"react": "^18.0.0",
    	"mysql2": "^3.6.0",						"react-dom": "^18.0.0",
    	"nodemon": "^3.0.1"						"react-moment": "^1.1.3",
  	}											"react-quill": "^2.0.0",
												"react-router-dom": "^6.8.1",
    											"react-scripts": "5.0.1",
    											"sass": "^1.66.1",
    											"web-vitals": "^2.1.4"
											}

----------------------------------------------------------------------------------------------------

NOTEs(!)
Was a fairly smooth process, see References & Links. 
/bloger2/api/routes/users.js -> EMPTY FILE
Verify with package.json & use caution when installing dependencies. Remember to create the 
/public/upload directory on the client side. 

TODO's:
 * THIS IS A Clone OF 'bloger' app to 'bloger2' db-> MySQL Database (bloger_app2)
1- Pagination -> see projects (2b-node-js-mongodb-pagination, 2f-react-table-pagination-server-side)
2- Search feature component by: (author, category, title, etc.)
3- Reader comments on posts 
* 3- Site is not responsive, maybe Bootstrap?
4- Password change / reset / recovery for registered users
5- .env file for db connection / auth
----------------------------------------------------------------------------------------------------
REFERENCES / SOURCES / LINKS:

Building a Full-Stack Blog Application: A Step-by-Step Tutorial
Node.js React js, Express and MySQL: Blog Application Example:
https://medium.com/@santiagobedoa/building-a-full-stack-blog-application-a-step-by-step-tutorial-ad9067a8ec90

How to use Bootstrap 5 in React.js:
https://coreui.io/blog/bootstrap-react-tutorial-with-examples/

React Icons:
https://react-icons.github.io/react-icons

Ionicons 5
https://react-icons.github.io/react-icons/icons?name=io5

Open React Router <Link> At The Top Of Page With JavaScript
https://royeraadames.medium.com/open-react-router-link-at-top-of-page-c8e48a72da99

GitHUB (Blog Post APP):
https://github.com/santiagobedoa/tutorial-blog_post_app/tree/master

----------------------------------------------------------------------------------------------------
MODIFICATIONS:

- Added directory /api/auth & created file 'forgotpassword.js'













