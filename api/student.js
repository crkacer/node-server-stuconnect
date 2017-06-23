const express = require('express');

const router = express.Router();
const queries = require('../db/queries');

function isValidId(req, res, next) {
  if(!isNaN(req.params.id)) return next();
  next(new Error('Invalid ID'));
}

function validStudent(student) {
  const hasFirstName = typeof student.firstName == 'string' && student.firstName.trim() != '';
  const hasLastName = typeof student.lastName == 'string' && student.lastName.trim() != '';
  const hasAge = !isNaN(student.age);
  const hasPoint = !isNaN(student.point);
  return hasFirstName && hasLastName && hasAge && hasPoint;
}


router.get('/', (req, res) => {
  queries.getAll().then(students => {
    res.json(students);
  })
});

router.get('/:id', isValidId, (req, res, next) => {
  queries.getOne(req.params.id).then(student => {
    if(student) {
      res.json(student);
    } else {
      next();
    }
  });
});

router.post('/', (req, res, next) => {
  if(validStudent(req.body)) {
    queries.create(req.body).then(students => {
      res.json(students[0]);
    });
  } else {
    next(new Error('Invalid student'));
  }
});

router.put('/:id', isValidId, (req, res, next) => {
  if(validStudent(req.body)) {
    queries.update(req.params.id, req.body).then(stickers => {
      res.json(stickers[0]);
    });
  } else {
    next(new Error('Invalid student'));
  }
});

router.delete('/:id', isValidId, (req, res) => {
  queries.delete(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});


module.exports = router;
