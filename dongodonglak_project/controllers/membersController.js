// 출석 부분
const Member = require("../models/members.js");

//1. 날짜별 출석 상태 조회
exports.getAttendance = async (req,res) => {

    const {groupId,date} = req.params;

try{
    const attendanceBydate = await Member.showAttendance(groupId,date);
    res.render("index",{groupId:groupId,date:date,result:attendanceBydate});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};

//2. 멤버 이름별 출석 상태 조회 
exports.getAttendance = async (req,res) => {

    const {groupId,date,membername} = req.params;
try{
    const attendanceByname = await Member.memberAttendance(groupId,date,membername);
    res.render("index",{groupId:groupId,date:date,membername:membername,result:attendanceByname});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};

//3. 멤버별 개인 출석 API
exports.postAttendance = async function (req, res) {

    /**
     * Body: groupId,userId,attendtimestamp
     */
    const {groupId,userId,attendtimestamp} = req.body;


    const attendResponse = await Member.createAttend(
        groupId,
        userId,
        attendtimestamp
    );

    res.render("index",{attendResponse});
};

