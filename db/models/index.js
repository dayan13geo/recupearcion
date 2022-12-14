const {Empleado_TABLE, EmpleadoSchema, Empleado} = require('./empleado.model');



function setupModels(sequelize){
  Empleado.init(EmpleadoSchema, Empleado.config(sequelize));

  Empleado.associate(sequelize.models);
}

module.exports = setupModels;
