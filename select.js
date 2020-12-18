const db = require('./lib/db');

const con = db.connect();

let sql ='';
sql ='SELECT * FROM users';

con.query(sql,(err,results) => {
    results.forEach((user) => {
        console.log(user.id);
        console.log(user.email);
    })
});

sql = 'SELECT * FROM users WHERE ?';
let params = {}
params= { id: 3 }

con.query(sql,params, (err, results) => {
    if (err) throw err; 
    let user = result[0];
    console.log('${user.first_name} ${user.last_name}')
});

sql = 'SELECT * FROM users LIMIT ? OFFSET ?';
const limit =3;
const offset = 0;
params = [limit, offset]

con.query(sql,params,(err, result) => {
    if (err) throw err;
    result.forEach((user) => {
        console.log(user.email);
    })
});

con.end();