document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('booking-form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            Swal.fire({
                title: 'Заявка отправлена!',
                text: 'Спасибо! Мы перезвоним вам в ближайшее время.',
                icon: 'success',
                confirmButtonColor: '#ff5722',
                background: '#1a1a1a',
                color: '#ffffff'
            });

            form.reset();
        });
    }
});
