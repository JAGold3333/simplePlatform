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
    getPractitionerProfile: async (req, res) => {
        try{
            const appts = await Appt.find().sort({createdAt: "desc"}).lean()
            res.render("practitionerprofile.ejs", {appts: appts, user: req.user})
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
            await Appt.findOneAndUpdate(
                {_id: req.params.id},
                {apptStatus: "In Progress"}
            )
            console.log("appointment set to in progress")
            res.redirect("/practitionerprofile")
        }catch (err){
            console.log(err)
        }
    },
    completed: async (req, res) => {
        try{
            await Appt.findOneAndUpdate(
                {_id: req.params.id},
                {apptStatus: "Completed"}
            )
            console.log("appointment complete")
            res.redirect("/practitionerprofile")
        }catch (err){
            console.log(err)
        }
    },
    paidIt: async (req, res) => {
        try{
            await Appt.findOneAndUpdate(
                {_id: req.params.id},
                {paid: true}
            )
            console.log("appointment has been paid")
            res.redirect("/profile")
        }catch (err){
            console.log(err)
        }
    },
    assignOne: async (req, res) => {
        try{
            await Appt.findOneAndUpdate(
                {_id: req.params.id},
                {practitionerName: req.user.userName}
            )
            console.log("Appointment has been Assigned to you")
            res.redirect("/practitionerprofile")
        }catch (err){
            console.log(err)
        }
    },
    deleteAppt: async (req, res) => {
        try{
            await Appt.remove({_id: req.params.id})
            console.log("Appointment Deleted")
            res.redirect("/profile")
        }catch (err){
            console.log(err)
        }
    },


}

