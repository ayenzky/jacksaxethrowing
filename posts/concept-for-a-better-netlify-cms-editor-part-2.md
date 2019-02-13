---
title: Concept for a better Netlify CMS editor / Part 2
author: Philippe Bodart
banner: /img/uploads/software-as-a-service-saas.jpg
shortdesc: "This post is going to be more practical and explain some solutions that could be used to either improve or be starting stone for the next Netlify\_CMS that the community could build upon. Here are some goals from all the data and research gathered in part 1 that Ill try to solve  Continued"
updatedDate: 2017-06-22T10:03:10.740Z
cmsUserSlug: webriq-cms
date: "2017-06-22T09:41:25+00:00"
categories: ""
---

Continuing from [part 1](https://darjanpanic.com/design/concept-for-a-better-netlify-cms-editor-part-1/) this post is going to be more practical and explain some solutions that could be used to either improve or be starting stone for the next [Netlify CMS](https://www.netlifycms.org/)that the community could build upon.

Here are some goals from all the data and research gathered in part 1 that I’ll try to solve or improve:

- should have the ability to add sections while writing
- should have default and customisable content blocks/sections
- should have pre-made templates/layouts for specific content collection pages (example, job posting)
- should be easily usable by any of the 3 groups of people
- should give an experience of uninterrupted writing, the writer should stay in “the zone” from the beginning to the end of the article

Also, [Shawn](https://twitter.com/erquhart) (Netlify CMS lead architect) gave some valuable feedback, especially that the average WordPress user still wants to use the mouse. So the goal of creating an “uninterrupted experience” for writers inside a CMS is limited by that as my main idea was to use just the keyboard without the mouse when inputting or writing text in the editor.

But after a short break, it’s not really a limitation as we can always use **both writing flows** so the user can use either one he prefers. Now the new method without the mouse would need a bit of training and would require a small learning curve but the user could choose which one he prefers after. Let’s look at it more of an evolution.

Let’s dive into different sections step by step on how all the parts would fit together, visual examples with some explanations behind them.

Note that there are 2 different editor uses in the CMS and it’s easier if you have only 1 editor for both. There are pages/blog posts which tend to be empty and you create or add layouts/sections based on the content or the desired structure (the layout is based on content). And the second use is for premade pages or content that already have defined inputs, like a job posting or a profile page (content is based on layout/structure).

### Biggest problem of most CMS are the quantity of input fields

Hiding all the buttons we don’t really need help keep our canvas clean and the things we write structured. But again CMS’s can have these inputs and options all over the place.

Here’s an example of a site I designed for my wife’s business and how the building blocks and options are used in WordPress and ACF.

Now I really think this can be improved. There are many problems here like the one that you need to really search for either some settings or content if you want to edit it. The database is called for each of those fields on the front end and making lots of queries. Now static sites fix the later but the writing/editing experience is in blocks and not a fluid way of content. Everything is just too complex and all over the place. Hiding things in tabs makes it cleaner but the overview of the whole content on that page is really poor.

What if the content for a CMS would just go two ways, right (writing) and down (scanning) without any tabs etc.? And you would also see everything just by scrolling the page, without clicking or opening things up.

Blank canvas or writing without limits
--------------------------------------

There is a minimum of input fields needed here but the basic and minimal ones are mostly:

- Featured image
- Title of the post
- Editor field for the content

Now to bring this together in the cleanest and minimal sense possible would look something like this.

The square button with the + inside is for a popup to upload the image and below we have the I-beam pointer (blinking |-cursor) that we’re used to. This is the main indicator to start writing or rather the cursor is waiting for the input.

The light grey coloured title is, in my opinion, a nice touch or a bonus that invites the user (motivates and gives assurance) to do great things. It’d be great to have more questions or inspiring copy here that is randomly changing. It’s something that’s been around for a long time (usually newsletters had input placeholders and Paper is also using it today). But imagine adding a “brands voice & tone” to this message for your writers and making it more personal?

Next thing is the title input. Like Paper from Dropbox and some other editors have already found out, there isn’t any need to have visible input fields or text inputs. Things just flow nicely here.

After writing the title and hitting enter/return key. You jump outside the title field and start the paragraph of that section. Really clean and simple. Again, no boxes, no toolbars or anything.

### Toolbars and styling text

Most of the current (or old if you want) editors have a lot of buttons or different ways to manipulate or style the information we provide. Which is great but we have too many options and the canvas gets messy. Things have evolved and we can evolve them even further.

Writing things in [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) is great and the most important thing is, **you don’t need to switch to the mouse and use it**. Yes, the writers may need to learn some of these things, but they’re really intuitive and do improve the writing and the experience. UX/UI tends to overfocus on making things easier, but we don’t always need to improve the product so it’s easier to people to use it. Why not teach people to use the product as it’s meant to be used? It’s similar to the driving licence, you want to drive on the road, you need the training to handle the car. You want to have a better writing experience, learn Markdown. Some say it’s a “programming language” or meant for programmers, I say it’s not. It just brings some more “rules” to the writing we already have. Just look at this text, we’ve used – . , ; / ” ! ? and other characters since early school days. Markdown just introduces some new ones or extends their usability.

We tend to “dumb down” the product which also has the effect of not making some things challenging for the user (dumbing users down). They want to grow too, try new things and evolve as much as we evolve our products.

But let’s not make the mistake of not giving the user a choice here. We need to cover both user experiences here. The old and the new. The user tries both and he decides what to use. We still need to educate about the new approach though.

The [Alloy Editor](http://alloyeditor.com/demo/) which was also mentioned in [Netlify CMS Github issue](https://github.com/netlify/netlify-cms/issues/288#issuecomment-287556577) is a nice solution. It’s visible when you need it keeping the canvas clean. We just need to pair it with Markdown and use the selection menu as a **“fallback”** or an alternative option to styling things. And since both ways of styling are “hidden” they won’t get in each others way.

Here’s Alloy Editor in action:

**So we don’t need toolbars at all.** But we still keep the functionality and the clean look.

### 

### Having an editor without really using one

With today’s popularity of React.js and even Vue.js it’s a lot easier to create an amazing experience for writing content. As mentioned earlier, we don’t really need to see input fields and text area boxes like we’re used to with WordPress and Advanced custom fields. We also don’t need to see these fields or borders, we just need to know the structure of the content or end result and React.js can take care of everything else behind the scenes, magically.

A really nice and currently popular way of adding blocks of content is the + button next to the new paragraph. You click it and then you can choose what kind of “layout” or information placeholder you would like to add at that point. Netlify CMS already is using it and so are more and more other editors. I like this concept of “building blocks” and adding things like images is really a nice experience.

My concept/idea would improve that. You would write text like you do in Google Docs or Word, but the CMS would create hints on what and where the information will be explained. It would add the context of that information. And you would have minimalistic visual guides on what that content/layout is. The mentioned Alloy Editor already has a similar feature, but it can again be improved for the use in a CMS Editor.

This is how the basics would look. You click the + button and then you get displayed the layouts you could use. Remember, these blocks could be anything from ads to a call action block.

It’s something similar Netlify CMS already has. But again, we need to go in and click, input stuff and then we can continue with the writing. Also, it’s an improvement over the WordPress way I did above, but let’s try and make it right.

Putting it all together and making it work
------------------------------------------

Now things seem to be going places but there are still different concepts here which don’t yet fit perfectly well together. I think one of the things that would tie all this together nicely are the mentioned visual guides for the content blocks. Remember, that we’re still making a CMS Editor here but we want it to feel like a Word document. OR even better like something we would write on paper.

We would need a system of grouping things together for the content blocks.

Let’s try and analyse a simple landing page example with the above ideas. We start with how things would look without any grouping.

Left is a line sketch of the text and right are the sections or content blocks. This is the view we get in the Editor, not the front end, but as I said that I want the text to flow right and down it will keep the structure of the front end as much as possible. I wouldn’t use any columns in the editor.

One common way would be to make the background gray and make the sections white.

But this again created blocky content and the content doesn’t flow. We also introduced new (bigger) elements instead of using what was already there. So let’s take a step back and try color coding the things that are already there.

This variation above would color the text separating the blocks. But there would be a problem if you had 2 same blocks one after another as they would look as one. So let’s try and minimise this even further but still use the colors.

We keep the colors and just use a small line at the left side of the content block visually grouping the content on the right making everything clean and structured. But just the color may not be enough for first-time users so the icons for the content blocks should also be used, but these can be hidden until you hover over it.

### 

### Content blocks of the new CMS

If we have a blank page without any inputs, it’s hard to know what the new blocks need to input. For some it may be easier as you would just write a sentence, but what about a CTA? It can have a title, paragraph, button text, button url, url target etc.

That’s why new blocks would need to have labels so we can “fill them in”. It’s the main thing that makes any CMS work really. Here’s the CTA block when it’s empty.

And here’s the same block when full.

An image block also needs and “upload” or gallery button or that functionality. Here’s an example of how the different states would work.

Now on the front end, there should be things in place so that if we want to add more images to the above block, it would automatically add columns (or creates a gallery) for it. Add 3 images makes it a 3 column gallery. So depending on the input, display the correct output (side thought: anyone thinking of adding AI to this).

Here’s an example of how 2 columned texts would look like in a block.

So depending on the content/context, a CMS editor must not limit us in any way. Custom content blocks or widgets in Netlify CMS are amazing for this.

Using the editor without the mouse, ever.
-----------------------------------------

The only enjoyable thing when using the mouse while writing should be clicking on the Publish button 🙂 And with that in mind I’ve been thinking how to improve the user experience throught everything mentioned above. How would we achieve navigating the UI and add content blocks by just using the keyboard but also not using any CTRL or ALT combos? Well, we go for the obvious key that we’re using all the time but can be used for much more than just the thing it’s doing. Yes, it’s the Enter/Return key.

You’re probably asking yourself how can you navigate the full UI with just one key that is already used to paragraphs or line breaks (enter and shift+enter). Well, I think with the help of React and JS we could extend the usability. Here’s a short video explanation of how it would work. The right side shows the key inputs used to navigate.

From the video above the legend of the navigation would be:

- **1x enter** -> new paragraph
- **2x enter in succession** -> open block list (same as clicking the +)
- **space** -> select the block layout

This should work nicely for the 1st pass of writing, for the second pass of editing, it’d still be nice to use the mouse as it makes the jump from words to words easier.

I think this is something that was overlooked with all the Editors we have today. We always try adding new things instead of doing the basics really good (oh wait, isn’t that the JAMstack philosophy also?).

Canvas with placeholders for inputting information and data
-----------------------------------------------------------

For the example of using the Editor for layouts that are predefined with blocks depending on the context (job posting, real estate posting,…) A bit of setup in the JSON config file would do the trick to create the template layout.

Add a collection and you have a controlled placeholder for specific content needed for that section.

Conclusion & next steps
-----------------------

It’s been a while since I tried to solve a problem or find a new solution to something like this and I must say that an editor seems like an “easy thing to do” but digging deeper it has a lot of small gears that make everything work, the process if analysed in depth is quite complex but I love how things come out simple at the end and seem intuitive.

There is still more things to think about like the mobile execution of this concept or the idea that do we still need the preview if the content is shown in a straight path?

I guess the next steps (maybe a part 3?) would be to wait for feedback and revise and improve with the help of the community while enjoying the development of Netlify CMS.

 