
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID === undefined ? 'XjoWETLL#E7vmI8jMA6qfYJbjXC3RZSs38J3VpfBFUEOiZhQ56rM' : process.env.SESSION_ID,
};
