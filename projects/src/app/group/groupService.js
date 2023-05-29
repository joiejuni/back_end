const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const groupDao = require("./groupDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

exports.joinGroup = async function () {
    try {
        console.log(id)
        const connection = await pool.getConnection(async (conn) => conn);
        const groupJoinResult = await groupDao.grouJoinInfo(connection, id, nickname)
        connection.release();

        return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}