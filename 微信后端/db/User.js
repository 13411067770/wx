const { Sequelize, DataTypes, Model } = require('sequelize');
// 使用sequelize语句连接后端数据库
const sequelize = new Sequelize('mysql://root:12345678@localhost:3306/wx')

class User extends Model {}
class Published extends Model {}

User.init({
    // 设置字段
    name: {
        type: DataTypes.STRING
            // allowNull: false
    },
    companyName: {
        type: DataTypes.STRING
            // allowNull 默认为 true
    },
    img: {
        type: DataTypes.STRING
            // allowNull 默认为 true
    }
}, {
    // 这是其他模型参数
    sequelize, // 我们需要传递连接实例
    modelName: 'User' // 我们需要选择模型名称
});
// 定义的模型是类本身
console.log(User === sequelize.models.User); // true
// 同步数据库
(async() => {
    await sequelize.sync({ force: true });
    // 这里是代码
})();

module.exports = User