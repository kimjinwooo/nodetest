
const memberCtrl = require("../controllers/memberCtrl")
const router = require("express").Router();
router.route('/')
    .get(memberCtrl.getMember)
    .post(memberCtrl.insertMember)

    module.exports = router;