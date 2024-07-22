document.addEventListener('DOMContentLoaded', function() {
    const calculateButton = document.getElementById('calculate');
    const resetButton = document.getElementById('reset');
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    calculateButton.addEventListener('click', calculateInterest);
    resetButton.addEventListener('click', resetCalculator);

    principalInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            rateInput.focus();
        }
    });

    rateInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            startDateInput.focus();
        }
    });

    startDateInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            endDateInput.focus();
        }
    });

    endDateInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            calculateButton.focus();
        }
    });

    function calculateInterest() {
        const principal = parseFloat(principalInput.value);
        const ratePer100 = parseFloat(rateInput.value);
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);

        if (isNaN(principal) || isNaN(ratePer100) || isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
            alert("Please enter valid numbers and dates.");
            return;
        }

        const timeDiff = Math.abs(endDate - startDate);
        const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
        const months = days / 30;
        const years = Math.floor(months / 12);
        const remainingMonths = Math.floor(months % 12);
        const remainingDays = days % 30;

        const interestPerMonth = (principal / 100) * ratePer100;
        const totalInterest = interestPerMonth * months;
        const totalAmount = principal + totalInterest;

        document.getElementById('result').value = totalInterest.toFixed(2);

        document.getElementById('duration').innerText = `Total Duration : ${years} Years, ${remainingMonths} Months, ${remainingDays} Days`;
        document.getElementById('principal-amount').innerText = `Principal Amount : ₹${principal.toFixed(2)}`;
        document.getElementById('rate-of-interest').innerText = `Rate of Interest per ₹100 : ₹${ratePer100.toFixed(2)}`;
        document.getElementById('total-amount').innerText = `Total Amount : ₹${totalAmount.toFixed(2)}`;
    }

    function resetCalculator() {
        principalInput.value = '';
        rateInput.value = '';
        startDateInput.value = '';
        endDateInput.value = '';
        document.getElementById('result').value = '';
        document.getElementById('duration').innerText = '';
        document.getElementById('principal-amount').innerText = '';
        document.getElementById('rate-of-interest').innerText = '';
        document.getElementById('total-amount').innerText = '';
    }
});
