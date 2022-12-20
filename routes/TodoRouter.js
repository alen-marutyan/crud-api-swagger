const express = require('express');
const {TodoController} = require("../controllers");
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Todo:
 *       type: object
 *       required:
 *         - title
 *         - completed
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the todo
 *         title:
 *           type: string
 *           description: The todo title
 *         completed:
 *           type: boolean
 *           description: The todo completed
 *       example:
 *         id: afdfdg4155
 *         title: new todo
 *         completed: false
 */

/**
 * @swagger
 * tags:
 *   name: Todo
 *   description: The Todo managing API
 */

/**
 * @swagger
 * /api/v1/todo:
 *   post:
 *     summary: Create a new Todo
 *     tags: [Todo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Todo'
 *     responses:
 *       200:
 *         description: The todo was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       500:
 *         description: Some server error
 */
router.post('/', TodoController.create);

/**
 * @swagger
 * /api/v1/todo:
 *   get:
 *     summary: Returns the list of all the todos
 *     tags: [Todo]
 *     responses:
 *       200:
 *         description: The list of the todos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Todo'
 */
router.get('/', TodoController.all);

/**
 * @swagger
 * /api/v1/todo/{id}:
 *   get:
 *     summary: Get the todo by id
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *     responses:
 *       200:
 *         description: The todo description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Todo'
 *       404:
 *         description: The todo was not found
 */
router.get('/:id', TodoController.get);

/**
 * @swagger
 * /api/v1/todo/{id}:
 *  patch:
 *    summary: Update the todo by the id
 *    tags: [Todo]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The todo id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Todo'
 *    responses:
 *      200:
 *        description: The todo was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Todo'
 *      404:
 *        description: The todo was not found
 *      500:
 *        description: Some error happened
 */
router.patch('/:id', TodoController.update);

/**
 * @swagger
 * /api/v1/todo/{id}:
 *   delete:
 *     summary: Remove the todo by id
 *     tags: [Todo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The todo id
 *
 *     responses:
 *       200:
 *         description: The todo was deleted
 *       404:
 *         description: The todo was not found
 */
router.delete('/:id', TodoController.remove);

module.exports = router;
