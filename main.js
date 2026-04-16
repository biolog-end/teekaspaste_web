document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("spell-grid");

    const generateTagsHTML = (tags) => {
        return tags.map(tag => '<span class="tag ' + tag.class + '">' + tag.label + '</span>').join('');
    };

    const generateButtonsHTML = (variants) => {
        return variants.map(variant => {
            const escapedCode = variant.code.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
            return '<button class="copy-btn" data-code="' + escapedCode + '">Copy: ' + variant.btnLabel + '</button>';
        }).join('');
    };

    const fallbackImage = 'data:image/svg+xml,' + encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><rect fill="#c0c0c0" width="200" height="150"/><rect x="10" y="10" width="180" height="130" fill="#808080"/><text x="100" y="80" text-anchor="middle" fill="#000" font-size="14" font-family="sans-serif">Image Loading...</text></svg>');

    spellsData.forEach(spell => {
        const card = document.createElement("div");
        
        if (spell.isDouble) {
            card.className = "spell-card double-card";
            card.innerHTML = 
                '<div class="card-title-bar">' +
                    '<h2>' + spell.left.title + ' / ' + spell.right.title + '</h2>' +
                '</div>' +
                '<div class="card-inner">' +
                    '<div class="card-title-bar" style="margin:-10px -10px 10px -10px;">' +
                        '<h2>' + spell.left.title + '</h2>' +
                        '<div class="info-icon">?<div class="tooltip-text">' + spell.left.deepDesc + '</div></div>' +
                    '</div>' +
                    '<div class="tags-container">' + generateTagsHTML(spell.left.tags) + '</div>' +
                    '<img src="' + spell.left.gif + '" alt="' + spell.left.title + '" class="spell-gif" onerror="this.src=\'' + fallbackImage + '\'">' +
                    '<p class="spell-desc">' + spell.left.shortDesc + '</p>' +
                    '<div class="buttons-container">' + generateButtonsHTML(spell.left.variants) + '</div>' +
                '</div>' +
                '<div class="card-inner">' +
                    '<div class="card-title-bar" style="margin:-10px -10px 10px -10px;">' +
                        '<h2>' + spell.right.title + '</h2>' +
                        '<div class="info-icon">?<div class="tooltip-text">' + spell.right.deepDesc + '</div></div>' +
                    '</div>' +
                    '<div class="tags-container">' + generateTagsHTML(spell.right.tags) + '</div>' +
                    '<img src="' + spell.right.gif + '" alt="' + spell.right.title + '" class="spell-gif" onerror="this.src=\'' + fallbackImage + '\'">' +
                    '<p class="spell-desc">' + spell.right.shortDesc + '</p>' +
                    '<div class="buttons-container">' + generateButtonsHTML(spell.right.variants) + '</div>' +
                '</div>';
        } else {
            card.className = "spell-card";
            card.innerHTML = 
                '<div class="card-title-bar">' +
                    '<h2>' + spell.title + '</h2>' +
                    '<div class="info-icon">?<div class="tooltip-text">' + spell.deepDesc + '</div></div>' +
                '</div>' +
                '<div class="card-inner">' +
                    '<div class="tags-container">' + generateTagsHTML(spell.tags) + '</div>' +
                    '<img src="' + spell.gif + '" alt="' + spell.title + '" class="spell-gif" onerror="this.src=\'' + fallbackImage + '\'">' +
                    '<p class="spell-desc">' + spell.shortDesc + '</p>' +
                    '<div class="buttons-container">' + generateButtonsHTML(spell.variants) + '</div>' +
                '</div>';
        }

        grid.appendChild(card);
    });

    const spellCount = document.getElementById('spell-count');
    if (spellCount) {
        spellCount.textContent = 'Spells loaded: ' + spellsData.length;
    }

    grid.addEventListener("click", (e) => {
        if (e.target.classList.contains("copy-btn")) {
            const btn = e.target;
            const codeToCopy = btn.getAttribute("data-code");
            const originalText = btn.innerText;

            navigator.clipboard.writeText(codeToCopy).then(() => {
                btn.innerText = "Copied!";
                btn.style.background = "#90EE90";
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "";
                }, 2000);
            }).catch(err => {
                console.error("Failed to copy text: ", err);
                btn.innerText = "Error!";
                btn.style.background = "#FFB6C1";
                
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.style.background = "";
                }, 2000);
            });
        }
    });

    console.log('TeekasPaste Spells - Windows 98 Edition');
    console.log('Spells loaded: ' + spellsData.length);
});
