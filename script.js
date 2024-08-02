async function submitData() {
    const jsonInput = document.getElementById('jsonInput').value;
    try {
        const res = await fetch('/api/bfhl', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: jsonInput
        });
        const data = await res.json();
        const filter = Array.from(document.getElementById('filter').selectedOptions).map(option => option.value);
        displayResponse(data, filter);
    } catch (error) {
        console.error('Invalid JSON or API Error', error);
    }
}

function displayResponse(data, filter) {
    let filtered = {};
    if (filter.includes('Alphabets')) filtered.alphabets = data.alphabets;
    if (filter.includes('Numbers')) filtered.numbers = data.numbers;
    if (filter.includes('Highest alphabet')) filtered.highest_alphabet = data.highest_alphabet;
    document.getElementById('response').textContent = JSON.stringify(filtered, null, 2);
}
