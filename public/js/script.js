(() => {
  'use strict';

  // Bootstrap Validation
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }

      form.classList.add('was-validated');
    }, false);
  });

})();

// =======================
// GST Toggle
// =======================

const taxSwitch = document.getElementById("switchCheckDefault");

if (taxSwitch) {

  const savedState = localStorage.getItem("showGST");

  if (savedState === "true") {
    taxSwitch.checked = true;
  }

  document.querySelectorAll(".tax-info").forEach(info => {
    info.style.display = taxSwitch.checked ? "inline" : "none";
  });

  taxSwitch.addEventListener("change", () => {

    localStorage.setItem("showGST", taxSwitch.checked);

    document.querySelectorAll(".tax-info").forEach(info => {
      info.style.display = taxSwitch.checked ? "inline" : "none";
    });

  });

}

// =======================
// Filters
// =======================

const filters = document.querySelectorAll(".filter");

if (filters.length > 0) {

  filters.forEach(filter => {

    filter.addEventListener("click", () => {

      filters.forEach(f => f.classList.remove("active"));

      filter.classList.add("active");

      const category = filter.dataset.category;

      if (category === "all") {
        window.location.href = "/listings";
      } else {
        window.location.href = `/listings?category=${category}`;
      }

    });

  });

}

// ==========================
// DARK MODE
// ==========================

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

  }

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

      localStorage.setItem("theme", "dark");

      themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

    } else {

      localStorage.setItem("theme", "light");

      themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

    }

  });

}