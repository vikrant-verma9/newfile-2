document.addEventListener("DOMContentLoaded", function () {
  const annualincome = document.getElementById('income');
  const ageField = document.getElementById('age');
  const incomeField = document.getElementById('income');
  const deductionsField = document.getElementById('deductions');
  const calculateBtn = document.getElementById('calculateBtn');
  const errorIcons = document.querySelectorAll('.error-icon');
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');
  const resultText = document.getElementById('result');

  calculateBtn.addEventListener('click', function () {
    const annualincome = parseInt(incomeField.value)
    const age = parseInt(ageField.value); // Parse input value as an integer
    const income = parseInt(incomeField.value);
    const deductions = deductionsField.value;
    console.log(age,income,deductions)
    // Reset error indicators
    errorIcons.forEach(icon => icon.style.display = 'none');
    
    // Validate inputs
    let valid = true;
    if (isNaN(age) || age <= 0) { // Check if age is a valid number
      valid = false;
      document.getElementById('age').nextElementSibling.style.display = 'inline';
    }
    if (!income) {
      valid = false;
      document.getElementById('income').nextElementSibling.style.display = 'inline';
    }
    if (!deductions) {
      valid = false;
      document.getElementById('deductions').nextElementSibling.style.display = 'inline';
    }

    if (valid) {
      // Perform calculation
      let taxRate = 0;
      if (age < 40) {
        taxRate = 0.3;
      } else if (age >= 40 && age < 60) {
        taxRate = 0.4;
      } else if (age >= 60) {
        taxRate = 0.1;
      }

      const overallIncome = parseFloat(income) + parseFloat(deductions);
      console.log(overallIncome)
      let tax = 0;
      if (overallIncome > 8) {
        tax = taxRate * (overallIncome - 8);
      }
      console.log(tax, taxRate, overallIncome)

      // Display result in modal
      resultText.textContent = `Tax to be paid: ${tax.toFixed(2)} Lakhs`;
      modal.style.display = 'block';
    }
  });

  // Close modal when click on X
  modalContent.querySelector('.close').addEventListener('click', function() {
    modal.style.display = 'none';
  });

  // Close modal when click outside of modal
  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
