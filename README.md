# Minion

Minion is a tabletop RPG (D&D) table-side helper. It's not intended to replace sitting at the table with your friends or facilitate playing online; it's just a tool to help keep track of things at the table.

The goal is to easily track and present the most crucial information necessary when running encounters in a typical D&D session. This includes character and monster stats, initiative order, and any ongoing effects that may influence the encounter.

The vision is for a client-server system running in real time that can have a master DM view and a limited/read-only "player" view. Changes made by the DM will be broadcast/pushed to the player view.

Along the way, I'll be learning a bunch of new skills.

---

## The Plan

1. Get the basics up and running.

  a. Build system
  
  b. Some kind of API server to deliver the JSON data
  
  c. Integrated unit testing

2. Monster Library
  
  a. Get a list view up and running that will read in the JSON data and display the monster library.

  b. Incorporate a quick search feature to filter on the monster names

3. Encounter View
  
  a. Allow the user to add/remove/edit actors in an encounter (CRUD)
  
  b. Basic info: Name, Type, Initiative Modifier, Initiative, AC
  
  c. Automatically reorder the list in initiative order
  
---

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

