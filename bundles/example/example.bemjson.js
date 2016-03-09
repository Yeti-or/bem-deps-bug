module.exports = {
    block: 'b-page',
    head: [
        {
            tag: 'meta',
            attrs: { 'http-equiv': 'content-type', content: 'text/html; charset=utf-8' }
        },
        { elem: 'css', url: 'example.css'}
    ],
    content: [
        { block: 'example' },
        {block: 'i-jquery', mods: {version: 'default'}},
        { elem: 'js', url: 'example.js'}
    ]
};
