const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'Pages');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const mappings = [
    { regex: /<img[^>]*src="[^"]*logo\.png"[^>]*>/gi, replace: '<i class="bi bi-heart-pulse-fill" style="font-size: 1.5rem; color: #1A56DB; margin-right: 8px;"></i>' },
    { regex: /<img[^>]*src="[^"]*house-regular\.png"[^>]*>/gi, replace: '<i class="bi bi-house"></i>' },
    { regex: /<img[^>]*src="[^"]*magnifying-glass-solid\.png"[^>]*>/gi, replace: '<i class="bi bi-search"></i>' },
    { regex: /<img[^>]*src="[^"]*user-tie-solid\.png"[^>]*>/gi, replace: '<i class="bi bi-building"></i>' },
    { regex: /<img[^>]*src="[^"]*envelope-regular\.png"[^>]*>/gi, replace: '<i class="bi bi-envelope"></i>' },
    { regex: /<img[^>]*src="[^"]*right-from-bracket-solid\.png"[^>]*>/gi, replace: '<i class="bi bi-box-arrow-right"></i>' },
    { regex: /<img[^>]*src="[^"]*hand-holding-hand-solid\.png"[^>]*>/gi, replace: '<i class="bi bi-heart"></i>' },
    { regex: /<img[^>]*src="[^"]*user-regular\.png"[^>]*alt="Avatar"[^>]*>/gi, replace: '<i class="bi bi-person-circle" style="font-size: 1.5rem; color: #6B7280; margin-left: 8px;"></i>' },
    { regex: /<img[^>]*src="[^"]*user-regular\.png"[^>]*>/gi, replace: '<i class="bi bi-person"></i>' },
    { regex: /<img[^>]*src="[^"]*circle-check-regular\.png"[^>]*>/gi, replace: '<i class="bi bi-check-circle"></i>' },
    { regex: /<img[^>]*src="[^"]*bell-regular\.png"[^>]*>/gi, replace: '<i class="bi bi-bell"></i>' }
];

const headLink = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css">\n</head>';

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Add Bootstrap Icons
    if (!content.includes('bootstrap-icons.css')) {
        content = content.replace('</head>', headLink);
    }

    // Replace images
    mappings.forEach(map => {
        content = content.replace(map.regex, map.replace);
    });

    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
});
