# Shifra Web App ( Front End )

[![Build Status](https://api.travis-ci.org/ShifraIO/shifra-frontend.svg?branch=master)](https://travis-ci.org/ShifraIO/shifra-frontend)

## About

### ShifraIO

[ShifraIO][urlMaster] will use mobile technology to provide refugees with information concerning their most pressing reproductive health needs.

mAdapt will also collect anonymous data that can help inform service delivery and policy development by mapping what services are being sought, in what region, and how often.

### This repo

This repository contains the code for the web app front end written in React using [`create-react-app`](https://github.com/facebookincubator/create-react-app).

## Contributing

## Deployment

Continuous integration and deployment are provided through [Travis CI](https://travis-ci.org/). This happens automatically through the [.travis.yml](.travis.yml) file.

Travis currently runs tests, compiles down to optimised JS, and sends these to an S3 bucket.

[Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model is used in this project. And only two branches (master and develop) are deployed. If a push was made in the develop branch, only the develop branch is built and deployed; This statement can also be said about the master branch. The branch will not deploy if it does not build, so check `npm run build` locally and fix any errors before merging a hotfix or feature branch to develop or master.

The deployed website for both the master branch and the develop branch can be viewed in links provided in the table below.

| Master                         | Develop                    |
| -------------                  |:-------------:             |
| [Website Link][urlMaster]      | [Website Link][urlDevelop] |

[urlMaster]: http://shifra.io/
[urlDevelop]:http://shifra-frontend-develop.s3-website-ap-southeast-2.amazonaws.com
