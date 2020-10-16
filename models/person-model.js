const koneksi = require('../config/database');
const { responseData, responseMessage } = require('../utils/response-handler');
const ErrorResponse = require('../utils/errorResponse');

exports.insertPerson = (response, statement, data, next) => {

    koneksi.query(statement, data, (err, rows, field) => {

        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }

        responseMessage(response, 201, 'Berhasil insert data!');
    });
};

exports.getPersons = (response, statement, next) => {

    koneksi.query(statement, (err, rows, field) => {
        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }
        responseData(response, 200, rows);
    });
};

exports.getPersonsByID = (response, searchStatement, id, next) => {
    koneksi.query(searchStatement, id, (err, rows, field) => {

        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }
        responseData(response, 200, rows);
    });
};


exports.updatePerson = (response, searchStatement, updateStatement, id, data, next) => {
    koneksi.query(searchStatement, id, (err, rows, field) => {

        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }

        if (rows.length) {

            koneksi.query(updateStatement, [data, id], (err, rows, field) => {
                if (err) {
                    return next(new ErrorResponse(err.message, 500));
                }
                responseMessage(response, 200, 'Berhasil update data!');
            });
        } else {
            return next(new ErrorResponse(err.message, 500));
        }
    });
};

exports.deletePerson = (response, searchStatement, deleteStatement, id, next) => {
    koneksi.query(searchStatement, id, (err, rows, field) => {
        if (err) {
            return next(new ErrorResponse(err.message, 500));
        }
        if (rows.length) {
            koneksi.query(deleteStatement, id, (err, rows, field) => {
                if (err) {
                    return next(new ErrorResponse(err.message, 500));
                }

                responseMessage(response, 200, 'Berhasil hapus data!');
            });
        } else {
            return next(new ErrorResponse(err.message, 500));
        }
    });
};