---
title: 'NYU HPC Setup'
date: 2023-12-21
permalink: /posts/2019/07/nyu-hpc-setup/
excerpt_separator: <!--more-->
toc: true
tags:
  - hpc
  - nyu
---

This is a guide for logging into the NYU HPC cluster and streamlining that process.
<!--more-->

The usual way to access the NYU Greene HPC cluster is via SSH. This information is taken from the official [NYU HPC website](https://sites.google.com/nyu.edu/nyu-hpc/hpc-systems/greene/getting-started?authuser=0#h.niitlb309yhv).

- Simply open a terminal (Linux, Mac) or the Command Prompt (Windows 10) and enter the commands:

  ```
  ssh <netid>@greene.hpc.nyu.edu ## you can skip this step if you  are on the NYU Network or using the NYU VPN
  ssh <netid>@login.greene.hpc.nyu.edu
  ```
  where `<netid>` is your NYU NetID. You will be prompted for your NYU NetID password. Enter it and you will be logged into the login node.

SSH keys can be set up as follows so that you don't have to enter your password every time:

- On your local machine, generate a public/private key pair by running the command `ssh-keygen -t rsa` in a terminal. You will be prompted for a location to save the key pair. The default location is `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub` for the private and public keys, respectively. You can just press enter to accept the default location.

- Copy the public key to the login node by running the command `ssh-copy-id <netid>@login.greene.hpc.nyu.edu`. You will be prompted for your password. Enter it and the public key will be copied to the login node.

- Now you can log into the login node without entering your password by running the command `ssh <netid>@login.greene.hpc.nyu.edu`.

- As a final step, you can add the following lines to your `~/.ssh/config` file to make logging in easier:

  ```
  # Host for ssh'ing into the Greene cluster when on the NYU network
  Host greene
    HostName greene.hpc.nyu.edu
    User <netid>

  # Host for 'tunneling' into the hpc when logging in from outside of the NYU network (i.e. at home)
  Host hpcgwtunnel
    HostName gw.hpc.nyu.edu
    ForwardX11 no
    LocalForward 8025 greene.hpc.nyu.edu:22
    User <netid>

  # Host for sshing into the greene cluster when tunneled in from outside of the NYU network (i.e. at home)
  Host greenetunnel
    HostName localhost
    Port 8025
    ForwardX11 yes
    User <netid>
  ```

  Now you can log into the login node by running the command `ssh greene`.
