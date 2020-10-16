const { 
    insertPerson, 
    getPersons, 
    updatePerson, 
    deletePerson,
    getPersonsByID
    
} = require('../models/person-model');
    const { validatePerson } = require('../utils/validation');
    const ErrorResponse = require('../utils/errorResponse');


exports.createData = (req, res, next) => {
    const data = { ...req.body };
    const querySql = 'INSERT INTO person SET ?';

    var errors = validatePerson(data);
    if (errors) {
        return next(new ErrorResponse(errors[0], 400));
    }
    insertPerson(res, querySql, data, next);
};


exports.readData = (req, res, next) => {
    const querySql = 'SELECT * FROM person';

    getPersons(res, querySql, req.params.id, next);
};

exports.readDataByID = (req, res, next) => {
    const querySearch = 'SELECT * FROM person WHERE id = ?';
    
    getPersonsByID(res, querySearch, req.params.id, next);
};



exports.updateData = (req, res, next) => {

    const data = { ...req.body };
    const querySearch = 'SELECT * FROM person WHERE id = ?';
    const queryUpdate = 'UPDATE person SET ? WHERE id = ?';

    updatePerson(res, querySearch, queryUpdate, req.params.id, data, next);
};


exports.deleteData = (req, res, next) => {

    const querySearch = 'SELECT * FROM person WHERE id = ?';
    const queryDelete = 'DELETE FROM person WHERE id = ?';

    deletePerson(res, querySearch, queryDelete, req.params.id, next);
};