import $ from 'jquery';
import './footer.css';
$(document).ready(function() {
    const copyrightText = 'Copyright - Holberton School';
    $('footer').append(`<p>${copyrightText}</p>`);
});