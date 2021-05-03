var rmBtns = document.querySelectorAll("[data-rm]");
rmBtns.forEach((rmBtn) => {
    rmBtn.addEventListener("click", function () {
        // remove id
        console.log("id:"+this.dataset.rm);
        // show confirm alert
        if (window.confirm('「'+this.closest("tr").getElementsByTagName("td")[0].innerText+'」を削除しますか？')) {
            console.log("remove");
            location.reload();
        }
    });
});