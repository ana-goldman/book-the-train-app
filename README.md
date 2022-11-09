[![Netlify Status](https://api.netlify.com/api/v1/badges/0547d78c-8a44-434d-8c45-30c9f379bbe2/deploy-status)](https://app.netlify.com/sites/voluble-blancmange-42cf3f/deploys)

# Railway ticket booking system

### Brief description of the task of the thesis:
Create a React SPA for a railway ticketing service, made according to [ layouts in Figma ](https://www.figma.com/file/0vk5ji7mI2Beb1qvCrqEUC/%D0%97%D0%B0%D0%BA%D0%B0%D0%B7-%D0%B1%D0%B8%D0%BB%D0%B5%D1%82%D0%BE%D0%B2-(Copy)?node-id=0%3A1)

Deploy can be found [here](https://636bde95d2f32809389acf2c--voluble-blancmange-42cf3f.netlify.app/)

## Description

### Basic elements
1. Carriage
1. Direction
1. Direction group
1. Seat (ticket)

### Carriage
1. Carriage types: сидячий, люкс (СВ), купе, плацкарт
1. Each type of carriage has its own seating chart.
1. Each car has its own ticket price.
1. For each carriage there is a choice of additional services:
linen, air conditioning and Wi-Fi.
1. For some carriages, the cost of linen is included in the ticket price
(the cost of linen should not be added when forming the final cost of the ticket).

## Direction
1. Direction - the way the carriage moves from one city to another.
1. The direction involves the movement of the train only in one direction.
1. A destination has a departure date and an arrival date.

## Direction group
1. Used to enable travel from one city to another and back.
1. Combines two directions

## Seat (ticket)
1. Has its own number on the carriage map
1. May be occupied by another passenger
1. Assigned to a specific direction

### [API](https://fe-swagger-test.herokuapp.com/)

### Start the app with `yarn install`, `yarn build` and `yarn start`
