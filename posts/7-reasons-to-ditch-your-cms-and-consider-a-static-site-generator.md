---
title: 7 Reasons to Ditch Your CMS and Consider a Static Site Generator
author: "  "
banner: /img/uploads/Jekyll-Website-Builder-Featured-994x400.jpg
shortdesc: "For many years, publishing a website was out of reach many users. HTML authoring, hosting accounts, and managing the update of the hosted files was too much for average non-technical\_folks. Nowadays a\_user can\_sign up for a Tumblr account and be typing their first post within minutes. As users became more sophisticated, blogging platforms like WordPress provided ownership of their content. But WordPress and its peers still have a number of moving parts. This is overkill for someone who just wants to blog while still owning it. A recent answer to this is the static site generator (SSG). Lets explore why...Read the full article: 7 Reasons to Ditch Your CMS and Consider a Static Site Generator"
updatedDate: 2017-06-20T03:54:11.381Z
cmsUserSlug: 7-reasons-to-ditch-your-cms-and-consider-a-static-site-generator
date: "2017-06-19T09:18:26+00:00"
categories: ""
---

For many years, publishing a website was out of reach many users. HTML authoring, hosting accounts, and managing the update of the hosted files was too much for average non-technical folks. Nowadays a user can [sign up for a Tumblr account](http://www.makeuseof.com/tag/how-to-use-tumblr-to-easily-create-a-rich-media-blog/)   [How To Easily Create a Blog with Tumblr](http://www.makeuseof.com/tag/how-to-use-tumblr-to-easily-create-a-rich-media-blog/)     [How To Easily Create a Blog with Tumblr](http://www.makeuseof.com/tag/how-to-use-tumblr-to-easily-create-a-rich-media-blog/)  [Read More](http://www.makeuseof.com/tag/how-to-use-tumblr-to-easily-create-a-rich-media-blog/)   and be typing their first post within minutes.

As users became more sophisticated, blogging platforms like WordPress provided ownership of their content. But WordPress and its peers still have a number of moving parts. This is overkill for someone who just wants to blog while still **owning** it. A recent answer to this is the **static site generator (SSG)**. Let’s explore why you might want to consider one for your next online project.

What Is a Static Site Generator?
--------------------------------

The first pages on the Web were just that: individual pages that someone wrote as an HTML file and uploaded to a server. While a modern CMS (Content Management System) presents content as a page, in reality it is mashing up markup, database content, and real-time calculations. They are web applications that help users create content, store it, then serve it up to site visitors.

In contrast, static site generators are publishing tools. They’re not so different from tools like Adobe Acrobat, which takes an editable format (e.g. Microsoft Word) and [converts it to a format](http://www.makeuseof.com/tag/7-free-online-pdf-tools-save-lot-work/)   [7 Free Online PDF Tools That Could Save You A Lot Of Work](http://www.makeuseof.com/tag/7-free-online-pdf-tools-save-lot-work/)     [7 Free Online PDF Tools That Could Save You A Lot Of Work](http://www.makeuseof.com/tag/7-free-online-pdf-tools-save-lot-work/) The Web is full of awesome little tools that can help you alter PDF files without breaking a sweat. Let's look at lesser known PDF tasks that may come in handy for you. [Read More](http://www.makeuseof.com/tag/7-free-online-pdf-tools-save-lot-work/)   that’s easy to consume (.PDF). In this case, SSGs are doing the following basic tasks:

1. Taking some sort of basic content as input;
2. Creating nice-looking web content from it, and;
3. Helping to push that content live to the web.

In the next section we’ll examine some of the advantages the “static” nature of SSGs provides over today’s CMSs.

Advantages of Using a Static Site Generator
-------------------------------------------

For those used to working in a CMS like WordPress, some of the following will seem like a big change. But they make producing and maintaining some types of sites a lot easier. Let’s take a look at some of these advantages.

_The below sections include commands and output from the [Jekyll](https://jekyllrb.com) static site generator as an example. If you select a different SSG, the commands will be different, but the concepts are similar._

### 1. Static Sites Don’t Require Complex Installations

A major difference compared to a “traditional” CMS is that you’re installing static site generators on your **local** machine. For example, getting Jekyll up and running on an Ubuntu machine was as easy as the following command:

`sudo apt-get install jekyll`Then just start up a new project:

`jekyll new mytestsite`You’ll have the makings of a new site in the “mytestsite” directory with a number of default files. Take note of the “\_posts” directory, which contains a Markdown file.

### 2. You Can Work on Your Site While Offline

Static site generators are designed to work with offline, local content. There’s no need for a live internet connection to create a new post. You can draft the content, then run a “build” command later to create the post/page that will make its way to the Web. If you’re used to [offline blog editors such as BlogDesk](http://www.makeuseof.com/tag/4-alternatives-to-windows-live-writer-for-blogging/)   [4 Alternatives To Windows Live Writer For Blogging](http://www.makeuseof.com/tag/4-alternatives-to-windows-live-writer-for-blogging/)     [4 Alternatives To Windows Live Writer For Blogging](http://www.makeuseof.com/tag/4-alternatives-to-windows-live-writer-for-blogging/) Microsoft recently announced the end of the Windows Live brand. In response to concerns, all Microsoft is saying about Windows Live Writer is it will “work great on Windows 8” – not whether development is... [Read More](http://www.makeuseof.com/tag/4-alternatives-to-windows-live-writer-for-blogging/)   it’s similar, except instead of pushing posts one at a time, you’re building the whole site locally.

Next, create your content in the “\_posts” folder mentioned above. You can build your site when you’re ready by executing the following command from the project’s directory:

`jekyll serve`This builds the entire site in a sub-folder, as shown below:

When complete, you can also view this site using Jekyll’s built-in web server at .

If you like what you see, you can simply upload all the files in the “\_sites” folder to [a web host](http://www.makeuseof.com/tag/what-is-a-web-server-makeuseof-explains/)   [What Is a Web Server? \[MakeUseOf Explains\]](http://www.makeuseof.com/tag/what-is-a-web-server-makeuseof-explains/)     [What Is a Web Server? \[MakeUseOf Explains\]](http://www.makeuseof.com/tag/what-is-a-web-server-makeuseof-explains/) If there is one thing that causes the most confusion for people that are new to the web design game, it's the concept of a web server. When most people think of a "server", they... [Read More](http://www.makeuseof.com/tag/what-is-a-web-server-makeuseof-explains/)  . Your site is ready to go!

### 3. You Can Author Content in Different Formats

Also, you’re able to create those posts in a format friendlier than raw HTML. Markdown is the most well-supported, but many SSGs can also accept others either out-of-the-box or via a plugin. [Jekyll’s plugins](http://jekyllrb.com/docs/plugins/#converters) include options like Asciidoc, orgMode, or reStructuredText. If you’re using one of these other markup languages, a quick config change or plugin install should be all you need.

Image Credit: GitHubInterestingly, most SSGs also accept **HTML** as an input. “Wait,” you’re saying. “I thought converting to HTML was the point of this whole thing!” But consider this: other formats not directly supported by SSGs can often export to HTML. Imagine a workflow where you (or other writers) author in LibreOffice using ODT, which gets converted (such as [via Pandoc](http://www.makeuseof.com/tag/easily-convert-document-formats-linux/)   [How to Easily Convert Between Document Formats in Linux](http://www.makeuseof.com/tag/easily-convert-document-formats-linux/)     [How to Easily Convert Between Document Formats in Linux](http://www.makeuseof.com/tag/easily-convert-document-formats-linux/) Switching to Linux can result in problems with file compatibility. For instance, documents don't look the same in LibreOffice as they do in Word. This is just one reason why you need pandoc. [Read More](http://www.makeuseof.com/tag/easily-convert-document-formats-linux/)  ) to raw HTML, which is further processed and styled by the SSG. It would take some elbow grease, but it’s entirely possible!

### 4. You Can Still Benefit From Themes and Plugins

As mentioned above, most SSGs also support extensions or plugins to provide extra functionality. This range from automatically adding data to the site (e.g. date-based URLs for or related posts) to more “CMS-like” features like user authentication or comments. One plugin for [the DocPad SSG](https://docpad.org) even provides an administration panel!

Image Credit: npm### 5. Static Sites Are Fast

Between fetching content from the database and running any included code, loading some CMS pages can be sluggish. In contrast, static sites are already in the format the browser will consume. The only delay is in how long it takes the web server to send the page, and [how long it takes the browser to render it](http://www.makeuseof.com/tag/how-do-browsers-display-web-pages-and-why-dont-they-ever-look-the-same/)   [How Do Browsers Display Web Pages, and Why Don't They Ever Look the Same?](http://www.makeuseof.com/tag/how-do-browsers-display-web-pages-and-why-dont-they-ever-look-the-same/)     [How Do Browsers Display Web Pages, and Why Don't They Ever Look the Same?](http://www.makeuseof.com/tag/how-do-browsers-display-web-pages-and-why-dont-they-ever-look-the-same/)  [Read More](http://www.makeuseof.com/tag/how-do-browsers-display-web-pages-and-why-dont-they-ever-look-the-same/)  . But these are both things a CMS-driven site would also have to do.

In addition, since the output of SSGs is run-of-the-mill HTML, CSS, and Javascript. Just about any web server will serve these (along with any images) without issue. This means if you have your own server (such as a VPS), you have the flexibility of deploying a [lighter web server like lighttpd or nginx](http://www.makeuseof.com/tag/linux-web-server-software-apache-alternatives/)   [The Best Linux Web Server Software (& Apache Alternatives)](http://www.makeuseof.com/tag/linux-web-server-software-apache-alternatives/)     [The Best Linux Web Server Software (& Apache Alternatives)](http://www.makeuseof.com/tag/linux-web-server-software-apache-alternatives/)  [Read More](http://www.makeuseof.com/tag/linux-web-server-software-apache-alternatives/)  .

### 6. Static Sites Are Secure

The multiple moving parts of CMSs like WordPress, Drupal, and others open up attack vectors for the villains of the Interwebs. Access to a PHP file can allow an attacker to execute their own code on your site. A compromised database has [led to headaches for e-commerce vendors](http://www.makeuseof.com/tag/sorry-state-data-security-e-commerce/)   [The Sorry State Of Personal Data Security In E-Commerce](http://www.makeuseof.com/tag/sorry-state-data-security-e-commerce/)     [The Sorry State Of Personal Data Security In E-Commerce](http://www.makeuseof.com/tag/sorry-state-data-security-e-commerce/) Many of these retailers owe their entire being to the Internet, yet are incapable of following even the most basic of good data practices. [Read More](http://www.makeuseof.com/tag/sorry-state-data-security-e-commerce/)   (as they’re in really a more sophisticated CMS).

> [@briancroxall](https://twitter.com/briancroxall) perhaps missing: security much easier with static site generators.
> 
> — Martin Paul Eve (@martin\_eve) [March 25, 2017](https://twitter.com/martin_eve/status/845730229754757121)

On the other hand, all the programming magic of SSGs happens **on your local machine**. Thus, your biggest concern will be file permissions. [Accidentally making a file writable to the world](http://www.makeuseof.com/tag/one-of-the-most-important-tools-in-linux-understanding-chmod/)   [One Of The Most Important Tools In Linux - Understanding Chmod](http://www.makeuseof.com/tag/one-of-the-most-important-tools-in-linux-understanding-chmod/)     [One Of The Most Important Tools In Linux - Understanding Chmod](http://www.makeuseof.com/tag/one-of-the-most-important-tools-in-linux-understanding-chmod/) There are plenty of features that make Linux special, but one of them that makes it so secure is its permissions system. You can have fine-grain control over all the files in your system and... [Read More](http://www.makeuseof.com/tag/one-of-the-most-important-tools-in-linux-understanding-chmod/)   would be a “bad thing,” but this is something that could happen to a CMS as well. However, since a static site doesn’t have any executable code within it and doesn’t access database content, it reduces the number of potential holes in your site’s security.

### 7. Static Sites Aren’t Subject to Live Upgrades

If you’ve ever managed a site, you know the moment of dread that comes along with seeing that “Upgrade available!” message in your admin panel. Sure, you’ll test it in your staging environment, but you never **really** know if that one code fix or oddly-formatted user comment will make it all blow up.

Compare this to static sites. Although new versions of the SSG tool may be available, these don’t impact anything on your live site. It will continue to chug along, oblivious to any upgrades that may or may not have happened. In the meantime you can upgrade your SSG, publish a new version of the site to test it out, and finally migrate the new version live. The same can be accomplished with CMSes, but not without considering things like database rollbacks and whether new user-generated content will be lost.

Types of Sites Ill-Suited to Static Site Generators
---------------------------------------------------

Not all sites are a good fit for static site generators. If you’re putting together a small personal site, or something like a traditional blog (i.e. a daily journal), the simplicity of SSGs might be for you. Basically, if you’re looking for one-way publishing of your text-and-graphics content to the web, a static site is a good choice.

But most modern websites aren’t glorified online journals. If you will need any of the following for your site, now or in the future, you should consider the caveats that come with static site generators.

- **Registered users** — If your site must allow users to sign up, such as to receive a newsletter, look closely at what plugins are available, and whether they allow the type of interaction you’re looking for.
- **Comments** — Likewise, if you want people to be able to comment on your blog, you’ll need to look for a native plugin that fits your needs, or [a service like Disqus](http://www.makeuseof.com/tag/6-services-for-blog-readers-and-moderators-to-get-more-out-of-comments/)   [3 Commenting Systems & 3 Apps to Track Comments](http://www.makeuseof.com/tag/6-services-for-blog-readers-and-moderators-to-get-more-out-of-comments/)     [3 Commenting Systems & 3 Apps to Track Comments](http://www.makeuseof.com/tag/6-services-for-blog-readers-and-moderators-to-get-more-out-of-comments/)  [Read More](http://www.makeuseof.com/tag/6-services-for-blog-readers-and-moderators-to-get-more-out-of-comments/)  .
- **Multiple authors** — If you need more than one person to write for your site, things get more complicated. You’d either need to make sure you pull their posts to your local machine before building your site manually, or via [another method such as Dropbox, source control, etc.](http://www.makeuseof.com/tag/not-just-for-coders-top-version-control-systems-for-writers/)   [Not Just For Coders: Top Version Control Systems For Writers](http://www.makeuseof.com/tag/not-just-for-coders-top-version-control-systems-for-writers/)     [Not Just For Coders: Top Version Control Systems For Writers](http://www.makeuseof.com/tag/not-just-for-coders-top-version-control-systems-for-writers/) The mention of version control or revision control makes it seem like something for geeks. You will be surprised to know that version control systems have their place not only in academic writing but in... [Read More](http://www.makeuseof.com/tag/not-just-for-coders-top-version-control-systems-for-writers/)  
- **Data-driven pages** — There are plugins that let you, for example, create a CSV file with data you can include in your page templates. But setting them up is somewhat complex, while at the same time providing less functionality than a full database.
- **Highly interactive features** — If you’re hoping to re-create Google Maps or Docs with one of these tools, you’re barking up the wrong tree.
- **E-commerce** — Static sites don’t lend themselves to the many and constantly-changing rules and properties (taxes, shipping rates) of [e-commerce](http://www.makeuseof.com/tag/best-e-commerce-plugin-wordpress/)   [What Is The Best E-Commerce Plugin For WordPress?](http://www.makeuseof.com/tag/best-e-commerce-plugin-wordpress/)     [What Is The Best E-Commerce Plugin For WordPress?](http://www.makeuseof.com/tag/best-e-commerce-plugin-wordpress/) So I often hear the question: "what's the best eCommerce plugin for Wordpress?" I think it's only in the last year or so that a clear answer has emerged. [Read More](http://www.makeuseof.com/tag/best-e-commerce-plugin-wordpress/)  .

Overall, static site generators are publishing tools ideal for users looking for a straightforward way to create some content and get it ready for the web.

**What do you think? Would you be willing to give a static site generator a spin? Think a CMS is still the way to go? Let’s discuss below in the comments!**

Image Credit: mihalec via Shutterstock.com

 
------------

  