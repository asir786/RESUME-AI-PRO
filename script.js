const GEMINI_KEY = "AIzaSyBEE8IoqwesQ-NemSFhWTfp2lwMRfgZhFY";
const CANVA_KEY = "cnvcaR3gYxLB4tS3tUc_OaOAx8yGjbVyEkLbIZgG5KoV2bR8f8ce4ca7";

// Update Preview in Real-time
function updatePreview() {
    document.getElementById('res-name').innerText = document.getElementById('fullName').value || "Your Name";
    const contact = `${document.getElementById('email').value} | ${document.getElementById('phone').value} | ${document.getElementById('location').value}`;
    document.getElementById('res-contact').innerText = contact;
    
    const exp = document.getElementById('experience').value;
    document.getElementById('res-body').innerHTML = exp.replace(/\n/g, '<br>');
}

// Attach listeners
['fullName', 'email', 'phone', 'location', 'experience'].forEach(id => {
    document.getElementById(id).addEventListener('input', updatePreview);
});

// AI Enhancement
document.getElementById('ai-enhance-btn').addEventListener('click', async () => {
    const text = document.getElementById('experience').value;
    const market = document.getElementById('market-type').value;
    if(!text) return alert("Enter experience first!");

    const btn = document.getElementById('ai-enhance-btn');
    btn.innerText = "🪄 AI Polishing...";

    try {
        const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `Rewrite this resume experience for the ${market} market. Use bullet points and professional action verbs: ${text}` }]}]
            })
        });
        const data = await res.json();
        document.getElementById('experience').value = data.candidates[0].content.parts[0].text;
        updatePreview();
    } catch (e) { alert("AI Error. Check connection."); }
    btn.innerText = "✨ AI Optimize Content";
});

// Canva Initializer
document.getElementById('canva-btn').addEventListener('click', () => {
    Canva.DesignButton.initialize({
        apiKey: CANVA_KEY,
        type: "Resume",
        onDesignPublish: (url) => window.open(url, '_blank')
    });
});
