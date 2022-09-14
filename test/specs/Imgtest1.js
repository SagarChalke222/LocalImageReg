describe('Visual regression tests', async()=> 
{
    beforeEach(async()=>{

        await browser.url('https://www.i.europe.food.saveris.net/authenticate/login')
        //await browser.maximizeWindow()
        await browser.pause(4000)
    });

    it('Should be able to do visual regression on homepage',async()=>
    {
        await browser.pause(4000);
        await (expect(await browser.checkScreen('Testo Saveris homepage',{}))).toEqual(0);
        //await browser.saveFullPageScreen('Full page screenshot',{});

    })
})