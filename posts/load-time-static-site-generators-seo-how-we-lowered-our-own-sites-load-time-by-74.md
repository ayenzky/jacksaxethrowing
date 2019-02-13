---
title: "Load time, static site generators & SEO: How we lowered our own site’s load time by 74%"
author: Philippe Bodart
banner: /img/uploads/time-clock-ss-1920.jpg
shortdesc: "Google has raised the bar on site load times consistently over the last decade, and the upcoming transition to mobile-first indexing, combined with its rising expectations of mobile site performance, should be a clear warning sign to site owners."
updatedDate: 2017-12-06T04:32:09.989Z
cmsUserSlug: static-site-generators-and-seo
date: "2017-08-23T07:19:10+00:00"
categories: ""
---

Google has [raised the bar on site load times](http://searchengineland.com/google-says-page-speed-ranking-factor-use-mobile-page-speed-mobile-sites-upcoming-months-250874) consistently over the last decade, and the [upcoming transition](http://searchengineland.com/googles-mobile-first-index-likely-not-coming-2018-earliest-277074) to [mobile-first indexing](http://searchengineland.com/faq-google-mobile-first-index-262751), combined with its [rising expectations of mobile site performance,](https://webmasters.googleblog.com/2013/08/making-smartphone-sites-load-fast.html) should be a clear warning sign to site owners.

Site owners generally, however, [seem not to be listening](https://www.doubleclickbygoogle.com/articles/mobile-speed-matters/).

> Unfortunately, based on our analysis of 10,000+ mobile web domains, we found that most mobile sites don’t meet this bar: The average load time for mobile sites is 19 seconds over 3G connections.DoubleClick research published in September 2016

At our company, we have been experimenting over the last year with static site generation. Our tests on our own site are aimed at allowing us to assess the challenges facing site owners, to understand the scope of opportunity and potential for performance improvement, and also to explore the practical limitations in content management — one of the key criticisms of static site generation.

Our site, QueryClick.com, was a small, fairly well-optimized B2B site, but it averaged ~6.99 second load time in the month prior to our deployment of static site generation (July 2016), dropping to ~1.8 seconds in the month following. That represented a load time reduction of 74.29 percent, despite some server response issues experienced during the period we were actively developing the site.

One month before and after switching to a static site generation infrastructure.

We performed further server optimization improvements over the year, reaching our sub-one-second mobile device target even while testing the impact of less efficient elements driven by JavaScript.

Yes, we know! We didn’t even use sprites, gzipping, or other such techniques — which highlights the impact of a platform-first approach to solving the page speed problem.

A platform-first approach to page speed
---------------------------------------

I’ve written before about [the varying levels of importance of the different aspects of page speed](http://searchengineland.com/breaking-page-speed-events-seo-gain-195369) on SEO and about how Google’s algorithm employs data about SERP bounce-backs (when users bounce back to its SERPs after losing patience with a slow-loading site). But it’s worth making the point again as we head to a mobile-first world: server response times and the critical render path event (the point at which everything in the initial device viewport is rendered) are key to delivering high-performance SEO, _especially_ for enterprise-level sites.

Any developer worth their salt will look at the asset load requests in QueryClick’s site displayed in the above image and shake their head at all the unoptimized elements. But that is the point. High performance was achieved _despite_ a lack of rigorous optimization in the code and asset deployment. It was driven by the platform and the high-level architecture decisions.

Google would like us to improve further — and we will, but real performance change has already been delivered.

So, what architecture did we use? As Python and Django evangelists, we write the copy in [Markdown](https://en.wikipedia.org/wiki/Markdown) and push it to our staging server build via [Github](https://github.com/), where we can check to ensure it’s all OK. We then[](https://github.com/)use [Celery](http://www.celeryproject.org/) to set a time for the staging server copy to be pushed to the live Git repository. Then, Cactus regenerates the pages and, voila, the live server is populated with the static pages.

Of course, for your average content producer, this infrastructure is not as simple to create or maintain as a standard CMS without some technical know-how. That is the most common criticism of static site deployments, and many enterprise clients consider it a deal-breaker when they’re looking at static site solutions.

Certainly, if you manage product inventory that dynamically changes by tens of thousand in a day, which one of our clients does, then a robust management back end is essential.

That’s why anyone deploying a static site performance solution in the enterprise must leverage [Oracle ATG](https://docs.oracle.com/cd/E24152_01/Platform.10-1/ATGMultiApp/html/s0102abouttheoracleatgwebcommerceplat01.html) or the like, which can easily generate and manipulate static web pages using its API. When you think about it, live dynamic site management requires significantly more hardware infrastructure than static.

If you need more convincing, take a look at the [variety of static code bases](https://www.staticgen.com/) already in flight. They use a variety of programming languages and many of them are fully capable of being fitted into an enterprise environment. When you also use a content delivery network [(CDN)](https://www.akamai.com/us/en/cdn/what-are-the-benefits-of-a-cdn.jsp) in production, you can offer a robust solution that delivers both blazing speed (for even poor 3G mobile connections) and total redundancy and elimination of server failure challenges.

Dynamic static asset provision and modern caching controls on static generators allow clean, live adjustment of content that is exactly comparable to dynamic site generation at a fraction of the hardware demand.

It may take years for the general web to catch up with Google’s pioneering push for modern, fast, easy-anywhere web experiences. But if you want to benefit your conversion rate and your brand experience, and enjoy a significant drive to SEO performance thanks to fast critical render performance and positive SERP bounce behavior, then you should have your development team investigate and find an architecture that works for your site today.

- - - - - -
Do the test yourselves by entering your domain on [TEST MY SITE](http://testmysite.io) or see the results for our [WebriQ Site](https://testmysite.io/599d2d62a700c415979468e6/www.webriq.com). 

## WebriQ CMS - a CMS for Static website deployments


With a Git-based CMS you can publish content every time you push changes to Git, allowing for a seamless development workflow. This approach is a bit difficult to scale with content that you want to publish across different platforms, but it will allow for you to have a purely static website. Since it runs on Git, you won’t have a problem finding an open source CMS to work with.

With an API-driven CMS, you’re creating content that will be strictly delivered via APIs. Although you won’t be able to keep track of content changes through Git, you’ll be able to scale your content through flexible APIs. But since you are working on a platform that hosts these APIs (server bandwidth ain’t cheap) these tend to not be open-sourced and rather pricey, but some offer freemium pricing models.

Or use **[WebriQ CMS](http://app.webriq.com)**, which in essence can be an API driven Git-based CMS.

- - - - - -

### About The Author

 Chris Liversidge has over twelve years web development experience & is the founder of

[QueryClick Search Marketing](http://uk.queryclick.com/), a UK agency specialising in SEO, PPC and Conversion Rate Optimisation strategies that deliver industry-leading ROI.

   