const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'shoyanet.com',
  user: 'odluvdyi_admin',
  password: 'I@mCre0le4Life',
  database: 'odluvdyi_shasha'
});
connection.connect();
connection.query('SELECT * FROM wp_users WHERE id=2',function (err, rows, fields){
  if (!err) {
    console.log(rows);
  } else {
    console.log(err);
  }
});
connection.end();
