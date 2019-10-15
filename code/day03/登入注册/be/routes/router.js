var express = require('express');
var User = require('./models/user')
var router = express.Router();
var Good = require('./models/good');

router.get('/', function (req, res) {
    Good.find(function (err, goods) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        console.log(goods)
        res.render('index.html', {
            goods: goods
        })
    })
});

router.get('/login', function (req, res) {
    res.render('login.html')
});

router.post('/login', function (req, res) {
    var body = req.body
    User.findOne({
        email: body.email,
        password: body.password
    }, function (err, user) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: err.message
            })
        }
        // 如果邮箱和密码匹配，则 user 是查询到的用户对象，否则就是 null
        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid.'
            })
        }
        res.status(200).json({
            err_code: 0,
            message: 'OK'
        })
    })
});

router.get('/register', function (req, res) {
    res.render('register.html')
});

router.post('/register', function (req, res) {
    var body = req.body
    User.findOne({
        $or: [{
            email: body.email
        },
            {
                nickname: body.nickname
            }
        ]
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                success: false,
                message: '服务端错误'
            })
        }
        if (data) {
            // 邮箱或者昵称已存在
            return res.status(200).json({
                err_code: 1,
                message: 'Email or nickname aleady exists.'
            })
            return res.send(`邮箱或者密码已存在，请重试`)
        }

        new User(body).save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: 'Internal error.'
                })
            }

            res.status(200).json({
                err_code: 0,
                message: 'OK'
            })
            // 服务端重定向只针对同步请求才有效，异步请求无效
            // res.redirect('/')
        })
    })
});

router.get('/new', function (req, res) {
    res.render('new.html')
});

/*
 * 处理添加商品
 */
router.post('/new', function (req, res) {
    var admin = new Good({
        name: req.body.name,
        brand: req.body.brand,
        weight: req.body.weight,
        price: req.body.price,
        madeCity: req.body.madeCity
    })
    admin.save(function (err, ret) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
});

router.get('/edit', function (req, res) {
    Good.findById(req.query.id, function (err, goods) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.render('edit.html', {
            goods: goods
        })
    })
})

/*
 * 处理编辑学生
 */
router.post('/edit', function (req, res) {
    Good.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        brand: req.body.brand,
        weight: req.body.weight,
        price: req.body.price,
        madeCity: req.body.madeCity
    }, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})

/*
 * 处理删除学生
 */
router.get('/delete', function (req, res) {
    Good.findByIdAndRemove(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error.')
        }
        res.redirect('/')
    })
})

module.exports = router;