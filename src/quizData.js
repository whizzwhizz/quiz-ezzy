

export const categories = [
  "Technology", "Computer Science", "Math", "History", "Religion", 
  "Video Games", "Television & Film", "Animals & Nature", "Sports", 
  "Business & Finance", "Current Affairs", "Art & Literature", 
  "Space & Astronomy", "Music", "Mythology", "Food & Cuisine", "Travel"
];

export const quizContent = {
  "Technology": [
    { question: "Which company developed the first commercial computer mouse?", options: ["Microsoft", "Apple", "Xerox", "IBM"], answer: "Xerox", hint: "They are also famous for their printers and copiers." },
    { question: "What does 'HTTP' stand for?", options: ["HyperText Transfer Protocol", "HyperText Transmission Process", "Hyperlink Transfer Technology", "HyperText Transfer Program"], answer: "HyperText Transfer Protocol", hint: "It's the foundation of data communication for the World Wide Web." },
    { question: "Who is known as the father of the computer?", options: ["Alan Turing", "Charles Babbage", "Bill Gates", "Steve Jobs"], answer: "Charles Babbage", hint: "He originated the concept of a digital programmable computer." },
    { question: "What does the 'USB' acronym stand for?", options: ["Universal Serial Bus", "Universal System Block", "Unified Serial Bus", "Universal Standard Bus"], answer: "Universal Serial Bus", hint: "It connects your peripherals to your computer." },
    { question: "Which technology is used to make telephone calls over the Internet?", options: ["VoIP", "HTTP", "FTP", "SMTP"], answer: "VoIP", hint: "Voice over Internet Protocol." },
    { question: "What was the first widely used web browser?", options: ["Internet Explorer", "Mosaic", "Netscape Navigator", "Opera"], answer: "Mosaic", hint: "It was released in 1993." },
    { question: "Which wireless technology is named after a Danish king?", options: ["Wi-Fi", "Bluetooth", "NFC", "5G"], answer: "Bluetooth", hint: "King Harald 'Bluetooth' Gormsson." },
    { question: "What unit is used to measure the speed of a computer's processor?", options: ["Megabytes", "Hertz", "Pixels", "Watts"], answer: "Hertz", hint: "Usually expressed in Gigahertz (GHz) today." },
    { question: "Which programming language is symbolized by a coffee cup?", options: ["Python", "Java", "C++", "Ruby"], answer: "Java", hint: "It was developed by Sun Microsystems." },
    { question: "What does 'URL' stand for?", options: ["Universal Resource Locator", "Uniform Resource Locator", "Unified Routing Link", "Uniform Routing Locator"], answer: "Uniform Resource Locator", hint: "It's a web address." }
  ],
  "Computer Science": [
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Mode", "Digital Output Machine", "Document Oriented Model"], answer: "Document Object Model", hint: "It represents the page so programs can change the document structure." },
    { question: "Which data structure operates on a First In, First Out (FIFO) principle?", options: ["Stack", "Queue", "Tree", "Graph"], answer: "Queue", hint: "Think of waiting in line at a store." },
    { question: "What is the time complexity of a binary search?", options: ["O(n)", "O(1)", "O(n log n)", "O(log n)"], answer: "O(log n)", hint: "It halves the search space with each step." },
    { question: "Which hook is used to manage side effects in React?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useEffect", hint: "It runs after the render is committed to the screen." },
    { question: "What does SQL stand for?", options: ["Structured Query Language", "Sequential Query Language", "Standard Query Logic", "System Query Language"], answer: "Structured Query Language", hint: "Used for managing relational databases." },
    { question: "In computing, what is a 'boolean'?", options: ["A variable with two possible values", "A type of loop", "A memory address", "An array"], answer: "A variable with two possible values", hint: "True or False." },
    { question: "What translates high-level code into machine code?", options: ["Interpreter", "Compiler", "Assembler", "Debugger"], answer: "Compiler", hint: "It transforms the entire source code before execution." },
    { question: "What is the base of the hexadecimal numeral system?", options: ["2", "8", "10", "16"], answer: "16", hint: "It uses numbers 0-9 and letters A-F." },
    { question: "Which of the following is NOT a fundamental concept of OOP?", options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"], answer: "Compilation", hint: "It's a step in building software, not a paradigm concept." },
    { question: "What does an API do?", options: ["Defines how software components should interact", "Stores data", "Compiles code", "Styles web pages"], answer: "Defines how software components should interact", hint: "Application Programming Interface." }
  ],
  "Math": [
    { question: "What is the value of Pi to two decimal places?", options: ["3.12", "3.14", "3.16", "3.18"], answer: "3.14", hint: "March 14th is named after this number." },
    { question: "What is the square root of 144?", options: ["10", "11", "12", "14"], answer: "12", hint: "Think of a dozen." },
    { question: "What is the only even prime number?", options: ["0", "1", "2", "4"], answer: "2", hint: "It's the smallest positive even number." },
    { question: "In a right-angled triangle, the side opposite the right angle is called?", options: ["Adjacent", "Hypotenuse", "Opposite", "Perimeter"], answer: "Hypotenuse", hint: "It's the longest side." },
    { question: "What is the sum of angles in a triangle?", options: ["90 degrees", "180 degrees", "270 degrees", "360 degrees"], answer: "180 degrees", hint: "Half of a circle's degrees." },
    { question: "What do you call a polygon with 8 sides?", options: ["Hexagon", "Heptagon", "Octagon", "Nonagon"], answer: "Octagon", hint: "Like a stop sign." },
    { question: "What is 5 cubed?", options: ["15", "25", "125", "150"], answer: "125", hint: "5 x 5 x 5." },
    { question: "Which ancient Greek mathematician is known as the 'father of geometry'?", options: ["Pythagoras", "Archimedes", "Euclid", "Socrates"], answer: "Euclid", hint: "He wrote 'The Elements'." },
    { question: "What is the top number of a fraction called?", options: ["Denominator", "Numerator", "Quotient", "Divisor"], answer: "Numerator", hint: "It indicates how many parts are taken." },
    { question: "How many degrees are in a full circle?", options: ["180", "270", "360", "400"], answer: "360", hint: "A full spin." }
  ],
  "History": [
    { question: "In which year did Christopher Columbus first reach the Americas?", options: ["1492", "1588", "1607", "1620"], answer: "1492", hint: "He sailed the ocean blue." },
    { question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"], answer: "George Washington", hint: "He's on the $1 bill." },
    { question: "The Great Wall of China was primarily built to protect against which group?", options: ["Romans", "Mongols", "Persians", "Japanese"], answer: "Mongols", hint: "Nomadic tribes from the north." },
    { question: "Which empire was ruled by Julius Caesar?", options: ["Greek", "Ottoman", "Roman", "British"], answer: "Roman", hint: "Centered in modern-day Italy." },
    { question: "World War II ended in which year?", options: ["1943", "1945", "1947", "1950"], answer: "1945", hint: "The same year the UN was established." },
    { question: "Who was the first female Prime Minister of the UK?", options: ["Theresa May", "Indira Gandhi", "Margaret Thatcher", "Golda Meir"], answer: "Margaret Thatcher", hint: "Known as the 'Iron Lady'." },
    { question: "The French Revolution began in what year?", options: ["1776", "1789", "1812", "1848"], answer: "1789", hint: "The storming of the Bastille." },
    { question: "Which ancient civilization built the Machu Picchu?", options: ["Aztec", "Maya", "Inca", "Olmec"], answer: "Inca", hint: "Located in the Andes mountains of Peru." },
    { question: "Who painted the Sistine Chapel ceiling?", options: ["Leonardo da Vinci", "Michelangelo", "Raphael", "Donatello"], answer: "Michelangelo", hint: "He also sculpted David." },
    { question: "The Cold War was primarily between the US and which other nation?", options: ["China", "Germany", "Soviet Union", "Japan"], answer: "Soviet Union", hint: "Also known as the USSR." }
  ],
  "Religion": [
    { question: "Which is the largest religion in the world by population?", options: ["Islam", "Hinduism", "Christianity", "Buddhism"], answer: "Christianity", hint: "Based on the life and teachings of Jesus of Nazareth." },
    { question: "What is the holy book of Islam?", options: ["Quran", "Bible", "Torah", "Vedas"], answer: "Quran", hint: "Revealed to Prophet Muhammad." },
    { question: "In Hinduism, who is the creator god?", options: ["Shiva", "Vishnu", "Brahma", "Ganesha"], answer: "Brahma", hint: "Part of the Trimurti." },
    { question: "Where was the Buddha born?", options: ["India", "Nepal", "China", "Japan"], answer: "Nepal", hint: "In Lumbini." },
    { question: "What is the Jewish New Year called?", options: ["Yom Kippur", "Hanukkah", "Rosh Hashanah", "Passover"], answer: "Rosh Hashanah", hint: "Translates to 'head of the year'." },
    { question: "Which religion observes the holy month of Ramadan?", options: ["Sikhism", "Islam", "Judaism", "Baha'i"], answer: "Islam", hint: "A month of fasting, prayer, and reflection." },
    { question: "Who is the spiritual leader of Tibetan Buddhism?", options: ["Panchen Lama", "Karmapa", "Dalai Lama", "Rinpoche"], answer: "Dalai Lama", hint: "Currently Tenzin Gyatso." },
    { question: "What is the primary symbol of Christianity?", options: ["Star of David", "Crescent Moon", "Cross", "Om"], answer: "Cross", hint: "Represents the crucifixion of Jesus." },
    { question: "In which city is the Kaaba located?", options: ["Jerusalem", "Medina", "Mecca", "Cairo"], answer: "Mecca", hint: "The holiest city in Islam." },
    { question: "Which religion features the belief in Karma and Reincarnation prominently?", options: ["Christianity", "Hinduism", "Judaism", "Zoroastrianism"], answer: "Hinduism", hint: "Also heavily featured in Buddhism and Jainism." }
  ],
  "Video Games": [
    { question: "What is the best-selling video game of all time?", options: ["Tetris", "Minecraft", "Grand Theft Auto V", "Super Mario Bros"], answer: "Minecraft", hint: "A game about placing blocks and going on adventures." },
    { question: "Who is the main protagonist of the Legend of Zelda series?", options: ["Zelda", "Link", "Ganon", "Epona"], answer: "Link", hint: "He wears a green tunic." },
    { question: "Which company created the PlayStation?", options: ["Nintendo", "Microsoft", "Sega", "Sony"], answer: "Sony", hint: "A Japanese multinational conglomerate." },
    { question: "What year was the original Game Boy released?", options: ["1985", "1989", "1992", "1995"], answer: "1989", hint: "The same year the Berlin Wall fell." },
    { question: "In Pac-Man, what are the names of the ghosts?", options: ["Blinky, Pinky, Inky, Clyde", "Red, Blue, Pink, Orange", "Minky, Winky, Binky, Dinky", "Dash, Flash, Mash, Crash"], answer: "Blinky, Pinky, Inky, Clyde", hint: "They rhyme mostly." },
    { question: "Which game features a battle royale on an island called Erangel?", options: ["Fortnite", "Apex Legends", "PUBG", "Call of Duty: Warzone"], answer: "PUBG", hint: "PlayerUnknown's Battlegrounds." },
    { question: "What is the name of the highest rank in Counter-Strike: Global Offensive?", options: ["Global Elite", "Supreme Master", "Legendary Eagle", "Radiant"], answer: "Global Elite", hint: "The top of the world." },
    { question: "In which game do you fight 'Creepers'?", options: ["Roblox", "Terraria", "Minecraft", "Rust"], answer: "Minecraft", hint: "They explode when near you." },
    { question: "Who is the iconic mascot of Sega?", options: ["Mario", "Crash Bandicoot", "Sonic the Hedgehog", "Mega Man"], answer: "Sonic the Hedgehog", hint: "Gotta go fast." },
    { question: "What is the fictional city where BioShock takes place?", options: ["Rapture", "Columbia", "Gotham", "Vice City"], answer: "Rapture", hint: "An underwater metropolis." }
  ],
  "Television & Film": [
    { question: "Who directed the movie 'Inception'?", options: ["Steven Spielberg", "Christopher Nolan", "Quentin Tarantino", "Martin Scorsese"], answer: "Christopher Nolan", hint: "He also directed The Dark Knight." },
    { question: "Which TV show features the characters Walter White and Jesse Pinkman?", options: ["The Wire", "Better Call Saul", "Breaking Bad", "Mad Men"], answer: "Breaking Bad", hint: "They cook crystal meth." },
    { question: "What is the highest-grossing film of all time?", options: ["Avengers: Endgame", "Titanic", "Avatar", "Star Wars: The Force Awakens"], answer: "Avatar", hint: "Directed by James Cameron, set on Pandora." },
    { question: "In 'The Matrix', what pill does Neo take?", options: ["Blue", "Red", "Green", "Yellow"], answer: "Red", hint: "To wake up from the simulation." },
    { question: "Who played Jack Dawson in 'Titanic'?", options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Tom Cruise"], answer: "Leonardo DiCaprio", hint: "He won his first Oscar for The Revenant." },
    { question: "Which show is set in the fictional continent of Westeros?", options: ["The Witcher", "Game of Thrones", "Lord of the Rings", "Vikings"], answer: "Game of Thrones", hint: "Based on books by George R.R. Martin." },
    { question: "What is the name of the coffee shop in 'Friends'?", options: ["Central Perk", "Monk's Diner", "MacLaren's", "The Peach Pit"], answer: "Central Perk", hint: "Gunther works there." },
    { question: "Which movie won the first Academy Award for Best Animated Feature?", options: ["Toy Story", "Shrek", "Finding Nemo", "Spirited Away"], answer: "Shrek", hint: "It features an ogre and a donkey." },
    { question: "Who played the Joker in 'The Dark Knight'?", options: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"], answer: "Heath Ledger", hint: "He won a posthumous Oscar for the role." },
    { question: "In 'Stranger Things', what is the alternate dimension called?", options: ["The Void", "The Underworld", "The Upside Down", "The Dark Place"], answer: "The Upside Down", hint: "It's a mirror version of our world." }
  ],
  "Animals & Nature": [
    { question: "What is the fastest land animal?", options: ["Lion", "Cheetah", "Horse", "Greyhound"], answer: "Cheetah", hint: "Can reach speeds over 60 mph." },
    { question: "Which mammal can fly?", options: ["Flying Squirrel", "Bat", "Sugar Glider", "Lemur"], answer: "Bat", hint: "They use echolocation." },
    { question: "What is the largest living primate?", options: ["Chimpanzee", "Orangutan", "Gorilla", "Baboon"], answer: "Gorilla", hint: "Silverbacks are the mature males." },
    { question: "What do you call a group of wolves?", options: ["Herd", "Pack", "Flock", "Pride"], answer: "Pack", hint: "Led by an alpha." },
    { question: "Which bird is known for its beautiful tail feathers?", options: ["Parrot", "Peacock", "Swan", "Flamingo"], answer: "Peacock", hint: "The males display them to attract mates." },
    { question: "What is the tallest animal in the world?", options: ["Elephant", "Giraffe", "Ostrich", "Moose"], answer: "Giraffe", hint: "Known for its extremely long neck." },
    { question: "How many legs does a spider have?", options: ["6", "8", "10", "12"], answer: "8", hint: "They are arachnids, not insects." },
    { question: "What is the national bird of the United States?", options: ["Bald Eagle", "Wild Turkey", "Golden Eagle", "Hawk"], answer: "Bald Eagle", hint: "A symbol of freedom." },
    { question: "Which ocean is the largest?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], answer: "Pacific", hint: "It covers more than 30% of the Earth's surface." },
    { question: "What is the primary food source of a Panda?", options: ["Eucalyptus", "Bamboo", "Insects", "Fish"], answer: "Bamboo", hint: "A fast-growing grass." }
  ],
  "Sports": [
    { question: "How often are the Summer Olympics held?", options: ["Every 2 years", "Every 4 years", "Every 5 years", "Every decade"], answer: "Every 4 years", hint: "A leap year usually." },
    { question: "In which sport would you perform a slam dunk?", options: ["Football", "Volleyball", "Basketball", "Tennis"], answer: "Basketball", hint: "Michael Jordan was famous for this." },
    { question: "What is the maximum score in a single frame of bowling?", options: ["10", "30", "50", "100"], answer: "30", hint: "Three strikes in a row for one frame." },
    { question: "Which country won the first FIFA World Cup in 1930?", options: ["Brazil", "Argentina", "Uruguay", "Germany"], answer: "Uruguay", hint: "They also hosted the tournament." },
    { question: "How many players are on a standard soccer team on the field?", options: ["9", "10", "11", "12"], answer: "11", hint: "10 outfield players and 1 goalkeeper." },
    { question: "In tennis, what term is used for a score of zero?", options: ["Nil", "Zero", "Love", "Naught"], answer: "Love", hint: "Thought to originate from the French word for egg." },
    { question: "Which golfer is known as 'The Golden Bear'?", options: ["Tiger Woods", "Arnold Palmer", "Jack Nicklaus", "Phil Mickelson"], answer: "Jack Nicklaus", hint: "He won 18 major championships." },
    { question: "What sport is known as 'America's Pastime'?", options: ["American Football", "Basketball", "Baseball", "Ice Hockey"], answer: "Baseball", hint: "Played with a bat and a diamond." },
    { question: "How long is a marathon?", options: ["13.1 miles", "26.2 miles", "50 kilometers", "100 kilometers"], answer: "26.2 miles", hint: "Approximately 42 kilometers." },
    { question: "In which sport do teams compete for the Stanley Cup?", options: ["Rugby", "Cricket", "Ice Hockey", "Lacrosse"], answer: "Ice Hockey", hint: "Played in the NHL." }
  ],
  "Business & Finance": [
    { question: "What does ROI stand for?", options: ["Return on Investment", "Rate of Interest", "Return on Income", "Risk of Investment"], answer: "Return on Investment", hint: "A performance measure used to evaluate the efficiency of an investment." },
    { question: "Who is the CEO of Tesla as of 2024?", options: ["Jeff Bezos", "Elon Musk", "Tim Cook", "Sundar Pichai"], answer: "Elon Musk", hint: "He also owns X (formerly Twitter)." },
    { question: "What is the term for a market in which share prices are rising?", options: ["Bear Market", "Bull Market", "Stag Market", "Eagle Market"], answer: "Bull Market", hint: "Charges upward with its horns." },
    { question: "Which currency is used in Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], answer: "Yen", hint: "Often represented by the symbol ¥." },
    { question: "What does IPO stand for?", options: ["International Public Offering", "Initial Public Offering", "Internal Profit Objective", "Initial Private Offering"], answer: "Initial Public Offering", hint: "When a private company goes public." },
    { question: "Which company is the largest e-commerce retailer in the US?", options: ["Walmart", "eBay", "Amazon", "Target"], answer: "Amazon", hint: "Started as an online bookstore." },
    { question: "What is a 'dividend'?", options: ["A company's debt", "A distribution of profits to shareholders", "A type of tax", "A government grant"], answer: "A distribution of profits to shareholders", hint: "A reward for holding the stock." },
    { question: "Which global organization manages international trade rules?", options: ["IMF", "World Bank", "WTO", "UN"], answer: "WTO", hint: "World Trade Organization." },
    { question: "What is cryptocurrency?", options: ["A physical coin", "A digital or virtual currency secured by cryptography", "A government bond", "A type of stock"], answer: "A digital or virtual currency secured by cryptography", hint: "Bitcoin is the most famous example." },
    { question: "What does GDP stand for?", options: ["Gross Domestic Product", "General Domestic Profit", "Gross Distribution Process", "Global Development Plan"], answer: "Gross Domestic Product", hint: "Measures a country's economic output." }
  ],
  "Current Affairs": [
    { question: "Which city hosted the 2024 Summer Olympics?", options: ["Tokyo", "Los Angeles", "Paris", "London"], answer: "Paris", hint: "The city of light." },
    { question: "What is the name of the AI chatbot developed by OpenAI?", options: ["Gemini", "Claude", "ChatGPT", "Copilot"], answer: "ChatGPT", hint: "Based on the GPT architecture." },
    { question: "Which country became the first to land a spacecraft near the Moon's south pole in 2023?", options: ["USA", "Russia", "China", "India"], answer: "India", hint: "Chandrayaan-3 mission." },
    { question: "Who acquired Twitter and renamed it 'X'?", options: ["Mark Zuckerberg", "Jeff Bezos", "Elon Musk", "Bill Gates"], answer: "Elon Musk", hint: "CEO of Tesla." },
    { question: "What major international climate agreement was signed in 2015?", options: ["Kyoto Protocol", "Paris Agreement", "Copenhagen Accord", "Geneva Convention"], answer: "Paris Agreement", hint: "Aims to limit global warming." },
    { question: "Which movie won the Academy Award for Best Picture in 2024?", options: ["Barbie", "Oppenheimer", "Poor Things", "Killers of the Flower Moon"], answer: "Oppenheimer", hint: "Directed by Christopher Nolan." },
    { question: "What is the currency of the European Union?", options: ["Pound", "Franc", "Euro", "Mark"], answer: "Euro", hint: "Used by 20 of the 27 member states." },
    { question: "Which tech company launched the Vision Pro headset?", options: ["Meta", "Google", "Microsoft", "Apple"], answer: "Apple", hint: "They call it 'spatial computing'." },
    { question: "What is the largest social media platform in the world by monthly active users?", options: ["TikTok", "Instagram", "Facebook", "X"], answer: "Facebook", hint: "Part of Meta." },
    { question: "In 2022, which country was invaded by Russia?", options: ["Belarus", "Georgia", "Ukraine", "Poland"], answer: "Ukraine", hint: "Led by President Volodymyr Zelenskyy." }
  ],
  "Art & Literature": [
    { question: "Who painted the Mona Lisa?", options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"], answer: "Leonardo da Vinci", hint: "A true Renaissance man." },
    { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], answer: "William Shakespeare", hint: "The Bard of Avon." },
    { question: "What is the best-selling book series of all time?", options: ["The Lord of the Rings", "Harry Potter", "Goosebumps", "Twilight"], answer: "Harry Potter", hint: "Written by J.K. Rowling." },
    { question: "Which artist cut off part of his own ear?", options: ["Salvador Dali", "Henri Matisse", "Vincent van Gogh", "Edvard Munch"], answer: "Vincent van Gogh", hint: "Painter of 'Starry Night'." },
    { question: "What novel features the characters Winston Smith and Big Brother?", options: ["Fahrenheit 451", "Brave New World", "1984", "Animal Farm"], answer: "1984", hint: "Written by George Orwell." },
    { question: "Who sculpted 'The Thinker'?", options: ["Auguste Rodin", "Michelangelo", "Donatello", "Gian Lorenzo Bernini"], answer: "Auguste Rodin", hint: "A French sculptor." },
    { question: "What is the pen name of Samuel Langhorne Clemens?", options: ["Dr. Seuss", "George Orwell", "Mark Twain", "Lewis Carroll"], answer: "Mark Twain", hint: "Author of 'The Adventures of Tom Sawyer'." },
    { question: "Which painting features melting clocks?", options: ["The Scream", "Guernica", "The Persistence of Memory", "Starry Night"], answer: "The Persistence of Memory", hint: "Painted by Salvador Dali." },
    { question: "Who wrote 'To Kill a Mockingbird'?", options: ["Harper Lee", "F. Scott Fitzgerald", "Ernest Hemingway", "John Steinbeck"], answer: "Harper Lee", hint: "Features the lawyer Atticus Finch." },
    { question: "What art movement was Pablo Picasso a co-founder of?", options: ["Impressionism", "Surrealism", "Cubism", "Pop Art"], answer: "Cubism", hint: "Using geometric shapes." }
  ],
  "Space & Astronomy": [
    { question: "What is the largest planet in our solar system?", options: ["Earth", "Saturn", "Jupiter", "Neptune"], answer: "Jupiter", hint: "It has the Great Red Spot." },
    { question: "What is the name of our galaxy?", options: ["Andromeda", "Milky Way", "Sombrero", "Triangulum"], answer: "Milky Way", hint: "Named after a spilled liquid." },
    { question: "Who was the first human to journey into outer space?", options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "John Glenn"], answer: "Yuri Gagarin", hint: "A Soviet cosmonaut in 1961." },
    { question: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Mercury", "Uranus"], answer: "Mars", hint: "Named after the Roman god of war." },
    { question: "What is the hottest planet in our solar system?", options: ["Mercury", "Venus", "Mars", "Jupiter"], answer: "Venus", hint: "Runaway greenhouse effect makes it hotter than Mercury." },
    { question: "What force keeps planets in orbit around the Sun?", options: ["Magnetism", "Friction", "Gravity", "Centrifugal force"], answer: "Gravity", hint: "Discovered by Isaac Newton." },
    { question: "What is the name of the first artificial Earth satellite?", options: ["Apollo 11", "Voyager 1", "Sputnik 1", "Hubble"], answer: "Sputnik 1", hint: "Launched by the Soviet Union in 1957." },
    { question: "What is the term for a star that suddenly increases greatly in brightness because of a catastrophic explosion?", options: ["Quasar", "Pulsar", "Supernova", "Black Hole"], answer: "Supernova", hint: "The death of a massive star." },
    { question: "Which telescope was launched into low Earth orbit in 1990?", options: ["James Webb", "Kepler", "Chandra", "Hubble"], answer: "Hubble", hint: "Named after an astronomer." },
    { question: "How many moons does Mars have?", options: ["0", "1", "2", "4"], answer: "2", hint: "Phobos and Deimos." }
  ],
  "Music": [
    { question: "Who is known as the 'King of Pop'?", options: ["Elvis Presley", "Prince", "Michael Jackson", "Freddie Mercury"], answer: "Michael Jackson", hint: "Famous for the Moonwalk." },
    { question: "Which band recorded the album 'Abbey Road'?", options: ["The Rolling Stones", "The Beatles", "Led Zeppelin", "Pink Floyd"], answer: "The Beatles", hint: "John, Paul, George, and Ringo." },
    { question: "How many strings does a standard guitar have?", options: ["4", "5", "6", "8"], answer: "6", hint: "E-A-D-G-B-E." },
    { question: "Who composed the 'Four Seasons'?", options: ["Mozart", "Beethoven", "Vivaldi", "Bach"], answer: "Vivaldi", hint: "An Italian Baroque composer." },
    { question: "What is the highest female singing voice called?", options: ["Alto", "Mezzo-soprano", "Soprano", "Contralto"], answer: "Soprano", hint: "The top of the choir." },
    { question: "Which genre of music originated in New Orleans?", options: ["Rock", "Jazz", "Country", "Hip Hop"], answer: "Jazz", hint: "Known for brass bands and improvisation." },
    { question: "Who is the best-selling solo music artist of all time?", options: ["Madonna", "Elton John", "Elvis Presley", "Michael Jackson"], answer: "Elvis Presley", hint: "The King of Rock and Roll." },
    { question: "What instrument does a drummer hit with a pedal?", options: ["Snare", "Hi-hat", "Tom-tom", "Bass drum"], answer: "Bass drum", hint: "Also called a kick drum." },
    { question: "Which artist's fans are known as 'Swifties'?", options: ["Katy Perry", "Ariana Grande", "Taylor Swift", "Selena Gomez"], answer: "Taylor Swift", hint: "She re-records her albums as 'Taylor's Version'." },
    { question: "What does the musical term 'Piano' mean?", options: ["Fast", "Loud", "Soft", "Slow"], answer: "Soft", hint: "Opposite of Forte." }
  ],
  "Mythology": [
    { question: "Who is the king of the gods in Greek mythology?", options: ["Poseidon", "Hades", "Ares", "Zeus"], answer: "Zeus", hint: "Wields a thunderbolt." },
    { question: "In Norse mythology, who is the god of thunder?", options: ["Odin", "Loki", "Thor", "Freyr"], answer: "Thor", hint: "Wields the hammer Mjolnir." },
    { question: "Who was the Roman goddess of love?", options: ["Athena", "Venus", "Hera", "Diana"], answer: "Venus", hint: "Greek equivalent is Aphrodite." },
    { question: "What creature is half-man and half-bull?", options: ["Centaur", "Minotaur", "Satyr", "Griffin"], answer: "Minotaur", hint: "Lived in the Labyrinth." },
    { question: "Which hero was known for his incredible strength and 12 labors?", options: ["Achilles", "Perseus", "Hercules", "Theseus"], answer: "Hercules", hint: "Son of Zeus and a mortal woman." },
    { question: "What was the name of King Arthur's sword?", options: ["Durandal", "Excalibur", "Joyeuse", "Gram"], answer: "Excalibur", hint: "Given to him by the Lady of the Lake." },
    { question: "In Egyptian mythology, who is the god of the afterlife and the dead?", options: ["Ra", "Horus", "Anubis", "Osiris"], answer: "Osiris", hint: "Husband of Isis." },
    { question: "What magical creature rises from its own ashes?", options: ["Dragon", "Pegasus", "Phoenix", "Chimera"], answer: "Phoenix", hint: "A bird of fire." },
    { question: "Who opened a box containing all the evils of the world?", options: ["Medusa", "Pandora", "Helen", "Cassandra"], answer: "Pandora", hint: "Only 'Hope' was left inside." },
    { question: "In Greek myth, who ferried the dead across the river Styx?", options: ["Hermes", "Hades", "Charon", "Cerberus"], answer: "Charon", hint: "You had to pay him with a coin." }
  ],
  "Food & Cuisine": [
    { question: "Which country is the origin of Sushi?", options: ["China", "Korea", "Japan", "Thailand"], answer: "Japan", hint: "Prepared with vinegared rice." },
    { question: "What is the primary ingredient in hummus?", options: ["Lentils", "Chickpeas", "Black beans", "Edamame"], answer: "Chickpeas", hint: "Also known as garbanzo beans." },
    { question: "Which spice is the most expensive in the world by weight?", options: ["Vanilla", "Cardamom", "Saffron", "Cinnamon"], answer: "Saffron", hint: "Harvested from the crocus flower." },
    { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion", "Lime"], answer: "Avocado", hint: "A green, fatty fruit." },
    { question: "Which type of pasta is shaped like little bows or butterflies?", options: ["Penne", "Fusilli", "Farfalle", "Ravioli"], answer: "Farfalle", hint: "The name means 'butterflies' in Italian." },
    { question: "What is the national dish of Spain, originating in Valencia?", options: ["Tapas", "Paella", "Gazpacho", "Churros"], answer: "Paella", hint: "A rice dish often cooked with seafood." },
    { question: "Which country produces the most coffee in the world?", options: ["Colombia", "Vietnam", "Brazil", "Ethiopia"], answer: "Brazil", hint: "Located in South America." },
    { question: "What type of pastry is used to make a croissant?", options: ["Choux", "Puff pastry", "Shortcrust", "Filo"], answer: "Puff pastry", hint: "Flaky and buttery layers." },
    { question: "Tzatziki is a yogurt-based sauce originating from which country?", options: ["Italy", "Turkey", "Greece", "Lebanon"], answer: "Greece", hint: "Made with cucumbers and garlic." },
    { question: "What is tofu primarily made from?", options: ["Wheat", "Soy milk", "Rice", "Almonds"], answer: "Soy milk", hint: "Curdled and pressed into blocks." }
  ],
  "Travel": [
    { question: "Which city is known as the 'Big Apple'?", options: ["Los Angeles", "Chicago", "New York City", "Boston"], answer: "New York City", hint: "Home to Times Square." },
    { question: "In which country would you find the Taj Mahal?", options: ["Egypt", "India", "Turkey", "Iran"], answer: "India", hint: "Located in the city of Agra." },
    { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Brisbane", "Canberra"], answer: "Canberra", hint: "It was purpose-built between Sydney and Melbourne." },
    { question: "Which river flows through Paris?", options: ["Thames", "Rhine", "Seine", "Danube"], answer: "Seine", hint: "You can take a boat tour on it past the Eiffel Tower." },
    { question: "Where are the ancient pyramids of Giza located?", options: ["Mexico", "Peru", "Egypt", "Sudan"], answer: "Egypt", hint: "Near the city of Cairo." },
    { question: "Which European country is famous for its fjords?", options: ["Sweden", "Norway", "Finland", "Denmark"], answer: "Norway", hint: "Deep, narrow inlets of the sea with steep cliffs." },
    { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], answer: "Nile", hint: "Flows north through Africa." },
    { question: "In which US state is the Grand Canyon located?", options: ["Nevada", "Utah", "Colorado", "Arizona"], answer: "Arizona", hint: "Carved by the Colorado River." },
    { question: "What is the smallest country in the world by land area?", options: ["Monaco", "Nauru", "Vatican City", "San Marino"], answer: "Vatican City", hint: "The headquarters of the Roman Catholic Church." },
    { question: "Which city is famous for its canal system and gondolas?", options: ["Amsterdam", "Venice", "Bruges", "St. Petersburg"], answer: "Venice", hint: "An Italian city built on water." }
  ]
};