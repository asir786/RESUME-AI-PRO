:root {
    --primary: #2563eb;
    --ai-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
    --canva-teal: #00c4cc;
    --bg: #f8fafc;
    --card: #ffffff;
    --text: #1e293b;
}

.dark-mode {
    --bg: #0f172a;
    --card: #1e293b;
    --text: #f1f5f9;
}

body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text); margin: 0; transition: 0.3s; }
.container { max-width: 1100px; margin: 0 auto; padding: 20px; }

.builder-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 30px; align-items: start; }

@media (max-width: 900px) { .builder-grid { grid-template-columns: 1fr; } }

.card { background: var(--card); padding: 25px; border-radius: 16px; box-shadow: 0 10px 25px -5px rgba(0,0,0,0.1); }

/* AI Button styling */
.btn-ai {
    background: var(--ai-gradient);
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 10px;
}

.btn-canva {
    background: var(--canva-teal);
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    flex: 1;
}

.resume-paper {
    background: white;
    color: #333;
    padding: 40px;
    min-height: 500px;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    font-size: 0.9rem;
}

.resume-divider { height: 2px; background: #eee; margin: 15px 0; }
.action-bar { display: flex; gap: 10px; margin-top: 20px; }
.btn-primary { background: var(--primary); color: white; border: none; padding: 12px 20px; border-radius: 8px; flex: 1; cursor: pointer; }
