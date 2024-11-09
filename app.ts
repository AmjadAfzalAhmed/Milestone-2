let toggleBtn = document.getElementById('toggler') as HTMLButtonElement | null;


function toggleMode() {
    
    let hobby = document.querySelector('.hobbies-details') as HTMLElement | null; 
    if (hobby.style.display === "none") {
        hobby.style.display = "block"; 
    } else {
        hobby.style.display = "none"; 
    }
}

toggleBtn.onclick = () => {
    toggleMode(); 
}
