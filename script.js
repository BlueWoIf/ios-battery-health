let fileInput = document.getElementById('upload-btn');
fileInput.onchange = () => {
    let selectedFile = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (file) {
        let text = file.target.result;
        //const table = document.getElementById("stattable");
        let nccp = parseInt(text.match(/NominalChargeCapacity":\s*([0-9.]+)/i)[1]) / parseInt(text.match(/last_value_MaximumFCC":\s*([0-9.]+)/i)[1]) * 100;
        document.getElementById("rbh").getElementsByTagName("td")[1].textContent = text.match(/last_value_MaximumCapacityPercent":\s*([0-9.]+)/i)[1] + "%";
        //rightalign todo
        document.getElementById("cc").getElementsByTagName("td")[1].textContent = text.match(/last_value_CycleCount":\s*([0-9.]+)/i)[1];
        document.getElementById("cbh").getElementsByTagName("td")[1].textContent = nccp.toFixed(2) + "%";
        document.getElementById("minfcc").getElementsByTagName("td")[1].textContent = text.match(/last_value_MinimumFCC":\s*([0-9.]+)/i)[1] + " mAh";
        document.getElementById("maxfcc").getElementsByTagName("td")[1].textContent = text.match(/last_value_MaximumFCC":\s*([0-9.]+)/i)[1] + " mAh";
        document.getElementById("ncc").getElementsByTagName("td")[1].textContent = text.match(/NominalChargeCapacity":\s*([0-9.]+)/i)[1] + " mAh";
        document.getElementById("at").getElementsByTagName("td")[1].textContent = text.match(/AverageTemperature":\s*([0-9.]+)/i)[1] + " °C";
    };
    reader.readAsText(selectedFile);
}