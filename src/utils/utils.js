export const checkWindowOverflow = (value) => {
    if (typeof window != 'undefined' && window.document) {
        value ? 
            document.body.classList.add('overflow-hidden') 
            : document.body.classList.remove('overflow-hidden');
    }
};

export const getCenterPosition = (elSelector) => {
    if (typeof window != 'undefined' && window.document) {
        const div = document.querySelector(elSelector);
        //const Mwidth = div.offsetWidth;
        const Mheight = div.offsetHeight;
        //const Wwidth = window.innerWidth;
        const Wheight = window.innerHeight;

        div.style.position = 'absolute';
        div.style.top = ((Wheight - Mheight ) / 2 + window.pageYOffset) + 'px';
        //div.style.left = ((Wwidth - Mwidth) / 2 + window.pageXOffset) + 'px';
    }
};
