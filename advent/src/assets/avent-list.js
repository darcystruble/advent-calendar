// https://www.simplifycreateinspire.com/advent-calendar-activities/
const adventInfo = [
    {
        id: 1,
        item: `Write a letter to Santa',
        description: 'A Christmas time classic. Check the link below for information on the USPS Operation Santa, complete with Santa's address`,
        materials: ['Paper', 'Envelope', 'Stamp', 'Coloring materials'],
        resources: ['https://www.uspsoperationsanta.com/getinvolved']
    },
    {
        id: 2,
        item: 'Make paper snowflakes',
        description: 'A fun and festive way to practice fine motor skills... and create some decorations at the same time!',
        materials: ['Paper', 'Scissors'],
        resources: ['https://kinderart.com/art-lessons/seasons/winter/paper-snowflakes/']
    },
    {
        id: 3,
        item: 'Go for a family hike',
        description: 'Bundle up and get outdoors!',
        materials: [],
        resources: ['https://www.alltrails.com/explore?f[]=kids']
    },
    {
        id: 4,
        item: 'Decorate holiday t-shirts',
        description: 'Get creative. The sky is the limit! You can tie dye, or use fabirc paints or you can use iron on cut outs!',
        materials: ['T-shirts', 'Fabric markers', 'Fabric paint'],
        resources: ['https://www.lifeissweeterbydesign.com/t-shirt-crafts-kids/']
    },
    {
        id: 5,
        item: 'Make hot chocolate',
        description: 'Use a mix or make your own mix. Just make sure to add extra marshmallows!',
        materials: ['Hot chocolate mix', 'Mini marshmallows'],
        resources: ['https://www.thepioneerwoman.com/food-cooking/recipes/a81118/how-to-make-hot-chocolate-mix/']
    },
    {
        id: 6,
        item: 'Play holiday charades',
        description: 'No supplies needed! Check out the resources for a list of ideas for holiday related charades or play regular charades. Just have fun!',
        materials: [],
        resources: ['https://www.getcharadesideas.com/resources/charades-ideas-for-christmas-the-complete-list-118-words-phrases/']
    },
    {
        id: 7,
        item: 'Read a holiday book together',
        description: 'Check out the library or find a book around your house. Snuggle up and read together.',
        materials: [],
        resources: []
    },
    {
        id: 8,
        item: 'Watch a holiday movie',
        description: 'Pick a family favorite or try a new holiday movie!',
        materials: [],
        resources: []
    },
    {
        id: 9,
        item: 'Go ice skating',
        description: 'Strap on your skates and hit the ice!',
        materials: [],
        resources: []
    },
    {
        id: 10,
        item: 'Have a candy cane scavenger hunt',
        description: 'Create your own scavengar hunt, or print out the page from the link below!',
        materials: ['Box of candy canes'],
        resources: ['https://craftingalovelylife.com/free-printable-christmas-candy-cane-hunt-game/']
    },
    {
        id: 11,
        item: 'Write holiday cards for friends and family',
        description: 'Get creative with this craft. You can send them to friends and family afar or drop them off to your local crew!',
        materials: ['Paper', 'Markers', 'Pencils'],
        resources: ['https://www.goodhousekeeping.com/holidays/christmas-ideas/g4080/clever-diy-christmas-cards/']
    },
    {
        id: 12,
        item: 'Learn about holiday traditions in another country',
        description: 'Check out books from your local library. Search youtube for informational videos! Have fun learning about other cultures and traditions.',
        materials: [],
        resources: ['https://www.travelchannel.com/interests/holidays/photos/fun-holiday-traditions-around-the-world']
    },
    {
        id: 13,
        item: 'Make a new Christmas ornament',
        description: 'This can be anything from salt dough ornaments, to buying blank ornaments and filling or painting them. Click the link below for a list of ideas.',
        materials: ['Ornament making supplies'],
        resources: ['https://abeautifulmess.com/easy-ornaments-to-make-with-kids/']
    },
    {
        id: 14,
        item: 'Create handmade gift tags',
        description: 'As we get closer to Christmas, we can get our gift tags ready!',
        materials: ['Cardstock', 'Fabric scraps', 'Glue', 'Scissors'],
        resources: ['https://upcyclemystuff.com/diy-christmas-gift-tags-from-cardboard-scrap-fabric/']
    },
    {
        id: 15,
        item: 'Make friendship bracelets',
        description: 'There are so many different ways to make friendship braceletes. There is a link below with some ideas but you can also find plenty of other internet resources or videos!',
        materials: ['Embroidery floss', 'Beads', 'Craft Sticks', 'Washi tape'],
        resources: ['https://www.care.com/c/diy-friendship-bracelets-for-kids/']
    },
    {
        id: 16,
        item: 'Build a gingerbread house together',
        description: 'Grab a kit or, if you have the time and the inclination, try making one from scratch!',
        materials: ['Gingerbread house kit'],
        resources: ['https://www.blessthismessplease.com/how-to-make-a-gingerbread-house/']
    },
    {
        id: 17,
        item: 'Do a puzzle together',
        description: 'Pull out an old puzzle or buy a new one. Maybe make a warm beverage and enjoy a little time together.',
        materials: ['puzzle'],
        resources: []
    },
    {
        id: 18,
        item: 'Make treats to give out to neighbors or friends',
        description: 'Whether you love to make cookies or quick breads, pull something together and pass them out to local friends or neighbors. It is a fun way to spread a little holiday cheer!',
        materials: ['Baking supplies'],
        resources: ['https://www.thehappyflammily.com/2022/12/christmas-treats-for-neighbors.html']
    },
    {
        id: 19,
        item: 'Do a science experiment',
        description: `This doesn't have to be Christmas related but the list linked below has some fun Christmas activites and ideas.`,
        materials: [],
        resources: ['https://elementalscience.com/blogs/science-activities/25-christmas-science-ideas']
    },
    {
        id: 20,
        item: 'Take a drive to look at Christmas displays',
        description: 'No materials needed. Just hop into a car and enjoy some family time together.',
        materials: [],
        resources: []
    },
    {
        id: 21,
        item: 'Make Christmas Crackers',
        description: `If you don't have the cracker popper, it wont make the sound but it will still be a fun craft to make together.`,
        materials: ['Wrapping paper', 'Toilet paper rolls', 'Stickers', 'Paper party hats'],
        resources: ['https://www.simplifycreateinspire.com/how-to-make-christmas-crackers/']
    },
    {
        id: 22,
        item: 'Build a lego Christmas Scene',
        description: 'Lego sells Christmas sets but you can also just dive into your lego bin and come up with something new and creative!',
        materials: ['Lego bricks'],
        resources: ['https://brainpowerboy.com/easy-to-make-lego-christmas-scene/', 'https://www.lego.com/en-gb/holiday-gifts/how-to-decorate-your-home-for-christmas?consent-modal=show&age-gate=grown_up']
    },
    {
        id: 23,
        item: 'Make reindeer food for Christmas Ever',
        description: 'There are many variations of this recipe. Find one that you like and make it together. The one linked below is similar to puppy chow.',
        materials: ['Chex Cereal', 'Chocolate chips', 'Peanut butter', 'Salted butter', 'Vanilla extract', 'Powdered sugar', 'M&ms', 'Pretzels', 'Peanuts', 'Mini peanut butter cups'],
        resources: ['https://www.thecountrycook.net/reindeer-chow/']
    },
    {
        id: 24,
        item: 'Bake Christmas Cookies',
        description: 'Time to get ready for Santa! Bake some cookies together and put them in a place Santa is sure to see.',
        materials: ['Cookie making supplies'],
        resources: ['https://www.aheadofthyme.com/best-christmas-cookies-recipes/']
    },
]

export default adventInfo;