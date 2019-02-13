---
title: Benefits of Jamstack for customer projects
shortdesc: "On the Internet, change is constant. The biggest change in the web development world is the move away from do-it-all content management systems like Wordpress and the rise of the Jamstack. "
updatedDate: 2018-10-23T04:37:11.075Z
cmsUserSlug: ""
banner: rawpixel-570911-unsplash
leadtag: Jamstack for customer projects
metadesc: ""
metakeywords: "Jamstack, Static websites, CMS Static websites"
categories: null
date: 2018-08-27T16:00:00.000Z
author: Philippe Bodart
---

## Traditional CMS Systems 
At WebriQ we have been building websites with traditional monolithic CMS systems for many many years.
And we have been building CMS platforms based on a one system do-it-all for many years as well. But we also became aware that all these systems are just doing too much. They became cumbersome to build websites on, and they became cumbersome to update, maintain, support and secure. The initial user friendliness got lost, and they reason we got away with it for so long is because we got used to a vdo-it-all dashboard. 
Today things have changed, CMS's come in variant types and numbers, i.e. flat-file CMS, headless CMS, Git based CMS just to name a few. 

## Jamstack and Static Sites are on the rise
Thanks to modern browsers, static site generators, CDNs, and APIs, we’re now seeing web developers transition from dynamic server-side applications to modular, client-side stacks. A significant shift in focus from the  backend to the now powerful frontend.

Best practices for defining a JAMstack project:

Entire website /application sits on a Content Delivery network (CDN) and no longer on a single server
Atomic deploys
Instant cache invalidation
All your data and code lives in repositories
Automated builds

## Jamstack versus traditional CMS workflow
### Traditional workflow

→ Building and hosting are coupled.

→ A user requests a page. The file gets processed and served following a (long) series of interaction between a database, backend code, server, browser, and layers of caching.

→ Core updates are pushed to production servers, often through FTP. Database must be maintained or updated.

→ Content updates are pushed through traditional CMS, like WordPress or Drupal.

### JAMstack workflow

→ Building and hosting are decoupled.

→ A user requests a page. The file is already compiled and gets directly served to the browser from a CDN.

→ Core updates are pushed through Git; the site gets re-built entirely via modern build tools like static site generators.

→ Content updates are pushed through Git or a static site CMS.

### Of course, the latter brings in lots of benefits:

The delegation of server-side & database operations removes lots of points of failures & security exploits.

The static content served via CDN makes for extra speedy user experiences.

The lesser complexity of development reduces costs.

The reduction of bloat & maintenance + refreshing flexibility in work further reduces cost

### Turning technical features into business benefits
Do a speed and security test on testmysite.io and bring up two very similar sites (or the same one)—one static, one dynamic. 

→ Static site = faster site = better user experience & Google rankings = more traffic, more $

A Wordpress website is like a 6 story house of cards, more vulnerable to collapse because it has more parts, more complexity to its structure. A static site, on the other hand? Make it a 1 story house of cards. Super easy to build and maintain.

→ Static site = simpler site = more secure & reliable = less unpredicted expenses, peace of mind

Reduced operational and development costs means hard savings:

“By ditching the the big web server, the databases, the plugins, and the constant maintenance, we’ll save you X thousands of dollars a year.”

### Refuting common objections
More tech-savvy clients may bring up some legitimate concerns. Here are the two objections most frequently seen in online threads.

**1) A JAMstack set up is nice, but I need to handle dynamic features on my site.**

Truth is the JAMstack sites being built today are more hyper-dynamic than static. So regarding that presumed lack of server-side features: with the current API economy and explosion in SaaS offers an interesting à la carte approach. In other words, you can cherry pick the dedicated external services you need and adopt a truly modular development stack. Whatever dynamic information clients need to handle, there's probably something just for that:

Tools like Webtask and Serverless can handle multitudes of backend functions for you.

Tools like Snipcart, Foxycart, Selz, Gumroad and Shopify’s Buy Button can handle e-commerce.

Tools like FormKeep, Typeform, Formspree and WebriQ FORMS—on top of building, deploying, and hosting your project—can handle form submissions.

Tools like Algolia, Google Custom Search, Fuse.js, Lunr.js and List.js can handle search functionality.

And the list goes on and on.

**2) Static CMS are cool and all, but I also need to manage user permissions & editor roles.**

As we'll see in the next section, this is a recurring pain point with many modern "static" CMS. But the fact is some advanced headless CMS like Strapi, Sanity, Contentful, Prismic and Directus already let you manage lots of roles & permissions.

[WebriQ CMS](http://app.webriq.com) is a a GIT based CMS for Static websites that can handle all updates and roles & permissions seamlessly. 

# WebriQ - JAM Stack GLUE
At WebriQ, we have been developing and deploying JAM Stack websites for over two years now. With a [dedicated APP](http://app.webriq.com), we have been able to build, develop, update and manage hunderds of sites.
In this model we are using a Static Site Generator to develop the site, a GIT based CMS system to update the content and a Github repository to store all HTML, CSS and Javascript files. GIT files are pushed to a CDN network. 
Whereas this model does fit well for most smaller projects, it has it's shortfalls when it comes to larger projects or projects with a need for frequent content updates and updates made by a variety of users, content writers and third party contributions 

Since the JAM Stack is more a concept then a real technology stack, we have been contemplating for a while how we could combine the best of the traditional LAMP Stack ideas and the serious advantages and benefits of the JAM Stack. It's what I would call the GLUE of the JAM Stack.

# What are we gluing together
A comprehensive Database (MongoDB) Service
https://www.mongodb.com

A Javascript (Node.js) API Content Management Framework
https://strapi.io

A State of the Art Static Site Generator
https://www.gatsbyjs.org

An ultra-redundant global CDN
https://www.netlify.com

#### GET EARLY BIRD ACCESS TO[ WEBRIQ JAM STACK for ENTERPRISES](http://madmarketing.webriq.services/f/3) 












