function showPromotion() {
    const promoCode = "Candle15";
    alert(`Use promo code ${promoCode} at checkout to get 15% off your first order!`);
}
    document.querySelector('.secondary-button').style.display = 'none';

    function submitForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formStatus = document.getElementById('formStatus');
        
        if (!name || !email || !message) {
            formStatus.innerHTML = 'Please fill out all required fields.';
            formStatus.className = 'error';
            formStatus.style.display = 'block';
            return;
        }
        
        formStatus.innerHTML = 'Thank you for your message! We will get back to you shortly.';
        formStatus.className = 'success';
        formStatus.style.display = 'block';
        
        document.getElementById('contactForm').reset();
    }
    