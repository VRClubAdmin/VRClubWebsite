
/* 
 * This module is for all database related activities in the project
 */

import mongoose = require('mongoose');

// this connects to the database for querys, etc.

function createConnectionString(username: string, password: string, host: string, port: string, database: string, options: string) {

}

function connect(connectionString: string) {
    mongoose.connect(connectionString);
}


// this gets the 
export function get() {

}

// this gets the 
export function set() {

}