A URL shortner Service that takes a valid URL and returns a shortened URL, redirecting the user to the previously provided url.

It also keep track of total visit/clicks on the url

Routes:
POST /URL : Generates and return the shorterned url of example url

GET /:id : Redirects to the previous url with keeping the track of number of visits in mongoDB Shell.


*Implemented for educational purpose using Node.js,Express,and MongoDB*
