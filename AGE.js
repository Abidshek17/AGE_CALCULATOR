function calculateAge() {
    const dobInput = document.getElementById("dob").value;
    const result = document.getElementById("result");

    if (!dobInput) {
        result.innerHTML = "⚠ Please select your Date of Birth";
        return;
    }

    const birthDate = new Date(dobInput);
    const today = new Date();

    if (birthDate > today) {
        result.innerHTML = "⚠ Date of Birth cannot be in the future";
        return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += prevMonthDays;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    const totalDaysLived = Math.floor(
        (today - birthDate) / (1000 * 60 * 60 * 24)
    );

    result.innerHTML = `
        <strong>Your Age</strong><br><br>
        🎂 ${years} Years<br>
        📆 ${months} Months<br>
        ⏳ ${days} Days<br><br>
        🧮 <strong>Total Days Lived:</strong> ${totalDaysLived}
    `;
}
