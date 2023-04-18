import {
  Model, UUIDV4
} from 'sequelize';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password: string;
}

module.exports = (sequelize:any, DataTypes:any) => {
  class User extends Model <UserAttributes>
  implements UserAttributes{
    id!: string;
    name!: string;
    email!: string;
    password!: string;
  }

  User.init({
    id: {
      type:DataTypes.UUID,
      defaultValue:UUIDV4,
      allowNull: false,
      primaryKey:true
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)*$/, 
      },
    },
    email: {
      type:DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        isEmail: true, 
      },
    },
    password:{
      type:DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8, 20], 
        is: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,10}$/ 
      },
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  return User;
};
