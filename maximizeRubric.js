document.querySelector('[data-region="grade"]').style.maxWidth = "100%";
document.querySelectorAll(
    'div#rubric-advancedgrading table.criteria#advancedgrading-criteria tbody tr.criterion td.levels'
).forEach(td => {
    td.style.width = '100%';
});