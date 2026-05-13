// Sample Job Data for SEO and UX
const jobs = [
    { title: "Senior React Developer", company: "TechFlow", country: "usa", category: "Development", salary: "$120k - $150k" },
    { title: "Digital Marketing Specialist", company: "GrowthScale", country: "uk", category: "Marketing", salary: "£45k - £60k" },
    { title: "UI/UX Designer", company: "CreativeUI", country: "australia", category: "Design", salary: "$90k - $110k" },
    { title: "Data Analyst", company: "DataViz", country: "canada", category: "Data", salary: "$80k - $100k" },
];

const jobGrid = document.getElementById('jobGrid');
const jobSearch = document.getElementById('jobSearch');
const countryFilter = document.getElementById('countryFilter');

// Display Jobs
function displayJobs(filteredJobs) {
    jobGrid.innerHTML = '';
    filteredJobs.forEach(job => {
        const card = `
            <div class="job-card">
                <span class="badge">${job.category}</span>
                <h3>${job.title}</h3>
                <p><i class="fas fa-building"></i> ${job.company}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${job.country.toUpperCase()}</p>
                <p><strong>${job.salary}</strong></p>
                <button class="btn-primary" style="width:100%; margin-top:15px;">Apply Now</button>
            </div>
        `;
        jobGrid.innerHTML += card;
    });
}

// Initial Call
displayJobs(jobs);

// Filter Logic
function updateFilters() {
    const searchTerm = jobSearch.value.toLowerCase();
    const country = countryFilter.value;

    const filtered = jobs.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm);
        const matchesCountry = country === 'all' || job.country === country;
        return matchesSearch && matchesCountry;
    });
    displayJobs(filtered);
}

jobSearch.addEventListener('input', updateFilters);
countryFilter.addEventListener('change', updateFilters);

// Resume Generator Logic
function generateResume() {
    const name = document.getElementById('resName').value;
    const role = document.getElementById('resRole').value;
    const summary = document.getElementById('resSummary').value;
    const exp = document.getElementById('resExp').value;

    document.getElementById('prevName').innerText = name || "Your Name";
    document.getElementById('prevRole').innerText = role || "Professional Title";
    document.getElementById('prevSummary').innerText = summary || "Summary...";
    document.getElementById('prevExp').innerText = exp || "Experience...";

    // Simple Print Trigger for PDF Download
    window.print();
}

// Form Submission (Lead Gen)
document.getElementById('leadGen').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Success! You'll receive job alerts soon.");
});
