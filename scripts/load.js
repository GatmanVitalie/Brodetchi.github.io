// Include file loader
function includeHTML(id, file) {
    fetch(file)
        .then(response => {
            if (response.ok) return response.text();
            else throw new Error("Error loading " + file);
        })
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
}

// Include navbar and footer
includeHTML("navbar", "navbar.html");
includeHTML("footer", "footer.html");
