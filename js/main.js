jQuery(document).ready(function(){
    // toggle menu bar
    jQuery('.mobile-menu-icon i').click(function(){
        jQuery(this).toggleClass('fa-solid, fa-xmark');
        jQuery('.toggle-menu').slideToggle()
    })

    $('.demo').pwstabs();

    // footer year
    const date = new Date();
    const year = date.getFullYear();
    jQuery('#year').text(year)


})