// JavaScript for dynamic functionality
document.querySelectorAll('.course-card button').forEach(button => {
    button.addEventListener('click', () => {
        alert('You have successfully enrolled in the course!');
    });
});
