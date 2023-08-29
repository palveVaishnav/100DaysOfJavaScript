// Shows one page and hides the other two
function showPage(page,color) {
    // Hide all of the divs:
    let clr = color;
    document.querySelectorAll('div').forEach(div => {
        div.style.display = 'none';
        // div.style.background = color;
    });

    // Show the div provided in the argument
    document.querySelector(`#${page}`).style.display = 'grid';
    document.querySelector(`#${page}`).style.background = clr;
}


// Wait for page to loaded:
document.addEventListener('DOMContentLoaded', function() {

    // Select all buttons
    document.querySelectorAll('button').forEach(button => {
        // When a button is clicked, switch to that page
        button.onclick = function() {
            showPage(this.dataset.page,this.dataset.color);
        }
    })
});