"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * the router
 */
const express = require("express");
const router = express.Router();
router.get('/about_us', (req, res) => {
    res.render('about_us', { title: 'About Us' });
});
exports.default = router;
//# sourceMappingURL=about-us.js.map