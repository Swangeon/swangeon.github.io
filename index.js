$(window).load(() => {
  windowLoaded();
});

const windowLoaded = () => {
  $('.preloader')
    .delay(400)
    .fadeOut('slow');

  const popUpElem = $('.popUp');
  const mainElem = $('main');
  let popUpState = false;
  const closePopUpBtn = $('#cancelBtn');

  const projectElem = $('.project-item');
  // Hide popUp element until a 'project' is clicked.
  $(popUpElem).hide(1);

  mainElem.on('click', e => {
    if ($(e.target).closest('.project-item').length > 0) {
      if (popUpState === false) {
        popUpState = true;
        if ($(window).width() >= 768) {
          $('.projects').css('filter', 'blur(7px)');
        } else {
          $('.projects').css('display', 'none');
          $('footer').css('display', 'none');
          $('.intro').css('display', 'none');
          $('.contact').css('display', 'none');
        }

        if ($(window).width() > 768) {
          $('body').css('overflow', 'hidden');
        }

        $(popUpElem).show(400);

        const projectHeading = $(e.target)
          .closest('.project-figure')
          .children('figcaption')
          .children('h2')
          .text();

        const projectDesc = $(e.target)
          .closest('.project-figure')
          .children('figcaption')
          .children('.popUpdesc')
          .text();

        const projectImg = $(e.target)
          .closest('.project-figure')
          .children('img')
          .attr('src');

        const projetGithubRepo = $(e.target)
          .closest('.project-figure')
          .children('figcaption')
          .children('#githubRepo')
          .attr('href');

        const projectLivePreview = $(e.target)
          .closest('.project-figure')
          .children('figcaption')
          .children('#livePreview')
          .attr('href');

        $(popUpElem)
          .children('#popUpText')
          .children('p')
          .text(`${projectDesc}`);

        $(popUpElem)
          .children('#popUpText')
          .children('h1')
          .text(`${projectHeading}`);

        $(popUpElem)
          .children('.popUpImg')
          .css('backgroundImage', `url(${projectImg})`);

        $(popUpElem)
          .children('#popUpText')
          .children('div')
          .children('#githubLink')
          .attr('href', `${projetGithubRepo}`);

        $(popUpElem)
          .children('#popUpText')
          .children('div')
          .children('#previewLink')
          .attr('href', `${projectLivePreview}`);
      }
    }
  });

  $(closePopUpBtn).on('click', () => {
    if (popUpState === true) {
      $(popUpElem).fadeOut(500);
    }

    if ($(window).width() >= 768) {
      $('.projects').css('filter', 'blur(0px)');
      $('body').css('overflow', 'scroll');
    } else {
      $('.projects').css('display', 'block');
      $('footer').css('display', 'block');
      $('.intro').css('display', 'block');
      $('.contact').css('display', 'block');
    }
    popUpState = false;
  });
};
