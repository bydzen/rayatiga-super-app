var scrollTopButton = document.getElementsByClassName('scroll-top')[0]
window.onscroll = function () {
    showScrollButton()
}
function showScrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.opacity = '1'
    } else {
        scrollTopButton.style.opacity = '0'
    }
}
function scrollTopAction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}