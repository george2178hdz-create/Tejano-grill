const tabs = document.querySelectorAll(".category-tabs button");
const items = document.querySelectorAll(".menu-item");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    const filter = tab.dataset.filter;
    items.forEach(item => {
      item.classList.toggle("hidden", filter !== "all" && item.dataset.cat !== filter);
    });
  });
});

// Replace the placeholder with Tejano Grill's actual SpotOn ordering URL.
const SPOTON_ORDER_URL = "YOUR_SPOTON_ORDER_URL";
document.querySelectorAll('a[href="YOUR_SPOTON_ORDER_URL"]').forEach(link => {
  link.href = SPOTON_ORDER_URL;
});
