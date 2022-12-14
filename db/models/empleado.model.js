const { Model, DataTypes, Sequelize } = require('sequelize');


const Empleado_TABLE = 'empleadoo';

const EmpleadoSchema ={
  id:{
    primaryKey: true,
    type: DataTypes.UUID

  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },
  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },

  telefono: {
    allowNull: false,
    type: DataTypes.INTEGER
  },

  sueldo: {
    allowNull: false ,
    type: DataTypes.INTEGER
  },
};

class Empleado extends Model{
  static associate(){
  }

  static config(sequelize){
    return{
      sequelize,
      tableName: Empleado_TABLE,
      modelName: 'Empleado',
      timesTamps: false
    };
  }
}

module.exports = {Empleado_TABLE, EmpleadoSchema, Empleado};
