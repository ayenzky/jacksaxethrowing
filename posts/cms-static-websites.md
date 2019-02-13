---
title: CMS Static Websites
author: Philippe Bodart
banner: /img/uploads/saas5.jpg
shortdesc: Choosing between a Git-based CMS or an API-driven CMS for managing and updating your Static Website
updatedDate: 2017-05-16T07:40:10.678Z
cmsUserSlug: cms-static-websites
date: 2017-04-26T03:00:00.000Z
categories: ""
---

You are most likely familiar with Wordpress to build a website. Wordpress is using what is called in technical terms the LAMP Stack. Static websites are using the JAM Stack. 
JAM Stack stands for JavaScript, APIs, & Markup; it’s an approach to building websites that allows you to have all the web performance and security benefits of a static website along with the dynamic capabilities of a database-driven CMS.

## **Problems dynamic websites build with f.ex. Wordpress are facing**
Let’s start with web performance. Regardless of how well we optimize everything or how good of a job we do with with perceived performance, dynamic websites are SLOW. This is due to the amount of steps that have to take place in order to display the requested content everytime someone visits a web page.
We’re also at a point where every website being built on Wordpress  is being overwhelmingly loaded with plugins, scripts, and a ton of other overhead that just slows the crap out of what we ship to production. This is in addition to security concerns, expensive hosting, and the ever-changing landscape of different languages a developer must learn to build a website.
So let’s rethink our approach to building dynamic websites and start from scratch static.

## **How Static Websites Differ**
First, what’s a static website? Nope, not a new technology, static websites have been around for ages. That Dreamweaver website you created back in college? That’s a static website. A website made up of HTML pages with pre-populated content.
When a browser requests the URL of a static page, the server returns the static page in it’s entirety. There aren’t calls to a database being made nor content being generated on the fly — the content is already there.
That doesn’t mean we’re putting together every page by hand . There are different tools that address different layers of this technology stack. 

**Faster loading times**

The fact that JAMstack websites don’t have to make any calls to a database makes the loading time exponentially quicker.
Matt Biilmann, founder of Netlify, ran a test of the Smashing Magazine website (which currently runs on WordPress) against a static counterpart he cloned and deployed on Netlify. It resulted in a website that loaded six times faster than the original.

**Solid Security**

If you’re using a popular CMS, you know about the necessary security measures. This is mostly due to the login page being available to anyone with access to the website and some basic knowledge of the specific CMS. With a static website, a login page doesn’t exist.
If you do integrate a headless CMS (more on what a headless CMS is further down) to your static website, tracking the website back to its CMS isn’t as straightforward as it is with a traditional CMS.

**Front-End and CMS are Decoupled**

You don’t have a CMS dictating the way you should structure your content and pages. Not having a CMS tied in to the presentation layer gives you the flexibility of creating anything you want on the front-end while using the API endpoints to pull in content.

**Lower cost of scaling**

We’re not dealing with expensive runtimes or complicated server setups — we’re only dealing with static files being served on the client side. For smaller sites, you can get away with cheap hosting as long as you pair it with a fast CDN.

**Seamless developer experience**

From the developer’s perspective, the JAMstack methodology doesn’t require us to learn a different backend language to build a data-driven website. We’re able to build on our foundation of HTML, CSS, and Javascript to build complex websites.

## What Steps to take to take to build your Static Website

### Step 1: Choose a Host & CDN
The beauty of static websites is that you’re able to host them anywhere. ANYWHERE.
You don’t need a list of server requirements with a certain version of PHP or a specific database. All you need is a host that allows you serve HTML, CSS, and JS for a straightforward development workflow, especially when dealing with staging environments.
I recently started playing around with the idea of moving to Amazon Web Services. I zipped up my website, uploaded it to their server, and boom, my website was ready to go live by just pointing the DNS. Because my website is static, I didn’t have to worry about transferring a database or server requirements. (It took me about 10 minutes to set this up.)
Although you are going to enjoy the flexibility (and affordability) of hosting, specially with larger scale websites, you want to make sure that you’re using a host with a fast CDN to deliver your static files. You have a bunch of options:

**Netlify**

Built from the ground up to host modern static websites, Netlify (they actually coined the term “JAMstack”) understands the static concept and provide a full suite of open source products that are focused around static websites (sorta like the WP Engine of static websites). They’re also the hosting platform behind the new redesign of Smashing Magazine. Plans are relatively affordable but if you have an open source project, they’ll host it for free.

