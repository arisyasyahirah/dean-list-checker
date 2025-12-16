// 1. Define Multi-Dimensional Array studentData
// Format: [Name (String), Credit Hour (Number), Current GPA (Number)]
var studentData = [
    ["Ali Bin Ahmad", 15, 3.75],
    ["Bala A/L Muthu", 12, 3.40],
    ["Siti Nurhaliza", 18, 4.00],
    ["Wong Mei Ling", 10, 3.50],
    ["David Lee", 15, 2.95]
];

// 2. Create function to measure dean list eligibility using conditional statement
function checkDeanList(gpa) {
    if (gpa >= 3.5) {
        return "Dean's List Eligible";
    } else {
        return "Not Dean's List Eligible";
    }
}        

// Alternative function if you want to keep your original but fix it
function isEligible(student) {
    var name = student[0];
    var creditHours = student[1];
    var gpa = student[2];

    // Fixed: Changed from 20 to 12 credit hours
    if (gpa >= 3.5 && creditHours >= 12) {
        return true;
    } else {
        return false;
    }
}        

// 3. Create Looping (for loop) to print student data
document.write("<div class='output-box'>");
document.write("<h2>Section 03 Result</h2>");

for (var i = 0; i < studentData.length; i++) {
    var student = studentData[i];
    var name = student[0];
    var creditHours = student[1];
    var gpa = student[2];
    var status;
    
    // Determine status
    if (gpa >= 3.5 && creditHours >= 12) {
        status = "Dean List Eligible";
    } else {
        status = "Not Eligible";
    }
    
    // 4. print all the output (inside the loop)
    document.write("<div>");
    document.write("<b>Name:</b> " + name + "<br>");
    document.write("<b>Credit Hours:</b> " + creditHours + "<br>");
    document.write("<b>Current GPA:</b> " + gpa + "<br>");
    document.write("<b>Status:</b> " + status + "<br>");
    document.write("<hr style='border-top: 1px dotted #ccc;'>");
    document.write("</div>");
}

document.write("</div>");

// Also update the table in the HTML if you want
document.addEventListener("DOMContentLoaded", function() {
    const resultsTable = document.getElementById("results");
    
    if (resultsTable) {
        for (let i = 0; i < studentData.length; i++) {
            const student = studentData[i];
            const name = student[0];
            const creditHours = student[1];
            const gpa = student[2];
            const status = checkDeanList(gpa);
            
            const row = document.createElement("tr");
            
            const nameCell = document.createElement("td");
            nameCell.textContent = name;
            
            const hoursCell = document.createElement("td");
            hoursCell.textContent = creditHours;
            
            const gpaCell = document.createElement("td");
            gpaCell.textContent = gpa;
            gpaCell.className = gpa >= 3.5 ? "gpa-high" : "gpa-low";
            
            const statusCell = document.createElement("td");
            statusCell.textContent = status;
            statusCell.className = status === "Dean's List Eligible" ? "status-approved" : "status-denied";
            
            row.appendChild(nameCell);
            row.appendChild(hoursCell);
            row.appendChild(gpaCell);
            row.appendChild(statusCell);
            
            resultsTable.appendChild(row);
        }
    }
});