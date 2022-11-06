const students = [
    {
      "id": 1,
      "first_name": "Jeanette",
      "last_name": "Penddreth",
      "email": "jpenddreth0@census.gov",
      "major": "Biology",
      "ip_address": "26.58.193.2"
    }, {
      "id": 2,
      "first_name": "Giavani",
      "last_name": "Frediani",
      "email": "gfrediani1@senate.gov",
      "major": "Religious Studies",
      "ip_address": "229.179.4.212"
    }, {
      "id": 3,
      "first_name": "Noell",
      "last_name": "Bea",
      "email": "nbea2@imageshack.us",
      "major": "Comp Sci",
      "ip_address": "180.66.162.255"
    }, {
      "id": 4,
      "first_name": "Willard",
      "last_name": "Valek",
      "email": "wvalek3@vk.com",
      "major": "Law",
      "ip_address": "67.76.188.26"
    }
  ]

 const studentController = {

    findAll: function (req, res) {
        res.json(students)
    },
    
    findById: function (req, res) {
      const found = students.find((student) => student.id === parseInt(req.params.id))

      //if we found the student return it otherwise return a 404
      if (found) {
          res.json(found)
      } else {
          res.sendStatus(404)
      }
    },
    
    add: function (req, res) {
        // res.send("You asked to create the following student " + JSON.stringify(req.body))

        students.push(req.body)

        res.status(201).json(req.body)

      },
    
    update: function (req, res) {
        // res.send("You asked to update student " + req.params.id + " with the following data " + JSON.stringify(req.body))

        let found = students.find((student) => student.id === parseInt(req.params.id))

      //if we found the student return it otherwise return a 404
      if (found) {
          found = Object.assign(found, req.body)  // merges what was sent in with what was found

          res.json(found)
      } else {
          res.sendStatus(404)
      }
    },
    
    delete: function (req, res) {
        res.send("You asked to delete student " + req.params.id)
    }

  }

  module.exports = studentController;