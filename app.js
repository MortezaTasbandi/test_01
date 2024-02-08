<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Button Example</title>
    <style>
        /* Add some basic styling to the button */
        .button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        /* Change button color on hover */
        .button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <h2>Interactive Button Example</h2>

    <!-- Create a button element with a class "button" -->
    <button class="button" id="interactiveButton">Click Me!</button>

    <!-- JavaScript code to handle button click -->
    <script>
        // Get reference to the button element
        const button = document.getElementById('interactiveButton');

        // Add a click event listener to the button
        button.addEventListener('click', function() {
            // Display an alert message when the button is clicked
            alert('You clicked the button!');
        });
    </script>
</body>
</html>
