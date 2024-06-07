document.addEventListener('DOMContentLoaded', () => {
    const submenuItems = document.querySelectorAll('#drawer .submenu a');

    submenuItems.forEach(item => {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // 防止默認的鏈接跳轉行為
            const content = this.getAttribute('data-page'); // 使用 this 來獲取當前被點擊的元素

            fetch(`${content}.html`)
                .then(response => response.text()) // 確保將響應轉換為文本
                .then(htmlContent => {
                    const mainContent = document.querySelector('#main-content');
                    if (mainContent) {
                        mainContent.innerHTML = htmlContent;
                        executeScripts(mainContent); // 假設這是一個你自己定義的函數，用來執行新內容中的腳本
                    }
                })
        });
    });
});
