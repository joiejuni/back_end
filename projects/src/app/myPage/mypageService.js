// Service: Update, Patch 비즈니스 로직 처리
const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const groupDao = require("./groupDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

// // 6. 유저별 닉네임 수정 API
// exports.editName = async function (groupId, userId) {
//     try {
//         const nameRows = await mypageProvider.emailCheck(email);
//         if (nameRows.length < 1) return errResponse(baseResponse.USER_USERID_NOT_EXIST);

//         const editNameParams = [groupId, userId];
//         const connection = await pool.getConnection(async (conn)=>conn);
//         const editReviewResult = await mypageDao.updateReview(connection, editNameParams);

//         return response(baseResponse.SUCCESS);
//     } catch (err){
//         logger.err(`App  - editName Service error\n: ${err.message}`);
//         return errResponse(baseResponse.DB_ERROR);
//     }
// };