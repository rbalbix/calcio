const routes = require('express').Router();
// Add validation with Celebrate
const { celebrate, Segments, Joi } = require('celebrate');

const { RankController } = require('./app/controllers');

/**
 *
 * HOW ORGANIZE VARIOUS ROUTES ???
 *
 */

routes.get('/rank/top', RankController.top);

/**
 *
 * EXAMPLES OF CELEBRATE
 *
 */

// routes.post(
//   '/ongs',
//   celebrate({
//     [Segments.BODY]: Joi.object().keys({
//       name: Joi.string().required(),
//       email: Joi.string()
//         .required()
//         .email(),
//       whatsapp: Joi.string()
//         .required()
//         .min(11)
//         .max(13),
//       city: Joi.string().required(),
//       uf: Joi.string()
//         .required()
//         .length(2)
//     })
//   }),
//   OngController.create
// );

// routes.get(
//   '/profile',
//   celebrate({
//     [Segments.HEADERS]: Joi.object({
//       authorization: Joi.string().required()
//     }).unknown()
//   }),
//   ProfileController.index
// );

// routes.get(
//   '/incidents',
//   celebrate({
//     [Segments.QUERY]: Joi.object().keys({
//       page: Joi.number()
//     })
//   }),
//   IncidentController.index
// );

// routes.post('/incidents', IncidentController.create);

// routes.delete(
//   '/incidents/:id',
//   celebrate({
//     [Segments.PARAMS]: Joi.object().keys({
//       id: Joi.number().required()
//     })
//   }),
//   IncidentController.delete
// );

module.exports = routes;
