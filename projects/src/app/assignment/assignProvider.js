const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const assignDao = require("./assignDao");

// Provider: Read 비즈니스 로직 처리

exports.assignmentList = async function (groupId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const assignmentResult = await assignDao.selectAssignment(connection,groupId);
    connection.release();

    return assignmentResult;
};
