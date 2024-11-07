function showSearchInput() {
    // Afișează câmpul de input
    const input = document.querySelector('.search_input');
    const searchText = document.querySelector('.search_text');
    
    // if (input.style.display === "none") {
    //     input.style.display = "inline-block";
    //     searchText.style.display = "none";
    //     input.focus();  // Focalizează pe câmpul de input
    // } else {
    //     input.style.display = "none";
    //     searchText.style.display = "inline";
    // }
}

function clearText() {
    const searchText = document.querySelector('.search_text');
    searchText.style.display = "none";
}

function restoreText() {
    const input = document.querySelector('.search_input');
    const searchText = document.querySelector('.search_text');
    
    if (input.value === "") {
        searchText.style.display = "inline";
    }
}
