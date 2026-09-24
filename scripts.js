if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelector('.change_theme').textContent = '🌙';
}

function change_theme() {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
        document.querySelector('.change_theme').textContent = '🌙';
    } else {
        localStorage.setItem('theme', 'light');
        document.querySelector('.change_theme').textContent = '☀️';
    }
}

searchInput = document.getElementById('search');
filterButtons = document.querySelectorAll('.filter');
allSkills = document.querySelectorAll('.skills li');
noResults = document.getElementById('no-results');
allLists = document.querySelectorAll('.skills');

let activeCategory = 'all';

function getCategoryFromButton(btn) {
    const text = btn.textContent.trim().toLowerCase();
    if (text == 'frontend') return 'frontend';
    else if (text == 'backend') return 'backend';
    else if (text == 'other') return 'other';
    else return 'all';
}

function updateSkills() {
    const query = searchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    allSkills.forEach(skill => {
        const skillText = skill.textContent.toLowerCase();

        const matchCategory =
            activeCategory == 'all' || skill.classList.contains(activeCategory);

        const matchSearch = skillText.includes(query);

        if (matchCategory && matchSearch) {
            skill.style.display = '';
            visibleCount++;
        } else {
            skill.style.display = 'none';
        }
    });

    allLists.forEach(list => {
        const visibleItems = list.querySelectorAll('li:not([style*="display: none"])');
        const heading = list.previousElementSibling;

        if (visibleItems.length == 0) {
            if (heading) heading.style.display = 'none';
            list.style.display = 'none';
        } else {
            if (heading) heading.style.display = '';
            list.style.display = '';
        }
    });

    if (visibleCount == 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

searchInput.addEventListener('input', updateSkills);

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        activeCategory = getCategoryFromButton(btn);

        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        updateSkills();
    });
});
