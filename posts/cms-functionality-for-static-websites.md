---
title: CMS-functionality for static websites
author: Philippe Bodart
banner: /img/uploads/cms16.png
shortdesc: "I just dumped my old web CMS, got the hang of a static site generator, and really like the simple, lightweight and maintenance-free feel of it... would I ever revert back"
updatedDate: 2017-01-20T07:37:12.671Z
cmsUserSlug: cms-static-website
date: 2017-01-03T16:00:00.000Z
categories: ""
---

# The case for the static site generator

More and more developers are jumping on the "go static train", and rightfully so. Static pages are fast, lightweight, they scale well. They are more secure, and simple to maintain and they allow you to focus all your time and effort on the user interface. Often times, this dedication really shows.

It just so happens that static site generators are mostly loved by developers, but not by the average content editor. They do not offer WYSIWYG, previewing on demo sites may take an update cycle, they are often based on markdown text files, and they require some knowledge of modern day repositories.

Moreover, when teams are collaborating, it can get complicated quickly. Has this article already been proof-read or reviewed? Is this input valid? Are user permissions available, e.g. for administering adding and removing team members? Can this article be published at a future date? How can a large repository of content be categorized, organized, and searched? 

#  A simple CMS system 
The simplest way to update your content on a Static site is to use our single page web Javascript web app that writes data right in to a github repository. A straight forward Markdown editor that works pretty much like any WYSIWYG editor, let's you publish, edit and manage all sorts of content. The content is directly written in to Github repositories, depending on you creating drafts or published posts. Each time you publish an update on the Github repository a new build will be triggered and your update will be published within seconds. The content model is based on Ember collections and can be adapted according to the specific needs of your website or Web APP. You only manage the dynamic data that you really want to manage. The repository is completely decoupled from your website, which renders itself as a Static website notwithstanding the fact that you can dynamically update and manage your content. 



# Content APIs is a more advanced option

An alternative is decoupling the content management aspect from the system. And then replacing the maintenance prone server with a cloud based web service offering. Effectively, instead of your CMS of old, you move to a Content Management as a Service (CMaaS) world, with a content API to deliver all your content. That way, you get the all the benefits of content management features while still being able to embrace the static site generator mantra.

**A service that**

* from the ground up has been designed to be fast, scalable, secure, and offer high uptime, so that you don’t have to worry about maintenance ever again.
* offers a powerful editor and lots of flexibility in creating templates for your documents that your editors can reuse and combine, so that no developers resources are required in everyday writing and updating tasks.
* separates content from presentation, so you can reuse your content repository for any device platform your heart desires. That way, you can COPE ("create once, publish everywhere").
* offers webhooks that you can use to rebuild your static site in a fully automated fashion every time your content is modified.


# How to automate using webhooks?

In order to be completely removed from everyday site management and maintenance, we suggest following the approach from Carrot Creative. In addition to an API driven CMS system, you will need a hoster that supports webhooks and is capable of starting builds and deploying websites.

* On your host: Create a webhook endpoint that starts a new build and deploys a project whenever it receives a POST request.
* On the CMS :  Create a webhook with the host endpoint as destination URL.
This way, whenever a writer creates or updates content, the host will receive a webhook and deploy. That way, a couple of minutes from publishing, the new content is live.

# Getting started

Sign up to a [WebriQ](http://app.webriq.com) account now! There is free testing plan which will most likely suffice for most small projects. For bigger projects, you can upgrade to our PRO plan.
