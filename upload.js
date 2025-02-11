document.getElementById("upload-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const fileLink = document.getElementById("link").value.trim();

    // Create project object
    const project = {
        title,
        description,
        fileLink
    };

    // Store project in localStorage
    localStorage.setItem("uploadedProject", JSON.stringify(project));

    alert("Project uploaded successfully!");
    window.location.href = "projects.html"; // Redirect to projects page
});
