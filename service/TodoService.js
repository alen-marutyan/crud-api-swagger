const { Todo } = require('../models/index');
class TodoService {
    create( data ) {
        return Todo.create({...data});
    }

    all(  ) {
        return Todo.find().lean();
    }

    get( id ) {
        return Todo.findById( id );
    }

    update( id, data ) {
        return Todo.findByIdAndUpdate( id, {...data}, {new: true} );
    }
    remove( id ) {
        return Todo.findByIdAndDelete( id );
    }
}

module.exports = new TodoService();
