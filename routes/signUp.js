"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * framework for the router for the signUp page
 */
const express = require("express");
const router = express.Router();
router.get('/', (req, res) => {
    res.render('signUp', { title: 'Sign Up' });
});
exports.default = router;
//# sourceMappingURL=signUp.js.map