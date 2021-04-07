const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function listTodos (db = connection) {
    return db('todos').select()
}

function findTodo (id, db = connection){
    return db('todos').where({id}).select().first()
}

function addTodo (newTodo, db = connection) {
    return db('todos')
    .insert(newTodo)
    .then(ids => {
        return findTodo(ids[0], db)
    })
}

function updateTodo (id, updatedTodo, db = connection){
    return db('todos')
    .where('id', id)
    .update(updatedTodo)
    .then(itemsChanged => {
        return findTodo(id)
    })
}

function deleteTodo (id, db = connection) {
    console.log("db functions line:32", id)
    return db('todos')
    .where('id', id)
    .delete()
}

module.exports = {
    listTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    findTodo
}
