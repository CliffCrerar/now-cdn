# The solution description

## Introduction

The solution in the diagram above might seem like there is a lot going on. However; considering all of the on premise infrastructure already running. Looking at the architecture diagram above these are all the items in grey, these include the server, the external drive where backups reside at the moment as well as the firewall and internet gateway. Mostly all of the infrastructure items in the left. 

>I hope I had made a fair assumption here, these are usually minimally the items at play in a normally operating business. Note I did not consider infrastructure that is irrelevant tot he requirement, unless there is something I am unaware of. 

Also looking at the above it might seem like it could  end up costing you a fortune to implement and maintain. I assure you that the cloud is cheap as chips and it will not be as bad as you think. In contrast I must concede that I have not yet worked out a costing model for this, but I can also say that if it is going to be a bit pricey it will only cost that at implementation time.

Then there is security, as this is always the first thing on that comes to mind when considering moving to a cloud solution, with paranoia you think that you are putting your privacy at risk. In reality this is the complete opposite. With a tech giant like AWS, your data will be more safe and secure than ever before and the only way your data could potentially fall into the hands of some troll or someone with real malicious intent is if there is negligence in failing to keep your cloud access credentials safeguarded. I can assure you that this is the case because this is what happened to me.

## What is a hybrid cloud?

Merely a term that references a situation where any physical infrastructure or desktop software is integrated with cloud infrastructure or software. The technical term for cloud computing resources, meaning anything that will resemble a tangible part of any business network in the physical space, is usually referred to as HaaS (Hardware as a service) and when scaled up to a corporate level is known as IaaS (Infrastructure as a service). It is named like this , as a service, because it is not something you can acquire, you can only lease it. There is also Software as a Service and Plantform as a Service [](TODO:) 

## The general layout

As I am sure you have noticed that the left side is your office productivity network, the right side is the cloud environment which will also be covered in this document. And in the middle is the public transport layer that the data must traverse to get to reach the cloud, travelling on the public internet over [http](http) is how most web traffic is transported, in modern times where people in general are more aware of security, https has rather become the preferred manner of moving data around the web as this is a protocol that is asymmetrically encrypted with 2 security keys, a public and a private key and is exactly the method of transport that our solution will use. If you would like to know more on asymmetric encryption please see [this link](TODO:)

## The components

### On premise

>I will not dive into the components that you see in your office everyday. 

The one item, you are probably wondering about, is the if whether you have a firewall. Corporate grade firewalls are usually devices on their own but these days any machine running windows will have a firewall as well as your internet gateway or wifi-router has a industry standard firewall out of the box and to save cost we will make use of these to make sure that your data up until the point where it enters the internet mainstream will remain secure. 

The only 2 components that will most probably not be installed on your network are the AWS Storage Gateway and the private encryption key:

![Onsite new resources](https://now-static-demos-dfseyqojm.now.sh/png/onsitenew-recources.png) {style="text-align:center"}

The **AWS storage gateway** is as the the name suggest, the software service that must be installed in the office server, this is what will allow the local network to connect to the cloud network or virtual private network (next sections will elaborate more on this). 

The **encryption key** is the private encryption key that will be used to encrypt the data before sending it to the cloud backup storage. 
 


