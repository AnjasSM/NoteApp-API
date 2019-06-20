const response = require('./response');
const connection = require('./connect');
const moment = require('moment');
const time = moment();

exports.home = (req, res) => {
   response.dataResponse('Note App Home', res)
}

// add note to db
exports.notes = (req, res) => {
   let { title } = req.body;
   let { note } = req.body;
   let { id_category } = req.body;
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

//read notes from db
exports.readNotes = (req, res) => {
   const { search } = req.query;
   const { sort } = req.query;
   const { page } = req.query;
   const { limit } = req.query;
   let sql = `SELECT notes.id, notes.title, notes.note, notes.time,
            categories.category FROM notes INNER JOIN categories
            ON notes.id_category = categories.id`
   let start = 0;
   //search by title from db
   if(search) {
      sql +=` WHERE title LIKE '%${search}%'`;
   //sort db table descendingly
   } if(sort === 'DESC') {
      if(sort === 'DESC') {
         sql +=` ORDER BY time DESC`;
      } else {
         sql +=` ORDER BY time ASC`;
      }
      //get notes in page and give limit per page
   } if(page && limit) {
      if(page > 1) {
         start = (page * limit) - limit
      }
      sql += ` LIMIT ${start},${limit}`
      //sort Ascendingly or if url didn't have search/sort/page and limit query
   } connection.query(
         sql,(err, rows, fields) => {
            console.log(rows)
            if (err) {
               throw err
            } else {
               return res.send({
                  error: false,
                  data: rows,
                  message: `notes has been showed`
               })
            }
         }
      )
      console.log(sql)
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