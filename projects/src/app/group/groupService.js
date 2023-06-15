const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const groupProvider = require("./groupProvider");
const groupDao = require("./groupDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리


exports.confirmLeader = async function (userId,groupId) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const isgroupResult = await groupDao.selectGroupLeader(connection,userId,groupId);
        connection.release();
        return response(isgroupResult);

    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.postGroups = async function (userId,groupId,groupCode) {
    try{
        const connection = await pool.getConnection(async (conn) => conn);
        const checkGroupResult = await groupProvider.checkGroupId(connection,userId,groupId);
        if(checkGroupResult) return errResponse(baseResponse.GROUP_EXIST_MEMBER);
        const checkGroupCode = await groupDao.selectGroupCode(connection,groupId,groupCode);
        if(groupCode==checkGroupCode) {
            return checkGroupCode;
        }

    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}

exports.postProfile = async function (userId,groupId,nickname) {
    try {
        const connection = await pool.getConnection(async (conn) => conn);
        const profileResult = await groupDao.insertGroupUser(connection,groupId,userId,nickname);
        connection.release();
        return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - editUser Service error\n: ${err.message}`);
        return errResponse(baseResponse.DB_ERROR);
    }
}