"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var today = new Date();
    var year = today.getFullYear();
    document.getElementById('currentYear').textContent = year;
});
