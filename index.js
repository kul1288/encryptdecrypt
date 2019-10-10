var crypto = require('crypto');
var key = '00000000000000000000000000000000'; //replace with your key
var iv = '0000000000000000'; //replace with your IV
var cipher = crypto.createCipheriv('aes256', key, iv)
var crypted = cipher.update("data to encrypt", 'utf8', 'base64')
crypted += cipher.final('base64');
console.log(crypted);


var decipher = crypto.createDecipheriv('aes256',key,iv);
var dec = decipher.update(crypted,'base64','utf8')
dec += decipher.final('utf8');
console.log(dec);