module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        name: {
            type: DataTypes.STRING,
            validate: {
                len: [1]
            }
        }
    });

    Customer.associate = function(models) {
        Customer.belongsTo(models.Burger)
    };

    return Customer;
}