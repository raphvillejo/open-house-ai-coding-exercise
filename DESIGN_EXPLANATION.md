# Design Decisions and Thoughts

# Edges

1. There are 10,000+ cards.
2. The API will provide only 175 cards each time.

# Requirements

1. A search bar that searches a name from a single REST endpoint https://scryfall.com/docs/api/cards/search.
2. Limit the API request to a maximum of 1 for every search.
3. No button to click; only press enter to search for a card name.
4. User-friendly = Compatible with all devices.
5. Creative - hopefully :)
6. Display the card's image(s), name, set name, number, and rarity.

# NPM Packages Installed

dotenv
axios
express-rate-limit
tailwind
react-paginate
react-parallax-tilt

# Steps

1. I thoroughly read the README.md and reviewed all the task requirements, familiarizing myself with the https://scryfall.com/docs/api/cards/search documentation.
2. Following the guidelines outlined in the README.md, I implemented the skeleton codes and executed the necessary npm packages.
3. I crafted the code for the index.ts file in my Express server, utilizing axios for handling promises and API requests and incorporating express-rate-limit for controlling API request limits.
4. I established a route to fetch the JSON object with a single parameter, namely, the card name.
5. During the initial page load, there are no limitations, but subsequently, the system will restrict requests to 1 per second.
6. With the successful completion of the requirements on the backend, I transitioned to coding the frontend.
7. Initially, my plan was to query and filter the 10,000 cards through the search text box's onchange event handler. However, upon careful consideration, this approach seemed inefficient. Filtering all 10k cards each time the value changes would trigger a new API request, conflicting with our requirements. Moreover, loading all 10k plus cards is not feasible as Scryfall only provides 175 cards. Open to suggestions if you have alternative ideas :)
8. I opted for a text search box, triggering an API request whenever the user types and presses enter to search for their input card name.
9. I organized the JSON response into an array, extracting only the data we need: image(s), name, set name, number, and rarity.
10. I implemented a state for this JSON data, updating it whenever the user hits the enter key or clicks the reset link, loading the first 175 cards ordered by name ascending.
11. Manual CSS was applied for styling.
12. I chose to display the cards in 4 columns, and upon clicking an image, a modal will pop up.
13. Upon completion of the App.tsx, I began breaking down the code into components, creating their respective files.
14. I incorporated Tailwind CSS for styling and react paginaton.
15. Additionally, I installed and utilized react-parallax-tilt for animation effects on images within the pop-up modal.
16. Rigorous testing was conducted, ensuring that all components and functionalities were operational.

# I WAS UNABLE TO INTEGRATE REACT-TOASTIFY DUE TO AN ERROR THAT I COULDN'T FIX WITHIN THE ALLOTTED TIME. THE ISSUE WAS RELATED TO AN INVALID HOOK CALL. IF YOU HAVE ANY IDEAS, PLEASE LET ME KNOW. HOWEVER, I WILL CONTINUE TO WORK ON RESOLVING THIS IN MY SPARE TIME. IN THE MEANTIME, I HAVE IMPLEMENTED A TEMPORARY POP-UP TO HANDLE ERRORS SUCH AS 'CARDS NOT FOUND,' 'TOO MANY REQUESTS,' AND OTHER ERRORS FROM THE SERVER.
