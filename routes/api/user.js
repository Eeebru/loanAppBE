const { Router } = require("express");
const {takeLoan, getLoans} = require("../../controller/loan");
const {signUp, confirmEmail, Login, confirmCard} = require("../../controller/user");
const { protect } = require("../../middleware/auth");
const router = Router();



router.post('/signup', signUp);
router.get("/confirm_signup/:confirmToken", confirmEmail);
router.post("/login", Login);
router.post("/takeloan", protect, takeLoan);
router.post("/savecard", protect, confirmCard);
router.get("/loans", protect, getLoans);


module.exports = router;