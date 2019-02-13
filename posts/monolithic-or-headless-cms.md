---
title: Monolithic or Headless CMS
shortdesc: "It can be a bit daunting to manoeuvre in today's world of Content Management Systems. CMS systems have been around for a long time, most of them providing different ways of authoring and structuring content for a website. "
updatedDate: 2018-12-26T04:42:22.256Z
cmsUserSlug: monolithic-or-headless-cms
banner: Enonic-headlessCMS
leadtag: Headless CMS
metadesc: Headless CMS systems compared with Headless CMS
metakeywords: "Headless CMS, CMS, Wordpress, Drupal"
categories: null
date: 2018-12-25T16:00:00.000Z
author: Philippe Bodart
---

## What is a Monolithic or Legacy Content Management System?
In recent years, commercial CMS platforms have been targeted more to CMOs, by focusing heavily on marketing-specific technologies. Open-source platforms have focused much more on extensibility, making them truer “platforms” in that they can be easily built upon. Commercial “products” haven’t focused on extensibility as much as they have on feature sets that help them demo and sell licenses more easily. But one thing is common across all of these options: They’ve become more and more bloated as they try harder and harder to accommodate more use cases.

Traditional CMS systems are called monolithic because they pack all functionality, presentation and assumptions of how you work in one single system. They are called legacy because they have been around for quite a while, are build on old(er) technology stacks. In the last 5 years, the traditional CMS landscape has not evolved much - both CMS technologies as well market maturity remains unchanged. There is hardly any innovation from traditional CMS vendors. Although some vendors have added support for APIs and cloud services most have not even bothered to adapt with changing technology landscape. Case-in-point, most enterprise CMS vendors lack robust full-site content delivery network (CDN) integration. In fact, CDN support is often limited to static assets not realizing that with the arrival of HTTP2 domain sharding is a thing of past. 
When it comes to innovation, most of CMS solutions are constrained by their legacy architecture (read strong coupling between content management and content presentation) which makes it difficult to serve content to new types of emerging channels such as apps and devices. API support is critical for innovation but it needs to be a first-class citizen and not afterthought. In addition, traditional CMS solutions lack integration with modern software stack, cloud services, and software delivery pipelines. Possibility to apply continuous integration (CI) and continuous delivery (CD) concepts with a traditional CMS is mostly unheard-of. At the core, a traditional CMS is a monoliath. Any organization pursuing micro services strategy will find hard to fit a traditional CMS in their ecosystem.

## What is a Headless CMS?
A headless CMS has no presentation layer and makes content available through  APIs. With a headless CMS, the task of the content presentation is performed by an external client consuming APIs exposed by headless CMS. Here are few examples of an external client utilising the APIs exposed by a headless CMS: static site generator (SSG), single page application (SPA) (client-side as well as server-side rendering), a mobile app, a WordPress site, or an IoT device. These are usually called “Headless” or “API-first” CMSs. Some of them market themselves as “Content infrastructure,” “Content Hubs” or even “Content as a Service.” However, when you take a closer look, they all pretty much boil down to some database backend with a web-based user interface, where you access the content through an API. But WTF is an API?

## What is an API?
API stands for Application Programming Interface, which in this context means that you get content in a way that is easier to integrate with existing or new software solutions. Usually, you do this by sending a network request to an endpoint. This network request is pretty much the same thing you do when visiting a webpage, e.g., https://yourdomain.com/api/posts/, but instead of a web page, you get a list with the post’s contents back.
Developers can use this information when building software, be it an app, a voice interface, or a webpage. Most of today's developers are used to programming with APIs and prefer them because it leaves them in control for how to build their systems. Some CMSs also allow changing content through APIs. API is a pretty generic term and goes beyond the world of CMSs and the World Wide Web.
Most Headless CMS systems will expose their content through a REST API. REST APIs can be great for simple data structures but tend to get tedious and time-consuming to use when your content models are more complex. It's also a more laborious exercise to change or fit these APIs for different uses.
Facebook developed the API standard GraphQL as a response to the less flexible REST convention. GraphQL lets you query the API with the fields and relationships you need for each occasion, almost like what you can do directly with a database. It's also easier to implement new fields and content types as your system matures.

