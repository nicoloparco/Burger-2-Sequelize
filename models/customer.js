module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: true,
            primaryKey: true,
            autoIncrement: true
       },
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        }
    });

    Customer.associate = function(models) {
        Customer.belongsTo(models.Burger, {
            foreignKey: id
        })
    };

    return Customer;
}