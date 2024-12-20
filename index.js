const {
    checkDatabaseExists,
    createDBConnectionWithoutDB,
  } = require("./src/checkDatabase");
  const fs = require("fs");
  const path = require("path");
  const loadDataIntoDatabase = require("./src/loadDataIntoDatabase");
  const createDBConnection = require("./src/dbConnection");
  const express = require("express");

  checkDatabaseExists()
    .then((exists) => {
      if (!exists) {
        // Read the SQL file
        const createDatabaseSQL = fs.readFileSync(
          path.join(__dirname, "./sql/createDatabase.sql"),
          "utf-8"
        );

        // Create a connection
        const db = createDBConnectionWithoutDB();

        // Create the database
        db.query(createDatabaseSQL, (error, results, fields) => {
          if (error) {
            console.log("An error occurred while creating the database: ", error);
            db.end(); // Close the connection if there's an error
            return;
          }

          console.log("Database and tables created successfully.");
          loadDataIntoDatabase();
          db.end(); // Close the connection when done
        });


      } else {
        console.log("Database already exists.");
      }
    })
    .then(() => {
      const app = express();
      const port = 3000;

      // Setup the database connection
      const connection = createDBConnection();
      app.get("/api/episodes/search", async (req, res) => {
        const { month, subject, color, matchType = "ALL" } = req.query;
        console.log(req.query);
        let filters = [];
        if (month) filters.push(`e.month = ${connection.escape(month)}`);
        if (subject) filters.push(`s.subject_name = ${connection.escape(subject)}`);
        if (color) filters.push(`c.color_name = ${connection.escape(color)}`);


        // Construct the SQL query
        let sql = `
        SELECT DISTINCT e.episode_title
        FROM Episodes e
        LEFT JOIN Episode_Subject es ON e.episode_id = es.Episode_Id
        LEFT JOIN Subjects s ON es.Subject_Id = s.Subject_Id
        LEFT JOIN Episode_Color ec ON e.episode_id = ec.Episode_Id
        LEFT JOIN Colors c ON ec.Color_Id = c.Color_Id
        `;

        console.log('Filters:', filters);
        if (filters.length > 0) {
            const operator = matchType.toUpperCase() === "ALL" ? " AND " : " OR ";
            const filterString = filters.join(operator);
            sql += `WHERE ${filterString}`;
          }
          console.log('SQL query:', sql);
        connection.query(sql, (error, results) => {
          if (error) throw error;
          res.json(results);
          console.log(results);
        });
      });

      app.listen(port, () => {
        console.log(`API is running at http://localhost:${port}`);
      });

      // Close connection when app is shutting down
      process.on("SIGINT", () => {
        connection.end();
        process.exit();
      });
    })
    .catch((err) => {
      console.log("An error occurred: ", err);
    });