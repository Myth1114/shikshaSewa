document.addEventListener("DOMContentLoaded", function () {
  const programsContainer = document.getElementById("programs-container");

  // Function to render programs
  function renderPrograms(programs) {
    programsContainer.innerHTML = "";

    programs.forEach((program) => {
      const university = universities.find((u) => program.id.startsWith(u.id));
      const programCard = document.createElement("div");
      programCard.className = "col-md-6 mb-4";
      programCard.innerHTML = `
                <div class="card h-100">
                    <div class="cardBody">
                        <h5 class="card-title">${program.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${university.name}</h6>
                        <p class="card-text">
                            <strong>Fee:</strong> ${program.fee}<br>
                            <strong>Duration:</strong> ${program.duration}
                        </p>
                        <a href="program-details.html?id=${program.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            `;
      programsContainer.appendChild(programCard);
    });
  }

  // Initial render
  renderPrograms(allPrograms);

  // Search functionality
  document
    .getElementById("program-search")
    .addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      const filtered = allPrograms.filter(
        (program) =>
          program.name.toLowerCase().includes(searchTerm) ||
          program.university.toLowerCase().includes(searchTerm)
      );
      renderPrograms(filtered);
    });

  // Filter by degree level (you'll need to add degreeLevel to your program objects)
  document.querySelectorAll(".form-check-input").forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      const showBachelor = document.getElementById("bachelor-check").checked;
      const showMasters = document.getElementById("masters-check").checked;
      const showPhD = document.getElementById("phd-check").checked;

      const filtered = allPrograms.filter((program) => {
        // You'll need to add degreeLevel to your program objects
        if (program.degreeLevel === "Bachelor" && !showBachelor) return false;
        if (program.degreeLevel === "Masters" && !showMasters) return false;
        if (program.degreeLevel === "PhD" && !showPhD) return false;
        return true;
      });

      renderPrograms(filtered);
    });
  });
});
