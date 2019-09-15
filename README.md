# Project Name
Vue Api Test

## Description

Vue Api test with vuex, modules, routes, components and views using mock data.

## User Stories

- **homepage** - As a user I want to be able to access the homepage and to have access to inhabitants.
- **inhabitans** - As a user I want to be able to access a inhabitant list.
- **inhabitan** - As a user I want to be able to access a inhabitant detail.
- **filter** - As a user role I want to be able to filter inhabitants by gender.

## Backlog
- Improve HTML and CSS style.
- Create a proper error page.
- Create a cache gallery. 

## ROUTES:
- index.js
- GET /home 
  - renders the homepage. 
- GET /inhabitants
  - renders inhabitant data list.
- GET /inhabitants/:id
  - renders inhabitant data with id provided.

## Mock Data
- Inhabitants: https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json

## Packages
I could use vuetify to show inhabitants list, inhabitant detail or filter but I prefered use basic tag to do it.

- Vuex
- Vue-router
- Vuex-router-sync
- Axios
- Dotenv

## Vuex
Inhabitants list is cached to avoid fetch any time the data using the vuex store.

## Filter
- Gender
    - It is possible to filter by Gender. Odd -> Male, Couple -> Female.

## Task list
1. Installation and configuration.
2. Create basic files.
3. Create homepage and links.
4. Create routes files. 
5. Create api file.
6. Create view inhabitants. 
7. Create inhabitant detail .
8. Create filter.

### Git

[Repository Link](https://github.com/esaujc/vueTest01.git)

