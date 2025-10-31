// Sample quotes data
const quotes = [
    { name: 'Mary Scott', make: 'Mazda', state: 'WY', rate: '$60/mo' },
    { name: 'Susan Flores', make: 'Nissan', state: 'KY', rate: '$44/mo' },
    { name: 'Amanda Thompson', make: 'Subaru', state: 'DE', rate: '$69/mo' },
    { name: 'Sarah Miller', make: 'Hyundai', state: 'SC', rate: '$53/mo' },
    { name: 'Thomas White', make: 'Jeep', state: 'OR', rate: '$34/mo' },
    { name: 'Kimberly King', make: 'Honda', state: 'NE', rate: '$77/mo' },
    { name: 'Matthew Williams', make: 'Kia', state: 'NV', rate: '$77/mo' },
    { name: 'Heather Johnson', make: 'Mazda', state: 'WI', rate: '$41/mo' },
    { name: 'Angela Martinez', make: 'Jeep', state: 'PA', rate: '$77/mo' },
    { name: 'Emily Hill', make: 'Nissan', state: 'ND', rate: '$28/mo' }
];

// Additional quotes for rotation
const additionalQuotes = [
    { name: 'Robert Davis', make: 'Ford', state: 'TX', rate: '$52/mo' },
    { name: 'Jennifer Brown', make: 'Toyota', state: 'CA', rate: '$65/mo' },
    { name: 'David Wilson', make: 'Chevrolet', state: 'FL', rate: '$48/mo' },
    { name: 'Lisa Anderson', make: 'BMW', state: 'NY', rate: '$89/mo' },
    { name: 'Michael Taylor', make: 'Mercedes', state: 'IL', rate: '$95/mo' },
    { name: 'Karen Thomas', make: 'Audi', state: 'WA', rate: '$82/mo' }
];

// Combine all quotes
const allQuotes = [...quotes, ...additionalQuotes];

// Typing animation for intro message
function typeIntroMessage() {
    const introTextElement = document.getElementById('intro-text');
    const message = "Hi! Compare top auto insurance quotes in your area with a quick, simple form.";
    let index = 0;
    
    function type() {
        if (index < message.length) {
            introTextElement.textContent = message.substring(0, index + 1);
            index++;
            setTimeout(type, 50); // Typing speed (50ms per character)
        } else {
            // Remove cursor when done
            introTextElement.classList.add('typing-complete');
        }
    }
    
    // Start typing after a short delay
    setTimeout(type, 500);
}

// Populate quotes table
function populateQuotesTable() {
    const tbody = document.getElementById('quotes-table-body');
    
    // Shuffle quotes
    const shuffledQuotes = allQuotes.sort(() => 0.5 - Math.random());
    const displayedQuotes = shuffledQuotes.slice(0, 10);
    
    tbody.innerHTML = displayedQuotes.map(quote => `
        <tr>
            <td class="name-blur">${quote.name}</td>
            <td>${quote.make}</td>
            <td>${quote.state}</td>
            <td class="rate">${quote.rate}</td>
        </tr>
    `).join('');
}

// Update quotes periodically to simulate real-time updates
function updateQuotes() {
    // Get a random subset of quotes
    const shuffledQuotes = allQuotes.sort(() => 0.5 - Math.random());
    const displayedQuotes = shuffledQuotes.slice(0, 10);
    const tbody = document.getElementById('quotes-table-body');
    
    // Add fade out effect
    tbody.style.opacity = '0';
    tbody.style.transition = 'opacity 0.3s';
    
    setTimeout(() => {
        tbody.innerHTML = displayedQuotes.map(quote => `
            <tr>
                <td class="name-blur">${quote.name}</td>
                <td>${quote.make}</td>
                <td>${quote.state}</td>
                <td class="rate">${quote.rate}</td>
            </tr>
        `).join('');
        
        // Fade in
        tbody.style.opacity = '1';
    }, 300);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    populateQuotesTable();
    typeIntroMessage();
    
    // Update quotes every 3 seconds to simulate real-time updates
    setInterval(updateQuotes, 3000);
});

