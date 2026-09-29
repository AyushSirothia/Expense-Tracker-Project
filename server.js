// const express = require("express");
// const cors = require("cors");

// const sequelize = require("./config/database");
// const userRoutes = require("./routes/userRoutes");

// const app = express();

// app.use(cors());

// app.use(express.json());

// app.use("/user", userRoutes);

// sequelize.sync()
//     .then(() => {

//         console.log("Database connected");

//         app.listen(3000, () => {
//             console.log("Server running on port 3000");
//         });

//     })
//     .catch((error) => {
//         console.log(error);
//     });


const express = require("express");
const cors = require("cors");

const sequelize = require("./config/database");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(cors());

app.use(express.json());

// Serve frontend files
app.use(express.static("public"));

// User routes
app.use("/user", userRoutes);

sequelize.sync()
    .then(() => {

        console.log("Database connected");

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });

    })
    .catch((error) => {
        console.log(error);
    });