// ESSENTIALLY SCRAPPED. NEW DESIGN IMPLEMENTED IN DB.JS
// so for the hardcoded algorithm i think we just want to serve users random levels that are weighted towards ones with a higher playtime to views ratio
// when we scale, we're assuming that we can only hold small n levels in memory in the server but big N levels in the database, where N is very large.
// so we should store a "difficulty" for each level and a "rating" for each player. They are both 0-10 floats.
// You only gain/ lose rating if you beat a level. Difficulty goes up a little bit every time a user skips a level, and is calculated formulaically if beaten.
// If you beat a level, the amount of deaths you have is sent to the server. There is a target amount of deaths determined by a lookup table taking in the delta of your ratings
// something like:
const ratingDeltas = [
    /*-5*/100000,
    /*-4*/1000,
    /**...*/
    /*+4*/1,
    /*+5*/0,
]
// if you're above the target amount of deaths, you lose rating and if you're below, you gain rating. Something like rating *= log(deaths/targetDeaths)
// to get a level, 
// we don't want users to have to log in. So, if they are not already logged in from using another feature, their rating is set to 4 or so
// otherwise, if the client has a localStorage.username and localStorage.hashedPassword, that is sent to the server in a /loginGame request and it's associated with the user somehow.
// levels are served probabalistically based on difficulty. Most levels should be within +-2 of your difficulty, but +- 5 is possible. This will be queried from the db with a range.