const router = require("express").Router();
const { User } = require("../models/user");

router.get("/", async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
		if(user){
			res.json({
				_id: user._id,
				name: user.name,
				email: user.email,
                password:user.password,
	            confirmPassword:user.confirmPassword,
	            age:user.age,
                gender:user.gender,
                dob:user.dob,
	            mobile:user.mobile,
			})
		} else {
			res.status(404)
			throw new Error('User not found')
		}
		// res.send('Success')

        // try{
        //     //getting data from db
        //     const user = await User.find({});

        // if(user){
        //     res.json(user)
        // }
    
        // } catch(error){
        //     console.log(error)
        // }
});



module.exports = router;