document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("downloadBtn");
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const html = document.documentElement.outerHTML;
    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "AminaNoor_CV.html";
    document.body.appendChild(a);
    a.click();
    a.remove();

    URL.revokeObjectURL(url);
  });
});
