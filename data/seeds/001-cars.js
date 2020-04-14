/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1, VIN: '3VWCD21C32M413386', make: 'Toyota', model: 'Camry', mileage: '300', transmissionType: 'automatic', titleStatus: 'clean',
        },
        {
          id: 2, VIN: '1FTNE2EL2EDA75353', make: 'Ford', model: 'Mustang', mileage: '2000', transmissionType: 'manual', titleStatus: 'clean',
        },
        {
          id: 3, VIN: 'KMHGC46F89U091156', make: 'Honda', model: 'Civic', mileage: '120000', transmissionType: 'manual', titleStatus: 'clean',
        },
      ]);
    });
};
