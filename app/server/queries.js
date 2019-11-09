const db = require("./db");
const createUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(password => {
      const {
        firstName,
        lastName,
        email,
        gender,
        jobRole,
        department,
        address
      } = req.body;
  
      db.one({
        text:
          "INSERT INTO employee(firstname, lastname, email, password, gender, job_role, department, address) VALUES($1, $2, $3, $4, $5, $6, $7, $8) RETURNING employeeid",
        values: [
          firstName,
          lastName,
          email,
          password,
          gender,
          jobRole,
          department,
          address
        ]
      })
        .then(value => {
          const userToken = jwt.sign(
            { userid: value.employeeid },
            "RANDOM_TOKEN_SECRET",
            {
              expiresIn: "24h"
            }
          );
          res.status(201).json({
            status: "success",
            data: {
              message: "User account successfully created",
              token: userToken,
              userId: value.employeeid
            }
          });
        })
        .catch(err => {
          res.status(500).json(next(err));
        });
    });
  };