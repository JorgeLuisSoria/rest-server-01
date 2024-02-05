const { Router } = require('express');
const { check } = require('express-validator');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearCategoria } = require('../controllers/categorias');

const router = Router();

/**
 * {{url}}/api/categorias
 */

// Obtener todas las categorias - público
router.get('/', (req, res) => {
    res.json('get');
});

// Obtener una categoría por Id - público
router.get('/:id', (req, res) => {
    res.json('get - id');
});

// Crear categoría - privado con cualquier rol con token válido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

// Actualizar - privado - cualquiera con token válido
router.put('/:id', (req, res) => {
    res.json('put');
});

// Borrar categoría - Admin role
router.delete('/:id', (req, res) => {
    res.json('delete');
});

module.exports = router;