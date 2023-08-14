// Login page
document.getElementById('login-btn').addEventListener('click', () => {
    // Define UI variables
    const email = document.getElementById('input-email').value;
    const password = document.getElementById('input-password').value;
    
    // verify user
    if(email === ''  || password === '') {
        alert('Please enter valid input')
    }
    else if(email === 'joeyloves@food.com' && password === 'iloverachel') {
        location.href = 'bank.html'
    } else {
       alert('Chandler, stop trying to login');
    }
})

