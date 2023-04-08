'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.movie.hasMany(models.comment)
      models.movie.belongsToMany(models.user, { through: models.users_movies })
    }
  }
  movie.init({
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    director: DataTypes.STRING,
    plot: DataTypes.TEXT,
    imdbID: DataTypes.STRING,
    poster: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'movie',
  });
  return movie;
};