const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.json({
        msg: 'get API'
    });
});

router.put('/', (req, res) => {
    res.status(500).json({
        msg: 'put API'
    });
});

router.post('/', (req, res) => {
    res.status(201).json({
        msg: 'post API'
    });
});

router.delete('/', (req, res) => {
    res.json({
        msg: 'delete API'
    });
});

router.patch('/', (req, res) => {
    res.json({
        msg: 'patch API'
    });
});


module.exports = router;