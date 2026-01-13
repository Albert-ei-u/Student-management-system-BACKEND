const Student = require("../models/student");
//Add Student
exports.createStudent = async (req, res) => {
    try{
        const student = await Student.create(req.body);
        res.status(201).json(student);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

//  Get all Student
exports.getStudents = async (req, res) =>{
    try{
        const student = await Student.find();
        res.json(student);
    } catch (error){
        res.status(500).json({ error: error.message});
    }
};

// only one Student
exports.getStudentById = async (req, res ) =>{
    try{
        const student = await Student.findById(req.params.id);
        if(!Student)
            return res.status(404).json({ message: "Student not found"});
        res.json(student);
    } catch (error){
        res.status(500).json({ error: error.message});
    }
};

//Update Student in
exports.updateStudent = async (req, res) => {
    try{
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );
        res.json(student);
    } catch (error){
        res.status(400).json({error: error.message});
    }
};

//deletion of Student
exports.deleteStudent = async (req, res) => {
    try{
        await Student.findByIdAndDelete(req.params.id);
        res.json({message: "Student deleted successfully"});
    } catch (error){
        res.status(500).json({error: error.message});
    }
};