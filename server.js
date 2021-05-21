const express = require("express");
const http = require("http");
var path = require("path");
const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
cors = require("cors");
app.use(cors());
app.use(express.json());
var User = require("./signin1");
var User2 = require("./loanApplication");

const server = http.createServer(app);

app.post("/signin", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();

    const obj = JSON.parse(body);
    console.log(obj);
    const { password } = obj;
    let { email } = obj;
    if (!email.includes("@gmail.com"))
      return res.json({
        message: "invalid",
        notification: "Email must be of correct format @gmail.com",
      });
    if (email.includes("#") || email.includes("!") || email.includes("$"))
      return res.json({
        message: "invalid",
        notification: "Email must not contain Special characters #,!,$",
      });
    if (!password) {
      return res.json({
        message: "servererror",
        notification: "Password cannot be blank!",
      });
    }

    if (!email) {
      return res.json({
        message: "servererror",
        notification: "Email cannot be blank!",
      });
    }

    email = email.toLowerCase();
    User.find(
      {
        email: email,
      },
      (err, users) => {
        if (err) {
          return res.json({
            message: "servererror",
            notification: "Server error!",
          });
        }

        if (users.length === 0) {
          const { password } = obj;
          const newUser = new User();
          newUser.email = email;
          newUser.password = newUser.generateHash(password);

          newUser.save((err, user) => {
            if (err) {
              return res.json({
                message: "servererror",
                notification: "Internal server error!",
              });
            }

            return res.json({
              message: "success",
              notification: "Successfully registered!!",
            });
          });
        }
        if (users.length) {
          const user = users[0];
          if (!user.comparePassword(password)) {
            return res.json({
              message: "notmatch",
              notification: "Password not matched!",
            });
          }
          return res.json({
            message: "success",
            notification: "Successfully signed in!",
          });
        }
      }
    );
  });
});

app.post("/loanApplication", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string

    const obj = JSON.parse(body).values;

    const newUser = new User2();
    newUser.email = obj.email;
    newUser.address = obj.address;
    newUser.contact = obj.contact;
    newUser.name = obj.name;
    newUser.amount = obj.amount;
    newUser.sdate = obj.sdate;
    newUser.edate = obj.edate;
    newUser.installments = obj.installments;
    newUser.type = obj.Type;

    newUser.save((err, user) => {
      if (err) {
        return res.json({
          message: "servererror",
          notification: "Internal server error!",
        });
      }

      return res.json({
        message: "success",
        notification: "Successfully applied for the loan!!",
      });
    });
  });
});

app.post("/fetchLoans", (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString(); // convert Buffer to string

    const email = JSON.parse(body).email;
    User2.find(
      {
        email: email,
      },
      (err, users) => {
        if (err) {
          return res.json({
            message: "servererror",
            notification: "Server error!",
          });
        }
        return res.json(users);
      }
    );
  });
});

app.post("/logout", (req, res) => {
  res.json("unsuccess");
});

if (process.env.NODE_ENV == "production") {
  app.use(express.static("loanmanagement/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "loanmanagement", "build", "index.html")
    );
  });
}
const oneHour = 3600000;
app.use(express.static("www", { maxAge: oneHour }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

mongoose.connect(
  process.env.MONGODB_URI ||
    process.env.MONGOHQ_URL ||
    process.env.MONGOLAB_URI ||
    "mongodb+srv://Ajay:@Ajstyles89@cluster0.yxlvh.mongodb.net/mydatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (req, res) => {
    console.log("connected to database");
  }
);

server.listen(port, "0.0.0.0", () =>
  console.log(`server is running on port ${port}`)
);
