const mypageProvider = require("./mypageProvider");
const mypageService = require("./mypageService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 유저 닉네임 조회 API
 * [GET] /app/:groupId/:userId/me/name
 */
exports.getName = async function (req, res) {

    /**
     * path variable : groupId, userId
     */
    const groupId = req.params.groupId;
    const userId = req.params.userId;

    const nameListByUser = await nameProvider.nameUserList(groupId, userId);
    
    return res.render("../views/myPage/mypage.ejs", {result:nameListByUser});

};