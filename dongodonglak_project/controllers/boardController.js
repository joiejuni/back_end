//과제 부분
const Board = require("../models/board.js");

//1. 특정 과제 조회
exports.getAssignmentbyId= async (req,res) => {

    const {groupId,date} = req.params;
try{
    const attendanceBydate = await Board.showAttendance(groupId,date);
    res.render("index",{attendanceBydate});
} catch (error) {
    console.error(error);
    return res.status(500).send("서버 오류");
  }
};