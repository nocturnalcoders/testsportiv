const validate = require('validate.js');

exports.validatePerson = (data) => {
    var constraint = {
        first_name: {
            presence: {
                allowEmpty: false
            }
        },
        last_name: {
            presence: {
                allowEmpty: false
            }
        },
        description: {
            presence: {
                allowEmpty: false
            }
        },
        website: {
            presence: {
                allowEmpty: false
            },
            url: true
        },
        phone: {
            presence: {
                allowEmpty: false
            }
        },
        email: {
            presence: {
                allowEmpty: false
            },
            email: true
        },
        address: {
            presence: {
                allowEmpty: false
            }
        }
    };

    return validate(data, constraint, { format: 'flat' });
};