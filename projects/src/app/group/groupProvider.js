const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const groupDao = require("./groupDao");

// Provider: Read 비즈니스 로직 처리

exports.viewGroup = async function (userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const groupListResult = await groupDao.selectgroups(connection,userId);
    connection.release();

    return groupListResult;
};