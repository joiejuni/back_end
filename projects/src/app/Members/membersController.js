const jwtMiddleware = require("../../../config/jwtMiddleware");
const membersProvider = require("./membersProvider");
const membersService = require("./membersService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");