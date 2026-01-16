<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>JavaScript Dialog </title>

    <style>
      body {
        font-family: Arial, sans-serif;
      }

      button {
        margin: 4px;
        padding: 6px;
      }

      #outputBox {
        padding: 12px;
        margin-top: 10px;
      }

      .outer-html-design {
        border: 5px solid red;
        background-color: yellow;
      }

      .warning {
        color: red;
        font-weight: bold;
        margin-top: 10px;
      }

      #confirmResult {
        margin-top: 10px;
        font-weight: bold;
      }

      .ok {
        color: green;
      }

      .cancel {
        color: red;
      }

      .imgBox {
        border: 2px solid #333;
        padding: 10px;
        margin-top: 10px;
      }

      .imgBox img {
        width: 100px;
        display: block;
        margin-bottom: 5px;
      }

      .output {
        font-weight: bold;
        margin-top: 5px;
      }
    </style>
  </head>
  <body>
    <h2>JavaScript Dialog and DOM Methods</h2>

    <div id="outputBox">
      <p id="output">This is the <b>original</b> content.</p>
    </div>

    <p id="confirmResult">Confirm result will appear here.</p>

    <hr />

    <!-- Dialog methods -->
    <button onclick="showAlert()">Alert</button>
    <button onclick="showConfirm()">Confirm</button>
    <button onclick="showPrompt()">Prompt</button>

    <hr />

    <!-- DOM methods -->
    <button onclick="useInnerHTML()">innerHTML</button>
    <button onclick="useOuterHTML()">outerHTML</button>

    <hr />

    <!-- Image example -->
    <div class="imgBox" id="imageBox">
      <img src="/images/free-nature-images.jpg" alt="Old Image" />
      Image container text
    </div>

    <button onclick="useInnerText()">innerText</button>
    <button onclick="useOuterHTML()">outerHTML</button>

    <hr />

    <button onclick="resetPage()">Reset Page</button>

    <script>
      function showAlert() {
        alert("This is an alert message!");
      }

      function showConfirm() {
        const result = document.getElementById("confirmResult");

        if (confirm("Do you want to continue?")) {
          result.innerText = "You clicked OK";
          result.className = "ok";
        } else {
          result.innerText = "You clicked Cancel";
          result.className = "cancel";
        }
      }

      // prompt()
      function showPrompt() {
        let name = prompt("Enter your name:");
        alert("Hello, " + name);
      }

      function useInnerHTML() {
        document.getElementById("output").innerHTML = `
          <div style="
            padding: 10px;
            border: 2px dashed green;
            background-color: #e8f5e9;
            color: #1b5e20;
            font-weight: bold;
          ">
            Updated using <i>innerHTML</i><br>
            <small>Design changed without replacing the element</small>
          </div>
        `;
      }

      function useOuterHTML() {
        document.getElementById("outputBox").outerHTML = `
          <div id="outputBox" class="outer-html-design">
            <p id="output">Container replaced using <b>outerHTML</b></p>
          </div>
        `;
      }

      function useInnerText() {
        const box = document.getElementById("imageBox");
        box.innerText = "Text added using innerText (image remains)";
      }

      function useOuterHTML() {
        const box = document.getElementById("imageBox");
        box.outerHTML = `
          <div class="imgBox" id="imageBox">
            <img src="images/blue-background.jpg" alt="New Image">
            Replaced with a new image using outerHTML
          </div>
        `;
      }

      function resetPage() {
        location.reload();
      }
    </script>
  </body>
</html>
