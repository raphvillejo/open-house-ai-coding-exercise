# Directions

**Backend**: I utilized Node and Express, creating a single **REST** endpoint to retrieve all communities from the OpenHouseAI communities and homes API.

- The OpenHouseAI API URL is read from a .env file.

**Frontend**: Using React and its included _create-react-app_ skeleton (located at `/client`), I built the following:

I implemented a search bar for users to input a community name for searching. Using the input string, it makes a call to the Node endpoint to look up communities. The search works without the user needing to click a button.

The community results are displayed to the user. The information for each community is presented as follows: the community's image, name, group and the average price of homes based on their community ID.

When the user clicks the image, it also displays in the modal. The modal can be closed either by clicking the 'x' button or outside the modal.

# Getting started

Please create a .env file in the root folder and add the following content:

OPENHOUSEAI_COMMUNITIES_API_URL=https://storage.googleapis.com/openhouse-ai-fe-coding-test/communities.json
OPENHOUSEAI_HOMES_API_URL=https://storage.googleapis.com/openhouse-ai-fe-coding-test/homes.json

With the latest Node LTS installed, run the following commands:

```bash
cd ./client
npm install
cd ..
npm install
```

To start the Node/React servers, from the project root just run:

```bash
npm run dev
```

You should now have:

- A Node server running on port **3001**,
- A create-react-app server running on port **3000**

# NPM Packages installed

- dotenv
- axios
- cors
- tailwind
- express

If given more time, I would enhance the quality to achieve a more professional and polished appearance.

# Note: I added search functionality in case the user wants to search for a specific community. I didn't implement the "onchange" event for text because, in the future, we might have a large number of communities, and it may not be ideal. Users can press "Enter" to search for a community name.
