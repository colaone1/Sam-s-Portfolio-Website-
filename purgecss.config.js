const { PurgeCSS } = require('purgecss');
const fs = require('fs');

async function purge() {
    const purgeCSS = new PurgeCSS();
    
    const result = await purgeCSS.purge({
        content: [
            '*.html',
            'cv/*.html'
        ],
        css: ['styles.css'],
        safelist: [
            'active',
            'show',
            'hide',
            'fade-in',
            'fade-out',
            'slide-in',
            'slide-out',
            'rotate',
            'scale',
            'bounce',
            'pulse',
            'shake',
            'flip',
            'hover',
            'focus',
            'disabled',
            'selected',
            'checked',
            'invalid',
            'valid',
            'loading',
            'success',
            'error',
            'warning',
            'info'
        ]
    });

    if (result && result.length > 0) {
        fs.writeFileSync('styles.purged.css', result[0].css);
        console.log('Purged CSS file created successfully!');
    } else {
        console.error('No CSS was purged. Check your configuration.');
    }
}

purge().catch(console.error); 