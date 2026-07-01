//  로그인 예시
const continueBtn = document.querySelector("#continueBtn");

if (continueBtn) {
    continueBtn.addEventListener("click", () => {
        // 로그인 검증

        // 성공하면
        location.href = "myhome.html";
    });
}
