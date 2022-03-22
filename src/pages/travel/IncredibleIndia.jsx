import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Topbar from '../../components/topbar/Topbar';
import './incredibleIndia.css'

const IncredibleIndia = () => {
    return (
        <div>
            <Topbar />
            <Navbar />
            <section class="banner" id="top">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">
                    <div class="left-banner-content">
                        <div class="text-content">
                            <h6>There you go</h6>
                            <div class="line-dec"></div>
                            <h1>INDIA</h1>
                            <div class="white-border-button">
                                <a href="https://en.wikipedia.org/wiki/Incredible_India" class="scroll-link"
                                    >Discover More</a> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="right-banner-content">
                        
                        <h2>INCRERDIBLE INDIA</h2>

                        <div class="line-dec"></div>
                        <p>Incredible India (styled as Incredıble!ndıa) is the name of an international tourism campaign
                            maintained by the Government of India since 2002, to promote tourism in India. The
                            "Incredible India" title was officially branded and promoted since 2002.The exclamation mark
                            forms the ‘I” of India. The exclamation used creatively across several visuals compliments
                            the concept behind the word “Incredible”.

                            “One of the oldest civilisations in the world, India is a mosaic of multicultural
                            experiences. With a rich heritage and myriad attractions, the country is among the most
                            popular tourist destinations in the world. It covers an area of 32, 87,263 sq. km, extending
                            from the snow-covered Himalayan heights to the tropical rain forests of the south. As the
                            7th largest country in the world, India stands apart from the rest of Asia, marked off as it
                            is by mountains and the sea, which give the country a distinct geographical entity. "
                        </p>
                         {/* <ul class="social-icons">
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                            <li><a href="#"><i class="fa fa-rss"></i></a></li>
                            <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                        </ul>  */}
                    </div>
                </div>
            </div>
        </div>
    </section>


    {/* <!-- <section class="best-offer" id=best-offer-section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="best-offer-left-content">
                        <div class="icon"><img src="img/best-offer-icon.png" alt=""></div>
                        <h4>Best Offer For You</h4>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="best-offer-right-content">
                        <div class="row">
                            <div class="col-md-6 col-sm-12">
                                <h2>Modern Web Design<br><em>Avalon Theme</em></h2>
                                <p>Avalon Theme is a full-width modern HTML template for everyone. Please tell your
                                    friends about <a href="https://fb.com/templatemo" target="_parent">TemplateMo</a>.
                                    Thank you. You are allowed <strong>to use this template</strong> for your business.
                                    <br><br>You have <strong>no permission</strong> to re-distribute this template as a
                                    downloadable ZIP file on any website. If you see this on any website, that means an
                                    illegal copy. Please contact us if you have any question.
                                </p>
                                <ul>
                                    <li>+ Aenean eget ex faucibus, tempor nibh vel.</li>
                                    <li>+ Bibendum tortor. Suspendisse a diam viverra.</li>
                                    <li>+ Finibus ipsum et, imperdiet felis.</li>
                                    <li>+ Donec laoreet efficitur ultrices sit amet enim.</li>
                                </ul>
                                <div class="pink-button">
                                    <a href="#" class="scroll-link" data-id="events-section">Discover More</a>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <img src="img/best-offer-image.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  */}

    {/* <section class="events" id="events-section">
        <div class="content-wrapper">
            <div class="inner-container container-fluid">
                <div class="row">
                    <div class="col-md-12 col-sm-12">
                        <div class="section-heading">
                            <div class="filter-categories">
                                <ul class="project-filter">
                                    <li class="filter" data-filter="all"><span>Show All</span></li>
                                    <li class="filter" data-filter="design"><span>Design Meeting</span></li>
                                    <li class="filter" data-filter="start"><span>App Start Up</span></li>
                                    <li class="filter" data-filter="web"><span>Web Conferences</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-10 col-sm-12 col-md-offset-1">
                        <div class="projects-holder">
                            <div class="event-list">
                                <ul>
                                    <li class="project-item first-child mix web">
                                        <ul class="event-item web">
                                            <li>
                                                <div class="date">
                                                    <span>12<br>May</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>four loko franzen</h4>
                                                <div class="web">
                                                    <span>Web Conferences</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="time">
                                                    <span>8:00 AM - 11:00 AM<br>Saturday</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="white-button">
                                                    <a href="#">I am interested</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="project-item second-child mix design">
                                        <ul class="event-item design">
                                            <li>
                                                <div class="date">
                                                    <span>24<br>April</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>Drink vinegar coloring</h4>
                                                <div class="design">
                                                    <span>Design Meeting</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="time">
                                                    <span>03:00 PM - 07:00 PM<br>Tuesday</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="white-button">
                                                    <a href="#">I am interested</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="project-item third-child mix start design">
                                        <ul class="event-item start">
                                            <li>
                                                <div class="date">
                                                    <span>30<br>Mar</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>core hammock stiller</h4>
                                                <div class="app">
                                                    <span>App Start Up, Design Meeting</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="time">
                                                    <span>03:30 PM - 09:30 PM<br>Friday</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="white-button">
                                                    <a href="#">I am interested</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="project-item fourth-child mix web">
                                        <ul class="event-item web">
                                            <li>
                                                <div class="date">
                                                    <span>22<br>Mar</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>palo santo art party</h4>
                                                <div class="web">
                                                    <span>Web Conferences</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="time">
                                                    <span>10:00 AM - 05:00 PM<br>Thursday</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="white-button">
                                                    <a href="#">I am interested</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="project-item fivth-child mix start web">
                                        <ul class="event-item start">
                                            <li>
                                                <div class="date">
                                                    <span>16<br>Mar</span>
                                                </div>
                                            </li>
                                            <li>
                                                <h4>Paleo craft beer copper</h4>
                                                <div class="app">
                                                    <span>App Start Up, Web Conferences</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="time">
                                                    <span>11:30 AM - 04:30 PM<br>Friday</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="white-button">
                                                    <a href="#">I am interested</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  */}
    

    {/* <section class="testimonial" id="testimonial-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-4">
                    <div class="testimonial-image"></div>
                </div>
                <div class="col-md-8">
                    <div id="owl-testimonial" class="owl-carousel owl-theme">
                        <div class="item col-md-12">
                            <img src="img/author_01.png" alt="Steven Walker">
                            <span>Web Designer</span>
                            <h4>Steven Walker</h4>
                            <br>
                            <p><em>"</em>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cura bitur et sem
                                blandit, rhoncus ante, varius libero. Cras elemen tum tincidunt ullamcorper sed vehic
                                ula dictum.<em>"</em></p>
                        </div>
                        <div class="item col-md-12">
                            <img src="img/author_02.png" alt="Johnny Smith">
                            <span>Web Developer</span>
                            <h4>Johnny Smith</h4>
                            <br>
                            <p><em>"</em>Morbi elit est, pharetra ac enim a, faucibus dignissim augue. Quisque erat
                                erat, placerat non pulvinar eget, sodales eget ex. Cras pulvinar purus et rutrum
                                faucibus.<em>"</em></p>
                        </div>
                        <div class="item col-md-12">
                            <img src="img/author_03.png" alt="William Smoker">
                            <span>Managing Director</span>
                            <h4>William Smoker</h4>
                            <br>
                            <p><em>"</em>Praesent luctus lacinia erat, quis lacinia ipsum varius a. Nullam a velit
                                mollis, suscipit felis vitae, dictum libero hendrerit nibh quis sodales gravida ornare
                                ultricies viverra.<em>"</em></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>  */}

    <section class="services" id="services-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper first-service">
                            <div class="front1">
                                <div class="icon">

                                </div>
                                <h4>The Taj Mahal, Agra</h4>
                            </div>
                            <div class="back">
                                <p>Perhaps India's most recognizable building, the Taj Mahal is also the world's most
                                    famous testimony to the power of love. Named after Mumtaz Mahal, the favorite wife
                                    of Emperor Shah Jahan, this most beautiful of mausoleums was begun upon her death in
                                    1631 and took 20,000 workmen until 1648 to complete.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper second-service">
                            <div class="front2">
                                <div class="icon">

                                </div>
                                <h4>The Holy City of Varanasi</h4>
                            </div>
                            <div class="back">
                                <p>Dating back to the 8th century BC, Varanasi is one of the oldest still inhabited
                                    cities in the world. A major pilgrimage center for Hindus, this holy city has long
                                    been associated with the mighty Ganges River, one of the faith's most important
                                    religious symbols.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper third-service">
                            <div class="front3">
                                <div class="icon">

                                </div>
                                <h4>The Red Fort, New Delhi</h4>
                            </div>
                            <div class="back">
                                <p>Built by Shah Jahan in 1648 as the seat of Mughal power – a role it maintained until
                                    1857 – the magnificent crescent-shaped Red Fort in New Delhi, named after the
                                    stunning red sandstone used in its construction, covers a vast area of more than two
                                    square kilometers, all of it surrounded by a large moat.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper fourth-service">
                            <div class="front4">
                                <div class="icon">

                                </div>
                                <h4>Mumbai: The Gateway of India</h4>
                            </div>
                            <div class="back">
                                <p>Standing an impressive 26 meters tall and overlooking the Arabian Sea, the iconic
                                    Gateway of India is a must-see when in Mumbai. Built to commemorate the arrival of
                                    King George V and his wife Queen Mary in 1911, this stunning piece of architecture
                                    was opened with much pomp and ceremony in 1924 and was, for a while, the tallest
                                    structure in the city.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- <section class="contact-us" id="contact-section">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8">

                    

                    <form id="contact" action="" method="post">
                        <div class="row">
                            <div class="col-md-4">
                                <fieldset>
                                    <input name="name" type="text" class="form-control" id="name"
                                        placeholder="Your name..." required="">
                                </fieldset>
                            </div>
                            <div class="col-md-4">
                                <fieldset>
                                    <input name="email" type="email" class="form-control" id="email"
                                        placeholder="Your email..." required="">
                                </fieldset>
                            </div>
                            <div class="col-md-4">
                                <fieldset>
                                    <input name="subject" type="text" class="form-control" id="subject"
                                        placeholder="Subject..." required="">
                                </fieldset>
                            </div>
                            <div class="col-md-12">
                                <fieldset>
                                    <textarea name="message" rows="6" class="form-control" id="message"
                                        placeholder="Your message..." required=""></textarea>
                                </fieldset>
                            </div>
                            <div class="col-md-6">
                                <fieldset>
                                    <button type="submit" id="form-submit" class="btn">Send it now</button>
                                </fieldset>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-md-4">
                    <div class="contact-right-content">
                        <div class="icon"><img src="img/map-marker-icon.png" alt=""></div>
                        <h4>You can find us on maps</h4>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

    {/* <footer>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <p>Copyright &copy; 2018 Your Company

                        - <a rel="nofollow" href="https://templatemo.com/tm-513-avalon" target="_parent">Avalon</a>
                        by <a rel="nofollow" href="https://www.html5max.com" target="_parent">HTML5 Max</a></p>
                </div>
            </div>
        </div>
    </footer>  */}

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"></script>')</script>

    <script src="js/vendor/bootstrap.min.js"></script>

    <script src="js/datepicker.js"></script>
    <script src="js/plugins.js"></script>
    <script src="js/main.js"></script>

    {/* <script type="text/javascript">
        $(document).ready(function () {
            // navigation click actions 
            $('.scroll-link').on('click', function (event) {
                event.preventDefault();
                var sectionID = $(this).attr("data-id");
                scrollToID('#' + sectionID, 750);
            });
            // scroll to top action
            $('.scroll-top').on('click', function (event) {
                event.preventDefault();
                $('html, body').animate({ scrollTop: 0 }, 'slow');
            });
            // mobile nav toggle
            $('#nav-toggle').on('click', function (event) {
                event.preventDefault();
                $('#main-nav').toggleClass("open");
            });
        });
        // scroll function
        function scrollToID(id, speed) {
            var offSet = 0;
            var targetOffset = $(id).offset().top - offSet;
            var mainNav = $('#main-nav');
            $('html,body').animate({ scrollTop: targetOffset }, speed);
            if (mainNav.hasClass("open")) {
                mainNav.css("height", "1px").removeClass("in").addClass("collapse");
                mainNav.removeClass("open");
            }
        }
        if (typeof console === "undefined") {
            console = {
                log: function () { }
            };
        }
    </script> */}
        </div>
    );
}

export default IncredibleIndia;