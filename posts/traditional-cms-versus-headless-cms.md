---
title: Jam Stack your monolithic CMS system in to the Closet
shortdesc: "Jam Stack is a set of development techniques that creates custom made websites that fit your needs, whether they are small needs or bigger needs. It is fast, easily scalable, has a far better user experience and is more secure. And the techniques have gained quite a bit of momentum recently."
updatedDate: 2018-09-19T05:02:33.046Z
cmsUserSlug: traditional-cms-versus-headless-cms
banner: /img/uploads/maxresdefault.jpg
leadtag: Traditional CMS versus Headless CMS
metadesc: The many advantages of the Jamstack and a headless CMS approach
metakeywords: "Headless CMS, API CMS, GIT CMS, Wordpress"
categories: "Jamstack, Static CMS, Wordpress"
date: 2018-09-18T16:00:00.000Z
author: Philippe Bodart
---

In an ideal world, each company should have a custom made website with dynamically generated content backed by a CMS. It would be light-weight, deployed once per update, band updates by a tool that just does the updates, not everything. It would be rendered statically through a Content Delivery Network (CDN) just as your video streaming from Netflix or Hulu. 
Having a Jam Stack website is fun and all, but how would a non-technical person edit content there? As always, there are multiple solutions available. 
A better approach would be to choose one of the many available CMS systems, that are suited to go with the Jam Stack.

## API Driven CMS
The typical way to build a CMS-powered website is to choose a fully-integrated solution like WordPress and build your website as a collection of tightly embedded templates. Or if you want more control, you build your own integrated CMS using your preferred tech stack.

An API-based CMS, also known as a headless CMS, is a relatively new approach to content management with many advantages over the “old” way. API-based CMSs, such as Contentful, Directus, Strapi or Prismic, allow you to build websites and apps that are decoupled from their content management tools and integrated via API. This gives you the flexibility to build your front-end using your preferred tools (eg. Gatsby, Spike, React, Node, Angular) while being able to integrate a customized, robust CMS with ease. An API-based approach can save a team significant time and money in the initial implementation as well as ongoing maintenance.

In a nutshell, API-based CMS’s offer all the same editing capabilities of traditional CMS’s, but are significantly easier for developer to setup and maintain. This means your developers and content writers spend less time and money working on your CMS, and more time focusing on things important to your business.

Here’s a table comparison:

|                           | Traditional CMS                         | API Based CMS |
| ---------------------- | ----------------------------------------------- | -------- |
| Setup       | Website must be built on top of CMS, requiring you to learn and build your website based on CMS rules and processes| Add CMS functionality where needed with just a couple of lines of code  |
| Hosting     | Requires a database and specific server hosting     | Requires no database and no-hosting     |
| Complexity     | Content, CMS code, and website code co-exist and intertwine to create complexity and interdependence      | Content exists separately and is rendered within website codebase via simple API calls.    |
| Flexibility     | Website must be built in a specific programming language or framework.    | Integrates with any codebase.   |
| Maintenance            | Security upgrades, database backups, etc.   | None    |



The biggest advantage in my eyes while using API Driven CMS is to not have to care about a CMS at all. It should provide data, give your user the ability to edit their Website/App/Content easily in any way - and maybe (only maybe) provide some automation like image optimization, plugins or/and localization to make life easier and more efficient. 

This API Driven approach is used by [WebriQ GLUE](http://webriq.us). It’s a CMS that allows you to create an API for your website, without coding. It doesn’t require a static site generator to work. With this approach, we will have to send asynchronous requests to our API on each website visit, to always serve fresh content. WebriQ GLUE is gluing together the entire workflow of dynamic content updates, and rebuilding the site each time an update occurs -- the site is statically rendered and served uniquely to each individual viewer through a content delivery network. Totally safe and secure.

## Git-Based CMS 
A GIT based CMS solves common version control and integration challenges of the JAM Stack by delivering a natural authoring experience on top of GIT for non-technical content writers. 
In a nutshell, GIT based CMS systems are typically open source content management system for your Git workflow that enables you to provide editors with a friendly UI and intuitive workflows. You can use it with any static site generator to create faster, more flexible web projects. Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.

The core advantages are;

Fast, web-based UI: With rich-text editing, real-time preview, and drag-and-drop media uploads.
Platform agnostic: Works with most static site generators.
Easy installation: Add two files to your site and hook up the backend by including those files in your build process or linking to a Content Delivery Network (CDN).
Modern authentication: Using GitHub, and JSON web tokens.
Flexible content types: Specify an unlimited number of content types with custom fields.
Fully extensible: Create custom-styled previews, UI widgets, and editor plugins.

The GIT based concept is used by [WebriQ goes Mad](http://webriq.services). This CMS work as a Graphical User Interface for GIT. You can write posts through an admin panel, and under the hood, after saving, the CMS will commit your post to the code repository, and trigger a re-deploy of your website. A Git based CMS is simpler to set-up, update and maintain and is the preferred solution for companies that have no or little in-house content management resources. 

An outdated website can dramatically decrease conversions. Retro, cluttered designs distract visitors from the conversion point; lack of modern upgrades can make a client lose faith in your business. You may not need all latest trends mentioned. But what you must have is a super fast, secured, reliable and scalable website that is designed for Mobile Browsers First and that can work offline in poorly covered areas . 
The choice between hiring a web agencies or an individual developer comes down to budget $$$$. Again in an ideal world you would hire a web agencies for all design and marketing aspects and a talented individual developer that is up to date with the latest web development techniques. Beyond the cost will be the time you as a busy entrepreneur will have to spent on gluing the project together to a workable day-to-day solution. 

A potential middle ground is [WebriQ goes Mad](https://requestforquote.webriq.services/), with its pioneering Web Design as a Service Concept (WDaaS). WDaaS provides a fundamental change in the service of web design. With WDaaS businesses can create stunning websites, landing pages, and sales funnels, without the labor and frustrations of Do-It-Yourselves tools nor the expense of a marketing agency. So you get the services of a web agency and a developer at the cost of the developer. 

<iframe src="https://player.vimeo.com/video/281370558" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
<p><a href="https://vimeo.com/281370558">This Is WebriQ Goes Mad</a> from <a href="https://vimeo.com/user87627294">Alex Belding</a> on <a href="https://vimeo.com">Vimeo</a>.</p>




























