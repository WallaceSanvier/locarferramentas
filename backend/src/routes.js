const express = require("express");
const { celebrate, Segments, Joi } = require("celebrate");

const UserController = require("./controllers/UserController");
const ToolController = require("./controllers/ToolController");
const RentController = require("./controllers/RentController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();
//login
routes.post("/sessions", SessionController.create);

routes.get("/users", UserController.index);

routes.post(
    "/users",
    celebrate({
        [Segments.BODY]: Joi.object().keys({
            name: Joi.string().required(),
            email: Joi.string().required().email(),
            whatsapp: Joi.string().required(),
        }),
    }),
    UserController.create
);
routes.delete(
    "/users/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.string().required(),
        }),
    }),
    UserController.delete
);

routes.get(
    "/tools",
    celebrate({
        [Segments.QUERY]: Joi.object().keys({
            page: Joi.number(),
        }),
    }),
    ToolController.index
);

routes.post("/tools", ToolController.create);

routes.delete(
    "/tools/:id",
    celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            id: Joi.number().required(),
        }),
    }),
    ToolController.delete
);

routes.get(
    "/rents",
    celebrate({
        [Segments.HEADERS]: Joi.object({
            authorization: Joi.string().required(),
        }).unknown(),
    }),
    RentController.index
);

module.exports = routes;
