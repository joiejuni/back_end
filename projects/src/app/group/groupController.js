const groupProvider = require("./groupProvider");
const groupService = require("./groupService");


/*
    1. 그룹 참여
    유형: POST
    Body: userId, 그룹 코드, groupId
    예외 처리: 그룹이 존재하는지, 그룹에 이미 참여했는지 확인, 코드가 맞는지 확인
 */

    exports.enterGroup = async function (req, res) {
        let userId = req.session.userId;
        userId = req.body.userId;
        let groupId = req.session.groupId;
        groupId = req.body.groupid;
        const groupCode = req.body.groupCode;
        const groupResponse = await groupService.postGroups(userId,groupId,groupCode);
        const groupInfo = await groupProvider.getGroupInfo(groupId);
        if(groupResponse!==undefined){
            res.render('group/groupProfile',{data:groupInfo});
        }
    };

/*
    2. 그룹 조회
    유형: GET
*/
    exports.getGroups = async function (req,res){
        let userId = req.session.userId;
        userId = req.session.userId;
        const groupsallRes = await groupProvider.viewGroup(userId);
        res.render('group/groupView',{data:groupsallRes});
    }

/*
    3. 그룹 접속 
    유형: POST
    body: userId, groupId
*/
    exports.viewGroup = async function (req,res){
        const groupId = req.params.groupId;
        const isGroupLeader = await groupService.confirmLeader(userId,groupId);
        req.session.groupId = groupId;
        req.session.isLeader = isGroupLeader;
        const groupInfo = await groupProvider.getGroupInfo(groupId);
        res.render('main/mainPage',{data:groupInfo});
    }

/*
    4. 그룹 참여 링크 생성  
    유형: GET
    path variable : groupId
*/
    exports.createLink = async function (req,res){
        let groupId = req.session.groupId;
        groupId = req.params.groupId;
        const linkGroupId = "http://34.64.32.180/app/groupjoins/" + groupId;
        res.render('group/groupLink',{data:linkGroupId});
    }

/*
    5. 그룹 참여 링크로 가입 페이지 접속
    유형: GET
    path variable : groupId
*/
    exports.joinGroup = async function (req,res){
        let groupId = req.params.groupId;
        const groupJoinResult = await groupProvider.getGroupInfo(groupId);
        res.render('group/groupInvite',{data:groupJoinResult});
    }

/*
    6. 그룹 프로필 생성
    유형: POST
    path variable : groupId
*/
    exports.createProfile = async function (req,res){
        let userId = req.session.userId;
        userId = req.body.userId;
        let groupId = req.session.groupId;
        groupId = req.body.groupid;
        const nickname = req.body.nickname;
        const createProfileResult = await groupService.postProfile(groupId,userId,nickname);
        const groupInfoResult = await groupProvider.getGroupInfo(groupId);
        if(createProfileResult.isSuccess){
            res.render('main/mainPage',{data:groupInfoResult});
        }
    }