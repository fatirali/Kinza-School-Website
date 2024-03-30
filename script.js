const form = document.querySelectorAll("#register")
console.log(form)
form.forEach(function (f) {
f.addEventListener('click', function() {
    window.open('https://forms.gle/zaW9t3xSqLa74Wvf9', '_blank')
})
});