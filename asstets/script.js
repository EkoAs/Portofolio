// sidebar toggle variables
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

// page navigation variables
const navItemLinks = document.querySelectorAll('.nav li a');
const pages = document.querySelectorAll('.page');


// variables for filtering
// const filterBtn = document.querySelectorAll('.filter-item');
// const itemCategory = document.querySelectorAll('.item-category');
// =================================atas ori
// const filterBtn = document.querySelectorAll('.filter-item');
// const portfolioItems = document.querySelectorAll('.portfolio-item');

// // toggling sidebar in mobile
// menuToggler.addEventListener('click', function(){
//   sideBar.classList.toggle('active');
// });


// page navigation functionality

for (let i = 0; i < navItemLinks.length; i++) {
  // added onclick event in nav links
  navItemLinks[i].addEventListener('click', function(){

    // collected nav links innertext
    const itemLinkText = this.textContent.toLowerCase();

    // defined page and add active class 
    for (let i = 0; i < pages.length; i++) {

      // defining page condition
      if (pages[i].classList.contains(itemLinkText)) {
        // add active class on current page
        pages[i].classList.add('active');
        // add active class on clicked nav link
        navItemLinks[i].classList.add('active');
      } else {
        // remove active class from other pages
        pages[i].classList.remove('active');
        // remove active class from other nav links
        navItemLinks[i].classList.remove('active');
      }

    }

  });
}

// filtering portfolio items based on category================================================================

// Ambil semua tombol filter dan semua unit portofolio
const filterBtn = document.querySelectorAll('.filter-item');
const portfolioItems = document.querySelectorAll('.portfolio-item');

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener('click', function() {

    //Reset tombolhapus class active dari semua tombol, tambah ke yang diklik
    filterBtn.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');

    //Ambil nilai filter dari tombol yang diklik (contoh: 'coding')
    const selectedFilter = this.getAttribute('data-filter').toLowerCase();

    // falankan pembersihan/filter pada setiap kartu
    portfolioItems.forEach(item => {
      // Ambil kategori dari data-filter milik kartu
      const itemCategory = item.getAttribute('data-filter').toLowerCase();

      // LOGIKA: Jika 'all' diklik ATAU kategori kartu cocok dengan tombol
      if (selectedFilter === 'all' || itemCategory === selectedFilter) {
        item.style.display = "block"; // Munculkan secara fisik
        // Tambahkan delay sedikit agar animasi CSS transition (opacity) bekerja
        setTimeout(() => {
          item.classList.add('active'); 
        }, 10);
      } else {
        item.classList.remove('active');
        item.style.display = "none"; // Hilangkan total dari lwyar
      }
    });
  });
}


// ========================REALOD PERTAMA KALI=========================


document.addEventListener('DOMContentLoaded', () => {
    
    const activeBtn = document.querySelector('.filter-item.active');
    if (activeBtn) {
        activeBtn.click(); //simulasi ketik langsung tombol yang sudah aktif untuk memicu filter saat pertama kali halaman dimuat
    }
});



// // added eventListener in filter buttons
// for (let i = 0; i < filterBtn.length; i++) {
//   filterBtn[i].addEventListener('click', function(){

//     // remove all active class from filter button
//     for (let i = 0; i < filterBtn.length; i++) {
//       filterBtn[i].classList.remove('active');
//     }
//     // added active class on filter button clicked
//     this.classList.add('active');

//     // show item, based on filter button click
//     for (let i = 0; i < itemCategory.length; i++) {
//       const itemCategoryText = itemCategory[i].textContent;
//       console.log(itemCategoryText);
//       switch (this.textContent) {
//         case itemCategoryText:
//           itemCategory[i].parentElement.classList.add('active');
//           break;
//         case 'All':
//           itemCategory[i].parentElement.classList.add('active');
//           break;
//         default:
//           itemCategory[i].parentElement.classList.remove('active');
//       }
//     }
//   });
// }