// activity variables
const activityItem = document.querySelectorAll("[data-activity-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");
const modalTitle = document.querySelector("[data-modal-title]");

// modal variable
// modal toggle function
const activityModalFunccc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < activityItem.length; i++) {
  activityItem[i].addEventListener("click", function () {
    modalTitle.innerHTML = "";
    var x = this.parentElement.parentElement.parentElement.parentElement
      .querySelector("[data-activity-title]")
      .querySelectorAll("img");
    console.log(x);
    var y =
      this.parentElement.parentElement.parentElement.parentElement.querySelector(
        "[data-activity-titles]"
      ).innerHTML;

    // var y = this.querySelector("[data-activity-title]").querySelectorAll("video");

    modalTitle.innerHTML += `      
            <div id="portfolio-details" class="portfolio-details">
      <div class="container">

        <div class="row gy-4">

          <div class="col-lg-6">
            <div class="portfolio-details-slider swiper">
              <div class="swiper-wrapper align-items-center">

                <div class="swiper-slide">
                  <img src="${x[0].src}" alt="">
                </div>

                <div class="swiper-slide">
                <img src="${x[1].src}" alt="">

                </div>

             <!--   <div class="swiper-slide">
                  <video controls muted>
                 <source src="${x[2].src}" >
                 </video>
              </div> -->

              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>

          <div class="col-lg-6">
${y}

          </div>

        </div>

      </div>
    </div>
            
       `;
    /**
     * Testimonials slider
     */
    new Swiper(".portfolio-details-slider", {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
    // const myCustomSlider = document.querySelectorAll('.mySwiper');
    // const pagination = document.querySelectorAll('.swiper-pagination');
    // const next = document.querySelectorAll('.swiper-button-next');
    // const prev = document.querySelectorAll('.swiper-button-prev');

    // for (i = 0; i < myCustomSlider.length; i++) {

    //     myCustomSlider[i].classList.add('mySwiper-' + i);
    //     pagination[i].classList.add('swiper-pagination-' + i);
    //     next[i].classList.add('swiper-button-next-' + i);
    //     prev[i].classList.add('swiper-button-prev-' + i);
    //     new Swiper('.mySwiper-' + i, {
    //         zoom: false,
    //         navigation: {
    //             nextEl: `.swiper-button-next-${i}`,
    //             prevEl: `.swiper-button-prev-${i}`,
    //         },
    //         pagination: {
    //             el: `.swiper-pagination-${i}`,
    //             clickable: true,
    //         },
    //     });
    // }
    activityModalFunccc();
    // imgsPrevent();
  });
}
modalCloseBtn.addEventListener("click", activityModalFunccc);
overlay.addEventListener("click", activityModalFunccc);

///////////send email//////////////
