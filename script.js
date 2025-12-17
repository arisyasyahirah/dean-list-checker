// NEW: Function to check user eligibility
function checkUserEligibility() {
    // Get user input values
    const name = document.getElementById('studentName').value.trim();
    const creditHours = parseFloat(document.getElementById('creditHours').value);
    const gpa = parseFloat(document.getElementById('currentGPA').value);
    
    // Get the result message element
    const resultMessage = document.getElementById('resultMessage');
    
    // Validate input
    if (!name || isNaN(creditHours) || isNaN(gpa)) {
        resultMessage.innerHTML = '<p class="required">Please fill in all fields with valid values!</p>';
        resultMessage.className = 'result-message result-not-eligible';
        resultMessage.style.display = 'block';
        return;
    }
    
    if (gpa < 0 || gpa > 4.0) {
        resultMessage.innerHTML = '<p>GPA must be between 0.0 and 4.0</p>';
        resultMessage.className = 'result-message result-not-eligible';
        resultMessage.style.display = 'block';
        return;
    }
    
    if (creditHours < 0 || creditHours > 30) {
        resultMessage.innerHTML = '<p>Credit hours must be between 0 and 30</p>';
        resultMessage.className = 'result-message result-not-eligible';
        resultMessage.style.display = 'block';
        return;
    }
    
    // Check eligibility
    let isEligible = false;
    let message = '';
    
    if (gpa >= 3.5 && creditHours >= 12) {
        isEligible = true;
        message = `
            <p><strong>Congratulations </p>
            <p>You are <strong>ELIGIBLE</strong> for the Dean's List!</p>
            <div class="gpa-indicator">
                Your GPA: <span style="color: #27ae60; font-size: 1.2em;">${gpa.toFixed(2)}</span><br>
                Credit Hours: <strong>${creditHours}</strong>
            </div>
        `;
    } else {
        isEligible = false;
        let reasons = [];
        
        if (gpa < 3.5) {
            reasons.push(`Your GPA (${gpa.toFixed(2)}) is below 3.50`);
        }
        if (creditHours < 12) {
            reasons.push(`You have only ${creditHours} credit hours (minimum: 12)`);
        }
        
        message = `
            <p> <strong>, you are NOT eligible</strong> for the Dean's List.</p>
            <p>Reason${reasons.length > 1 ? 's' : ''}: ${reasons.join(' and ')}</p>
            <div class="gpa-indicator">
                Keep working hard! You need at least 3.50 GPA and 12 credit hours.
            </div>
        `;
    }
    
    // Display result
    resultMessage.innerHTML = message;
    resultMessage.className = isEligible ? 
        'result-message result-eligible' : 
        'result-message result-not-eligible';
    resultMessage.style.display = 'block';
    
}

// NEW: Add event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event to check button
    const checkBtn = document.getElementById('checkBtn');
    if (checkBtn) {
        checkBtn.addEventListener('click', checkUserEligibility);
    }
    
    // Also allow Enter key to submit
    const inputs = document.querySelectorAll('.eligibility-form input');
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkUserEligibility();
            }
        });
    });
    
    // Add a sample student when form loads (optional)
    document.getElementById('studentName').value = 'John Doe';
    document.getElementById('creditHours').value = '15';
    document.getElementById('currentGPA').value = '3.75';
});