document.addEventListener('DOMContentLoaded', () => {
    // Update Footer Year and Last Modified Date
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    document.getElementById('current-year').textContent = currentYear;
    document.getElementById('last-modified').textContent = lastModified;

    // Wind Chill Calculation
    const temp = 5; // Replace with your temperature value
    const windSpeed = 10; // Replace with your wind speed value

    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(2);
        }
        return "N/A";
    }

    const windChill = calculateWindChill(temp, windSpeed);
    document.getElementById('wind-chill').textContent = windChill;
});
