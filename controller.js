const response = require('./response');
const connection = require('./connect');
const moment = require('moment');
const time = moment();


exports.home = (req, res) => {
   response.dataResponse('Note App Home', res)
}

// add note to db
exports.notes = (req, res) => {
   let title = req.body.title;
   let note = req.body.note;
   let id_category = req.body.id_category;
   let date = time.format('L');
   connection.query(
      `INSERT into notes set title=?, note=?, time=?, id_category=?`,
      [title, note, date, id_category],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'note has been created',
            });
         }
      }
   )
}

exports.readNotes = (req, res) => {
   const { search } = req.query;
   const { sort } = req.query;
   const { page } = req.query;
   const { limit } = req.query;
   let sql = `SELECT 
            notes.id,notes.title,notes.note,notes.time,notes.id_category, categories.category
               FROM
            notes
               INNER JOIN
            categories ON notes.id_category = categories.id `
   let start = 0;
   if(search) {
      sql +=`LIKE '%${search}%'`;
   connection.query(
      sql, (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `${search} data has been showed`,
            });
         }
      }
   )
   } else if(sort === 'DESC') {
      sql +=`ORDER BY id DESC`;
      connection.query(
         sql, (err, rows, fields) => {
            if (err) {
               throw err
            } else {
               return res.send({
                  error: false,
                  data: rows,
                  message: 'notes has been showed',
               });
            }
         }
      )
   } else if(page && limit) {
      if(page > 1) {
         start = (page * limit) - limit
      }
      sql += `LIMIT ${start},${limit}`
      connection.query(
         sql,(err, rows, fields) => {
            if (err) {
               throw err
            } else {
               return res.send({
                  error: false,
                  data: rows,
                  message: `notes on page: ${page}`
               })
            }
         }
      )
   } else if(!search || !sort || sort === "ASC" || !page && !limit) {
      connection.query(
         sql, (err, rows, fields) => {
            if (err) {
               throw err
            } else {
               return res.send({
                  error: false,
                  data: rows,
                  message: 'notes has been showed',
               });
            }
         }
      )
      }
   }

//read note by id from db
exports.notesById = (req, res) => {
   let id = req.params.id;
   connection.query(
      'SELECT * from notes where id = ?',
      [id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `note id: ${id} has been showed`,
            });
         }
      }
   )
}

//delete note from db by note id
exports.deleteNote = (req, res) => {
   let id = req.params.id;
   connection.query(
      `DELETE from notes where id=${id}`,
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `note has been removed`
            })
         }
      }
   )
}

//update note from db by id
exports.updateNote = (req, res) => {
   let id = req.params.id;
   let title = req.body.title;
   let note = req.body.note;
   let catId = req.body.id_category;
   connection.query(
      `UPDATE notes set title=?,note=?,id_category=? where id=?`,
      [title, note, catId, id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'note has been updated'
            })
         }
      }
   )
}

//add category to db
exports.categories = (req, res) => {
   let categories = req.body.categories;
   connection.query(
      `INSERT into categories set category=?`,
      [categories],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'category has been added',
            });
         }
      }
   )
}

//read category from db
exports.readCategories = (req, res) => {
   connection.query(
      'SELECT * from categories', (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'categories has been showed',
            });
         }
      }
   )
}

//read category by id from db
exports.categoriesById = (req, res) => {
   let id = req.params.id;
   connection.query(
      'SELECT * from categories where id=?',
      [id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `category id: ${id} has been showed`,
            });
         }
      }
   )
}

//delete category from db by category id
exports.deleteCategory = (req, res) => {
   let id = req.body.id;
   connection.query(
      `DELETE from categories where id=?`,
      [id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: `category has been removed`
            })
         }
      }
   )
}

//update category from db by id
exports.updateCategory = (req, res) => {
   let id = req.body.id;
   let category = req.body.category;
   connection.query(
      `UPDATE categories set category=?,id=?`,
      [category, id],
      (err, rows, fields) => {
         if (err) {
            throw err
         } else {
            return res.send({
               error: false,
               data: rows,
               message: 'category has been updated'
            })
         }
      }
   )
}