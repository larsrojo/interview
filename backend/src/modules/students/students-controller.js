const asyncHandler = require("express-async-handler");
const { getAllStudents, addNewStudent, getStudentDetail, setStudentStatus, updateStudent } = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
    //write your code
    try {
        const students = await getAllStudents(req.query); // Assuming filters are sent in query parameters
        res.status(200).json(students);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

const handleAddStudent = asyncHandler(async (req, res) => {
    //write your code
    try {
        const result = await addNewStudent(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
    //write your code
    try {
        const result = await updateStudent({ ...req.body, id: req.params.id });
        res.status(200).json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
    //write your code
    try {
        const student = await getStudentDetail(req.params.id);
        res.status(200).json(student);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

const handleStudentStatus = asyncHandler(async (req, res) => {
    //write your code
    try {
        const result = await setStudentStatus({
            userId: req.params.id,
            reviewerId: req.body.reviewerId,
            status: req.body.status,
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(error.statusCode || 500).json({ message: error.message });
    }
});

module.exports = {
    handleGetAllStudents,
    handleGetStudentDetail,
    handleAddStudent,
    handleStudentStatus,
    handleUpdateStudent,
};
