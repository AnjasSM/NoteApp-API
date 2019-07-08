### Need to Install

- NodeJS v8+

### Instalation

to running the code :

```sh
$ git clone https://github.com/AnjasSM/NoteApp-API.git
$ cd NoteApp-API
$ npm install
$ go to file connect
$ focus on code same in bellow
$ const conn = mysql.createConnection({
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port
});
$ change host, user, password, database & port with your own database setting
$ npm start
```
