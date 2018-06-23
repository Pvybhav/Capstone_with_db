const Course = require('../../models/Course');

module.exports = (app) => {

    //adding courses
    app.post('/api/createcourse', (req, res) => {
        var course = new Course();
        course.Name = req.body.name;
        course.Price = req.body.price;
        course.Category = req.body.category;
        course.Description = req.body.description;
        course.save(function (err) {
            if (err) {
                res.send(err);
            }
            res.send({ message: 'Course Created !' });
        });
    });

    // getting all courses
    app.get('/api/getallcourses', (req, res) => {
        Course.find(function (err, coursesList) {
            if (err) {
                res.send(err);
            }
            res.send(coursesList);
        });
    });

    // get single course by id
    app.get('/api/getcourse/:course_id', (req, res) => {

        Course.findById(req.params.course_id, function (err, course) {
            if (err)
                res.send(err);
            res.json(course);
        });
    });

    // updating course by id
    app.put('/api/updatecourse/:course_id', (req, res) => {

        Course.findById(req.params.course_id, function (err, course) {
            if (err) {
                res.send(err);
            }
            course.title = req.body.title;
            course.price = req.body.price;
            course.instock = req.body.instock;
            course.photo = req.body.photo;
            course.save(function (err) {
                if (err)
                    res.send(err);
    
                res.json({ message: 'Course updated!' });
            });
    
        });
    });

    // deleting course by using id
    app.delete('/api/deletecourse/:course_id', (req, res) => {
        Course.remove({ _id: req.params.course_id }, function (err, course) {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Successfully deleted' });
        })
    
    });
}