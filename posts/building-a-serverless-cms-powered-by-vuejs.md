---
title: Building a Serverless CMS Powered by Vue.js
author: Philippe Bodart
banner: /img/uploads/imgix-391808-unsplash.jpg
shortdesc: "In this tutorial, you’ll learn how to build a serverless Vue.js application using ButterCMS. ButterCMS is a headless CMS and blogging platform that lets you build CMS-powered apps using any programming language, including Vue.Building a Serverless CMS Powered by Vue.js is a post from CSS-Tricks"
updatedDate: 2018-03-09T05:02:29.170Z
cmsUserSlug: building-a-serverless-cms-powered-by-vuejs
date: "2018-03-09T04:50:53+00:00"
categories: ""
---

Vue.js is a progressive framework for building user interfaces, is gaining in popularity among developers. But why yet another JavaScript framework? Vue has learned from the experiences of Angular and React and many see it as simpler to implement and understand.

Vue.js is lightweight and easily adoptable. It’s reactive and component-based, allowing you to create pluggable components you can add to any project. Most importantly for this tutorial, Vue and its hallmark incremental adoptability allows you to try Vue without putting your existing code base at risk.

Vue works well with serverless application architectures. Serverless architectures are becoming the preferred architecture for many developers because it allows them to create and fine-tune products efficiently without having to bear the burdens (server maintenance, outages, and scaling bottlenecks) of traditional server-based architecture. Sarah Drasner recently wrote an entire series on how to [create a serverless checkout flow powered by Vue](https://css-tricks.com/creating-vue-js-serverless-checkout-part-one/) and is a good example of this in practice.

In this tutorial, you’ll learn how to build a marketing website as a serverless Vue.js application using ButterCMS. ButterCMS is a [headless CMS and blogging platform](https://buttercms.com/api-first-cms/) that lets you build CMS-powered apps using any programming language, including Vue. There are other options for going with a [headless CMS](https://css-tricks.com/tag/headless-cms/), but I happen to develop for ButterCMS and know it extremely well so that's what we'll be using in our examples.



This tutorial will show you how to add performant content APIs to your Vue.js application. These APIs are easy to navigate even for the non-technical members of your team, enabling you to enjoy agile content management without having to spin up and maintain your own CMS infrastructure.

Specifically, we’ll examine code samples for three content types we might find on a marketing website: customer case studies, frequently asked questions, and blog posts.

Note that the designs in the screenshots we use throughout this post will likely differ from what you build and are styled with light CSS for demonstration. Your real design would use the global styling from your app making the pages look consistent with the rest of your site.

### Getting Started

We're using ButterCMS as our content management system, so let's install it:

``npm install buttercms --save``Once installed, you can proceed with the following examples.

### Example 1: Customer Case Studies

Let's start by making it possible for any non-technical person on your team to add customer case studies to the site. In this case, we'll create a page that can hold all of the published case studies that promote the product or service we're selling which, when clicked, open up the page for that case study.

#### Step 1: Setup Customer Case Study Page Type

Using the dashboard on ButterCMS, you can create a "page type" entitled "Customer Case Study” and define the content fields. Once you’ve done this, you can create your first page. Specify the name and URL of the page using the ButterCMS dashboard and complete the populate the content fields we just defined.

Once this is all done, the ButterCMS API will return your defined page in JSON format. It should look something like this:

```
```
{
  "data": {
    "slug": "acme-co",
    "fields": {
      "facebook_open_graph_title": "Acme Co loves ButterCMS",
      "seo_title": "Acme Co Customer Case Study",
      "headline": "Acme Co saved 200% on Anvil costs with ButterCMS",
      "testimonial": "We've been able to make anvils faster than ever before! - Chief Anvil Maker\r\n",
      "customer_logo": "https://cdn.buttercms.com/c8oSTGcwQDC5I58km5WV",
    }
  }
}
```
```#### Step 2: Integrating Your App

Next, open your code editor and create a file called `buttercms.js` in your `/src` directory.

If you don’t have an existing project, create one by entering the following:

```
```
vue init webpack buttercms-project
cd buttercms-project
npm i
npm i -S buttercms
npm run dev
```
```Then, in `src/buttercms.js`:

```
```
import Butter from 'buttercms';
const butter = Butter('your_api_token');
```
```Now, update the routes in your app. This is done in `router/index.js`:

```
```
import Vue from 'vue'
import Router from 'vue-router'
import CustomersHome from '@/components/CustomersHome'
import CustomerPage from '@/components/CustomerPage'
    
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/customers/',
      name: 'customers-home',
      component: CustomersHome
    },
    {
      path: '/customers/:slug',
      name: 'customer-page',
      component: CustomerPage
    }
  ]
})
```
```It's worth checking out Hassan Djirdeh's recent post ["Let's Build a Custom Vue Router"](https://css-tricks.com/build-a-custom-vue-router) for a deep-dive on using Vue's routing library and methods for creating custom routes.

You have content in a data file, which is great, but now you need a page that uses the content. You're going to define a `getpages()` method that fetches all of the case study pages so you can render them together on a single landing page to create an index of them all. This will be a "homepage" for all of the published case studies.

In `components/CustomersHome.vue` you add:

```
```

  // import ButterCMS from 
  import { butter } from '@/buttercms'
  export default {
    name: 'customers-home',
    data() {
      return {
        page_title: 'Customers',
        // Create array to hold the pages from ButterCMS API
        pages: []
      }
    },
    methods: {
      // Get List of Customer Pages
      getPages() {
        butter.page.list('customer_case_study')
          .then((res) => {
            // console.log(res.data.data) // Check the results in the console
            this.pages = res.data.data
          })
      }
    },
    created() {
      // Fire on page creation
      this.getPages()
    }
  }

```
```...and to display the results, one by one:

```
```

  
    {{ page_title }}
    
      
        
          
          {{ page.fields.headline }}
        
      
    
  

```
```Here's an example of something close to what you have so far after publishing one case study:

Now, you're going to set up the page we get when clicking on a case study from the homepage. To do so, in `components/CustomerPage.vue` we define a `getPage()` method to get a particular customer page based on its slug:

```
```

  import { butter } from '@/buttercms'
  export default {
    name: 'customer-page',
    data() {
      return {
        slug: this.$route.params.slug,
        page: {
          slug: '',
          fields: {}
        }
      }
    },
    methods: {
      getPage() {
        butter.page.retrieve('customer_case_study', this.slug)
          .then((res) => {
            console.log(res.data.data)
            this.page = res.data.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPage()
    }
  }

```
```And, just like you did for the case studies homepage, you need to display the content by defining a template and calling the content fields you want to show:

```
```

  
    
      
    
    {{ page.fields.headline }}
    Testimonials
    
    
  

```
```This should give you something like this:

Success! Now you can go directly to a page that lists all published case studies and click on any of them to be taken to the detail page for a specific case study post.

### Example 2: Frequently Asked Questions

Now lets's walk through how to create a Frequently Asked Questions (FAQ) page for the app. We’ll be using ButterCMS "Content Fields” for this. Content fields are simply global pieces of content that can be managed by your team. This content can span multiple pages and each content field has a unique ID for querying, as you’ll see below.

#### Step 1: Setup Content Fields

First, you’ll need to set up some custom content fields. Using the dashboard, you can set up a workspace to organize content fields. Workspaces will allow content editors to curate content without affecting development or the API.

Once you're in a workspace, click the button to create a new content field. Choose the "Object" type and use "FAQ Headline" as the name of the field. It will have an API slug of `faq_headline`.

After saving, add another field but this time choose the "Collection" type and use "FAQ Items" as the name of the field. This one will have an `faq_items` API slug. On the next screen, set up two properties for items in the collection and go back to your workspace to update your heading and add some FAQ posts.

#### Step 2: Integrating Your App

Now that you’ve created dynamic content using content fields, it’s time to display it in the app. To do this, you’ll fetch the fields with an API call and reference them in your view. First, set up a route to your FAQ page:

Let's add FAQ routes in `router/index.js`:

```
```
import Vue from 'vue'
import Router from 'vue-router'

import FAQ from '@/components/FAQ'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/faq',
      name: 'faq',
      component: FAQ
    }
  ]
})
```
```Then create `components/FAQ.vue` with a call to get the FAQ content from the API:

