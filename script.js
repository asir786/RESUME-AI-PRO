const GEMINI_KEY = "AIzaSyBEE8IoqwesQ-NemSFhWTfp2lwMRfgZhFY";
const CANVA_KEY = "cnvcaR3gYxLB4tS3tUc_OaOAx8yGjbVyEkLbIZgG5KoV2bR8f8ce4ca7";

// Update Preview
function updatePreview() {
    document.getElementById('res-name').innerText = document.getElementById('fullName').value || "Muhammad Asir Raza";
    const contact = `${document.getElementById('email').value} | ${document.getElementById('phone').value} | ${document.getElementById('location').value}`;
    document.getElementById('res-contact').innerText = contact;
    document.getElementById('res-body').innerHTML = document.getElementById('experience').value.replace(/\n/g, '<br>') || "seo expert";
}

// Attach listeners
['fullName', 'email', 'phone', 'location', 'experience'].forEach(id => {
    document.getElementById(id).addEventListener('input', updatePreview);
});

// AI Enhancement Fix
document.getElementById('ai-enhance-btn').addEventListener('click', async () => {
    const text = document.getElementById('experience').value;
    if(!text) return alert("Please type your experience first!");

    const btn = document.getElementById('ai-enhance-btn');
    btn.innerText = "🪄 Polishing...";

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Professionalize this resume experience for the US/Australian market. Use bullet points: ${text}` }]}]
            })
        });

        if (!response.ok) throw new Error('API Key or Network Error');

        const data = await response.json();
        document.getElementById('experience').value = data.candidates[0].content.parts[0].text;
        updatePreview();
    } catch (e) {
        console.error(e);
        alert("AI Error: Make sure your Gemini API key is enabled in Google AI Studio.");
    }
    btn.innerText = "✨ AI Optimize Content";
});

// Canva Button Fix
let canvaApi = null;
window.onload = () => {
    if (window.Canva && window.Canva.DesignButton) {
        canvaApi = Canva.DesignButton.initialize({
            apiKey: CANVA_KEY,
            type: "Resume"
        });
    }
};

document.getElementById('canva-btn').addEventListener('click', () => {
    if (canvaApi) {
        canvaApi.onDesignPublish = (url) => window.open(url, '_blank');
    } else {
        alert("Canva is still loading... please wait a moment.");
    }
});

// Print Function
function downloadPDF() {
    window.print();
}
