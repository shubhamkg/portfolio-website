<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Console Debugging Demo</title>
    <style>
      /* Base Styles */
      body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f4;
        padding: 20px;
        margin: 0;
      }

      h2 {
        color: #333;
        text-align: center;
        margin-bottom: 20px;
      }

      .form-container {
        background: #fff;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        max-width: 500px;
        margin: 0 auto;
      }

      label {
        display: block;
        margin-top: 10px;
        font-weight: bold;
      }

      input,
      select,
      button {
        width: 100%;
        padding: 10px;
        margin-top: 5px;
        border-radius: 5px;
        border: 1px solid #ccc;
        font-size: 16px;
        box-sizing: border-box;
      }

      button {
        margin-top: 15px;
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
      }

      button:hover {
        background-color: #0056b3;
      }

      @media (max-width: 600px) {
        body {
          padding: 10px;
        }
        input,
        select,
        button {
          font-size: 14px;
          padding: 8px;
        }
        .form-container {
          padding: 15px;
        }
      }
    </style>
  </head>
  <body>
    <h2>Enhanced User Registration Form - Corrected</h2>

    <div class="form-container">
      <label>
        Name:
        <input type="text" id="name" placeholder="Enter name" />
      </label>

      <label>
        Email:
        <input type="email" id="email" placeholder="Enter email" />
      </label>

      <label>
        Age:
        <input type="number" id="age" placeholder="Enter age" />
      </label>

      <label>
        Gender:
        <select id="gender">
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Skills (comma separated):
        <input type="text" id="skills" placeholder="JavaScript, HTML, CSS" />
      </label>

      <label>
        Hobbies (comma separated):
        <input type="text" id="hobbies" placeholder="Reading, Music, Sports" />
      </label>

      <button onclick="registerUser()">Register</button>
    </div>

    <script>
      console.clear();
      console.info("Page loaded: Enhanced registration form ready");

      function registerUser() {
        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let age = document.getElementById("age").value.trim();
        let gender = document.getElementById("gender").value;
        let skillsRaw = document.getElementById("skills").value;
        let hobbiesRaw = document.getElementById("hobbies").value;

        // Convert comma-separated strings to arrays and remove empty items
        let skills = [];
        let skillsArr = skillsRaw.split(",");
        for (let i = 0; i < skillsArr.length; i++) {
          let s = skillsArr[i].trim();
          if (s !== "") skills.push(s);
        }

        let hobbies = [];
        let hobbiesArr = hobbiesRaw.split(",");
        for (let i = 0; i < hobbiesArr.length; i++) {
          let h = hobbiesArr[i].trim();
          if (h !== "") hobbies.push(h);
        }

        // Type checking
        console.log("Type of age:", typeof age);
        console.log("Type of skills:", typeof skills);

        // Validation warnings and errors
        if (!name) {
          console.warn("Name field is empty");
        }

        if (!email || email.indexOf("@") === -1) {
          console.warn("Email is invalid");
        }

        if (!age || age < 18) {
          console.error("Age must be 18 or above");
        }

        if (!gender) {
          console.warn("Gender not selected");
        }

        if (skills.length === 0) {
          console.error("At least one skill is required");
        }

        if (hobbies.length === 0) {
          console.error("At least one hobby is required");
        }

        // Info messages: only succeed if all validations pass
        if (
          name &&
          email.indexOf("@") !== -1 &&
          age >= 18 &&
          gender &&
          skills.length > 0 &&
          hobbies.length > 0
        ) {
          console.info("Registration successful for:", name);
          alert("Registration successful.");

          // Reset form
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("age").value = "";
          document.getElementById("gender").value = "";
          document.getElementById("skills").value = "";
          document.getElementById("hobbies").value = "";
        } else {
          console.info(
            "Registration failed. Check console for warnings/errors."
          );
        }
      }
    </script>
  </body>
</html>
