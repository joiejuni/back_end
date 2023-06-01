const groupProvider = require("./groupProvider");
const groupService = require("./groupService.js");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");


/**
 * API No. 1
 * API Name : 그룹 생성 API
 * [POST] /app/group
 */
exports.createGroup = async function (req, res) {

    exports.enterGroup = async function (req, res) {
        const userId = getUserId.getUserId;
        userId = req.body.userId;
        const link = req.body.link;
        const groupId = link.split("/")[2];
        const groupResponse = await groupService.postGroups(userId,groupId);

  // return res.send(noticeResponse);
  return res.render("../../../views/group/createGroup.ejs",{result:createGroupResponse});
    }
};
