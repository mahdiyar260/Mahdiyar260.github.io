// گرفتن المنت‌ها
const accordions = document.querySelectorAll(".accordion");
const msg = document.getElementById("message");


// =======================
// تایپ شدن متن
// =======================
function typeText(el, text, interval = 50) {
    if (!el) return;

    el.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            el.innerHTML += text[i++];
            setTimeout(typing, interval);
        }
    }

    typing();
}

setTimeout(() => {
    typeText(
        msg,
        "Hi there! Welcome to my personal resume page."
    );
}, 4500);



// =======================
// ظاهر شدن ترتیبی باکس‌ها
// =======================
setTimeout(() => {

    accordions.forEach((acc, index) => {
        setTimeout(() => {
            acc.classList.add("show");
        }, index * 500);
    });

}, 4500); 


// =======================
// باز و بسته شدن آکاردئون
// =======================
accordions.forEach(acc => {
    acc.addEventListener("click", function () {

        const panel = this.nextElementSibling;
        const isOpen = panel.style.maxHeight;

        // بستن همه آکاردئون‌ها
        accordions.forEach(otherAcc => {
            const otherPanel = otherAcc.nextElementSibling;
            otherAcc.classList.remove("active");
            otherPanel.style.maxHeight = null;
            otherPanel.style.paddingTop = "0";
            otherPanel.style.paddingBottom = "0";
        });

        // اگر قبلاً باز نبود → بازش کن
        if (!isOpen) {
            this.classList.add("active");
            panel.style.maxHeight = panel.scrollHeight + "px";
            panel.style.paddingTop = "15px";
            panel.style.paddingBottom = "15px";
        }

    });
});
