function slideImage(index) {
    let images = $('.slide');
    for (i = 0; i < images.length; i++) {
        console.log('tabIndex', index, i, index === i);
        if (i == index) {

            // $('.collapsible-item-content').eq(i).addClass('collapsible-active-item');

            // $('.collapsible-item-title').eq(i).css({ 'display': 'none' });

            $('.slide').eq(i).slideDown(500);

        }
        else {
            $('.slide').eq(i).slideUp(500);





        }
    }
}
$("document").ready(function () {
    console.log('hi there')
    let imageIndex = 0;
    setTimeout(() => {
        setInterval(() => {
            slideImage(imageIndex)
            imageIndex = (imageIndex + 1) % ($('.slide').length)
            // if (imageIndex < $('.slide').length - 1) {
            //     imageIndex++
            // } else {
            //     imageIndex = 0
            // }
        }, 3000)
    }, 1500)
});