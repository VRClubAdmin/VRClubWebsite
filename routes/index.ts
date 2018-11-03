/*
 * the router
 */
import express = require('express');
//import database = require('./database');

const router = express.Router();
const bodyParser = require("body-parser");

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'VR Club' });
});

router.get('/about-us', (req: express.Request, res: express.Response) => {
    res.render('about-us', { title: 'About Us' });
});

router.get('/resources', (req: express.Request, res: express.Response) => {
    res.render('resources', { title: 'Resources' });
});

router.get('/sign-up', (req: express.Request, res: express.Response) => {
    res.render('sign-up', { title: 'Sign Up' });
});

router.get('/upcoming-events', (req: express.Request, res: express.Response) => {
    res.render('upcoming-events', { title: 'Upcoming Events' });
});

router.get('/minutes', (req: express.Request, res: express.Response) => {
    res.render('minutes', { title: 'Minutes' });
});

router.get('/contact-us', (req: express.Request, res: express.Response) => {
    res.render('contact-us', { title: 'Contact Us' });
});

router.get('/privacy-policy', (req: express.Request, res: express.Response) => {
    res.render('privacy-policy', { title: 'Privacy Policy' });
});

/*
router.post('/sign-up', (req: express.Request, res: express.Response) => {
    var user_name = req.body.data;
    var password = req.body.password;
    res.end(database.signUp());  // returns status code for request
});

*/

export default router;