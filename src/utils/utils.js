export const checkWindowOverflow = (value) => {
    if (typeof window != 'undefined' && window.document) {
        value ? 
            document.body.classList.add('overflow-hidden') 
            : document.body.classList.remove('overflow-hidden');
    }
};
