document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.getElementById('closeBtn');
    const accountBtn = document.getElementById('accountBtn');

    
    function openModal(title, htmlContent) {
        if (!modal) return;
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.display = "block";
    }

   
    if (accountBtn) {
        accountBtn.addEventListener('click', function (e) {
            e.preventDefault();
            openModal("Account Login", 
                <form class="modal-form" onsubmit="event.preventDefault(); alert('Авторизация прошла успешно!');">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit" class="modal-submit-btn">Sign In</button>
                </form>
            );
        });
    }

    
    document.querySelectorAll('.read-more, .footer-nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const cleanText = this.innerText.replace('→', '').replace('↓', '').trim();
            openModal(cleanText, <p style="line-height: 1.6; color: #d0d0d0; margin-top: 15px;">Вы открыли раздел: <b>${cleanText}</b>. Здесь будет подробная информация.</p>);
        });
    });

   
    document.querySelectorAll('.nav a, .scroll-down').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId.startsWith('#') && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    
    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = "none";
        };
    }

    
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});