window.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("input");
    const check = {
        letters: false,
        numbers: false,
        count: false,
        special: false,
    };
    const checking = () => {
        check.letters = /[A-Za-z]+/.test(input.value) ? true : false;
        check.numbers = /[0-9]+/.test(input.value) ? true : false;
        check.special = /[!@#$%^&*();':<>,.?/|\\]+/.test(input.value) ? true : false;
        check.count = input.value.length > 8 ? true : false;
        let result = document.querySelector(".result");
        let barLength = Object.values(check).filter((item) => item === true).length;
        switch (barLength) {
            case 0: {
                result.innerHTML = "Parol kiritilmagan";
                break;
            }
            case 1: {
                result.innerHTML = check.count ? "Parol juda zaif" : "Parol uzuligini tekshiring";
                break;
            }
            case 2: {
                result.innerHTML = check.count ? "Parol zaif " : "Parol 8 ta belgidan oshishi lozim";
                break;
            }
            case 3: {
                result.innerHTML = check.count ? "parol bardoshli " : "Parol 8 ta belgidan oshishi lozim";
                break;
            }
            case 4: {
                result.innerHTML = "Parol juda zo'r";
                break;
            }
        }
    };

    // Call the checking function when the input value changes
    const confirm = document.querySelector(".btnok");
    confirm.addEventListener("click", checking);
    document.querySelector('.btncnl').addEventListener('click', () => {
        input.value = "";
    })
});
