const mysql = require('mysql');
const conn = mysql.createConnection({
  host: 'shoyanet.com',
  user: 'odluvdyi_admin',
  password: 'I@mCre0le4Life'
});
 conn.connect((err) => {
   if (err) {
     console.log("Error connecting");
     return;
   }
   console.log("Connection good!");
 });
 conn.end((err) => {

 });
