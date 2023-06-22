function convertToCelsius() {
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusOutput = document.getElementById("result");

    var fahrenheit = parseFloat(fahrenheitInput.value);
    if (isNaN(fahrenheit)) {
      celsiusOutput.textContent = "Masukkan suhu dalam Fahrenheit yang valid";
      return;
    }

    var celsius = (fahrenheit - 32) * (5 / 9);
    celsiusOutput.textContent = "Hasil konversi: " + celsius.toFixed(2) + " Celcius";
  }

  function convertToFahrenheit() {
    var celsiusInput = document.getElementById("celcius");
    var fahrenheitOutput = document.getElementById("result");

    var celsius = parseFloat(celsiusInput.value);
    if (isNaN(celsius)) {
      fahrenheitOutput.textContent = "Masukkan suhu dalam Celcius yang valid";
      return;
    }

    var fahrenheit = (celsius * (9 / 5)) + 32;
    fahrenheitOutput.textContent = "Hasil konversi: " + fahrenheit.toFixed(2) + " Fahrenheit";
  }