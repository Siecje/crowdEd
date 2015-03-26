var uuid = require('uuid');

knex.schema.createTable('users', function (table) {
  table.uuid('id').primary().defaultTo(uuid.v4());
  table.text('name');
  table.text('username').unique();
  table.text('email').unique().nullable();
  table.timestamps();
});

knex.schema.createTable('categories', function(table){
  table.uuid('id').primary().defaultTo(uuid.v4());
  table.text('name');
  table.timestamps();
});

knex.schema.createTable('content', function(table){
  table.uuid('id').primary().defaultTo(uuid.v4());

  table.timestamps();
});