```
```

  import { butter } from '@/buttercms'
  export default {
    name: 'faq',
    data() {
      return {
        page_title: 'FAQ',
        faq_items: []
      }
    },
    methods: {
      getFaqs() {
        butter.content.retrieve(['faq_headline', 'faq_items'])
          .then((res) => {
            console.log(res.data.data)
            this.page_title = res.data.data.faq_headline
            this.faq_items = res.data.data.faq_items
          })
      }
    },
    created() {
      this.getFaqs()
    }
  }

```
```Notice that we predefined `page_title` as `FAQ` and then updated it with the API call to the FAQ content fields.

Define the ``:

```
```

  
    {{ page_title }}
    
      {{ faq.question }}
      {{ faq.answer }}
    
  

```
```Your displayed result should look something like this:

Now anyone on your team can update the values from the ButterCMS dashboard and the corresponding content in your app will automatically update.

### Example 3: Blog Posts

Last, we’ll tackle a blog engine for the app.

#### Step 1: Displaying Posts

We’ll start out by creating a blog route using `vue-router`. To display posts we create a simple `/blog` route in our app and fetch blog posts, as well as a `/blog/:slug` route to handle individual posts.

In `router/index.js`:

```
```
import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import BlogPost from '@/components/BlogPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/blog/',
      name: 'blog-home',
      component: BlogHome
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: BlogPost
    }
  ]
})
```
```#### Step 2: Creating the Blog Homepage

