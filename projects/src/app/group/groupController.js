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

  const {userId} = req.body;
    
    const createGroupResponse = await noticeService.createNotice(userId);

  // return res.send(noticeResponse);
  return res.render("../../../views/group/createGroup.ejs",{result:createGroupResponse});

};
