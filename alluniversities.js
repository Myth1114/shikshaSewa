document.addEventListener("DOMContentLoaded", function () {
  const allUniversityCardsContainer = document.getElementById(
    "all-university-cards"
  );

  // Function to create university cards
  function createUniversityCards(universities) {
    universities.forEach((university) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
                <div class="card">
                    <img src="${university.image}" class="card-img-top" alt="${university.name}">
                    <div class="card-body">
                        <h5 class="card-title">${university.name}</h5>
                        <p class="card-text">Ranking: ${university.ranking}</p>
                        <p class="card-text">Location: ${university.location}</p>
                    </div>
                </div>
            `;
      card.addEventListener("click", () => {
        // Redirect to the detail page with the university ID as a URL parameter
        window.location.href = `details.html?id=${university.id}`;
      });
      allUniversityCardsContainer.appendChild(card);
    });
  }

  // Display all universities
  createUniversityCards(universities);
});
