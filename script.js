function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(sec => {
      sec.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
  }
  