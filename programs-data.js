// programs-data.js
const allPrograms = [];

universities.forEach((university) => {
  university.programs.forEach((program) => {
    allPrograms.push({
      id: `${university.id}-${program.courseName
        .replace(/\s+/g, "-")
        .toLowerCase()}`,
      image: program.image,
      name: program.courseName,
      university: university.name,
      fee: program.fee,
      duration: program.duration,
      language: program.language,
      intakes: program.intakes,
      degreeLevel: program.degreeLevel || "Masters", // Add this to your program objects
    });
  });
});
