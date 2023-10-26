export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll("[data-dropdown]");

  dropdownMenus.forEach((menu) => {
    ["touchstart", "click"].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick);
    });
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.toggle("active");
    outsideClick(this, () => {
      this.classList.remove("active");
    });
  }

  function outsideClick(element, callback) {
    const html = document.documentElement;
    const outside = 'data-outside';

    if(!element.hasAttribute(outside)){
        html.addEventListener("click", handleOutSideClick);
        element.setAttribute(outside, '');
    }
    
    function handleOutSideClick(event) {
      if (!element.contains(event.target)) {
        element.removeAttribute(outside);
        html.removeEventListener('click', handleOutsideClick)
        callback();
      }
    }
  }
}
