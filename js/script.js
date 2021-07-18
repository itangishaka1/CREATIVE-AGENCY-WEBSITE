const toggleIcon = document.querySelector('.toggle-icon');
const navigation = document.querySelector('.navigation');

toggleIcon.addEventListener('click', () => {
    toggleIcon.classList.toggle('active')
    navigation.classList.toggle('active')
})
