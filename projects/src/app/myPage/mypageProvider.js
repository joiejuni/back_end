const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const mypageDao = require("./mypageDao");

// Provider: Read 비즈니스 로직 처리

// 1. 유저 닉네임 조회 
exports.nameUserList = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const nameListResult = await mypageDao.selectName(connection, groupId, userId);
    connection.release();

    return nameListResult;
};

// 존재하는 유저인지 체크(닉네임 확인)
exports.userCheck = async function(groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const userCheckResult = await mypageDao.selectName(connection, groupId, userId);
    connection.release();
  
    return userCheckResult;
};

// 2. 유저별 게시글 수 조회
exports.postsUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const postsResult = await mypageDao.selectPosts(connection, groupId, userId);
    connection.release();

    return postsResult;
};

// 3. 유저별 좋아요 수 조회
exports.likesUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const likesResult = await mypageDao.selectLikes(connection, groupId, userId);
    connection.release();

    return likesResult;
};

// 4. 유저별 댓글 수 조회
exports.commentsUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const commentsResult = await mypageDao.selectComments(connection, groupId, userId);
    connection.release();

    return commentsResult;
};

// 8. 유저별 프로필 사진 조회
exports.avatarUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const avatarResult = await mypageDao.selectAvatar(connection, groupId, userId);
    connection.release();

    return avatarResult;
};

// 10. 유저별 상점 조회
exports.rewardPntUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const rewardPntResult = await mypageDao.selectRewardPnt(connection, groupId, userId);
    connection.release();

    return rewardPntResult;
};

// 11. 유저별 벌점 조회
exports.penaltyPntUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const penaltyPntResult = await mypageDao.selectPenaltyPnt(connection, groupId, userId);
    connection.release();

    return penaltyPntResult;
};

// 12. 유저별 상벌점 합계 조회
exports.totalPntUser = async function (groupId, userId) {
    const connection = await pool.getConnection(async (conn) => conn);
    const totalPntResult = await mypageDao.selectTotalPnt(connection, groupId, userId);
    connection.release();

    return totalPntResult;
};