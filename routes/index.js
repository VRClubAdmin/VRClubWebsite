"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * the router
 */
const express = require("express");
//import database = require('./database');
const router = express.Router();
const bodyParser = require("body-parser");
router.get('/', (req, res) => {
    res.render('index', { title: 'VR Club' });
});
router.get('/about-us', (req, res) => {
    res.render('about-us', { title: 'About Us' });
});
router.get('/resources', (req, res) => {
    res.render('resources', { title: 'Resources' });
});
router.get('/sign-up', (req, res) => {
    res.render('sign-up', { title: 'Sign Up' });
});
router.get('/upcoming-events', (req, res) => {
    res.render('upcoming-events', { title: 'Upcoming Events' });
});
router.get('/minutes', (req, res) => {
    res.render('minutes', { title: 'Minutes' });
});
router.get('/contact-us', (req, res) => {
    res.render('contact-us', { title: 'Contact Us' });
});
router.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy', { title: 'Privacy Policy' });
});
/*
router.post('/sign-up', (req: express.Request, res: express.Response) => {
    var user_name = req.body.data;
    var password = req.body.password;
    res.end(database.signUp());  // returns status code for request
});

*/
exports.default = router;
//# sourceMappingURL=index.js.map