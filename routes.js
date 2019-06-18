module.exports = (app) => {
    const controller = require('./controller')
    //GET
    app.get('/',controller.home)
    app.get('/note',controller.readNotes)
    app.get('/note/:id',controller.notesById)
    app.get('/category',controller.readCategories)
    app.get('/category/:id',controller.categoriesById)
    //POST
    app.post('/note',controller.notes)
    app.post('/category',controller.categories)
    //PATCH
    app.patch('/note/:id',controller.updateNote)
    app.patch('/category/:id',controller.updateCategory)
    //DELETE
    app.delete('/note/:id',controller.deleteNote)
    app.delete('/category/:id',controller.deleteCategory)
}