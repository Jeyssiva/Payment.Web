Setup the app
-------------

1. Install npm.
2. Create any folder for holds the server files
3. type "npm init" for package.json creation
4. Install express, sequelize ,sequelize-cli.
5. Type 'npx sequelize-cli init' for create the file structure.
    If you added the sequelize-cli package as globally like 'yarn global add sequelize-cli' or 'npm install -g --save sequelize-cli' ,  just type 'sequelize-cli'.
    otherwise , type 'npx sequelize-cli init'
6. To connect with PostgreSQL database from Node application, we have to install pg and pg-hstore module by type this command.

'npm install --save pg pg-hstore'
7. create a new file at the root of the project folder.

'touch .sequelizerc'
Open and edit that file then add these lines of codes.

const path = require('path');

module.exports = {
  "config": path.resolve('./config', 'config.json'),
  "models-path": path.resolve('./models'),
  "seeders-path": path.resolve('./seeders'),
  "migrations-path": path.resolve('./migrations')
};
That files will tell Sequelize initialization to generate config, models, seeders and migrations files to specific directories
8. Running Seeds

all seeds - $ npx sequelize-cli db:seed:all
specific seeds - $npx sequelize-cli db:seed --seed "seedname in seeders folder"
Undoing Seeds - $ npx sequelize-cli db:seed:undo:al
undo a specific seed - $ npx sequelize-cli db:seed:undo --seed name-of-seed-as-in-data


References:

https://sequelize.org/master/manual/migrations.html#addconstraint-tablename-attributes-options-
https://sequelize.org/master/manual/models-definition.html#configuration - models definition configuration.
https://express-validator.github.io/docs/validation-result-api.html