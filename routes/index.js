var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Home',
    description: (
      `Providing scheduled maintenance, repairs, 
      and fabrication for physical plants, mobile specialty 
      vehicles and trailers. On site or at our 3 acre facility. Since 1990.`
    )
  });
});

router.get('/about', function(req, res, next) {
  res.render('bout', {
    title: 'About',
    description: (
      `Providing scheduled maintenance, repairs, 
      and fabrication for physical plants, mobile specialty 
      vehicles and trailers. On site or at our 3 acre facility. Since 1990.`
    )
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact',
    description: (
      `Providing scheduled maintenance, repairs, 
      and fabrication for physical plants, mobile specialty 
      vehicles and trailers. On site or at our 3 acre facility. Since 1990.`
    )
  });
});

module.exports = router;
