const cube = document.querySelector('.cube');
const infoContent = document.getElementById('info-content');
const themeToggle = document.getElementById('theme-toggle');

// Dynamic content for each face
const faceContent = {
  front: 'Project 1: A signature app built with HTML, CSS, and JavaScript.',
  back: 'Project 2: An e-commerce site using React and Node.js.',
  left: 'Project 3: A NFT Marketplace using MERN stack and blockchain.',
  right: 'Skills: HTML, CSS, JavaScript, React, Node.js, MongoDB.',
  top: 'About Me: A passionate full-stack developer!',
  bottom: 'Contact: Email me at muskanbhushan2@gmail.com.'
};

// Add click event to show face details
cube.addEventListener('click', (event) => {
  const face = event.target.classList[1]; // Get face name
  if (faceContent[face]) {
    infoContent.textContent = faceContent[face];
  }
});

// Toggle light/dark theme
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});
