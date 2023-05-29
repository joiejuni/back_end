//그룹코드로 그룹 참여,그룹코드 입력 후 그룹 프로필사진,이름 입력 그룹 생성, 가입한 그룹 조회, 생성 그룹 조회, 그룹 접속, 그룹 탈퇴
const groupProvider = require("./groupProvider");
const groupService = require("./groupService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");
const getUserId = require("../login/loginController");


// 1. 그룹 참여
/*
    1. 그룹 참여
    유형: POST
    Body: userId, 그룹 코드, groupId
    예외 처리: 그룹이 존재하는지, 그룹에 이미 참여했는지 확인
 */

    exports.enterGroup = async function (req, res) {
        const loadUserId = getUserId.getUserId;
        const userId = loadUserId;
        userId = req.params.userId;
        const groupResponse = await groupService.postGroup(userId);
        return res.send(groupResponse);
    };

/*
    2. 그룹 조회
    유형: GET
*/
    exports.getGroups = async function (req,res){
        const userId = getUserId.getUserId;
        
        const groupsallRes = await groupProvider.viewGroup(userId);
        return res.send(groupsallRes);
    }

    