## yarn create vite app > chose react and javascript 
## This is the frontend that i'm connecting to my backend application. You can find this back end here:  https://github.com/CaioAugustobrg/backendlogin

## ABOUT THIS PROJECT: When you access the project link, you will find yourself with the login page. However, assuming you do not have a database account yet, there is a link to be redirected to the registration page. The registration page expects a valid email, a username longer than 3 characters and a password with at least 8 digits, when everything is filled in correctly, the data is sent to the backend in JSON format (using axios) by the POST method within the request object. In the backend of the registration route, checks are made with conditionals (such as if...else) together with prisma to make sure that the data is in accordance and that it does not exist in the database; if it passes all the checks, it will be registered and I will send an automatic email to the email he registered in the application thanking for the registration: I inform in the body of the email the link to the repository and the link to my linkedin profile. At this point the user is redirected to the login page and now he can fill in the registered data. The login page has the same input verifiers and sends them to the database in JSON format also by the POST method inside the request object and will go through the conditionals along with the prisma to make sure that user has registered; in the response object of the login route will be an 'error: false' message, a message saying that everything went well and a JWT token inside the cookie. Finally, the user is redirected to the next page called transactions. 