To create your blog homepage that displays the most recently published posts, you’ll create a Vue component for the blog home in a new `components/BlogHome.vue` file:

```
```

  import { butter } from '@/buttercms'
  export default {
    name: 'blog-home',
    data() {
      return {
        page_title: 'Blog',
        posts: []
      }
    },
    methods: {
      getPosts() {
        butter.post.list({
          page: 1,
          page_size: 10
        }).then((res) => {
          // console.log(res.data)
          this.posts = res.data.data
        })
      }
    },
    created() {
      this.getPosts()
    }
  }

```
```If you have been following along with the previous examples, then you may start to see a pattern here and know that you need to display the content by defining the template and calling the fields in the same component file:

```
```

  
      {{ page_title }}
      
      
        
          
            
              
              
              
              
            
            {{ post.title }}
            {{ post.summary }}
          
        
      
  

```
```Assuming your fields match the example, your blog homepage should look something like this:

#### Step 3: Creating a Blog Post

Next, create a new `components/BlogPost.vue` file which will be your view for a single post:

```
```

  import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            // console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    created() {
      this.getPost()
    }
  }

```
```You may have guessed it, but now you need to define the template and make a call to the blog post content fields:

```
```

  
    {{ post.data.title }}
    {{ post.data.author.first_name }} {{ post.data.author.last_name }}
    

    
      {{ post.meta.previous_post.title }}
    
    
      {{ post.meta.next_post.title }}
    
  

```
```Again, assuming you're using similar fields as the example, this is what you might expect to see:

#### Step 4: Handling Blog Post Routes

At this point, your app is pulling all blog posts, allowing you to navigate to individual posts. But, you will notice the next/previous buttons in the browser aren’t working. Why? When using routes with `params`, the same component instance will be reused when the user navigates from `/blog/foo` to `/blog/bar`.

Since both routes render the same component, this is more efficient than destroying the old instance and creating a new one. But, this also means that the lifecycle hooks of the component will not be called.

There is a fix for this. We need to watch the `$route` object and call `getPost()` when the route changes. To do this, update the script section in `components/BlogPost.vue`:

```
```

  import { butter } from '@/buttercms'
  export default {
    name: 'blog-post',
    data() {
      return {
        post: {}
      }
    },
    methods: {
      getPost() {
        butter.post.retrieve(this.$route.params.slug)
          .then((res) => {
            // console.log(res.data)
            this.post = res.data
          }).catch((res) => {
            console.log(res)
          })
      }
    },
    watch: {
      $route(to, from) {
        this.getPost()
      }
    },
    created() {
      this.getPost()
    }
  }

```
```At this point, your app has a working blog that can be updated easily from the CMS dashboard.

You can also use APIs to filter and feature content on your blog with categories, tags, and authors. In fact, there’s a lot you can do with an API in terms of managing different aspects of your blog, including RSS, Atom feeds, sitemap markup, and content styling with CSS.

### API or GIT Based Approach

A Git-based approach to managing content

The premise is that you can leverage modern frontend tooling to create lighter, faster, more secure sites. And FYI, this isn't fringe developer extravaganza. Entire organizations like Smashing Magazine, Sequoia Capital & Mailchimp have migrated to frontend tooling. 
One of the first implications here is decoupling the building & hosting of your site. You can "pre-bake" and pre-build assets and then serve them on Content Delivery Networks. This effectively frees your content from the database/templates imperatives of traditional CMS, like Wordpress and Drupal.
However, the content itself still needs to live somewhere. That's where GIT comes in.
To create your site, you can use a static site generator like Spike, the one implemented as standard by WebriQ or a JS framework like Ember, Angular, React, or Vue. It doesn't matter. The point is you store the site's content in a GitHub repository, where most of your pages can be simple Markdown files. Then, you deploy & host that static content on a content delivery delivery network of your choice. 
WebriQ CMS is a Git-based, open source Ember CMS. 
The CMS is part of an [APP](https://app.webriq.com) to build, manage, update and host sites build with unique front end tools. With WebriQ CMS your content lives in Github and the CMS leverages Github's API to interact directly with your content repository. The WebriQ API allows the CMS to interact directly with the Github repository. It loops editors directly in to Github workflow. 
You can see our Git based CMS in action on [WEBRIQ CMS DEMO](https://app.webriq.com/help/page/demo/howto)

 



