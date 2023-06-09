'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.users_movies.belongsTo(models.user, { foreignKey: 'userId'})
      models.users_movies.belongsTo(models.movie, { foreignKey: 'movieId'})
    }
  }
  users_movies.init({
    userId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_movies',
  });
  return users_movies;
};