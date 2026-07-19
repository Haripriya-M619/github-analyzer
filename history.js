// history.js

const history = JSON.parse(localStorage.getItem("history")) || [];

// Summary cards
document.getElementById("totalRepos").innerText = history.length;

let totalScore = 0;
let highestScore = 0;

history.forEach(report => {
    totalScore += report.score;

    if (report.score > highestScore) {
        highestScore = report.score;
    }
});

document.getElementById("averageScore").innerText =
    history.length > 0
        ? Math.round(totalScore / history.length) + "%"
        : "0%";

document.getElementById("highestScore").innerText =
    highestScore + "%";

// History table
const table = document.getElementById("historyTable");
table.innerHTML = "";

// Latest 4 reports
history.slice(0, 4).forEach(report => {

    let statusClass = "";

    if (report.status === "Excellent")
        statusClass = "excellent";
    else if (report.status === "Good")
        statusClass = "good";
    else if (report.status === "Average")
        statusClass = "average";
    else
        statusClass = "poor";

    table.innerHTML += `
        <tr>
            <td>${report.repoName}</td>
            <td>${report.score}%</td>
            <td>${report.date}</td>
            <td>
                <span class="${statusClass}">
                    ${report.status}
                </span>
            </td>
            <td>
                <button class="view-btn">View Report</button>
            </td>
        </tr>
    `;
});