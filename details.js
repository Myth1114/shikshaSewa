document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const universityId = parseInt(urlParams.get("id"));

  const university = universities.find((uni) => uni.id === universityId);

  if (university) {
    // Display university details
    // document.getElementById("detail-image").src = university.image;
    document.getElementById("detail-name").textContent = university.name;
    // document.getElementById(
    //   "detail-ranking"
    // ).textContent = `Ranking: ${university.ranking}`;
    // document.getElementById(
    //   "detail-location"
    // ).textContent = `Location: ${university.location}`;
    document.getElementById("detail-about").textContent = university.about;
    document.getElementById("detail-accommodation").textContent =
      university.accommodation;
    // document.getElementById(
    //   "detail-fees"
    // ).textContent = `Fee Structure: ${university.fees}`;

    // Display program details
    const programsContainer = document.getElementById("detail-programs");
    programsContainer.innerHTML = ""; // Clear existing content

    university.programs.forEach((program) => {
      const programCard = document.createElement("div");
      programCard.className = "col-lg-12";
      programCard.innerHTML = `
              <div class="ProgramSection">
                  <div class="UniLogo">
                  <img src="${program.image}"></img>
                  </div>                  
                  <div class="CardBody">
                      <h4 class="cardTitle">${program.courseName}</h4>
                      <p class="cardText">Location: ${program.location}</p>
                      <p class="cardText">Tution Fee (Yearly): <span class="Fee">${
                        program.fee
                      }</span> <span class="strike">$40000</></p>
                      <p class="cardText"><span>Accommodation Fee:</span> <span class="Fee">${
                        program.accommodationFee
                          ? program.accommodationFee
                          : "N/A"
                      }</p>
                      <p class="cardText">Duration: ${program.duration}</p>
                      <p class="cardText">Language: ${program.language}</p>
                      <p class="Degree">Degree: ${program.degreeType}</p>
                  </div>
                  <div class="Right">
                    <div class="RightDetail">
                    <div class="Deadline">
                    <span>Application Deadline</span>
                    <strong><span class='Closed'>${
                      program.applicationDeadline
                        ? program.applicationDeadline
                        : "Closed"
                    }</span></strong>
                    </div>
                    <div class="Deadline">
                    <span>Intake</span>
                    <strong><span class='Closed'>${
                      program.intakes ? program.intakes : "Closed"
                    }</span></strong>
                    </div>    
                    </div>
                  </div>
              </div>
          `;
      programsContainer.appendChild(programCard);
    });

    // Display intakes and deadlines
    const intakesDeadlinesContainer = document.getElementById(
      "detail-intakes-deadlines"
    );
    intakesDeadlinesContainer.innerHTML = ""; // Clear existing content

    university.programs.forEach((program) => {
      const intakeDiv = document.createElement("div");
      intakeDiv.className = "mb-3";
      intakeDiv.innerHTML = `
              <h5>${program.courseName}</h5>
              <p><strong>Intakes:</strong> ${program.intakes.join(", ")}</p>
              <p><strong>Deadline:</strong> ${program.applicationDeadline}</p>
          `;
      intakesDeadlinesContainer.appendChild(intakeDiv);
    });
  } else {
    document.getElementById("detail-name").textContent =
      "University not found!";
  }
});
