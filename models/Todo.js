const { Schema, model } = require('mongoose');


const TodoSchema = new Schema({
    title: { type: String, required: true },
    completed: { type: Boolean, required: true, defaultValue: false },
});

const Todo = model('Todo', TodoSchema);

module.exports = Todo;
