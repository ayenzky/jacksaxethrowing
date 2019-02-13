---
title: Headless CMS and Content as a Service
shortdesc: "A radical shift away from Monolithic CMS systems like Wordpress, Drupal, Concrete5 and Joomla"
updatedDate: 2018-10-12T04:46:40.835Z
cmsUserSlug: ""
banner: /img/uploads/android_resized.png
leadtag: null
metadesc: null
metakeywords: null
categories: "jamstack, headless cms"
date: 2018-07-25T16:00:00.000Z
author: Philippe Bodart
---

A Content Management System (CMS) as we know was created back when users browsed the internet using desktop browsers. And with the growing popularity of the internet came a content explosion. The monolithic CMS, as this is quite often called, seemed for a long time like the best way to handle content. But as technology shifted away from desktop and page-centric browsing to become more mobile, the CMS started to suffer from technical debt.
One way of trying to solve the problem, is adding an API to a monolithic CMS. This is a band-aid repair. The quick fix does nothing to repair the fundamental problem, which is the enormous underlying technical complexity of a CMS initially designed for a past area. Very often solving problems that are are no longer a problem when building content-rich websites and web applications. 

# What makes a CMS Headless
It is a kind of metaphor, whereby the presentation layer is the head and the content is the body. So if your CMS only handles the content, and not the presentation layer it is de facto headless. The CMS acts as a specialized database, with and interface that allows editors to create and nurture content, that can be used and re-used by all types of clients. It allows developers to build clients on basically any tool. The client connects to the CMS API, fetches the content it needs and the client takes care of the presentation layer.  
Most pure play Headless CMS are 'cloud native'. They are only available as cloud services, not as software. Most of them are proprietary and behind some sort of paywall. The different packages you can choose from are very technical, non-transparent and do change quite often. A lot of these services start out with good FREE tiers, but are closing down on these FREE tiers as soon as they get some traction. The content-as-a-service approach simplifies scaling, monitoring, backups etc - while sacrificing flexibility and control. The idea behind Headless CMS pretty much scales down to avoiding coding in the CMS, and use an API instead - this combinations gets you off the block pretty fast, at least from the perspective of producing and delivering raw content. 

# The Headless CMS battlefield
**[Contentful](https://contentful.com)** - Contentful is recognized as a pioneer in the Headless CMS industry. Contentful offers a matured REST API with a matching development kits for just about any language. Watch out for the pricing model as it can quickly become expensive for high traffic solutions.

**[Sanity](http:/sanity.io/)** - A newcomer to the cloud-native Headless Space. The UI (Content Studio) is open sourced, and with that piece of software that you can self-host, you have a have a collaborative editing environment in React. The data is stored in real-time in a Hosted back-end and can be queried through GROQ (Graph Oriented Query Language) and soon GraphQL. 

**[Directus ](http://getdirectus.com)** - Open source, API-driven content management system, that can be self-hosted or hosted by Directus. 

and many more that are popping up every month, even week.

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

#### GET EARLY BIRD ACCESS TO[ WEBRIQ GLUE](http://webriq.us) 













