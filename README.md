# Portfolio
Let's make a portfolio starter
[![Maintainability](https://api.codeclimate.com/v1/badges/bb9790dea78f99c5e28d/maintainability)](https://codeclimate.com/github/bastienrobert/portfolio-starter/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bb9790dea78f99c5e28d/test_coverage)](https://codeclimate.com/github/bastienrobert/portfolio-starter/test_coverage)
[![Build Status](https://travis-ci.org/bastienrobert/portfolio-starter.svg?branch=master)](https://travis-ci.org/bastienrobert/portfolio-starter)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/bastienrobert/portfolio-starter)

## Setup
- Fork this repository (https://github.com/bastienrobert/portfolio-starter/fork).
- Go to config.rb, find the  config[:host] line and edit to set your website URL. Commit & push.
- Then, go to https://netlify.com and create a new website. Connect with Github, select the repository.
- Once it is in production, go to the Netlify admin pannel, Settings > Domain Management and follow the instructions.

## How to use ?
### Projects
Add your projects to data/projects.yml. You can add your own custom fields.
In the example, EN & FR are arrays. Set your text to able it to be translated. Images doesn't need to be translated, so it's in a separate array.

### Images
If you want to include images, go to source/images, create a folder named as your project slug in the default language.
Use the following helper :
```
<%= project_image(project, 'main.jpg', {OPTIONS}) %>
```
- *Project*: your project data
- *'main.jpg'*: the image
- *'cover image'*: your alt (project name will be added before this)
- *'options' array*: your options, like the class, the alt, or other things like that. 'Alt' is formated like that : _project name + alt property you pass in the array_

### Locales
| Project locales | data/projects.yml |
|-----------------|-------------------|
| Other locales   | locales/          |

### Current page link
Using [middleman-transpath_aria_current](https://github.com/bastienrobert/middleman-transpath_aria_current) (fork from [thoughtbot](https://github.com/thoughtbot/middleman-aria_current)) use the `<%= current_link_to "Label", "THE KEY OF THE PATH YOU SET IN LOCALES" %>` helper and when you'll be on the same path, the link gonna get the aria-current attribute.

### Path translation
You can use it to translate each path to another language. The utilisation of this gem is a bit difficult, but useful when you get it. [Check the documentation](https://github.com/bastienrobert/middleman-transpath) and [the wiki](https://github.com/bastienrobert/middleman-transpath/wiki/) to know more, examples will help you a lot.
