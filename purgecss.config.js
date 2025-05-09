const { PurgeCSS } = require('purgecss');
const fs = require('fs');

async function purge() {
    const purgeCSS = new PurgeCSS();
    
    const result = await purgeCSS.purge({
        content: [
            '**/*.html',
            '**/*.js'
        ],
        css: ['styles.css'],
        safelist: [
            'ring-2',
            'ring-blue-500',
            'opacity-0',
            'opacity-100',
            'pointer-events-none',
            'pointer-events-auto',
            'focus:ring-2',
            'focus:ring-blue-500',
            'sr-only',
            'not-sr-only',
            'hidden',
            'block',
            'menu-open',
            'dark',
            'animation-delay-500',
            'animation-delay-1000',
            'animation-delay-1500',
            'animation-delay-2000',
            'animate-fadeInUp',
            'focus:outline-none',
            'focus:ring-[#3a7bd5]'
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