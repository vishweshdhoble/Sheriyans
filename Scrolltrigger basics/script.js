gsap.from("#pagee1 .circle",{
    scale:0,
    duration:2,
    delay:1,
    rotate:720
})

gsap.from("#pagee2 .circle",{
    scale:0,
    duration:2,
    delay:1,
    rotate:720,
    scrollTrigger:{
        trigger:"#pagee2 .circle",
        scroller:"body",
        start:"top 60%",
        end:"top 30%",
        scrub:2
    }
})

gsap.to("#page2 img",{
    width:"80%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true
    }
});

gsap.to("#page3 h1",{
    transform:"translateX(-125%)",
    scrollTrigger : {
        trigger:"#page3",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})
