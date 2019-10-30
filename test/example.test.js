// IMPORT MODULES under test here:
// import example from '../src/example.js';
import renderImage from '../src/render-image.js';

const test = QUnit.test;

test('time to test a function', function(assert) {
    //Arrange
    // Set up your parameters and expectations

    const card = {
        url: 'https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg',
        title: 'Baby Rhino',
        description: 'This is actually a figurine but it looks kinda real',
        keyword: 'rhino',
        horns: 2
    };
    
    const markup = `
    <div class='card'>
        <div class='animal-image'><img src="https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg" alt="Baby Rhino" title="Baby Rhino"></div>
        <div class='animal-title'>Baby Rhino</div>
        <div class='horns'>2 Horn(s)</div>
        <div class='animal-description'><p>This is actually a figurine but it looks kinda real</p></div>
    </div>`;
        
    
    //Act 
    // Call the function you're testing and set the result to a const
    let html = renderImage(card);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(html, markup);
});
