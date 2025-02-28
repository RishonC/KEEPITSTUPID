
function expandContainer(element) {
    // Remove the expanded class from any currently expanded container
    document.querySelectorAll(".index_container").forEach(container => {
        container.classList.remove("expanded");
    });

    // Add the expanded class to the clicked container
    element.classList.add("expanded");

    // Optional: Add a close function when clicking anywhere in the expanded container
    element.onclick = function () {
        element.classList.remove("expanded");
        element.onclick = function () { expandContainer(element); }; // Restore original click function
    };
}
