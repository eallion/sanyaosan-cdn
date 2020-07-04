var appMaster = {
    headerJs: function() {
        function header() {
            $(window).height();
            $(window).width() > 767
        }
        var header_fix = $(".header");
        var inner_header = $(".inner-inro");
        $(window).scroll(function() {
            $(this).scrollTop() > 1 ? (header_fix.addClass("sticky"), inner_header.css("z-index", "-1")) : (header_fix.removeClass("sticky"), inner_header.css("z-index", "auto"))
        }),
        header(),
        $(window).resize(function() {
            header()
        })
    },
    mobileMenuJs: function() {
        $('.sub-menu >a').on('click',
        function() {
            if ($(window).width() <= 767) {
                $('.sub-menu').removeClass('on');
                $('.sub-menu> ul').slideUp('normal');
                if ($(this).next().next('ul').is(':hidden') == true) {
                    $(this).parent('li').addClass('on');
                    $(this).next().next('ul').slideDown('normal')
                }
            }
        });
        $('.mobile-menu> li >a').on('click',
        function() {
            if ($(window).width() <= 991) {
                $('.mobile-menu> li').removeClass('on');
                $('.mobile-menu> li> ul').slideUp('normal');
                if ($(this).next().next('ul').is(':hidden') == true) {
                    $(this).parent('li').addClass('on');
                    $(this).next().next('ul').slideDown('normal')
                }
            }
        });
    var searchDropdown = $("#searchDropdown");
    var dropdownInput = $('.dropdown-input')
     searchDropdown.on('click', function() {
     	dropdownInput.show(); 
     });
     var closeInput = $(".close-input");
     closeInput.on('click', function() {
     	dropdownInput.hide(); 
     });
	},
    masonryJs: function() {
        var container_masonry = $(".container-masonry");
        container_masonry.imagesLoaded(function() {
            container_masonry.isotope({
                itemSelector: ".nf-item",
                layoutMode: "masonry",
                masonry: {
                    columnWidth: 0,
                    gutter: 0
                }
            })
        });
        var container_filter = $(".container-filter");
        container_filter.on("click", ".categories",
        function() {
            var a = $(this).attr("data-filter");
            container_masonry.isotope({
                filter: a
            })
        });
        container_filter.each(function(e, a) {
            var i = $(a);
            i.on("click", ".categories",
            function() {
                i.find(".active").removeClass("active"),
                $(this).addClass("active")
            })
        });
        var container_grid = $(".container-grid");
        container_grid.imagesLoaded(function() {
            container_grid.isotope({
                itemSelector: ".nf-item",
                layoutMode: "fitRows"
            })
        });
        container_filter.on("click", ".categories",
        function() {
            var e = $(this).attr("data-filter");
            container_grid.isotope({
                filter: e
            })
        })
    },
    fancyboxJs: function() {
        var fLight = $(".fancylight");
        if (fLight.length) {
            fLight.fancybox({
                openEffect: 'elastic',
                closeEffect: 'elastic',
                helpers: {
                    media: {}
                }
            })
        }
    },
    counterJs: function() {
        var counter = $('.counter');
        if (counter.length) {
            $('.counter').appear(function() {
                counter.each(function() {
                    var e = $(this),
                    a = e.attr("data-count");
                    $({
                        countNum: e.text()
                    }).animate({
                        countNum: a
                    },
                    {
                        duration: 8e3,
                        easing: "linear",
                        step: function() {
                            e.text(Math.floor(this.countNum))
                        },
                        complete: function() {
                            e.text(this.countNum)
                        }
                    })
                })
            })
        }
    },
    owlCarouselJs: function() {
        var testimonial_slider = $("#testimonial");
        testimonial_slider.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0 : {
                    items: 1
                },
                600 : {
                    items: 1
                },
                1000 : {
                    items: 1
                }
            },
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]
        });
        var itemCarousel_1 = $(".item1-carousel");
        itemCarousel_1.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0 : {
                    items: 1
                },
                600 : {
                    items: 1
                },
                1000 : {
                    items: 1
                }
            },
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]
        });
        var relatedProject = $("#related-project");
        relatedProject.owlCarousel({
            loop: true,
            nav: true,
            dots: false,
            margin: 30,
            responsive: {
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },
                992 : {
                    items: 2
                },
                1200 : {
                    items: 3
                }
            },
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]
        });
        var testimonial_2 = $('#testimonial-2');
        testimonial_2.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            center: true,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
            responsive: {
                0 : {
                    items: 1
                },
                767 : {
                    items: 1
                },
                992 : {
                    items: 1
                },
                1200 : {
                    items: 1
                }
            }
        });
        var teamCarousel = $('.team-carousel');
        teamCarousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            center: true,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
            responsive: {
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },
                992 : {
                    items: 3
                },
                1200 : {
                    items: 3
                }
            }
        });
        var partenrCarousel = $('.partenr-carousel');
        partenrCarousel.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            center: true,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
            responsive: {
                0 : {
                    items: 2
                },
                767 : {
                    items: 3
                },
                992 : {
                    items: 4
                },
                1200 : {
                    items: 5
                }
            }
        });
        var carouselSlider = $('.carousel-slider');
        carouselSlider.owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            dots: false,
            center: true,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
            responsive: {
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },
                992 : {
                    items: 3
                },
                1200 : {
                    items: 3
                }
            }
        });
        var servicesItems = $('.services-items');
        servicesItems.owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            dots: false,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
            responsive: {
                0 : {
                    items: 1
                },
                767 : {
                    items: 1
                },
                992 : {
                    items: 2
                },
                1200 : {
                    items: 3
                }
            }
        });
        var historyBlock = $('.history-block');
        historyBlock.owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: false,
            navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
            responsive: {
                0 : {
                    items: 1
                },
                767 : {
                    items: 2
                },
                992 : {
                    items: 3
                },
                1200 : {
                    items: 4
                }
            }
        })
    },
    videoJs: function() {
        var videoBg = $(".bg-video");
        if (videoBg.length) {
            videoBg.mediaelementplayer({
                loop: !0,
                enableKeyboard: !1,
                iPadUseNativeControls: !1,
                pauseOtherPlayers: !1,
                iPhoneUseNativeControls: !1,
                AndroidUseNativeControls: !1,
                enableAutosize: !0,
                alwaysShowControls: !1
            })
        }
        $(window).height(function() {
            function e() {
                var e = $(window).innerHeight();
                $(".slider-hero, .full-screen-intro").css("height", e)
            }
            e(),
            $(window).resize(function() {
                e()
            })
        })
    },
    parallaxJs: function() {
        var parallaxs = $(".parallax");
        parallaxs.parallax("50%", 0.02);
        var parallaxs = $("#overlay_block");
        parallaxs.parallax("50%", 0.2)
    },
    preloaderJs: function() {
        var preloader = $("#preloader");
        preloader.delay(500).fadeOut()
    },
    mapJs: function() {
        window.init = function() {
            var map = new AMap.Map('map', {
                resizeEnable: true,
                center: [114.045931, 22.609308],
                zoom: 19,
                lang: "zh_en",
                showIndoorMap: false
            });
            var marker = new AMap.Marker({
                position: map.getCenter(),
                icon: '//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png',
                offset: new AMap.Pixel( - 13, -30)
            });
            marker.setMap(map);
            marker.setLabel({
                offset: new AMap.Pixel(0, 0),
                content: "<div class='info'><strong>伞 耀</strong> @皇嘉商业广场</div>",
                direction: 'top'
            });
            marker.setAnimation('AMAP_ANIMATION_BOUNCE')
        }
    },
    prettyPhoto: function() { (function($) {
            "use strict";
            if ($("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0) {
                $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({
                    hook: 'data-rel',
                    theme: "dark_square",
                    social_tools: false,
                    deeplinking: false
                })
            }
        })(jQuery)
    },
    priceRange: function() {
        if ($(".range").length != 0) {
            $('.range').nstSlider({
                "left_grip_selector": ".leftGrip",
                "right_grip_selector": ".rightGrip",
                "value_bar_selector": ".bar",
                "value_changed_callback": function(cause, leftValue, rightValue) {
                    var $container = $(this).parent();
                    $container.find('.leftLabel').text(leftValue);
                    $container.find('.rightLabel').text(rightValue)
                },
                "highlight": {
                    "grip_class": "gripHighlighted",
                    "panel_selector": ".highlightPanel"
                }
            });
            $('#highlightRangeButton').click(function() {
                var highlightMin = Math.random() * 20,
                highlightMax = highlightMin + Math.random() * 80;
                $('.nstSlider').nstSlider('highlight_range', highlightMin, highlightMax)
            })
        }
    },
    owlCarousel: function() { (function($) {
            "use strict";
            if ($('.owl-carousel').length) {
                $(".owl-carousel").each(function(index) {
                    var effect_mode = $(this).data('effect');
                    var autoplay = $(this).data('autoplay');
                    var loop = $(this).data('loop');
                    var margin = $(this).data('margin');
                    var center = $(this).data('center');
                    var autoplay = $(this).data('autoplay');
                    var autoplayTimeout = $(this).data('autoplayTimeout');
                    var autoplayHoverPause = $(this).data('autoplayHoverPause');
                    var navigation = $(this).data('navigation');
                    var pagination = $(this).data('pagination');
                    var singleitem = $(this).data('singleitem');
                    var items = $(this).data('items');
                    var itemsdesktop = $(this).data('desktop');
                    var itemsdesktopsmall = $(this).data('desktopsmall');
                    var itemstablet = $(this).data('tablet');
                    var itemsmobile = $(this).data('mobile');
                    $(this).owlCarousel({
                        loop: loop,
                        margin: margin,
                        center: center,
                        nav: navigation,
                        dots: pagination,
                        autoplay: autoplay,
                        autoplayTimeout: 2000,
                        autoplayHoverPause: autoplayHoverPause,
                        responsive: {
                            0 : {
                                items: itemsmobile
                            },
                            767 : {
                                items: itemstablet
                            },
                            992 : {
                                items: itemsdesktopsmall
                            },
                            1200 : {
                                items: itemsdesktop
                            }
                        },
                        navText: ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"]
                    })
                })
            }
        })(jQuery)
    },
    productZoom: function() {
        if ($(".single-product").length !== 0) {
            var zoomWindowWidth;
            var zoomWindowHeight;
            zoomWindowWidth: 400;
            zoomWindowHeight: 470;
            zoomType = 'window';
            if ($(window).width() < 992) {
                zoomWindowWidth: 0;
                zoomWindowHeight: 0;
                zoomType = 'inner'
            }
            $("#zoom-product").elevateZoom({
                gallery: 'zoom-product-thumb',
                cursor: 'pointer',
                galleryActiveClass: 'active',
                imageCrossfade: true,
                responsive: true,
                scrollZoom: false,
                zoomWindowWidth: zoomWindowWidth,
                zoomWindowHeight: zoomWindowHeight,
                zoomType: zoomType
            });
            $("#zoom-product").bind("click",
            function(e) {
                var ez = $('#zoom-product').data('elevateZoom');
                $.fancybox(ez.getGalleryList());
                return false
            })
        }
        $('.plus').click(function() {
            $(this).parent('.product-regulator').find('.output').html(function(i, val) {
                return val * 1 + 1
            })
        });
        $('.minus').click(function() {
            var ab = $(this).parent('.product-regulator').find('.output').html();
            if (1 <= ab) {
                $(this).parent('.product-regulator').find('.output').html(function(i, val) {
                    return val * 1 - 1
                })
            }
        })
    }
};
$(document).ready(function() {
    "use strict";
    appMaster.headerJs();
    appMaster.mobileMenuJs();
    appMaster.masonryJs();
    appMaster.fancyboxJs();
    appMaster.counterJs();
    appMaster.owlCarouselJs();
    appMaster.videoJs();
    appMaster.parallaxJs();
    appMaster.preloaderJs();
    appMaster.mapJs();
    appMaster.prettyPhoto();
    appMaster.owlCarousel();
    appMaster.priceRange();
    appMaster.productZoom()
});
var typed = new Typed('.sanyao-typed', {
    strings: ["因为有伞", "因为有<span class='text-color'>伞耀</span>"],
    typeSpeed: 120,
    backSpeed: 75,
    backDelay: 3131,
    startDelay: 618,
    loop: true,
    loopCount: Infinity,
});
$(document).ready(function() {
    $("a#single_image").fancybox();
    $("a#inline").fancybox({
        'hideOnContentClick': true
    })
});
function getIeVersion() {
    var userAgent = navigator.userAgent;
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
    var isEdge = userAgent.indexOf("Edge") > -1 && !isIE;
    var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion > 6) {
            return fIEVersion
        } else {
            return 6
        }
    } else if (isEdge) {
        return 'edge'
    } else if (isIE11) {
        return 11
    } else {
        return - 1
    }
}
function setClipboardText(event, maxCount) {
    var IEVersion = getIeVersion();
    if (IEVersion > -1 && IEVersion != 'edge' && IEVersion < 11) {
        window.event.returnValue = false
    } else {
        event.preventDefault()
    }
    var textData = '';
    var htmlData = '';
    if (IEVersion > -1 && IEVersion != 'edge' && IEVersion < 11) {
        textData = document.selection.createRange().text;
        htmlData = document.selection.createRange().htmlText
    } else {
        var selectRange = window.getSelection().getRangeAt(0);
        textData = selectRange.toString();
        var node = document.createElement('div');
        node.appendChild(selectRange.cloneContents());
        htmlData = node.innerHTML
    }
    if (textData.length >= maxCount) {
        var url = window.location.href;
        var article_type = 'original';
        var copyright = '';
        if (article_type == 'original') {
            copyright = '本文为博主原创文章，转载请附上原文文链接！'
        } else {
            copyright = '本文为转载文章，版权归原作者所有，转载请附上原文链接！'
        }
        var appendText = '\n------------------------------------\n作者：伞耀\n来源：https://www.sanyaosan.com\n原文：' + url + '\n' + copyright + '\n\n';
        textData += appendText;
        htmlData = '<div>' + htmlData + appendText.replace(/\n/g, '<br>'); + '</div>'
    }
    if (IEVersion > -1 && IEVersion != 'edge') {
        return window.clipboardData.setData("text", textData)
    } else {
        event.clipboardData.setData("text/html", htmlData);
        event.clipboardData.setData("text/plain", textData)
    }
}
document.body.oncopy = function(e) {
    setClipboardText(e, 120)
}