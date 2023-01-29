# Bazarchic Assesment

This program provides a client to fetch and display posts from [GraphQL Zero API](https://graphqlzero.almansi.me/api)

*Features:*
- Posts infinite scroll
- Implements SSR for the first page rendering
- Revalidating SSR datas every 10 minutes
  

## Installation

**0. Requirements**

First of all, you must have *NodeJS* and *yarn* installed on your machine.

**1. Environment variables**

This program need some environment variables, that you can change in the *.env* file, in the root of the program.

Here are the specified environment variables:

| name | type | description |
|--|--|--|
| `NEXT_PUBLIC_POST_API_ENDPOINT` | string | The GraphQL API URL to fetch Posts |
| `NEXT_PUBLIC_DEFAULT_PAGE_SIZE` | number | Post page size, by default 10 |

  It's not recommended to change `NEXT_PUBLIC_POST_API_ENDPOINT` variable. Nevertheless if you want to change it, your API must respect the same constraints as the [GraphQL Zero API](https://graphqlzero.almansi.me/api), especially the `post` query and pagination query options 

**2. Install packages**

In your terminal, run the following:


	yarn install

## Run development server

**Once** you have installed the application, you can run the development server with the following command:

	yarn dev

***Enjoy !***