document.addEventListener("DOMContentLoaded", function () {
  const universityCardsContainer = document.getElementById("university-cards");
  const showAllBtn = document.getElementById("show-all-btn");

  // Function to create university cards
  function createUniversityCards(universitiesToShow) {
    universityCardsContainer.innerHTML = ""; // Clear existing content

    universitiesToShow.forEach((university) => {
      const card = document.createElement("div");
      card.className = "col-md-3 mb-4";
      card.innerHTML = `
                <div class="card">
                <img src="${university.image}" class="card-img-top" alt="${university.name}">
                    <div class="card-body">
                        <h5 class="card-title">${university.name}</h5>
                        <p class="card-text">World Ranking: ${university.ranking}</p>
                        <p class="card-text">Location: ${university.location}</p>
                    </div>
                </div>
            `;
      card.addEventListener("click", () => {
        // Redirect to the detail page with the university ID as a URL parameter
        window.location.href = `details.html?id=${university.id}`;
      });
      universityCardsContainer.appendChild(card);
    });
  }
  // Initially show only 6 universities
  const initialUniversities = universities.slice(0, 4);
  createUniversityCards(initialUniversities);

  // Show all universities when the button is clicked
});
