'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Job extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
      static async addJob(title, description, salary) {
        try {
          const job = await Job.create({ title, description, salary });
          return job;
        } catch (error) {
          throw new Error('Failed to add job');
        }
      }
    }
  
  Job.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    salary: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Job',
  });
  return Job;
};