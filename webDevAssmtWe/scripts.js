document.addEventListener('DOMContentLoaded', function () {
    const headings = document.querySelectorAll('h1, h2, h3');
    const toc = document.getElementById('toc');


    headings.forEach(heading => {
        const id = heading.textContent.trim().toLowerCase().replace(/\s+/g, '-');
        heading.id = id;

        const tocItem = document.createElement('a');
        tocItem.href = `#${id}`;
        tocItem.textContent = heading.textContent;

        const indentLevel = heading.tagName === 'H1' ? 0 : heading.tagName === 'H2' ? 10 : 20;
        tocItem.style.marginLeft = `${indentLevel}px`;

        toc.appendChild(tocItem);
    });

    
    headings.forEach(heading => {
        heading.addEventListener('click', function () {
            let sibling = heading.nextElementSibling;
            let shouldCollapse = true;

         
            while (sibling && (sibling.tagName !== 'H1' && sibling.tagName !== 'H2' && sibling.tagName !== 'H3')) {
                if (sibling.style.display === 'none' || sibling.classList.contains('collapsible')) {
                    shouldCollapse = false;
                    break;
                }
                sibling = sibling.nextElementSibling;
            }

            sibling = heading.nextElementSibling; 

           
            while (sibling && (sibling.tagName !== 'H1' && sibling.tagName !== 'H2' && sibling.tagName !== 'H3')) {
                if (shouldCollapse) {
                    sibling.style.display = 'none';
                } else {
                    sibling.style.display = 'block';
                }
                sibling = sibling.nextElementSibling;
            }
        });
    });
});
