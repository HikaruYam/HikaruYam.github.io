function getFaviconUrl(url) {
    try {
        const domain = new URL(url).origin;
        return `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;
    } catch (e) {
        return '';
    }
}

fetch('products.json')
    .then(response => response.json())
    .then(data => {
        const productsList = document.getElementById('products-list');
        data.products.forEach(product => {
            const item = document.createElement('a');
            item.className = 'item';
            item.href = product.url;
            item.target = '_blank';
            item.rel = 'noopener noreferrer';

            const faviconUrl = getFaviconUrl(product.url);
            const faviconHtml = faviconUrl ? `<img src="${faviconUrl}" alt="" class="favicon">` : '';

            let tagsHtml = '';
            if (product.tags && product.tags.length > 0) {
                tagsHtml = '<div class="tags">' +
                    product.tags.map(tag => `<span class="tag">${tag}</span>`).join('') +
                    '</div>';
            }

            item.innerHTML = `
                <div class="item-header">
                    ${faviconHtml}
                    <h3>${product.name}</h3>
                </div>
                <p>${product.description}</p>
                ${tagsHtml}
            `;

            productsList.appendChild(item);
        });
        
        const linksList = document.getElementById('links-list');
        data.links.forEach(link => {
            const item = document.createElement('a');
            item.className = 'item';
            item.href = link.url;
            item.target = '_blank';
            item.rel = 'noopener noreferrer';

            const faviconUrl = getFaviconUrl(link.url);
            const faviconHtml = faviconUrl ? `<img src="${faviconUrl}" alt="" class="favicon">` : '';

            item.innerHTML = `
                <div class="item-header">
                    ${faviconHtml}
                    <h3>${link.name}</h3>
                </div>
                <p>${link.description}</p>
            `;

            linksList.appendChild(item);
        });
    })
    .catch(error => {
        console.error('データの読み込みに失敗しました:', error);
    });
