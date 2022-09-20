const Appt = require("../models/Appointment")

module.exports = {
    getProfile: async (req, res) => {
        try {
            const appts = await Appt.find({user: req.user.id})
            res.render("profile.ejs", { appts: appts, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
    createAppt: async (req, res) => {
        try{
            await Appt.create({
                apptType: req.body.apptType,
                apptDate: req.body.apptDate,
                customerDescription: req.body.customerDescription,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                user: req.user.id
            })
            console.log("Appointment has been scheduled")
            res.redirect("/profile")

        }catch (err){
            console.log(err)
        }
    },
    inProg: async (req, res) => {
        try{

        }catch (err){
            console.log(err)
        }
    },
    completed: async (req, res) => {
        try{

        }catch (err){
            console.log(err)
        }
    },
    paidIt: async (req, res) => {
        try{

        }catch (err){
            console.log(err)
        }
    },
    assignOne: async (req, res) => {
        try{

        }catch (err){
            console.log(err)
        }
    },
    deleteAppt: async (req, res) => {
        try{

        }catch (err){
            console.log(err)
        }
    },


}

