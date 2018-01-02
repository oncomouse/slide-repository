# slide-repository

## Setup

### Dependencies

* [Ruby](https://www.ruby-lang.org/)
* [Bundler](http://bundler.io/)

### Instructions

To install, run `bundle install` from a Terminal.

To start the development server, run `bundle exec middleman` and visit [http://localhost:4567](http://localhost:4567).

### Tips for Installing Ruby & Bundler

Starting from scratch with Middleman, you will need to install [Ruby](https://www.ruby-lang.org) (I *strongly* [recommend using RBenv for this](https://github.com/rbenv/rbenv).) and [Git](http://git-scm.com/).

Once you have Ruby, run `gem install bundler` from a Terminal, to install the package management utility used by this package.

## Configuration

The configuration file for this repository is [`config.rb`](config.rb). There are a few configuration values at the top of the page you can (and possibly should) change.

The line that reads `set :build_http_prefix, "/slides"`, "/slides" should be set to whatever the root directory on your remote server is. For instance, if you are deploying to "http://myawesomesite.com", the value of `:build_http_prefix` would be set to "" (for no directory). If it was "http://myawesomesite.com/myawesomeslides", the value should be "/myawesomeslides" as there is now a directory.

Read the "Deploying" section (below) for an explanation of the other options.

## Setting Up Twitter (optional)

The file `data/config.yaml` contains all the default configuration values used in this package. At the moment, that is just default information for Twitter. You can set the default Twitter account to display on slides and which slide to start on, there. You can also set this information on a slideshow-by-slideshow basis, below.

## Creating Slides

Slides go in the `source/` directory and have to have an extension of `.html.md`. So, for instance, a file named `source/foobar/my-slides.html.md` would have a url of `http://localhost:4567/foobar/my-slides.html` on the development server.

Files are written in Markdown and have a YAML metadata block at the top. This block is set off by `---` at the top of the file and after the block, so a new slide file might start with this:

~~~markdown
---
title: Sample Slides
---
# First Slide
~~~

The software uses RemarkJS to render slides. Read more about how to make slides using [RemarkJS](https://remarkjs.com/#1) by visiting their website.

Here is a quick [YAML tutorial](https://learnxinyminutes.com/docs/yaml/).

### YAML Metadata Keys

You can configure slide shows with the following keys in each slide's metadata block:

* **title** – Set to the title of the slideshow
* **twitter** – Set to `true` to add Twitter information at the bottom right of each slide
* **twitter_name** – Set to the Twitter name to display (don't need to include an "@")
* **twitter_name_start** – Set to the first slide on which to display the Twitter information
* **progress_bar** – Set to `true` to display a progress bar instead of the default "X/XX" slide numbers

## Styling Slides

There are a lot of customizable aspects of slides. It is recommended to take a look at [`_remark-utilities.scss`](source/stylesheets/_remark-utilities.scss) to see everything.

CSS classes, which is how we customize slides, can be added by adding a line that begins `class: ` to the top of each slide in the markdown file. See [RemarkJS's explanation](https://remarkjs.com/#11)

An example styled slide:

~~~markdown
---
class: f25px

This is 25px tall font!
~~~

You can also style block elements on the slides, see [RemarkJS's explanation](https://remarkjs.com/#12). Here's an example:

~~~
.pull-left[

I am in the left column!

]
.pull-right[

I am in the right column!

]
~~~

Some useful slide customizations:

* **Change font size** – Add a class of the form `fXpx` (where X is a number from 5 to 150) to change the font size on a slide
* **Invert slide colors** – Slides default to black text on a white background, but the `inverse` class will invert the theme (white on black).
* **Syntax highlighting** – This software uses Highlight.js for syntax highlighting. You can attach any of the HLJS themes to a slide with code to change the formatting. HLJS's [demo site is here](https://highlightjs.org/static/demo/).

Some useful block customizations:

* **Two column layout** – Two even columns can be created by wrapping Markdown blocks in `.pull-left[]` and `.pull-right[]`.
    - `.left-column[]` and `.right-column[]` create a 1/4 & 3/4 division of the slide.
* **Phantom** – If you would like to have something take up space but not appear, wrap it in `.phantom[]`. This is useful for vertically centering things that have not appeared yet.

## Deploying

Once your slides are set up (and everytime you have slides to share afterwards), you can run `bundle exec middleman build` to build your slides for deployment.

However, there are some configuration options to think about first. Most importantly, will you be deploying to GitHub Pages (recommended) or another site, something you own?

### GitHub Pages Deployment

To deploy to GitHub Pages, you must first have this repository on your GitHub account (you can just fork this one and rename it to "slides" from "slide-repository" to have "https://*yourusername*.github.io/slides/" as your website).

Once you have [forked](https://help.github.com/articles/fork-a-repo/) and [cloned](https://help.github.com/articles/cloning-a-repository/) your slide repo to your local computer, edit [`config.rb`](config.rb). The fifth line of the file, which reads `set :build_dir, "build"` should be changed to `set :build_dir, "docs"`.

If you run `bundle exec middleman build`, a `docs/` directory will be created with your built slides. Run `git add docs` to add it, run `git commit -m "New Slides"` to commit it, and run `git push -u origin master` to push it back to GitHub.

After this has completed, follow the steps [here](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/#publishing-your-github-pages-site-from-a-docs-folder-on-your-master-branch) to select the `docs` folder as the source for GitHub Pages. After you do that, wait a few moments, and your site should be live.

### Other Sites

If you can SSH into your server, you can use this deployment method. You will need to edit [`config.rb`](config.rb) after you have downloaded the repo. On the sixth line of the file, change `set :use_mm_deploy, false` to `set :use_mm_deploy, true`. Remove the `#` at the start of lines 7 through 9 to uncomment these values. You will need to change `:mm_deploy_host` and `:mm_deploy_path` to the values on your server. You may need to talk to your tech support to figure out these values.

Once this is configured, save the file. Run `bundle exec middleman deploy --build-before` will build the site then deploy it. You will be prompted for your account password and then the site will deploy.

If you cannot get middleman-deploy, the program that handles this deployment method, working, you can manually SFTP or FTP the content of the build folder to the location you would like on your server.