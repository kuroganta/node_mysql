const db = require('./lib/db');

// db.connect();

let flies = [
    './sql/01_create_table_users.sql',
];

flies.forEach((file) => {
    db.importSQL(file);
    
});

// db.importSQL();