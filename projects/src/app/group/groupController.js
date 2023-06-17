const baseResponseStatus = require("../../../config/baseResponseStatus");
const groupProvider = require("./groupProvider");
const groupService = require("./groupService");


/*
    1. 그룹 참여
    유형: POST
    Body: userId, 그룹 코드, groupId
    예외 처리: 그룹이 존재하는지, 그룹에 이미 참여했는지 확인, 코드가 맞는지 확인
 */

    exports.enterGroup = async function (req, res) {
        let groupId = req.session.groupId;
        const groupCode = req.body.groupCode;
        const groupResponse = await groupService.postGroups(groupId);
        const groupInfo = await groupProvider.getGroupInfo(groupId);
        if(groupCode===groupResponse[0].inviteCode){
            res.render('../views/group/groupProfile',{data:groupInfo});
        }
        else{
           res.send('<script>alert("잘못된 그룹코드입니다."); history.back();</script>');
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
        res.render('../views/group/groupView',{data:groupsallRes});
    }

/*
    3. 그룹 접속 
    유형: GET
    body: userId, groupId
*/
    exports.viewGroup = async function (req,res){
        const userId = req.session.userId;
        const groupId = req.params.groupId;
        const isGroupLeader = await groupService.confirmLeader(userId,groupId);
        req.session.groupId = groupId;
        req.session.isLeader = isGroupLeader;
        const groupInfo = await groupProvider.getGroupInfo(groupId);
        res.render('../views/main/mainPage',{data:groupInfo});
    }

/*
    4. 그룹 참여 링크 생성  
    유형: GET
    path variable : groupId
*/
    exports.createLink = async function (req,res){
        let groupId = req.session.groupId;
        const userId = req.session.userId;
        //나중에 고치기
        const linkGroupId = "http://localhost/app/group/groupjoins/" + groupId;
        if(userId==undefined){
            res.render('../views/login/login.ejs');
        }
        res.render('../views/group/groupLink',{data:linkGroupId});
    }

/*
    5. 그룹 참여 링크로 가입 페이지 접속
    유형: GET
    path variable : groupId
*/
    exports.joinGroup = async function (req,res){
        let groupId = req.params.groupId;
        const groupJoinResult = await groupProvider.getGroupInfo(groupId);
        res.render('../views/group/groupInvite',{data:groupJoinResult});
    }

/*
    6. 그룹 프로필 생성
    유형: POST
    path variable : groupId
*/
    exports.createProfile = async function (req,res){
        let userId = req.session.userId;
        console.log(userId);
        let groupId = req.session.groupId;
        const nickname = req.body.nickname;
        const createProfileResult = await groupService.postProfile(groupId,userId,nickname);
        const groupInfoResult = await groupProvider.getGroupInfo(groupId);
        console.log(createProfileResult);
        //res.send('<script>alert("가입실패하였습니다."); history.back();</script>');
        res.render('../views/main/mainPage',{data:groupInfoResult});
    }
    
    /*
    **
 
    API No. 
    API Name : 그룹 생성 API
    [POST] /app/group
    */
    
    // [GET] /app/createGroup
    // 그룹 생성하는 페이지를 보여준다
    exports.makeGroup = async function (req, res) {
      res.render("../views/group/createGroup.ejs");
    }
    // 생성한 그룹 정보를 db에 저장
    exports.createGroup = async function (req, res) {
    
      const {groupName, groupType, groupImg, membershipFee} = req.body;
      let userId = req.session.userId;
    
      const createGroupResponse = await groupService.createGroup(userId, groupName, groupType, groupImg, membershipFee);
    
      res.render("../views/group/groupView.ejs");
    
    };

