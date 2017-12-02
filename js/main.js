var quotes = {

    1: '"Content people may not HAVE the best of everything, but they MAKE the best of everything." <br/> - Smart Money Smart Kids',

    2: '"A heart filled with gratitude leaves no room for discontentment." <br/> - Smart Money Smart Kids',

    3: '"Stay committed to your decisions, but stay flexible in your approach." <br/> - Tony Robbins',

    4: '"Quality questions create a quality life. Successful people ask better questions, and as a result, they get better answers." ,br/> - Tony Robbins',

    5: '"People are not lazy. They simply have impotent goals - that is, goals that do not inspire them." <br/> - Tony Robbins',

    6: '"You see, in life, lots of people know what to do, but few people actually do what they know. Knowing is not enough! You must take action." <br/> - Tony Robbins',

    7: '“Success is doing what you want to do, when you want, where you want, with whom you want, as much as you want.” <br/> – Tony Robbins',

    8: '“When you are grateful, fear disappears and abundance appears.” <br/> – Tony Robbins',

    9: '“A real decision is measured by the fact that you’ve taken a new action. If there’s no action, you haven’t truly decided.” <br/> – Tony Robbins',

    10: '“Most people fail in life because they major in minor things.” <br/> – Tony Robbins',

    11: '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel." <br/> - Maya Angelou',

    12: '"Nothing will work, unless you do." <br/> - Maya Angelou',

    13: '"Never make someone a priority when all you are to them is an option." - <br/> Maya Angelou',

    14: '"Passion is energy. Feel the power that comes from focusing on what excites you." <br/> - Oprah Winfrey',

    15: '"Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure." <br/> - Oprah Winfrey',

    16: '"So go ahead. Fall down. The world looks different from the ground." <br/> - Oprah Winfrey',

    17: '"When it feel like living\'s harder than dyin\' <br/> For me givin\' up\'s way harder than tryin\'" <br/> - Kanye West',

    18: '"If you think you are too small to make a difference, try sleeping with a mosquito." <br/> - Dalai Lama',

    19: '"It is very rare or almost impossible that an event can be negative from all points of view." <br/> - Dalai Lama',

    20: '"Choose to be optimistic, it feels better." <br/>- Dalai Lama',

    21: '"There is nothing outside a person that by going into him can defile him, but the things that come out of a person are what defile him. <br/> - Jesus (Mark 7:15)',

    22: '"The fear of the LORD is the beginning of knowledge, but fools despise wisdom and instruction. <br/> - Proverbs 1:7',

    23: '"Many are the plans in a human heart, but it is the LORD\'s purpose that prevails." <br/> - Proverbs 19:21',

    24: '"Honor the physical temple that houses you by eating healthfully, exercising, listening to your body\'s needs, and treating it with dignity and love." <br/> - Dr. Wayne Dyer',

    25: '"Strength doesn\'t come from what you CAN do. It comes from overcoming the things you thought you COULDN\'T." <br/> - Rikki Rogers',

    26: '"Suffering arises from trying to control what is uncontrollable, or from neglecting what is in our power." <br/> - Epictetus',

    27: '"Forgive yourself for not knowing what you didn\'t know before you learned it." <br/> - Unknown ',

    28: '"Joy is a sustained sense of well-being and internal peace - a connection to what matters." <br/> - Oprah ',

    29: '"Make a list of things that make you happy. Make a list of things you do every day. Compare the lists. Adjust accordingly" <br/> - Unknown ',

    30: '"Ambition is the path to success. Persistence is the vehicle you arrive in." - <br/> Bill Bradley ',

    31: '"Kind words can be short and easy to speak, but their echoes are truly endless." <br/> - Mother Theresa of Culcutta'

};

var domDaysList = document.getElementById("days");
var domInspiration = document.getElementById("inspiration");

var visible = false;

function inspiration() {

    // Gets the element info of the innerHTML.
    var date = event.target.innerHTML;

    // Replaces the innerHTML of selected element with a quote.
    domInspiration.innerHTML = quotes[date];

    if (visible === false) {

        // Hides the dates.
        domDaysList.style = "display: none";
    
        // Displays the quote.
        domInspiration.style = "display: block";

        visible = true;
    }
    
}

function close() {

    if (visible === true) {

        // Displays the dates.
        domDaysList.style = "display: block";
        
        // Hides the quote.
        domInspiration.style = "display: none";

        visible = false;
    }
}

// Event listener for div element to execute close funciton once clicked.
domInspiration.addEventListener('click', close);

function createList() {

    var num = -4;
    
    // Creates list of dates in DOM.
    for (var i = 1; i < 37; i++) {

        // Creates an li element for the DOM.
        var li = document.createElement("li");

        // Adds date to list beginning on Friday.
        if (i > 5 ) {

            // Adds an onclick function to this element.
            li.setAttribute("onclick", "inspiration()");

            // Adds the name in text form to list item.
            var liText = document.createTextNode(num);
            
            // Adds the text to the li element.
            li.appendChild(liText);
        }
        
        // Adds the li element to an existing DOM element.
        domDaysList.appendChild(li);

        // Increments num by 1.
        num++;
    }
}

createList();