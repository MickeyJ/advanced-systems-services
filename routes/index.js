var express = require('express');
var router = express.Router();

const mainDescription = (
  `Providing scheduled maintenance, repairs, 
  and fabrication for physical plants, mobile specialty 
  vehicles and trailers. On site or at our 3 acre facility. Since 1990.`
);

const subServices = ['one', 'two', 'three'];

router.get('/', (req, res, next) =>{
  res.render('index', {
    title: 'Home',
    description: mainDescription
  });
});

router.get('/services', (req, res, next) =>{
  res.render('services_default', {
    title: 'Services',
    description: mainDescription
  });
});

subServices.forEach((x) =>{
  router.get(`/services_${x}`, (req, res, next) =>{
    res.render(`services_${x}`, {
      title: 'Services',
      sub: x,
      description: mainDescription
    });
  });
});

router.get('/contact', (req, res, next) =>{
  res.render('contact', {
    title: 'Contact',
    description: mainDescription
  });
});

module.exports = router;
