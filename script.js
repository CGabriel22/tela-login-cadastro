const sign_in_btn = $('#sign-in-btn')
const sign_up_btn = $('#sign-up-btn')
const container = $('.container')

sign_up_btn.click(()=>{
    container.addClass('sign-up-mode')
})

sign_in_btn.click(()=>{
    container.removeClass('sign-up-mode')
})