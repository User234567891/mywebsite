<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Calculator</title>
    <link rel="stylesheet" href="styles.css"> <!-- Link to your CSS file -->
</head>
<body>
    <div class="calculator">
        <input type="text" id="result" disabled> <!-- Display screen -->
        <div class="buttons">
            <button onclick="clearResult()">C</button>
            <button onclick="appendToResult('1')">1</button>
            <button onclick="appendToResult('2')">2</button>
            <button onclick="appendToResult('3')">3</button>
            <button onclick="appendToResult('+')">+</button>
            <button onclick="appendToResult('4')">4</button>
            <button onclick="appendToResult('5')">5</button>
            <button onclick="appendToResult('6')">6</button>
            <button onclick="appendToResult('-')">-</button>
            <button onclick="appendToResult('7')">7</button>
            <button onclick="appendToResult('8')">8</button>
            <button onclick="appendToResult('9')">9</button>
            <button onclick="appendToResult('*')">*</button>
            <button onclick="appendToResult('0')">0</button>
            <button onclick="appendToResult('.')">.</button>
            <button onclick="calculateResult()">=</button>
            <button onclick="appendToResult('/')">/</button>
        </div>
    </div>
    <script src="script.js"></script> <!-- Link to your JavaScript file -->
</body>
</html>