---
layout: post
title: Classical Controllers (P, I, D)
date: 2020-02-21 17:00:16
description: In this post, we will discuss the common types of controllers used in classical control systems.
tags: controls
categories: post
toc:
  sidebar: left

---

## Controllers

Every plant has certain characteristics and will behave a certain way when provided a unit step input. For example, the plant,

$$
     \frac{Y(s)}{R(s)} = \frac{0.5}{0.1s + 1}
     \label{eqn:example5}
$$

will have a steady state value of \(0.5\) (because \(K=0.5\)) for unit step input.

If, instead, we want to have a steady state value of \(1\) for the same unit step input, we can't always change the plant itself. Therefore, we use a controller instead to "control" the output of the system. The controller is placed in cascade (in series) with the plant as shown below.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/controller.png" alt="Controller and plant in open-loop configuration." width="600px">
    <br>
    <em>Figure 1: Controller and plant in open-loop configuration.</em>
</p>

To change the system in Equation \ref{eqn:example5}, so that the output is \(1\) when input is a unit step function, we can multiply the plant with \(2\). The controller, therefore, is just a constant gain of value \(2\). This type of controller is called a "Proportional controller", and is the simplest type of controller that can be used.

### Proportional \(P\) controller

As mentioned before, \(P\) controller is the simplest type of controller that can be used. The output of a Proportional controller is proportional to the input to the controller. It is just a gain (can be positive or negative and can be a fraction) that is multiplied to the plant to modify its system response. A real-world example would be the use of an amplifier to amplify the sound from a speaker by a fixed amount. Figure \ref{fig:withoutController} shows the output of the system in Equation \ref{eqn:example5} in open-loop configuration. The steady state value is \(0.5\) as expected.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/withoutController.PNG" alt="Unit step response of the system." width="400px">
    <br>
    <em>Figure 2: Unit step response of the system.</em>
</p>

However, when a Proportional controller with gain \(2\) is used, the steady state values changes to \(1\), as shown in Figure \ref{fig:withController}.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/withController.PNG" alt="Unit step response of the system with Proportional controller." width="400px">
    <br>
    <em>Figure 3: Unit step response of the system with Proportional controller.</em>
</p>

### Integral \(I\) controller

The output of an Integral controller is proportional to the integral of the input to the controller. In terms of a closed-loop system, as shown in Figure \ref{fig:integralController}, the output of the \(I\) controller is the integral of the error term. Integral controllers are useful because they cause the system to have zero steady state error. Integral controllers will also increase the type of a system i.e., a first-order system will become a second-order system, and a second-order system will become a third-order system, and so on.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/integralController.PNG" alt="Closed-loop system with a PI controller." width="400px">
    <br>
    <em>Figure 4: Closed-loop system with a PI controller.</em>
</p>

### Derivative \(D\) controller

The output of a Derivative controller is proportional to the derivative of the input to the controller. In terms of a closed-loop system, the output of the \(D\) controller is the derivative of the error term. Derivative controllers are never used on their own and are usually paired with a \(P\) controller to make a \(PD\) controller, or a \(PI\) controller to make a \(PID\) controller. Derivative controllers are useful because they act as a dampener on the control effort. If the system is oscillating a lot, then the introduction of a derivative controller can damp those oscillations.

## Example of a PI controller

Let us suppose that the plant we need to control is a first-order system with the following transfer function,

$$
\frac{Y(s)}{R(s)} = \frac{2}{4s + 2}
$$

We can calculate \(K=1\) and \(\tau=2\) as follows:

$$
\frac{Y(s)}{R(s)} = \frac{2}{4s + 2} = \frac{\frac{2}{2}}{\frac{4s}{2} + \frac{2}{2}} = \frac{1}{2s + 1}
$$

The closed-loop unit step response is shown in Figure \ref{fig:exampleSystem}.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/exampleSystem.PNG" alt="The closed-loop unit step response of the system." width="400px">
    <br>
    <em>Figure 5: The closed-loop unit step response of the system.</em>
</p>

As you can see, the system reaches a steady state around \(6s\). But what if you want the system to reach steady state at or less than \(2s\)? And the maximum overshoot you can tolerate is \(5\%\)? These are called system requirements and are chosen by you, or are given to you by someone who wants you to design the controller. Let's design a PI controller that will give us the desired performance.

The system requirements are,

- Percentage Overshoot \((PO) \leq 5\%\)
- 2\% Settling time \((t_s) \leq 3s\)

First of all, we need to create a block diagram of the system. The block diagram for a PI controller is shown in Figure \ref{fig:PIsystem1}.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/PIsystem1.PNG" alt="The PI controller with the plant." width="400px">
    <br>
    <em>Figure 6: The PI controller with the plant.</em>
</p>

This block diagram can be reduced in the following steps to get the transfer function in terms of variables \(P\) and \(I\) which are the proportional and integral gains respectively.

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/PIsystem2.PNG" alt="Step 1 of reducing the block diagram." width="400px">
    <br>
    <em>Figure 7: Step 1 of reducing the block diagram.</em>
</p>

<p align="center">
    <img src="/assets/img/posts/2020-02-21-controls-controllers/PIsystem3.PNG" alt="Step 2 of reducing the block diagram." width="400px">
    <br>
    <em>Figure 8: Step 2 of reducing the block diagram.</em>
</p>

Using the closed-loop formula,

$$
\frac{G}{1+GH}
$$

where \(G = \frac{2(Ps+I)}{4s^2 + 2s}\), and \(H=1\), the transfer function is,

$$
\frac{Y(s)}{R(s)} = \frac{2(Ps+I)}{4s^2 + 2s + 2(Ps+I)}
$$

$$
\frac{Y(s)}{R(s)} = \frac{2(Ps+I)}{4s^2 + 2s (1 + P) + 2I}
$$

Divide the numerator and the denominator by \(4\) to make the coefficient of the highest power of \(s\) in the denominator equal to \(1\) (This will come in handy later).

$$
    \frac{Y(s)}{R(s)} = \frac{0.5(Ps+I)}{s^2 + 0.5s (1 + P) + 0.5I}
    \label{eqn:calculatedTF}
$$

Now that we have the transfer function in terms of \(P\) and \(I\), we need to calculate the desired \(\zeta\) and \(\omega_n\) of the system. These can be computed based on the system requirements.

### Calculating \(\zeta\)

$$
\zeta = \sqrt{
    \frac{\ln^2{(\frac{PO}{100})}}
        {\pi^2 + \ln^2{(\frac{PO}{100})}}
}
$$

Since \(PO \leq 5\%\),

$$
\zeta \geq \sqrt{
    \frac{\ln^2{(\frac{5}{100})}}
        {\pi^2 + \ln^2{(\frac{5}{100})}}
}
$$

$$
\zeta \geq 0.6901
$$

### Calculating \(\omega_n\)

$$
t_s \geq \frac{-\ln{(0.02)}}{\omega_n \zeta}
$$

Since 2\% \(t_s \leq 3s\), and the calculated \(\zeta \geq 0.6901\),

$$
\omega_n \geq \frac{-\ln{(0.02)}}{t
