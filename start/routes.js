'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', 'HomeController.home');

/*Route for book crud*/
Route.put('/api/books/:id', 'BookController.update');
Route.delete('/api/books/:id', 'BookController.destroy');
Route.post('/api/books', 'BookController.store');
Route.get('/api/books', 'BookController.index');