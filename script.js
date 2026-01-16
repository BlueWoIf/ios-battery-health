let fileInput = document.getElementById('upload-btn');

const reader = new FileReader();

reader.onload = function (file) {
    let text = file.target.result;
    let nccp = parseInt(text.match(/NominalChargeCapacity":\s*([0-9.]+)/i)[1]) / parseInt(text.match(/last_value_MaximumFCC":\s*([0-9.]+)/i)[1]) * 100;
    let rbh = parseInt(text.match(/last_value_MaximumCapacityPercent":\s*([0-9.]+)/i)[1]);
    let lie = (rbh / nccp * 100)-100;

    document.getElementById("rbh").getElementsByTagName("td")[1].textContent = rbh + "%";
    document.getElementById("cc").getElementsByTagName("td")[1].textContent = text.match(/last_value_CycleCount":\s*([0-9.]+)/i)[1];
    document.getElementById("cbh").getElementsByTagName("td")[1].textContent = nccp.toFixed(2) + "%";
    document.getElementById("minfcc").getElementsByTagName("td")[1].textContent = text.match(/last_value_MinimumFCC":\s*([0-9.]+)/i)[1] + " mAh";
    document.getElementById("maxfcc").getElementsByTagName("td")[1].textContent = text.match(/last_value_MaximumFCC":\s*([0-9.]+)/i)[1] + " mAh";
    document.getElementById("ncc").getElementsByTagName("td")[1].textContent = text.match(/NominalChargeCapacity":\s*([0-9.]+)/i)[1] + " mAh";
    document.getElementById("at").getElementsByTagName("td")[1].textContent = text.match(/AverageTemperature":\s*([0-9.]+)/i)[1] + " °C";
    document.getElementById("lie").getElementsByTagName("td")[1].textContent = (Math.sign(lie) == -1 ? '-' : '+') + lie.toFixed(2) + "%"; 

    document.getElementById("rbh").getElementsByTagName("td").bold();
    document.getElementById("cc").getElementsByTagName("td")[1].textContent = text.match(/last_value_CycleCount":\s*([0-9.]+)/i)[1];
    document.getElementById("cbh").getElementsByTagName("td")[1].textContent = nccp.toFixed(2) + "%";
};

fileInput.onchange = () => {
    reader.readAsText(fileInput.files[0]);
};