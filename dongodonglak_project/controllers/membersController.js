// 출석 부분
const Member = require("../models/members.js");

//1. 날짜별 출석 상태 조회
exports.getAttendance = async (req,res) => {

    const {groupId,date} = req.params;
try{
    const attendanceBydate = await Member.showAttendance(groupId,date);
    res.render("index",{attendanceBydate});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};

//2. 멤버 이름별 출석 상태 조회 
exports.getAttendancebyName = async (req,res) => {

    const {groupId,date,membername} = req.params;
try{
    const attendanceByname = await Member.memberAttendance(groupId,date,membername);
    res.render("index",{attendanceByname});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};

//3. 멤버별 개인 출석 API
exports.postAttendance = async function (req, res) {

    /**
     * Body: groupId,userId,attendtimestamp,date
     */
    const {groupId,userId,attendtimestamp,date} = req.body;


    const attendResponse = await Member.createAttendance(
        groupId,
        userId,
        attendtimestamp,
        date
    );

    res.render("index",{attendResponse});
};

//4. 날짜별 출석 상태 조회
exports.getAttendanceType = async (req,res) => {

    const {groupId,date} = req.params;

try{
    const attendTypeBydate = await Member.showAttendanceType(groupId,date);
    res.render("index",{attendTypeBydate});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};

//5. 날짜별 결석 사용자 조회

exports.getAbsense = async (req,res) => {

    const {groupId,date} = req.params;

try{
    const AbsenseResult = await Member.showAbsense(groupId,date);
    res.render("index",{AbsenseResult});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};

//6. 날짜별 지각 사용자 조회

exports.getLate = async (req,res) => {

    const {groupId,date} = req.params;

try{
    const lateResult = await Member.showLate(groupId,date);
    res.render("index",{lateResult});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};