**Amazon Web Services (AWS) S3**

Amazon S3 is a utility storage service that’s used for backups and content storage as well as static websites. This is an ideal hosting setup for a JAMstack website. If it’s your first time creating an AWS account, they’ll provide free hosting for the first 12 months.

**WebriQ**

Using the full capabilities of the Netlify network, WebriQ provides you with a fully self-contained Software-as-a-Service for building and managing your Static Websites. Building tools, content management tools, continuous deployment through Github, SSL certificates are just a couple of important features that come standard with any service. Pricing is quite affordable and starts at $15 per month for a fully managed service. Free service is available at [WEBRIQ APP](http://app.webriq.com)

### Step 2: Decide on a Static Site Generator
In order to avoid creating static html pages manually, you’re going to need a sturdy static site generator.
There are 457 static site generators to choose from. But I’ll help you narrow down the list to the top three contenders below.

**Jekyll**

Built on Ruby and using Liquid as a templating engine; Jekyll was created eight years ago when Github founder, Tom Preston-Werner, was looking to write his own blogging engine. A very well documented SSG with the support of a massive community. It has been the de facto choice for static site generators since static websites began regaining popularity around four to five years ago.
Although Jekyll is simple to setup, the workflow begins slow down when working on larger websites; static pages will still load fast once on the server, but the time for them to get generated locally during development starts becoming painful.

**Hugo**

Built on GoLang using it’s own templating engine; Hugo was created in 2013 by Steve Francia, Docker’s Chief Operator. Although relatively young, Hugo has the support of Smashing Magazine and its immense community; Smashing Magazine announced that they would be ditching WordPress for Hugo in the new iteration of their website. The main reason for choosing Hugo as their SSG was the speed in which Hugo generates its pages. This was something that co-founder, Vitaly Friedman, needed to carefully take into consideration for the large number of posts the website has published since 2006.

**Roots**

Roots is very good at helping to build static front-ends. It is sponsored heavily by Carrot Creative, and makes frequent, highly variable builds quicker and easier for freelancers and agencies. It's a truly excellent framework for quickly and easily building small to medium sized front-ends of any kind.
Roots can handle a huge number of compiled languages, and can be used with many tools that help push static sites as far as possible. For example, it can link with an API, pull in your data, and render parts of it into your views on compile. Then it can render the same or other views as javascript templates and you can push any other data from your API into them on the fly at runtime on the client side in reaction to user actions. And that's just a small taste of its capabilities. You really can do a lot with static sites, and roots is here to push those limits.

***Why is WebriQ using Roots?***

The short answer is because roots was built very specifically for static site builds, so it's cleaner and better than general purpose build tools, since it's specialized to that purpose. The longer answer is that it's a qualitative thing. Much like people would ask "Why should I use snapchat when I can just text a photo" or "Why should I use slack when I already have hipchat?", there is no logical answer other than that the experience is different, and in my opinion, much better -- tailored exactly to what you need. So just try it, and you just might find that you really like it.

As awesome as Static Site Generators are, there are a few problems rooted in the fact that it gets a bit complex for the everyday admin user that’s just looking to publish content. It’s unrealistic for us in the agency world to get non-technical team members and clients to publish content and deploy websites via CLI.
In order to make this appealing to the masses, we need a dynamic layer in our current stack that provides a friendly admin UI…

### Step 3: Select a headless CMS

**Choosing between a Git-based CMS or an API-driven CMS**

With a Git-based CMS you can publish content every time you push changes to Git, allowing for a seamless development workflow. This approach is a bit difficult to scale with content that you want to publish across different platforms, but it will allow for you to have a purely static website. Since it runs on Git, you won’t have a problem finding an open source CMS to work with.

With an API-driven CMS, you’re creating content that will be strictly delivered via APIs. Although you won’t be able to keep track of content changes through Git, you’ll be able to scale your content through flexible APIs. But since you are working on a platform that hosts these APIs (server bandwidth ain’t cheap) these tend to not be open-sourced and rather pricey, but some offer freemium pricing models.

Or use **[WebriQ CMS](http://app.webriq.com)**, which in essence can be an API driven Git-based CMS. 

Exciting times for all front-end developers and for business owners who want to simplify their web operations with secure, reliable and ultra fast technologies. 