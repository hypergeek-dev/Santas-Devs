# Project Title

Brief description of your project, what it does, and what unique problem it solves.

## Table of Contents

- [Introduction](#introduction)


- [Features](#features)
- [User Stories](#user-stories)
- [Installation](#installation)
- [Development](#development)
  - [Card Generator - Creating the Card](#card-generator---creating-the-card)
  - [Card Generator - Sharing the Card Using a Link](#card-generator---sharing-the-card-using-a-link)
  - [Snow Animation Explanation](#snow-animation-explanation)
    - [Front Image Layer](#front-image-layer)
    - [Middle Layer (Snow Animation)](#middle-layer-snow-animation)
    - [Rear Layer (Full Image without Transparency)](#rear-layer-full-image-without-transparency)
- [Testing](#testing)
- [Deployment](#deployment)
- [Accreditations](#accreditations)
- [License](#license)
- [Acknowledgements](#acknowledgements)

The project is deployed and can be accessed at [http://your-deployed-link.com](https://hypergeek-dev.github.io/Santas-Devs/) (Live link).


## Introduction

One or two paragraphs providing an overview of our project.

## Features

List the features of your project. For example:

...

## User Stories

Describe user stories or use cases to give an understanding of the intended user experience.

## Installation

Instructions on how to install the project:

...

## Development

### Card Generator - Creating the Card

- A Bootstrap carousel displays background images for user selection via a dropdown menu.
- The input options allow a user to add a recipient, greeting message, and a sender.
- The chosen background and text can be viewed as a preview window using HTML canvas.
- The chosen design - both image and text can be seen in real-time.
- Users can add text and change text before being ready to share.
- Once ready, they can click the share button to get a shareable link.

### Card Generator - Sharing the Card Using a Link

When the user clicks the 'create link' button on the card generator form, a 
link is created containing the encoded form field values which the user can 
send to the recipient to share the card.  

When the recipient follows the link, their card and personalized message are 
displayed.

A detailed description of how this functionality was implemented can be found 
here: [https://github.com/hypergeek-dev/Santas-Devs/issues/17#issuecomment-1858987879](https://github.com/hypergeek-dev/Santas-Devs/issues/17#issuecomment-1858987879)

### Snow Animation Explanation

I've implemented a captivating snow animation on my website using three distinct layers, each playing a crucial role in creating the desired effect. Let me break it down for you:

#### Front Image Layer

- This is the foremost layer in the animation. It features an image with transparency applied to the window tiles, adding depth and realism to the overall scene.
- The transparent window tiles allow viewers to peer through and see the layers beneath, simulating the idea of looking out from a cozy interior onto a snowy landscape.

#### Middle Layer (Snow Animation)

- The middle layer is where the magic happens. I've utilized JavaScript to craft a dynamic snow animation that gracefully falls from the top of the viewport to the bottom.
- Snowflakes or snow particles gently drift down the screen, creating a serene and wintery ambiance.

#### Rear Layer (Full Image without Transparency)

- This layer serves as the background canvas for the entire scene. It contains the complete image without any transparency effects.
- By positioning this layer behind the others and adjusting its z-index, I've ensured that it provides the static backdrop for the animation.

The use of z-indexing in CSS allows these three layers to harmoniously interact, resulting in a visually appealing and immersive snow animation on my website. It's a delightful way to engage visitors and set a festive mood during the winter season.

## Testing

Outline the testing strategies, frameworks used, and how to run tests for your project.

## Deployment

Mention any details about the deployment of your project, including the live link.

## Accreditations

The front-image used in the landingpage is free of use from Vecteezy.com


## License

```
Distributed under the MIT License. See `LICENSE` for more information.
```