## Headless CMS will render its content through APIs and Application Delivery Networks
A CDN has become a lot easier and cheaper. Now a day there are so many options - Amazon CloudFront, Cloudflare, Google CDN, Azure CDN, Edgecast, Fastly, and the list goes on. Gone the days when you required to have big fat-contract with Akamai. With most of CDN services, you can start small and pay as you go. Having a CDN in front of origin (static site or APIs) reduces the global and regional latency. This is achieved by caching content (static HTML page, assets, APIs) at a large number of geographically distributed edge locations. In addition, CDNs scale really well - we are talking about 5-10k concurrent requests without any issues. To protect origin server from request overload some CDNs also support origin shield - an additional caching layer between edge and origin servers. Typically, this mid-tier caching is a designate edge or pop location closer to your origin server and other edge servers query origin shield rather than origin directly.
Hosting companies like Netlify refer to their CDN infrastructure as Application Delivery Network (ADN), which has no distinction between edge and origin servers. This is primarily to support the atomic deploy model and instant cache invalidation so that there is no risk of stale content or inconsistent state. With ADN, switching between multiple version of a static site is as easy as changing symlink to a directory. Atomic deploy model can be extended to advanced functionalities such as staging, instant rollbacks, phased rollouts, and A/B testing. Many conventional CDNs are unable to support some of these features due to restrictions and limitations around the instant cache purge. For example, some CDNs rate limit the cache invalidation, while others charge for each cache invalidation request.

## What can you expect from WebriQ GLUE
We have been designing and developing websites and web apps for a long time, and we have seen all the deficiencies of project based pricing, per hour pricing, unknowns in devops, unknowns in maintenance, overruns, delays etc.
We have developed a very opinionated way of implementing websites, ecommerce carts and webapps and we completely moved away from a monolithic, legacy and centralized approach. We believe in a decentralized approach whereby each software component is chosen for it’s best in class, but at the same time replaceable with a newer best in class if needed. Where we can not find a best in class critical functionality that is open sourced, we develop it ourselves, i.e. WebriQ Forms.
We are strong supporters of the API economy and we strongly believe in microservices when it comes to functionality and automation.
We aim at 100% serverless operation, and we know how to do that and we aim at 100% uptime, and we know how to do that.
We are highly specialized, and opinionated when it comes to the technology stack used.

## A couple of showcases of WebriQ GLUE
[Count on Kindness Global](http://countonkindness.global) and https://registry.countonkindness.global/ is a global combined website and small business registry. It is a website and a registry where all living beings will be noticed, will be heard and will belong. To be eligible to the Count on Kindness Registry, Just be kind. Be willing to open your doors to people of all cultures, ages, genders, skin colors, sexual preferences, and faiths, removing all fear of discrimination and separateness.
The website and Registry are build on Strapi headless CMS and GatsbyJS as Javascript framework. Combined with Algolia Search it delivers a website that is behaving like a web application. No complicated deploys with databases and servers, just a bunch of files that can be deployed easily on dozens of services. The site loads superfast, scales to the Internet and is unhackable. 

[The Anzac Day Commemoration Committee](http://anzacday.org.au) is a non-profit organization in Australia. “ANZAC” was the name given to a combined force of First Australian Imperial Force and New Zealand Army troops who landed on Turkey’s Gallipoli Peninsula at around dawn on Sunday, the 25th day of April, 1915, barely nine months after the outbreak of World War I. On every 25th day of April for the past 100 years, “ANZAC Day” has been observed in Australia and New Zealand, becoming an honoured and sacred institution along the way. The site includes a host of information about the origins of ANZAC Day, the Spirit of ANZAC and gives an overview of the conflicts in which Australian Defence Force personnel have served in times of war and peace.
The website and shopping cart are build on Strapi headless CMS and GatsbyJS as Javascript framework. It delivers a website that behaves like a web application. No complicated deploys with databases and servers, just a bunch of files that can be deployed easily on dozens of services. The site loads superfast, scales to the Internet and is unhackable. 














