"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * The router for the about us page
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('aboutUs', { title: 'About Us' });
});
exports.default = router;
//# sourceMappingURL=aboutUs.js.map