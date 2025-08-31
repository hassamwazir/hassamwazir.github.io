---
layout: post
title: The z-domain transfer function and the Bilinear transformation.
date: 2020-02-23 18:40:16
description: Understanding the z-domain transfer function and the bilinear transformation.
tags: controls
categories: post
toc:
  sidebar: left
---

## Understanding mapping

The concept of mapping is used to transform one domain into another. It can be thought of as a value living in one space being transformed into another space. For example, the mapping of a point in the Cartesian plane to a point in the polar plane is a transformation from one space to another. In the context of control systems, the mapping of a transfer function from the `s-domain` to the `z-domain` is a transformation from the continuous-time domain to the discrete-time domain.

This warping of the space is non-linear and the Bilinear transformation is used to account for this non-linearity.

---

## Bilinear transformation from the s-domain to the z-domain

Assume we have a first-order system with a transfer function of the form:

\begin{equation}
G(s) = \frac{1}{s + 1}
\end{equation}

The z-domain transfer function is obtained by replacing $$s$$ with $$ \left(\frac{z - 1}{T}\right) $$, where $$T$$ is the sampling time. Let's asume that a sampling time of $$1$$ KHz was and the cut-off frequency $$\omega_c$$ of $$10$$ Hz`.

Then, the time period $$T$$ is given by:
\begin{equation}
T = \frac{1}{f_s} = \frac{1}{1000} = 0.001
\end{equation}

The transfer function is given as follows:
\begin{equation}
H(j\omega) = \frac{\omega_c}{s + \omega_c}
\end{equation}

The transformation from s-domain to the z-domain is non-linear. To account for this non-linearity, the cut-off frequency is pre-warped and the resulting frequency is denoted by $$\omega_p$$.

\begin{equation}
\omega_p = \frac{2}{T} \tan\left(\frac{\omega_c T}{2}\right)
\end{equation}

$$
    \omega_p = 62.853\, \text{rad/s}
$$

Once the frequency has been pre-warped, the system can undergo Bilinear transformation using the relationship between $$s$$ and $$z$$.

$$
H(z) = \frac{\omega_p}{s + \omega_p} \bigg|_{s = \frac{2}{T} \frac{z-1}{z+1}}
$$

Here, we evaluate the transfer function at $$s = \frac{2}{T} \frac{z-1}{z+1}$$. In other words, we replace $$s$$ with $$\frac{2}{T} \frac{z-1}{z+1}$$.

$$
H(z) = \frac{\omega_p}{\frac{2}{T} \frac{z-1}{z+1} + \omega_p}
$$

$$
H(z) = \frac{\omega_p (z + 1)}{2000(z - 1) + \omega_p (z + 1)}
$$

$$
H(z) = \frac{62.853z + 62.853}{2000z - 2000 + 62.853z + 62.853}
$$

$$
H(z) = \frac{62.853z + 62.853}{2062.853z - 1937.147}
$$

$$
H(z) = \frac{0.031z + 0.031}{z - 0.939} = \frac{0.031z^{-1} + 0.031}{1 - 0.939z^{-1}}
$$

$$
\frac{Y(z)}{U(z)} = \frac{0.031z^{-1} + 0.031}{1 - 0.939z^{-1}}
$$

$$
Y(z)(1 - 0.939z^{-1}) = U(z)(0.031z^{-1} + 0.031)
$$

Here, the $$z^{-1}$$ operator is the delay operator. The equation can be rewritten as:

$$
Y[n] - 0.939 Y[n - 1] = 0.031 (U[n] + U[n - 1])
$$

where $$Y[n]$$ is the output at time $$n$$ and $$U[n]$$ is the input at time $$n$$. The equation can be rewritten as:

\begin{equation}
\label{eq:diff_eq}
Y[n] = 0.939 Y[n - 1] + 0.031 (U[n] + U[n - 1])
\end{equation}

Equation \eqref{eq:diff_eq} is called the difference equation. The difference equation is used to implement the system in a digital computer. now the system can be implemented on a digital device such as a microcontroller.

Here is an example implementation in Python:

{% highlight python linenos %}
N = 10 # Number of samples

    # Initialize arrays for Y and U
    Y = [0] * N  # List to store Y values, initialized to 0
    U = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  # Example input list U

    # Calculate Y values based on the given equation
    for n in range(1, N):
        Y[n] = 0.939 * Y[n - 1] + 0.031 * (U[n] + U[n - 1])

    # Print the resulting Y values
    for n in range(N):
        print(f"Y[{n}] = {Y[n]}")

{% endhighlight %}
