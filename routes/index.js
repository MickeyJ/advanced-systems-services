var express = require('express');
var router = express.Router();

const mainDescription = (
  `Providing scheduled maintenance, repairs, 
  and fabrication for physical plants, mobile specialty 
  vehicles and trailers. On site or at our 3 acre facility. Since 1990.`
)

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    description: mainDescription
  });
});

router.get('/services', function(req, res, next) {

  console.log(req.query);

  res.render('services_default', {
    title: 'Services',
    sub: req.query.sub || 'default',
    description: mainDescription
  });

});

router.get('/services_one', function(req, res, next) {

  res.render('services_one', {
    title: 'Services',
    sub: 'one',
    description: mainDescription
  });

});

router.get('/services_two', function(req, res, next) {

  res.render('services_two', {
    title: 'Services',
    sub: 'two',
    description: mainDescription
  });

});

router.get('/services_three', function(req, res, next) {

  res.render('services_three', {
    title: 'Services',
    sub: 'three',
    description: mainDescription
  });

});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    description: mainDescription
  });
});

module.exports = router;
