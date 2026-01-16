<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Movie Ticket Booking</title>

    <style>
      body {
        font-family: "Segoe UI", sans-serif;
        background: #f1f5f9;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .container {
        width: 420px;
        padding: 30px;
        border-radius: 16px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
      }


      label {
        display: block;
        margin-top: 12px;
        font-weight: 500;
      }

      input,
      select {
        width: 100%;
        padding: 10px;
        margin-top: 6px;
        border-radius: 6px;
        border: 1px solid #ccc;
      }

      button {
        width: 100%;
        margin-top: 20px;
        padding: 12px;
        border: none;
        border-radius: 10px;
        background: #1e3a8a;
        color: white;
        font-size: 16px;
        cursor: pointer;
      }

      .error {
        color: #dc2626;
        font-size: 13px;
        display: none;
      }

      img {
        width: 180px;
        border-radius: 12px;
        margin: 15px auto;
        display: block;
      }

      .details p {
        margin: 6px 0;
        font-size: 15px;
      }
    </style>
  </head>

  <body>
    <div class="container" id="app">
      <h2>Movie Ticket Booking</h2>

      <label>Name</label>
      <input type="text" id="name" />

      <div class="error" id="nameErr">Enter your name</div>

      <label>Movie</label>
      <select id="movie">
        <option value="">-- Select Movie --</option>
        <option value="Inception">Inception</option>
        <option value="Interstellar">Interstellar</option>
        <option value="Avengers">Avengers</option>
        <option value="Oppenheimer">Oppenheimer</option>
      </select>

      <div class="error" id="movieErr">Select a movie</div>

      <label>Show Time</label>
      <select id="time">
        <option value="">-- Select Time --</option>
        <option>10:00 AM</option>
        <option>1:00 PM</option>
        <option>6:00 PM</option>
        <option>9:30 PM</option>
      </select>

      <div class="error" id="timeErr">Select show time</div>

      <label>Tickets</label>
      <input type="number" id="tickets" min="1" />
      
      <div class="error" id="ticketErr">Minimum 1 ticket required</div>

      <button onclick="submitBooking()">Book Ticket</button>
    </div>

    <script>
      function submitBooking() {
        var name = document.getElementById("name").value.trim();
        var movie = document.getElementById("movie").value;
        var time = document.getElementById("time").value;
        var tickets = document.getElementById("tickets").value;

        var errors = document.querySelectorAll(".error");

        for (var i = 0; i < errors.length; i++) {
          errors[i].style.display = "none";
        }

        var valid = true;

        if (name === "") {
          document.getElementById("nameErr").style.display = "block";
          valid = false;
        }
        if (movie === "") {
          document.getElementById("movieErr").style.display = "block";
          valid = false;
        }
        if (time === "") {
          document.getElementById("timeErr").style.display = "block";
          valid = false;
        }
        if (tickets === "" || tickets < 1) {
          document.getElementById("ticketErr").style.display = "block";
          valid = false;
        }

        if (!valid) return;

        document.getElementById("app").innerHTML = `
      <h2> Booking Confirmed</h2>

      <div class="details">
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Movie:</strong> ${movie}</p>
        <p><strong>Show Time:</strong> ${time}</p>
        <p><strong>Tickets:</strong> ${tickets}</p>
      </div>

      <button onclick="location.reload()">Book Another Ticket</button>
    `;
      }
    </script>
  </body>
</html>
