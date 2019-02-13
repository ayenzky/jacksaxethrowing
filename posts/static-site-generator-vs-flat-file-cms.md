---
title: Static Site Generator vs Flat File CMS
author: Philippe Bodart
banner: /img/uploads/2-static-sites.png
shortdesc: "Based on the JAM Stack WebriQ CMS is bridging the GAP between Static Site Generators and Flat File CMS Systems. "
updatedDate: 2017-07-17T00:22:17.821Z
cmsUserSlug: ""
date: 2017-06-28T16:00:00.000Z
categories: null
---

**[WebriQ CMS](http://app.webriq.com)** is bridging the GAP between Static Site Generators and Flat File CMS Systems. 
The days when a brand only needed one website to house its online presence are long gone. Today, webinars, events, pop-up shops and product promotions all require their own microsites or landing pages. 
When we moved into what some call the post-CMS landscape, the usage of static site generators and Flat-file CMS and Static Site Generator functionality overlaps in many ways ; so how do you choose between the two? 

When we moved into what some call the [post-CMS landscape](https://developmentseed.org/blog/2012/07/27/build-cms-free-websites/), the usage of static site generators (SSGs) and flat-file CMS for these microsites (and at times for lightweight corporate sites), grew. And now, with the headless CMS hype in full flow, the interest in these front-end solutions is returning.

After listing the [best flat-file CMS](http://www.cmswire.com/digital-experience/15-flat-file-cms-options-for-lean-website-building/) and the [best static site generators](http://www.cmswire.com/digital-experience/15-static-site-generators-to-complement-your-headless-cms/) on offer — it’s time to formally identify what separates these two similar technologies.

What Is a Static Site Generator?
--------------------------------

A static site generator does exactly what it says on the tin: it renders static websites comprised of nothing but static content.

Enterprise systems designer [Craig Buckler](http://craigbuckler.com/) offered this definition:

 “A Static Site Generator combines content and templates into static HTML files. Generation occurs once and the files can be hosted anywhere without server-side languages, frameworks or other dependencies.”

 SSGs compile text-based content files (including markdown or plain text) into HTML pages using templates to determine the layout of the page. The rendered site can then be uploaded to a server, remaining unchanged until the next time the SSG is run, making it ideal for sites that don’t require regular modification.

Because of the way SSGs work, they make ideal companions for headless content management systems, which can handle the heavy content lifting while the SSG acts as the delivery layer.

Their simplicity and agility make them a good solution for enterprises looking to deploy microsites and landing pages. However, they can slow projects down if the site in question is particularly large or image-heavy — [as explained by web architect Stefan Baumgartner](https://www.smashingmagazine.com/2016/08/using-a-static-site-generator-at-scale-lessons-learned/).

Pros and Cons of Static Site Generators
---------------------------------------

### Pros

- **Site Speed:** SSGs don’t require databases, nor do they rely on server-side script processing. You can put a static site on a CDN and let it quickly be consumed worldwide
- **Flexibility:** Developers generally love the flexibility of SSGs because changing the layout or adding another microsite to the content does not require going deep into the internals of the content management system. You’re generally free from traditional content management system constraints
- **Security:** Thanks to the simplistic nature of a static site, hackers and malware bots have fewer loose ends to exploit. Not having any database or any dynamic interpreter running on your servers reduces the risk of hacks
- **Managed Publishing Cycles:** Storing all of the technology parts as well as the content in a version-control system such as Git allows for a flexible publishing cycle. Preparing content in a branch, merging it on demand and putting it out on the servers entails just a few clicks

### Cons

- **Slow at Scale:** Because SSGs render entire sites at once, larger sites can take a very long time to initially deploy. Thus, they aren’t ideal for large sites
- **Dynamic Content Is Out:** By definition, static site generators don’t natively support the deployment of dynamic content — which can be an issue if you want your site to have something as simple as a calendar functionality. For such dynamic content, you’ll have to lean on third-party solutions
- **The Need for Headless:** If you have clients or content editors who are comfortable with coding, you’re safe. But with most content editors being less than tech-savvy, you’ll need a headless or API-driven CMS to help manage your static content more easily
- **No Database:** Going without a database has its benefits, but it also has its disadvantages. Users can’t search and sort through your site, nor can you add things like a blog or forum.

What Is a Flat-File CMS?
------------------------

A flat-file CMS is also a database-less technology. However, they typically come with user interfaces like admin control panels and WYSIWYG editors, which is ideal for less technical marketers and agencies dealing with hands-on clients.

We turned once more to Buckler for a definition:

 “A flat-file CMS allows you to edit website content through a user interface. Most traditional CMS store page data in a database but a flat-file CMS uses files instead. Server code combines content with a template when the page is requested, \[unlike SSGs, which serve pages from one initial rendering\].”

 Flat-file content management systems allow for heightened speed, simplicity, mobility and security. Plus, because they come with a UI, they are an approachable solution for the less technical.

Pros and Cons of Flat-File CMSs
-------------------------------

### Pros

- **Faster Initial Deployment:** There’s no database, so all you really need is a cloud or locally hosted environment and an FTP client to deploy a site. Plus, because flat-files sites aren’t rendered wholesale like SSG-powered sites, initial deployment is typically faster
- **Site Speed:** Like SSGs, the absence of database queries helps flat-file CMS load sites faster
- **Lightweight and Portable:** Flat-file platforms are typically very small in size. So moving flat-file projects from server to server is easier
- **Version Controlling:** Flat-file CMS can be version controlled via GitHub and its competitors, which comes with all the associated collaboration and workflow benefits

### Cons


- **Smaller Communities:** Flat-file solutions never quite get as much attention as SSGs, and this is unlikely to change thanks to various headless CMS vendors recommending SSGs to their clients. Thus, the flat-file community and resulting support is more sparse
- **Not as Fast:** Because flat-file CMS driven sites are rendered upon request, they take slightly longer to load for users in comparison to SSG-powered sites
- **No Database:** Like with SSGs, you pay the price for going without a database. That means you can’t give users the ability to search and sort through your site, nor can you add more technical dimensions to your site, like a blog or forum.



How to Choose Between Flat-file CMS vs. Static Site Generators
--------------------------------------------------------------

If you’re still struggling to choose between a flat-file CMS and a static site generator, Buckler highlighted the differences.  
  
 “The primary difference between the two, is that a flat-file CMS provides a user interface, while a SSG is a developer tool with no interface other than the command line,” he said.

“However, the distinction is not always clear and the two technologies can share certain benefits. For example, a flat-file CMS could potentially run locally and use SSG techniques to render static HTML files prior to upload. Similarly, a static site generator could extract page content generated from any flat-file CMS (or indeed, any database-driven CMS).”

To sum up, a flat-file CMS is typically best suited for agencies with hands-on clients and content editors who require a user interface to produce content. SSGs on the other hand, are ideal for developers who want small, snappy websites, or who are hunting for a delivery layer to accompany their headless CMS.

 **[WebriQ CMS](http://app.webriq.com)** is bridging the GAP between Static Site Generators and Flat File CMS Systems. 
The days when a brand only needed one website to house its online presence are long gone. Today, webinars, events, pop-up shops and product promotions all require their own microsites or landing pages. 
When we moved into what some call the post-CMS landscape, the usage of static site generators and Flat-file CMS and Static Site Generator functionality overlaps in many ways ; so how do you choose between the two? 

When we moved into what some call the [post-CMS landscape](https://developmentseed.org/blog/2012/07/27/build-cms-free-websites/), the usage of static site generators (SSGs) and flat-file CMS for these microsites (and at times for lightweight corporate sites), grew. And now, with the headless CMS hype in full flow, the interest in these front-end solutions is returning.

After listing the [best flat-file CMS](http://www.cmswire.com/digital-experience/15-flat-file-cms-options-for-lean-website-building/) and the [best static site generators](http://www.cmswire.com/digital-experience/15-static-site-generators-to-complement-your-headless-cms/) on offer — it’s time to formally identify what separates these two similar technologies.



 