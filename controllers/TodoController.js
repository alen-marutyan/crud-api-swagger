const {TodoService} = require("../service");

class TodoController {
    async create( req, res, next ) {
        try {
            const { title, completed } = req.body;
            const data = await TodoService.create({ title, completed });
            return res.status(200).json({ data });
        }catch (e) {
            next(e);
        }
    }

    async all( req, res, next ) {
        try {
            const data = await TodoService.all();
            return res.status(200).json({ data });
        }catch (e) {
            next(e);
        }
    }

    async get( req, res, next ) {
        try {
            const data = await TodoService.get(req.params.id);
            return res.status(200).json({ data });
        }catch (e) {
            next(e);
        }
    }

    async update( req, res, next ) {
        try {
            const { title, completed } = req.body;
            const data = await TodoService.update(req.params?.id, {title, completed});
            return res.status(200).json({data});
        }catch (e) {
            next(e);
        }
    }

    async remove( req, res, next ) {
        try {
            await TodoService.remove(req.params?.id);
            return res.status(200).json({ message: "Successfully deleted!" })
        } catch (e) {
          next(e);
        }
    }
}

module.exports = new TodoController();
