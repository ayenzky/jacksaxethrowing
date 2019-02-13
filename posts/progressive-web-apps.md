---
title: Progressive Web APPS - Next step in Responsive Web Design
author: Philippe Bodart
banner: /img/uploads/unknown1.jpg
shortdesc: "Smashing Magazine, one of the largest and most influential online publications for web design, posted that their website was “now running as a Progressive Web App."
updatedDate: 2017-05-04T07:12:07.543Z
cmsUserSlug: progressive-web-apps
date: 2017-04-24T16:00:00.000Z
categories: ""
---

Honestly, I didn’t think much of it. Progressive Web Apps are for the hardcore web application developers creating the next online cloud-based Photoshop ? 

Then, I saw CSS wizard, Harry Roberts, tweet about making some setting changes in CloudFlare and achieving the same. It might have been a coincidence that I stumbled across two influencers discussing the same topic, but it still caught my eye. So out of curiosity, I installed Lighthouse, the Chrome plugin that both Smashing Magazine and Harry Roberts had used, and ran my website through it.

Initial Lighthouse Audit
I wasn’t too impressed with the results. I figured I’d look into this, write about it, and save any developers who stumble across my website a bit of time. But I was really surprised with what I found.

I sought out to see if PWAs could benefit the work I do daily with content marketing websites, and I was able to reach 100/100. You’ll see exactly what I did toward the end of this article, but I figured while I’m here, we could walk through it together.

To begin, let’s get on the same page and define exactly what a PWA is. Google says:

Progressive Web Apps are user experiences that have the reach of the web, and are:

**Reliable** - Load instantly and never show the downasaur, even in uncertain network conditions.

**Fast** - Respond quickly to user interactions with silky smooth animations and no janky scrolling.

**Engaging** - Feel like a natural app on the device, with an immersive user experience. This new level of quality allows Progressive Web Apps to earn a place on the user’s home screen.

In other words, a PWA is the in between of a native app and a website. Using new technology being shipped with the latest browsers, we’re now able to create web apps, or in this case websites, that feature similar functionality as native iOS & Android apps (push notifications being a popular one).

The beauty of it is that we don’t need to be on a specific platform to be able to install a specific app — we just need a URL to point our mobile or desktop browsers to — but it is also one of the most challenging aspects of PWAs because ANY browser on ANY device could access the web app.

This means that we’ll be catering to users that probably won’t have the latest version of their browser with the latest features that you’re using. And that’s OK.

PWAs are built with the core principle of the progressive enhancement. This means the app/website will focus on the core content or purpose, and it will use the latest and greatest features as an enhancement to the experience and not as a requirement. It won’t break or render useless if a specific feature isn’t available in the browser/device accessing it.

Why Your Website Should Be a Progressive Web App
Although you probably won’t be using any hardcore app-like features for your website, there are a handful of enhancements, such as offline accessibility and native browser notifications, that will immediately improve the overall usability and engagement of your audience. It’ll result in higher conversions and lower bounce rates.

There’s even more to it:

**Offline Accessibility with Service Workers**

Using service workers, we’re able to “download” your website for offline use. Even with our tech-savvy way of life, there are plenty of use cases for this — subway riders with no internet access reading your blog, plant managers with spotty wifi looking up specs, those driving into more rural areas, etc.

**Native Browser Notifications**

If the website validates as a PWA, certain browsers take the initiative of displaying notifications such as offering to add the website to the home screen of the user — the PWA equivalent of installing an app.

**Enabling Push Notifications**

Push notifications are every developer and marketer’s favorite native app feature. When leveraging the Push API, you have the ability to re-engage your audience even when your website’s not being accessed.

**Performance**

With service workers, we have granular control over caching static assets, which reduces network requests and results in improved performance.

**Google Likes it**

If Google supports something, pay close attention. It won’t be long until Google starts favoring PWAs in certain search results. (You heard it here first!) Right now, there isn’t any evidence showing an increase in traffic; however, early adopters are usually the ones to reap the benefits.

**Criteria for Progressive Web Apps**
Your website has to meet a baseline of standards in order to benefit from the PWA perks, but these are best practices you should already be considering and implementing on your website. If not, listen up.

**Site is served over HTTPS**

This is the secure version of your website. Sending information over HTTPS ensure any data that’s being passed through your website gets encrypted. Yes, even if your website is a simple content-based website with no complicated features, you want and need HTTPS (lots of bad hombres out there).

You can test for this with Lighthouse or just look at the address bar of your website and if the URL starts with https:// and not http://, you’re good to go. I use CloudFlare CDN, which makes it relatively simple to enable HTTPS.

**Pages are responsive on tablets & mobile devices**

By now, everyone should be building on a responsive foundation. Do I even need to elaborate here? Thinking no, but let me know otherwise.

**The start URL (at least) loads while offline**

Your home page URL needs to be able to load if you don’t have access to the internet — use service workers (not as difficult as it sounds) to help. (I’ll show you how to do this shortly.)

**Metadata provided for add to home screen**

Mobile browsers need basic information about your website such as an icon to represent your website on the home screen of a device, a short name (what gets displayed below your icon) and a browser theme color to match certain parts of the browser to the colors of your website (among many other options).

This gets accomplished through the web app manifest file, which is a simple JSON file that contains all of the specifics. (Again, I run you through setting one of these up toward the end of this post.)

**First load is fast even on 3G**

Your website needs to render fast. It should load within the first 4 seconds and get a 85+ PageSpeed Insights score as a minimum. I recently wrote an article on website speed performance, which goes over a few basic steps you can take to make sure your website loads pretty darn quick.

**Site works cross-browser**

Every single feature doesn’t have to work on every browser but being able to progressively enhance and using fallbacks where necessary should be the foundation of your website or app. Don’t target a specific browser or OS for your website/app to work on — it’s a big negative that goes against the progressive principle.

**Page transitions don’t feel like they block on the network**

Going from page to page should be a seamless experience — any type of render blocking delay deters you from achieving that. There are many ways to address this from making sure your website’s fast (two steps above) and using perceived performance techniques such as Critical CSS.

**Each page has a URL**

If you click on a page, make sure the website URL reflects that. Single Page Applications sometimes forget this and make it pretty difficult to share content across the web.

Seems like a handful of steps, but if your website is already built on a foundation of best practices, it won’t be much work to have it validate.

Most of our [Buzzin](http://glasgow.buzzin.today) Community websites adhere to all the best practices of Progessive Web APPS.