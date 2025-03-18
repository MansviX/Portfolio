// document.addEventListener('DOMContentLoaded', () => {
//     const nameElement = document.querySelector('.name-animation');

//     // Split the name into individual words and wrap each word in a <span> to animate separately
//     const words = nameElement.textContent.split(' '); // Split the name into words
//     nameElement.innerHTML = ''; // Clear the original text
//     words.forEach(word => {
//         const span = document.createElement('span');
//         span.textContent = word;
//         nameElement.appendChild(span);
//         nameElement.appendChild(document.createTextNode(' ')); // Add a space between the words
//     });

//     // Create an Intersection Observer to detect when the name section is in view
//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 // When the section is in view, trigger the animation
//                 nameElement.classList.add('animated-name');
//             } else {
//                 // When the section is out of view, reset the animation (so it will play again when the section comes into view)
//                 nameElement.classList.remove('animated-name');
//             }
//         });
//     }, { threshold: 0.5 }); // 50% of the name section should be visible

//     // Start observing the name element
//     observer.observe(nameElement);
// });
