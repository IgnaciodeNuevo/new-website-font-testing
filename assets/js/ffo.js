const FontFaceObserver = require('fontfaceobserver');

(function() {
    const html = document.documentElement;
    const ciutadellaRegular = new FontFaceObserver('Ciutadella-Regular');
    const dinBold = new FontFaceObserver('DINNext-Bold');

    Promise.all([ciutadellaRegular.load(), dinBold.load()])
        .then(function() {
            html.classList.add('fonts-loaded');
            console.log('Fonts loaded');
        })
        .catch(function() {
            html.classList.remove('fonts-loaded');
        });
})();
