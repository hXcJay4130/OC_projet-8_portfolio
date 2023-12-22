function showResponsiveMenu() {
    var menu = document.getElementById("navbar__nav");
    var icon = document.getElementById("navbar__burger");
    var root = document.getElementById("navbar");
    if (menu.className === "") {
        menu.className = "open";
        icon.className = "open";
        root.style.overflowY = "hidden";
    } else {
        menu.className = "";                    
        icon.className = "";
        root.style.overflowY = "";
    }
}

export default showResponsiveMenu