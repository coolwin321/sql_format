document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const inputSql = document.getElementById('input-sql');
    const outputSql = document.getElementById('output-sql');
    const formatBtn = document.getElementById('format-btn');
    const copyBtn = document.getElementById('copy-btn');
    const clearBtn = document.getElementById('clear-input');
    const statusEl = document.getElementById('status');

    // Format SQL function
    function formatSQL(sql) {
        if (!sql.trim()) return '';

        // Remove single-line comments starting with -- or #
        let formatted = sql.replace(/--.*?$/gm, '');
        formatted = formatted.replace(/#.*?$/gm, '');
        
        // Remove multi-line comments (/* ... */)
        formatted = formatted.replace(/\/\*[\s\S]*?\*\//g, '');

        // Preserve REGEXP_CONTAINS patterns
        formatted = formatted.replace(
            /(REGEXP_CONTAINS\s*\([^)]*\))/gi, 
            match => match.replace(/\s+/g, ' ')
        );

        // Normalize whitespace
        formatted = formatted.replace(/\s+/g, ' ').trim();

        // Wrap in quotes and add semicolon
        return `"${formatted}";`;
    }

    // Format button click handler
    formatBtn.addEventListener('click', function() {
        const formatted = formatSQL(inputSql.value);
        outputSql.textContent = formatted;
        
        // Enable copy button if there's output
        copyBtn.disabled = !formatted;
        
        // Show status
        showStatus('SQL formatted successfully!');
    });

    // Copy to clipboard button click handler
    copyBtn.addEventListener('click', async function() {
        try {
            await navigator.clipboard.writeText(outputSql.textContent);
            showStatus('Copied to clipboard!');
        } catch (err) {
            console.error('Failed to copy text: ', err);
            showStatus('Failed to copy to clipboard', true);
        }
    });

    // Clear input button click handler
    clearBtn.addEventListener('click', function() {
        inputSql.value = '';
        outputSql.textContent = '';
        copyBtn.disabled = true;
        showStatus('Input cleared');
    });

    // Show status message
    function showStatus(message, isError = false) {
        statusEl.textContent = message;
        statusEl.style.color = isError ? '#dc3545' : '#28a745';
        statusEl.classList.add('visible');
        
        // Hide status after 3 seconds
        setTimeout(() => {
            statusEl.classList.remove('visible');
        }, 3000);
    }

    // Auto-resize textarea
    function autoResize() {
        inputSql.style.height = 'auto';
        inputSql.style.height = inputSql.scrollHeight + 'px';
    }

    // Event listeners for auto-resize
    inputSql.addEventListener('input', autoResize);
    window.addEventListener('resize', autoResize);
    
    // Initial resize
    autoResize();
});
