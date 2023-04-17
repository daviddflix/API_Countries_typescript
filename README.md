# Country API
This is a RESTful API that provides information about countries around the world. It has the following endpoints:

## '/'
Retrieves a list of all countries.

HTTP Method: GET

Query Parameters:

country (string) - If provided, filters the results to include only countries whose name matches the query string.
page (integer) - If provided, returns a paginated response with page items per page. Defaults to 10.

Response:
200 OK - Returns an array of countries that match the query parameters.

## '/:id'
Retrieves details about a specific country.

HTTP Method: GET

URL Parameters:

id (string) - The ID of the country to retrieve.

Response:
200 OK - Returns an object containing details about the specified country.

## '/activities'
Retrieves a list of all activities created.

HTTP Method: GET

Response:
200 OK - Returns an array of all the activities created.

## '/continentFilter'
Retrieves a list of all countries from a specified continent.

HTTP Method: GET

Query Parameters:

continent (string) - Required. The name of the continent to filter the results by.
page (integer) - If provided, returns a paginated response with page items per page. Defaults to 10.

Response:
200 OK - Returns an array of countries that belong to the specified continent.

## '/orderFilter/:order'
Retrieves a list of all countries ordered alphabetically (A-Z or Z-A).

HTTP Method: GET

URL Parameters:

order (string) - Required. The order in which to sort the countries. Valid values are "ASC" or "DESC".
page (integer) - If provided, returns a paginated response with page items per page. Defaults to 10.

Response:
200 OK - Returns an array of countries ordered according to the specified order.

## '/activities'
Creates a new activity.

HTTP Method: POST

Request Body:

activity (string) - Required. The name of the activity.
difficulty (string) - Required. The difficulty level of the activity.
duration (string) - Required. The duration of the activity.
season (string) - Required. The season in which the activity is available.
country (array of strings) - Required. An array of country names where the activity is available.

Response:
201 Created - Returns an object containing details about the newly created activity.

That's it! With this API, you can retrieve information about countries and their associated activities, as well as create new activities. Happy coding!
