(function ($) {

  'use strict';

  $('.site-menu-toggle').click(function () {
    var $this = $(this);
    if ($('body').hasClass('menu-open')) {
      $this.removeClass('open');
      $('.js-site-navbar').fadeOut(400);
      $('body').removeClass('menu-open');
    } else {
      $this.addClass('open');
      $('.js-site-navbar').fadeIn(400);
      $('body').addClass('menu-open');
    }
  });


  $('nav .dropdown').hover(function () {
    var $this = $(this);
    $this.addClass('show');
    $this.find('> a').attr('aria-expanded', true);
    $this.find('.dropdown-menu').addClass('show');
  }, function () {
    var $this = $(this);
    $this.removeClass('show');
    $this.find('> a').attr('aria-expanded', false);
    $this.find('.dropdown-menu').removeClass('show');
  });



  $('#dropdown04').on('show.bs.dropdown', function () {
    console.log('show');
  });

  // aos
  AOS.init({
    duration: 1000
  });

  // home slider
  $('.home-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 1,
    autoheight: true,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });

  // owl carousel
  var majorCarousel = $('.js-carousel-1');
  majorCarousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: true,
        loop: false
      }
    }
  });

  // owl carousel
  var major2Carousel = $('.js-carousel-2');
  major2Carousel.owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    // animateOut: 'fadeOut',
    // animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    autoHeight: true,
    items: 3,
    navText: ["<span class='ion-chevron-left'></span>", "<span class='ion-chevron-right'></span>"],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        dots: true,
        nav: true,
        loop: false
      }
    }
  });

  var siteStellar = function () {
    $(window).stellar({
      responsive: false,
      parallaxBackgrounds: true,
      parallaxElements: true,
      horizontalScrolling: false,
      hideDistantElements: false,
      scrollProperty: 'scroll'
    });
  }
  siteStellar();

  var smoothScroll = function () {
    var $root = $('html, body');

    $('a.smoothscroll[href^="#"]').click(function () {
      $root.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 500);
      return false;
    });
  }
  smoothScroll();

  var dateAndTime = function () {
    $('#m_date').datepicker({
      'format': 'm/d/yyyy',
      'autoclose': true
    });
    $('#checkin_date, #checkout_date').datepicker({
      'format': 'd MM, yyyy',
      'autoclose': true
    });
    $('#m_time').timepicker();
  };
  dateAndTime();


  var windowScroll = function () {

    $(window).scroll(function () {
      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-site-header').addClass('scrolled');
      } else {
        $('.js-site-header').removeClass('scrolled');
      }

    });

  };
  windowScroll();


  var goToTop = function () {

    $('.js-gotop').on('click', function (event) {

      event.preventDefault();

      $('html, body').animate({
        scrollTop: $('html').offset().top
      }, 500, 'easeInOutExpo');

      return false;
    });

    $(window).scroll(function () {

      var $win = $(window);
      if ($win.scrollTop() > 200) {
        $('.js-top').addClass('active');
      } else {
        $('.js-top').removeClass('active');
      }

    });

  };

  //Parte desenvolvida manualmente para o projeto final
  var quarto1Disponivel = true;
  var quarto2Disponivel = true;
  var quarto3Disponivel = true;
  var reservas = [];

  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();
    const nome = document.querySelector("#name").value;
    const telefone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;
    const checkin = document.querySelector("#checkin_date").value;
    const checkout = document.querySelector("#checkout_date").value;
    const adultos = document.querySelector("#adults").value;
    const criancas = document.querySelector("#children").value;
    const quarto = document.querySelector("#quarto").value;

    console.log("Nome:", nome);
    console.log("Telefone:", telefone);
    console.log("Email:", email);
    console.log("Check In:", checkin);
    console.log("Check Out:", checkout);
    console.log("Adultos:", adultos);
    console.log("Crianças:", criancas);
    console.log("Quarto:", quarto);

    quartoReservado = quarto;

    if (quarto == 1) {
      if (!quarto1Disponivel) {
        window.alert("O quarto 1 já está reservado.");
        return;
      }
      quarto1Disponivel = false;
      var tipoquarto = "Solteiro";
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);

      const timeDiff = Math.abs(checkoutDate.getTime() - checkinDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const totalCost = diffDays * 90;

      reservas.push({
        nome: nome,
        telefone: telefone,
        email: email,
        checkin: checkin,
        checkout: checkout,
        adultos: adultos,
        criancas: criancas,
        quarto: quarto,
        totalCost: totalCost
      });

      console.log("Tipo de quarto: ", tipoquarto);
      window.alert(`Tipo de quarto: ${tipoquarto}`);
      console.log(`Custo total: ${totalCost}€.`);
      window.alert(`Custo total: ${totalCost}€`)
      window.alert("Reserva Confirmada!");
    }
    else if (quarto == 2) {
      if (!quarto2Disponivel) {
        window.alert("O quarto 2 já está reservado.");
        return;
      }
      quarto2Disponivel = false;
      var tipoquarto = "Família";
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);

      const timeDiff = Math.abs(checkoutDate.getTime() - checkinDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const totalCost = diffDays * 120;

      reservas.push({
        nome: nome,
        telefone: telefone,
        email: email,
        checkin: checkin,
        checkout: checkout,
        adultos: adultos,
        criancas: criancas,
        quarto: quarto,
        totalCost: totalCost
      });

      console.log("Tipo de quarto: ", tipoquarto);
      window.alert(`Tipo de quarto: ${tipoquarto}`);
      console.log(`Custo total: ${totalCost}€.`);
      window.alert(`Custo total: ${totalCost}`);
      window.alert("Reserva Confirmada!");
    }
    else if (quarto == 3) {
      if (!quarto3Disponivel) {
        window.alert("O quarto 3 já está reservado.")
        return;
      }
      quarto3Disponivel = false;
      var tipoquarto = "Presidencial";
      const checkinDate = new Date(checkin);
      const checkoutDate = new Date(checkout);

      const timeDiff = Math.abs(checkoutDate.getTime() - checkinDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

      const totalCost = diffDays * 250;

      reservas.push({
        nome: nome,
        telefone: telefone,
        email: email,
        checkin: checkin,
        checkout: checkout,
        adultos: adultos,
        criancas: criancas,
        quarto: quarto,
        totalCost: totalCost
      });

      console.log("Tipo de quarto: ", tipoquarto);
      window.alert(`Tipo de quarto: ${tipoquarto}`);
      console.log(`Custo total: ${totalCost}€.`);
      window.alert(`Custo total: ${totalCost}`);
      window.alert("Reserva Confirmada!");
    }
    else {
      console.log("Quarto incorreto!");
    }

    var totalFaturadoMes = {};
    var totalFaturadoAno = {};
    var diasReservadosMes = {};
    var diasReservadosAno = {};

    reservas.forEach(function (reserva) {
      const checkinDate = new Date(reserva.checkin);
      const checkoutDate = new Date(reserva.checkout);

      const mesCheckin = checkinDate.getMonth();
      const anoCheckin = checkinDate.getFullYear();

      const mesCheckout = checkoutDate.getMonth();
      const anoCheckout = checkoutDate.getFullYear();

      const diffTime = Math.abs(checkoutDate - checkinDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      if (!diasReservadosMes[mesCheckin]) {
        diasReservadosMes[mesCheckin] = 0;
      }
      diasReservadosMes[mesCheckin] += diffDays;

      if (!diasReservadosAno[anoCheckin]) {
        diasReservadosAno[anoCheckin] = 0;
      }
      diasReservadosAno[anoCheckin] += diffDays;

      if (mesCheckin !== mesCheckout) {
        if (!diasReservadosMes[mesCheckout]) {
          diasReservadosMes[mesCheckout] = 0;
        }
        diasReservadosMes[mesCheckout] += diffDays;
      }

      if (anoCheckin !== anoCheckout) {
        if (!diasReservadosAno[anoCheckout]) {
          diasReservadosAno[anoCheckout] = 0;
        }
        diasReservadosAno[anoCheckout] += diffDays;
      }

      if (!totalFaturadoMes[mesCheckin]) {
        totalFaturadoMes[mesCheckin] = 0;
      }
      totalFaturadoMes[mesCheckin] += reserva.totalCost;

      if (!totalFaturadoAno[anoCheckin]) {
        totalFaturadoAno[anoCheckin] = 0;
      }
      totalFaturadoAno[anoCheckin] += reserva.totalCost;

      if (mesCheckin !== mesCheckout) {
        if (!totalFaturadoMes[mesCheckout]) {
          totalFaturadoMes[mesCheckout] = 0;
        }
        totalFaturadoMes[mesCheckout] += reserva.totalCost;
      }

      if (anoCheckin !== anoCheckout) {
        if (!totalFaturadoAno[anoCheckout]) {
          totalFaturadoAno[anoCheckout] = 0;
        }
        totalFaturadoAno[anoCheckout] += reserva.totalCost;
      }
    });

    console.log("Total faturado por mês:", totalFaturadoMes);
    console.log("Total faturado por ano: ", totalFaturadoAno);
    console.log("Total de dias reservados por mês: ", diasReservadosMes);
    console.log("Total de dias reservados por ano: ", diasReservadosAno);


  });

  var quartoReservado = 0;

  document.querySelector("#btnAnular").addEventListener("click", function (event) {
    quartoReservado = parseInt(window.prompt("Qual o quarto que deseja anular a reserva: "));
    if (quartoReservado == 1) {
      if (quarto1Disponivel) {
        window.alert("Este quarto já está disponível.");
        return;
      }
      quarto1Disponivel = true;
      window.alert("Reserva cancelada com sucesso!");
    } else if (quartoReservado == 2) {
      if (quarto2Disponivel) {
        window.alert("Este quarto já está disponível.");
        return;
      }
      quarto2Disponivel = true;
      window.alert("Reserva cancelada com sucesso!");
    } else if (quartoReservado == 3) {
      if (quarto3Disponivel) {
        window.alert("Este quarto já está disponível.");
        return;
      }
      quarto3Disponivel = true;
      window.alert("Reserva cancelada com sucesso!");
    } else {
      window.alert("Quarto inválido.");
    }

  });

  var btn = $('#button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

})(jQuery);