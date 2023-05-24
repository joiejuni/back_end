const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const mypageDao = require("./mypageDao");

// Provider: Read 비즈니스 로직 처리

exports.nameUserList = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const nameListResult = await mypageDao.selectName(connection, groupId, userId);
    connection.release();

    return nameListResult;
};