/* eslint-disable no-console */

// wings-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');
  const tableName = 'wings';
  db.schema.hasTable(tableName).then(exists => {
    if(!exists) {
      db.schema.createTable(tableName, table => {
        table.increments('id');
        table.string('brand');
        table.string('model');
        table.float('size');
        table.integer('weight_range_min');
        table.integer('weight_range_max');
        table.integer('hours');
        table.string('description');
        table.string('condition');
        table.string('country');
        table.string('town');
        table.integer('seller_id');
        table.integer('price');
        table.boolean('certified');
        table.boolean('sold').defaultTo('false');
        table.timestamps(false,true); 
      })
        .then(() => console.log(`Created ${tableName} table`))
        .catch(e => console.error(`Error creating ${tableName} table`, e));
    }
  });
  

  return db;
};
