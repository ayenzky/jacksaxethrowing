---
title: WebriQ Technology Stack - The Glue of the JAM Stack
author: Philippe Bodart
banner: /img/uploads/1_udwr6iopiem_vyoexbvbhw.png
shortdesc: We have been building websites on the JAM Stack for over 2 Years. Wanted to share with you our latest implementations and technology choices for the JAM Stack.
updatedDate: 2018-07-18T07:51:09.904Z
cmsUserSlug: glue-of-the-jam-stack
date: 2018-06-20T16:00:00.000Z
categories: "headless cms, git based cms"
---

# Things to Remember
## JAM Stack is a Concept – Not a Library
So often, I speak to non-tech-savvy executives who ask me questions such as: “Will you use the JAMstack library?” Well, it isn’t a library, but a collection of tools tied together as a concept…

It’s important to know the difference because confusion about what it can or can’t do will influence the conversations you have with developers. Much like “Progressive Web Applications,” which was another set of guidelines but not a library, JAMstack isn’t any one set of code. Rather, it’s an approach to solving problems.

That is a big distinction versus, say, Node.js, which is a library. JAMstack can involve any number of different technologies or methodologies and still be within the realm of what the concept encompasses.

## One Size Doesn’t Fit All
JAMstack may sound amazing, and in many ways, it is a groundbreaking new way of looking at web development, content delivery, and web hosting, but it doesn’t fit for all scenarios.

As I mentioned above, the best way to know for sure is to undergo a thoughtful, comprehensive discovery process to get a sense of how your website or application should be built. It could be that your site would benefit from the current norm, such as a monolithic system. Or perhaps JAMstack is, in fact, right up your alley.

Technology choices should always be made based on business requirements, not what’s hot at the moment. Developers are way too often skewed toward always recommending the hottest and trendiest platforms and methods. Always offset those opinions with your own due diligence and the advice of an expert practitioner who is not married to any one approach.

## Tendency to move away from monolithic CMS Systems
Drupal , WordPress and SquarSpace are  traditionally “monolithic” CMSs, with presentation baked in via the theme. However, due to the need for more flexibility and freedom, many companies have begun decoupling the CMS, using it for content management, editorial, and administrative tools, while implementing a separate frontend component that communicates with the CMS via API.
Decoupled CMS architecture (aka “headless”) is rising in popularity in the development world. This model allows breakthrough user experiences, gives developers great flexibility to innovate, and helps site owners future-proof their builds by allowing them to refresh the design without re-implementing the whole CMS. With all this upside, it’s no wonder this type of build has gained serious traction in the business community as of late.

# Digital Trends in Business
## We now live in a multichannel world
51.3% of people now spend more time searching the Internet on mobiles than on desktops.
US Consumers use on average 3.5 connected devices each.
Augmented reality and virtual reality (AR/VR) market will grow from $5.2b in 2016 to more than $162b in 2020.

## We need a new way of managing content in this multichannel world
We’ve been using traditional web-oriented CMS systems for years. But the new multichannel era requires a different approach to managing content. 
In the new multichannel world, your content may be consumed on any number of devices. If you do not want to miss the opportunity of truly engaging with your customers, 
you need to make sure your content is ready for multiple channels. This requires a whole new mindset in structuring, organizing, managing, and presenting content.

## Microservices
Microservices represent one of the major shifts in software architecture. Today’s systems are increasingly built as a combination of both internal
and external services connected via their API.
In the past, companies used to build websites on top of monolithic CMS platforms which meant they were locked in with a single vendor.
When they decided to change their CMS, they had to throw away their investment and start pretty much from scratch.
The new generation of CMS systems are built as “headless” or “API-first”, which means they can be easily integrated into any application, no matter
what technology it uses.

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